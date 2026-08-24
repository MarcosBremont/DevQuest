/* ==========================================================================
   DevQuest — content-css.js
   Niveles del módulo CSS3 (de principiante a avanzado).
   Cada nivel: { id, title, subtitle, xp, type, theory, exercise }
   ========================================================================== */

'use strict';

const CSS_LEVELS = [
  {
    id: 'css-1',
    title: 'Colores y propiedades visuales',
    subtitle: 'Nivel 1',
    xp: 50,
    type: 'quiz',
    theory: {
      paragraphs: [
        'CSS (<em>Cascading Style Sheets</em>) controla la apariencia visual de una página: colores, tipografías, tamaños y bordes.',
        'Las propiedades se escriben como <code>propiedad: valor;</code> dentro de una regla que apunta a un selector.'
      ],
      code:
        '<span class="tok-prop">.tarjeta</span> {\n' +
        '  <span class="tok-prop">color</span>: <span class="tok-val">#39ffb0</span>;\n' +
        '  <span class="tok-prop">font-size</span>: <span class="tok-val">1.2rem</span>;\n' +
        '  <span class="tok-prop">border-radius</span>: <span class="tok-val">12px</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas rápidas sobre propiedades básicas de CSS.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad cambia el color del texto?', options: ['color', 'background-color', 'font-color', 'text-style'], answer: 'color' },
        { prompt: '¿Qué propiedad ajusta el tamaño de la fuente?', options: ['font-size', 'text-size', 'size', 'font-weight'], answer: 'font-size' },
        { prompt: '¿Qué unidad se adapta al tamaño de fuente del elemento raíz (html)?', options: ['rem', 'px', 'pt', 'vh'], answer: 'rem' },
        { prompt: '¿Qué propiedad redondea las esquinas de un elemento?', options: ['border-radius', 'corner-radius', 'border-round', 'radius'], answer: 'border-radius' }
      ]
    }
  },
  {
    id: 'css-2',
    title: 'Flexbox Align',
    subtitle: 'Nivel 2',
    xp: 65,
    type: 'flexbox-align',
    theory: {
      paragraphs: [
        'Flexbox es un sistema de <strong>layout</strong> que organiza elementos dentro de un contenedor a lo largo de un eje.',
        '<code>justify-content</code> alinea los elementos en el <strong>eje principal</strong> (horizontal por defecto) y <code>align-items</code> los alinea en el <strong>eje transversal</strong> (vertical por defecto).'
      ],
      code:
        '<span class="tok-prop">.contenedor</span> {\n' +
        '  <span class="tok-prop">display</span>: <span class="tok-val">flex</span>;\n' +
        '  <span class="tok-prop">justify-content</span>: <span class="tok-val">center</span>;\n' +
        '  <span class="tok-prop">align-items</span>: <span class="tok-val">center</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Ajusta las propiedades de Flexbox hasta lograr la disposición pedida en cada ronda.',
      justifyOptions: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
      alignOptions: ['flex-start', 'center', 'flex-end', 'stretch'],
      rounds: [
        { instruction: 'Centra las 3 cajas horizontal y verticalmente dentro del contenedor.', target: { justifyContent: 'center', alignItems: 'center' } },
        { instruction: 'Lleva las cajas al final del eje principal (derecha) y arriba del eje transversal.', target: { justifyContent: 'flex-end', alignItems: 'flex-start' } },
        { instruction: 'Distribuye el espacio dejando la primera y la última caja pegadas a los bordes, centradas verticalmente.', target: { justifyContent: 'space-between', alignItems: 'center' } }
      ]
    }
  },
  {
    id: 'css-3',
    title: 'Box Model',
    subtitle: 'Nivel 3',
    xp: 55,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Todo elemento HTML es una caja rectangular compuesta por: contenido, <code>padding</code> (espacio interno), <code>border</code> (borde) y <code>margin</code> (espacio externo).',
        'Por defecto, <code>width</code> solo afecta al contenido. Con <code>box-sizing: border-box</code> el padding y el borde se incluyen dentro del ancho total, lo que facilita el cálculo de tamaños.'
      ],
      code:
        '<span class="tok-prop">.caja</span> {\n' +
        '  <span class="tok-prop">width</span>: <span class="tok-val">200px</span>;\n' +
        '  <span class="tok-prop">padding</span>: <span class="tok-val">16px</span>;\n' +
        '  <span class="tok-prop">border</span>: <span class="tok-val">2px solid #45d3ff</span>;\n' +
        '  <span class="tok-prop">margin</span>: <span class="tok-val">10px</span>;\n' +
        '  <span class="tok-prop">box-sizing</span>: <span class="tok-val">border-box</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre el modelo de caja de CSS.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad añade espacio interno entre el contenido y el borde?', options: ['padding', 'margin', 'border', 'gap'], answer: 'padding' },
        { prompt: '¿Qué propiedad añade espacio externo entre un elemento y sus vecinos?', options: ['margin', 'padding', 'spacing', 'border'], answer: 'margin' },
        { prompt: '¿Qué valor de box-sizing incluye el padding y el borde dentro del ancho definido?', options: ['border-box', 'content-box', 'padding-box', 'full-box'], answer: 'border-box' },
        { prompt: '¿Qué propiedad dibuja un contorno visible alrededor de la caja?', options: ['border', 'outline-color', 'margin', 'padding'], answer: 'border' }
      ]
    }
  },
  {
    id: 'css-4',
    title: 'Selectores y pseudo-clases',
    subtitle: 'Nivel 4',
    xp: 60,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los selectores determinan a qué elementos se aplica una regla CSS: por etiqueta (<code>p</code>), por clase (<code>.tarjeta</code>) o por id (<code>#header</code>).',
        'Las pseudo-clases aplican estilos según un estado o posición, como <code>:hover</code> (al pasar el ratón) o <code>:nth-child()</code> (según la posición del elemento).'
      ],
      code:
        '<span class="tok-prop">.boton:hover</span> {\n' +
        '  <span class="tok-prop">background</span>: <span class="tok-val">#39ffb0</span>;\n' +
        '}\n\n' +
        '<span class="tok-prop">li:nth-child(2)</span> {\n' +
        '  <span class="tok-prop">color</span>: <span class="tok-val">#45d3ff</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre selectores y pseudo-clases.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué selector apunta a todos los elementos con class="tarjeta"?', options: ['.tarjeta', '#tarjeta', 'tarjeta', '*tarjeta'], answer: '.tarjeta' },
        { prompt: '¿Qué selector apunta al único elemento con id="menu"?', options: ['#menu', '.menu', 'menu', '@menu'], answer: '#menu' },
        { prompt: '¿Qué pseudo-clase aplica un estilo cuando el ratón pasa sobre un elemento?', options: [':hover', ':active', ':focus', ':visited'], answer: ':hover' },
        { prompt: '¿Qué hace el selector li:first-child?', options: ['Selecciona el primer li dentro de su contenedor', 'Selecciona todos los li', 'Selecciona el último li', 'Selecciona los li con clase first'], answer: 'Selecciona el primer li dentro de su contenedor' }
      ]
    }
  },
  {
    id: 'css-5',
    title: 'Diseño responsive',
    subtitle: 'Nivel 5',
    xp: 65,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El diseño responsive adapta la página a distintos tamaños de pantalla. La etiqueta <code>&lt;meta name="viewport"&gt;</code> le indica al navegador móvil que use el ancho real del dispositivo.',
        'Las <strong>media queries</strong> aplican estilos solo cuando se cumple una condición, como un ancho mínimo de pantalla. El enfoque <em>mobile-first</em> escribe primero los estilos para móvil y luego los amplía.'
      ],
      code:
        '<span class="tok-comment">/* Estilos base: móvil */</span>\n' +
        '<span class="tok-prop">.tarjeta</span> { <span class="tok-prop">width</span>: <span class="tok-val">100%</span>; }\n\n' +
        '<span class="tok-kw">@media</span> (min-width: 768px) {\n' +
        '  <span class="tok-prop">.tarjeta</span> { <span class="tok-prop">width</span>: <span class="tok-val">50%</span>; }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre diseño responsive.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué regla CSS aplica estilos solo a partir de cierto ancho de pantalla?', options: ['@media', '@viewport', '@responsive', '@screen'], answer: '@media' },
        { prompt: '¿Qué unidad es relativa al ancho de la ventana del navegador?', options: ['vw', 'px', 'pt', 'rem'], answer: 'vw' },
        { prompt: 'En el enfoque "mobile-first", ¿cómo se escriben los estilos?', options: ['Primero para móvil, luego se amplían con min-width', 'Primero para escritorio, luego se reducen', 'Solo se escriben para móvil', 'No importa el orden'], answer: 'Primero para móvil, luego se amplían con min-width' },
        { prompt: '¿Qué etiqueta meta es necesaria para que el diseño responsive funcione en móviles?', options: ['<meta name="viewport">', '<meta name="responsive">', '<meta charset="UTF-8">', '<meta name="mobile">'], answer: '<meta name="viewport">' }
      ]
    }
  },
  {
    id: 'css-6',
    title: 'Animaciones y transiciones',
    subtitle: 'Nivel 6',
    xp: 75,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La propiedad <code>transition</code> anima el cambio entre dos estados de una propiedad CSS de forma suave, por ejemplo al aplicar <code>:hover</code>.',
        'Las animaciones más complejas, con varios pasos, se definen con <code>@keyframes</code> y se activan con la propiedad <code>animation</code>.'
      ],
      code:
        '<span class="tok-prop">.boton</span> {\n' +
        '  <span class="tok-prop">transition</span>: <span class="tok-val">transform 0.3s ease</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.boton:hover</span> {\n' +
        '  <span class="tok-prop">transform</span>: <span class="tok-val">scale(1.1)</span>;\n' +
        '}\n\n' +
        '<span class="tok-kw">@keyframes</span> latido {\n' +
        '  0%   { <span class="tok-prop">transform</span>: <span class="tok-val">scale(1)</span>; }\n' +
        '  50%  { <span class="tok-prop">transform</span>: <span class="tok-val">scale(1.2)</span>; }\n' +
        '  100% { <span class="tok-prop">transform</span>: <span class="tok-val">scale(1)</span>; }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas avanzadas sobre animaciones CSS.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad hace que un cambio de estilo ocurra de forma gradual en vez de instantánea?', options: ['transition', 'animation-name', 'transform', 'delay'], answer: 'transition' },
        { prompt: '¿Qué regla se usa para definir los pasos de una animación compleja?', options: ['@keyframes', '@animation', '@steps', '@transition'], answer: '@keyframes' },
        { prompt: '¿Qué propiedad permite escalar, rotar o mover un elemento sin afectar el flujo del documento?', options: ['transform', 'position', 'float', 'display'], answer: 'transform' },
        { prompt: '¿Qué propiedad controla cuántas veces se repite una animación?', options: ['animation-iteration-count', 'animation-repeat', 'animation-loop', 'transition-count'], answer: 'animation-iteration-count' }
      ]
    }
  },
  {
    id: 'css-7',
    title: 'Unidades de medida',
    subtitle: 'Nivel 7',
    xp: 55,
    type: 'quiz',
    theory: {
      paragraphs: [
        'CSS ofrece varias unidades para medir tamaños. <code>px</code> es un valor fijo en píxeles, mientras que <code>%</code>, <code>em</code> y <code>rem</code> son unidades relativas.',
        '<code>em</code> es relativo al tamaño de fuente del elemento padre, <code>rem</code> es relativo al tamaño de fuente del elemento raíz (<code>html</code>), y <code>vh</code>/<code>vw</code> son relativos al alto y ancho del viewport.'
      ],
      code:
        '<span class="tok-prop">.titulo</span> {\n' +
        '  <span class="tok-prop">font-size</span>: <span class="tok-val">2rem</span>;\n' +
        '  <span class="tok-prop">padding</span>: <span class="tok-val">1em</span>;\n' +
        '  <span class="tok-prop">width</span>: <span class="tok-val">50vw</span>;\n' +
        '  <span class="tok-prop">height</span>: <span class="tok-val">20vh</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre unidades de medida en CSS.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué unidad es relativa al tamaño de fuente del elemento raíz (html)?', options: ['rem', 'em', 'px', 'vh'], answer: 'rem' },
        { prompt: '¿Qué unidad representa el 1% del alto del viewport?', options: ['vh', 'vw', '%', 'rem'], answer: 'vh' },
        { prompt: '¿Qué unidad es relativa al tamaño de fuente del elemento padre?', options: ['em', 'rem', 'px', 'vw'], answer: 'em' },
        { prompt: '¿Cuál de estas unidades es fija y no cambia según el contexto?', options: ['px', 'em', 'rem', '%'], answer: 'px' }
      ]
    }
  },
  {
    id: 'css-8',
    title: 'Tipografía: fuentes y texto',
    subtitle: 'Nivel 8',
    xp: 58,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'La tipografía se controla con propiedades como <code>font-family</code> (tipo de letra), <code>font-weight</code> (grosor) y <code>line-height</code> (altura de línea).',
        '<code>text-align</code> alinea el texto horizontalmente dentro de su contenedor: izquierda, centro, derecha o justificado.'
      ],
      code:
        '<span class="tok-prop">p</span> {\n' +
        '  <span class="tok-prop">font-family</span>: <span class="tok-val">sans-serif</span>;\n' +
        '  <span class="tok-prop">font-weight</span>: <span class="tok-val">600</span>;\n' +
        '  <span class="tok-prop">line-height</span>: <span class="tok-val">1.5</span>;\n' +
        '  <span class="tok-prop">text-align</span>: <span class="tok-val">center</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Completa la propiedad CSS que falta en cada regla.',
      blanks: [
        { id: 'b1', before: '.parrafo {\n  ', after: ': Georgia, serif;\n}', answer: 'font-family', options: ['font-family', 'font-weight', 'font-style', 'text-family'] },
        { id: 'b2', before: '.titulo {\n  ', after: ': 700;\n}', answer: 'font-weight', options: ['font-weight', 'font-size', 'font-style', 'text-weight'] },
        { id: 'b3', before: '.texto {\n  ', after: ': 1.6;\n}', answer: 'line-height', options: ['line-height', 'letter-spacing', 'word-spacing', 'text-height'] },
        { id: 'b4', before: '.aviso {\n  ', after: ': center;\n}', answer: 'text-align', options: ['text-align', 'align-items', 'justify-content', 'text-position'] }
      ]
    }
  },
  {
    id: 'css-9',
    title: 'Fondos y background',
    subtitle: 'Nivel 9',
    xp: 60,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La propiedad <code>background-color</code> define el color de fondo de un elemento, y <code>background-image</code> permite usar una imagen como fondo.',
        '<code>background-size</code> controla cómo se ajusta la imagen dentro del elemento; valores comunes son <code>cover</code> (cubre todo el espacio, recortando si hace falta) y <code>contain</code> (se ve completa).'
      ],
      code:
        '<span class="tok-prop">.hero</span> {\n' +
        '  <span class="tok-prop">background-color</span>: <span class="tok-val">#0f1117</span>;\n' +
        '  <span class="tok-prop">background-image</span>: <span class="tok-val">url(fondo.jpg)</span>;\n' +
        '  <span class="tok-prop">background-size</span>: <span class="tok-val">cover</span>;\n' +
        '  <span class="tok-prop">background-position</span>: <span class="tok-val">center</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre fondos en CSS.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad define el color de fondo de un elemento?', options: ['background-color', 'color', 'fill', 'backdrop'], answer: 'background-color' },
        { prompt: '¿Qué propiedad permite usar una imagen como fondo?', options: ['background-image', 'background-src', 'image', 'background-url'], answer: 'background-image' },
        { prompt: '¿Qué valor de background-size hace que la imagen cubra todo el elemento, recortando si es necesario?', options: ['cover', 'contain', 'fill', 'auto'], answer: 'cover' },
        { prompt: '¿Qué propiedad controla si una imagen de fondo se repite o no?', options: ['background-repeat', 'background-size', 'background-position', 'background-clip'], answer: 'background-repeat' }
      ]
    }
  },
  {
    id: 'css-10',
    title: 'Display: block, inline e inline-block',
    subtitle: 'Nivel 10',
    xp: 62,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La propiedad <code>display</code> determina cómo se comporta un elemento en el flujo del documento. <code>block</code> ocupa todo el ancho disponible y empieza en una nueva línea; <code>inline</code> solo ocupa el espacio de su contenido y no acepta width ni height.',
        '<code>inline-block</code> combina lo mejor de ambos: fluye como inline pero acepta <code>width</code>, <code>height</code>, <code>padding</code> y <code>margin</code>. <code>display: none</code> oculta el elemento por completo, sacándolo del flujo.'
      ],
      code:
        '<span class="tok-prop">span</span> {\n' +
        '  <span class="tok-prop">display</span>: <span class="tok-val">inline-block</span>;\n' +
        '  <span class="tok-prop">width</span>: <span class="tok-val">100px</span>;\n' +
        '  <span class="tok-prop">height</span>: <span class="tok-val">40px</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.oculto</span> {\n' +
        '  <span class="tok-prop">display</span>: <span class="tok-val">none</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre la propiedad display.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué valor de display hace que un elemento ocupe todo el ancho disponible y empiece en una nueva línea?', options: ['block', 'inline', 'inline-block', 'none'], answer: 'block' },
        { prompt: '¿Qué valor de display NO permite establecer width ni height al elemento?', options: ['inline', 'block', 'inline-block', 'flex'], answer: 'inline' },
        { prompt: '¿Qué valor combina el flujo horizontal de inline con la posibilidad de definir width y height?', options: ['inline-block', 'block', 'inline', 'none'], answer: 'inline-block' },
        { prompt: '¿Qué valor de display oculta un elemento y lo saca por completo del flujo del documento?', options: ['none', 'inline', 'block', 'hidden'], answer: 'none' }
      ]
    }
  },
  {
    id: 'css-11',
    title: 'Posicionamiento: static y relative',
    subtitle: 'Nivel 11',
    xp: 64,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La propiedad <code>position</code> controla cómo se ubica un elemento. <code>static</code> es el valor por defecto: el elemento sigue el flujo normal y las propiedades <code>top</code>/<code>left</code> no tienen efecto.',
        '<code>relative</code> también respeta el flujo normal, pero permite desplazar el elemento desde su posición original usando <code>top</code>, <code>right</code>, <code>bottom</code> o <code>left</code>, sin afectar a los elementos vecinos.'
      ],
      code:
        '<span class="tok-prop">.caja</span> {\n' +
        '  <span class="tok-prop">position</span>: <span class="tok-val">relative</span>;\n' +
        '  <span class="tok-prop">top</span>: <span class="tok-val">10px</span>;\n' +
        '  <span class="tok-prop">left</span>: <span class="tok-val">20px</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre position: static y relative.',
      variant: 'plain',
      questions: [
        { prompt: '¿Cuál es el valor por defecto de la propiedad position?', options: ['static', 'relative', 'absolute', 'fixed'], answer: 'static' },
        { prompt: '¿Qué valor de position permite mover un elemento con top/left sin sacarlo del flujo normal?', options: ['relative', 'static', 'absolute', 'sticky'], answer: 'relative' },
        { prompt: 'Con position: static, ¿qué efecto tienen las propiedades top, left, right y bottom?', options: ['Ninguno, se ignoran', 'Mueven el elemento desde el borde de la ventana', 'Mueven el elemento respecto a su padre', 'Generan un error'], answer: 'Ninguno, se ignoran' },
        { prompt: 'Al usar position: relative con top: 10px, ¿respecto a qué se desplaza el elemento?', options: ['Respecto a su propia posición original', 'Respecto al elemento padre', 'Respecto a la ventana del navegador', 'Respecto al último elemento con position definida'], answer: 'Respecto a su propia posición original' }
      ]
    }
  },
  {
    id: 'css-12',
    title: 'Posicionamiento: absolute y fixed',
    subtitle: 'Nivel 12',
    xp: 66,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>position: absolute</code> saca al elemento del flujo normal y lo ubica respecto a su ancestro posicionado más cercano (el primero que tenga <code>position</code> distinto de <code>static</code>). Si no hay ninguno, se posiciona respecto al documento.',
        '<code>position: fixed</code> también saca al elemento del flujo, pero lo posiciona respecto a la ventana del navegador (viewport), por lo que permanece visible aunque se haga scroll.'
      ],
      code:
        '<span class="tok-prop">.modal</span> {\n' +
        '  <span class="tok-prop">position</span>: <span class="tok-val">fixed</span>;\n' +
        '  <span class="tok-prop">top</span>: <span class="tok-val">0</span>;\n' +
        '  <span class="tok-prop">right</span>: <span class="tok-val">0</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.tooltip</span> {\n' +
        '  <span class="tok-prop">position</span>: <span class="tok-val">absolute</span>;\n' +
        '  <span class="tok-prop">bottom</span>: <span class="tok-val">100%</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre position: absolute y fixed.',
      variant: 'plain',
      questions: [
        { prompt: '¿Respecto a qué se posiciona un elemento con position: absolute?', options: ['Su ancestro posicionado más cercano', 'Siempre respecto a la ventana del navegador', 'Siempre respecto a su elemento padre inmediato', 'Respecto al elemento anterior en el HTML'], answer: 'Su ancestro posicionado más cercano' },
        { prompt: '¿Qué valor de position mantiene un elemento fijo en pantalla incluso al hacer scroll?', options: ['fixed', 'absolute', 'relative', 'static'], answer: 'fixed' },
        { prompt: 'Para que position: absolute funcione respecto a un contenedor específico, ¿qué debe tener ese contenedor?', options: ['Una propiedad position distinta de static (por ejemplo relative)', 'Un display: flex', 'Un width definido en píxeles', 'Ninguna configuración especial'], answer: 'Una propiedad position distinta de static (por ejemplo relative)' },
        { prompt: '¿Qué tienen en común absolute y fixed respecto al flujo normal del documento?', options: ['Ambos sacan al elemento del flujo normal', 'Ambos respetan el flujo normal', 'Ambos requieren display: grid', 'Ninguno acepta z-index'], answer: 'Ambos sacan al elemento del flujo normal' }
      ]
    }
  },
  {
    id: 'css-13',
    title: 'z-index y apilamiento de capas',
    subtitle: 'Nivel 13',
    xp: 68,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Cuando varios elementos posicionados se superponen, <code>z-index</code> determina cuál se muestra por delante: a mayor valor, más arriba en la pila.',
        '<code>z-index</code> solo funciona en elementos con <code>position</code> distinto de <code>static</code> (relative, absolute, fixed o sticky).'
      ],
      code:
        '<span class="tok-prop">.fondo</span> {\n' +
        '  <span class="tok-prop">position</span>: <span class="tok-val">absolute</span>;\n' +
        '  <span class="tok-prop">z-index</span>: <span class="tok-val">1</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.modal</span> {\n' +
        '  <span class="tok-prop">position</span>: <span class="tok-val">absolute</span>;\n' +
        '  <span class="tok-prop">z-index</span>: <span class="tok-val">10</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre z-index y apilamiento de capas.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad controla qué elemento se muestra por delante cuando dos se superponen?', options: ['z-index', 'position', 'order', 'layer'], answer: 'z-index' },
        { prompt: 'Entre dos elementos superpuestos con position definida, ¿cuál se muestra encima?', options: ['El que tenga mayor z-index', 'El que tenga menor z-index', 'El que esté primero en el HTML', 'El que tenga mayor width'], answer: 'El que tenga mayor z-index' },
        { prompt: '¿Qué requisito necesita un elemento para que z-index tenga efecto?', options: ['Tener position distinto de static', 'Tener display: block', 'Tener un ancho definido', 'Estar dentro de un contenedor flex'], answer: 'Tener position distinto de static' },
        { prompt: '¿Puede z-index tener valores negativos?', options: ['Sí, para enviar el elemento detrás de otros', 'No, siempre debe ser positivo', 'Solo si se usa con float', 'No, CSS lo redondea a 0'], answer: 'Sí, para enviar el elemento detrás de otros' }
      ]
    }
  },
  {
    id: 'css-14',
    title: 'Bordes y sombras',
    subtitle: 'Nivel 14',
    xp: 70,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        '<code>border-style</code> define el trazo del borde: <code>solid</code>, <code>dashed</code>, <code>dotted</code>, entre otros. Se combina con <code>border-width</code> y <code>border-color</code>.',
        '<code>box-shadow</code> agrega una sombra alrededor de la caja, con desplazamiento horizontal, vertical, difuminado y color.'
      ],
      code:
        '<span class="tok-prop">.tarjeta</span> {\n' +
        '  <span class="tok-prop">border-style</span>: <span class="tok-val">dashed</span>;\n' +
        '  <span class="tok-prop">border-width</span>: <span class="tok-val">2px</span>;\n' +
        '  <span class="tok-prop">box-shadow</span>: <span class="tok-val">0 4px 12px rgba(0,0,0,0.3)</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Completa la propiedad CSS que falta en cada regla.',
      blanks: [
        { id: 'b1', before: '.linea {\n  ', after: ': dotted;\n}', answer: 'border-style', options: ['border-style', 'border-type', 'border-line', 'border-kind'] },
        { id: 'b2', before: '.marco {\n  ', after: ': 3px;\n}', answer: 'border-width', options: ['border-width', 'border-size', 'border-thickness', 'border-length'] },
        { id: 'b3', before: '.tarjeta {\n  ', after: ': 0 2px 8px rgba(0,0,0,0.4);\n}', answer: 'box-shadow', options: ['box-shadow', 'text-shadow', 'shadow', 'drop-shadow'] },
        { id: 'b4', before: '.circulo {\n  ', after: ': 50%;\n}', answer: 'border-radius', options: ['border-radius', 'border-round', 'corner-radius', 'radius'] }
      ]
    }
  },
  {
    id: 'css-15',
    title: 'Listas con estilo',
    subtitle: 'Nivel 15',
    xp: 72,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La propiedad <code>list-style-type</code> cambia el marcador de los elementos de una lista, por ejemplo círculos, números romanos o ninguno.',
        '<code>list-style</code> es la propiedad abreviada que combina tipo, posición e imagen del marcador; <code>list-style: none</code> es muy común para quitar los puntos en menús de navegación.'
      ],
      code:
        '<span class="tok-prop">ul.menu</span> {\n' +
        '  <span class="tok-prop">list-style</span>: <span class="tok-val">none</span>;\n' +
        '  <span class="tok-prop">padding</span>: <span class="tok-val">0</span>;\n' +
        '}\n' +
        '<span class="tok-prop">ol</span> {\n' +
        '  <span class="tok-prop">list-style-type</span>: <span class="tok-val">upper-roman</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre listas con estilo.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué declaración quita por completo los marcadores de una lista?', options: ['list-style: none', 'list-style-type: hidden', 'display: none', 'list-item: off'], answer: 'list-style: none' },
        { prompt: '¿Qué propiedad cambia el tipo de marcador (círculo, cuadrado, número romano)?', options: ['list-style-type', 'list-style-image', 'list-marker', 'bullet-style'], answer: 'list-style-type' },
        { prompt: 'En un menú de navegación hecho con una lista, ¿por qué suele usarse list-style: none?', options: ['Para quitar los puntos y que se vea como un menú, no como una lista', 'Porque es obligatorio en HTML5', 'Para que los enlaces sean clicables', 'Para centrar el menú'], answer: 'Para quitar los puntos y que se vea como un menú, no como una lista' },
        { prompt: '¿Qué propiedad indica desde dónde se posiciona el marcador respecto al texto?', options: ['list-style-position', 'list-style-type', 'text-indent', 'list-align'], answer: 'list-style-position' }
      ]
    }
  },
  {
    id: 'css-16',
    title: 'Cursor y estados del puntero',
    subtitle: 'Nivel 16',
    xp: 74,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La propiedad <code>cursor</code> cambia el ícono del puntero del mouse al pasar sobre un elemento, por ejemplo <code>pointer</code> para indicar que es clicable.',
        'Combinar <code>cursor</code> con pseudo-clases como <code>:hover</code> o <code>:disabled</code> ayuda a comunicar visualmente si un elemento es interactivo o no.'
      ],
      code:
        '<span class="tok-prop">.boton</span> {\n' +
        '  <span class="tok-prop">cursor</span>: <span class="tok-val">pointer</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.boton:disabled</span> {\n' +
        '  <span class="tok-prop">cursor</span>: <span class="tok-val">not-allowed</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre cursor y estados del puntero.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad cambia el ícono del cursor al pasar sobre un elemento?', options: ['cursor', 'pointer-events', 'hover', 'mouse-style'], answer: 'cursor' },
        { prompt: '¿Qué valor de cursor suele usarse para indicar que un elemento es clicable, como un botón o enlace?', options: ['pointer', 'hand', 'click', 'default'], answer: 'pointer' },
        { prompt: '¿Qué valor de cursor indica que una acción no está disponible?', options: ['not-allowed', 'disabled', 'blocked', 'wait'], answer: 'not-allowed' },
        { prompt: '¿Qué pseudo-clase permite aplicar un cursor distinto a un botón deshabilitado?', options: [':disabled', ':hover', ':focus', ':empty'], answer: ':disabled' }
      ]
    }
  },
  {
    id: 'css-17',
    title: 'Comentarios y organización del código',
    subtitle: 'Nivel 17',
    xp: 76,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los comentarios en CSS se escriben entre <code>/* */</code> y no se muestran en la página; sirven para explicar o dejar notas en el código.',
        'Organizar el CSS en secciones (variables, reset, tipografía, componentes, layout) con comentarios facilita mantener el código a medida que el proyecto crece.'
      ],
      code:
        '<span class="tok-comment">/* ===== Colores base ===== */</span>\n' +
        '<span class="tok-prop">:root</span> {\n' +
        '  <span class="tok-prop">--color-primario</span>: <span class="tok-val">#39ffb0</span>;\n' +
        '}\n\n' +
        '<span class="tok-comment">/* Botones */</span>\n' +
        '<span class="tok-prop">.boton</span> {\n' +
        '  <span class="tok-prop">background</span>: <span class="tok-val">var(--color-primario)</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre comentarios y organización del CSS.',
      variant: 'plain',
      questions: [
        { prompt: '¿Cómo se escribe un comentario en CSS?', options: ['/* comentario */', '// comentario', '<!-- comentario -->', '# comentario'], answer: '/* comentario */' },
        { prompt: '¿Los comentarios en CSS se muestran en la página al usuario final?', options: ['No, nunca se muestran', 'Sí, siempre se muestran', 'Solo si tienen la clase comment', 'Solo en navegadores antiguos'], answer: 'No, nunca se muestran' },
        { prompt: '¿Qué ventaja tiene organizar el CSS en secciones comentadas?', options: ['Facilita encontrar y mantener el código', 'Hace que la página cargue más rápido', 'Es obligatorio para que el CSS funcione', 'Reduce el tamaño del archivo'], answer: 'Facilita encontrar y mantener el código' },
        { prompt: '¿Cuál de estos NO es un comentario válido en CSS?', options: ['// comentario', '/* comentario */', '/* comentario\n   en varias líneas */', '/* -- nota -- */'], answer: '// comentario' }
      ]
    }
  },
  {
    id: 'css-18',
    title: 'Formas de vincular CSS a un HTML',
    subtitle: 'Nivel 18',
    xp: 78,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Hay tres formas de aplicar CSS a un documento HTML: <strong>inline</strong> (atributo <code>style</code> en la etiqueta), <strong>interno</strong> (etiqueta <code>&lt;style&gt;</code> en el head) y <strong>externo</strong> (archivo .css enlazado con <code>&lt;link&gt;</code>).',
        'La forma externa es la más recomendada en proyectos grandes porque separa contenido y estilo, permite reutilizar el mismo CSS en varias páginas y se puede cachear en el navegador.'
      ],
      code:
        '<span class="tok-tag">&lt;link</span> <span class="tok-attr">rel</span>=<span class="tok-string">"stylesheet"</span> <span class="tok-attr">href</span>=<span class="tok-string">"estilos.css"</span><span class="tok-tag">&gt;</span>\n\n' +
        '<span class="tok-tag">&lt;style&gt;</span>\n' +
        '  <span class="tok-prop">body</span> { <span class="tok-prop">margin</span>: <span class="tok-val">0</span>; }\n' +
        '<span class="tok-tag">&lt;/style&gt;</span>\n\n' +
        '<span class="tok-tag">&lt;p</span> <span class="tok-attr">style</span>=<span class="tok-string">"color: red;"</span><span class="tok-tag">&gt;</span>Texto<span class="tok-tag">&lt;/p&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre las formas de vincular CSS a un HTML.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué atributo se usa para aplicar CSS inline directamente en una etiqueta HTML?', options: ['style', 'class', 'css', 'link'], answer: 'style' },
        { prompt: '¿Qué etiqueta enlaza un archivo CSS externo?', options: ['link', 'style', 'script', 'css'], answer: 'link' },
        { prompt: '¿Qué forma de aplicar CSS es la más recomendada para proyectos grandes?', options: ['Externa, con un archivo .css enlazado', 'Inline, en cada etiqueta', 'Interna, en el head de cada página', 'No importa, todas son iguales'], answer: 'Externa, con un archivo .css enlazado' },
        { prompt: '¿Qué etiqueta se usa para escribir CSS interno dentro del propio HTML?', options: ['style', 'link', 'script', 'css'], answer: 'style' }
      ]
    }
  },
  {
    id: 'css-19',
    title: 'Especificidad y cascada CSS',
    subtitle: 'Nivel 19',
    xp: 79,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'Cuando varias reglas CSS afectan al mismo elemento, la <strong>especificidad</strong> decide cuál gana. Los selectores de id pesan más que las clases, y las clases pesan más que los selectores de etiqueta.',
        'Los estilos <strong>inline</strong> (atributo style) tienen la especificidad más alta de todas, por encima de cualquier selector en una hoja de estilos, salvo que se use <code>!important</code>.'
      ],
      code:
        '<span class="tok-prop">p</span> { <span class="tok-prop">color</span>: <span class="tok-val">black</span>; }          ' + '<span class="tok-comment">/* etiqueta */</span>\n' +
        '<span class="tok-prop">.aviso</span> { <span class="tok-prop">color</span>: <span class="tok-val">orange</span>; }   ' + '<span class="tok-comment">/* clase */</span>\n' +
        '<span class="tok-prop">#principal</span> { <span class="tok-prop">color</span>: <span class="tok-val">blue</span>; } ' + '<span class="tok-comment">/* id */</span>'
    },
    exercise: {
      instructions: 'Ordená estas formas de aplicar el color de un texto, de menor a mayor especificidad.',
      items: [
        { id: 'a', code: 'p { color: black; }' },
        { id: 'b', code: '.aviso { color: orange; }' },
        { id: 'c', code: '#principal { color: blue; }' },
        { id: 'd', code: 'style="color: red;" (inline)' }
      ],
      correctOrder: ['a', 'b', 'c', 'd']
    }
  },
  {
    id: 'css-20',
    title: 'Herencia de propiedades',
    subtitle: 'Nivel 20',
    xp: 80,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Algunas propiedades CSS se <strong>heredan</strong> automáticamente de un elemento padre a sus hijos, como <code>color</code>, <code>font-family</code> o <code>line-height</code>.',
        'Otras propiedades, como <code>border</code>, <code>margin</code> o <code>padding</code>, NO se heredan por defecto: cada elemento debe definirlas explícitamente. La palabra clave <code>inherit</code> fuerza a un elemento a heredar el valor de su padre.'
      ],
      code:
        '<span class="tok-prop">body</span> {\n' +
        '  <span class="tok-prop">color</span>: <span class="tok-val">#222</span>;\n' +
        '  <span class="tok-prop">font-family</span>: <span class="tok-val">sans-serif</span>;\n' +
        '}\n' +
        '<span class="tok-comment">/* los párrafos heredan color y font-family automáticamente */</span>\n\n' +
        '<span class="tok-prop">.hijo</span> {\n' +
        '  <span class="tok-prop">border</span>: <span class="tok-val">inherit</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre herencia de propiedades en CSS.',
      variant: 'plain',
      questions: [
        { prompt: '¿Cuál de estas propiedades SÍ se hereda por defecto de padre a hijo?', options: ['color', 'border', 'margin', 'padding'], answer: 'color' },
        { prompt: '¿Cuál de estas propiedades NO se hereda por defecto?', options: ['border', 'font-family', 'color', 'line-height'], answer: 'border' },
        { prompt: '¿Qué valor especial fuerza a un elemento a tomar el valor de su padre en una propiedad que normalmente no se hereda?', options: ['inherit', 'initial', 'unset', 'auto'], answer: 'inherit' },
        { prompt: 'Si defino color en el elemento body, ¿qué pasa con el texto de un párrafo dentro de body que no define su propio color?', options: ['Hereda el color de body', 'Se muestra en negro sin importar el color de body', 'CSS genera un error', 'El texto desaparece'], answer: 'Hereda el color de body' }
      ]
    }
  },
  {
    id: 'css-21',
    title: 'Flexbox: flex-direction y flex-wrap',
    subtitle: 'Nivel 21',
    xp: 80,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>flex-direction</code> define el eje principal del contenedor flex: <code>row</code> (horizontal, por defecto), <code>column</code> (vertical), o sus versiones invertidas <code>row-reverse</code> y <code>column-reverse</code>.',
        'Por defecto los elementos flex intentan caber en una sola línea. <code>flex-wrap: wrap</code> permite que pasen a la siguiente línea cuando no hay espacio suficiente.'
      ],
      code:
        '<span class="tok-prop">.contenedor</span> {\n' +
        '  <span class="tok-prop">display</span>: <span class="tok-val">flex</span>;\n' +
        '  <span class="tok-prop">flex-direction</span>: <span class="tok-val">column</span>;\n' +
        '  <span class="tok-prop">flex-wrap</span>: <span class="tok-val">wrap</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre flex-direction y flex-wrap.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad cambia el eje principal de un contenedor flex de horizontal a vertical?', options: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items'], answer: 'flex-direction' },
        { prompt: '¿Qué valor de flex-direction apila los elementos verticalmente?', options: ['column', 'row', 'wrap', 'column-reverse'], answer: 'column' },
        { prompt: '¿Qué propiedad permite que los elementos flex pasen a una nueva línea cuando no caben?', options: ['flex-wrap', 'flex-direction', 'flex-flow', 'overflow'], answer: 'flex-wrap' },
        { prompt: '¿Cuál es el valor por defecto de flex-wrap?', options: ['nowrap', 'wrap', 'wrap-reverse', 'auto'], answer: 'nowrap' }
      ]
    }
  },
  {
    id: 'css-22',
    title: 'Flexbox: grow, shrink y basis',
    subtitle: 'Nivel 22',
    xp: 83,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>flex-grow</code> indica cuánto puede crecer un elemento para ocupar el espacio sobrante del contenedor, en proporción al resto. <code>flex-shrink</code> indica cuánto puede encogerse si no hay espacio suficiente.',
        '<code>flex-basis</code> define el tamaño inicial del elemento antes de repartir el espacio sobrante. La propiedad abreviada <code>flex</code> combina las tres: <code>flex: grow shrink basis;</code>.'
      ],
      code:
        '<span class="tok-prop">.item</span> {\n' +
        '  <span class="tok-prop">flex-grow</span>: <span class="tok-val">1</span>;\n' +
        '  <span class="tok-prop">flex-shrink</span>: <span class="tok-val">0</span>;\n' +
        '  <span class="tok-prop">flex-basis</span>: <span class="tok-val">200px</span>;\n' +
        '}\n' +
        '<span class="tok-comment">/* equivalente a: */</span>\n' +
        '<span class="tok-prop">.item</span> {\n' +
        '  <span class="tok-prop">flex</span>: <span class="tok-val">1 0 200px</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre flex-grow, flex-shrink y flex-basis.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad controla cuánto puede crecer un elemento flex para ocupar el espacio sobrante?', options: ['flex-grow', 'flex-shrink', 'flex-basis', 'flex-wrap'], answer: 'flex-grow' },
        { prompt: '¿Qué propiedad controla cuánto puede encogerse un elemento flex si falta espacio?', options: ['flex-shrink', 'flex-grow', 'flex-basis', 'flex-direction'], answer: 'flex-shrink' },
        { prompt: '¿Qué propiedad define el tamaño inicial de un elemento flex antes de repartir el espacio sobrante?', options: ['flex-basis', 'flex-grow', 'flex-shrink', 'width'], answer: 'flex-basis' },
        { prompt: 'Si un elemento tiene flex-grow: 0, ¿qué ocurre con el espacio sobrante del contenedor?', options: ['El elemento no crece, mantiene su tamaño base', 'El elemento ocupa todo el espacio sobrante', 'El contenedor genera un error', 'El elemento se encoge a 0'], answer: 'El elemento no crece, mantiene su tamaño base' }
      ]
    }
  },
  {
    id: 'css-23',
    title: 'CSS Grid: conceptos básicos',
    subtitle: 'Nivel 23',
    xp: 86,
    type: 'quiz',
    theory: {
      paragraphs: [
        'CSS Grid es un sistema de layout en dos dimensiones (filas y columnas). Se activa con <code>display: grid</code> en el contenedor.',
        '<code>grid-template-columns</code> y <code>grid-template-rows</code> definen cuántas filas/columnas tiene la grilla y su tamaño. La función <code>repeat()</code> y la unidad <code>fr</code> (fracción del espacio disponible) simplifican la escritura.'
      ],
      code:
        '<span class="tok-prop">.grid</span> {\n' +
        '  <span class="tok-prop">display</span>: <span class="tok-val">grid</span>;\n' +
        '  <span class="tok-prop">grid-template-columns</span>: <span class="tok-val">repeat(3, 1fr)</span>;\n' +
        '  <span class="tok-prop">grid-template-rows</span>: <span class="tok-val">100px auto</span>;\n' +
        '  <span class="tok-prop">gap</span>: <span class="tok-val">16px</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre los conceptos básicos de CSS Grid.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad activa el layout de Grid en un contenedor?', options: ['display: grid', 'display: flex', 'position: grid', 'layout: grid'], answer: 'display: grid' },
        { prompt: '¿Qué propiedad define el número y tamaño de las columnas de la grilla?', options: ['grid-template-columns', 'grid-template-rows', 'grid-column', 'columns'], answer: 'grid-template-columns' },
        { prompt: '¿Qué representa la unidad fr en CSS Grid?', options: ['Una fracción del espacio disponible', 'Un valor fijo en píxeles', 'Un porcentaje del viewport', 'La cantidad de filas'], answer: 'Una fracción del espacio disponible' },
        { prompt: '¿Qué hace repeat(3, 1fr) dentro de grid-template-columns?', options: ['Crea 3 columnas de igual ancho', 'Crea 3 filas de igual alto', 'Repite el contenido 3 veces', 'Crea 1 columna de 3fr'], answer: 'Crea 3 columnas de igual ancho' }
      ]
    }
  },
  {
    id: 'css-24',
    title: 'CSS Grid: posicionar elementos',
    subtitle: 'Nivel 24',
    xp: 89,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Dentro de una grilla, se puede ubicar cada elemento en filas y columnas específicas con <code>grid-column</code> y <code>grid-row</code>, usando los números de línea de la grilla.',
        'Por ejemplo, <code>grid-column: 1 / 3;</code> hace que un elemento ocupe desde la línea 1 hasta la línea 3, es decir, dos columnas.'
      ],
      code:
        '<span class="tok-prop">.destacado</span> {\n' +
        '  <span class="tok-prop">grid-column</span>: <span class="tok-val">1 / 3</span>;\n' +
        '  <span class="tok-prop">grid-row</span>: <span class="tok-val">2 / 4</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre el posicionamiento de elementos en CSS Grid.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad ubica un elemento en columnas específicas de la grilla?', options: ['grid-column', 'grid-row', 'grid-area', 'column-span'], answer: 'grid-column' },
        { prompt: '¿Qué hace grid-column: 1 / 3?', options: ['El elemento ocupa desde la línea 1 hasta la línea 3 (dos columnas)', 'El elemento ocupa la columna número 1 y 3 solamente', 'El elemento se repite 3 veces', 'El elemento ocupa 3 filas'], answer: 'El elemento ocupa desde la línea 1 hasta la línea 3 (dos columnas)' },
        { prompt: '¿Qué propiedad ubica un elemento en filas específicas de la grilla?', options: ['grid-row', 'grid-column', 'row-span', 'grid-line'], answer: 'grid-row' },
        { prompt: '¿Qué necesita un elemento hijo para poder usar grid-column y grid-row?', options: ['Que su contenedor padre tenga display: grid', 'Que tenga position: absolute', 'Que tenga display: flex', 'Nada especial, funciona siempre'], answer: 'Que su contenedor padre tenga display: grid' }
      ]
    }
  },
  {
    id: 'css-25',
    title: 'Variables CSS (custom properties)',
    subtitle: 'Nivel 25',
    xp: 92,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'Las variables CSS (custom properties) se declaran con dos guiones, por ejemplo <code>--color-primario: #39ffb0;</code>, generalmente dentro de <code>:root</code> para que estén disponibles en todo el documento.',
        'Para usar el valor de una variable se usa la función <code>var()</code>, por ejemplo <code>color: var(--color-primario);</code>. Esto permite cambiar un valor en un solo lugar y que se actualice en toda la página.'
      ],
      code:
        '<span class="tok-prop">:root</span> {\n' +
        '  <span class="tok-prop">--color-primario</span>: <span class="tok-val">#39ffb0</span>;\n' +
        '  <span class="tok-prop">--espaciado</span>: <span class="tok-val">16px</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.boton</span> {\n' +
        '  <span class="tok-prop">background</span>: <span class="tok-val">var(--color-primario)</span>;\n' +
        '  <span class="tok-prop">padding</span>: <span class="tok-val">var(--espaciado)</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Completa cada línea con la variable, función o propiedad que corresponde.',
      blanks: [
        { id: 'b1', before: ':root {\n  ', after: ': #45d3ff;\n}', answer: '--color-secundario', options: ['--color-secundario', 'color-secundario', '$color-secundario', '@color-secundario'] },
        { id: 'b2', before: '.boton {\n  background: ', after: '(--color-primario);\n}', answer: 'var', options: ['var', 'calc', 'get', 'value'] },
        { id: 'b3', before: '.caja {\n  ', after: ': var(--espaciado);\n}', answer: 'padding', options: ['padding', 'margin', 'gap', 'border'] },
        { id: 'b4', before: '.texto {\n  ', after: ': var(--color-primario);\n}', answer: 'color', options: ['color', 'background', 'border-color', 'fill'] }
      ]
    }
  },
  {
    id: 'css-26',
    title: 'Pseudo-elementos ::before y ::after',
    subtitle: 'Nivel 26',
    xp: 95,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los pseudo-elementos permiten insertar contenido generado antes o después del contenido real de un elemento, sin agregar HTML extra. Se usan con <code>::before</code> y <code>::after</code>.',
        'Requieren la propiedad <code>content</code> para funcionar, aunque sea con un valor vacío. Son muy usados para íconos decorativos, comillas o efectos visuales.'
      ],
      code:
        '<span class="tok-prop">.cita::before</span> {\n' +
        '  <span class="tok-prop">content</span>: <span class="tok-val">"“"</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.cita::after</span> {\n' +
        '  <span class="tok-prop">content</span>: <span class="tok-val">"”"</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre los pseudo-elementos ::before y ::after.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué pseudo-elemento inserta contenido antes del contenido real de un elemento?', options: ['::before', '::after', ':hover', ':first-child'], answer: '::before' },
        { prompt: '¿Qué propiedad es obligatoria para que ::before o ::after funcionen?', options: ['content', 'display', 'text', 'value'], answer: 'content' },
        { prompt: '¿Qué pseudo-elemento inserta contenido después del contenido real?', options: ['::after', '::before', ':last-child', ':focus'], answer: '::after' },
        { prompt: '¿Los pseudo-elementos ::before y ::after agregan elementos reales al HTML del documento?', options: ['No, son elementos virtuales generados solo visualmente por CSS', 'Sí, se agregan al DOM de forma permanente', 'Sí, pero solo si tienen id', 'No, y tampoco se pueden ver'], answer: 'No, son elementos virtuales generados solo visualmente por CSS' }
      ]
    }
  },
  {
    id: 'css-27',
    title: 'Combinadores de selectores',
    subtitle: 'Nivel 27',
    xp: 98,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El combinador descendiente (espacio) selecciona elementos dentro de otro, sin importar la profundidad: <code>div p</code> selecciona todos los párrafos dentro de un div.',
        'El combinador de hijo directo <code>&gt;</code> solo selecciona hijos inmediatos, y el combinador de hermano adyacente <code>+</code> selecciona el elemento que viene justo después de otro con el mismo padre.'
      ],
      code:
        '<span class="tok-prop">div p</span> { <span class="tok-prop">color</span>: <span class="tok-val">gray</span>; }' + '   <span class="tok-comment">/* cualquier p descendiente */</span>\n' +
        '<span class="tok-prop">div &gt; p</span> { <span class="tok-prop">color</span>: <span class="tok-val">blue</span>; }' + '  <span class="tok-comment">/* solo p hijos directos */</span>\n' +
        '<span class="tok-prop">h2 + p</span> { <span class="tok-prop">margin-top</span>: <span class="tok-val">0</span>; }' + '  <span class="tok-comment">/* p justo después de un h2 */</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre combinadores de selectores.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué selecciona el selector <code>div p</code> (con un espacio)?', options: ['Todos los párrafos descendientes de un div, sin importar la profundidad', 'Solo los párrafos que son hijos directos de un div', 'El primer párrafo dentro de un div', 'Todos los div que están dentro de un párrafo'], answer: 'Todos los párrafos descendientes de un div, sin importar la profundidad' },
        { prompt: '¿Qué selecciona el selector <code>div &gt; p</code>?', options: ['Solo los párrafos que son hijos directos de un div', 'Todos los párrafos descendientes de un div', 'El párrafo que viene después de un div', 'Todos los div hijos de un párrafo'], answer: 'Solo los párrafos que son hijos directos de un div' },
        { prompt: '¿Qué selecciona el selector <code>h2 + p</code>?', options: ['El párrafo que viene justo después de un h2, como hermano', 'Todos los párrafos dentro de un h2', 'El h2 que viene después de un párrafo', 'El primer párrafo de la página'], answer: 'El párrafo que viene justo después de un h2, como hermano' },
        { prompt: '¿Cuál es el símbolo del combinador de "hijo directo"?', options: ['> (mayor que)', '+ (más)', '~ (virgulilla)', 'espacio en blanco'], answer: '> (mayor que)' }
      ]
    }
  },
  {
    id: 'css-28',
    title: 'Transformaciones 2D',
    subtitle: 'Nivel 28',
    xp: 101,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La propiedad <code>transform</code> permite mover, rotar, escalar o inclinar un elemento sin afectar el flujo del documento. Funciones comunes: <code>translate()</code>, <code>rotate()</code>, <code>scale()</code> y <code>skew()</code>.',
        'Se pueden combinar varias funciones en una misma declaración, por ejemplo <code>transform: translateX(20px) rotate(10deg);</code>, y se aplican en el orden en que se escriben.'
      ],
      code:
        '<span class="tok-prop">.caja</span> {\n' +
        '  <span class="tok-prop">transform</span>: <span class="tok-val">translateX(20px) rotate(10deg) scale(1.2)</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre transformaciones 2D en CSS.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué función de transform mueve un elemento sin afectar el flujo del documento?', options: ['translate()', 'rotate()', 'scale()', 'skew()'], answer: 'translate()' },
        { prompt: '¿Qué función de transform gira un elemento un número de grados?', options: ['rotate()', 'translate()', 'scale()', 'skew()'], answer: 'rotate()' },
        { prompt: '¿Qué función de transform cambia el tamaño de un elemento?', options: ['scale()', 'rotate()', 'translate()', 'resize()'], answer: 'scale()' },
        { prompt: '¿La propiedad transform afecta la posición de los elementos vecinos en el flujo normal?', options: ['No, el espacio original del elemento se mantiene', 'Sí, siempre reordena a los vecinos', 'Solo si se usa scale()', 'Solo si el elemento tiene position: absolute'], answer: 'No, el espacio original del elemento se mantiene' }
      ]
    }
  },
  {
    id: 'css-29',
    title: 'Overflow y scroll',
    subtitle: 'Nivel 29',
    xp: 104,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La propiedad <code>overflow</code> controla qué pasa cuando el contenido de un elemento es más grande que su caja. <code>hidden</code> recorta el contenido sobrante, <code>scroll</code> siempre muestra barras de desplazamiento y <code>auto</code> las muestra solo si hacen falta.',
        '<code>overflow-x</code> y <code>overflow-y</code> controlan cada eje por separado, por ejemplo para permitir scroll horizontal en una lista de tarjetas.'
      ],
      code:
        '<span class="tok-prop">.contenedor</span> {\n' +
        '  <span class="tok-prop">height</span>: <span class="tok-val">200px</span>;\n' +
        '  <span class="tok-prop">overflow-y</span>: <span class="tok-val">auto</span>;\n' +
        '  <span class="tok-prop">overflow-x</span>: <span class="tok-val">hidden</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre overflow y scroll.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué valor de overflow recorta el contenido que no cabe, sin mostrar barras de scroll?', options: ['hidden', 'auto', 'scroll', 'visible'], answer: 'hidden' },
        { prompt: '¿Qué valor de overflow muestra barras de scroll solo cuando son necesarias?', options: ['auto', 'hidden', 'scroll', 'clip'], answer: 'auto' },
        { prompt: '¿Qué propiedad controla el scroll únicamente en el eje vertical?', options: ['overflow-y', 'overflow-x', 'overflow', 'scroll-y'], answer: 'overflow-y' },
        { prompt: '¿Qué valor de overflow muestra siempre las barras de scroll, aunque el contenido quepa?', options: ['scroll', 'auto', 'hidden', 'visible'], answer: 'scroll' }
      ]
    }
  },
  {
    id: 'css-30',
    title: 'Opacidad y transparencia',
    subtitle: 'Nivel 30',
    xp: 107,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La propiedad <code>opacity</code> controla la transparencia de todo un elemento (y sus hijos), con valores de 0 (invisible) a 1 (opaco).',
        'El formato de color <code>rgba()</code> permite transparencia solo en ese color (por ejemplo el fondo), sin afectar a los elementos hijos, agregando un cuarto valor alfa entre 0 y 1.'
      ],
      code:
        '<span class="tok-prop">.overlay</span> {\n' +
        '  <span class="tok-prop">opacity</span>: <span class="tok-val">0.8</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.fondo</span> {\n' +
        '  <span class="tok-prop">background-color</span>: <span class="tok-val">rgba(0, 0, 0, 0.5)</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre opacidad y transparencia.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad controla la transparencia de un elemento completo, incluidos sus hijos?', options: ['opacity', 'visibility', 'transparency', 'display'], answer: 'opacity' },
        { prompt: '¿Qué valor de opacity hace que un elemento sea totalmente invisible?', options: ['0', '1', '100', 'none'], answer: '0' },
        { prompt: '¿Qué formato de color permite definir transparencia solo en ese color, sin afectar a los hijos?', options: ['rgba()', 'opacity()', 'hsl()', 'hex()'], answer: 'rgba()' },
        { prompt: 'En rgba(0, 0, 0, 0.5), ¿qué representa el último valor (0.5)?', options: ['El canal alfa, es decir, la opacidad de ese color', 'El brillo del color', 'La saturación del color', 'El tono del color'], answer: 'El canal alfa, es decir, la opacidad de ese color' }
      ]
    }
  },
  {
    id: 'css-31',
    title: 'Gradientes CSS',
    subtitle: 'Nivel 31',
    xp: 109,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>linear-gradient()</code> crea una transición suave de colores en línea recta; se le puede indicar una dirección o ángulo, por ejemplo <code>to right</code> o <code>45deg</code>.',
        '<code>radial-gradient()</code> crea una transición de colores que parte desde un punto central hacia afuera, en forma circular o elíptica. Ambos se usan como valor de <code>background</code>.'
      ],
      code:
        '<span class="tok-prop">.hero</span> {\n' +
        '  <span class="tok-prop">background</span>: <span class="tok-val">linear-gradient(45deg, #39ffb0, #45d3ff)</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.foco</span> {\n' +
        '  <span class="tok-prop">background</span>: <span class="tok-val">radial-gradient(circle, #fff, #000)</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre gradientes CSS.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué función crea una transición de color en línea recta?', options: ['linear-gradient()', 'radial-gradient()', 'conic-gradient()', 'transition-gradient()'], answer: 'linear-gradient()' },
        { prompt: '¿Qué función crea una transición de color que parte desde un punto central?', options: ['radial-gradient()', 'linear-gradient()', 'center-gradient()', 'circle-gradient()'], answer: 'radial-gradient()' },
        { prompt: 'En linear-gradient(45deg, #39ffb0, #45d3ff), ¿qué indica 45deg?', options: ['El ángulo de dirección del degradado', 'El porcentaje de mezcla entre colores', 'La opacidad del gradiente', 'El radio del círculo'], answer: 'El ángulo de dirección del degradado' },
        { prompt: '¿En qué propiedad se suele usar un gradiente como valor?', options: ['background', 'color', 'border', 'filter'], answer: 'background' }
      ]
    }
  },
    {
    id: 'css-32',
    title: 'Header y navegación con Flexbox',
    subtitle: 'Nivel 32',
    xp: 111,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El header de tu portafolio necesita alinear el nombre/logo a la izquierda y el menú a la derecha. <code>display: flex</code> junto con <code>justify-content: space-between</code> en el header logra esto en una sola línea de código.',
        'Los enlaces del menú suelen espaciarse con <code>gap</code> y cambiar de color al pasar el mouse (<code>:hover</code>), dando feedback visual claro sin necesidad de JavaScript.'
      ],
      code:
        '<span class="tok-prop">header</span> {\n' +
        '  <span class="tok-prop">display</span>: <span class="tok-val">flex</span>;\n' +
        '  <span class="tok-prop">justify-content</span>: <span class="tok-val">space-between</span>;\n' +
        '  <span class="tok-prop">align-items</span>: <span class="tok-val">center</span>;\n' +
        '}\n' +
        '<span class="tok-prop">nav ul</span> { <span class="tok-prop">display</span>: <span class="tok-val">flex</span>; <span class="tok-prop">gap</span>: <span class="tok-val">1.5rem</span>; <span class="tok-prop">list-style</span>: <span class="tok-val">none</span>; }\n' +
        '<span class="tok-prop">nav a:hover</span> { <span class="tok-prop">color</span>: <span class="tok-val">var(--color-primario)</span>; }'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre cómo maquetar el header y la navegación de tu portafolio.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad de flexbox separa el logo a la izquierda y el menú a la derecha dentro del header?', options: ['justify-content: space-between', 'align-items: center', 'flex-direction: column', 'gap'], answer: 'justify-content: space-between' },
        { prompt: '¿Qué hace la pseudo-clase :hover en un enlace del menú?', options: ['Aplica un estilo mientras el mouse está encima del elemento', 'Aplica un estilo solo la primera vez que carga la página', 'Solo funciona en botones, nunca en enlaces', 'Cambia el href del enlace'], answer: 'Aplica un estilo mientras el mouse está encima del elemento' },
        { prompt: '¿Qué propiedad usarías para dar espacio entre los ítems del menú sin poner margin en cada uno?', options: ['gap', 'padding', 'border-spacing', 'line-height'], answer: 'gap' },
        { prompt: 'Para que desaparezcan los puntos de una lista &lt;ul&gt; usada como menú, ¿qué valor usás?', options: ['list-style: none', 'list-style: hidden', 'display: none', 'list-style: 0'], answer: 'list-style: none' }
      ]
    }
  },
    {
    id: 'css-33',
    title: 'Grid de tarjetas de proyectos',
    subtitle: 'Nivel 33',
    xp: 113,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'La sección de proyectos necesita mostrar varias tarjetas (<code>.tarjeta-proyecto</code>) en una cuadrícula que se adapte al ancho de pantalla. <code>display: grid</code> junto con <code>grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))</code> logra columnas automáticas, sin necesidad de escribir media queries.',
        '<code>gap</code> controla el espacio entre tarjetas, tanto horizontal como verticalmente, con una sola propiedad.'
      ],
      code:
        '<span class="tok-prop">#proyectos</span> {\n' +
        '  <span class="tok-prop">display</span>: <span class="tok-val">grid</span>;\n' +
        '  <span class="tok-prop">grid-template-columns</span>: <span class="tok-val">repeat(auto-fit, minmax(250px, 1fr))</span>;\n' +
        '  <span class="tok-prop">gap</span>: <span class="tok-val">1.5rem</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.tarjeta-proyecto</span> { <span class="tok-prop">background</span>: <span class="tok-val">#1a1a2e</span>; <span class="tok-prop">border-radius</span>: <span class="tok-val">12px</span>; <span class="tok-prop">padding</span>: <span class="tok-val">1.5rem</span>; }'
    },
    exercise: {
      instructions: 'Completa cada línea del grid de proyectos con la propiedad o el valor correcto.',
      blanks: [
        { id: 'b1', before: '#proyectos { ', after: ': grid;', answer: 'display', options: ['display', 'position', 'grid', 'flex'] },
        { id: 'b2', before: '  grid-template-columns: repeat(auto-fit, ', after: '(250px, 1fr));', answer: 'minmax', options: ['minmax', 'maxmin', 'clamp', 'calc'] },
        { id: 'b3', before: '  ', after: ': 1.5rem; }', answer: 'gap', options: ['gap', 'margin', 'spacing', 'padding'] },
        { id: 'b4', before: '.tarjeta-proyecto { background: #1a1a2e; border-radius: ', after: '; }', answer: '12px', options: ['12px', '12%', '12', '12deg'] }
      ]
    }
  },
  {
    id: 'css-34',
    title: 'Filtros CSS',
    subtitle: 'Nivel 34',
    xp: 114,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La propiedad <code>filter</code> aplica efectos visuales a un elemento, como <code>blur()</code> (desenfoque), <code>brightness()</code> (brillo) o <code>grayscale()</code> (escala de grises).',
        'Se pueden combinar varios filtros en una misma declaración, y a diferencia de editar la imagen original, estos efectos se aplican en tiempo real sin modificar el archivo.'
      ],
      code:
        '<span class="tok-prop">.imagen</span> {\n' +
        '  <span class="tok-prop">filter</span>: <span class="tok-val">blur(4px) brightness(0.8)</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.imagen:hover</span> {\n' +
        '  <span class="tok-prop">filter</span>: <span class="tok-val">grayscale(0)</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre filtros CSS.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad aplica efectos visuales como desenfoque o brillo a un elemento?', options: ['filter', 'transform', 'effect', 'opacity'], answer: 'filter' },
        { prompt: '¿Qué función de filter desenfoca un elemento?', options: ['blur()', 'brightness()', 'grayscale()', 'contrast()'], answer: 'blur()' },
        { prompt: '¿Qué función de filter convierte un elemento a escala de grises?', options: ['grayscale()', 'blur()', 'invert()', 'sepia()'], answer: 'grayscale()' },
        { prompt: '¿Se pueden combinar varias funciones de filter en una sola declaración?', options: ['Sí, separadas por espacios', 'No, solo se puede usar una a la vez', 'Sí, pero solo con comas', 'No, requieren reglas separadas'], answer: 'Sí, separadas por espacios' }
      ]
    }
  },
  {
    id: 'css-35',
    title: 'Object-fit y object-position',
    subtitle: 'Nivel 35',
    xp: 115,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Cuando una imagen no tiene las mismas proporciones que su contenedor, <code>object-fit</code> controla cómo se ajusta: <code>cover</code> la recorta para llenar el espacio, <code>contain</code> la muestra completa dejando espacio libre.',
        '<code>object-position</code> controla qué parte de la imagen se muestra cuando se recorta, similar a <code>background-position</code> pero para elementos como imágenes o videos.'
      ],
      code:
        '<span class="tok-prop">img</span> {\n' +
        '  <span class="tok-prop">width</span>: <span class="tok-val">300px</span>;\n' +
        '  <span class="tok-prop">height</span>: <span class="tok-val">200px</span>;\n' +
        '  <span class="tok-prop">object-fit</span>: <span class="tok-val">cover</span>;\n' +
        '  <span class="tok-prop">object-position</span>: <span class="tok-val">top</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre object-fit y object-position.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad controla cómo se ajusta una imagen dentro de un contenedor con proporciones distintas?', options: ['object-fit', 'background-size', 'image-fit', 'object-position'], answer: 'object-fit' },
        { prompt: '¿Qué valor de object-fit recorta la imagen para llenar todo el espacio disponible?', options: ['cover', 'contain', 'fill', 'none'], answer: 'cover' },
        { prompt: '¿Qué valor de object-fit muestra la imagen completa sin recortarla, dejando espacio libre si es necesario?', options: ['contain', 'cover', 'fill', 'scale-down'], answer: 'contain' },
        { prompt: '¿Qué propiedad controla qué parte de la imagen se muestra cuando se recorta con object-fit: cover?', options: ['object-position', 'background-position', 'image-align', 'object-fit'], answer: 'object-position' }
      ]
    }
  },
  {
    id: 'css-36',
    title: 'CSS Grid avanzado: grid-template-areas',
    subtitle: 'Nivel 36',
    xp: 115,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        '<code>grid-template-areas</code> permite diseñar el layout dibujando un mapa con nombres de área, muy visual y fácil de leer. Cada elemento hijo se asigna a un área con <code>grid-area</code>.',
        'Es una forma declarativa de armar layouts completos (header, sidebar, main, footer) sin calcular números de línea manualmente.'
      ],
      code:
        '<span class="tok-prop">.layout</span> {\n' +
        '  <span class="tok-prop">display</span>: <span class="tok-val">grid</span>;\n' +
        '  <span class="tok-prop">grid-template-areas</span>:\n' +
        '    <span class="tok-val">"header header"</span>\n' +
        '    <span class="tok-val">"sidebar main"</span>\n' +
        '    <span class="tok-val">"footer footer"</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.header</span> { <span class="tok-prop">grid-area</span>: <span class="tok-val">header</span>; }'
    },
    exercise: {
      instructions: 'Completa cada línea con la propiedad correcta.',
      blanks: [
        { id: 'b1', before: '.layout {\n  display: grid;\n  ', after: ':\n    "header header"\n    "sidebar main";\n}', answer: 'grid-template-areas', options: ['grid-template-areas', 'grid-template-columns', 'grid-area', 'grid-layout'] },
        { id: 'b2', before: '.header {\n  ', after: ': header;\n}', answer: 'grid-area', options: ['grid-area', 'grid-name', 'grid-template-areas', 'area'] },
        { id: 'b3', before: '.sidebar {\n  ', after: ': sidebar;\n}', answer: 'grid-area', options: ['grid-area', 'grid-column', 'grid-row', 'grid-name'] },
        { id: 'b4', before: '.main {\n  ', after: ': main;\n}', answer: 'grid-area', options: ['grid-area', 'grid-template', 'grid-cell', 'area-name'] }
      ]
    }
  },
    {
    id: 'css-37',
    title: 'Efectos hover en las tarjetas',
    subtitle: 'Nivel 37',
    xp: 119,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un pequeño efecto al pasar el mouse sobre una tarjeta de proyecto (elevarse unos píxeles y agrandar la sombra) hace que el portafolio se sienta interactivo. Se logra combinando <code>transform: translateY()</code> con <code>transition</code> para que el cambio sea suave y no instantáneo.',
        '<code>transition</code> debe declararse en el estado normal del elemento (no dentro de <code>:hover</code>), para que tanto la entrada como la salida del hover queden animadas.'
      ],
      code:
        '<span class="tok-prop">.tarjeta-proyecto</span> {\n' +
        '  <span class="tok-prop">transition</span>: <span class="tok-val">transform 0.2s ease, box-shadow 0.2s ease</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.tarjeta-proyecto:hover</span> {\n' +
        '  <span class="tok-prop">transform</span>: <span class="tok-val">translateY(-6px)</span>;\n' +
        '  <span class="tok-prop">box-shadow</span>: <span class="tok-val">0 12px 24px rgba(0,0,0,0.3)</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre cómo animar el hover de las tarjetas de proyecto.',
      variant: 'plain',
      questions: [
        { prompt: '¿En qué selector debe declararse la propiedad transition para que el efecto de :hover se anime tanto al entrar como al salir?', options: ['En el selector base (.tarjeta-proyecto), no dentro de :hover', 'Solo dentro de :hover', 'En ambos, con valores distintos', 'No hace falta declararla, es automático'], answer: 'En el selector base (.tarjeta-proyecto), no dentro de :hover' },
        { prompt: '¿Qué función de transform elevaría visualmente la tarjeta unos píxeles hacia arriba?', options: ['translateY(-6px)', 'translateX(-6px)', 'scale(-6px)', 'rotate(-6px)'], answer: 'translateY(-6px)' },
        { prompt: '¿Qué tipo de unidad usa la duración de una transition típicamente?', options: ['Segundos (s) o milisegundos (ms)', 'Píxeles (px)', 'Porcentaje (%)', 'Grados (deg)'], answer: 'Segundos (s) o milisegundos (ms)' },
        { prompt: '¿Qué propiedad crea la sombra que aparece al pasar el mouse sobre la tarjeta?', options: ['box-shadow', 'text-shadow', 'filter', 'outline'], answer: 'box-shadow' }
      ]
    }
  },
  {
    id: 'css-38',
    title: 'Animaciones complejas con keyframes',
    subtitle: 'Nivel 38',
    xp: 123,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Dentro de <code>@keyframes</code> se pueden definir tantos puntos intermedios como se necesite, usando porcentajes (0%, 25%, 50%...) además de <code>from</code> y <code>to</code>.',
        'La propiedad abreviada <code>animation</code> combina nombre, duración, función de aceleración, retraso, repeticiones y dirección: <code>animation: nombre 2s ease-in-out infinite alternate;</code>.'
      ],
      code:
        '<span class="tok-kw">@keyframes</span> rebote {\n' +
        '  0%   { <span class="tok-prop">transform</span>: <span class="tok-val">translateY(0)</span>; }\n' +
        '  30%  { <span class="tok-prop">transform</span>: <span class="tok-val">translateY(-20px)</span>; }\n' +
        '  60%  { <span class="tok-prop">transform</span>: <span class="tok-val">translateY(0)</span>; }\n' +
        '  100% { <span class="tok-prop">transform</span>: <span class="tok-val">translateY(-10px)</span>; }\n' +
        '}\n' +
        '<span class="tok-prop">.pelota</span> {\n' +
        '  <span class="tok-prop">animation</span>: <span class="tok-val">rebote 1.5s ease-in-out infinite</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre animaciones complejas con keyframes.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué palabras clave equivalen a 0% y 100% dentro de @keyframes?', options: ['from y to', 'start y end', 'first y last', 'begin y finish'], answer: 'from y to' },
        { prompt: '¿Qué valor de animation hace que la animación se repita indefinidamente?', options: ['infinite', 'forever', 'loop', 'repeat'], answer: 'infinite' },
        { prompt: '¿Qué valor de animation-direction hace que la animación se reproduzca hacia adelante y luego hacia atrás?', options: ['alternate', 'reverse', 'normal', 'both'], answer: 'alternate' },
        { prompt: 'En animation: rebote 1.5s ease-in-out infinite;, ¿qué representa 1.5s?', options: ['La duración de la animación', 'El retraso antes de empezar', 'La cantidad de repeticiones', 'La velocidad de aceleración'], answer: 'La duración de la animación' }
      ]
    }
  },
  {
    id: 'css-39',
    title: 'Media queries: breakpoints mobile-first',
    subtitle: 'Nivel 39',
    xp: 127,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'En el enfoque <em>mobile-first</em>, se escriben primero los estilos base para pantallas pequeñas, y luego se van agregando media queries con <code>min-width</code> creciente para pantallas más grandes.',
        'Los breakpoints comunes suelen seguir un orden como: móvil (base, sin media query), tablet (~600px), laptop (~900px) y escritorio grande (~1200px).'
      ],
      code:
        '<span class="tok-prop">.contenedor</span> { <span class="tok-prop">width</span>: <span class="tok-val">100%</span>; }\n\n' +
        '<span class="tok-kw">@media</span> (min-width: 600px) { ... }\n' +
        '<span class="tok-kw">@media</span> (min-width: 900px) { ... }\n' +
        '<span class="tok-kw">@media</span> (min-width: 1200px) { ... }'
    },
    exercise: {
      instructions: 'Ordená estos bloques de CSS mobile-first, del ancho de pantalla más chico al más grande.',
      items: [
        { id: 'a', code: 'Estilos base, sin media query (móvil)' },
        { id: 'b', code: '@media (min-width: 600px) { ... }' },
        { id: 'c', code: '@media (min-width: 900px) { ... }' },
        { id: 'd', code: '@media (min-width: 1200px) { ... }' }
      ],
      correctOrder: ['a', 'b', 'c', 'd']
    }
  },
  {
    id: 'css-40',
    title: 'Diseño fluido con clamp(), min() y max()',
    subtitle: 'Nivel 40',
    xp: 131,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>clamp(mínimo, preferido, máximo)</code> permite definir un valor fluido que crece o decrece, pero nunca por debajo del mínimo ni por encima del máximo. Es muy usado para tipografía responsive sin necesitar media queries.',
        '<code>min()</code> devuelve el valor más chico de una lista y <code>max()</code> el más grande; son útiles para poner límites a anchos o tamaños que dependen del viewport.'
      ],
      code:
        '<span class="tok-prop">h1</span> {\n' +
        '  <span class="tok-prop">font-size</span>: <span class="tok-val">clamp(1.5rem, 4vw, 3rem)</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.contenedor</span> {\n' +
        '  <span class="tok-prop">width</span>: <span class="tok-val">min(90%, 1200px)</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre clamp(), min() y max().',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué función CSS permite definir un valor con un mínimo, un valor preferido y un máximo?', options: ['clamp()', 'min()', 'max()', 'calc()'], answer: 'clamp()' },
        { prompt: 'En clamp(1.5rem, 4vw, 3rem), ¿qué representa 4vw?', options: ['El valor preferido, que crece con el ancho del viewport', 'El valor mínimo', 'El valor máximo', 'Un valor fijo que nunca cambia'], answer: 'El valor preferido, que crece con el ancho del viewport' },
        { prompt: '¿Qué función devuelve el valor más chico entre varios?', options: ['min()', 'max()', 'clamp()', 'least()'], answer: 'min()' },
        { prompt: '¿Para qué se usa comúnmente clamp() en tipografía?', options: ['Para que el tamaño de fuente sea fluido sin usar media queries', 'Para fijar el tamaño de fuente siempre igual', 'Para cambiar el color del texto', 'Para centrar el texto'], answer: 'Para que el tamaño de fuente sea fluido sin usar media queries' }
      ]
    }
  },
    {
    id: 'css-41',
    title: 'Navegación responsive con hamburguesa',
    subtitle: 'Nivel 41',
    xp: 135,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'En pantallas chicas, el menú completo no entra cómodo en el header: se oculta detrás de un botón "hamburguesa" (☰) que el usuario toca para desplegarlo. En CSS eso se resuelve ocultando el &lt;ul&gt; del menú con <code>display: none</code> por defecto en mobile, y mostrando el botón <code>.nav-toggle</code>.',
        'Cuando el menú tenga la clase <code>.is-open</code> (que vas a agregar con JavaScript en el próximo módulo), CSS lo muestra con <code>display: flex</code>. Este patrón —CSS define los dos estados, JavaScript solo cambia una clase— es el más común para interactividad simple.'
      ],
      code:
        '<span class="tok-prop">.nav-toggle</span> { <span class="tok-prop">display</span>: <span class="tok-val">none</span>; }\n\n' +
        '<span class="tok-at">@media</span> (<span class="tok-prop">max-width</span>: <span class="tok-val">640px</span>) {\n' +
        '  <span class="tok-prop">.nav-toggle</span> { <span class="tok-prop">display</span>: <span class="tok-val">block</span>; }\n' +
        '  <span class="tok-prop">nav ul</span> { <span class="tok-prop">display</span>: <span class="tok-val">none</span>; }\n' +
        '  <span class="tok-prop">nav ul.is-open</span> { <span class="tok-prop">display</span>: <span class="tok-val">flex</span>; <span class="tok-prop">flex-direction</span>: <span class="tok-val">column</span>; }\n' +
        '}'
    },
    exercise: {
      instructions: 'Ordená las reglas para armar la navegación responsive con botón hamburguesa.',
      items: [
        { id: 'i1', code: '.nav-toggle { display: none; }' },
        { id: 'i2', code: '@media (max-width: 640px) {' },
        { id: 'i3', code: '  .nav-toggle { display: block; }' },
        { id: 'i4', code: '  nav ul { display: none; }' },
        { id: 'i5', code: '  nav ul.is-open { display: flex; flex-direction: column; }\n}' }
      ],
      correctOrder: ['i1', 'i2', 'i3', 'i4', 'i5']
    }
  },
  {
    id: 'css-42',
    title: 'Modo oscuro con prefers-color-scheme',
    subtitle: 'Nivel 42',
    xp: 139,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La media query <code>prefers-color-scheme</code> detecta si el sistema operativo del usuario tiene activado el modo oscuro o claro, permitiendo adaptar los colores automáticamente.',
        'Combinarla con variables CSS facilita el mantenimiento: se redefinen las variables de color dentro de la media query, sin duplicar todas las reglas.'
      ],
      code:
        '<span class="tok-prop">:root</span> {\n' +
        '  <span class="tok-prop">--fondo</span>: <span class="tok-val">#ffffff</span>;\n' +
        '  <span class="tok-prop">--texto</span>: <span class="tok-val">#111111</span>;\n' +
        '}\n\n' +
        '<span class="tok-kw">@media</span> (prefers-color-scheme: dark) {\n' +
        '  <span class="tok-prop">:root</span> {\n' +
        '    <span class="tok-prop">--fondo</span>: <span class="tok-val">#111111</span>;\n' +
        '    <span class="tok-prop">--texto</span>: <span class="tok-val">#ffffff</span>;\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre el modo oscuro con prefers-color-scheme.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué media query detecta si el usuario prefiere el modo oscuro en su sistema?', options: ['prefers-color-scheme', 'prefers-dark-mode', 'color-scheme', 'dark-mode'], answer: 'prefers-color-scheme' },
        { prompt: '¿Qué valor de prefers-color-scheme se usa para aplicar estilos de modo oscuro?', options: ['dark', 'light', 'black', 'night'], answer: 'dark' },
        { prompt: '¿Qué ventaja tiene combinar prefers-color-scheme con variables CSS?', options: ['Se pueden redefinir los colores en un solo lugar, sin duplicar reglas', 'Hace que el sitio cargue más rápido', 'Es obligatorio para que funcione el modo oscuro', 'Elimina la necesidad de usar clases'], answer: 'Se pueden redefinir los colores en un solo lugar, sin duplicar reglas' },
        { prompt: '¿prefers-color-scheme depende de una configuración de la página o del sistema del usuario?', options: ['Del sistema operativo o navegador del usuario', 'De una clase definida en el body', 'De un atributo data- en el html', 'De JavaScript, siempre'], answer: 'Del sistema operativo o navegador del usuario' }
      ]
    }
  },
    {
    id: 'css-43',
    title: 'Organizar las clases de tu portafolio (BEM)',
    subtitle: 'Nivel 43',
    xp: 143,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Cuando tu portafolio crece, nombrar las clases de forma consistente evita confusiones. Un patrón simple: <code>bloque__elemento</code> para una parte interna de un componente (<code>.tarjeta-proyecto__titulo</code>) y <code>bloque--modificador</code> para una variante (<code>.tarjeta-proyecto--destacada</code>).',
        'Este patrón se llama <strong>BEM</strong> (Block, Element, Modifier) y hace que, con solo leer el nombre de la clase, sepas exactamente qué representa y a qué componente pertenece — muy útil cuando tu portafolio tenga muchas tarjetas de proyecto con pequeñas variaciones.'
      ],
      code:
        '<span class="tok-tag">&lt;div</span> <span class="tok-attr">class</span>=<span class="tok-string">"tarjeta-proyecto tarjeta-proyecto--destacada"</span><span class="tok-tag">&gt;</span>\n' +
        '  <span class="tok-tag">&lt;h3</span> <span class="tok-attr">class</span>=<span class="tok-string">"tarjeta-proyecto__titulo"</span><span class="tok-tag">&gt;</span>Mi Proyecto<span class="tok-tag">&lt;/h3&gt;</span>\n' +
        '<span class="tok-tag">&lt;/div&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre cómo nombrar las clases CSS de tu portafolio con BEM.',
      variant: 'plain',
      questions: [
        { prompt: 'En BEM, ¿qué representa la clase tarjeta-proyecto__titulo?', options: ['Un elemento interno del bloque tarjeta-proyecto', 'Una variante del bloque', 'Un bloque completamente independiente', 'Un selector de estado como :hover'], answer: 'Un elemento interno del bloque tarjeta-proyecto' },
        { prompt: '¿Qué representa la clase tarjeta-proyecto--destacada?', options: ['Una variante (modificador) del bloque tarjeta-proyecto', 'Un elemento interno del bloque', 'Un id único del elemento', 'Una pseudo-clase'], answer: 'Una variante (modificador) del bloque tarjeta-proyecto' },
        { prompt: '¿Cuál es la principal ventaja de nombrar las clases con un patrón como BEM?', options: ['Con solo leer el nombre de la clase entendés qué representa y a qué pertenece', 'Hace que el CSS cargue más rápido en el navegador', 'Es un requisito obligatorio del navegador', 'Reemplaza la necesidad de usar selectores'], answer: 'Con solo leer el nombre de la clase entendés qué representa y a qué pertenece' },
        { prompt: '¿Cuántos guiones bajos separan el bloque del elemento en BEM?', options: ['Dos (__)', 'Uno (_)', 'Ninguno', 'Tres (___)'], answer: 'Dos (__)' }
      ]
    }
  },
  {
    id: 'css-44',
    title: 'CSS Grid vs Flexbox: cuándo usar cada uno',
    subtitle: 'Nivel 44',
    xp: 147,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Flexbox está pensado para layouts en <strong>una dimensión</strong> (una fila o una columna a la vez), como una barra de navegación o una lista de tarjetas que fluye.',
        'CSS Grid está pensado para layouts en <strong>dos dimensiones</strong> (filas y columnas al mismo tiempo), ideal para la estructura general de una página. Ambos se pueden combinar: Grid para el layout general y Flexbox dentro de cada componente.'
      ],
      code:
        '<span class="tok-prop">.pagina</span> {\n' +
        '  <span class="tok-prop">display</span>: <span class="tok-val">grid</span>;\n' +
        '  <span class="tok-prop">grid-template-columns</span>: <span class="tok-val">250px 1fr</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.navbar</span> {\n' +
        '  <span class="tok-prop">display</span>: <span class="tok-val">flex</span>;\n' +
        '  <span class="tok-prop">justify-content</span>: <span class="tok-val">space-between</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre cuándo usar CSS Grid y cuándo Flexbox.',
      variant: 'plain',
      questions: [
        { prompt: '¿Flexbox está pensado principalmente para layouts en cuántas dimensiones?', options: ['Una dimensión', 'Dos dimensiones', 'Tres dimensiones', 'No tiene límite de dimensiones'], answer: 'Una dimensión' },
        { prompt: '¿CSS Grid está pensado principalmente para layouts en cuántas dimensiones?', options: ['Dos dimensiones', 'Una dimensión', 'Tres dimensiones', 'Ninguna, solo alinea texto'], answer: 'Dos dimensiones' },
        { prompt: '¿Cuál es un buen caso de uso típico para Flexbox?', options: ['Una barra de navegación con elementos en fila', 'La estructura general de toda la página con filas y columnas', 'Un calendario con muchas celdas', 'Un mapa de sitio complejo'], answer: 'Una barra de navegación con elementos en fila' },
        { prompt: '¿Se pueden combinar Grid y Flexbox en la misma página?', options: ['Sí, Grid para el layout general y Flexbox dentro de los componentes', 'No, son excluyentes', 'Solo si se usa JavaScript', 'No, el navegador elige uno automáticamente'], answer: 'Sí, Grid para el layout general y Flexbox dentro de los componentes' }
      ]
    }
  },
    {
    id: 'css-45',
    title: 'Chips de habilidades',
    subtitle: 'Nivel 45',
    xp: 151,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'Para que la lista de habilidades se vea como una fila de "chips" en vez de una lista vertical, el contenedor &lt;ul&gt; necesita <code>display: flex</code> y <code>flex-wrap: wrap</code> (para que pasen a la siguiente línea si no entran todas).',
        'Cada <code>.habilidad</code> (los &lt;li&gt;) se estiliza con <code>padding</code>, un <code>border-radius</code> grande (para las puntas bien redondeadas típicas de un chip) y un fondo de color.'
      ],
      code:
        '<span class="tok-prop">#habilidades ul</span> {\n' +
        '  <span class="tok-prop">display</span>: <span class="tok-val">flex</span>;\n' +
        '  <span class="tok-prop">flex-wrap</span>: <span class="tok-val">wrap</span>;\n' +
        '  <span class="tok-prop">gap</span>: <span class="tok-val">0.5rem</span>;\n' +
        '  <span class="tok-prop">list-style</span>: <span class="tok-val">none</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.habilidad</span> { <span class="tok-prop">padding</span>: <span class="tok-val">0.4rem 1rem</span>; <span class="tok-prop">border-radius</span>: <span class="tok-val">999px</span>; <span class="tok-prop">background</span>: <span class="tok-val">var(--color-primario)</span>; }'
    },
    exercise: {
      instructions: 'Completa cada línea del estilo de los chips de habilidades.',
      blanks: [
        { id: 'b1', before: '#habilidades ul { display: flex; flex-wrap: ', after: '; gap: 0.5rem; }', answer: 'wrap', options: ['wrap', 'nowrap', 'wrap-reverse', 'none'] },
        { id: 'b2', before: '.habilidad { padding: 0.4rem 1rem; border-radius: ', after: '; background: var(--color-primario); }', answer: '999px', options: ['999px', '0px', '50%', '1px'] },
        { id: 'b3', before: '#habilidades ul { display: ', after: '; flex-wrap: wrap; }', answer: 'flex', options: ['flex', 'grid', 'block', 'inline'] },
        { id: 'b4', before: '.habilidad { padding: 0.4rem 1rem; border-radius: 999px; ', after: ': var(--color-primario); }', answer: 'background', options: ['background', 'color', 'border', 'outline'] }
      ]
    }
  },
  {
    id: 'css-46',
    title: 'Aspect-ratio y proporciones',
    subtitle: 'Nivel 46',
    xp: 155,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La propiedad <code>aspect-ratio</code> define la relación entre ancho y alto de un elemento, por ejemplo <code>16 / 9</code> para video o <code>1 / 1</code> para un cuadrado perfecto.',
        'Antes de esta propiedad, mantener proporciones (por ejemplo en videos incrustados) requería trucos con padding en porcentaje. Hoy <code>aspect-ratio</code> lo resuelve de forma directa.'
      ],
      code:
        '<span class="tok-prop">.video</span> {\n' +
        '  <span class="tok-prop">aspect-ratio</span>: <span class="tok-val">16 / 9</span>;\n' +
        '  <span class="tok-prop">width</span>: <span class="tok-val">100%</span>;\n' +
        '}\n' +
        '<span class="tok-prop">.avatar</span> {\n' +
        '  <span class="tok-prop">aspect-ratio</span>: <span class="tok-val">1 / 1</span>;\n' +
        '  <span class="tok-prop">border-radius</span>: <span class="tok-val">50%</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre aspect-ratio y proporciones.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propiedad define la relación entre ancho y alto de un elemento?', options: ['aspect-ratio', 'object-fit', 'ratio', 'proportion'], answer: 'aspect-ratio' },
        { prompt: '¿Qué valor de aspect-ratio corresponde a una proporción de video widescreen?', options: ['16 / 9', '1 / 1', '4 / 3', '9 / 16'], answer: '16 / 9' },
        { prompt: '¿Qué valor de aspect-ratio genera un cuadrado perfecto?', options: ['1 / 1', '16 / 9', '2 / 1', '3 / 4'], answer: '1 / 1' },
        { prompt: 'Antes de aspect-ratio, ¿qué técnica se usaba comúnmente para mantener proporciones?', options: ['Padding definido en porcentaje', 'flex-basis fijo', 'z-index alto', 'overflow: hidden'], answer: 'Padding definido en porcentaje' }
      ]
    }
  },
  {
    id: 'css-47',
    title: 'Variables CSS dinámicas desde JavaScript',
    subtitle: 'Nivel 47',
    xp: 159,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Las variables CSS no son solo estáticas: se pueden leer y modificar desde JavaScript con <code>element.style.setProperty()</code>, lo que permite animaciones o temas controlados por código.',
        'Esto es muy usado para cosas como sliders personalizados, temas de color dinámicos o efectos que siguen la posición del mouse, sin reescribir todo el CSS.'
      ],
      code:
        '<span class="tok-comment">// JavaScript</span>\n' +
        'document.documentElement.style.setProperty(<span class="tok-val">"--color-primario"</span>, <span class="tok-val">"#ff6b6b"</span>);\n\n' +
        '<span class="tok-comment">/* CSS */</span>\n' +
        '<span class="tok-prop">.boton</span> {\n' +
        '  <span class="tok-prop">background</span>: <span class="tok-val">var(--color-primario)</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre variables CSS dinámicas con JavaScript.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué método de JavaScript permite cambiar el valor de una variable CSS desde el código?', options: ['element.style.setProperty()', 'element.getAttribute()', 'element.classList.add()', 'element.style.getProperty()'], answer: 'element.style.setProperty()' },
        { prompt: '¿Qué ventaja tiene modificar variables CSS desde JavaScript en vez de cambiar clases?', options: ['Se puede animar o ajustar un valor específico sin reescribir reglas CSS completas', 'Es la única forma de cambiar estilos con JS', 'Elimina la necesidad de escribir CSS', 'Hace que el navegador ignore la hoja de estilos'], answer: 'Se puede animar o ajustar un valor específico sin reescribir reglas CSS completas' },
        { prompt: '¿Qué uso común tiene esta técnica?', options: ['Temas de color dinámicos o efectos que siguen al mouse', 'Validar formularios', 'Cargar imágenes más rápido', 'Ordenar listas alfabéticamente'], answer: 'Temas de color dinámicos o efectos que siguen al mouse' },
        { prompt: 'Para que funcione, ¿con qué función debe estar referenciada en el CSS la variable modificada desde JS?', options: ['var()', 'calc()', 'attr()', 'env()'], answer: 'var()' }
      ]
    }
  },
    {
    id: 'css-48',
    title: 'Modo oscuro con variables CSS',
    subtitle: 'Nivel 48',
    xp: 163,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Definir los colores de tu portafolio como variables CSS en <code>:root</code> (<code>--color-fondo</code>, <code>--color-texto</code>) te permite cambiar el tema completo modificando solo esas variables, sin tocar el resto del CSS.',
        'Un modo claro/oscuro se logra redefiniendo esas mismas variables dentro de un selector condicional, por ejemplo <code>body.tema-claro { --color-fondo: #fff; }</code>. JavaScript solo necesita alternar esa clase en el &lt;body&gt; — el cambio de color lo hace CSS solo.'
      ],
      code:
        '<span class="tok-prop">:root</span> {\n' +
        '  <span class="tok-prop">--color-fondo</span>: <span class="tok-val">#0d0d1a</span>;\n' +
        '  <span class="tok-prop">--color-texto</span>: <span class="tok-val">#f4f4f4</span>;\n' +
        '}\n' +
        '<span class="tok-prop">body</span> { <span class="tok-prop">background</span>: <span class="tok-val">var(--color-fondo)</span>; <span class="tok-prop">color</span>: <span class="tok-val">var(--color-texto)</span>; }\n' +
        '<span class="tok-prop">body.tema-claro</span> { <span class="tok-prop">--color-fondo</span>: <span class="tok-val">#ffffff</span>; <span class="tok-prop">--color-texto</span>: <span class="tok-val">#111111</span>; }'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre cómo armar un modo oscuro/claro con variables CSS.',
      variant: 'plain',
      questions: [
        { prompt: '¿Dónde conviene declarar las variables de color por defecto de un sitio?', options: ['En :root, para que estén disponibles en toda la página', 'Solo dentro de body', 'Dentro de cada componente por separado', 'En el archivo HTML, no en CSS'], answer: 'En :root, para que estén disponibles en toda la página' },
        { prompt: '¿Cómo se usa una variable CSS llamada --color-fondo dentro de una propiedad?', options: ['background: var(--color-fondo);', 'background: --color-fondo;', 'background: $color-fondo;', 'background: color-fondo;'], answer: 'background: var(--color-fondo);' },
        { prompt: 'Si body.tema-claro redefine --color-fondo, ¿qué necesita hacer JavaScript para activar el modo claro?', options: ['Agregar la clase tema-claro al body', 'Cambiar directamente el archivo CSS', 'Recargar la página completa', 'Nada, cambia solo'], answer: 'Agregar la clase tema-claro al body' },
        { prompt: '¿Cuál es la ventaja principal de usar variables CSS para los colores del tema?', options: ['Cambiar el tema completo modificando solo esas variables, sin tocar el resto del CSS', 'Hace que el sitio cargue instantáneamente', 'Es obligatorio para que el modo oscuro funcione', 'Evita tener que usar clases en HTML'], answer: 'Cambiar el tema completo modificando solo esas variables, sin tocar el resto del CSS' }
      ]
    }
  },
    {
    id: 'css-49',
    title: 'Estilos del formulario de contacto',
    subtitle: 'Nivel 49',
    xp: 166,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'Un formulario prolijo necesita que cada input y textarea tengan un ancho consistente (<code>width: 100%</code>) y un padding cómodo para tocar o hacer clic. <code>border-radius</code> suaviza las esquinas para que combine con el resto del portafolio.',
        'El estado <code>:focus</code> (cuando el campo está seleccionado) es una buena oportunidad para cambiar el color del borde y dar feedback visual de que ahí se puede escribir.'
      ],
      code:
        '<span class="tok-prop">#contacto input, #contacto textarea</span> {\n' +
        '  <span class="tok-prop">width</span>: <span class="tok-val">100%</span>;\n' +
        '  <span class="tok-prop">padding</span>: <span class="tok-val">0.75rem</span>;\n' +
        '  <span class="tok-prop">border-radius</span>: <span class="tok-val">8px</span>;\n' +
        '  <span class="tok-prop">border</span>: <span class="tok-val">1px solid #333</span>;\n' +
        '}\n' +
        '<span class="tok-prop">#contacto input:focus</span> { <span class="tok-prop">border-color</span>: <span class="tok-val">var(--color-primario)</span>; <span class="tok-prop">outline</span>: <span class="tok-val">none</span>; }'
    },
    exercise: {
      instructions: 'Completa cada línea del estilo del formulario de contacto.',
      blanks: [
        { id: 'b1', before: '#contacto input, #contacto textarea { width: ', after: '; padding: 0.75rem; }', answer: '100%', options: ['100%', '100px', 'full', 'auto'] },
        { id: 'b2', before: '#contacto input { border-radius: ', after: '; border: 1px solid #333; }', answer: '8px', options: ['8px', '8', '8em', '8pt'] },
        { id: 'b3', before: '#contacto input:', after: ' { border-color: var(--color-primario); }', answer: 'focus', options: ['focus', 'hover', 'active', 'visited'] },
        { id: 'b4', before: '#contacto input:focus { border-color: var(--color-primario); ', after: ': none; }', answer: 'outline', options: ['outline', 'border', 'box-shadow', 'background'] }
      ]
    }
  },
    {
    id: 'css-50',
    title: 'Proyecto integrador: el estilo de tu portafolio',
    subtitle: 'Nivel 50',
    xp: 170,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'Ya estilizaste cada pieza de tu portafolio por separado: header, hero, tarjetas de proyecto, chips de habilidades, formulario y modo oscuro. Ahora falta darle un orden de trabajo a todo eso, igual que hiciste con el HTML.',
        'Un buen orden evita reescribir código: primero el reset y las variables globales (colores, tipografía), después el layout general de la página, y por último los detalles visuales y las animaciones de cada componente.'
      ],
      code:
        '<span class="tok-prop">:root</span> { <span class="tok-prop">--color-primario</span>: <span class="tok-val">#39ffb0</span>; }\n' +
        '<span class="tok-prop">*</span> { <span class="tok-prop">margin</span>: <span class="tok-val">0</span>; <span class="tok-prop">box-sizing</span>: <span class="tok-val">border-box</span>; }\n\n' +
        '<span class="tok-prop">body</span> {\n' +
        '  <span class="tok-prop">font-family</span>: <span class="tok-val">sans-serif</span>;\n' +
        '  <span class="tok-prop">background</span>: <span class="tok-val">var(--color-fondo)</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Ordená estos pasos en el orden lógico para maquetar y estilizar tu portafolio completo, de principio a fin.',
      items: [
        { id: 'a', code: 'Definir variables CSS y un reset básico (:root, *)' },
        { id: 'b', code: 'Estilizar el header y la navegación (flex, sticky)' },
        { id: 'c', code: 'Maquetar el grid de tarjetas de proyectos y los chips de habilidades' },
        { id: 'd', code: 'Agregar transiciones y efectos hover a los componentes' },
        { id: 'e', code: 'Estilizar el formulario de contacto y ajustar el modo oscuro/responsive' }
      ],
      correctOrder: ['a', 'b', 'c', 'd', 'e']
    }
  }
];
