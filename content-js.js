/* ==========================================================================
   DevQuest — content-js.js
   Niveles del módulo JavaScript (de principiante a avanzado).
   Cada nivel: { id, title, subtitle, xp, type, theory, exercise }
   ========================================================================== */

'use strict';

const JS_LEVELS = [
  {
    id: 'js-1',
    title: 'Variables y tipos de datos',
    subtitle: 'Nivel 1',
    xp: 55,
    type: 'quiz',
    theory: {
      paragraphs: [
        'En JavaScript declaramos variables con <code>let</code> (valor que puede cambiar) o <code>const</code> (valor constante).',
        'Los tipos de datos primitivos más comunes son: <code>number</code>, <code>string</code>, <code>boolean</code> y <code>undefined</code>. El operador <code>typeof</code> nos dice el tipo de un valor.'
      ],
      code:
        '<span class="tok-kw">let</span> edad = <span class="tok-num">16</span>;\n' +
        '<span class="tok-kw">const</span> nombre = <span class="tok-string">"Ana"</span>;\n' +
        'console.log(<span class="tok-kw">typeof</span> edad); <span class="tok-comment">// "number"</span>'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice qué imprime cada bloque de código.',
      variant: 'console',
      questions: [
        { code: 'let edad = 15;\nedad = edad + 1;\nconsole.log(typeof edad);', prompt: '¿Qué imprime la consola?', options: ['"number"', '"string"', '"boolean"', 'undefined'], answer: '"number"' },
        { code: 'const nombre = "Ana";\nconsole.log(typeof nombre);', prompt: '¿Qué imprime la consola?', options: ['"string"', '"number"', '"object"', 'Ana'], answer: '"string"' },
        { code: 'let activo = true;\nconsole.log(typeof activo);', prompt: '¿Qué imprime la consola?', options: ['"boolean"', '"string"', '"true"', '"number"'], answer: '"boolean"' },
        { code: 'let x;\nconsole.log(typeof x);', prompt: '¿Qué imprime la consola?', options: ['"undefined"', '"null"', '"number"', 'Error'], answer: '"undefined"' }
      ]
    }
  },
  {
    id: 'js-2',
    title: 'Condicionales y bucles',
    subtitle: 'Nivel 2',
    xp: 65,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los condicionales (<code>if / else</code>) permiten que el programa tome decisiones según una condición.',
        'Los bucles (<code>for</code>, <code>while</code>) repiten un bloque de código varias veces, muy útil para recorrer listas de datos.'
      ],
      code:
        '<span class="tok-kw">if</span> (nota &gt;= <span class="tok-num">6</span>) {\n' +
        '  console.log(<span class="tok-string">"Aprobado"</span>);\n' +
        '} <span class="tok-kw">else</span> {\n' +
        '  console.log(<span class="tok-string">"Reprobado"</span>);\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'let nota = 6;\nif (nota >= 6) {\n  console.log("Aprobado");\n} else {\n  console.log("Reprobado");\n}', prompt: '¿Qué se imprime?', options: ['Aprobado', 'Reprobado', 'undefined', 'Error'], answer: 'Aprobado' },
        { code: 'for (let i = 0; i < 3; i++) {\n  console.log(i);\n}', prompt: '¿Cuántas veces se ejecuta console.log?', options: ['3', '2', '4', 'Infinitas'], answer: '3' },
        { code: 'let n = 4;\nconsole.log(n % 2 === 0 ? "Par" : "Impar");', prompt: '¿Qué se imprime?', options: ['Par', 'Impar', '4', 'true'], answer: 'Par' },
        { code: 'let items = ["a", "b", "c"];\nconsole.log(items.length);', prompt: '¿Qué se imprime?', options: ['3', '2', '"a,b,c"', 'undefined'], answer: '3' }
      ]
    }
  },
  {
    id: 'js-3',
    title: 'Funciones',
    subtitle: 'Nivel 3',
    xp: 60,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una función agrupa código reutilizable. Se declara con <code>function</code>, puede recibir <strong>parámetros</strong> y devolver un valor con <code>return</code>.',
        'También existen las <em>arrow functions</em>, una forma más corta de escribir funciones: <code>const suma = (a, b) => a + b;</code>'
      ],
      code:
        '<span class="tok-kw">function</span> saludar(nombre) {\n' +
        '  <span class="tok-kw">return</span> <span class="tok-string">"Hola, "</span> + nombre;\n' +
        '}\n' +
        'console.log(saludar(<span class="tok-string">"Ana"</span>));'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice qué devuelve cada función.',
      variant: 'console',
      questions: [
        { code: 'function doblar(n) {\n  return n * 2;\n}\nconsole.log(doblar(5));', prompt: '¿Qué imprime la consola?', options: ['10', '5', '"5 5"', 'undefined'], answer: '10' },
        { code: 'function saludar() {\n  console.log("Hola");\n}\nconsole.log(saludar());', prompt: '¿Qué imprime la última línea (el console.log exterior)?', options: ['undefined', '"Hola"', 'Hola undefined', 'Error'], answer: 'undefined' },
        { code: 'const cuadrado = n => n * n;\nconsole.log(cuadrado(4));', prompt: '¿Qué imprime la consola?', options: ['16', '8', '4', '"4*4"'], answer: '16' },
        { code: 'function esMayor(edad) {\n  return edad >= 18;\n}\nconsole.log(esMayor(15));', prompt: '¿Qué imprime la consola?', options: ['false', 'true', '15', 'undefined'], answer: 'false' }
      ]
    }
  },
  {
    id: 'js-4',
    title: 'Arrays y métodos',
    subtitle: 'Nivel 4',
    xp: 65,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un array almacena una lista ordenada de valores: <code>const frutas = ["manzana", "pera", "uva"];</code>. Se accede a cada elemento por su posición (índice), empezando en 0.',
        'Los arrays tienen métodos útiles: <code>.push()</code> añade un elemento al final, <code>.length</code> indica cuántos elementos hay, e <code>.includes()</code> comprueba si un valor existe.'
      ],
      code:
        '<span class="tok-kw">const</span> frutas = [<span class="tok-string">"manzana"</span>, <span class="tok-string">"pera"</span>];\n' +
        'frutas.push(<span class="tok-string">"uva"</span>);\n' +
        'console.log(frutas.length); <span class="tok-comment">// 3</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'const numeros = [10, 20, 30];\nconsole.log(numeros[1]);', prompt: '¿Qué imprime la consola?', options: ['20', '10', '30', '1'], answer: '20' },
        { code: 'const colores = ["rojo", "verde"];\ncolores.push("azul");\nconsole.log(colores.length);', prompt: '¿Qué imprime la consola?', options: ['3', '2', '"azul"', '4'], answer: '3' },
        { code: 'const animales = ["gato", "perro"];\nconsole.log(animales.includes("perro"));', prompt: '¿Qué imprime la consola?', options: ['true', 'false', '"perro"', '1'], answer: 'true' },
        { code: 'const items = [1, 2, 3, 4];\nconsole.log(items[items.length - 1]);', prompt: '¿Qué imprime la consola?', options: ['4', '3', '1', 'undefined'], answer: '4' }
      ]
    }
  },
  {
    id: 'js-5',
    title: 'Objetos',
    subtitle: 'Nivel 5',
    xp: 65,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un objeto agrupa datos relacionados en pares <strong>clave: valor</strong>: <code>const persona = { nombre: "Ana", edad: 20 };</code>',
        'Se accede a sus propiedades con notación de punto (<code>persona.nombre</code>) o con corchetes (<code>persona["nombre"]</code>). Los objetos también pueden tener funciones como propiedades, llamadas <em>métodos</em>.'
      ],
      code:
        '<span class="tok-kw">const</span> persona = {\n' +
        '  nombre: <span class="tok-string">"Ana"</span>,\n' +
        '  edad: <span class="tok-num">20</span>\n' +
        '};\n' +
        'console.log(persona.nombre);'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice el valor de cada propiedad.',
      variant: 'console',
      questions: [
        { code: 'const libro = { titulo: "1984", paginas: 328 };\nconsole.log(libro.titulo);', prompt: '¿Qué imprime la consola?', options: ['"1984"', '1984', 'undefined', '"titulo"'], answer: '"1984"' },
        { code: 'const coche = { marca: "Toyota" };\ncoche.modelo = "Corolla";\nconsole.log(coche.modelo);', prompt: '¿Qué imprime la consola?', options: ['"Corolla"', 'undefined', '"modelo"', 'Error'], answer: '"Corolla"' },
        { code: 'const usuario = { activo: true };\nconsole.log(typeof usuario);', prompt: '¿Qué imprime la consola?', options: ['"object"', '"usuario"', '"boolean"', '"undefined"'], answer: '"object"' },
        { code: 'const punto = { x: 3, y: 4 };\nconsole.log(punto["x"] + punto["y"]);', prompt: '¿Qué imprime la consola?', options: ['7', '"34"', '34', 'NaN'], answer: '7' }
      ]
    }
  },
  {
    id: 'js-6',
    title: 'DOM y eventos',
    subtitle: 'Nivel 6',
    xp: 80,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El DOM (<em>Document Object Model</em>) representa la página como un árbol de elementos que JavaScript puede leer y modificar. <code>document.querySelector()</code> busca un elemento usando un selector CSS.',
        'Con <code>addEventListener()</code> ejecutamos una función cuando ocurre un evento, como un clic: <code>boton.addEventListener("click", funcion)</code>.'
      ],
      code:
        '<span class="tok-kw">const</span> boton = document.querySelector(<span class="tok-string">"#miBoton"</span>);\n' +
        'boton.addEventListener(<span class="tok-string">"click"</span>, () => {\n' +
        '  boton.textContent = <span class="tok-string">"¡Has hecho clic!"</span>;\n' +
        '});'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código sobre el DOM y los eventos.',
      variant: 'code',
      questions: [
        { code: 'const titulo = document.querySelector("h1");\ntitulo.textContent = "Nuevo título";', prompt: '¿Qué efecto tiene este código?', options: ['Cambia el texto del primer h1 de la página', 'Crea un nuevo h1', 'Elimina el h1', 'Cambia el color del h1'], answer: 'Cambia el texto del primer h1 de la página' },
        { code: 'boton.addEventListener("click", mostrarMensaje);', prompt: '¿Cuándo se ejecuta la función mostrarMensaje?', options: ['Cuando el usuario hace clic en boton', 'Al cargar la página', 'Cada segundo', 'Nunca, falta invocarla'], answer: 'Cuando el usuario hace clic en boton' },
        { code: 'const items = document.querySelectorAll(".item");\nconsole.log(items.length);', prompt: '¿Qué representa "items" en este código?', options: ['Una lista con todos los elementos que tienen la clase "item"', 'Un único elemento con clase "item"', 'El número de clases del documento', 'Un error, querySelectorAll no existe'], answer: 'Una lista con todos los elementos que tienen la clase "item"' },
        { code: 'caja.addEventListener("mouseover", () => {\n  caja.style.background = "red";\n});', prompt: '¿Qué evento dispara este código?', options: ['Cuando el ratón pasa por encima de caja', 'Cuando se hace clic en caja', 'Al cargar la página', 'Cada vez que cambia el tamaño de la ventana'], answer: 'Cuando el ratón pasa por encima de caja' }
      ]
    }
  }
];
