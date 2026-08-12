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
  },
  {
    id: 'html-7',
    title: 'Enlaces y navegación',
    subtitle: 'Nivel 7',
    xp: 56,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'El atributo <code>href</code> de la etiqueta <code>&lt;a&gt;</code> indica hacia dónde apunta un enlace. Puede ser una <strong>URL absoluta</strong> (con protocolo, como <code>https://...</code>) o una <strong>ruta relativa</strong> al archivo actual, como <code>pagina.html</code> o <code>../img/logo.png</code>.',
        'El atributo <code>target="_blank"</code> abre el enlace en una pestaña nueva. Por seguridad, se recomienda añadir <code>rel="noopener"</code> cuando lo uses.'
      ],
      code:
        '<span class="tok-tag">&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"contacto.html"</span><span class="tok-tag">&gt;</span>Contacto<span class="tok-tag">&lt;/a&gt;</span>\n' +
        '<span class="tok-tag">&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"https://example.com"</span> <span class="tok-attr">target</span>=<span class="tok-string">"_blank"</span> <span class="tok-attr">rel</span>=<span class="tok-string">"noopener"</span><span class="tok-tag">&gt;</span>Sitio externo<span class="tok-tag">&lt;/a&gt;</span>'
    },
    exercise: {
      instructions: 'Elige la palabra correcta para completar cada enlace.',
      blanks: [
        { id: 'b1', before: '&lt;a ', after: '="galeria.html"&gt;Ver galería&lt;/a&gt;', answer: 'href', options: ['href', 'src', 'link', 'path'] },
        { id: 'b2', before: '&lt;a href="https://otrosite.com" ', after: '="_blank"&gt;Abrir en pestaña nueva&lt;/a&gt;', answer: 'target', options: ['target', 'rel', 'href', 'open'] },
        { id: 'b3', before: '&lt;a href="https://otrosite.com" target="_blank" ', after: '="noopener"&gt;Enlace seguro&lt;/a&gt;', answer: 'rel', options: ['rel', 'ref', 'target', 'security'] },
        { id: 'b4', before: '&lt;', after: ' href="index.html"&gt;Inicio&lt;/a&gt;', answer: 'a', options: ['a', 'link', 'nav', 'href'] }
      ]
    }
  },
  {
    id: 'html-8',
    title: 'Comentarios y buenas prácticas',
    subtitle: 'Nivel 8',
    xp: 58,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los comentarios en HTML se escriben así: <code>&lt;!-- comentario --&gt;</code>. El navegador los ignora por completo: sirven para explicar el código a otras personas (o a ti mismo en el futuro).',
        'Buenas prácticas: usa nombres de clases e ids descriptivos, indenta el código de forma consistente y evita anidar etiquetas sin necesidad.'
      ],
      code:
        '<span class="tok-comment">&lt;!-- Cabecera del sitio --&gt;</span>\n' +
        '<span class="tok-tag">&lt;header&gt;</span>\n' +
        '  <span class="tok-tag">&lt;h1&gt;</span>DevQuest<span class="tok-tag">&lt;/h1&gt;</span>\n' +
        '<span class="tok-tag">&lt;/header&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre comentarios y buenas prácticas en HTML.',
      variant: 'plain',
      questions: [
        { prompt: '¿Cuál es la forma correcta de escribir un comentario en HTML?', options: ['Empieza con &lt;!-- y termina con --&gt;', 'Empieza con // en cada línea', 'Se escribe entre /* y */', 'Se escribe entre # y fin de línea'], answer: 'Empieza con &lt;!-- y termina con --&gt;' },
        { prompt: '¿Qué ocurre con el contenido dentro de un comentario HTML?', options: ['El navegador lo ignora y no lo muestra en la página', 'Se muestra en negrita', 'Se ejecuta como JavaScript', 'Aparece solo en dispositivos móviles'], answer: 'El navegador lo ignora y no lo muestra en la página' },
        { prompt: '¿Cuál de estas es una buena práctica al escribir HTML?', options: ['Usar una indentación consistente y nombres descriptivos', 'Escribir todo el código en una sola línea', 'Usar nombres de clase como &quot;div1&quot;, &quot;div2&quot;, &quot;div3&quot;', 'Evitar los comentarios porque ralentizan la página'], answer: 'Usar una indentación consistente y nombres descriptivos' },
        { prompt: '¿Por qué es útil comentar el código HTML?', options: ['Ayuda a explicar el código a otras personas o a ti mismo más adelante', 'Hace que la página cargue más rápido', 'Es obligatorio para que el HTML sea válido', 'Mejora automáticamente el SEO'], answer: 'Ayuda a explicar el código a otras personas o a ti mismo más adelante' }
      ]
    }
  },
  {
    id: 'html-9',
    title: 'Estructura del documento',
    subtitle: 'Nivel 9',
    xp: 60,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'Todo documento HTML empieza con <code>&lt;!DOCTYPE html&gt;</code>, que le dice al navegador que use el estándar HTML5. Después va la etiqueta raíz <code>&lt;html&gt;</code>, que envuelve todo lo demás.',
        'Dentro de <code>&lt;html&gt;</code> hay dos partes: <code>&lt;head&gt;</code>, con información no visible (título, metadatos, enlaces a estilos), y <code>&lt;body&gt;</code>, con el contenido visible de la página.'
      ],
      code:
        '<span class="tok-tag">&lt;!DOCTYPE html&gt;</span>\n' +
        '<span class="tok-tag">&lt;html</span> <span class="tok-attr">lang</span>=<span class="tok-string">"es"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;head&gt;</span>...<span class="tok-tag">&lt;/head&gt;</span>\n' +
        '<span class="tok-tag">&lt;body&gt;</span>...<span class="tok-tag">&lt;/body&gt;</span>\n' +
        '<span class="tok-tag">&lt;/html&gt;</span>'
    },
    exercise: {
      instructions: 'Toca las piezas en el orden correcto para armar la estructura básica de un documento HTML.',
      items: [
        { id: 'doctype', code: '&lt;!DOCTYPE html&gt;' },
        { id: 'html-open', code: '&lt;html lang="es"&gt;' },
        { id: 'head-block', code: '&lt;head&gt;&lt;title&gt;Mi página&lt;/title&gt;&lt;/head&gt;' },
        { id: 'body-open', code: '&lt;body&gt;' },
        { id: 'body-content', code: '&lt;h1&gt;Hola&lt;/h1&gt;' },
        { id: 'close-tags', code: '&lt;/body&gt;&lt;/html&gt;' }
      ],
      correctOrder: ['doctype', 'html-open', 'head-block', 'body-open', 'body-content', 'close-tags']
    }
  },
  {
    id: 'html-10',
    title: 'Jerarquía de encabezados',
    subtitle: 'Nivel 10',
    xp: 62,
    type: 'quiz',
    theory: {
      paragraphs: [
        'HTML ofrece seis niveles de encabezado: <code>&lt;h1&gt;</code> (el más importante) hasta <code>&lt;h6&gt;</code> (el menos importante). Deben usarse en orden, sin saltar niveles, para mantener una estructura lógica.',
        'Lo normal es usar un único <code>&lt;h1&gt;</code> por página (el título principal) y usar <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>... para las secciones y subsecciones.'
      ],
      code:
        '<span class="tok-tag">&lt;h1&gt;</span>DevQuest<span class="tok-tag">&lt;/h1&gt;</span>\n' +
        '<span class="tok-tag">&lt;h2&gt;</span>Módulo de HTML<span class="tok-tag">&lt;/h2&gt;</span>\n' +
        '<span class="tok-tag">&lt;h3&gt;</span>Nivel 10<span class="tok-tag">&lt;/h3&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre la jerarquía de encabezados.',
      variant: 'plain',
      questions: [
        { prompt: '¿Cuántos niveles de encabezado existen en HTML?', options: ['6, de h1 a h6', '4, de h1 a h4', '3, de h1 a h3', '10, de h1 a h10'], answer: '6, de h1 a h6' },
        { prompt: '¿Cuál es la buena práctica al usar encabezados en una página?', options: ['Usar un solo h1 y no saltar niveles', 'Usar varios h1 para destacar más texto', 'Usar solo h6 porque es más pequeño', 'Usar los encabezados en cualquier orden'], answer: 'Usar un solo h1 y no saltar niveles' },
        { prompt: '¿Qué encabezado representa el título más importante de la página?', options: ['h1', 'h6', 'h3', 'header'], answer: 'h1' },
        { prompt: '¿Por qué es importante respetar la jerarquía de encabezados?', options: ['Mejora la accesibilidad y el SEO al dar una estructura clara', 'Hace que el texto se vea en negrita', 'Es obligatorio o el navegador no carga la página', 'Solo afecta el color del texto'], answer: 'Mejora la accesibilidad y el SEO al dar una estructura clara' }
      ]
    }
  },
  {
    id: 'html-11',
    title: 'Formato de texto',
    subtitle: 'Nivel 11',
    xp: 64,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        '<code>&lt;strong&gt;</code> marca texto con importancia (normalmente en negrita) y <code>&lt;em&gt;</code> marca énfasis (normalmente en cursiva). <code>&lt;mark&gt;</code> resalta texto como si estuviera subrayado con marcador.',
        '<code>&lt;small&gt;</code> reduce el tamaño para texto secundario, como notas legales, y <code>&lt;del&gt;</code> muestra texto tachado, indicando que fue eliminado o ya no es válido.'
      ],
      code:
        '<span class="tok-tag">&lt;p&gt;</span>Esto es <span class="tok-tag">&lt;strong&gt;</span>muy importante<span class="tok-tag">&lt;/strong&gt;</span> y esto está <span class="tok-tag">&lt;em&gt;</span>enfatizado<span class="tok-tag">&lt;/em&gt;</span>.<span class="tok-tag">&lt;/p&gt;</span>\n' +
        '<span class="tok-tag">&lt;p&gt;</span><span class="tok-tag">&lt;mark&gt;</span>Texto resaltado<span class="tok-tag">&lt;/mark&gt;</span><span class="tok-tag">&lt;/p&gt;</span>'
    },
    exercise: {
      instructions: 'Elige la etiqueta correcta para dar formato a cada texto.',
      blanks: [
        { id: 'b1', before: '&lt;', after: '&gt;Precio: 19,99€&lt;/del&gt;', answer: 'del', options: ['del', 's', 'small', 'mark'] },
        { id: 'b2', before: '&lt;', after: '&gt;Aviso legal en letra pequeña&lt;/small&gt;', answer: 'small', options: ['small', 'em', 'mark', 'del'] },
        { id: 'b3', before: '&lt;', after: '&gt;¡Esto es muy importante!&lt;/strong&gt;', answer: 'strong', options: ['strong', 'em', 'mark', 'b'] },
        { id: 'b4', before: '&lt;', after: '&gt;Palabra clave resaltada&lt;/mark&gt;', answer: 'mark', options: ['mark', 'em', 'strong', 'small'] }
      ]
    }
  },
  {
    id: 'html-12',
    title: 'Saltos, espacios y entidades',
    subtitle: 'Nivel 12',
    xp: 66,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>&lt;br&gt;</code> inserta un salto de línea dentro de un bloque de texto, y <code>&lt;hr&gt;</code> dibuja una línea horizontal para separar secciones de contenido. Ambas son etiquetas vacías (no llevan cierre).',
        'Las <strong>entidades HTML</strong> representan caracteres especiales: <code>&amp;nbsp;</code> es un espacio que no se rompe en un salto de línea, <code>&amp;amp;</code> representa el símbolo <code>&amp;</code>, y <code>&amp;lt;</code>/<code>&amp;gt;</code> representan <code>&lt;</code> y <code>&gt;</code>.'
      ],
      code:
        '<span class="tok-tag">&lt;p&gt;</span>Primera línea<span class="tok-tag">&lt;br&gt;</span>Segunda línea<span class="tok-tag">&lt;/p&gt;</span>\n' +
        '<span class="tok-tag">&lt;hr&gt;</span>\n' +
        '<span class="tok-tag">&lt;p&gt;</span>5&amp;nbsp;km<span class="tok-tag">&lt;/p&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre saltos de línea, espacios y entidades HTML.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué hace la etiqueta br?', options: ['Inserta un salto de línea dentro de un bloque de texto', 'Dibuja una línea horizontal', 'Crea un párrafo nuevo', 'Añade un espacio en blanco'], answer: 'Inserta un salto de línea dentro de un bloque de texto' },
        { prompt: '¿Qué hace la etiqueta hr?', options: ['Dibuja una línea horizontal para separar contenido', 'Hace un salto de línea', 'Crea un enlace', 'Oculta un elemento'], answer: 'Dibuja una línea horizontal para separar contenido' },
        { prompt: '¿Qué entidad HTML representa un espacio que no se rompe en un salto de línea?', options: ['&amp;nbsp;', '&amp;space;', '&amp;amp;', '&amp;brk;'], answer: '&amp;nbsp;' },
        { prompt: '¿Qué representa la entidad &amp;lt; en HTML?', options: ['El carácter &lt;', 'El carácter &gt;', 'Un espacio en blanco', 'El carácter &amp;'], answer: 'El carácter &lt;' }
      ]
    }
  },
  {
    id: 'html-13',
    title: 'Listas de descripción',
    subtitle: 'Nivel 13',
    xp: 68,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'Una <strong>lista de descripción</strong> asocia términos con sus definiciones. Se crea con <code>&lt;dl&gt;</code> (description list), y dentro va un <code>&lt;dt&gt;</code> (término) seguido de uno o más <code>&lt;dd&gt;</code> (su descripción).',
        'Es ideal para glosarios, preguntas frecuentes o cualquier par clave-valor, como el nombre de una etiqueta y su significado.'
      ],
      code:
        '<span class="tok-tag">&lt;dl&gt;</span>\n' +
        '  <span class="tok-tag">&lt;dt&gt;</span>HTML<span class="tok-tag">&lt;/dt&gt;</span>\n' +
        '  <span class="tok-tag">&lt;dd&gt;</span>Lenguaje de marcado para estructurar páginas web.<span class="tok-tag">&lt;/dd&gt;</span>\n' +
        '<span class="tok-tag">&lt;/dl&gt;</span>'
    },
    exercise: {
      instructions: 'Elige la etiqueta correcta para completar la lista de descripción.',
      blanks: [
        { id: 'b1', before: '&lt;', after: '&gt;Términos y definiciones&lt;/dl&gt;', answer: 'dl', options: ['dl', 'ul', 'ol', 'dt'] },
        { id: 'b2', before: '&lt;', after: '&gt;CSS&lt;/dt&gt;', answer: 'dt', options: ['dt', 'dd', 'li', 'dl'] },
        { id: 'b3', before: '&lt;', after: '&gt;Lenguaje para dar estilo a páginas web.&lt;/dd&gt;', answer: 'dd', options: ['dd', 'dt', 'li', 'p'] },
        { id: 'b4', before: '&lt;dl&gt;&lt;dt&gt;Frontend&lt;/dt&gt;&lt;dd&gt;HTML&lt;/dd&gt;&lt;', after: '&gt;CSS&lt;/dd&gt;&lt;/dl&gt;', answer: 'dd', options: ['dd', 'dt', 'li', 'dl'] }
      ]
    }
  },
  {
    id: 'html-14',
    title: 'Tipos de input',
    subtitle: 'Nivel 14',
    xp: 70,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El atributo <code>type</code> del elemento <code>&lt;input&gt;</code> cambia por completo su comportamiento. Por ejemplo: <code>type="checkbox"</code> crea una casilla de verificación y <code>type="radio"</code> un botón de opción único dentro de un grupo.',
        'También existen tipos especializados como <code>type="date"</code> (selector de fecha), <code>type="number"</code> (solo acepta números) y <code>type="email"</code> (valida que el texto tenga forma de correo).'
      ],
      code:
        '<span class="tok-tag">&lt;input</span> <span class="tok-attr">type</span>=<span class="tok-string">"checkbox"</span> <span class="tok-attr">id</span>=<span class="tok-string">"acepto"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;input</span> <span class="tok-attr">type</span>=<span class="tok-string">"radio"</span> <span class="tok-attr">name</span>=<span class="tok-string">"plan"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;input</span> <span class="tok-attr">type</span>=<span class="tok-string">"date"</span><span class="tok-tag">&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre los tipos de input en formularios.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué tipo de input muestra una casilla que se puede marcar o desmarcar de forma independiente?', options: ['checkbox', 'radio', 'date', 'text'], answer: 'checkbox' },
        { prompt: '¿Qué tipo de input permite elegir solo una opción dentro de un grupo con el mismo name?', options: ['radio', 'checkbox', 'number', 'select'], answer: 'radio' },
        { prompt: '¿Qué tipo de input muestra un selector de calendario para elegir una fecha?', options: ['date', 'time', 'number', 'text'], answer: 'date' },
        { prompt: '¿Qué tipo de input restringe el campo para que solo se puedan escribir números?', options: ['number', 'text', 'date', 'tel'], answer: 'number' }
      ]
    }
  },
  {
    id: 'html-15',
    title: 'Validación básica de formularios',
    subtitle: 'Nivel 15',
    xp: 72,
    type: 'quiz',
    theory: {
      paragraphs: [
        'HTML permite validar formularios sin necesidad de JavaScript. El atributo <code>required</code> obliga a rellenar un campo antes de enviar el formulario.',
        '<code>min</code> y <code>max</code> limitan valores numéricos o de fecha, mientras que <code>pattern</code> exige que el texto coincida con una expresión regular, útil para validar formatos concretos.'
      ],
      code:
        '<span class="tok-tag">&lt;input</span> <span class="tok-attr">type</span>=<span class="tok-string">"number"</span> <span class="tok-attr">min</span>=<span class="tok-string">"1"</span> <span class="tok-attr">max</span>=<span class="tok-string">"10"</span> <span class="tok-attr">required</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;input</span> <span class="tok-attr">type</span>=<span class="tok-string">"text"</span> <span class="tok-attr">pattern</span>=<span class="tok-string">"[A-Za-z]+"</span><span class="tok-tag">&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre validación básica de formularios.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué atributo impide enviar el formulario si un campo está vacío?', options: ['required', 'pattern', 'min', 'placeholder'], answer: 'required' },
        { prompt: '¿Qué atributos limitan el valor mínimo y máximo de un input numérico?', options: ['min y max', 'low y high', 'start y end', 'from y to'], answer: 'min y max' },
        { prompt: '¿Para qué sirve el atributo pattern en un input?', options: ['Para exigir que el texto coincida con una expresión regular', 'Para cambiar el color del campo', 'Para ocultar el campo', 'Para limitar la cantidad de caracteres'], answer: 'Para exigir que el texto coincida con una expresión regular' },
        { prompt: '¿Qué ventaja tiene validar un formulario con atributos HTML frente a no validarlo?', options: ['El navegador avisa al usuario antes de enviar datos incorrectos', 'El formulario se envía más rápido', 'Cambia automáticamente el diseño de la página', 'Permite subir archivos más grandes'], answer: 'El navegador avisa al usuario antes de enviar datos incorrectos' }
      ]
    }
  },
  {
    id: 'html-16',
    title: 'Select, textarea y fieldset',
    subtitle: 'Nivel 16',
    xp: 74,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        '<code>&lt;select&gt;</code> crea una lista desplegable de opciones; cada opción se define con <code>&lt;option&gt;</code>. <code>&lt;textarea&gt;</code> es un campo de texto de varias líneas, útil para comentarios largos.',
        '<code>&lt;fieldset&gt;</code> agrupa varios campos relacionados dentro de un formulario, y <code>&lt;legend&gt;</code> le da un título a ese grupo.'
      ],
      code:
        '<span class="tok-tag">&lt;select&gt;</span>\n' +
        '  <span class="tok-tag">&lt;option&gt;</span>HTML<span class="tok-tag">&lt;/option&gt;</span>\n' +
        '<span class="tok-tag">&lt;/select&gt;</span>\n' +
        '<span class="tok-tag">&lt;fieldset&gt;</span>\n' +
        '  <span class="tok-tag">&lt;legend&gt;</span>Datos personales<span class="tok-tag">&lt;/legend&gt;</span>\n' +
        '<span class="tok-tag">&lt;/fieldset&gt;</span>'
    },
    exercise: {
      instructions: 'Elige la etiqueta correcta para completar el formulario.',
      blanks: [
        { id: 'b1', before: '&lt;', after: '&gt;&lt;option&gt;Argentina&lt;/option&gt;&lt;/select&gt;', answer: 'select', options: ['select', 'option', 'datalist', 'fieldset'] },
        { id: 'b2', before: '&lt;select&gt;&lt;', after: '&gt;Argentina&lt;/option&gt;&lt;/select&gt;', answer: 'option', options: ['option', 'select', 'li', 'dd'] },
        { id: 'b3', before: '&lt;', after: '&gt;Escribe tu comentario aquí&lt;/textarea&gt;', answer: 'textarea', options: ['textarea', 'input', 'select', 'p'] },
        { id: 'b4', before: '&lt;fieldset&gt;&lt;', after: '&gt;Contacto&lt;/legend&gt;&lt;/fieldset&gt;', answer: 'legend', options: ['legend', 'label', 'title', 'caption'] }
      ]
    }
  },
  {
    id: 'html-17',
    title: 'Enlaces especiales',
    subtitle: 'Nivel 17',
    xp: 76,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un enlace puede hacer más que llevarte a otra página. Con <code>href="mailto:correo@ejemplo.com"</code> se abre el cliente de correo, y con <code>href="tel:+123456789"</code> se inicia una llamada en dispositivos móviles.',
        'Un enlace a un <strong>ancla</strong>, como <code>href="#seccion2"</code>, desplaza la página hasta el elemento que tenga <code>id="seccion2"</code>, sin necesidad de recargar.'
      ],
      code:
        '<span class="tok-tag">&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"mailto:hola@devquest.com"</span><span class="tok-tag">&gt;</span>Escríbenos<span class="tok-tag">&lt;/a&gt;</span>\n' +
        '<span class="tok-tag">&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"#final"</span><span class="tok-tag">&gt;</span>Ir al final<span class="tok-tag">&lt;/a&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre enlaces especiales.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué hace un enlace con href="mailto:hola@devquest.com"?', options: ['Abre el cliente de correo para escribir a esa dirección', 'Descarga un archivo', 'Llama por teléfono', 'Abre una nueva pestaña con esa dirección web'], answer: 'Abre el cliente de correo para escribir a esa dirección' },
        { prompt: '¿Qué prefijo se usa para que un enlace inicie una llamada telefónica?', options: ['tel:', 'call:', 'phone:', 'mailto:'], answer: 'tel:' },
        { prompt: '¿Cómo se enlaza a una sección de la misma página que tiene id="contacto"?', options: ['href=&quot;#contacto&quot;', 'href=&quot;contacto&quot;', 'href=&quot;/contacto&quot;', 'href=&quot;id:contacto&quot;'], answer: 'href=&quot;#contacto&quot;' },
        { prompt: '¿Qué elemento debe tener el atributo id="final" para que el enlace href="#final" funcione?', options: ['El elemento al que quieres llegar, en cualquier parte de la página', 'Otro enlace &lt;a&gt;', 'El &lt;head&gt; del documento', 'El &lt;body&gt; completo'], answer: 'El elemento al que quieres llegar, en cualquier parte de la página' }
      ]
    }
  },
  {
    id: 'html-18',
    title: 'Metaetiquetas SEO básicas',
    subtitle: 'Nivel 18',
    xp: 78,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La etiqueta <code>&lt;title&gt;</code>, dentro de <code>&lt;head&gt;</code>, define el texto que aparece en la pestaña del navegador y en los resultados de búsqueda de Google.',
        'La etiqueta <code>&lt;meta name="description"&gt;</code> resume el contenido de la página; los buscadores suelen mostrar ese texto debajo del enlace en los resultados.'
      ],
      code:
        '<span class="tok-tag">&lt;head&gt;</span>\n' +
        '  <span class="tok-tag">&lt;title&gt;</span>DevQuest — Aprende a programar<span class="tok-tag">&lt;/title&gt;</span>\n' +
        '  <span class="tok-tag">&lt;meta</span> <span class="tok-attr">name</span>=<span class="tok-string">"description"</span> <span class="tok-attr">content</span>=<span class="tok-string">"Aprende HTML, CSS y JS jugando"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;/head&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre metaetiquetas básicas para SEO.',
      variant: 'plain',
      questions: [
        { prompt: '¿Dónde debe ir la etiqueta title de una página?', options: ['Dentro de head', 'Dentro de body', 'Dentro de header', 'En cualquier parte del documento'], answer: 'Dentro de head' },
        { prompt: '¿Qué muestra el contenido de la etiqueta title?', options: ['El texto de la pestaña del navegador y de los resultados de búsqueda', 'El pie de página', 'El menú de navegación', 'La imagen principal de la página'], answer: 'El texto de la pestaña del navegador y de los resultados de búsqueda' },
        { prompt: '¿Para qué sirve meta name=&quot;description&quot;?', options: ['Para resumir el contenido de la página para los buscadores', 'Para cambiar el idioma de la página', 'Para definir los colores del sitio', 'Para enlazar la hoja de estilos'], answer: 'Para resumir el contenido de la página para los buscadores' },
        { prompt: '¿Cuántas etiquetas title debería tener una página?', options: ['Una sola', 'Dos, una en head y otra en body', 'Una por cada sección', 'Ninguna, es opcional en HTML5'], answer: 'Una sola' }
      ]
    }
  },
  {
    id: 'html-19',
    title: 'Favicon y enlaces a recursos',
    subtitle: 'Nivel 19',
    xp: 79,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'La etiqueta <code>&lt;link&gt;</code> conecta el documento HTML con recursos externos. Con <code>rel="stylesheet"</code> enlaza una hoja de estilos CSS.',
        'Con <code>rel="icon"</code> define el <strong>favicon</strong>, el pequeño ícono que aparece en la pestaña del navegador junto al título de la página.'
      ],
      code:
        '<span class="tok-tag">&lt;link</span> <span class="tok-attr">rel</span>=<span class="tok-string">"stylesheet"</span> <span class="tok-attr">href</span>=<span class="tok-string">"estilos.css"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;link</span> <span class="tok-attr">rel</span>=<span class="tok-string">"icon"</span> <span class="tok-attr">href</span>=<span class="tok-string">"favicon.png"</span><span class="tok-tag">&gt;</span>'
    },
    exercise: {
      instructions: 'Completa cada etiqueta link con el atributo o valor correcto.',
      blanks: [
        { id: 'b1', before: '&lt;', after: ' rel="stylesheet" href="estilos.css"&gt;', answer: 'link', options: ['link', 'style', 'script', 'meta'] },
        { id: 'b2', before: '&lt;link rel="stylesheet" ', after: '="estilos.css"&gt;', answer: 'href', options: ['href', 'src', 'link', 'rel'] },
        { id: 'b3', before: '&lt;link ', after: '="icon" href="favicon.png"&gt;', answer: 'rel', options: ['rel', 'type', 'href', 'link'] },
        { id: 'b4', before: '&lt;link rel="', after: '" href="favicon.png"&gt;', answer: 'icon', options: ['icon', 'stylesheet', 'image', 'logo'] }
      ]
    }
  },
  {
    id: 'html-20',
    title: 'Codificación de caracteres',
    subtitle: 'Nivel 20',
    xp: 80,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La etiqueta <code>&lt;meta charset="UTF-8"&gt;</code> debe ir al principio de <code>&lt;head&gt;</code> y le indica al navegador cómo interpretar los caracteres del documento (tildes, eñes, símbolos...).',
        'Cuando necesitas mostrar un carácter reservado por HTML, como <code>&lt;</code> o <code>&amp;</code>, debes usar su <strong>entidad</strong>: <code>&amp;lt;</code> y <code>&amp;amp;</code> respectivamente.'
      ],
      code:
        '<span class="tok-tag">&lt;meta</span> <span class="tok-attr">charset</span>=<span class="tok-string">"UTF-8"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;p&gt;</span>2 &amp;lt; 5<span class="tok-tag">&lt;/p&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre codificación de caracteres y entidades HTML.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué hace la etiqueta meta charset=&quot;UTF-8&quot;?', options: ['Indica al navegador cómo interpretar los caracteres del documento', 'Define el idioma de la página', 'Cambia la tipografía del texto', 'Comprime el archivo HTML'], answer: 'Indica al navegador cómo interpretar los caracteres del documento' },
        { prompt: '¿Por qué sin una codificación correcta pueden verse mal las tildes y eñes?', options: ['Porque el navegador interpreta los bytes con una tabla de caracteres distinta', 'Porque el HTML no admite letras con tilde', 'Porque el CSS bloquea esos caracteres', 'Porque JavaScript los elimina automáticamente'], answer: 'Porque el navegador interpreta los bytes con una tabla de caracteres distinta' },
        { prompt: '¿Qué entidad HTML se usa para mostrar el símbolo &lt; sin que el navegador lo confunda con una etiqueta?', options: ['&amp;lt;', '&amp;gt;', '&amp;amp;', '&amp;nbsp;'], answer: '&amp;lt;' },
        { prompt: '¿Qué entidad representa el símbolo &amp; en HTML?', options: ['&amp;amp;', '&amp;lt;', '&amp;gt;', '&amp;quot;'], answer: '&amp;amp;' }
      ]
    }
  },
  {
    id: 'html-21',
    title: 'Tablas avanzadas',
    subtitle: 'Nivel 21',
    xp: 82,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'Una tabla completa se organiza en secciones: <code>&lt;thead&gt;</code> agrupa la fila de encabezados, <code>&lt;tbody&gt;</code> agrupa las filas de datos. Dentro de <code>&lt;thead&gt;</code> se usan celdas <code>&lt;th&gt;</code> en vez de <code>&lt;td&gt;</code>.',
        'El atributo <code>colspan</code> hace que una celda ocupe varias columnas, y <code>rowspan</code> hace que ocupe varias filas.'
      ],
      code:
        '<span class="tok-tag">&lt;table&gt;</span>\n' +
        '  <span class="tok-tag">&lt;thead&gt;&lt;tr&gt;&lt;th&gt;</span>Nombre<span class="tok-tag">&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;</span>\n' +
        '  <span class="tok-tag">&lt;tbody&gt;&lt;tr&gt;&lt;td</span> <span class="tok-attr">colspan</span>=<span class="tok-string">"2"</span><span class="tok-tag">&gt;</span>Ana<span class="tok-tag">&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;</span>\n' +
        '<span class="tok-tag">&lt;/table&gt;</span>'
    },
    exercise: {
      instructions: 'Completa la estructura de esta tabla avanzada.',
      blanks: [
        { id: 'b1', before: '&lt;table&gt;&lt;', after: '&gt;&lt;tr&gt;&lt;th&gt;Producto&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;', answer: 'thead', options: ['thead', 'tbody', 'tfoot', 'tr'] },
        { id: 'b2', before: '&lt;tr&gt;&lt;', after: '&gt;Producto&lt;/th&gt;', answer: 'th', options: ['th', 'td', 'tr', 'dt'] },
        { id: 'b3', before: '&lt;/thead&gt;&lt;', after: '&gt;&lt;tr&gt;&lt;td&gt;Teclado&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;', answer: 'tbody', options: ['tbody', 'thead', 'tfoot', 'body'] },
        { id: 'b4', before: '&lt;td ', after: '="2"&gt;Ocupa dos columnas&lt;/td&gt;', answer: 'colspan', options: ['colspan', 'rowspan', 'span', 'width'] }
      ]
    }
  },
  {
    id: 'html-22',
    title: 'Elementos embebidos',
    subtitle: 'Nivel 22',
    xp: 85,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>&lt;iframe&gt;</code> incrusta otra página web dentro de la actual, como un vídeo de YouTube o un mapa. Es muy usado, pero debe tener siempre un atributo <code>title</code> por accesibilidad.',
        '<code>&lt;embed&gt;</code> y <code>&lt;object&gt;</code> incrustan otros tipos de recursos, como archivos PDF o contenido multimedia que necesita un plugin del navegador.'
      ],
      code:
        '<span class="tok-tag">&lt;iframe</span> <span class="tok-attr">src</span>=<span class="tok-string">"mapa.html"</span> <span class="tok-attr">title</span>=<span class="tok-string">"Mapa de ubicación"</span><span class="tok-tag">&gt;&lt;/iframe&gt;</span>\n' +
        '<span class="tok-tag">&lt;object</span> <span class="tok-attr">data</span>=<span class="tok-string">"folleto.pdf"</span><span class="tok-tag">&gt;&lt;/object&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre elementos embebidos.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué hace la etiqueta iframe?', options: ['Incrusta otra página web dentro de la página actual', 'Crea un formulario', 'Define un párrafo', 'Enlaza una hoja de estilos'], answer: 'Incrusta otra página web dentro de la página actual' },
        { prompt: '¿Qué atributo de iframe es importante añadir por accesibilidad?', options: ['title', 'alt', 'name', 'id'], answer: 'title' },
        { prompt: '¿Qué etiqueta se usa para incrustar un recurso como un PDF, indicando su origen con el atributo data?', options: ['object', 'iframe', 'embed', 'link'], answer: 'object' },
        { prompt: '¿Qué precaución de seguridad conviene tener al usar iframe con contenido de otro sitio?', options: ['Confiar solo en fuentes conocidas, ya que el iframe carga contenido externo', 'Ninguna, iframe es siempre seguro', 'Cambiar el charset del documento', 'Eliminar el atributo src'], answer: 'Confiar solo en fuentes conocidas, ya que el iframe carga contenido externo' }
      ]
    }
  },
  {
    id: 'html-23',
    title: 'Imágenes responsivas',
    subtitle: 'Nivel 23',
    xp: 87,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El atributo <code>srcset</code> en <code>&lt;img&gt;</code> permite ofrecer varias versiones de una imagen en distintos tamaños, para que el navegador elija la más adecuada según la pantalla del usuario.',
        'La etiqueta <code>&lt;picture&gt;</code> agrupa varias etiquetas <code>&lt;source&gt;</code> con distintas condiciones (como el ancho de pantalla) y una <code>&lt;img&gt;</code> de respaldo al final.'
      ],
      code:
        '<span class="tok-tag">&lt;img</span> <span class="tok-attr">src</span>=<span class="tok-string">"foto-800.jpg"</span> <span class="tok-attr">srcset</span>=<span class="tok-string">"foto-400.jpg 400w, foto-800.jpg 800w"</span> <span class="tok-attr">alt</span>=<span class="tok-string">"Paisaje"</span><span class="tok-tag">&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre imágenes responsivas.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué sirve el atributo srcset en una imagen?', options: ['Para ofrecer varias versiones de la imagen según el tamaño de pantalla', 'Para poner un enlace en la imagen', 'Para animar la imagen', 'Para cambiar el formato del archivo'], answer: 'Para ofrecer varias versiones de la imagen según el tamaño de pantalla' },
        { prompt: '¿Qué elemento agrupa varias etiquetas source y una img de respaldo?', options: ['picture', 'figure', 'srcset', 'media'], answer: 'picture' },
        { prompt: '¿Por qué usar imágenes responsivas mejora el rendimiento de un sitio?', options: ['Porque los dispositivos pequeños descargan versiones más ligeras de la imagen', 'Porque las imágenes se cargan en blanco y negro', 'Porque elimina la necesidad de usar CSS', 'Porque comprime automáticamente todos los archivos del sitio'], answer: 'Porque los dispositivos pequeños descargan versiones más ligeras de la imagen' },
        { prompt: '¿Qué etiqueta va siempre al final dentro de picture, como imagen de respaldo?', options: ['img', 'source', 'figcaption', 'picture'], answer: 'img' }
      ]
    }
  },
  {
    id: 'html-24',
    title: 'Formularios avanzados',
    subtitle: 'Nivel 24',
    xp: 90,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        '<code>&lt;datalist&gt;</code> ofrece sugerencias de autocompletado para un <code>&lt;input&gt;</code>, conectados mediante el atributo <code>list</code>. <code>&lt;output&gt;</code> muestra el resultado de un cálculo hecho en el formulario.',
        '<code>&lt;progress&gt;</code> representa el avance de una tarea (como una barra de carga), y <code>&lt;meter&gt;</code> representa una medida dentro de un rango conocido, como el nivel de batería.'
      ],
      code:
        '<span class="tok-tag">&lt;input</span> <span class="tok-attr">list</span>=<span class="tok-string">"lenguajes"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;datalist</span> <span class="tok-attr">id</span>=<span class="tok-string">"lenguajes"</span><span class="tok-tag">&gt;</span>\n' +
        '  <span class="tok-tag">&lt;option</span> <span class="tok-attr">value</span>=<span class="tok-string">"HTML"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;/datalist&gt;</span>\n' +
        '<span class="tok-tag">&lt;progress</span> <span class="tok-attr">value</span>=<span class="tok-string">"70"</span> <span class="tok-attr">max</span>=<span class="tok-string">"100"</span><span class="tok-tag">&gt;&lt;/progress&gt;</span>'
    },
    exercise: {
      instructions: 'Completa cada etiqueta o atributo de estos elementos avanzados de formulario.',
      blanks: [
        { id: 'b1', before: '&lt;input ', after: '="lenguajes"&gt;', answer: 'list', options: ['list', 'name', 'value', 'id'] },
        { id: 'b2', before: '&lt;', after: ' id="lenguajes"&gt;&lt;option value="CSS"&gt;&lt;/datalist&gt;', answer: 'datalist', options: ['datalist', 'select', 'list', 'options'] },
        { id: 'b3', before: '&lt;', after: ' value="80" max="100"&gt;&lt;/progress&gt;', answer: 'progress', options: ['progress', 'meter', 'output', 'progressbar'] },
        { id: 'b4', before: '&lt;', after: ' min="0" max="100" value="60"&gt;&lt;/meter&gt;', answer: 'meter', options: ['meter', 'progress', 'range', 'gauge'] }
      ]
    }
  },
  {
    id: 'html-25',
    title: 'Layout semántico completo',
    subtitle: 'Nivel 25',
    xp: 92,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'Una página bien estructurada combina varias etiquetas semánticas: <code>&lt;header&gt;</code> arriba, <code>&lt;nav&gt;</code> para el menú, <code>&lt;main&gt;</code> para el contenido central, <code>&lt;aside&gt;</code> para contenido relacionado (como una barra lateral) y <code>&lt;footer&gt;</code> al final.',
        'Este orden no es obligatorio para que el HTML funcione, pero es la convención más clara y accesible para organizar una página completa.'
      ],
      code:
        '<span class="tok-tag">&lt;header&gt;&lt;nav&gt;</span>...<span class="tok-tag">&lt;/nav&gt;&lt;/header&gt;</span>\n' +
        '<span class="tok-tag">&lt;main&gt;</span>...<span class="tok-tag">&lt;/main&gt;</span>\n' +
        '<span class="tok-tag">&lt;aside&gt;</span>...<span class="tok-tag">&lt;/aside&gt;</span>\n' +
        '<span class="tok-tag">&lt;footer&gt;</span>...<span class="tok-tag">&lt;/footer&gt;</span>'
    },
    exercise: {
      instructions: 'Toca las piezas en el orden correcto para armar el layout semántico completo de una página.',
      items: [
        { id: 'header', code: '&lt;header&gt;&lt;h1&gt;DevQuest&lt;/h1&gt;&lt;/header&gt;' },
        { id: 'nav', code: '&lt;nav&gt;&lt;a href="#"&gt;Inicio&lt;/a&gt;&lt;/nav&gt;' },
        { id: 'main', code: '&lt;main&gt;&lt;article&gt;Contenido principal&lt;/article&gt;&lt;/main&gt;' },
        { id: 'aside', code: '&lt;aside&gt;Enlaces relacionados&lt;/aside&gt;' },
        { id: 'footer', code: '&lt;footer&gt;Derechos reservados&lt;/footer&gt;' }
      ],
      correctOrder: ['header', 'nav', 'main', 'aside', 'footer']
    }
  },
  {
    id: 'html-26',
    title: 'Atributos data-* personalizados',
    subtitle: 'Nivel 26',
    xp: 95,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los atributos que empiezan con <code>data-</code> permiten guardar información personalizada en cualquier etiqueta HTML, sin afectar su comportamiento ni su estilo por defecto.',
        'Desde JavaScript se accede a ellos fácilmente mediante la propiedad <code>dataset</code>. Por ejemplo, <code>data-user-id="42"</code> se lee como <code>elemento.dataset.userId</code>.'
      ],
      code:
        '<span class="tok-tag">&lt;li</span> <span class="tok-attr">data-user-id</span>=<span class="tok-string">"42"</span><span class="tok-tag">&gt;</span>Ana<span class="tok-tag">&lt;/li&gt;</span>\n' +
        '<span class="tok-comment">// En JavaScript:</span>\n' +
        'elemento.dataset.userId; <span class="tok-comment">// "42"</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre atributos data-* personalizados.',
      variant: 'plain',
      questions: [
        { prompt: '¿Con qué prefijo deben empezar los atributos de datos personalizados en HTML?', options: ['data-', 'custom-', 'attr-', 'x-'], answer: 'data-' },
        { prompt: '¿Cómo se accede desde JavaScript a un atributo data-user-id?', options: ['elemento.dataset.userId', 'elemento.data.user-id', 'elemento.attributes.userId', 'elemento.userId'], answer: 'elemento.dataset.userId' },
        { prompt: '¿Qué ventaja tienen los atributos data-* frente a usar clases para guardar información?', options: ['Permiten guardar valores concretos sin afectar el estilo ni el comportamiento por defecto', 'Hacen que la página cargue más rápido', 'Son obligatorios en HTML5', 'Sustituyen a los atributos id'], answer: 'Permiten guardar valores concretos sin afectar el estilo ni el comportamiento por defecto' },
        { prompt: '¿Cómo se escribiría en HTML un atributo de datos para guardar el precio de un producto?', options: ['data-precio=&quot;19.99&quot;', 'precio=&quot;19.99&quot;', 'attr-precio=&quot;19.99&quot;', 'data:precio=&quot;19.99&quot;'], answer: 'data-precio=&quot;19.99&quot;' }
      ]
    }
  },
  {
    id: 'html-27',
    title: 'Elementos interactivos',
    subtitle: 'Nivel 27',
    xp: 97,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        '<code>&lt;details&gt;</code> crea un bloque que se puede expandir o contraer haciendo clic, sin usar JavaScript. <code>&lt;summary&gt;</code> es el texto visible que se muestra siempre, y que el usuario pulsa para abrir o cerrar el bloque.',
        '<code>&lt;dialog&gt;</code> representa una ventana modal o cuadro de diálogo nativo del navegador, que se puede mostrar y ocultar con JavaScript.'
      ],
      code:
        '<span class="tok-tag">&lt;details&gt;</span>\n' +
        '  <span class="tok-tag">&lt;summary&gt;</span>¿Qué es DevQuest?<span class="tok-tag">&lt;/summary&gt;</span>\n' +
        '  <span class="tok-tag">&lt;p&gt;</span>Una app para aprender a programar.<span class="tok-tag">&lt;/p&gt;</span>\n' +
        '<span class="tok-tag">&lt;/details&gt;</span>'
    },
    exercise: {
      instructions: 'Completa las etiquetas de estos elementos interactivos.',
      blanks: [
        { id: 'b1', before: '&lt;', after: '&gt;&lt;summary&gt;Ver más&lt;/summary&gt;&lt;/details&gt;', answer: 'details', options: ['details', 'summary', 'dialog', 'section'] },
        { id: 'b2', before: '&lt;details&gt;&lt;', after: '&gt;Ver más&lt;/summary&gt;', answer: 'summary', options: ['summary', 'title', 'header', 'legend'] },
        { id: 'b3', before: '&lt;', after: '&gt;Este es un mensaje modal&lt;/dialog&gt;', answer: 'dialog', options: ['dialog', 'details', 'modal', 'div'] },
        { id: 'b4', before: '&lt;dialog ', after: '&gt;Mensaje abierto por defecto&lt;/dialog&gt;', answer: 'open', options: ['open', 'show', 'visible', 'active'] }
      ]
    }
  },
  {
    id: 'html-28',
    title: 'Introducción a Canvas',
    subtitle: 'Nivel 28',
    xp: 100,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La etiqueta <code>&lt;canvas&gt;</code> crea un lienzo en blanco donde se puede dibujar mediante JavaScript: formas, gráficos, animaciones e incluso juegos, píxel a píxel.',
        'Por sí sola, <code>&lt;canvas&gt;</code> no dibuja nada; necesita atributos <code>width</code>/<code>height</code> y código JavaScript que use su <strong>contexto de dibujo</strong> para pintar sobre ella.'
      ],
      code:
        '<span class="tok-tag">&lt;canvas</span> <span class="tok-attr">id</span>=<span class="tok-string">"lienzo"</span> <span class="tok-attr">width</span>=<span class="tok-string">"300"</span> <span class="tok-attr">height</span>=<span class="tok-string">"150"</span><span class="tok-tag">&gt;&lt;/canvas&gt;</span>\n' +
        '<span class="tok-comment">// const ctx = lienzo.getContext("2d");</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre la etiqueta canvas.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué se usa la etiqueta canvas?', options: ['Para dibujar gráficos y animaciones con JavaScript', 'Para insertar vídeos', 'Para crear formularios', 'Para mostrar tablas de datos'], answer: 'Para dibujar gráficos y animaciones con JavaScript' },
        { prompt: '¿Qué se necesita además de la etiqueta canvas para poder dibujar algo?', options: ['JavaScript, usando su contexto de dibujo', 'Solo CSS', 'Un atributo src', 'Nada más, dibuja automáticamente'], answer: 'JavaScript, usando su contexto de dibujo' },
        { prompt: '¿Qué atributos definen el tamaño del lienzo de canvas?', options: ['width y height', 'size y scale', 'w y h', 'rows y cols'], answer: 'width y height' },
        { prompt: '¿Qué método se usa en JavaScript para obtener el contexto de dibujo 2D de un canvas?', options: ['getContext(&quot;2d&quot;)', 'getDrawing()', 'draw2d()', 'getCanvas()'], answer: 'getContext(&quot;2d&quot;)' }
      ]
    }
  },
  {
    id: 'html-29',
    title: 'Introducción a SVG',
    subtitle: 'Nivel 29',
    xp: 102,
    type: 'quiz',
    theory: {
      paragraphs: [
        'SVG (<em>Scalable Vector Graphics</em>) es un formato de gráficos vectoriales que se puede incrustar directamente en HTML con la etiqueta <code>&lt;svg&gt;</code>. A diferencia de una imagen normal, se puede escalar a cualquier tamaño sin perder calidad.',
        'Dentro de <code>&lt;svg&gt;</code> se dibujan formas con etiquetas como <code>&lt;circle&gt;</code>, <code>&lt;rect&gt;</code> o <code>&lt;path&gt;</code>, y sus estilos se pueden controlar con CSS.'
      ],
      code:
        '<span class="tok-tag">&lt;svg</span> <span class="tok-attr">width</span>=<span class="tok-string">"100"</span> <span class="tok-attr">height</span>=<span class="tok-string">"100"</span><span class="tok-tag">&gt;</span>\n' +
        '  <span class="tok-tag">&lt;circle</span> <span class="tok-attr">cx</span>=<span class="tok-string">"50"</span> <span class="tok-attr">cy</span>=<span class="tok-string">"50"</span> <span class="tok-attr">r</span>=<span class="tok-string">"40"</span><span class="tok-tag">/&gt;</span>\n' +
        '<span class="tok-tag">&lt;/svg&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre gráficos SVG.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué significa SVG?', options: ['Scalable Vector Graphics', 'Simple Video Generator', 'Style Vector Grid', 'Structured Visual Graph'], answer: 'Scalable Vector Graphics' },
        { prompt: '¿Cuál es la principal ventaja de SVG frente a un PNG o JPG al escalarlo?', options: ['No pierde calidad al agrandarlo, porque es vectorial', 'Ocupa siempre menos espacio en disco', 'Se carga sin conexión a internet', 'Se convierte automáticamente en animación'], answer: 'No pierde calidad al agrandarlo, porque es vectorial' },
        { prompt: '¿Qué etiqueta dentro de svg dibuja un círculo?', options: ['circle', 'round', 'ellipse', 'dot'], answer: 'circle' },
        { prompt: '¿Cómo se pueden controlar los estilos de un SVG incrustado en HTML?', options: ['Con CSS, igual que otros elementos', 'Solo con atributos inline, nunca con CSS', 'No se pueden estilizar', 'Solo con JavaScript'], answer: 'Con CSS, igual que otros elementos' }
      ]
    }
  },
  {
    id: 'html-30',
    title: 'Microdatos y datos estructurados',
    subtitle: 'Nivel 30',
    xp: 105,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los <strong>microdatos</strong> añaden significado extra al HTML para que los buscadores entiendan mejor el contenido, usando atributos como <code>itemscope</code>, <code>itemtype</code> e <code>itemprop</code>.',
        'El vocabulario más usado es <strong>schema.org</strong>, que define tipos como "Person", "Recipe" o "Product". Google puede mostrar estos datos como resultados enriquecidos en la búsqueda.'
      ],
      code:
        '<span class="tok-tag">&lt;div</span> <span class="tok-attr">itemscope</span> <span class="tok-attr">itemtype</span>=<span class="tok-string">"https://schema.org/Person"</span><span class="tok-tag">&gt;</span>\n' +
        '  <span class="tok-tag">&lt;span</span> <span class="tok-attr">itemprop</span>=<span class="tok-string">"name"</span><span class="tok-tag">&gt;</span>Ana Torres<span class="tok-tag">&lt;/span&gt;</span>\n' +
        '<span class="tok-tag">&lt;/div&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre microdatos y datos estructurados.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué sirven los microdatos en HTML?', options: ['Para dar significado extra al contenido y ayudar a los buscadores a entenderlo', 'Para cambiar el estilo visual de la página', 'Para validar formularios', 'Para comprimir el HTML'], answer: 'Para dar significado extra al contenido y ayudar a los buscadores a entenderlo' },
        { prompt: '¿Qué atributo indica que un elemento y sus hijos forman un grupo de datos estructurados?', options: ['itemscope', 'itemtype', 'itemprop', 'itemdata'], answer: 'itemscope' },
        { prompt: '¿Qué vocabulario es el más usado para definir tipos de datos estructurados en la web?', options: ['schema.org', 'w3c.org', 'json.org', 'seo.org'], answer: 'schema.org' },
        { prompt: '¿Qué beneficio puede traer usar datos estructurados correctamente?', options: ['Que Google muestre resultados enriquecidos en la búsqueda', 'Que la página cargue instantáneamente', 'Que no haga falta usar CSS', 'Que el sitio funcione sin JavaScript'], answer: 'Que Google muestre resultados enriquecidos en la búsqueda' }
      ]
    }
  },
  {
    id: 'html-31',
    title: 'Open Graph y redes sociales',
    subtitle: 'Nivel 31',
    xp: 107,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Las etiquetas <strong>Open Graph</strong> son metaetiquetas especiales, con el prefijo <code>og:</code>, que controlan cómo se ve un enlace cuando se comparte en redes sociales como Facebook o WhatsApp.',
        'Las más comunes son <code>og:title</code> (título), <code>og:description</code> (descripción) y <code>og:image</code> (la imagen de vista previa), todas dentro de etiquetas <code>&lt;meta&gt;</code>.'
      ],
      code:
        '<span class="tok-tag">&lt;meta</span> <span class="tok-attr">property</span>=<span class="tok-string">"og:title"</span> <span class="tok-attr">content</span>=<span class="tok-string">"DevQuest"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;meta</span> <span class="tok-attr">property</span>=<span class="tok-string">"og:image"</span> <span class="tok-attr">content</span>=<span class="tok-string">"portada.png"</span><span class="tok-tag">&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre Open Graph y metadatos para redes sociales.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué sirven las etiquetas Open Graph?', options: ['Para controlar cómo se ve un enlace al compartirlo en redes sociales', 'Para validar el formulario de contacto', 'Para definir los colores del sitio', 'Para acelerar la carga de imágenes'], answer: 'Para controlar cómo se ve un enlace al compartirlo en redes sociales' },
        { prompt: '¿Qué propiedad Open Graph define la imagen de vista previa de un enlace compartido?', options: ['og:image', 'og:picture', 'og:preview', 'og:photo'], answer: 'og:image' },
        { prompt: '¿Dentro de qué etiqueta se colocan las propiedades Open Graph?', options: ['meta', 'link', 'head', 'title'], answer: 'meta' },
        { prompt: '¿Qué atributo de meta se usa (en vez de name) para las propiedades Open Graph?', options: ['property', 'rel', 'type', 'og'], answer: 'property' }
      ]
    }
  },
  {
    id: 'html-32',
    title: 'Accesibilidad en formularios',
    subtitle: 'Nivel 32',
    xp: 110,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Además de asociar cada <code>&lt;label&gt;</code> con su campo, un formulario accesible agrupa campos relacionados con <code>&lt;fieldset&gt;</code> y <code>&lt;legend&gt;</code>, y anuncia mensajes de ayuda o error.',
        'El atributo <code>aria-describedby</code> conecta un campo con un texto de ayuda o error (por su <code>id</code>), para que un lector de pantalla lo lea junto al campo.'
      ],
      code:
        '<span class="tok-tag">&lt;label</span> <span class="tok-attr">for</span>=<span class="tok-string">"clave"</span><span class="tok-tag">&gt;</span>Contraseña<span class="tok-tag">&lt;/label&gt;</span>\n' +
        '<span class="tok-tag">&lt;input</span> <span class="tok-attr">id</span>=<span class="tok-string">"clave"</span> <span class="tok-attr">aria-describedby</span>=<span class="tok-string">"ayuda-clave"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;p</span> <span class="tok-attr">id</span>=<span class="tok-string">"ayuda-clave"</span><span class="tok-tag">&gt;</span>Mínimo 8 caracteres<span class="tok-tag">&lt;/p&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre accesibilidad en formularios.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué sirve aria-describedby en un input?', options: ['Para conectarlo con un texto de ayuda o error que un lector de pantalla anuncia', 'Para validar que el campo no esté vacío', 'Para cambiar el tipo de input', 'Para ocultar el campo visualmente'], answer: 'Para conectarlo con un texto de ayuda o error que un lector de pantalla anuncia' },
        { prompt: '¿Qué etiquetas se usan juntas para agrupar y titular un conjunto de campos relacionados?', options: ['fieldset y legend', 'div y span', 'section y header', 'group y title'], answer: 'fieldset y legend' },
        { prompt: '¿Con qué valor debe coincidir aria-describedby para funcionar correctamente?', options: ['Con el id del elemento que contiene el texto de ayuda', 'Con el name del campo', 'Con el valor del campo', 'Con la clase del formulario'], answer: 'Con el id del elemento que contiene el texto de ayuda' },
        { prompt: '¿Por qué es importante la accesibilidad en formularios?', options: ['Para que cualquier persona, incluidas las que usan lectores de pantalla, pueda completarlos', 'Solo para cumplir con una norma legal sin efecto real', 'Porque hace que el formulario se envíe más rápido', 'Porque reduce el número de campos necesarios'], answer: 'Para que cualquier persona, incluidas las que usan lectores de pantalla, pueda completarlos' }
      ]
    }
  },
  {
    id: 'html-33',
    title: 'Navegación con base y target',
    subtitle: 'Nivel 33',
    xp: 112,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'La etiqueta <code>&lt;base&gt;</code>, colocada una sola vez en <code>&lt;head&gt;</code>, define la URL base para todas las rutas relativas del documento con su atributo <code>href</code>.',
        'El atributo <code>target</code> también se puede usar en formularios e iframes, no solo en enlaces, para indicar dónde debe abrirse el resultado: <code>_self</code> (por defecto), <code>_blank</code>, <code>_parent</code> o <code>_top</code>.'
      ],
      code:
        '<span class="tok-tag">&lt;head&gt;</span>\n' +
        '  <span class="tok-tag">&lt;base</span> <span class="tok-attr">href</span>=<span class="tok-string">"https://devquest.com/"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;/head&gt;</span>\n' +
        '<span class="tok-tag">&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"cursos"</span><span class="tok-tag">&gt;</span>Cursos<span class="tok-tag">&lt;/a&gt;</span>'
    },
    exercise: {
      instructions: 'Completa las etiquetas y atributos relacionados con la navegación.',
      blanks: [
        { id: 'b1', before: '&lt;head&gt;&lt;', after: ' href="https://devquest.com/"&gt;&lt;/head&gt;', answer: 'base', options: ['base', 'link', 'meta', 'root'] },
        { id: 'b2', before: '&lt;base ', after: '="https://devquest.com/"&gt;', answer: 'href', options: ['href', 'src', 'url', 'path'] },
        { id: 'b3', before: '&lt;a href="galeria.html" ', after: '="_top"&gt;Salir del iframe&lt;/a&gt;', answer: 'target', options: ['target', 'rel', 'base', 'href'] },
        { id: 'b4', before: '&lt;a href="info.html" target="', after: '"&gt;Se abre en la misma pestaña&lt;/a&gt;', answer: '_self', options: ['_self', '_blank', '_parent', '_top'] }
      ]
    }
  },
  {
    id: 'html-34',
    title: 'Organización de archivos del proyecto',
    subtitle: 'Nivel 34',
    xp: 114,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'Un proyecto web organizado separa el contenido HTML de los estilos y del comportamiento: normalmente hay una carpeta <code>css/</code> para las hojas de estilo, una carpeta <code>js/</code> para los scripts y una carpeta <code>img/</code> (o <code>assets/</code>) para las imágenes.',
        'El archivo principal (como <code>index.html</code>) suele quedar en la raíz del proyecto, y enlaza a esos recursos con rutas relativas, por ejemplo <code>css/estilos.css</code>.'
      ],
      code:
        'proyecto/\n' +
        '  index.html\n' +
        '  css/\n' +
        '    estilos.css\n' +
        '  js/\n' +
        '    app.js\n' +
        '  img/\n' +
        '    logo.png'
    },
    exercise: {
      instructions: 'Toca las piezas en el orden en que normalmente se organiza un proyecto web sencillo.',
      items: [
        { id: 'root-folder', code: 'Crea una carpeta raíz para el proyecto (por ejemplo, mi-sitio/)' },
        { id: 'index-file', code: 'Añade el archivo index.html en la raíz' },
        { id: 'css-folder', code: 'Crea una carpeta css/ y guarda ahí tus hojas de estilo' },
        { id: 'js-folder', code: 'Crea una carpeta js/ y guarda ahí tus scripts' },
        { id: 'img-folder', code: 'Crea una carpeta img/ (o assets/) para las imágenes' },
        { id: 'link-resources', code: 'Enlaza esos archivos desde index.html con rutas relativas' }
      ],
      correctOrder: ['root-folder', 'index-file', 'css-folder', 'js-folder', 'img-folder', 'link-resources']
    }
  },
  {
    id: 'html-35',
    title: 'Progressive enhancement',
    subtitle: 'Nivel 35',
    xp: 115,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<strong>Progressive enhancement</strong> (mejora progresiva) es la estrategia de construir primero una versión básica y funcional de la página solo con HTML, que funcione incluso sin CSS ni JavaScript.',
        'Después se añaden capas de mejora: CSS para el diseño visual y JavaScript para la interactividad. Así, si algo falla o no está disponible, el contenido esencial sigue siendo accesible.'
      ],
      code:
        '<span class="tok-comment">&lt;!-- 1. HTML funcional por sí solo --&gt;</span>\n' +
        '<span class="tok-tag">&lt;a</span> <span class="tok-attr">href</span>=<span class="tok-string">"buscar.html"</span><span class="tok-tag">&gt;</span>Buscar<span class="tok-tag">&lt;/a&gt;</span>\n' +
        '<span class="tok-comment">&lt;!-- 2. Luego se mejora con CSS y JS --&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre progressive enhancement.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué propone la estrategia de progressive enhancement?', options: ['Construir primero un HTML funcional y luego añadir capas de mejora con CSS y JS', 'Escribir todo el sitio en JavaScript desde el principio', 'Usar solo imágenes en vez de texto', 'Evitar el uso de CSS por completo'], answer: 'Construir primero un HTML funcional y luego añadir capas de mejora con CSS y JS' },
        { prompt: '¿Qué ventaja tiene esta estrategia si JavaScript falla al cargar?', options: ['El contenido esencial de la página sigue siendo accesible', 'La página deja de funcionar por completo', 'El HTML se convierte automáticamente en CSS', 'El navegador muestra un error fatal'], answer: 'El contenido esencial de la página sigue siendo accesible' },
        { prompt: '¿Cuál sería un ejemplo de progressive enhancement en un enlace de búsqueda?', options: ['Un href funcional que además se mejora con JavaScript para buscar sin recargar', 'Un botón que solo funciona con JavaScript activado', 'Una imagen sin texto alternativo', 'Un formulario sin atributo action'], answer: 'Un href funcional que además se mejora con JavaScript para buscar sin recargar' },
        { prompt: '¿Qué es lo opuesto conceptual a progressive enhancement?', options: ['Depender por completo de JavaScript para mostrar el contenido básico', 'Usar HTML semántico', 'Usar CSS externo', 'Validar el HTML con el validador del W3C'], answer: 'Depender por completo de JavaScript para mostrar el contenido básico' }
      ]
    }
  },
  {
    id: 'html-36',
    title: 'API de geolocalización',
    subtitle: 'Nivel 36',
    xp: 118,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La <strong>API de Geolocalización</strong> del navegador permite obtener la ubicación aproximada del usuario desde JavaScript. No es una etiqueta HTML, sino una funcionalidad del navegador.',
        'Por razones de privacidad, el navegador siempre pide permiso al usuario antes de compartir su ubicación, y solo funciona en páginas servidas por HTTPS (o localhost).'
      ],
      code:
        '<span class="tok-comment">// Pide la ubicación del usuario:</span>\n' +
        'navigator.geolocation.getCurrentPosition(posicion =&gt; {\n' +
        '  console.log(posicion.coords.latitude, posicion.coords.longitude);\n' +
        '});'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre la API de Geolocalización.',
      variant: 'plain',
      questions: [
        { prompt: '¿Desde dónde se usa la API de Geolocalización?', options: ['Desde JavaScript, con navigator.geolocation', 'Desde una etiqueta &lt;geo&gt; en HTML', 'Desde un atributo CSS', 'Desde el atributo lang del html'], answer: 'Desde JavaScript, con navigator.geolocation' },
        { prompt: '¿Qué debe ocurrir antes de que una página pueda acceder a la ubicación del usuario?', options: ['El navegador debe pedir permiso al usuario', 'Nada, se obtiene automáticamente', 'El usuario debe escribir su dirección', 'Debe estar en una red wifi'], answer: 'El navegador debe pedir permiso al usuario' },
        { prompt: '¿Bajo qué condición suele funcionar la API de Geolocalización por motivos de seguridad?', options: ['La página debe servirse por HTTPS (o localhost)', 'La página debe tener menos de 100 KB', 'El usuario debe tener JavaScript desactivado', 'La página debe estar en un iframe'], answer: 'La página debe servirse por HTTPS (o localhost)' },
        { prompt: '¿Qué método se usa para obtener la posición actual del usuario?', options: ['navigator.geolocation.getCurrentPosition()', 'navigator.location.get()', 'document.geolocation()', 'window.getPosition()'], answer: 'navigator.geolocation.getCurrentPosition()' }
      ]
    }
  },
  {
    id: 'html-37',
    title: 'Web Storage',
    subtitle: 'Nivel 37',
    xp: 122,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>localStorage</code> y <code>sessionStorage</code> permiten guardar datos en el navegador del usuario como pares clave-valor, sin necesidad de un servidor. Se usan desde JavaScript, no son etiquetas HTML.',
        'La diferencia es la duración: <code>localStorage</code> conserva los datos aunque se cierre el navegador, mientras que <code>sessionStorage</code> los borra al cerrar la pestaña.'
      ],
      code:
        '<span class="tok-comment">// Guardar y leer datos en el navegador:</span>\n' +
        'localStorage.setItem(<span class="tok-string">"tema"</span>, <span class="tok-string">"oscuro"</span>);\n' +
        'const tema = localStorage.getItem(<span class="tok-string">"tema"</span>);'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre Web Storage (localStorage y sessionStorage).',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué tipo de datos guarda Web Storage?', options: ['Pares clave-valor en el navegador del usuario', 'Archivos binarios grandes', 'Solo imágenes', 'Bases de datos SQL completas'], answer: 'Pares clave-valor en el navegador del usuario' },
        { prompt: '¿Cuál es la principal diferencia entre localStorage y sessionStorage?', options: ['localStorage persiste al cerrar el navegador, sessionStorage no', 'sessionStorage es más rápido que localStorage', 'localStorage solo funciona en móviles', 'No hay diferencia, son sinónimos'], answer: 'localStorage persiste al cerrar el navegador, sessionStorage no' },
        { prompt: '¿Qué método se usa para guardar un valor en localStorage?', options: ['localStorage.setItem(clave, valor)', 'localStorage.save(clave, valor)', 'localStorage.add(clave, valor)', 'localStorage.put(clave, valor)'], answer: 'localStorage.setItem(clave, valor)' },
        { prompt: '¿Qué método se usa para leer un valor guardado en localStorage?', options: ['localStorage.getItem(clave)', 'localStorage.readItem(clave)', 'localStorage.fetch(clave)', 'localStorage.load(clave)'], answer: 'localStorage.getItem(clave)' }
      ]
    }
  },
  {
    id: 'html-38',
    title: 'Web Components: custom elements',
    subtitle: 'Nivel 38',
    xp: 126,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los <strong>Web Components</strong> permiten crear etiquetas HTML propias y reutilizables, como <code>&lt;mi-boton&gt;</code>, definidas con JavaScript mediante <code>customElements.define()</code>.',
        'Un elemento personalizado siempre debe tener un <strong>guion</strong> en su nombre (como <code>tarjeta-usuario</code>) para diferenciarlo de las etiquetas nativas de HTML, que nunca lo llevan.'
      ],
      code:
        '<span class="tok-tag">&lt;tarjeta-usuario</span> <span class="tok-attr">nombre</span>=<span class="tok-string">"Ana"</span><span class="tok-tag">&gt;&lt;/tarjeta-usuario&gt;</span>\n' +
        '<span class="tok-comment">// customElements.define("tarjeta-usuario", class extends HTMLElement { ... });</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre Web Components y elementos personalizados.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué permiten crear los Web Components?', options: ['Etiquetas HTML propias y reutilizables', 'Solo animaciones CSS', 'Bases de datos en el navegador', 'Nuevos tipos de archivos de imagen'], answer: 'Etiquetas HTML propias y reutilizables' },
        { prompt: '¿Qué regla obligatoria debe cumplir el nombre de un elemento personalizado?', options: ['Debe contener al menos un guion', 'Debe empezar con una letra mayúscula', 'Debe tener exactamente 5 letras', 'Debe empezar con la palabra custom'], answer: 'Debe contener al menos un guion' },
        { prompt: '¿Con qué método de JavaScript se registra un nuevo elemento personalizado?', options: ['customElements.define()', 'document.createElement()', 'window.registerElement()', 'HTMLElement.new()'], answer: 'customElements.define()' },
        { prompt: '¿Por qué las etiquetas nativas de HTML, como div o section, nunca llevan guion?', options: ['Para poder distinguirlas de los elementos personalizados definidos por el desarrollador', 'Porque el guion no es un carácter válido en HTML', 'Porque ralentizaría el navegador', 'Porque el guion se reserva para atributos'], answer: 'Para poder distinguirlas de los elementos personalizados definidos por el desarrollador' }
      ]
    }
  },
  {
    id: 'html-39',
    title: 'Plantillas: template y slot',
    subtitle: 'Nivel 39',
    xp: 130,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'La etiqueta <code>&lt;template&gt;</code> define un fragmento de HTML que el navegador no muestra ni ejecuta hasta que se activa desde JavaScript, ideal para clonar estructuras repetidas.',
        'Dentro de un Web Component, <code>&lt;slot&gt;</code> marca un hueco donde se insertará contenido personalizado que venga desde fuera del componente.'
      ],
      code:
        '<span class="tok-tag">&lt;template</span> <span class="tok-attr">id</span>=<span class="tok-string">"tarjeta"</span><span class="tok-tag">&gt;</span>\n' +
        '  <span class="tok-tag">&lt;li</span> <span class="tok-attr">class</span>=<span class="tok-string">"tarjeta"</span><span class="tok-tag">&gt;</span><span class="tok-tag">&lt;slot&gt;&lt;/slot&gt;</span><span class="tok-tag">&lt;/li&gt;</span>\n' +
        '<span class="tok-tag">&lt;/template&gt;</span>'
    },
    exercise: {
      instructions: 'Completa las etiquetas y atributos relacionados con plantillas reutilizables.',
      blanks: [
        { id: 'b1', before: '&lt;', after: ' id="tarjeta"&gt;&lt;li&gt;...&lt;/li&gt;&lt;/template&gt;', answer: 'template', options: ['template', 'slot', 'pattern', 'model'] },
        { id: 'b2', before: '&lt;li&gt;&lt;', after: '&gt;&lt;/slot&gt;&lt;/li&gt;', answer: 'slot', options: ['slot', 'template', 'hole', 'gap'] },
        { id: 'b3', before: 'plantilla.', after: '.cloneNode(true);', answer: 'content', options: ['content', 'innerHTML', 'template', 'clone'] },
        { id: 'b4', before: '&lt;slot ', after: '="titulo"&gt;&lt;/slot&gt;', answer: 'name', options: ['name', 'slot', 'id', 'key'] }
      ]
    }
  },
  {
    id: 'html-40',
    title: 'Drag and Drop API',
    subtitle: 'Nivel 40',
    xp: 134,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La <strong>Drag and Drop API</strong> nativa del navegador permite arrastrar elementos y soltarlos en otro lugar de la página. Para que un elemento se pueda arrastrar, necesita el atributo <code>draggable="true"</code>.',
        'El elemento donde se suelta debe escuchar el evento <code>drop</code>, y normalmente también <code>dragover</code> con <code>preventDefault()</code>, porque por defecto el navegador no permite soltar nada ahí.'
      ],
      code:
        '<span class="tok-tag">&lt;div</span> <span class="tok-attr">draggable</span>=<span class="tok-string">"true"</span> <span class="tok-attr">id</span>=<span class="tok-string">"pieza"</span><span class="tok-tag">&gt;</span>Arrástrame<span class="tok-tag">&lt;/div&gt;</span>\n' +
        '<span class="tok-comment">// zona.addEventListener("drop", manejarSoltar);</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre la Drag and Drop API.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué atributo HTML hace que un elemento se pueda arrastrar?', options: ['draggable=&quot;true&quot;', 'drag=&quot;on&quot;', 'movable=&quot;true&quot;', 'drop=&quot;true&quot;'], answer: 'draggable=&quot;true&quot;' },
        { prompt: '¿Qué evento debe manejar el elemento donde se suelta algo?', options: ['drop', 'dragend', 'dragstart', 'release'], answer: 'drop' },
        { prompt: '¿Por qué normalmente hay que llamar a preventDefault() en el evento dragover?', options: ['Porque por defecto el navegador no permite soltar contenido en esa zona', 'Porque cancela el arrastre por completo', 'Porque borra el elemento arrastrado', 'Porque es un requisito solo en Firefox'], answer: 'Porque por defecto el navegador no permite soltar contenido en esa zona' },
        { prompt: '¿La Drag and Drop API es parte del navegador o requiere una librería externa?', options: ['Es una API nativa del navegador, no requiere librerías', 'Requiere jQuery obligatoriamente', 'Solo funciona con una librería de terceros', 'Es parte de CSS, no de HTML'], answer: 'Es una API nativa del navegador, no requiere librerías' }
      ]
    }
  },
  {
    id: 'html-41',
    title: 'Seguridad en formularios',
    subtitle: 'Nivel 41',
    xp: 138,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El atributo <code>autocomplete</code> controla si el navegador puede sugerir o rellenar automáticamente un campo con datos guardados antes. Se puede desactivar con <code>autocomplete="off"</code> en campos sensibles.',
        'Otras medidas útiles: usar <code>type="password"</code> para que la contraseña no se vea en pantalla, y nunca confiar solo en la validación HTML, ya que siempre debe reforzarse también en el servidor.'
      ],
      code:
        '<span class="tok-tag">&lt;input</span> <span class="tok-attr">type</span>=<span class="tok-string">"password"</span> <span class="tok-attr">autocomplete</span>=<span class="tok-string">"new-password"</span><span class="tok-tag">&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre seguridad básica en formularios.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué sirve el atributo autocomplete en un input?', options: ['Controla si el navegador sugiere o rellena automáticamente el campo', 'Valida que el campo no esté vacío', 'Cambia el tipo de teclado en móviles', 'Oculta el campo del formulario'], answer: 'Controla si el navegador sugiere o rellena automáticamente el campo' },
        { prompt: '¿Qué tipo de input se usa para que el texto escrito no se muestre en pantalla?', options: ['password', 'hidden', 'text', 'secure'], answer: 'password' },
        { prompt: '¿Por qué no basta con validar un formulario solo en el navegador?', options: ['Porque un usuario malicioso puede saltarse esa validación y enviar datos directamente al servidor', 'Porque HTML no permite validaciones', 'Porque ralentiza demasiado la página', 'Porque el navegador lo bloquea automáticamente'], answer: 'Porque un usuario malicioso puede saltarse esa validación y enviar datos directamente al servidor' },
        { prompt: '¿Qué valor de autocomplete es recomendable para desactivarlo en un campo sensible?', options: ['off', 'false', 'none', 'disabled'], answer: 'off' }
      ]
    }
  },
  {
    id: 'html-42',
    title: 'Responsive images: art direction',
    subtitle: 'Nivel 42',
    xp: 142,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'La <strong>dirección de arte</strong> (art direction) consiste en mostrar imágenes recortadas de forma distinta según el tamaño de pantalla, no solo la misma imagen a otra resolución. Se logra con <code>&lt;picture&gt;</code> y varias etiquetas <code>&lt;source&gt;</code>.',
        'Cada <code>&lt;source&gt;</code> tiene un atributo <code>media</code> con una condición (como un ancho mínimo) y un <code>srcset</code> con la imagen que se debe usar si esa condición se cumple.'
      ],
      code:
        '<span class="tok-tag">&lt;picture&gt;</span>\n' +
        '  <span class="tok-tag">&lt;source</span> <span class="tok-attr">media</span>=<span class="tok-string">"(min-width: 800px)"</span> <span class="tok-attr">srcset</span>=<span class="tok-string">"ancha.jpg"</span><span class="tok-tag">&gt;</span>\n' +
        '  <span class="tok-tag">&lt;img</span> <span class="tok-attr">src</span>=<span class="tok-string">"movil.jpg"</span> <span class="tok-attr">alt</span>=<span class="tok-string">"Portada"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;/picture&gt;</span>'
    },
    exercise: {
      instructions: 'Completa las etiquetas y atributos para lograr dirección de arte con picture.',
      blanks: [
        { id: 'b1', before: '&lt;', after: '&gt;&lt;source media="(min-width: 800px)" srcset="ancha.jpg"&gt;&lt;img src="movil.jpg" alt="Portada"&gt;&lt;/picture&gt;', answer: 'picture', options: ['picture', 'img', 'source', 'figure'] },
        { id: 'b2', before: '&lt;', after: ' media="(min-width: 800px)" srcset="ancha.jpg"&gt;', answer: 'source', options: ['source', 'picture', 'img', 'media'] },
        { id: 'b3', before: '&lt;source ', after: '="(min-width: 800px)" srcset="ancha.jpg"&gt;', answer: 'media', options: ['media', 'width', 'screen', 'query'] },
        { id: 'b4', before: '&lt;picture&gt;&lt;source media="(min-width: 800px)" ', after: '="ancha.jpg"&gt;&lt;img src="movil.jpg" alt="Portada"&gt;&lt;/picture&gt;', answer: 'srcset', options: ['srcset', 'src', 'set', 'sources'] }
      ]
    }
  },
  {
    id: 'html-43',
    title: 'ARIA roles y landmarks',
    subtitle: 'Nivel 43',
    xp: 146,
    type: 'quiz',
    theory: {
      paragraphs: [
        'ARIA (<em>Accessible Rich Internet Applications</em>) añade información extra de accesibilidad cuando el HTML semántico no es suficiente. El atributo <code>role</code> indica qué función cumple un elemento, como <code>role="alert"</code> o <code>role="button"</code>.',
        'Siempre es mejor usar la etiqueta HTML semántica nativa (como <code>&lt;nav&gt;</code>) antes que simular su función con ARIA sobre un <code>&lt;div&gt;</code>: la primera regla de ARIA es "no uses ARIA si el HTML ya lo resuelve".'
      ],
      code:
        '<span class="tok-tag">&lt;div</span> <span class="tok-attr">role</span>=<span class="tok-string">"alert"</span><span class="tok-tag">&gt;</span>Hubo un error al guardar<span class="tok-tag">&lt;/div&gt;</span>\n' +
        '<span class="tok-tag">&lt;nav</span> <span class="tok-attr">aria-label</span>=<span class="tok-string">"Navegación principal"</span><span class="tok-tag">&gt;</span>...<span class="tok-tag">&lt;/nav&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre roles ARIA y landmarks.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué significan las siglas ARIA?', options: ['Accessible Rich Internet Applications', 'Advanced Responsive Interface Attributes', 'Automatic Rendering Interface API', 'Accessible Reactive Interactive Assets'], answer: 'Accessible Rich Internet Applications' },
        { prompt: '¿Qué atributo ARIA indica la función que cumple un elemento?', options: ['role', 'aria-role', 'function', 'type'], answer: 'role' },
        { prompt: '¿Cuál es la primera regla de ARIA según las buenas prácticas de accesibilidad?', options: ['No usar ARIA si el HTML semántico ya resuelve el problema', 'Usar ARIA en todos los elementos posibles', 'Usar ARIA solo con JavaScript', 'Evitar el HTML semántico y usar solo ARIA'], answer: 'No usar ARIA si el HTML semántico ya resuelve el problema' },
        { prompt: '¿Qué es un landmark en accesibilidad web?', options: ['Una región identificable de la página, como la navegación o el contenido principal', 'Un tipo de animación CSS', 'Un atributo exclusivo de las imágenes', 'Un error común de validación HTML'], answer: 'Una región identificable de la página, como la navegación o el contenido principal' }
      ]
    }
  },
  {
    id: 'html-44',
    title: 'Rendimiento: lazy loading',
    subtitle: 'Nivel 44',
    xp: 150,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'El atributo <code>loading="lazy"</code> en <code>&lt;img&gt;</code> o <code>&lt;iframe&gt;</code> le dice al navegador que retrase la carga del recurso hasta que esté a punto de entrar en la pantalla, ahorrando datos y acelerando la carga inicial.',
        'No conviene usarlo en imágenes que se ven nada más cargar la página (como el logo o la imagen principal), ya que ahí retrasaría algo que el usuario necesita ver de inmediato.'
      ],
      code:
        '<span class="tok-tag">&lt;img</span> <span class="tok-attr">src</span>=<span class="tok-string">"galeria-03.jpg"</span> <span class="tok-attr">alt</span>=<span class="tok-string">"Foto de la galería"</span> <span class="tok-attr">loading</span>=<span class="tok-string">"lazy"</span><span class="tok-tag">&gt;</span>'
    },
    exercise: {
      instructions: 'Completa el atributo o valor que activa la carga diferida de imágenes.',
      blanks: [
        { id: 'b1', before: '&lt;img src="foto.jpg" alt="Foto" ', after: '="lazy"&gt;', answer: 'loading', options: ['loading', 'defer', 'async', 'delay'] },
        { id: 'b2', before: '&lt;img src="foto.jpg" alt="Foto" loading="', after: '"&gt;', answer: 'lazy', options: ['lazy', 'eager', 'auto', 'defer'] },
        { id: 'b3', before: '&lt;iframe src="mapa.html" title="Mapa" ', after: '="lazy"&gt;&lt;/iframe&gt;', answer: 'loading', options: ['loading', 'lazyload', 'defer', 'async'] },
        { id: 'b4', before: '&lt;img src="logo.png" alt="Logo" loading="', after: '"&gt;', answer: 'eager', options: ['eager', 'lazy', 'fast', 'instant'] }
      ]
    }
  },
  {
    id: 'html-45',
    title: 'SEO avanzado',
    subtitle: 'Nivel 45',
    xp: 154,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El archivo <code>sitemap.xml</code> lista todas las páginas importantes de un sitio para ayudar a los buscadores a encontrarlas y rastrearlas. El archivo <code>robots.txt</code>, en la raíz del sitio, indica qué rutas no deben rastrear los buscadores.',
        'La etiqueta <code>&lt;link rel="canonical"&gt;</code> le dice al buscador cuál es la URL "oficial" de una página, útil cuando el mismo contenido es accesible desde varias direcciones.'
      ],
      code:
        '<span class="tok-tag">&lt;link</span> <span class="tok-attr">rel</span>=<span class="tok-string">"canonical"</span> <span class="tok-attr">href</span>=<span class="tok-string">"https://devquest.com/html"</span><span class="tok-tag">&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre SEO avanzado.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué sirve el archivo sitemap.xml?', options: ['Para listar las páginas importantes del sitio y ayudar a los buscadores a rastrearlas', 'Para definir los estilos de todas las páginas', 'Para guardar las contraseñas de los usuarios', 'Para comprimir las imágenes del sitio'], answer: 'Para listar las páginas importantes del sitio y ayudar a los buscadores a rastrearlas' },
        { prompt: '¿Qué indica el archivo robots.txt?', options: ['Qué rutas no deben rastrear los buscadores', 'La lista de usuarios registrados', 'El mapa del sitio en formato visual', 'Los colores permitidos para el diseño'], answer: 'Qué rutas no deben rastrear los buscadores' },
        { prompt: '¿Para qué se usa link rel=&quot;canonical&quot;?', options: ['Para indicar la URL oficial cuando el mismo contenido tiene varias direcciones', 'Para enlazar la hoja de estilos principal', 'Para definir el favicon del sitio', 'Para redirigir automáticamente a otra página'], answer: 'Para indicar la URL oficial cuando el mismo contenido tiene varias direcciones' },
        { prompt: '¿En qué carpeta debe ubicarse normalmente robots.txt para que los buscadores lo encuentren?', options: ['En la raíz del sitio', 'Dentro de la carpeta css/', 'Dentro de la carpeta img/', 'En cualquier subcarpeta'], answer: 'En la raíz del sitio' }
      ]
    }
  },
  {
    id: 'html-46',
    title: 'Internacionalización',
    subtitle: 'Nivel 46',
    xp: 158,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El atributo <code>lang</code> en <code>&lt;html&gt;</code> declara el idioma principal del documento (como <code>lang="es"</code>); también se puede usar en una etiqueta concreta para marcar un fragmento en otro idioma.',
        'El atributo <code>dir</code> indica la dirección del texto: <code>ltr</code> (izquierda a derecha, por defecto) o <code>rtl</code> (derecha a izquierda), necesario para idiomas como el árabe o el hebreo.'
      ],
      code:
        '<span class="tok-tag">&lt;html</span> <span class="tok-attr">lang</span>=<span class="tok-string">"es"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;p</span> <span class="tok-attr">lang</span>=<span class="tok-string">"en"</span><span class="tok-tag">&gt;</span>Welcome<span class="tok-tag">&lt;/p&gt;</span>\n' +
        '<span class="tok-tag">&lt;html</span> <span class="tok-attr">dir</span>=<span class="tok-string">"rtl"</span><span class="tok-tag">&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre internacionalización con lang y dir.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué declara el atributo lang en la etiqueta html?', options: ['El idioma principal del documento', 'El país del servidor', 'La codificación de caracteres', 'El tamaño de fuente por defecto'], answer: 'El idioma principal del documento' },
        { prompt: '¿Qué valor de dir se usa para idiomas que se escriben de derecha a izquierda, como el árabe?', options: ['rtl', 'ltr', 'rev', 'reverse'], answer: 'rtl' },
        { prompt: '¿Por qué es útil declarar lang correctamente?', options: ['Ayuda a lectores de pantalla a pronunciar bien el texto y mejora el SEO', 'Cambia automáticamente los colores del sitio', 'Es obligatorio para que el CSS funcione', 'Acelera la carga de las imágenes'], answer: 'Ayuda a lectores de pantalla a pronunciar bien el texto y mejora el SEO' },
        { prompt: '¿Qué valor tiene dir por defecto si no se especifica?', options: ['ltr', 'rtl', 'auto', 'none'], answer: 'ltr' }
      ]
    }
  },
  {
    id: 'html-47',
    title: 'Validación W3C y estándares web',
    subtitle: 'Nivel 47',
    xp: 162,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El <strong>validador del W3C</strong> revisa que un documento HTML cumpla con las reglas oficiales del estándar: etiquetas bien cerradas, atributos válidos, anidamiento correcto, etc.',
        'Un HTML inválido puede seguir funcionando (los navegadores son tolerantes con errores), pero validar el código ayuda a evitar bugs difíciles de detectar y a que el sitio se comporte igual en distintos navegadores.'
      ],
      code:
        '<span class="tok-comment">&lt;!-- HTML inválido: falta cerrar la etiqueta --&gt;</span>\n' +
        '<span class="tok-tag">&lt;p&gt;</span>Texto sin cerrar\n\n' +
        '<span class="tok-comment">&lt;!-- HTML válido --&gt;</span>\n' +
        '<span class="tok-tag">&lt;p&gt;</span>Texto correcto<span class="tok-tag">&lt;/p&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre validación W3C y estándares web.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué revisa el validador HTML del W3C?', options: ['Que el documento cumpla con las reglas oficiales del estándar HTML', 'La velocidad de carga del sitio', 'El diseño visual de la página', 'Los colores usados en el CSS'], answer: 'Que el documento cumpla con las reglas oficiales del estándar HTML' },
        { prompt: '¿Qué suele pasar si el HTML tiene errores mínimos, como una etiqueta mal cerrada?', options: ['El navegador suele tolerarlo e intenta corregirlo al mostrarlo', 'La página deja de cargar por completo', 'Se borra automáticamente el archivo', 'El navegador la reemplaza por una página en blanco'], answer: 'El navegador suele tolerarlo e intenta corregirlo al mostrarlo' },
        { prompt: '¿Qué ventaja tiene validar el HTML aunque el navegador tolere errores?', options: ['Ayuda a evitar bugs difíciles de detectar y mejora la compatibilidad entre navegadores', 'Hace que el sitio use menos memoria RAM', 'Es obligatorio para publicar en internet', 'Cambia automáticamente el diseño a uno responsive'], answer: 'Ayuda a evitar bugs difíciles de detectar y mejora la compatibilidad entre navegadores' },
        { prompt: '¿Quién es la organización que define los estándares oficiales de HTML junto con WHATWG?', options: ['W3C', 'ISO', 'IEEE', 'ICANN'], answer: 'W3C' }
      ]
    }
  },
  {
    id: 'html-48',
    title: 'Testing y depuración de HTML',
    subtitle: 'Nivel 48',
    xp: 165,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Las <strong>herramientas para desarrolladores</strong> del navegador (se abren con F12 o clic derecho → "Inspeccionar") permiten ver el HTML real de la página, modificarlo temporalmente y comprobar cambios al instante.',
        'La pestaña <em>Elements</em> (o Inspector) muestra el DOM, la pestaña <em>Console</em> muestra errores y mensajes, y la pestaña <em>Network</em> muestra qué recursos se cargaron y cuánto tardaron.'
      ],
      code:
        '<span class="tok-comment">// Atajo para abrir las herramientas de desarrollador:</span>\n' +
        '<span class="tok-comment">// F12 (o Ctrl+Shift+I / Cmd+Option+I en Mac)</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre testing y depuración de HTML.',
      variant: 'plain',
      questions: [
        { prompt: '¿Cómo se suelen abrir las herramientas de desarrollador en un navegador de escritorio?', options: ['Con la tecla F12 o clic derecho → Inspeccionar', 'Escribiendo devtools en la barra de direcciones', 'Solo desde el menú de configuración del sistema operativo', 'No se pueden abrir en HTML, solo en apps nativas'], answer: 'Con la tecla F12 o clic derecho → Inspeccionar' },
        { prompt: '¿Qué pestaña de las herramientas de desarrollador muestra el DOM, la estructura HTML real de la página?', options: ['Elements (o Inspector)', 'Console', 'Network', 'Sources'], answer: 'Elements (o Inspector)' },
        { prompt: '¿Para qué sirve la pestaña Network de las herramientas de desarrollador?', options: ['Para ver qué recursos se cargaron y cuánto tardaron', 'Para editar el CSS de forma permanente', 'Para escribir comentarios en el HTML', 'Para cambiar el idioma del navegador'], answer: 'Para ver qué recursos se cargaron y cuánto tardaron' },
        { prompt: '¿Los cambios que haces en el HTML desde el inspector del navegador se guardan en el archivo original?', options: ['No, son temporales y desaparecen al recargar la página', 'Sí, se guardan automáticamente', 'Solo si tienes conexión a internet', 'Sí, pero solo en modo incógnito'], answer: 'No, son temporales y desaparecen al recargar la página' }
      ]
    }
  },
  {
    id: 'html-49',
    title: 'Integración de HTML con CSS y JS',
    subtitle: 'Nivel 49',
    xp: 168,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La buena práctica es <strong>separar responsabilidades</strong>: el HTML aporta la estructura y el contenido, el CSS el diseño visual (en archivos externos, no con <code>style</code> inline) y JavaScript el comportamiento (en archivos externos, no con <code>onclick</code> inline).',
        'Los scripts se suelen colocar justo antes de cerrar <code>&lt;/body&gt;</code>, o usar el atributo <code>defer</code>, para que no bloqueen la carga y el renderizado del HTML.'
      ],
      code:
        '<span class="tok-tag">&lt;head&gt;</span>\n' +
        '  <span class="tok-tag">&lt;link</span> <span class="tok-attr">rel</span>=<span class="tok-string">"stylesheet"</span> <span class="tok-attr">href</span>=<span class="tok-string">"estilos.css"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;/head&gt;</span>\n' +
        '<span class="tok-tag">&lt;body&gt;</span>\n' +
        '  ...\n' +
        '  <span class="tok-tag">&lt;script</span> <span class="tok-attr">src</span>=<span class="tok-string">"app.js"</span> <span class="tok-attr">defer</span><span class="tok-tag">&gt;&lt;/script&gt;</span>\n' +
        '<span class="tok-tag">&lt;/body&gt;</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre la integración de HTML con CSS y JS.',
      variant: 'plain',
      questions: [
        { prompt: '¿Por qué se prefiere un archivo CSS externo en vez de usar el atributo style en cada etiqueta?', options: ['Porque separa el diseño del contenido y es más fácil de mantener', 'Porque el atributo style no funciona en HTML5', 'Porque el CSS externo se ejecuta más rápido que cualquier otro', 'Porque es obligatorio según el estándar HTML'], answer: 'Porque separa el diseño del contenido y es más fácil de mantener' },
        { prompt: '¿Qué atributo de script permite que se descargue en paralelo sin bloquear el renderizado, ejecutándose cuando el HTML ya está listo?', options: ['defer', 'async', 'load', 'preload'], answer: 'defer' },
        { prompt: '¿Por qué se recomienda evitar atributos como onclick directamente en el HTML?', options: ['Porque mezcla el comportamiento con la estructura, dificultando el mantenimiento', 'Porque onclick no funciona en ningún navegador moderno', 'Porque es más lento que cualquier otro método', 'Porque HTML5 lo eliminó del estándar'], answer: 'Porque mezcla el comportamiento con la estructura, dificultando el mantenimiento' },
        { prompt: '¿Dónde se suele colocar la etiqueta script para no bloquear la carga del HTML (si no se usa defer)?', options: ['Justo antes de cerrar &lt;/body&gt;', 'Al principio de &lt;head&gt;', 'Dentro de cada &lt;p&gt;', 'En el atributo lang de &lt;html&gt;'], answer: 'Justo antes de cerrar &lt;/body&gt;' }
      ]
    }
  },
  {
    id: 'html-50',
    title: 'Proyecto integrador',
    subtitle: 'Nivel 50',
    xp: 170,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'Has llegado al último nivel del módulo de HTML5. Es hora de repasar todo lo aprendido: estructura del documento, etiquetas semánticas, formularios, accesibilidad y buenas prácticas, todo junto en una sola página.',
        'Una página bien construida combina metadatos correctos en <code>&lt;head&gt;</code>, una estructura semántica clara en <code>&lt;body&gt;</code> y recursos externos bien enlazados.'
      ],
      code:
        '<span class="tok-tag">&lt;!DOCTYPE html&gt;</span>\n' +
        '<span class="tok-tag">&lt;html</span> <span class="tok-attr">lang</span>=<span class="tok-string">"es"</span><span class="tok-tag">&gt;</span>\n' +
        '<span class="tok-tag">&lt;head&gt;</span>...<span class="tok-tag">&lt;/head&gt;</span>\n' +
        '<span class="tok-tag">&lt;body&gt;</span>...<span class="tok-tag">&lt;/body&gt;</span>\n' +
        '<span class="tok-tag">&lt;/html&gt;</span>'
    },
    exercise: {
      instructions: 'Toca las piezas en el orden correcto para construir una página completa de principio a fin.',
      items: [
        { id: 'doctype', code: '&lt;!DOCTYPE html&gt;' },
        { id: 'html-open', code: '&lt;html lang="es"&gt;' },
        { id: 'head-block', code: '&lt;head&gt;&lt;meta charset="UTF-8"&gt;&lt;title&gt;Mi proyecto&lt;/title&gt;&lt;link rel="stylesheet" href="estilos.css"&gt;&lt;/head&gt;' },
        { id: 'body-header', code: '&lt;body&gt;&lt;header&gt;&lt;h1&gt;Mi proyecto&lt;/h1&gt;&lt;nav&gt;...&lt;/nav&gt;&lt;/header&gt;' },
        { id: 'body-main', code: '&lt;main&gt;&lt;section&gt;Contenido principal&lt;/section&gt;&lt;/main&gt;' },
        { id: 'body-footer', code: '&lt;footer&gt;Contacto&lt;/footer&gt;&lt;script src="app.js" defer&gt;&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;' }
      ],
      correctOrder: ['doctype', 'html-open', 'head-block', 'body-header', 'body-main', 'body-footer']
    }
  }
];
