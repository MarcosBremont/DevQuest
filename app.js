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
  { id: 'js', title: 'JavaScript', icon: '⚡', levels: JS_LEVELS }
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
  { id: 'streak-3', name: 'Racha de 3 días', desc: 'Practica 3 días seguidos', icon: '🔥', check: (p) => p.streak >= 3 },
  { id: 'streak-7', name: 'Racha de 7 días', desc: 'Practica 7 días seguidos', icon: '🔥', check: (p) => p.streak >= 7 },
  { id: 'full-stack', name: 'Full Stack Junior', desc: 'Completa todos los módulos de DevQuest', icon: '🚀', check: (p) => areAllModulesCompleted(p) }
];

/* ==========================================================================
   4. ESTADO Y NAVEGACIÓN
   ========================================================================== */
const state = { progress: null, currentLevelId: null };
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
  const all = getAllLevels();
  const idx = all.findIndex((l) => l.id === levelId);
  if (idx <= 0) return true;
  return state.progress.completedLevels.includes(all[idx - 1].id);
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
   10. INICIALIZACIÓN
   ========================================================================== */
function wireStaticEvents() {
  document.getElementById('btn-start').addEventListener('click', enterApp);
  document.getElementById('btn-badges').addEventListener('click', () => { renderBadges(); goTo('achievements'); });
  document.getElementById('btn-back').addEventListener('click', () => { renderDashboard(); goTo('path'); });
  document.getElementById('btn-modal-continue').addEventListener('click', closeLevelCompleteModal);
}

function init() {
  state.progress = loadProgress();
  registerServiceWorker();
  wireStaticEvents();

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
