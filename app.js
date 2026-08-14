/* ==========================================================================
   DevQuest — app.js
   Controlador de gamificación, persistencia (localStorage) y motor de
   ejercicios interactivos. JavaScript vainilla ES6+, sin dependencias.
   ========================================================================== */

'use strict';

/* ==========================================================================
   1. PERSISTENCIA (localStorage)
   ========================================================================== */
const STORAGE_KEY = 'devquest_progress_v1';

function defaultProgress() {
  return {
    xp: 0,
    streak: 0,
    lastPlayDate: null,      // 'YYYY-MM-DD' del último día en que se completó un nivel
    completedLevels: [],     // ids de niveles completados
    perfectLevels: [],       // ids de niveles completados sin ningún fallo
    badges: []                // ids de insignias desbloqueadas
  };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    return { ...defaultProgress(), ...JSON.parse(raw) };
  } catch (err) {
    console.warn('DevQuest: no se pudo leer el progreso guardado, se inicia uno nuevo.', err);
    return defaultProgress();
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.warn('DevQuest: no se pudo guardar el progreso (¿localStorage lleno o deshabilitado?).', err);
  }
  // Si hay sesión iniciada, cada guardado local también sube a Firestore
  // (ver sección 11 más abajo). pushProgressToCloud comprueba por sí misma
  // si Firebase/la sesión están disponibles antes de hacer nada.
  pushProgressToCloud(progress);
}

/* ==========================================================================
   2. CONTENIDO: módulos y niveles
   Los niveles de cada módulo viven en content-html.js / content-css.js /
   content-js.js (cargados antes que este script) como HTML_LEVELS,
   CSS_LEVELS y JS_LEVELS, para mantener este archivo manejable.
   ========================================================================== */
const MODULES = [
  { id: 'html', title: 'HTML5', icon: '📄', levels: HTML_LEVELS },
  { id: 'css', title: 'CSS3', icon: '🎨', levels: CSS_LEVELS },
  { id: 'js', title: 'JavaScript', icon: '⚡', levels: JS_LEVELS },
  { id: 'csharp', title: 'C#', icon: '🔷', levels: CSHARP_LEVELS },
  { id: 'mysql', title: 'MySQL', icon: '🗄️', levels: MYSQL_LEVELS }
];

/* "Desarma tu PC" no es un módulo de lenguaje (no aparece en el dashboard
   como bloque de niveles), pero su finalización se registra igual que
   cualquier nivel para que sume XP, cuente para el progreso total y se
   sincronice con la nube sin necesitar ningún sistema nuevo. */
const HARDWARE_LEVELS = [
  { id: 'hardware-1', title: 'Desarma tu PC', xp: 200 },
  { id: 'hardware-2', title: 'Misiones de diagnóstico', xp: 180 }
];


/* ==========================================================================
   3. INSIGNIAS (BADGES)
   ========================================================================== */
function isModuleCompleted(moduleId, progress) {
  const module = MODULES.find((m) => m.id === moduleId);
  return module.levels.every((l) => progress.completedLevels.includes(l.id));
}
function areAllModulesCompleted(progress) {
  return MODULES.every((m) => isModuleCompleted(m.id, progress));
}

const BADGES = [
  { id: 'first-step', name: 'Primeros pasos', desc: 'Completa tu primer nivel', icon: '🎯', check: (p) => p.completedLevels.length >= 1 },
  { id: 'perfect-level', name: 'Precisión perfecta', desc: 'Completa un nivel sin fallar ninguna pregunta', icon: '💯', check: (p) => p.perfectLevels.length >= 1 },
  { id: 'html-master', name: 'Maestro HTML', desc: 'Completa el módulo de HTML5', icon: '📄', check: (p) => isModuleCompleted('html', p) },
  { id: 'css-master', name: 'Maestro CSS', desc: 'Completa el módulo de CSS3', icon: '🎨', check: (p) => isModuleCompleted('css', p) },
  { id: 'js-master', name: 'Maestro JS', desc: 'Completa el módulo de JavaScript', icon: '⚡', check: (p) => isModuleCompleted('js', p) },
  { id: 'csharp-master', name: 'Maestro C#', desc: 'Completa el módulo de C#', icon: '🔷', check: (p) => isModuleCompleted('csharp', p) },
  { id: 'mysql-master', name: 'Maestro MySQL', desc: 'Completa el módulo de MySQL', icon: '🗄️', check: (p) => isModuleCompleted('mysql', p) },
  { id: 'hardware-tech', name: 'Técnico de hardware', desc: 'Desarma una PC completa, pieza por pieza', icon: '🔧', check: (p) => p.completedLevels.includes('hardware-1') },
  { id: 'hardware-diagnostician', name: 'Detective de hardware', desc: 'Resuelve todas las misiones de diagnóstico', icon: '🩺', check: (p) => p.completedLevels.includes('hardware-2') },
  { id: 'streak-3', name: 'Racha de 3 días', desc: 'Practica 3 días seguidos', icon: '🔥', check: (p) => p.streak >= 3 },
  { id: 'streak-7', name: 'Racha de 7 días', desc: 'Practica 7 días seguidos', icon: '🔥', check: (p) => p.streak >= 7 },
  { id: 'full-stack', name: 'Full Stack Junior', desc: 'Completa todos los módulos de DevQuest', icon: '🚀', check: (p) => areAllModulesCompleted(p) }
];

/* ==========================================================================
   4. ESTADO Y NAVEGACIÓN
   ========================================================================== */
const state = { progress: null, currentLevelId: null, user: null, firebaseReady: false };
let pendingBadgeToasts = [];
let feedbackTimer = null;

function getAllLevels() {
  return MODULES.flatMap((m) => m.levels).concat(HARDWARE_LEVELS);
}
function findLevel(levelId) {
  for (const module of MODULES) {
    const level = module.levels.find((l) => l.id === levelId);
    if (level) return { level, module };
  }
  return null;
}
function isLevelUnlocked(levelId) {
  // El desbloqueo es independiente por módulo (lenguaje): cada uno tiene su
  // propio nivel 1 siempre abierto, sin depender de terminar los demás. Así
  // se puede elegir cualquier lenguaje y empezarlo cuando se quiera.
  const found = findLevel(levelId);
  if (!found) return false;
  const idx = found.module.levels.findIndex((l) => l.id === levelId);
  if (idx <= 0) return true;
  return state.progress.completedLevels.includes(found.module.levels[idx - 1].id);
}
function computeUserLevel(xp) {
  return Math.floor(xp / 150) + 1;
}
const LEVEL_TYPE_LABELS = {
  'fill-tags': 'Completar código',
  'order-builder': 'Constructor',
  quiz: 'Desafío',
  'flexbox-align': 'Flexbox'
};

function goTo(screenName) {
  document.querySelectorAll('#app-shell .screen').forEach((el) => el.classList.remove('is-active'));
  const target = document.getElementById('screen-' + screenName);
  if (target) target.classList.add('is-active');
  document.getElementById('btn-back').classList.toggle('hidden', screenName === 'path');
  window.scrollTo(0, 0);
}

function enterApp() {
  document.getElementById('screen-welcome').classList.remove('is-active');
  document.getElementById('screen-splash').classList.remove('is-active');
  document.getElementById('app-shell').classList.remove('hidden');
  renderDashboard();
  goTo('path');
}

/* ==========================================================================
   5. DASHBOARD / RUTA DE APRENDIZAJE
   ========================================================================== */
function updateHeaderStats() {
  const p = state.progress;
  document.getElementById('stat-streak').textContent = p.streak;
  document.getElementById('stat-level').textContent = computeUserLevel(p.xp);
  document.getElementById('stat-xp').textContent = p.xp;

  const all = getAllLevels();
  const pct = all.length ? Math.round((p.completedLevels.length / all.length) * 100) : 0;
  document.getElementById('course-progress-fill').style.width = pct + '%';
  document.getElementById('course-progress-bar').setAttribute('aria-valuenow', String(pct));
}

/* Con hasta 50 niveles por módulo, se agrupan en tramos plegables para que
   la ruta siga siendo fácil de recorrer. Los límites son índices 0-based
   dentro de module.levels; un módulo con menos niveles simplemente no
   renderiza los tramos que le queden vacíos. */
const LEVEL_TIERS = [
  { name: 'Básico', from: 0, to: 20 },
  { name: 'Intermedio', from: 20, to: 35 },
  { name: 'Avanzado', from: 35, to: 50 }
];

function renderLevelCard(level, index) {
  const progress = state.progress;
  const isComplete = progress.completedLevels.includes(level.id);
  const unlocked = isLevelUnlocked(level.id);
  let stateClass = 'is-locked';
  if (isComplete) stateClass = 'is-complete';
  else if (unlocked) stateClass = 'is-current';

  const nodeContent = isComplete ? '✓' : unlocked ? String(index + 1) : '🔒';

  return `
    <button class="level-card ${stateClass}" data-level-id="${level.id}" ${unlocked ? '' : 'disabled aria-disabled="true"'}>
      <div class="level-node">${nodeContent}</div>
      <div class="level-info">
        <div class="level-title">${level.title}</div>
        <div class="level-meta">
          <span class="level-type-tag">${LEVEL_TYPE_LABELS[level.type] || 'Reto'}</span>
          <span>+${level.xp} XP</span>
        </div>
      </div>
      <div class="level-chevron">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"></polyline></svg>
      </div>
    </button>`;
}

function renderDashboard() {
  const progress = state.progress;
  const allLevels = getAllLevels();
  document.getElementById('path-summary').textContent =
    `${progress.completedLevels.length} de ${allLevels.length} niveles completados`;

  const container = document.getElementById('modules-container');
  container.innerHTML = MODULES.map((module) => {
    const done = module.levels.filter((l) => progress.completedLevels.includes(l.id)).length;

    // Tramo que contiene el primer nivel sin completar: se abre por defecto.
    let currentIdx = module.levels.findIndex((l) => !progress.completedLevels.includes(l.id));
    if (currentIdx === -1) currentIdx = module.levels.length - 1;

    const tiersHtml = LEVEL_TIERS.map((tier) => {
      const tierLevels = module.levels.slice(tier.from, tier.to);
      if (tierLevels.length === 0) return '';

      const tierDone = tierLevels.filter((l) => progress.completedLevels.includes(l.id)).length;
      const isOpenTier = currentIdx >= tier.from && currentIdx < tier.to;
      const levelsHtml = tierLevels.map((level, iInTier) => renderLevelCard(level, tier.from + iInTier)).join('');

      return `
        <details class="tier-block" ${isOpenTier ? 'open' : ''}>
          <summary class="tier-summary">
            <span class="tier-name">${tier.name}</span>
            <span class="tier-progress">${tierDone}/${tierLevels.length}</span>
          </summary>
          <div class="levels-list">${levelsHtml}</div>
        </details>`;
    }).join('');

    return `
      <div class="module-block">
        <div class="module-header">
          <div class="module-icon">${module.icon}</div>
          <div>
            <div class="module-title">${module.title}</div>
            <div class="module-progress">${done}/${module.levels.length} niveles</div>
          </div>
        </div>
        ${tiersHtml}
      </div>`;
  }).join('');

  container.querySelectorAll('.level-card:not([disabled])').forEach((btn) => {
    btn.addEventListener('click', () => openLesson(btn.dataset.levelId));
  });

  updateHeaderStats();
}

function renderBadges() {
  const progress = state.progress;
  const container = document.getElementById('badges-container');
  container.innerHTML = BADGES.map((b) => {
    const unlocked = progress.badges.includes(b.id);
    return `
      <div class="badge-card ${unlocked ? '' : 'is-locked'}">
        <div class="badge-emoji">${b.icon}</div>
        <div class="badge-name">${b.name}</div>
        <div class="badge-desc">${b.desc}</div>
      </div>`;
  }).join('');
}

/* ==========================================================================
   5b. DESARMA TU PC — simulador interactivo de hardware
   Es un solo "nivel" especial (no forma parte de ningún módulo de lenguaje):
   una ilustración SVG de una PC abierta donde cada pieza se desarma en el
   orden correcto, con una explicación de qué es cada componente. Reutiliza
   el mismo sistema de XP/insignias/sincronización que el resto de la app
   llamando a finishLevel() con el nivel sintético HARDWARE_LEVELS[0].
   ========================================================================== */
const HARDWARE_STEPS = [
  {
    id: 'power-cable',
    title: 'Desconecta la corriente',
    icon: '🔌',
    description: 'Antes de abrir cualquier computadora, desconéctala de la corriente eléctrica. Trabajar con la fuente enchufada puede dañar los componentes o darte una descarga.',
    info: 'El cable de alimentación lleva corriente alterna (AC) desde el enchufe hasta la fuente de poder. Desconectarlo siempre es el primer paso de seguridad, incluso antes de tocar cualquier tornillo.'
  },
  {
    id: 'side-panel',
    title: 'Quita el panel lateral',
    icon: '🧰',
    description: 'La mayoría de los gabinetes tienen tornillos en la parte trasera que sujetan el panel lateral. Al quitarlos, el panel se desliza hacia atrás y se separa.',
    info: 'El panel lateral protege los componentes del polvo y golpes, y ayuda a dirigir el flujo de aire de los ventiladores dentro del gabinete.'
  },
  {
    id: 'cables',
    title: 'Desconecta los cables',
    icon: '🔗',
    description: 'Antes de sacar cualquier pieza, desconecta los cables de datos y de alimentación que van desde la fuente de poder hacia la placa madre y las unidades.',
    info: 'Los cables llevan energía (identificados normalmente en rojo, amarillo y negro) y datos —como los cables SATA— entre la fuente, la placa madre y los discos.'
  },
  {
    id: 'gpu',
    title: 'Quita la tarjeta gráfica',
    icon: '🎮',
    description: 'Suelta el seguro de la ranura PCIe y el tornillo que la sujeta al gabinete, y retírala con cuidado tirando hacia afuera.',
    info: 'La GPU (tarjeta gráfica) procesa las imágenes y los gráficos. Los modelos más potentes suelen ser grandes y tener varios ventiladores propios.'
  },
  {
    id: 'ram',
    title: 'Quita los módulos de RAM',
    icon: '💾',
    description: 'Abre los seguros a los costados de cada ranura de memoria; el módulo salta ligeramente hacia arriba y ya se puede retirar.',
    info: 'La RAM (memoria de acceso aleatorio) guarda temporalmente los datos que el procesador está usando en ese momento. Se borra por completo al apagar la PC.'
  },
  {
    id: 'storage',
    title: 'Quita el almacenamiento',
    icon: '💿',
    description: 'Desatornilla la bahía o desliza el seguro que sujeta el disco duro o SSD, y sácalo de su compartimento.',
    info: 'Aquí se guardan de forma permanente el sistema operativo, los programas y tus archivos, incluso cuando la computadora está apagada.'
  },
  {
    id: 'cooler',
    title: 'Quita el disipador del procesador',
    icon: '🌀',
    description: 'Desconecta el cable del ventilador y libera las palancas o tornillos que sujetan el disipador a la placa madre.',
    info: 'El disipador (cooler) evita que el procesador se sobrecaliente, transfiriendo su calor hacia un ventilador o un radiador.'
  },
  {
    id: 'cpu',
    title: 'Quita el procesador',
    icon: '🧠',
    description: 'Levanta la palanca del zócalo con cuidado y retira el procesador tomándolo por los bordes, sin tocar los contactos dorados.',
    info: 'El CPU (procesador) es el "cerebro" de la computadora: ejecuta las instrucciones de todos los programas que corren en ella.'
  },
  {
    id: 'psu',
    title: 'Quita la fuente de poder',
    icon: '⚡',
    description: 'Desatornilla la fuente de poder de la parte trasera del gabinete y sácala con cuidado; suele pesar más de lo que parece.',
    info: 'La fuente de poder (PSU) convierte la corriente alterna del enchufe en la corriente continua estable que necesitan los demás componentes.'
  },
  {
    id: 'motherboard',
    title: 'Quita la placa madre',
    icon: '🔲',
    description: 'Desatornilla los separadores que sujetan la placa al gabinete y retírala con cuidado sosteniéndola por los bordes.',
    info: '¡Listo! La placa madre (motherboard) es la que conecta entre sí a todos los demás componentes: CPU, RAM, GPU, almacenamiento y fuente de poder.'
  }
];

/* Misiones de diagnóstico: escenarios de fallas reales de PC, con
   explicación técnica después de cada respuesta. Reutilizan el motor de
   quiz genérico (renderQuizExercise) sin cambios — solo se le añadió
   soporte opcional para mostrar una explicación antes de avanzar. */
const HARDWARE_DIAGNOSTIC_MISSIONS = [
  {
    prompt: 'La computadora hace un pitido corto y repetitivo cada segundo al encenderla, y no muestra nada en pantalla. ¿Cuál es el diagnóstico más probable?',
    options: ['Un módulo de RAM mal asentado o dañado', 'El mouse está desconectado', 'El disco duro está lleno', 'El monitor necesita una actualización'],
    answer: 'Un módulo de RAM mal asentado o dañado',
    explanation: 'Antes de que haya video, la placa madre usa "beep codes" (pitidos del altavoz interno) para avisar errores durante el POST. Un patrón repetitivo casi siempre apunta a la memoria RAM: hay que volver a asentarla firmemente en su ranura o probar con otro módulo.'
  },
  {
    prompt: 'La PC enciende con normalidad (ventiladores girando, luces prendidas) pero el monitor se queda completamente negro, sin señal. ¿Qué revisarías primero?',
    options: ['El cable de video y que la GPU esté bien asentada en su ranura', 'El teclado', 'La contraseña de Wi-Fi', 'El navegador web'],
    answer: 'El cable de video y que la GPU esté bien asentada en su ranura',
    explanation: 'Si la PC arranca pero no hay imagen, el problema suele estar en la cadena de video: el cable (HDMI/DisplayPort), el puerto correcto (algunas placas tienen salida integrada Y tarjeta gráfica, hay que usar la de la GPU), o que la GPU se haya salido parcialmente de su ranura PCIe.'
  },
  {
    prompt: 'Durante juegos o tareas exigentes, la computadora se apaga sola de repente después de varios minutos, y luego enciende de nuevo sin problema. ¿Cuál es el diagnóstico más probable?',
    options: ['Sobrecalentamiento (cooler sucio o pasta térmica seca)', 'Un virus en el navegador', 'El teclado está fallando', 'Falta actualizar el sistema operativo'],
    answer: 'Sobrecalentamiento (cooler sucio o pasta térmica seca)',
    explanation: 'Cuando el CPU o la GPU superan su temperatura límite, el sistema se apaga de golpe como protección (thermal shutdown). Las causas típicas son polvo acumulado en el disipador, ventiladores que dejaron de girar bien, o pasta térmica reseca que ya no transmite el calor.'
  },
  {
    prompt: 'Aparece una pantalla azul (BSOD) con un código de error distinto cada vez que ocurre, sin un patrón claro. ¿Qué es lo primero que deberías sospechar?',
    options: ['Un módulo de RAM defectuoso', 'El mouse es inalámbrico', 'La impresora está apagada', 'El monitor es muy viejo'],
    answer: 'Un módulo de RAM defectuoso',
    explanation: 'Cuando los códigos de error de un BSOD son inconsistentes (cambian cada vez), es una señal clásica de memoria RAM defectuosa: distintos programas usan distintas direcciones de memoria, así que fallan de formas distintas. Un test de memoria (como MemTest86) confirma el diagnóstico.'
  },
  {
    prompt: 'El disco duro mecánico (HDD) empezó a hacer un clic repetitivo ("click of death") y el sistema tarda mucho en leer archivos. ¿Cuál es la acción más urgente?',
    options: ['Hacer una copia de seguridad de los datos inmediatamente', 'Formatear el disco para que funcione más rápido', 'Ignorarlo, es normal en discos duros', 'Actualizar los drivers de audio'],
    answer: 'Hacer una copia de seguridad de los datos inmediatamente',
    explanation: 'Ese chasquido es un síntoma clásico de falla mecánica del cabezal de lectura del disco duro. El disco puede dejar de responder en cualquier momento, así que lo prioritario es salvar los datos antes de intentar cualquier otra cosa (el disco en sí probablemente ya no se pueda reparar).'
  },
  {
    prompt: 'Ningún dispositivo USB funciona (ni mouse, ni teclado, ni pendrives), y probaste en varios puertos distintos con el mismo resultado. ¿Qué es lo más probable?',
    options: ['Un problema del controlador USB de la placa madre o de la fuente de poder', 'El sistema operativo nunca tuvo soporte para USB', 'Los cables de todos los dispositivos se rompieron a la vez', 'Falta instalar un navegador'],
    answer: 'Un problema del controlador USB de la placa madre o de la fuente de poder',
    explanation: 'Que falle un solo puerto sugiere un cable o puerto dañado, pero que fallen TODOS a la vez apunta a algo más central: el controlador USB integrado en la placa madre, un problema de energía de la fuente de poder, o incluso una configuración de la BIOS que deshabilitó los puertos.'
  },
  {
    prompt: 'Al presionar el botón de encendido no pasa absolutamente nada: ni luces, ni ventiladores, ni ningún sonido. ¿Qué revisarías primero?',
    options: ['El interruptor de la fuente de poder y que el cable esté bien enchufado', 'La tarjeta gráfica', 'El navegador de internet', 'Los drivers de la impresora'],
    answer: 'El interruptor de la fuente de poder y que el cable esté bien enchufado',
    explanation: 'Cuando la PC no da ninguna señal de vida, lo más probable es que no esté llegando corriente: revisar que el interruptor trasero de la fuente de poder esté en "I" (encendido), que el cable esté bien conectado en ambos extremos, y probar el enchufe con otro aparato.'
  },
  {
    prompt: 'La PC enciende, pero se queda en una pantalla negra con el mensaje "No bootable device found". ¿Cuál es el diagnóstico más probable?',
    options: ['No detecta el disco de arranque (cable suelto, disco dañado o boot order mal configurado)', 'La tarjeta de sonido está desconectada', 'El monitor no admite alta resolución', 'El teclado tiene una tecla pegada'],
    answer: 'No detecta el disco de arranque (cable suelto, disco dañado o boot order mal configurado)',
    explanation: 'Ese mensaje significa que la placa madre terminó el POST correctamente pero no encontró ningún disco con un sistema operativo instalado para arrancar. Puede ser un cable SATA/de energía suelto, un disco dañado, o que el orden de arranque (boot order) en la BIOS apunte a un dispositivo equivocado.'
  },
  {
    prompt: 'El ventilador de la PC suena muy fuerte todo el tiempo, incluso cuando la computadora está en reposo sin hacer nada exigente. ¿Qué es lo más probable?',
    options: ['Acumulación de polvo o una mala curva de ventiladores por sobrecalentamiento base', 'El teclado está mal configurado', 'Es completamente normal y no indica ningún problema', 'Falta una actualización del navegador'],
    answer: 'Acumulación de polvo o una mala curva de ventiladores por sobrecalentamiento base',
    explanation: 'Un ventilador ruidoso en reposo suele indicar que el sistema ya está más caliente de lo normal incluso sin carga (por polvo acumulado en el disipador o mala ventilación del gabinete), o que la curva de ventiladores está configurada de forma demasiado agresiva.'
  },
  {
    prompt: 'Al encender la computadora notas un olor a quemado. ¿Cuál es la acción correcta?',
    options: ['Apagarla y desconectarla de inmediato', 'Seguir usándola, probablemente se pase solo', 'Subir el volumen para no notarlo', 'Reiniciar el sistema operativo'],
    answer: 'Apagarla y desconectarla de inmediato',
    explanation: 'Un olor a quemado es una señal de alarma seria: puede ser un componente electrónico (capacitor, VRM, fuente de poder) fallando. Lo correcto es apagar y desconectar la PC de inmediato para evitar un daño mayor o un riesgo de incendio, y revisar el interior antes de volver a encenderla.'
  },
  {
    prompt: 'En los juegos aparecen colores distorsionados, líneas o figuras extrañas en la pantalla (artefactos gráficos). ¿Qué componente es el principal sospechoso?',
    options: ['La tarjeta gráfica (GPU), por sobrecalentamiento o memoria de video defectuosa', 'El teclado', 'La fuente de poder', 'El disco duro'],
    answer: 'La tarjeta gráfica (GPU), por sobrecalentamiento o memoria de video defectuosa',
    explanation: 'Los artefactos gráficos (texturas rotas, líneas de colores, parpadeos) son un síntoma clásico de problemas en la GPU: puede estar sobrecalentándose, tener la memoria de video (VRAM) dañada, o simplemente necesitar una actualización de drivers si el problema es reciente.'
  },
  {
    prompt: 'El reloj del sistema se atrasa o se resetea a una fecha antigua cada vez que apagas la PC por completo. ¿Cuál es la causa más probable?',
    options: ['La batería CMOS de la placa madre está agotada', 'El disco duro está fragmentado', 'Falta espacio en la memoria RAM', 'El cable de red está desconectado'],
    answer: 'La batería CMOS de la placa madre está agotada',
    explanation: 'La placa madre tiene una pequeña batería (tipo botón, CR2032) que mantiene la hora y la configuración de la BIOS incluso sin corriente. Cuando se agota, el reloj se resetea cada vez que la PC pierde alimentación por completo. La solución es reemplazar esa batería.'
  },
  {
    prompt: 'La PC funciona bien en todo, pero la conexión Wi-Fi se desconecta constantemente. ¿Qué es lo más probable?',
    options: ['El driver o el adaptador de red inalámbrica, no un componente interno crítico', 'El procesador está fallando', 'La fuente de poder no alcanza', 'El disco duro está dañado'],
    answer: 'El driver o el adaptador de red inalámbrica, no un componente interno crítico',
    explanation: 'Los problemas de Wi-Fi casi siempre están aislados a la tarjeta de red (interna o USB), su driver, o interferencia del entorno — no suelen ser señal de una falla grave en el resto del hardware. Actualizar el driver o probar otro adaptador suele resolverlo.'
  },
  {
    prompt: 'Conectas unos audífonos y no se escucha ningún sonido, pero los parlantes de la PC sí funcionan normalmente. ¿Qué revisarías primero?',
    options: ['El dispositivo de salida de audio predeterminado en la configuración del sistema', 'La tarjeta gráfica', 'La fuente de poder', 'El disco duro'],
    answer: 'El dispositivo de salida de audio predeterminado en la configuración del sistema',
    explanation: 'Cuando el sonido funciona por un canal (parlantes) pero no por otro (audífonos), el problema casi siempre es de configuración: el sistema operativo puede seguir enviando el audio a los parlantes en vez de cambiar automáticamente al nuevo dispositivo conectado.'
  },
  {
    prompt: 'La computadora tarda varios minutos en terminar de iniciar el sistema operativo, mucho más que antes. ¿Cuál es una causa muy común?',
    options: ['Usa un disco duro mecánico (HDD) viejo en vez de un SSD, o hay demasiados programas de inicio', 'El monitor tiene mala resolución', 'El mouse es inalámbrico', 'El teclado no tiene luces RGB'],
    answer: 'Usa un disco duro mecánico (HDD) viejo en vez de un SSD, o hay demasiados programas de inicio',
    explanation: 'Un HDD mecánico es mucho más lento que un SSD leyendo los miles de archivos pequeños que necesita el sistema para iniciar. Sumado a demasiados programas configurados para abrirse automáticamente, esto puede alargar el inicio a varios minutos.'
  },
  {
    prompt: 'Abres el gabinete y ves que uno de los capacitores (esos cilindros metálicos pequeños) de la placa madre está hinchado o abombado en la parte de arriba. ¿Qué significa esto?',
    options: ['Es una señal clásica de falla inminente de la placa madre', 'Es completamente normal y decorativo', 'Significa que la placa está sobrecargada de RAM', 'Indica que falta actualizar el sistema operativo'],
    answer: 'Es una señal clásica de falla inminente de la placa madre',
    explanation: 'Un capacitor hinchado o con fugas es un signo físico inconfundible de que ese componente está fallando (o ya falló). Cuando pasa, la placa madre puede volverse inestable o dejar de funcionar por completo; la solución real es reemplazar la placa (repararla soldando capacitores nuevos es posible pero requiere experiencia).'
  },
  {
    prompt: 'La pantalla parpadea de forma intermitente sin ningún patrón claro, incluso solo con el escritorio abierto. ¿Qué revisarías primero?',
    options: ['El cable de video (que esté bien conectado y sin daños) y los drivers de la GPU', 'El disco duro', 'El teclado', 'La batería CMOS'],
    answer: 'El cable de video (que esté bien conectado y sin daños) y los drivers de la GPU',
    explanation: 'Un parpadeo intermitente casi siempre viene de la cadena de video: un cable flojo o dañado, un puerto sucio, o un driver de la tarjeta gráfica corrupto o desactualizado. Revisar y volver a conectar el cable, o reinstalar el driver, resuelve la mayoría de estos casos.'
  },
  {
    prompt: 'Acabas de instalar módulos de RAM nuevos y ahora la PC no enciende del todo: los ventiladores giran un segundo y se detiene, sin llegar a mostrar nada. ¿Cuál es el diagnóstico más probable?',
    options: ['La RAM nueva no está bien asentada o no es compatible con la placa madre', 'El monitor se rompió al mismo tiempo por casualidad', 'El teclado necesita pilas nuevas', 'Es necesario reinstalar el sistema operativo'],
    answer: 'La RAM nueva no está bien asentada o no es compatible con la placa madre',
    explanation: 'Que el problema empiece justo después de instalar RAM nueva es una pista muy fuerte: puede no estar completamente encajada en la ranura (hay que presionar hasta escuchar el clic de los seguros), o puede no ser compatible en tipo/velocidad con lo que soporta esa placa madre.'
  }
];

let hardwareStepIndex = 0;
let hardwareMistakeOccurred = false;
let hardwareAwaitingContinue = false;

/* Genera las aspas de un ventilador como pétalos repetidos alrededor de un
   centro, en vez de líneas simples — se reutiliza para los 2 fans de la
   GPU y el del disipador. */
function hwFanBlades(cx, cy, r, count) {
  let blades = '';
  for (let i = 0; i < count; i++) {
    const angle = (360 / count) * i;
    const tipY = cy - r * 0.92;
    const curveY = cy - r * 1.05;
    blades += `<path class="hw-fan-blade" d="M${cx},${cy} L${cx + r * 0.16},${tipY} Q${cx},${curveY} ${cx - r * 0.16},${tipY} Z" transform="rotate(${angle} ${cx} ${cy})"></path>`;
  }
  return blades;
}

function hwScrew(cx, cy) {
  return `<circle class="hw-screw" cx="${cx}" cy="${cy}" r="4"></circle><line class="hw-screw-slot" x1="${cx - 2.5}" y1="${cy}" x2="${cx + 2.5}" y2="${cy}"></line>`;
}

function buildHardwareSvg() {
  return `
    <svg viewBox="0 0 640 520" class="hardware-svg" id="hardware-svg" role="img" aria-label="Ilustración de una computadora de escritorio abierta">
      <defs>
        <linearGradient id="hwGradMetal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5a6780"/>
          <stop offset="55%" stop-color="#2d3748"/>
          <stop offset="100%" stop-color="#161c28"/>
        </linearGradient>
        <linearGradient id="hwGradPanel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#404d64"/>
          <stop offset="100%" stop-color="#1f2733"/>
        </linearGradient>
        <linearGradient id="hwGradMotherboard" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1f4a3e"/>
          <stop offset="100%" stop-color="#0a1815"/>
        </linearGradient>
        <linearGradient id="hwGradPlastic" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2e3a4f"/>
          <stop offset="100%" stop-color="#0b0e16"/>
        </linearGradient>
        <linearGradient id="hwGradGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffe2a3"/>
          <stop offset="100%" stop-color="#b8842f"/>
        </linearGradient>
        <linearGradient id="hwGradGreenStick" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#7cf5bb"/>
          <stop offset="100%" stop-color="#1f8f66"/>
        </linearGradient>
        <linearGradient id="hwGradBlueStick" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#8fe3ff"/>
          <stop offset="100%" stop-color="#2489ad"/>
        </linearGradient>
        <linearGradient id="hwGradGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#3d5772" stop-opacity="0.82"/>
          <stop offset="100%" stop-color="#0e141c" stop-opacity="0.94"/>
        </linearGradient>
        <radialGradient id="hwGradFanHub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#54627a"/>
          <stop offset="100%" stop-color="#1a202c"/>
        </radialGradient>
        <linearGradient id="hwGradRgb" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="var(--accent-green)"/>
          <stop offset="100%" stop-color="var(--accent-blue)"/>
        </linearGradient>
      </defs>

      <g class="hw-part" data-part-id="power-cable">
        <title>Cable de alimentación</title>
        <rect class="hw-hit-area" x="0" y="440" width="68" height="50"></rect>
        <path class="hw-cord" d="M20,470 C40,470 40,450 60,450"></path>
        <rect class="hw-plug-body" x="8" y="458" width="20" height="24" rx="3"></rect>
        <rect class="hw-plug-prong" x="12" y="454" width="3" height="8"></rect>
        <rect class="hw-plug-prong" x="21" y="454" width="3" height="8"></rect>
      </g>

      <rect class="hw-case-frame" x="70" y="40" width="520" height="440" rx="16"></rect>
      ${hwScrew(82, 52)}${hwScrew(578, 52)}${hwScrew(82, 468)}${hwScrew(578, 468)}

      <g class="hw-part" data-part-id="motherboard">
        <title>Placa madre</title>
        <rect class="hw-motherboard" x="310" y="70" width="250" height="380" rx="6"></rect>
        <rect class="hw-mb-slot" x="372" y="92" width="104" height="104" rx="4"></rect>
        <rect class="hw-mb-slot" x="493" y="86" width="16" height="8"></rect>
        <rect class="hw-mb-slot" x="513" y="86" width="16" height="8"></rect>
        <rect class="hw-mb-slot" x="318" y="283" width="224" height="10"></rect>
        <rect class="hw-mb-chip" x="520" y="350" width="16" height="16"></rect>
        <rect class="hw-mb-chip" x="336" y="378" width="12" height="12"></rect>
        <rect class="hw-mb-chip" x="478" y="418" width="20" height="12"></rect>
        <path class="hw-trace" d="M330,420 h60 v-30 h40"></path>
        <path class="hw-trace" d="M540,100 h-40 v40"></path>
        <path class="hw-trace" d="M330,100 h30 v20"></path>
        <path class="hw-trace" d="M528,358 h-20 v40 h-30"></path>
        <path class="hw-trace" d="M342,384 v20 h60"></path>
        <circle class="hw-mb-hole" cx="322" cy="82" r="3"></circle>
        <circle class="hw-mb-hole" cx="548" cy="82" r="3"></circle>
        <circle class="hw-mb-hole" cx="322" cy="438" r="3"></circle>
        <circle class="hw-mb-hole" cx="548" cy="438" r="3"></circle>
      </g>

      <g class="hw-part" data-part-id="psu">
        <title>Fuente de poder</title>
        <rect class="hw-psu-body" x="100" y="330" width="150" height="120" rx="4"></rect>
        <rect class="hw-psu-face" x="108" y="338" width="134" height="80" rx="3"></rect>
        <circle class="hw-psu-fan-ring" cx="175" cy="378" r="32"></circle>
        <circle class="hw-psu-fan-hub" cx="175" cy="378" r="8"></circle>
        <line class="hw-psu-grille" x1="175" y1="346" x2="175" y2="410"></line>
        <line class="hw-psu-grille" x1="143" y1="378" x2="207" y2="378"></line>
        <line class="hw-psu-grille" x1="152" y1="355" x2="198" y2="401"></line>
        <line class="hw-psu-grille" x1="152" y1="401" x2="198" y2="355"></line>
        <rect class="hw-psu-label" x="112" y="426" width="60" height="16" rx="2"></rect>
        ${hwScrew(110, 340)}${hwScrew(240, 340)}${hwScrew(110, 440)}${hwScrew(240, 440)}
      </g>

      <g class="hw-part" data-part-id="storage">
        <title>Unidad de almacenamiento</title>
        <rect class="hw-storage-body" x="100" y="90" width="120" height="80" rx="4"></rect>
        <rect class="hw-storage-band" x="104" y="94" width="112" height="22" rx="2"></rect>
        <circle class="hw-storage-led" cx="112" cy="105" r="3"></circle>
        <line class="hw-vent-line" x1="115" y1="140" x2="205" y2="140"></line>
        <line class="hw-vent-line" x1="115" y1="153" x2="205" y2="153"></line>
        <rect class="hw-storage-connector" x="214" y="108" width="6" height="16"></rect>
        <rect class="hw-storage-connector" x="214" y="138" width="6" height="12"></rect>
        ${hwScrew(108, 164)}${hwScrew(212, 164)}
      </g>

      <g class="hw-part" data-part-id="cables">
        <title>Cables de la fuente de poder</title>
        <rect class="hw-hit-area" x="145" y="160" width="175" height="250"></rect>
        <path class="hw-cable-sleeve" d="M250,380 C280,380 280,400 310,400"></path>
        <path class="hw-cable" d="M250,380 C280,380 280,400 310,400"></path>
        <path class="hw-cable-sleeve" d="M170,330 C160,250 160,220 165,170"></path>
        <path class="hw-cable-alt" d="M170,330 C160,250 160,220 165,170"></path>
        <rect class="hw-cable-connector" x="245" y="374" width="10" height="14" rx="2"></rect>
        <rect class="hw-cable-connector" x="304" y="393" width="12" height="10" rx="2"></rect>
        <rect class="hw-cable-connector" x="160" y="322" width="16" height="10" rx="2"></rect>
        <rect class="hw-cable-connector" x="159" y="163" width="14" height="10" rx="2"></rect>
      </g>

      <g class="hw-part" data-part-id="gpu">
        <title>Tarjeta gráfica (GPU)</title>
        <rect class="hw-gpu-body" x="320" y="280" width="220" height="55" rx="6"></rect>
        <rect class="hw-gpu-rgb" x="320" y="280" width="220" height="4" rx="2"></rect>
        <rect class="hw-gpu-bracket-tooth" x="316" y="285" width="4" height="6"></rect>
        <rect class="hw-gpu-bracket-tooth" x="316" y="295" width="4" height="6"></rect>
        <rect class="hw-gpu-bracket-tooth" x="316" y="305" width="4" height="6"></rect>
        <rect class="hw-gpu-bracket-tooth" x="316" y="315" width="4" height="6"></rect>
        <circle class="hw-fan-ring" cx="365" cy="307" r="19"></circle>
        <g class="hw-fan-blades hw-fan-blades-gpu1">${hwFanBlades(365, 307, 15, 7)}</g>
        <circle class="hw-fan-hub" cx="365" cy="307" r="4"></circle>
        <circle class="hw-fan-ring" cx="425" cy="307" r="19"></circle>
        <g class="hw-fan-blades hw-fan-blades-gpu2">${hwFanBlades(425, 307, 15, 7)}</g>
        <circle class="hw-fan-hub" cx="425" cy="307" r="4"></circle>
      </g>

      <g class="hw-part" data-part-id="ram">
        <title>Módulos de memoria RAM</title>
        <rect class="hw-hit-area" x="488" y="82" width="46" height="126"></rect>
        <rect class="hw-ram-stick-a" x="495" y="90" width="12" height="106" rx="2"></rect>
        <rect class="hw-ram-contact" x="496" y="192" width="10" height="6"></rect>
        <line class="hw-ram-notch" x1="495" y1="102" x2="507" y2="102"></line>
        <rect class="hw-ram-stick-b" x="515" y="90" width="12" height="106" rx="2"></rect>
        <rect class="hw-ram-contact" x="516" y="192" width="10" height="6"></rect>
        <line class="hw-ram-notch" x1="515" y1="102" x2="527" y2="102"></line>
      </g>

      <g class="hw-part" data-part-id="cooler">
        <title>Disipador del procesador</title>
        <line class="hw-cooler-fin" x1="366" y1="106" x2="366" y2="184"></line>
        <line class="hw-cooler-fin" x1="374" y1="102" x2="374" y2="188"></line>
        <line class="hw-cooler-fin" x1="436" y1="102" x2="436" y2="188"></line>
        <line class="hw-cooler-fin" x1="444" y1="106" x2="444" y2="184"></line>
        <rect class="hw-cooler-base" x="360" y="100" width="90" height="90" rx="8"></rect>
        <circle class="hw-fan-ring" cx="405" cy="145" r="37"></circle>
        <g class="hw-fan-blades hw-fan-blades-cooler">${hwFanBlades(405, 145, 32, 7)}</g>
        <circle class="hw-fan-hub" cx="405" cy="145" r="8"></circle>
        <path class="hw-cord" d="M450,120 C465,120 465,105 465,95"></path>
      </g>

      <g class="hw-part is-hidden-part" data-part-id="cpu" id="hw-part-cpu">
        <title>Procesador (CPU)</title>
        <rect class="hw-cpu-body" x="378" y="118" width="54" height="54" rx="4"></rect>
        <rect class="hw-cpu-die" x="392" y="132" width="26" height="26" rx="2"></rect>
        <polygon class="hw-cpu-notch" points="382,122 392,122 382,132"></polygon>
      </g>

      <g class="hw-part" data-part-id="side-panel">
        <title>Panel lateral (vidrio templado)</title>
        <rect class="hw-side-panel" x="74" y="44" width="512" height="432" rx="14"></rect>
        <polygon class="hw-glass-glare" points="110,44 190,44 90,476 60,476"></polygon>
        <polygon class="hw-glass-glare hw-glass-glare-soft" points="220,44 260,44 170,476 138,476"></polygon>
        ${hwScrew(94, 60)}${hwScrew(566, 60)}${hwScrew(94, 460)}${hwScrew(566, 460)}
      </g>
    </svg>
  `;
}

/* ---- Menú de la sección: elegir entre desarmar la PC o las misiones ---- */
function renderHardwareScreen() {
  const container = document.getElementById('hardware-container');
  const progress = state.progress;
  const disassemblyDone = progress.completedLevels.includes('hardware-1');
  const diagnosticsDone = progress.completedLevels.includes('hardware-2');

  container.innerHTML = `
    <div class="hardware-hub">
      <button type="button" class="hardware-hub-card" id="hardware-hub-disassembly">
        <span class="hardware-hub-icon">🔧</span>
        <span class="hardware-hub-body">
          <span class="hardware-hub-title">Desarma tu PC ${disassemblyDone ? '<span class="hardware-hub-check">✓</span>' : ''}</span>
          <span class="hardware-hub-desc">Simulación paso a paso: quita cada pieza en el orden correcto y aprende qué hace.</span>
        </span>
        <span class="hardware-hub-xp">+${HARDWARE_LEVELS[0].xp} XP</span>
      </button>
      <button type="button" class="hardware-hub-card" id="hardware-hub-diagnostics">
        <span class="hardware-hub-icon">🩺</span>
        <span class="hardware-hub-body">
          <span class="hardware-hub-title">Misiones de diagnóstico ${diagnosticsDone ? '<span class="hardware-hub-check">✓</span>' : ''}</span>
          <span class="hardware-hub-desc">Situaciones reales de fallas ("la PC pita cada segundo"...): analiza los síntomas y elige el diagnóstico correcto.</span>
        </span>
        <span class="hardware-hub-xp">+${HARDWARE_LEVELS[1].xp} XP</span>
      </button>
    </div>
  `;

  document.getElementById('hardware-hub-disassembly').addEventListener('click', renderHardwareDisassembly);
  document.getElementById('hardware-hub-diagnostics').addEventListener('click', renderHardwareDiagnostics);
}

/* ---- Actividad 1: simulador de desarme ---- */
function renderHardwareDisassembly() {
  const container = document.getElementById('hardware-container');
  const alreadyDone = state.progress.completedLevels.includes('hardware-1');

  hardwareStepIndex = 0;
  hardwareMistakeOccurred = false;
  hardwareAwaitingContinue = false;

  container.innerHTML = `
    <button type="button" class="hardware-back-link" id="hardware-back-to-hub">← Elegir otra actividad</button>
    <div class="card hardware-card">
      ${alreadyDone ? '<p class="hardware-done-note">✅ Ya completaste este desarme antes. Puedes repetirlo para repasar.</p>' : ''}
      <div class="hardware-progress">
        <div class="quiz-progress-dots" id="hardware-dots"></div>
        <span class="hardware-step-count" id="hardware-step-count"></span>
      </div>
      <div class="hardware-illustration-wrap">${buildHardwareSvg()}</div>
      <div class="hardware-step-info">
        <div class="hardware-step-title" id="hardware-step-title"></div>
        <p class="hardware-step-desc" id="hardware-step-desc"></p>
      </div>
      <div id="hardware-part-info" class="hardware-part-info hidden"></div>
      <div class="hardware-actions">
        <button type="button" id="hardware-hint-btn" class="btn btn-secondary btn-block">💡 Pista</button>
      </div>
    </div>
  `;

  document.getElementById('hardware-back-to-hub').addEventListener('click', renderHardwareScreen);
  wireHardwareInteraction();
  renderHardwareStep();
}

/* ---- Actividad 2: misiones de diagnóstico (reutiliza el motor de quiz) ---- */
function renderHardwareDiagnostics() {
  const container = document.getElementById('hardware-container');
  const level = {
    ...HARDWARE_LEVELS[1],
    type: 'quiz',
    exercise: {
      instructions: 'Analiza cada situación y elige el diagnóstico más probable. Cada respuesta viene con una explicación.',
      variant: 'plain',
      questions: HARDWARE_DIAGNOSTIC_MISSIONS
    }
  };

  container.innerHTML = `
    <button type="button" class="hardware-back-link" id="hardware-back-to-hub">← Elegir otra actividad</button>
    <div class="card exercise-card" id="hardware-diagnostics-exercise"></div>
  `;
  document.getElementById('hardware-back-to-hub').addEventListener('click', renderHardwareScreen);
  renderQuizExercise(level, document.getElementById('hardware-diagnostics-exercise'));
}

function wireHardwareInteraction() {
  const svg = document.getElementById('hardware-svg');
  svg.addEventListener('click', (e) => {
    const part = e.target.closest('.hw-part');
    if (part) handleHardwarePartClick(part);
  });
  document.getElementById('hardware-hint-btn').addEventListener('click', showHardwareHint);
}

function renderHardwareStep() {
  const step = HARDWARE_STEPS[hardwareStepIndex];
  document.getElementById('hardware-dots').innerHTML = HARDWARE_STEPS.map((_, i) =>
    `<span class="quiz-dot ${i < hardwareStepIndex ? 'is-done' : ''} ${i === hardwareStepIndex ? 'is-current' : ''}"></span>`
  ).join('');
  document.getElementById('hardware-step-count').textContent = `Paso ${hardwareStepIndex + 1} de ${HARDWARE_STEPS.length}`;
  document.getElementById('hardware-step-title').textContent = `${step.icon} ${step.title}`;
  document.getElementById('hardware-step-desc').textContent = step.description;
  document.getElementById('hardware-part-info').classList.add('hidden');
  hardwareAwaitingContinue = false;
}

function handleHardwarePartClick(partEl) {
  if (hardwareAwaitingContinue) return;
  if (partEl.classList.contains('is-removed')) return;

  const step = HARDWARE_STEPS[hardwareStepIndex];
  const clickedId = partEl.dataset.partId;

  if (clickedId !== step.id) {
    hardwareMistakeOccurred = true;
    showFeedback(false, `Todavía no — primero: ${step.title}`);
    playSound(false);
    return;
  }

  partEl.classList.add('is-removed');
  if (clickedId === 'cooler') {
    document.getElementById('hw-part-cpu').classList.remove('is-hidden-part');
  }
  showFeedback(true, pickPraise());
  playSound(true);

  const infoEl = document.getElementById('hardware-part-info');
  const isLast = hardwareStepIndex === HARDWARE_STEPS.length - 1;
  infoEl.innerHTML = `
    <p class="hardware-part-info-text">${step.info}</p>
    <button type="button" id="hardware-continue-btn" class="btn btn-primary btn-block">${isLast ? 'Terminar' : 'Siguiente paso →'}</button>
  `;
  infoEl.classList.remove('hidden');
  hardwareAwaitingContinue = true;

  document.getElementById('hardware-continue-btn').addEventListener('click', () => {
    if (isLast) {
      finishHardwareDisassembly();
    } else {
      hardwareStepIndex++;
      renderHardwareStep();
    }
  });
}

function showHardwareHint() {
  const step = HARDWARE_STEPS[hardwareStepIndex];
  const target = document.querySelector(`.hw-part[data-part-id="${step.id}"]`);
  if (!target) return;
  target.classList.remove('is-hint');
  // Forzar reflow para poder reiniciar la animación si ya se usó antes.
  void target.getBoundingClientRect();
  target.classList.add('is-hint');
  setTimeout(() => target.classList.remove('is-hint'), 1900);
}

function finishHardwareDisassembly() {
  finishLevel(HARDWARE_LEVELS[0], hardwareMistakeOccurred);
}

/* ==========================================================================
   6. LECCIÓN: teoría + despacho de ejercicio
   ========================================================================== */
function buildTheoryHtml(theory) {
  let html = theory.paragraphs.map((p) => `<p>${p}</p>`).join('');
  if (theory.code) html += `<pre class="code-block"><code>${theory.code}</code></pre>`;
  return html;
}

const EXERCISE_RENDERERS = {
  'fill-tags': renderFillTagsExercise,
  'order-builder': renderOrderBuilderExercise,
  quiz: renderQuizExercise,
  'flexbox-align': renderFlexboxAlignExercise
};

function openLesson(levelId) {
  const found = findLevel(levelId);
  if (!found || !isLevelUnlocked(levelId)) return;
  const { level, module } = found;
  state.currentLevelId = levelId;

  const lessonContainer = document.getElementById('lesson-container');
  lessonContainer.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-kicker">${module.icon} ${module.title} · ${level.subtitle}</div>
      <h1 class="lesson-title">${level.title}</h1>
    </div>
    <div class="card theory-card">${buildTheoryHtml(level.theory)}</div>
    <div class="card exercise-card" id="exercise-container"></div>
  `;

  const exerciseContainer = document.getElementById('exercise-container');
  const renderer = EXERCISE_RENDERERS[level.type];
  if (renderer) renderer(level, exerciseContainer);

  goTo('lesson');
}

/* Crea el botón "Comprobar" fijo al final de la tarjeta de ejercicio */
function mountCheckButton(container, onClick) {
  const wrap = document.createElement('div');
  wrap.className = 'check-btn-wrap';
  wrap.innerHTML = `<button type="button" id="btn-check" class="btn btn-primary btn-block" disabled>Comprobar</button>`;
  container.appendChild(wrap);
  const btn = wrap.querySelector('#btn-check');
  btn.addEventListener('click', onClick);
  return btn;
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* Escapa texto de respuesta (plano) antes de insertarlo como HTML/atributo.
   Necesario porque algunas respuestas de quiz/fill-tags contienen comillas
   o < > (ej. '<meta name="viewport">'); el navegador decodifica las
   entidades al leer el atributo, así que dataset.value sigue coincidiendo
   con el string original en answer/options. */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const PRAISES = ['¡Correcto!', '¡Excelente!', '¡Genial!', '¡Muy bien!', '¡Perfecto!'];
function pickPraise() {
  return PRAISES[Math.floor(Math.random() * PRAISES.length)];
}

/* ==========================================================================
   6a. Ejercicio: Completar etiquetas (fill-tags)
   ========================================================================== */
function renderFillTagsExercise(level, container) {
  const exercise = level.exercise;
  let mistakesOccurred = false;

  container.innerHTML = `
    <div class="exercise-instructions">${exercise.instructions}</div>
    <pre class="code-block" id="fill-code"></pre>
  `;

  const codeEl = container.querySelector('#fill-code');
  codeEl.innerHTML = exercise.blanks.map((b) => {
    const opts = shuffleArray(b.options);
    const optionsHtml = opts.map((o) => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('');
    return `<div class="blank-line" data-blank-id="${b.id}"><span class="tok-punct">${b.before}</span><select class="fill-blank-select" data-blank-id="${b.id}"><option value="">?</option>${optionsHtml}</select><span class="tok-punct">${b.after}</span></div>`;
  }).join('');

  const checkBtn = mountCheckButton(container, handleCheck);

  container.addEventListener('change', (e) => {
    if (!e.target.matches('.fill-blank-select')) return;
    e.target.classList.remove('is-correct', 'is-incorrect');
    const allFilled = [...container.querySelectorAll('.fill-blank-select')].every((s) => s.value !== '');
    checkBtn.disabled = !allFilled;
  });

  function handleCheck() {
    let allCorrect = true;
    container.querySelectorAll('.fill-blank-select').forEach((sel) => {
      const blankDef = exercise.blanks.find((b) => b.id === sel.dataset.blankId);
      sel.classList.remove('is-correct', 'is-incorrect');
      if (sel.value === blankDef.answer) {
        sel.classList.add('is-correct');
      } else {
        sel.classList.add('is-incorrect');
        allCorrect = false;
      }
    });
    if (!allCorrect) mistakesOccurred = true;

    showFeedback(allCorrect, allCorrect ? pickPraise() : 'Revisa las etiquetas marcadas en rojo e inténtalo de nuevo.');
    playSound(allCorrect);

    if (allCorrect) {
      checkBtn.disabled = true;
      setTimeout(() => finishLevel(level, mistakesOccurred), 1200);
    }
  }
}

/* ==========================================================================
   6b. Ejercicio: Constructor de orden (order-builder)
   ========================================================================== */
function renderOrderBuilderExercise(level, container) {
  const exercise = level.exercise;
  let mistakesOccurred = false;
  const pool = shuffleArray(exercise.items);
  let answer = [];

  container.innerHTML = `
    <div class="exercise-instructions">${exercise.instructions}</div>
    <div class="order-answer-slots" id="order-answer"></div>
    <div class="order-pool" id="order-pool"></div>
  `;
  const answerEl = container.querySelector('#order-answer');
  const poolEl = container.querySelector('#order-pool');
  const checkBtn = mountCheckButton(container, handleCheck);

  function render() {
    poolEl.innerHTML = '';
    pool.forEach((item) => {
      if (answer.includes(item.id)) return;
      const chip = document.createElement('div');
      chip.className = 'order-chip';
      chip.innerHTML = `<code>${item.code}</code>`;
      chip.addEventListener('click', () => { answer.push(item.id); render(); });
      poolEl.appendChild(chip);
    });

    answerEl.innerHTML = '';
    answer.forEach((id, i) => {
      const item = exercise.items.find((it) => it.id === id);
      const chip = document.createElement('div');
      chip.className = 'order-chip in-answer';
      chip.innerHTML = `<span class="chip-index">${i + 1}</span><code>${item.code}</code>`;
      chip.addEventListener('click', () => { answer = answer.filter((a) => a !== id); render(); });
      answerEl.appendChild(chip);
    });

    checkBtn.disabled = answer.length !== exercise.items.length;
  }
  render();

  function handleCheck() {
    const correct = answer.length === exercise.correctOrder.length &&
      answer.every((id, i) => id === exercise.correctOrder[i]);
    if (!correct) mistakesOccurred = true;

    [...answerEl.children].forEach((chipEl, i) => {
      chipEl.classList.remove('is-correct', 'is-incorrect');
      chipEl.classList.add(answer[i] === exercise.correctOrder[i] ? 'is-correct' : 'is-incorrect');
    });

    showFeedback(correct, correct ? pickPraise() : 'El orden aún no es correcto. Revisa las piezas marcadas en rojo.');
    playSound(correct);

    if (correct) {
      checkBtn.disabled = true;
      setTimeout(() => finishLevel(level, mistakesOccurred), 1200);
    }
  }
}

/* ==========================================================================
   6c. Ejercicio: Quiz genérico (style-quiz / console-challenge / decision-game)
   ========================================================================== */
function renderQuizExercise(level, container) {
  const exercise = level.exercise;
  const questions = exercise.questions;
  let currentIndex = 0;
  let mistakesOccurred = false;
  let selected = null;
  let answered = false;

  container.innerHTML = `
    <div class="exercise-instructions">${exercise.instructions}</div>
    <div class="quiz-progress-dots" id="quiz-dots"></div>
    <div id="quiz-question-area"></div>
    <div id="quiz-explanation" class="hardware-part-info hidden"></div>
  `;
  const dotsEl = container.querySelector('#quiz-dots');
  const questionArea = container.querySelector('#quiz-question-area');
  const explanationEl = container.querySelector('#quiz-explanation');
  const checkBtn = mountCheckButton(container, handleCheck);

  function renderDots() {
    dotsEl.innerHTML = questions.map((_, i) =>
      `<span class="quiz-dot ${i < currentIndex ? 'is-done' : ''} ${i === currentIndex ? 'is-current' : ''}"></span>`
    ).join('');
  }

  function renderQuestion() {
    renderDots();
    selected = null;
    answered = false;
    checkBtn.disabled = true;
    checkBtn.classList.remove('hidden');
    explanationEl.classList.add('hidden');

    const q = questions[currentIndex];
    let codeBlockHtml = '';
    if (q.code) {
      if (exercise.variant === 'console') {
        codeBlockHtml = `
          <div class="console-sim">
            <div class="console-sim-header"><span class="console-dot red"></span><span class="console-dot yellow"></span><span class="console-dot green"></span></div>
            <div class="console-line">${q.code}</div>
            <div class="console-output" id="console-output"></div>
          </div>`;
      } else {
        codeBlockHtml = `<pre class="code-block"><code>${q.code}</code></pre>`;
      }
    }

    const letters = ['A', 'B', 'C', 'D'];
    const optionsHtml = q.options.map((opt, i) => `
      <button type="button" class="option-btn" data-value="${escapeHtml(opt)}">
        <span class="option-letter">${letters[i]}</span><span>${escapeHtml(opt)}</span>
      </button>`).join('');

    questionArea.innerHTML = `
      ${codeBlockHtml}
      <p class="exercise-instructions"><strong>${q.prompt}</strong></p>
      <div class="options-list" id="options-list">${optionsHtml}</div>
    `;

    questionArea.querySelectorAll('.option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (answered) return;
        questionArea.querySelectorAll('.option-btn').forEach((b) => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        selected = btn.dataset.value;
        checkBtn.disabled = false;
      });
    });
  }
  renderQuestion();

  function handleCheck() {
    if (!selected || answered) return;
    answered = true;
    checkBtn.disabled = true;

    const q = questions[currentIndex];
    const correct = selected === q.answer;
    if (!correct) mistakesOccurred = true;

    questionArea.querySelectorAll('.option-btn').forEach((b) => {
      b.disabled = true;
      if (b.dataset.value === q.answer) b.classList.add('is-correct');
      else if (b.dataset.value === selected) b.classList.add('is-incorrect');
    });

    if (exercise.variant === 'console') {
      const out = questionArea.querySelector('#console-output');
      if (out) out.innerHTML = `<span class="console-prompt">›</span> ${escapeHtml(q.answer)}`;
    }

    showFeedback(correct, correct ? pickPraise() : `La respuesta correcta era: ${q.answer}`);
    playSound(correct);

    const isLast = currentIndex >= questions.length - 1;
    const advance = () => {
      if (isLast) {
        finishLevel(level, mistakesOccurred);
      } else {
        currentIndex++;
        renderQuestion();
      }
    };

    // Si la pregunta trae una explicación (ej. misiones de diagnóstico),
    // se muestra en una tarjeta y el usuario avanza cuando quiera, en vez
    // de pasar solo tras un temporizador — así hay tiempo de leerla.
    if (q.explanation) {
      checkBtn.classList.add('hidden');
      explanationEl.innerHTML = `
        <p class="hardware-part-info-text">${q.explanation}</p>
        <button type="button" id="quiz-explanation-continue" class="btn btn-primary btn-block">${isLast ? 'Terminar' : 'Siguiente misión →'}</button>
      `;
      explanationEl.classList.remove('hidden');
      explanationEl.querySelector('#quiz-explanation-continue').addEventListener('click', advance);
    } else {
      setTimeout(advance, correct ? 1100 : 1700);
    }
  }
}

/* ==========================================================================
   6d. Ejercicio: Flexbox Align
   ========================================================================== */
function renderFlexboxAlignExercise(level, container) {
  const exercise = level.exercise;
  let roundIndex = 0;
  let mistakesOccurred = false;

  container.innerHTML = `
    <div class="exercise-instructions" id="flex-instruction"></div>
    <div class="flex-preview-frame" id="flex-preview">
      <div class="flex-box">1</div><div class="flex-box">2</div><div class="flex-box">3</div>
    </div>
    <div class="flex-controls">
      <div class="flex-control">
        <label for="select-justify">justify-content</label>
        <select id="select-justify" class="flex-select"></select>
      </div>
      <div class="flex-control">
        <label for="select-align">align-items</label>
        <select id="select-align" class="flex-select"></select>
      </div>
    </div>
  `;

  const previewEl = container.querySelector('#flex-preview');
  const justifySel = container.querySelector('#select-justify');
  const alignSel = container.querySelector('#select-align');
  const instrEl = container.querySelector('#flex-instruction');
  const checkBtn = mountCheckButton(container, handleCheck);

  function fillSelect(sel, options) {
    sel.innerHTML = '<option value="">Selecciona…</option>' + options.map((o) => `<option value="${o}">${o}</option>`).join('');
  }
  fillSelect(justifySel, exercise.justifyOptions);
  fillSelect(alignSel, exercise.alignOptions);

  function applyPreview() {
    previewEl.style.justifyContent = justifySel.value || 'flex-start';
    previewEl.style.alignItems = alignSel.value || 'stretch';
    checkBtn.disabled = !(justifySel.value && alignSel.value);
  }
  justifySel.addEventListener('change', applyPreview);
  alignSel.addEventListener('change', applyPreview);

  function renderRound() {
    const r = exercise.rounds[roundIndex];
    instrEl.innerHTML = `<strong>Ronda ${roundIndex + 1}/${exercise.rounds.length}:</strong> ${r.instruction}`;
    justifySel.value = '';
    alignSel.value = '';
    previewEl.style.justifyContent = 'flex-start';
    previewEl.style.alignItems = 'stretch';
    checkBtn.disabled = true;
  }
  renderRound();

  function handleCheck() {
    const r = exercise.rounds[roundIndex];
    const correct = justifySel.value === r.target.justifyContent && alignSel.value === r.target.alignItems;
    if (!correct) mistakesOccurred = true;

    showFeedback(correct, correct ? pickPraise() : `Prueba con justify-content: ${r.target.justifyContent} y align-items: ${r.target.alignItems}`);
    playSound(correct);

    if (correct) {
      checkBtn.disabled = true;
      setTimeout(() => {
        if (roundIndex < exercise.rounds.length - 1) {
          roundIndex++;
          renderRound();
        } else {
          finishLevel(level, mistakesOccurred);
        }
      }, 1300);
    }
  }
}

/* ==========================================================================
   7. GAMIFICACIÓN: XP, racha, insignias y modal de nivel completado
   ========================================================================== */
function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

/* Actualiza la racha diaria; devuelve true si el contador cambió */
function updateStreak(progress) {
  const todayStr = formatDate(new Date());
  if (progress.lastPlayDate === todayStr) return false;

  if (progress.lastPlayDate) {
    const diffDays = Math.round((new Date(todayStr) - new Date(progress.lastPlayDate)) / 86400000);
    progress.streak = diffDays === 1 ? progress.streak + 1 : 1;
  } else {
    progress.streak = 1;
  }
  progress.lastPlayDate = todayStr;
  return true;
}

function checkForNewBadges(progress) {
  const newlyUnlocked = [];
  BADGES.forEach((badge) => {
    if (!progress.badges.includes(badge.id) && badge.check(progress)) {
      progress.badges.push(badge.id);
      newlyUnlocked.push(badge);
    }
  });
  return newlyUnlocked;
}

function finishLevel(level, hadMistake) {
  const progress = state.progress;
  const isFirstTime = !progress.completedLevels.includes(level.id);
  let xpGained = 0;

  if (isFirstTime) {
    progress.completedLevels.push(level.id);
    xpGained = level.xp;
    progress.xp += xpGained;
    if (!hadMistake && !progress.perfectLevels.includes(level.id)) {
      progress.perfectLevels.push(level.id);
    }
  }

  updateStreak(progress);
  const newBadges = checkForNewBadges(progress);
  saveProgress(progress);
  updateHeaderStats();
  showLevelCompleteModal(level, xpGained, newBadges);
}

function spawnBurst() {
  const burst = document.getElementById('modal-burst');
  burst.innerHTML = '';
  const colors = ['#39ffb0', '#45d3ff', '#b18aff', '#ffd166'];
  for (let i = 0; i < 16; i++) {
    const piece = document.createElement('span');
    piece.className = 'burst-piece';
    const angle = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 90;
    piece.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
    piece.style.setProperty('--ty', `${Math.sin(angle) * dist}px`);
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.15}s`;
    burst.appendChild(piece);
  }
}

function showLevelCompleteModal(level, xpGained, newBadges) {
  const backdrop = document.getElementById('modal-level-complete');
  document.getElementById('modal-title').textContent = xpGained > 0 ? '¡Nivel superado!' : '¡Repasado con éxito!';
  document.getElementById('modal-level-name').textContent = level.title;
  document.getElementById('modal-xp-amount').textContent = String(xpGained);

  const badgeWrap = document.getElementById('modal-badge-earned');
  if (newBadges.length > 0) {
    document.getElementById('modal-badge-icon').textContent = newBadges[0].icon;
    document.getElementById('modal-badge-name').textContent = newBadges[0].name;
    badgeWrap.classList.remove('hidden');
  } else {
    badgeWrap.classList.add('hidden');
  }
  pendingBadgeToasts = newBadges.slice(1);

  spawnBurst();
  backdrop.classList.remove('hidden');
  requestAnimationFrame(() => backdrop.classList.add('is-showing'));
  playSound(true);
}

function closeLevelCompleteModal() {
  const backdrop = document.getElementById('modal-level-complete');
  backdrop.classList.remove('is-showing');
  setTimeout(() => backdrop.classList.add('hidden'), 250);
  renderDashboard();
  goTo('path');
  pendingBadgeToasts.forEach((b, i) => {
    setTimeout(() => showToast(`Nueva insignia: ${b.name}`, b.icon), i * 700 + 300);
  });
  pendingBadgeToasts = [];
}

/* ==========================================================================
   8. FEEDBACK VISUAL, TOASTS Y SONIDO
   ========================================================================== */
function showFeedback(correct, message) {
  const overlay = document.getElementById('feedback-overlay');
  overlay.classList.remove('is-correct', 'is-incorrect', 'hidden');
  overlay.classList.add(correct ? 'is-correct' : 'is-incorrect');
  document.getElementById('feedback-icon').textContent = correct ? '✔' : '✖';
  document.getElementById('feedback-message').textContent = message;

  requestAnimationFrame(() => overlay.classList.add('is-showing'));
  clearTimeout(feedbackTimer);
  feedbackTimer = setTimeout(() => {
    overlay.classList.remove('is-showing');
    setTimeout(() => overlay.classList.add('hidden'), 300);
  }, correct ? 1300 : 1900);
}

function showToast(message, icon = '🎉') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

/* Sonidos generados con Web Audio API: no requiere archivos externos,
   por lo que funciona igual con o sin conexión. */
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (err) {
      audioCtx = null;
    }
  }
  return audioCtx;
}
function beep(ctx, freq, startTime, duration, type = 'sine') {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(0.18, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.02);
}
function playSound(correct) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  if (ctx.state === 'suspended') ctx.resume();
  const now = ctx.currentTime;
  if (correct) {
    beep(ctx, 523.25, now, 0.09);
    beep(ctx, 659.25, now + 0.1, 0.12);
    beep(ctx, 783.99, now + 0.2, 0.18);
  } else {
    beep(ctx, 220, now, 0.09, 'sawtooth');
    beep(ctx, 174.61, now + 0.1, 0.18, 'sawtooth');
  }
}

/* ==========================================================================
   9. SERVICE WORKER
   ========================================================================== */
function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .catch((err) => console.warn('DevQuest: no se pudo registrar el Service Worker.', err));
  });
}

/* ==========================================================================
   10. FIREBASE: LOGIN (EMAIL/GOOGLE) Y SINCRONIZACIÓN DE PROGRESO
   El SDK se carga por separado en firebase-init.js (módulo async, ver
   index.html) y expone window.DevQuestFirebase. Si esa carga falla o va
   con retraso (sin conexión, CDN bloqueada), todo lo de aquí comprueba su
   disponibilidad y degrada a modo invitado sin romper el resto de la app.
   ========================================================================== */
const AUTH_ERROR_MESSAGES = {
  'auth/invalid-email': 'El correo electrónico no es válido.',
  'auth/user-disabled': 'Esta cuenta ha sido deshabilitada.',
  'auth/user-not-found': 'No existe ninguna cuenta con ese correo.',
  'auth/wrong-password': 'Contraseña incorrecta.',
  'auth/invalid-credential': 'Correo o contraseña incorrectos.',
  'auth/email-already-in-use': 'Ya existe una cuenta con ese correo. Prueba a iniciar sesión.',
  'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
  'auth/popup-closed-by-user': 'Se cerró la ventana de Google antes de completar el inicio de sesión.',
  'auth/network-request-failed': 'Error de red. Comprueba tu conexión a internet.',
  'auth/too-many-requests': 'Demasiados intentos. Espera un momento antes de volver a intentarlo.',
  'auth/invalid-login-credentials': 'Correo o contraseña incorrectos.',
  'auth/missing-password': 'Escribe tu contraseña.',
  'auth/operation-not-allowed': 'Este método de acceso todavía no está habilitado para esta app.',
  'auth/unauthorized-domain': 'Este dominio no está autorizado para iniciar sesión todavía.'
};
function getAuthErrorMessage(err) {
  return AUTH_ERROR_MESSAGES[err && err.code] || 'Ha ocurrido un error. Inténtalo de nuevo.';
}

/* Logs de depuración del login — con prefijo y color para que sean fáciles
   de encontrar entre el resto de mensajes de la consola. Quitar cuando ya
   no haga falta diagnosticar el flujo de autenticación. */
function dqlog(...args) {
  console.log('%c[DevQuest Auth]', 'color:#39ffb0;font-weight:bold', ...args);
}

function initFirebaseAuth() {
  dqlog('initFirebaseAuth() ejecutándose. window.DevQuestFirebase =', window.DevQuestFirebase);
  const fb = window.DevQuestFirebase;
  if (!fb) {
    dqlog('window.DevQuestFirebase no existe todavía: initFirebaseAuth aborta.');
    return;
  }
  state.firebaseReady = true;
  dqlog('state.firebaseReady = true. auth.currentUser en este momento:', fb.auth.currentUser);

  fb.onAuthStateChanged(fb.auth, (user) => {
    dqlog('onAuthStateChanged() disparado. user =', user ? user.email : null);
    handleAuthStateChanged(user);
  });
  dqlog('onAuthStateChanged listener registrado.');
}

function handleAuthStateChanged(user) {
  const justLoggedIn = !state.user && !!user;
  dqlog('handleAuthStateChanged() — antes: state.user =', state.user ? state.user.email : null, '| nuevo user =', user ? user.email : null, '| justLoggedIn =', justLoggedIn);
  state.user = user;
  updateAccountButton();

  const onAccountScreen = document.getElementById('screen-account').classList.contains('is-active');
  dqlog('onAccountScreen =', onAccountScreen, '| pantalla activa actual =', document.querySelector('.screen.is-active')?.dataset.screen);

  if (user) {
    // La UI se actualiza YA, sin esperar a que termine (o falle) la
    // sincronización con Firestore: si la nube tarda o está mal
    // configurada, el usuario debe ver de inmediato que inició sesión de
    // todos modos. La sincronización sigue en segundo plano y, si trae
    // progreso nuevo, ya se encarga ella misma de refrescar la pantalla.
    dqlog('Actualizando la UI de inmediato (sin esperar a Firestore).');
    if (justLoggedIn) showToast('¡Sesión iniciada!', '☁️');
    if (onAccountScreen) {
      if (justLoggedIn) {
        dqlog('Navegando a "path" tras login recién hecho en la pantalla de cuenta.');
        renderDashboard();
        goTo('path');
      } else {
        dqlog('Re-renderizando pantalla de cuenta (ya logueado, sin cambio nuevo).');
        renderAccountScreen();
      }
    }
    syncProgressOnLogin(user).then(() => {
      dqlog('syncProgressOnLogin() terminó (segundo plano). state.user sigue siendo =', state.user ? state.user.email : null);
    });
  } else if (onAccountScreen) {
    dqlog('user es null y estamos en la pantalla de cuenta: renderizando formulario de login.');
    renderAccountScreen();
  }
}

function updateAccountButton() {
  const btn = document.getElementById('btn-account');
  if (btn) btn.classList.toggle('is-logged-in', !!state.user);
  dqlog('updateAccountButton() — is-logged-in =', !!state.user);
}

/* Combina el progreso local con el guardado en la nube sin perder nada:
   las listas se unen (unión) y el XP se recalcula a partir de los niveles
   completados —nunca se copia el número tal cual— para que no se pueda
   desincronizar de las recompensas reales de cada nivel. */
function mergeProgress(local, cloud) {
  if (!cloud) return local;
  const completedLevels = Array.from(new Set([...(local.completedLevels || []), ...(cloud.completedLevels || [])]));
  const perfectLevels = Array.from(new Set([...(local.perfectLevels || []), ...(cloud.perfectLevels || [])]));
  const badges = Array.from(new Set([...(local.badges || []), ...(cloud.badges || [])]));
  const xp = getAllLevels().reduce((sum, lvl) => (completedLevels.includes(lvl.id) ? sum + lvl.xp : sum), 0);

  // La racha es difícil de fusionar entre dos dispositivos con exactitud;
  // nos quedamos con la del que tenga la fecha de juego más reciente.
  let streak = local.streak || 0;
  let lastPlayDate = local.lastPlayDate || null;
  if (cloud.lastPlayDate && (!lastPlayDate || cloud.lastPlayDate > lastPlayDate)) {
    streak = cloud.streak || 0;
    lastPlayDate = cloud.lastPlayDate;
  }

  return { xp, streak, lastPlayDate, completedLevels, perfectLevels, badges };
}

/* Si Firestore no responde (base de datos no creada, reglas mal
   configuradas, sin red…) esto evita que la lectura se quede colgada
   indefinidamente: falla rápido con un error claro en vez de dejar la
   sincronización en el limbo. */
function withTimeout(promise, ms, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error(`Tiempo de espera agotado (${ms}ms): ${label}`)), ms))
  ]);
}

async function syncProgressOnLogin(user) {
  dqlog('syncProgressOnLogin() empieza para', user.email, '| state.firebaseReady =', state.firebaseReady);
  if (!state.firebaseReady) { dqlog('syncProgressOnLogin() aborta: firebaseReady es false.'); return; }
  const fb = window.DevQuestFirebase;
  try {
    const ref = fb.doc(fb.db, 'users', user.uid);
    dqlog('Leyendo documento de Firestore users/' + user.uid + '…');
    const snap = await withTimeout(fb.getDoc(ref), 8000, 'lectura de Firestore');
    const cloud = snap.exists() ? snap.data() : null;
    dqlog('Documento leído. existe =', snap.exists(), '| datos =', cloud);
    const merged = mergeProgress(state.progress, cloud);
    dqlog('Progreso fusionado =', merged);
    state.progress = merged;
    saveProgress(merged); // guarda en local y vuelve a subir el resultado fusionado
    updateHeaderStats();
    if (document.getElementById('screen-path').classList.contains('is-active')) {
      renderDashboard();
    }
    dqlog('syncProgressOnLogin() terminó con éxito.');
  } catch (err) {
    dqlog('syncProgressOnLogin() ERROR:', err && err.code, err);
    console.warn('DevQuest: no se pudo sincronizar el progreso al iniciar sesión.', err);
  }
}

function pushProgressToCloud(progress) {
  if (!state.firebaseReady || !state.user) return;
  const fb = window.DevQuestFirebase;
  const ref = fb.doc(fb.db, 'users', state.user.uid);
  dqlog('pushProgressToCloud() subiendo progreso para', state.user.email, progress);
  fb.setDoc(ref, {
    xp: progress.xp,
    streak: progress.streak,
    lastPlayDate: progress.lastPlayDate,
    completedLevels: progress.completedLevels,
    perfectLevels: progress.perfectLevels,
    badges: progress.badges,
    updatedAt: fb.serverTimestamp()
  }, { merge: true }).then(() => {
    dqlog('pushProgressToCloud() subida completada.');
  }).catch((err) => {
    dqlog('pushProgressToCloud() ERROR:', err && err.code, err);
    console.warn('DevQuest: no se pudo sincronizar el progreso con la nube.', err);
  });
}

/* ---- Pantalla de cuenta: perfil si hay sesión, formulario si no ---- */
function renderAccountScreen() {
  const container = document.getElementById('account-container');
  const fbCurrentUser = window.DevQuestFirebase ? window.DevQuestFirebase.auth.currentUser : undefined;
  dqlog('renderAccountScreen() — state.user =', state.user ? state.user.email : null, '| state.firebaseReady =', state.firebaseReady, '| firebase.auth.currentUser =', fbCurrentUser ? fbCurrentUser.email : fbCurrentUser);

  if (state.user) {
    const user = state.user;
    const initial = (user.email || '?').charAt(0).toUpperCase();
    container.innerHTML = `
      <div class="card account-profile">
        <div class="account-avatar">${user.photoURL ? `<img src="${escapeHtml(user.photoURL)}" alt="">` : initial}</div>
        <div class="account-email">${escapeHtml(user.email || '')}</div>
        <div class="account-sync-status">☁️ Progreso sincronizado con tu cuenta</div>
        <button type="button" id="btn-sign-out" class="btn btn-secondary btn-block">Cerrar sesión</button>
      </div>
    `;
    document.getElementById('btn-sign-out').addEventListener('click', handleSignOut);
    return;
  }

  if (!state.firebaseReady) {
    container.innerHTML = `
      <div class="card">
        <p class="auth-unavailable">La sincronización con la nube no está disponible ahora mismo (sin conexión, o el servicio todavía no ha cargado). Tu progreso se sigue guardando con normalidad en este dispositivo.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="card auth-card">
      <div class="auth-tabs">
        <button type="button" class="auth-tab is-active" data-mode="login">Iniciar sesión</button>
        <button type="button" class="auth-tab" data-mode="signup">Crear cuenta</button>
      </div>
      <form id="auth-form" class="auth-form" novalidate>
        <div class="form-field">
          <label for="auth-email">Correo electrónico</label>
          <input id="auth-email" type="email" autocomplete="email" required>
        </div>
        <div class="form-field">
          <label for="auth-password">Contraseña</label>
          <input id="auth-password" type="password" autocomplete="current-password" required minlength="6">
        </div>
        <div class="form-field hidden" id="auth-confirm-field">
          <label for="auth-confirm">Confirmar contraseña</label>
          <input id="auth-confirm" type="password" autocomplete="new-password" minlength="6">
        </div>
        <p id="auth-error" class="auth-error hidden"></p>
        <button type="submit" id="auth-submit" class="btn btn-primary btn-block">Iniciar sesión</button>
        <button type="button" id="auth-forgot" class="auth-forgot-link">¿Olvidaste tu contraseña?</button>
      </form>
      <div class="auth-divider"><span>o</span></div>
      <div id="google-signin-container" class="google-signin-container"></div>
      <p class="auth-guest-note">Tu progreso actual en este dispositivo se fusionará con tu cuenta al iniciar sesión.</p>
    </div>
  `;

  wireAuthForm();
}

function wireAuthForm() {
  const tabs = document.querySelectorAll('.auth-tab');
  const confirmField = document.getElementById('auth-confirm-field');
  const confirmInput = document.getElementById('auth-confirm');
  const submitBtn = document.getElementById('auth-submit');
  const forgotBtn = document.getElementById('auth-forgot');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      const isSignup = tab.dataset.mode === 'signup';
      confirmField.classList.toggle('hidden', !isSignup);
      confirmInput.required = isSignup;
      submitBtn.textContent = isSignup ? 'Crear cuenta' : 'Iniciar sesión';
      forgotBtn.classList.toggle('hidden', isSignup);
      hideAuthError();
    });
  });

  document.getElementById('auth-form').addEventListener('submit', handleAuthFormSubmit);
  forgotBtn.addEventListener('click', handleForgotPassword);
  renderGoogleSignInButton();
}

function showAuthError(message, isSuccess) {
  const el = document.getElementById('auth-error');
  if (!el) return;
  el.textContent = message;
  el.classList.remove('hidden');
  el.classList.toggle('is-success', !!isSuccess);
}
function hideAuthError() {
  const el = document.getElementById('auth-error');
  if (el) el.classList.add('hidden');
}
function setAuthBusy(busy) {
  document.querySelectorAll('#screen-account button, #screen-account input').forEach((el) => { el.disabled = busy; });
}

async function handleAuthFormSubmit(e) {
  e.preventDefault();
  const fb = window.DevQuestFirebase;
  if (!fb) return;

  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const mode = document.querySelector('.auth-tab.is-active').dataset.mode;
  hideAuthError();

  if (mode === 'signup') {
    const confirm = document.getElementById('auth-confirm').value;
    if (password !== confirm) {
      showAuthError('Las contraseñas no coinciden.');
      return;
    }
  }

  setAuthBusy(true);
  try {
    if (mode === 'login') {
      await fb.signInWithEmailAndPassword(fb.auth, email, password);
    } else {
      await fb.createUserWithEmailAndPassword(fb.auth, email, password);
    }
  } catch (err) {
    showAuthError(getAuthErrorMessage(err));
  } finally {
    setAuthBusy(false);
  }
}

/* Client ID web de OAuth que Firebase generó automáticamente para este
   proyecto al activar Google como proveedor (mismo client_id que ya usaba
   el flujo anterior por redirect, visible en las URLs de Google). Google
   Identity Services (GIS) lo usa para emitir un token de identidad
   directamente en esta página, sin depender de cookies/almacenamiento
   entre devquest-73552.firebaseapp.com y este dominio. */
const GOOGLE_OAUTH_CLIENT_ID = '906497704896-97a6i6hri8sdi23jqsvn7pb2ahg8fv6c.apps.googleusercontent.com';
let googleIdentityInitialized = false;

function renderGoogleSignInButton() {
  const container = document.getElementById('google-signin-container');
  if (!container) return;

  if (!window.google || !window.google.accounts || !window.google.accounts.id) {
    dqlog('Google Identity Services todavía no ha cargado; reintentando en 500ms.');
    container.innerHTML = '<p class="auth-unavailable" style="padding:10px 0;">Cargando el botón de Google…</p>';
    setTimeout(() => {
      if (document.getElementById('google-signin-container')) renderGoogleSignInButton();
    }, 500);
    return;
  }

  if (!googleIdentityInitialized) {
    dqlog('Inicializando Google Identity Services con client_id', GOOGLE_OAUTH_CLIENT_ID);
    window.google.accounts.id.initialize({
      client_id: GOOGLE_OAUTH_CLIENT_ID,
      callback: handleGoogleCredentialResponse
    });
    googleIdentityInitialized = true;
  }

  container.innerHTML = '';
  window.google.accounts.id.renderButton(container, {
    theme: 'filled_black',
    size: 'large',
    shape: 'pill',
    text: 'continue_with',
    logo_alignment: 'left',
    width: Math.min(container.parentElement.clientWidth || 300, 300)
  });
  dqlog('Botón de Google renderizado.');
}

async function handleGoogleCredentialResponse(response) {
  dqlog('handleGoogleCredentialResponse() recibido. ¿Hay credential JWT? ->', !!(response && response.credential));
  const fb = window.DevQuestFirebase;
  if (!fb || !response || !response.credential) return;
  hideAuthError();
  setAuthBusy(true);
  try {
    const credential = fb.GoogleAuthProvider.credential(response.credential);
    const result = await fb.signInWithCredential(fb.auth, credential);
    dqlog('signInWithCredential() completado. usuario =', result.user.email);
  } catch (err) {
    dqlog('signInWithCredential() ERROR:', err && err.code, err);
    showAuthError(getAuthErrorMessage(err));
  } finally {
    setAuthBusy(false);
  }
}

async function handleForgotPassword() {
  const fb = window.DevQuestFirebase;
  if (!fb) return;
  const email = document.getElementById('auth-email').value.trim();
  if (!email) {
    showAuthError('Escribe tu correo electrónico arriba y vuelve a pulsar el enlace.');
    return;
  }
  hideAuthError();
  try {
    await fb.sendPasswordResetEmail(fb.auth, email);
    showAuthError('Te hemos enviado un correo para restablecer tu contraseña.', true);
  } catch (err) {
    showAuthError(getAuthErrorMessage(err));
  }
}

function handleSignOut() {
  const fb = window.DevQuestFirebase;
  if (!fb) return;
  fb.signOut(fb.auth).catch((err) => console.warn('DevQuest: error al cerrar sesión.', err));
}

/* ==========================================================================
   11. INICIALIZACIÓN
   ========================================================================== */
function wireStaticEvents() {
  document.getElementById('btn-start').addEventListener('click', enterApp);
  document.getElementById('btn-badges').addEventListener('click', () => { renderBadges(); goTo('achievements'); });
  document.getElementById('btn-hardware').addEventListener('click', () => { renderHardwareScreen(); goTo('hardware'); });
  document.getElementById('btn-account').addEventListener('click', () => {
    dqlog('Clic en el icono de cuenta. state.user =', state.user ? state.user.email : null, '| state.firebaseReady =', state.firebaseReady);
    renderAccountScreen();
    goTo('account');
  });
  document.getElementById('btn-back').addEventListener('click', () => { renderDashboard(); goTo('path'); });
  document.getElementById('btn-modal-continue').addEventListener('click', closeLevelCompleteModal);
}

function init() {
  state.progress = loadProgress();
  registerServiceWorker();
  wireStaticEvents();

  if (window.DevQuestFirebase) {
    dqlog('init(): window.DevQuestFirebase ya estaba listo, llamando a initFirebaseAuth() ya mismo.');
    initFirebaseAuth();
  } else {
    dqlog('init(): window.DevQuestFirebase aún no existe, esperando el evento devquest-firebase-ready…');
    window.addEventListener('devquest-firebase-ready', () => {
      dqlog('Evento devquest-firebase-ready recibido.');
      initFirebaseAuth();
    }, { once: true });
  }

  setTimeout(() => {
    document.getElementById('screen-splash').classList.remove('is-active');
    const hasProgress = state.progress.completedLevels.length > 0 || state.progress.xp > 0;
    if (hasProgress) {
      enterApp();
    } else {
      document.getElementById('screen-welcome').classList.add('is-active');
    }
  }, 1300);
}

document.addEventListener('DOMContentLoaded', init);
