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
  }
];
