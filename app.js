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
  { id: 'csharp', title: 'C#', icon: '🔷', levels: CSHARP_LEVELS }
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
  return MODULES.flatMap((m) => m.levels);
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
  `;
  const dotsEl = container.querySelector('#quiz-dots');
  const questionArea = container.querySelector('#quiz-question-area');
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

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderQuestion();
      } else {
        finishLevel(level, mistakesOccurred);
      }
    }, correct ? 1100 : 1700);
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
