/* ==========================================================================
   DevQuest — content-html.js
   Niveles del módulo HTML5 (de principiante a avanzado).
   Cada nivel: { id, title, subtitle, xp, type, theory, exercise }
   ========================================================================== */

'use strict';

const HTML_LEVELS = [
  {
    id: 'html-1',
    title: 'Estructura y etiquetas',
    subtitle: 'Nivel 1',
    xp: 50,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'HTML (<em>HyperText Markup Language</em>) define la <strong>estructura</strong> de toda página web mediante etiquetas.',
        'Cada etiqueta tiene un propósito semántico. Por ejemplo: <code>&lt;h1&gt;</code> para el título principal, <code>&lt;p&gt;</code> para párrafos, <code>&lt;img&gt;</code> para imágenes y <code>&lt;a&gt;</code> para enlaces.'
      ],
      code:
        '<span class="tok-tag">&lt;h1&gt;</span>Hola, DevQuest<span class="tok-tag">&lt;/h1&gt;</span>\n' +
        '<span class="tok-tag">&lt;p&gt;</span>Aprender a programar puede ser muy divertido.<span class="tok-tag">&lt;/p&gt;</span>\n' +
        '<span class="tok-tag">&lt;img</span> <span class="tok-attr">src</span>=<span class="tok-string">"foto.png"</span> <span class="tok-attr">alt</span>=<span class="tok-string">"Descripción"</span><span class="tok-tag">&gt;</span>'
    },
    exercise: {
      instructions: 'Elige la etiqueta correcta en cada línea para completar el documento HTML.',
      blanks: [
        { id: 'b1', before: '&lt;', after: '&gt;Bienvenido a DevQuest&lt;/h1&gt;', answer: 'h1', options: ['h1', 'p', 'a', 'img'] },
        { id: 'b2', before: '&lt;', after: ' src="logo.png" alt="Logo DevQuest"&gt;', answer: 'img', options: ['img', 'div', 'link', 'src'] },
        { id: 'b3', before: '&lt;', after: ' href="https://example.com"&gt;Visítanos&lt;/a&gt;', answer: 'a', options: ['a', 'href', 'nav', 'link'] },
        { id: 'b4', before: '&lt;', after: '&gt;Este es un párrafo de ejemplo.&lt;/p&gt;', answer: 'p', options: ['p', 'span', 'div', 'text'] }
      ]
    }
  },
  {
    id: 'html-2',
    title: 'Constructor de formularios',
    subtitle: 'Nivel 2',
    xp: 60,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'Un formulario HTML se construye con varias etiquetas que deben ir en un orden lógico: primero la <strong>etiqueta</strong> (<code>&lt;label&gt;</code>) que describe el campo, y justo después el <strong>campo</strong> (<code>&lt;input&gt;</code>) donde se escribe el dato.',
        'Al final del formulario suele ir un <code>&lt;button&gt;</code> de tipo <code>submit</code> para enviarlo.'
      ],
      code:
        '<span class="tok-tag">&lt;label</span> <span class="tok-attr">for</span>=<span class="tok-string">"email"</span><span class="tok-tag">&gt;</span>Correo:<span class="tok-tag">&lt;/label&gt;</span>\n' +
        '<span class="tok-tag">&lt;input</span> <span class="tok-attr">type</span>=<span class="tok-string">"email"</span> <span class="tok-attr">id</span>=<span class="tok-string">"email"</span><span class="tok-tag">&gt;</span>'
    },
    exercise: {
      instructions: 'Toca las piezas en el orden correcto para construir un formulario de registro válido.',
      items: [
        { id: 'name-label', code: '&lt;label for="nombre"&gt;Nombre:&lt;/label&gt;' },
        { id: 'name-input', code: '&lt;input type="text" id="nombre"&gt;' },
        { id: 'email-label', code: '&lt;label for="email"&gt;Correo:&lt;/label&gt;' },
        { id: 'email-input', code: '&lt;input type="email" id="email"&gt;' },
        { id: 'submit-btn', code: '&lt;button type="submit"&gt;Enviar&lt;/button&gt;' }
      ],
      correctOrder: ['name-label', 'name-input', 'email-label', 'email-input', 'submit-btn']
    }
  },
  {
    id: 'html-3',
    title: 'Listas y tablas',
    subtitle: 'Nivel 3',
    xp: 55,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'Las listas organizan contenido relacionado. <code>&lt;ul&gt;</code> crea una lista sin orden (con viñetas) y <code>&lt;ol&gt;</code> una lista numerada; ambas contienen elementos <code>&lt;li&gt;</code>.',
        'Las tablas se construyen con <code>&lt;table&gt;</code>. Cada fila es un <code>&lt;tr&gt;</code> y cada celda de datos un <code>&lt;td&gt;</code>.'
      ],
      code:
        '<span class="tok-tag">&lt;ul&gt;</span>\n' +
        '  <span class="tok-tag">&lt;li&gt;</span>HTML<span class="tok-tag">&lt;/li&gt;</span>\n' +
        '  <span class="tok-tag">&lt;li&gt;</span>CSS<span class="tok-tag">&lt;/li&gt;</span>\n' +
        '<span class="tok-tag">&lt;/ul&gt;</span>\n\n' +
        '<span class="tok-tag">&lt;table&gt;</span>\n' +
        '  <span class="tok-tag">&lt;tr&gt;&lt;td&gt;</span>JavaScript<span class="tok-tag">&lt;/td&gt;&lt;/tr&gt;</span>\n' +
        '<span class="tok-tag">&lt;/table&gt;</span>'
    },
    exercise: {
      instructions: 'Elige la etiqueta correcta en cada línea para completar listas y tablas.',
      blanks: [
        { id: 'b1', before: '&lt;', after: '&gt;Lista de la compra&lt;/ul&gt;', answer: 'ul', options: ['ul', 'ol', 'li', 'table'] },
        { id: 'b2', before: '&lt;', after: '&gt;Manzanas&lt;/li&gt;', answer: 'li', options: ['li', 'ul', 'td', 'tr'] },
        { id: 'b3', before: '&lt;', after: '&gt;Datos del alumno&lt;/table&gt;', answer: 'table', options: ['table', 'tr', 'td', 'ul'] },
        { id: 'b4', before: '&lt;', after: '&gt;Juan Pérez&lt;/td&gt;', answer: 'td', options: ['td', 'tr', 'th', 'li'] }
      ]
    }
  },
  {
    id: 'html-4',
    title: 'Etiquetas semánticas',
    subtitle: 'Nivel 4',
    xp: 60,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El HTML semántico usa etiquetas que describen el significado del contenido, no solo su apariencia. Esto mejora la accesibilidad y el posicionamiento en buscadores (SEO).',
        'Etiquetas semánticas comunes: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> y <code>&lt;footer&gt;</code>.'
      ],
      code:
        '<span class="tok-tag">&lt;header&gt;</span>\n' +
        '  <span class="tok-tag">&lt;nav&gt;</span>...<span class="tok-tag">&lt;/nav&gt;</span>\n' +
        '<span class="tok-tag">&lt;/header&gt;</span>\n' +
        '<span class="tok-tag">&lt;main&gt;</span>\n' +
        '  <span class="tok-tag">&lt;article&gt;</span>...<span class="tok-tag">&lt;/article&gt;</span>\n' +
        '<span class="tok-tag">&lt;/main&gt;</span>\n' +
        '<span class="tok-tag">&lt;footer&gt;</span>...<span class="tok-tag">&lt;/footer&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre etiquetas semánticas de HTML5.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué etiqueta se usa para el menú de navegación principal?', options: ['nav', 'menu', 'links', 'header'], answer: 'nav' },
        { prompt: '¿Qué etiqueta representa el contenido principal y único de la página?', options: ['main', 'section', 'div', 'body'], answer: 'main' },
        { prompt: '¿Qué etiqueta agrupa contenido independiente y autocontenido, como un post de blog?', options: ['article', 'aside', 'section', 'div'], answer: 'article' },
        { prompt: '¿Qué etiqueta se usa típicamente para el pie de página con información de copyright?', options: ['footer', 'header', 'bottom', 'end'], answer: 'footer' }
      ]
    }
  },
  {
    id: 'html-5',
    title: 'Atributos y multimedia',
    subtitle: 'Nivel 5',
    xp: 65,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'Muchas etiquetas necesitan <strong>atributos</strong> para funcionar: <code>src</code> indica el origen de un recurso, <code>controls</code> muestra los controles de reproducción y <code>charset</code> define la codificación de caracteres.',
        'Etiquetas como <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code> e <code>&lt;iframe&gt;</code> permiten incrustar contenido multimedia externo.'
      ],
      code:
        '<span class="tok-tag">&lt;video</span> <span class="tok-attr">src</span>=<span class="tok-string">"clip.mp4"</span> <span class="tok-attr">controls</span><span class="tok-tag">&gt;&lt;/video&gt;</span>\n' +
        '<span class="tok-tag">&lt;meta</span> <span class="tok-attr">charset</span>=<span class="tok-string">"UTF-8"</span><span class="tok-tag">&gt;</span>'
    },
    exercise: {
      instructions: 'Completa el atributo que falta en cada etiqueta.',
      blanks: [
        { id: 'b1', before: '&lt;video src="clip.mp4" ', after: '&gt;&lt;/video&gt;', answer: 'controls', options: ['controls', 'autoplay', 'loop', 'target'] },
        { id: 'b2', before: '&lt;img src="foto.jpg" ', after: '="Una playa al atardecer"&gt;', answer: 'alt', options: ['alt', 'title', 'src', 'href'] },
        { id: 'b3', before: '&lt;a href="https://example.com" ', after: '="_blank"&gt;Abrir&lt;/a&gt;', answer: 'target', options: ['target', 'href', 'rel', 'name'] },
        { id: 'b4', before: '&lt;meta ', after: '="UTF-8"&gt;', answer: 'charset', options: ['charset', 'lang', 'encoding', 'type'] }
      ]
    }
  },
  {
    id: 'html-6',
    title: 'Accesibilidad web',
    subtitle: 'Nivel 6',
    xp: 75,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La accesibilidad web asegura que cualquier persona, incluidas las que usan lectores de pantalla, puedan usar tu sitio.',
        'Buenas prácticas: incluye siempre un <code>alt</code> descriptivo en las imágenes, asocia cada <code>&lt;label&gt;</code> con su campo usando <code>for</code>/<code>id</code>, y declara el idioma de la página con <code>lang</code> en la etiqueta <code>&lt;html&gt;</code>.'
      ],
      code:
        '<span class="tok-tag">&lt;html</span> <span class="tok-attr">lang</span>=<span class="tok-string">"es"</span><span class="tok-tag">&gt;</span>\n' +
        '  <span class="tok-tag">&lt;img</span> <span class="tok-attr">src</span>=<span class="tok-string">"logo.png"</span> <span class="tok-attr">alt</span>=<span class="tok-string">"Logotipo de DevQuest"</span><span class="tok-tag">&gt;</span>\n' +
        '  <span class="tok-tag">&lt;label</span> <span class="tok-attr">for</span>=<span class="tok-string">"usuario"</span><span class="tok-tag">&gt;</span>Usuario:<span class="tok-tag">&lt;/label&gt;</span>\n' +
        '  <span class="tok-tag">&lt;input</span> <span class="tok-attr">id</span>=<span class="tok-string">"usuario"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;/html&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas avanzadas sobre accesibilidad web.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué sirve el atributo alt en una imagen?', options: ['Describe la imagen para lectores de pantalla y si no carga', 'Cambia el tamaño de la imagen', 'Define el enlace de la imagen', 'Aplica un estilo CSS'], answer: 'Describe la imagen para lectores de pantalla y si no carga' },
        { prompt: '¿Cómo se asocia correctamente una etiqueta label con su campo?', options: ['Con for en el label e id igual en el input', 'Con class igual en ambos', 'Poniendo el label dentro de un div', 'No es necesario asociarlos'], answer: 'Con for en el label e id igual en el input' },
        { prompt: '¿Qué atributo del elemento html declara el idioma de la página?', options: ['lang', 'language', 'locale', 'dir'], answer: 'lang' },
        { prompt: '¿Qué atributo ARIA da una etiqueta accesible a un botón sin texto visible?', options: ['aria-label', 'aria-title', 'alt', 'role'], answer: 'aria-label' }
      ]
    }
  }
];
