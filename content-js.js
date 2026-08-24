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
  },
  {
    id: 'js-7',
    title: 'Operadores aritméticos y de asignación',
    subtitle: 'Nivel 7',
    xp: 56,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los operadores aritméticos (<code>+ - * / %</code>) sirven para hacer cálculos. El operador <code>%</code> (módulo) devuelve el resto de una división, y <code>**</code> eleva a una potencia.',
        'Los operadores de asignación combinada como <code>+=</code>, <code>-=</code>, <code>*=</code> son un atajo: <code>x += 5</code> es lo mismo que <code>x = x + 5</code>.'
      ],
      code:
        '<span class="tok-kw">let</span> x = <span class="tok-num">10</span>;\n' +
        'x += <span class="tok-num">5</span>;\n' +
        'console.log(x); <span class="tok-comment">// 15</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'let x = 10;\nx += 5;\nconsole.log(x);', prompt: '¿Qué imprime la consola?', options: ['15', '10', '5', '50'], answer: '15' },
        { code: 'let y = 7 % 3;\nconsole.log(y);', prompt: '¿Qué imprime la consola?', options: ['1', '2', '3', '0'], answer: '1' },
        { code: 'let z = 2 ** 3;\nconsole.log(z);', prompt: '¿Qué imprime la consola?', options: ['8', '6', '9', '5'], answer: '8' },
        { code: 'let a = 5;\na *= 2;\na -= 3;\nconsole.log(a);', prompt: '¿Qué imprime la consola?', options: ['7', '10', '13', '4'], answer: '7' }
      ]
    }
  },
  {
    id: 'js-8',
    title: 'Comparación y operadores lógicos',
    subtitle: 'Nivel 8',
    xp: 58,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El operador <code>===</code> compara valor Y tipo (comparación estricta), mientras que <code>==</code> solo compara el valor y convierte tipos si hace falta. Por eso se recomienda usar siempre <code>===</code>.',
        'Los operadores lógicos <code>&&</code> (Y) y <code>||</code> (O) combinan condiciones: <code>&&</code> exige que ambas sean verdaderas, <code>||</code> con que una lo sea es suficiente.'
      ],
      code:
        'console.log(<span class="tok-num">5</span> === <span class="tok-string">"5"</span>); <span class="tok-comment">// false</span>\n' +
        'console.log(<span class="tok-num">5</span> == <span class="tok-string">"5"</span>);  <span class="tok-comment">// true</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'console.log(5 === "5");', prompt: '¿Qué imprime la consola?', options: ['false', 'true', 'undefined', 'Error'], answer: 'false' },
        { code: 'console.log(null == undefined);', prompt: '¿Qué imprime la consola?', options: ['true', 'false', 'null', 'undefined'], answer: 'true' },
        { code: 'console.log(0 || "hola");', prompt: '¿Qué imprime la consola?', options: ['hola', '0', 'false', 'true'], answer: 'hola' },
        { code: 'console.log(1 > 2 || 3 > 4);', prompt: '¿Qué imprime la consola?', options: ['false', 'true', 'NaN', 'undefined'], answer: 'false' }
      ]
    }
  },
  {
    id: 'js-9',
    title: 'Concatenación y template literals',
    subtitle: 'Nivel 9',
    xp: 60,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Podemos unir strings con el operador <code>+</code>, pero es más cómodo usar <em>template literals</em>: cadenas entre comillas invertidas (<code>` `</code>) donde <code>${variable}</code> inserta un valor directamente.',
        'Los template literals también permiten escribir expresiones dentro de <code>${ }</code>, como sumas o llamadas a funciones.'
      ],
      code:
        '<span class="tok-kw">const</span> nombre = <span class="tok-string">"Ana"</span>;\n' +
        'console.log(`Hola, ${nombre}!`);'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice qué imprime cada bloque de código.',
      variant: 'console',
      questions: [
        { code: 'const a = "Hola";\nconst b = "Mundo";\nconsole.log(a + " " + b);', prompt: '¿Qué imprime la consola?', options: ['"Hola Mundo"', '"HolaMundo"', '"Mundo Hola"', 'undefined'], answer: '"Hola Mundo"' },
        { code: 'const edad = 16;\nconsole.log("Tengo " + edad + " años");', prompt: '¿Qué imprime la consola?', options: ['"Tengo 16 años"', '"Tengo años 16"', '16', '"Tengo " + 16 + " años"'], answer: '"Tengo 16 años"' },
        { code: 'const x = 5;\nconst y = 10;\nconsole.log(`Total: ${x + y}`);', prompt: '¿Qué imprime la consola?', options: ['"Total: 15"', '"Total: x + y"', '"Total: 5+10"', 'NaN'], answer: '"Total: 15"' },
        { code: 'console.log("5" + 3);', prompt: '¿Qué imprime la consola?', options: ['"53"', '8', '"8"', '53'], answer: '"53"' }
      ]
    }
  },
  {
    id: 'js-10',
    title: 'Métodos de strings',
    subtitle: 'Nivel 10',
    xp: 62,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los strings tienen métodos muy útiles: <code>.toUpperCase()</code> pasa a mayúsculas, <code>.slice(inicio, fin)</code> extrae una parte del texto, y <code>.trim()</code> elimina espacios sobrantes al principio y al final.',
        'También existen <code>.includes()</code> para saber si un texto contiene otro, y <code>.length</code> para conocer la cantidad de caracteres.'
      ],
      code:
        '<span class="tok-kw">const</span> texto = <span class="tok-string">"  Hola  "</span>;\n' +
        'console.log(texto.trim());'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice el resultado de cada método.',
      variant: 'console',
      questions: [
        { code: 'const nombre = "ana";\nconsole.log(nombre.toUpperCase());', prompt: '¿Qué imprime la consola?', options: ['"ANA"', '"ana"', '"Ana"', 'undefined'], answer: '"ANA"' },
        { code: 'const frase = "JavaScript";\nconsole.log(frase.slice(0, 4));', prompt: '¿Qué imprime la consola?', options: ['"Java"', '"Scri"', '"JavaScript"', '"ava"'], answer: '"Java"' },
        { code: 'const texto = "  Hola  ";\nconsole.log(texto.trim().length);', prompt: '¿Qué imprime la consola?', options: ['4', '8', '"Hola"', '6'], answer: '4' },
        { code: 'const saludo = "Hola Mundo";\nconsole.log(saludo.includes("Mundo"));', prompt: '¿Qué imprime la consola?', options: ['true', 'false', '"Mundo"', 'undefined'], answer: 'true' }
      ]
    }
  },
  {
    id: 'js-11',
    title: 'Comentarios y buenas prácticas',
    subtitle: 'Nivel 11',
    xp: 64,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los comentarios son texto que JavaScript ignora al ejecutar el código, pero que ayudan a explicar qué hace cada parte. Se escriben con <code>//</code> para una línea, o <code>/* */</code> para varias.',
        'Escribir código legible también es programar bien: usa nombres de variables descriptivos, evita duplicar código y mantén las funciones cortas y con un solo propósito.'
      ],
      code:
        '<span class="tok-comment">// Calcula el precio con IVA</span>\n' +
        '<span class="tok-kw">function</span> conIva(precio) {\n' +
        '  <span class="tok-comment">/* aplica un 21% de IVA */</span>\n' +
        '  <span class="tok-kw">return</span> precio * <span class="tok-num">1.21</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas conceptuales sobre comentarios y buenas prácticas.',
      variant: 'plain',
      questions: [
        { prompt: '¿Cómo se escribe un comentario de una sola línea en JavaScript?', options: ['Con //', 'Con /* */ solamente', 'Con #', 'Con <!-- -->'], answer: 'Con //' },
        { prompt: '¿Para qué sirven los comentarios en el código?', options: ['Para explicar el código sin que afecte su ejecución', 'Para acelerar el programa', 'Para declarar variables', 'Son obligatorios en cada línea'], answer: 'Para explicar el código sin que afecte su ejecución' },
        { prompt: '¿Cuál es una buena práctica al nombrar variables?', options: ['Usar nombres descriptivos como "edadUsuario"', 'Usar siempre una sola letra como "x"', 'Usar espacios en el nombre', 'Usar solo mayúsculas siempre'], answer: 'Usar nombres descriptivos como "edadUsuario"' },
        { prompt: '¿Cómo se escribe un comentario de varias líneas?', options: ['Entre /* y */', 'Entre // y //', 'Entre <!-- y -->', 'Entre # y #'], answer: 'Entre /* y */' }
      ]
    }
  },
  {
    id: 'js-12',
    title: 'Los bucles while y do-while',
    subtitle: 'Nivel 12',
    xp: 66,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El bucle <code>while</code> repite un bloque de código mientras la condición sea verdadera. La condición se revisa <strong>antes</strong> de cada vuelta, así que si empieza siendo falsa, el bucle nunca se ejecuta.',
        'El bucle <code>do-while</code> es similar, pero revisa la condición <strong>después</strong> de ejecutar el bloque, así que siempre se ejecuta al menos una vez.'
      ],
      code:
        '<span class="tok-kw">let</span> i = <span class="tok-num">0</span>;\n' +
        '<span class="tok-kw">while</span> (i &lt; <span class="tok-num">3</span>) {\n' +
        '  console.log(i);\n' +
        '  i++;\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'let i = 0;\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}', prompt: '¿Cuántas veces se ejecuta console.log?', options: ['3', '2', '4', 'Infinitas'], answer: '3' },
        { code: 'let n = 5;\ndo {\n  console.log(n);\n  n++;\n} while (n < 5);', prompt: '¿Cuántas veces se ejecuta console.log?', options: ['1', '0', '5', 'Infinitas'], answer: '1' },
        { code: 'let contador = 0;\nwhile (contador < 5) {\n  contador += 2;\n}\nconsole.log(contador);', prompt: '¿Qué imprime la consola?', options: ['6', '4', '5', '8'], answer: '6' },
        { code: 'let x = 10;\nwhile (x > 10) {\n  x--;\n}\nconsole.log(x);', prompt: '¿Qué imprime la consola?', options: ['10', '9', '0', 'Error'], answer: '10' }
      ]
    }
  },
  {
    id: 'js-13',
    title: 'Switch: múltiples casos',
    subtitle: 'Nivel 13',
    xp: 68,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El <code>switch</code> compara un valor contra varios <code>case</code> posibles, y ejecuta el bloque que coincide. El <code>break</code> es importante: sin él, la ejecución "cae" al siguiente caso.',
        'El caso <code>default</code> se ejecuta si ningún <code>case</code> coincide, sin importar en qué posición del switch esté escrito.'
      ],
      code:
        '<span class="tok-kw">switch</span> (dia) {\n' +
        '  <span class="tok-kw">case</span> <span class="tok-num">6</span>:\n' +
        '  <span class="tok-kw">case</span> <span class="tok-num">0</span>:\n' +
        '    console.log(<span class="tok-string">"Fin de semana"</span>);\n' +
        '    <span class="tok-kw">break</span>;\n' +
        '  <span class="tok-kw">default</span>:\n' +
        '    console.log(<span class="tok-string">"Día laboral"</span>);\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'let dia = 3;\nswitch (dia) {\n  case 1:\n    console.log("Lunes");\n    break;\n  case 3:\n    console.log("Miércoles");\n    break;\n  default:\n    console.log("Otro día");\n}', prompt: '¿Qué se imprime?', options: ['Miércoles', 'Lunes', 'Otro día', 'undefined'], answer: 'Miércoles' },
        { code: 'let letra = "b";\nswitch (letra) {\n  case "a":\n    console.log("Primera");\n    break;\n  case "b":\n    console.log("Segunda");\n    break;\n  case "c":\n    console.log("Tercera");\n    break;\n}', prompt: '¿Qué se imprime?', options: ['Segunda', 'Primera', 'Tercera', 'undefined'], answer: 'Segunda' },
        { code: 'let n = 1;\nswitch (n) {\n  case 1:\n    console.log("Uno");\n  case 2:\n    console.log("Dos");\n    break;\n  default:\n    console.log("Otro");\n}', prompt: '¿Qué imprime la consola, en orden? (fíjate en que el case 1 no tiene break)', options: ['Uno y luego Dos', 'Solo Uno', 'Solo Dos', 'Otro'], answer: 'Uno y luego Dos' },
        { code: 'let x = 5;\nswitch (x) {\n  default:\n    console.log("Valor por defecto");\n    break;\n  case 5:\n    console.log("Cinco");\n    break;\n}', prompt: '¿Qué se imprime, aunque el default esté escrito primero?', options: ['Cinco', 'Valor por defecto', 'Ambos', 'undefined'], answer: 'Cinco' }
      ]
    }
  },
  {
    id: 'js-14',
    title: 'Operador ternario',
    subtitle: 'Nivel 14',
    xp: 70,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El operador ternario es una forma corta de escribir un <code>if / else</code> que devuelve un valor: <code>condicion ? valorSiVerdadero : valorSiFalso</code>.',
        'Se pueden anidar varios ternarios para representar más de dos casos, aunque conviene no abusar de ellos para no perder legibilidad.'
      ],
      code:
        '<span class="tok-kw">let</span> edad = <span class="tok-num">20</span>;\n' +
        '<span class="tok-kw">let</span> mensaje = edad &gt;= <span class="tok-num">18</span> ? <span class="tok-string">"Adulto"</span> : <span class="tok-string">"Menor"</span>;\n' +
        'console.log(mensaje);'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'let edad = 20;\nconsole.log(edad >= 18 ? "Adulto" : "Menor");', prompt: '¿Qué imprime la consola?', options: ['Adulto', 'Menor', 'true', '18'], answer: 'Adulto' },
        { code: 'let n = 7;\nconsole.log(n % 2 === 0 ? "Par" : "Impar");', prompt: '¿Qué imprime la consola?', options: ['Impar', 'Par', 'true', 'false'], answer: 'Impar' },
        { code: 'let nota = 5;\nlet resultado = nota >= 9 ? "Excelente" : nota >= 6 ? "Aprobado" : "Reprobado";\nconsole.log(resultado);', prompt: '¿Qué imprime la consola?', options: ['Reprobado', 'Aprobado', 'Excelente', 'undefined'], answer: 'Reprobado' },
        { code: 'let a = 10;\nlet b = a > 5 ? a * 2 : a / 2;\nconsole.log(b);', prompt: '¿Qué imprime la consola?', options: ['20', '5', '15', '10'], answer: '20' }
      ]
    }
  },
  {
    id: 'js-15',
    title: 'Arrays: recorrido con for',
    subtitle: 'Nivel 15',
    xp: 72,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Podemos recorrer un array con un bucle <code>for</code> clásico, usando <code>array.length</code> como límite: así visitamos cada índice, desde 0 hasta el último.',
        'Esto nos permite acceder a cada elemento con <code>array[i]</code>, e incluso empezar o saltar posiciones según lo que necesitemos.'
      ],
      code:
        '<span class="tok-kw">const</span> numeros = [<span class="tok-num">10</span>, <span class="tok-num">20</span>, <span class="tok-num">30</span>];\n' +
        '<span class="tok-kw">for</span> (<span class="tok-kw">let</span> i = <span class="tok-num">0</span>; i &lt; numeros.length; i++) {\n' +
        '  console.log(numeros[i]);\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'const numeros = [10, 20, 30];\nfor (let i = 0; i < numeros.length; i++) {\n  console.log(numeros[i]);\n}', prompt: '¿Cuántas veces se ejecuta console.log?', options: ['3', '2', '4', '0'], answer: '3' },
        { code: 'const letras = ["a", "b", "c", "d"];\nlet resultado = "";\nfor (let i = 0; i < letras.length; i++) {\n  resultado += letras[i];\n}\nconsole.log(resultado);', prompt: '¿Qué imprime la consola?', options: ['abcd', 'a,b,c,d', 'dcba', 'undefined'], answer: 'abcd' },
        { code: 'const nums = [1, 2, 3];\nlet suma = 0;\nfor (let i = 0; i < nums.length; i++) {\n  suma += nums[i];\n}\nconsole.log(suma);', prompt: '¿Qué imprime la consola?', options: ['6', '3', '1', '0'], answer: '6' },
        { code: 'const items = [5, 10, 15];\nfor (let i = 1; i < items.length; i++) {\n  console.log(items[i]);\n}', prompt: '¿Cuántas veces se ejecuta console.log?', options: ['2', '3', '1', '0'], answer: '2' }
      ]
    }
  },
  {
    id: 'js-16',
    title: 'Arrays: método forEach',
    subtitle: 'Nivel 16',
    xp: 74,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El método <code>.forEach()</code> ejecuta una función por cada elemento del array, sin que tengas que escribir el bucle manualmente. Es más legible que un <code>for</code> clásico.',
        'La función que le pasas puede recibir hasta tres parámetros: el elemento, su índice y el array completo. <code>forEach</code> siempre devuelve <code>undefined</code>.'
      ],
      code:
        '<span class="tok-kw">const</span> frutas = [<span class="tok-string">"manzana"</span>, <span class="tok-string">"pera"</span>];\n' +
        'frutas.forEach(fruta =&gt; console.log(fruta));'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'const frutas = ["manzana", "pera"];\nfrutas.forEach(fruta => console.log(fruta));', prompt: '¿Cuántas veces se ejecuta el console.log dentro del forEach?', options: ['2', '1', '0', '3'], answer: '2' },
        { code: 'const numeros = [1, 2, 3];\nlet total = 0;\nnumeros.forEach(n => {\n  total += n;\n});\nconsole.log(total);', prompt: '¿Qué imprime la consola?', options: ['6', '3', '1', '0'], answer: '6' },
        { code: 'const nums = [10, 20, 30];\nconst resultado = nums.forEach(n => n * 2);\nconsole.log(resultado);', prompt: '¿Qué imprime la consola?', options: ['undefined', '[20, 40, 60]', '60', 'NaN'], answer: 'undefined' },
        { code: 'const items = ["x", "y", "z"];\nitems.forEach((item, index) => {\n  console.log(index);\n});', prompt: '¿Qué valores imprime el parámetro index en cada vuelta, en orden?', options: ['0, 1, 2', '1, 2, 3', 'x, y, z', '0, 1, 2, 3'], answer: '0, 1, 2' }
      ]
    }
  },
  {
    id: 'js-17',
    title: 'Conversión de tipos',
    subtitle: 'Nivel 17',
    xp: 76,
    type: 'quiz',
    theory: {
      paragraphs: [
        'A veces necesitamos convertir explícitamente entre tipos: <code>Number()</code> convierte a número, <code>String()</code> convierte a texto.',
        '<code>parseInt()</code> convierte texto a número entero, leyendo solo los dígitos iniciales; si el texto no empieza con un número, el resultado es <code>NaN</code> (Not a Number).'
      ],
      code:
        '<span class="tok-kw">const</span> texto = <span class="tok-string">"42"</span>;\n' +
        'console.log(Number(texto) + <span class="tok-num">8</span>); <span class="tok-comment">// 50</span>'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice el resultado de cada conversión.',
      variant: 'console',
      questions: [
        { code: 'console.log(Number("42") + 8);', prompt: '¿Qué imprime la consola?', options: ['50', '"428"', 'NaN', '"50"'], answer: '50' },
        { code: 'console.log(String(100) + 1);', prompt: '¿Qué imprime la consola?', options: ['"1001"', '101', '"100"', 'NaN'], answer: '"1001"' },
        { code: 'console.log(parseInt("25px"));', prompt: '¿Qué imprime la consola?', options: ['25', 'NaN', '"25px"', '0'], answer: '25' },
        { code: 'console.log(Number("hola"));', prompt: '¿Qué imprime la consola?', options: ['NaN', '0', '"hola"', 'undefined'], answer: 'NaN' }
      ]
    }
  },
  {
    id: 'js-18',
    title: 'Valores falsy y truthy',
    subtitle: 'Nivel 18',
    xp: 78,
    type: 'quiz',
    theory: {
      paragraphs: [
        'En JavaScript, algunos valores se comportan como <code>false</code> al evaluarse en una condición: son los valores <em>falsy</em>: <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code> y <code>NaN</code>.',
        'Todos los demás valores son <em>truthy</em> (se comportan como verdaderos), incluso cosas que parecen "vacías" como <code>"0"</code> (un string con el carácter 0) o un array vacío <code>[]</code>.'
      ],
      code:
        'console.log(Boolean(<span class="tok-num">0</span>)); <span class="tok-comment">// false</span>\n' +
        'console.log(Boolean(<span class="tok-string">"hola"</span>)); <span class="tok-comment">// true</span>'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice si cada valor es truthy o falsy.',
      variant: 'console',
      questions: [
        { code: 'console.log(Boolean(0));', prompt: '¿Qué imprime la consola?', options: ['false', 'true', '0', 'NaN'], answer: 'false' },
        { code: 'console.log(Boolean("texto"));', prompt: '¿Qué imprime la consola?', options: ['true', 'false', '"texto"', 'undefined'], answer: 'true' },
        { code: 'console.log(null || "valor por defecto");', prompt: '¿Qué imprime la consola?', options: ['"valor por defecto"', 'null', 'false', 'undefined'], answer: '"valor por defecto"' },
        { code: 'console.log(Boolean(undefined));', prompt: '¿Qué imprime la consola?', options: ['false', 'true', 'undefined', 'NaN'], answer: 'false' }
      ]
    }
  },
  {
    id: 'js-19',
    title: 'Ámbito de variables (scope)',
    subtitle: 'Nivel 19',
    xp: 79,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El <em>scope</em> (ámbito) de una variable define en qué partes del código se puede usar. <code>let</code> y <code>const</code> tienen ámbito de <strong>bloque</strong>: solo existen dentro de las llaves <code>{ }</code> donde se declararon.',
        '<code>var</code>, en cambio, tiene ámbito de <strong>función</strong>, lo que puede causar comportamientos confusos. Por eso hoy se recomienda usar siempre <code>let</code> y <code>const</code>.'
      ],
      code:
        '<span class="tok-kw">if</span> (<span class="tok-kw">true</span>) {\n' +
        '  <span class="tok-kw">let</span> mensaje = <span class="tok-string">"Hola"</span>;\n' +
        '}\n' +
        '<span class="tok-comment">// console.log(mensaje); -> Error, no existe aquí</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas conceptuales sobre el ámbito de las variables.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué significa que una variable tenga "ámbito de bloque" (block scope)?', options: ['Que solo existe dentro de las llaves { } donde fue declarada', 'Que existe en todo el archivo sin importar dónde se declaró', 'Que se puede usar antes de declararla', 'Que solo funciona dentro de funciones'], answer: 'Que solo existe dentro de las llaves { } donde fue declarada' },
        { prompt: '¿Cuál es la principal diferencia entre let y var respecto al ámbito?', options: ['let tiene ámbito de bloque, var tiene ámbito de función', 'var tiene ámbito de bloque, let tiene ámbito de función', 'No hay ninguna diferencia', 'let no puede usarse dentro de un bucle'], answer: 'let tiene ámbito de bloque, var tiene ámbito de función' },
        { prompt: '¿Qué ocurre si declaras una variable con const y luego intentas reasignarle un nuevo valor?', options: ['JavaScript lanza un error', 'Se reasigna sin problema', 'El valor se convierte en undefined', 'Solo funciona dentro de un bucle'], answer: 'JavaScript lanza un error' },
        { prompt: '¿Qué es una variable global?', options: ['Una variable declarada fuera de cualquier función o bloque, accesible desde cualquier parte del código', 'Una variable que solo existe dentro de un if', 'Una variable que cambia de tipo automáticamente', 'Una variable que solo se puede usar una vez'], answer: 'Una variable declarada fuera de cualquier función o bloque, accesible desde cualquier parte del código' }
      ]
    }
  },
  {
    id: 'js-20',
    title: 'Números: Math.round, Math.random, Math.floor',
    subtitle: 'Nivel 20',
    xp: 80,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El objeto <code>Math</code> ofrece funciones matemáticas útiles: <code>Math.round()</code> redondea, <code>Math.floor()</code> redondea hacia abajo, <code>Math.ceil()</code> redondea hacia arriba.',
        '<code>Math.random()</code> genera un número decimal aleatorio entre 0 (incluido) y 1 (excluido), muy usado junto a <code>Math.floor()</code> para generar números enteros aleatorios.'
      ],
      code:
        'console.log(Math.round(<span class="tok-num">4.6</span>)); <span class="tok-comment">// 5</span>\n' +
        'console.log(Math.floor(<span class="tok-num">4.6</span>)); <span class="tok-comment">// 4</span>'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice el resultado de cada operación.',
      variant: 'console',
      questions: [
        { code: 'console.log(Math.round(4.6));', prompt: '¿Qué imprime la consola?', options: ['5', '4', '4.6', 'NaN'], answer: '5' },
        { code: 'console.log(Math.floor(9.9));', prompt: '¿Qué imprime la consola?', options: ['9', '10', '9.9', '1'], answer: '9' },
        { code: 'console.log(Math.ceil(2.1));', prompt: '¿Qué imprime la consola?', options: ['3', '2', '2.1', '1'], answer: '3' },
        { code: 'console.log(Math.max(3, 7, 2));', prompt: '¿Qué imprime la consola?', options: ['7', '3', '2', '12'], answer: '7' }
      ]
    }
  },
  {
    id: 'js-21',
    title: 'Arrays: método map()',
    subtitle: 'Nivel 21',
    xp: 82,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'El método <code>.map()</code> crea un <strong>nuevo array</strong> transformando cada elemento del original según la función que le pasamos, sin modificar el array original.',
        'Es uno de los métodos más usados en JavaScript moderno: es corto, no muta datos, y su resultado siempre tiene la misma longitud que el array de partida.'
      ],
      code:
        '<span class="tok-kw">const</span> numeros = [<span class="tok-num">1</span>, <span class="tok-num">2</span>, <span class="tok-num">3</span>];\n' +
        '<span class="tok-kw">const</span> dobles = numeros.map(n =&gt; n * <span class="tok-num">2</span>);\n' +
        'console.log(dobles); <span class="tok-comment">// [2, 4, 6]</span>'
    },
    exercise: {
      instructions: 'Completa el nombre del método que falta en cada línea de código.',
      blanks: [
        { id: 'b1', before: 'const dobles = numeros.', after: '(n => n * 2);', answer: 'map', options: ['map', 'filter', 'forEach', 'reduce'] },
        { id: 'b2', before: 'const nombres = usuarios.', after: '(u => u.nombre);', answer: 'map', options: ['map', 'find', 'push', 'slice'] },
        { id: 'b3', before: 'const precios = productos.', after: '(p => p.precio * 1.21);', answer: 'map', options: ['map', 'filter', 'sort', 'join'] },
        { id: 'b4', before: 'const mayusculas = palabras.', after: '(p => p.toUpperCase());', answer: 'map', options: ['map', 'concat', 'pop', 'indexOf'] }
      ]
    }
  },
  {
    id: 'js-22',
    title: 'Arrays: método filter()',
    subtitle: 'Nivel 22',
    xp: 85,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'El método <code>.filter()</code> crea un <strong>nuevo array</strong> con solo los elementos que cumplen una condición: la función que le pasas debe devolver <code>true</code> o <code>false</code> para cada elemento.',
        'A diferencia de <code>.map()</code>, el array resultante de <code>.filter()</code> puede tener menos elementos que el original (o incluso ninguno).'
      ],
      code:
        '<span class="tok-kw">const</span> numeros = [<span class="tok-num">1</span>, <span class="tok-num">2</span>, <span class="tok-num">3</span>, <span class="tok-num">4</span>];\n' +
        '<span class="tok-kw">const</span> pares = numeros.filter(n =&gt; n % <span class="tok-num">2</span> === <span class="tok-num">0</span>);\n' +
        'console.log(pares); <span class="tok-comment">// [2, 4]</span>'
    },
    exercise: {
      instructions: 'Completa el nombre del método que falta en cada línea de código.',
      blanks: [
        { id: 'b1', before: 'const pares = numeros.', after: '(n => n % 2 === 0);', answer: 'filter', options: ['filter', 'map', 'reduce', 'find'] },
        { id: 'b2', before: 'const mayores = edades.', after: '(e => e >= 18);', answer: 'filter', options: ['filter', 'some', 'every', 'sort'] },
        { id: 'b3', before: 'const activos = usuarios.', after: '(u => u.activo);', answer: 'filter', options: ['filter', 'map', 'forEach', 'push'] },
        { id: 'b4', before: 'const disponibles = productos.', after: '(p => p.stock > 0);', answer: 'filter', options: ['filter', 'reduce', 'concat', 'slice'] }
      ]
    }
  },
  {
    id: 'js-23',
    title: 'Arrays: método reduce()',
    subtitle: 'Nivel 23',
    xp: 87,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'El método <code>.reduce()</code> "reduce" todo un array a un único valor, acumulando resultado tras resultado. Recibe una función con un acumulador y el elemento actual, y un valor inicial.',
        'Es más difícil de leer al principio, pero es muy potente: sirve para sumar, contar, agrupar o construir cualquier valor final a partir de un array.'
      ],
      code:
        '<span class="tok-kw">const</span> precios = [<span class="tok-num">10</span>, <span class="tok-num">20</span>, <span class="tok-num">30</span>];\n' +
        '<span class="tok-kw">const</span> total = precios.reduce((acc, p) =&gt; acc + p, <span class="tok-num">0</span>);\n' +
        'console.log(total); <span class="tok-comment">// 60</span>'
    },
    exercise: {
      instructions: 'Completa el nombre del método que falta en cada línea de código.',
      blanks: [
        { id: 'b1', before: 'const total = precios.', after: '((acc, p) => acc + p, 0);', answer: 'reduce', options: ['reduce', 'map', 'filter', 'forEach'] },
        { id: 'b2', before: 'const suma = numeros.', after: '((a, b) => a + b, 0);', answer: 'reduce', options: ['reduce', 'sort', 'find', 'concat'] },
        { id: 'b3', before: 'const maximo = valores.', after: '((a, b) => a > b ? a : b);', answer: 'reduce', options: ['reduce', 'map', 'filter', 'includes'] },
        { id: 'b4', before: 'const conteo = palabras.', after: '((acc, p) => acc + p.length, 0);', answer: 'reduce', options: ['reduce', 'forEach', 'join', 'slice'] }
      ]
    }
  },
  {
    id: 'js-24',
    title: 'Arrays: find() e indexOf()',
    subtitle: 'Nivel 24',
    xp: 89,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El método <code>.find()</code> devuelve el <strong>primer elemento</strong> que cumple una condición, o <code>undefined</code> si ninguno la cumple.',
        'El método <code>.indexOf()</code> devuelve la <strong>posición</strong> de un valor dentro del array, o <code>-1</code> si no lo encuentra.'
      ],
      code:
        '<span class="tok-kw">const</span> numeros = [<span class="tok-num">4</span>, <span class="tok-num">9</span>, <span class="tok-num">15</span>, <span class="tok-num">20</span>];\n' +
        'console.log(numeros.find(n =&gt; n &gt; <span class="tok-num">10</span>)); <span class="tok-comment">// 15</span>\n' +
        'console.log(numeros.indexOf(<span class="tok-num">15</span>)); <span class="tok-comment">// 2</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'const numeros = [4, 9, 15, 20];\nconsole.log(numeros.find(n => n > 10));', prompt: '¿Qué imprime la consola?', options: ['15', '20', '2', 'undefined'], answer: '15' },
        { code: 'const numeros = [4, 9, 15, 20];\nconsole.log(numeros.indexOf(15));', prompt: '¿Qué imprime la consola?', options: ['2', '15', '1', '-1'], answer: '2' },
        { code: 'const frutas = ["pera", "uva", "kiwi"];\nconsole.log(frutas.indexOf("mango"));', prompt: '¿Qué imprime la consola?', options: ['-1', '0', 'undefined', 'NaN'], answer: '-1' },
        { code: 'const numeros = [1, 2, 3];\nconsole.log(numeros.find(n => n > 10));', prompt: '¿Qué imprime la consola?', options: ['undefined', '-1', 'null', '0'], answer: 'undefined' }
      ]
    }
  },
  {
    id: 'js-25',
    title: 'Desestructuración de arrays y objetos',
    subtitle: 'Nivel 25',
    xp: 91,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La desestructuración permite extraer valores de arrays u objetos y guardarlos en variables en una sola línea: <code>const [a, b] = [1, 2];</code> o <code>const { nombre } = persona;</code>.',
        'En arrays se puede "saltar" un elemento dejando un hueco entre comas, y en objetos se puede renombrar la variable con <code>{ propiedad: nuevoNombre }</code>.'
      ],
      code:
        '<span class="tok-kw">const</span> [a, b] = [<span class="tok-num">1</span>, <span class="tok-num">2</span>];\n' +
        '<span class="tok-kw">const</span> { nombre } = { nombre: <span class="tok-string">"Ana"</span>, edad: <span class="tok-num">20</span> };\n' +
        'console.log(a, nombre);'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice el valor extraído en cada caso.',
      variant: 'console',
      questions: [
        { code: 'const [primero, segundo] = [10, 20, 30];\nconsole.log(segundo);', prompt: '¿Qué imprime la consola?', options: ['20', '10', '30', 'undefined'], answer: '20' },
        { code: 'const { nombre, edad } = { nombre: "Luis", edad: 25 };\nconsole.log(nombre);', prompt: '¿Qué imprime la consola?', options: ['"Luis"', '"edad"', '25', 'undefined'], answer: '"Luis"' },
        { code: 'const [x, , z] = [1, 2, 3];\nconsole.log(z);', prompt: '¿Qué imprime la consola?', options: ['3', '2', 'undefined', '1'], answer: '3' },
        { code: 'const { a: valorA } = { a: 5, b: 10 };\nconsole.log(valorA);', prompt: '¿Qué imprime la consola?', options: ['5', '10', '"a"', 'undefined'], answer: '5' }
      ]
    }
  },
  {
    id: 'js-26',
    title: 'Spread y rest operator',
    subtitle: 'Nivel 26',
    xp: 93,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El operador <code>...</code> (tres puntos) tiene dos usos: como <em>spread</em>, expande un array u objeto en sus elementos individuales: <code>[...arr, 4]</code>.',
        'Como <em>rest</em>, hace lo contrario: agrupa varios valores sueltos en un solo array, muy útil en parámetros de funciones: <code>function f(...args) { }</code>.'
      ],
      code:
        '<span class="tok-kw">const</span> arr1 = [<span class="tok-num">1</span>, <span class="tok-num">2</span>];\n' +
        '<span class="tok-kw">const</span> arr2 = [...arr1, <span class="tok-num">3</span>, <span class="tok-num">4</span>];\n' +
        'console.log(arr2); <span class="tok-comment">// [1, 2, 3, 4]</span>'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice el resultado de cada operación.',
      variant: 'console',
      questions: [
        { code: 'const arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4];\nconsole.log(arr2);', prompt: '¿Qué imprime la consola?', options: ['[1, 2, 3, 4]', '[1, 2, [3, 4]]', '[3, 4, 1, 2]', 'undefined'], answer: '[1, 2, 3, 4]' },
        { code: 'const obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 };\nconsole.log(obj2);', prompt: '¿Qué imprime la consola?', options: ['{a: 1, b: 2}', '{a: 1}', '{b: 2}', 'undefined'], answer: '{a: 1, b: 2}' },
        { code: 'function sumarTodo(...numeros) {\n  return numeros.reduce((a, b) => a + b, 0);\n}\nconsole.log(sumarTodo(1, 2, 3, 4));', prompt: '¿Qué imprime la consola?', options: ['10', '4', '24', 'undefined'], answer: '10' },
        { code: 'const [primero, ...resto] = [1, 2, 3, 4];\nconsole.log(resto);', prompt: '¿Qué imprime la consola?', options: ['[2, 3, 4]', '[1, 2, 3, 4]', '2', 'undefined'], answer: '[2, 3, 4]' }
      ]
    }
  },
  {
    id: 'js-27',
    title: 'Funciones flecha avanzadas y this',
    subtitle: 'Nivel 27',
    xp: 95,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Las funciones flecha no tienen su propio <code>this</code>: usan el <code>this</code> del contexto donde fueron creadas. Esto las hace ideales para callbacks cortos.',
        'Por esa misma razón, no conviene usarlas como métodos de un objeto que necesitan referirse al propio objeto con <code>this</code>: en ese caso es mejor una función tradicional.'
      ],
      code:
        '<span class="tok-kw">const</span> sumar = (a, b) =&gt; a + b;\n' +
        'console.log(sumar(<span class="tok-num">2</span>, <span class="tok-num">3</span>)); <span class="tok-comment">// 5, retorno implícito</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas conceptuales sobre las funciones flecha y this.',
      variant: 'plain',
      questions: [
        { prompt: '¿Cuál es una diferencia clave entre una función flecha y una función tradicional respecto a "this"?', options: ['La función flecha no tiene su propio "this": usa el del contexto donde fue creada', 'La función flecha siempre crea un "this" nuevo', 'Las funciones flecha no pueden usar "this"', 'No hay ninguna diferencia'], answer: 'La función flecha no tiene su propio "this": usa el del contexto donde fue creada' },
        { prompt: '¿Cuál de estas NO es una ventaja típica de las funciones flecha?', options: ['Tener su propio objeto arguments igual que las funciones tradicionales', 'Sintaxis más corta', 'Retorno implícito en una sola línea', 'Ser ideales para callbacks cortos'], answer: 'Tener su propio objeto arguments igual que las funciones tradicionales' },
        { prompt: '¿Qué es el "retorno implícito" en una función flecha?', options: ['Cuando se omiten las llaves { } y el return, y el valor de la expresión se devuelve automáticamente', 'Cuando la función siempre devuelve undefined', 'Cuando hay que escribir return dos veces', 'Una función que nunca devuelve nada'], answer: 'Cuando se omiten las llaves { } y el return, y el valor de la expresión se devuelve automáticamente' },
        { prompt: '¿Por qué no se recomienda usar funciones flecha como métodos de un objeto que necesitan acceder a "this" del propio objeto?', options: ['Porque "this" dentro de la flecha no apunta al objeto sino al contexto exterior', 'Porque las funciones flecha no pueden estar dentro de objetos', 'Porque es más lento', 'Porque generan un error de sintaxis'], answer: 'Porque "this" dentro de la flecha no apunta al objeto sino al contexto exterior' }
      ]
    }
  },
  {
    id: 'js-28',
    title: 'Parámetros por defecto',
    subtitle: 'Nivel 28',
    xp: 97,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Podemos darle a un parámetro un valor por defecto, que se usará si no se pasa ningún argumento (o se pasa <code>undefined</code>): <code>function f(x = 10) { }</code>.',
        'Esto evita tener que comprobar manualmente si el parámetro llegó vacío, y hace las funciones más seguras y fáciles de leer.'
      ],
      code:
        '<span class="tok-kw">function</span> saludar(nombre = <span class="tok-string">"invitado"</span>) {\n' +
        '  console.log(<span class="tok-string">"Hola, "</span> + nombre);\n' +
        '}\n' +
        'saludar();'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice el resultado de cada llamada.',
      variant: 'console',
      questions: [
        { code: 'function saludar(nombre = "invitado") {\n  console.log("Hola, " + nombre);\n}\nsaludar();', prompt: '¿Qué imprime la consola?', options: ['"Hola, invitado"', '"Hola, undefined"', 'undefined', 'Error'], answer: '"Hola, invitado"' },
        { code: 'function multiplicar(a, b = 2) {\n  return a * b;\n}\nconsole.log(multiplicar(5));', prompt: '¿Qué imprime la consola?', options: ['10', '5', 'undefined', 'NaN'], answer: '10' },
        { code: 'function multiplicar(a, b = 2) {\n  return a * b;\n}\nconsole.log(multiplicar(5, 3));', prompt: '¿Qué imprime la consola?', options: ['15', '10', '5', 'NaN'], answer: '15' },
        { code: 'function crear(nombre, tipo = "usuario") {\n  return `${nombre} (${tipo})`;\n}\nconsole.log(crear("Ana", "admin"));', prompt: '¿Qué imprime la consola?', options: ['"Ana (admin)"', '"Ana (usuario)"', '"admin (Ana)"', 'undefined'], answer: '"Ana (admin)"' }
      ]
    }
  },
  {
    id: 'js-29',
    title: 'Objetos: Object.keys, values, entries',
    subtitle: 'Nivel 29',
    xp: 99,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>Object.keys(obj)</code> devuelve un array con las claves de un objeto, <code>Object.values(obj)</code> devuelve un array con sus valores.',
        '<code>Object.entries(obj)</code> devuelve un array de pares <code>[clave, valor]</code>, muy útil para recorrer un objeto con <code>forEach</code> o <code>for...of</code>.'
      ],
      code:
        '<span class="tok-kw">const</span> persona = { nombre: <span class="tok-string">"Ana"</span>, edad: <span class="tok-num">20</span> };\n' +
        'console.log(Object.keys(persona)); <span class="tok-comment">// ["nombre", "edad"]</span>'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice el resultado de cada método.',
      variant: 'console',
      questions: [
        { code: 'const persona = { nombre: "Ana", edad: 20 };\nconsole.log(Object.keys(persona));', prompt: '¿Qué imprime la consola?', options: ['["nombre", "edad"]', '["Ana", 20]', '{nombre: "Ana", edad: 20}', 'undefined'], answer: '["nombre", "edad"]' },
        { code: 'const persona = { nombre: "Ana", edad: 20 };\nconsole.log(Object.values(persona));', prompt: '¿Qué imprime la consola?', options: ['["Ana", 20]', '["nombre", "edad"]', '[Ana, 20]', 'undefined'], answer: '["Ana", 20]' },
        { code: 'const punto = { x: 1, y: 2 };\nconsole.log(Object.keys(punto).length);', prompt: '¿Qué imprime la consola?', options: ['2', '1', '0', 'undefined'], answer: '2' },
        { code: 'const producto = { nombre: "Mesa", precio: 100 };\nconsole.log(Object.entries(producto)[0]);', prompt: '¿Qué imprime la consola?', options: ['["nombre", "Mesa"]', '["precio", 100]', '"nombre"', 'undefined'], answer: '["nombre", "Mesa"]' }
      ]
    }
  },
  {
    id: 'js-30',
    title: 'JSON: stringify y parse',
    subtitle: 'Nivel 30',
    xp: 101,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>JSON.stringify(obj)</code> convierte un objeto o array de JavaScript en un texto con formato JSON, sin espacios extra por defecto.',
        '<code>JSON.parse(texto)</code> hace lo contrario: convierte un texto JSON en un objeto o array de JavaScript real, que ya puedes usar con notación de punto.'
      ],
      code:
        '<span class="tok-kw">const</span> obj = { nombre: <span class="tok-string">"Ana"</span> };\n' +
        '<span class="tok-kw">const</span> texto = JSON.stringify(obj);\n' +
        'console.log(texto); <span class="tok-comment">// {"nombre":"Ana"}</span>'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice el resultado de cada conversión.',
      variant: 'console',
      questions: [
        { code: 'const obj = { nombre: "Ana", edad: 20 };\nconsole.log(JSON.stringify(obj));', prompt: '¿Qué imprime la consola?', options: ['{"nombre":"Ana","edad":20}', '{nombre: "Ana", edad: 20}', '{"nombre": "Ana", "edad": 20}', 'undefined'], answer: '{"nombre":"Ana","edad":20}' },
        { code: 'const texto = \'{"a":1,"b":2}\';\nconst obj = JSON.parse(texto);\nconsole.log(obj.b);', prompt: '¿Qué imprime la consola?', options: ['2', '"2"', 'undefined', 'NaN'], answer: '2' },
        { code: 'const arr = [1, 2, 3];\nconsole.log(JSON.stringify(arr));', prompt: '¿Qué imprime la consola?', options: ['[1,2,3]', '[1, 2, 3]', '"1,2,3"', 'undefined'], answer: '[1,2,3]' },
        { code: 'console.log(typeof JSON.stringify({ a: 1 }));', prompt: '¿Qué imprime la consola?', options: ['"string"', '"object"', '"json"', 'undefined'], answer: '"string"' }
      ]
    }
  },
  {
    id: 'js-31',
    title: 'Manejo de errores: try/catch',
    subtitle: 'Nivel 31',
    xp: 103,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El bloque <code>try/catch</code> permite ejecutar código que podría fallar sin que el programa entero se detenga: si algo falla dentro de <code>try</code>, se ejecuta el <code>catch</code>.',
        'Con <code>throw new Error("mensaje")</code> podemos lanzar nuestros propios errores, y <code>finally</code> ejecuta código pase lo que pase, haya error o no.'
      ],
      code:
        '<span class="tok-kw">try</span> {\n' +
        '  <span class="tok-kw">throw new</span> Error(<span class="tok-string">"Algo salió mal"</span>);\n' +
        '} <span class="tok-kw">catch</span> (error) {\n' +
        '  console.log(error.message);\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'try {\n  throw new Error("Algo salió mal");\n} catch (error) {\n  console.log(error.message);\n}', prompt: '¿Qué se imprime?', options: ['Algo salió mal', 'Error', 'undefined', 'El programa se detiene'], answer: 'Algo salió mal' },
        { code: 'try {\n  console.log("Intentando");\n  console.log(numeroNoDefinido);\n} catch (error) {\n  console.log("Hubo un error");\n}', prompt: '¿Qué se imprime, en orden?', options: ['Intentando y luego Hubo un error', 'Solo Intentando', 'Solo Hubo un error', 'El programa se detiene sin imprimir nada'], answer: 'Intentando y luego Hubo un error' },
        { code: 'function dividir(a, b) {\n  if (b === 0) {\n    throw new Error("No se puede dividir por cero");\n  }\n  return a / b;\n}\ntry {\n  console.log(dividir(10, 0));\n} catch (error) {\n  console.log("Error: " + error.message);\n}', prompt: '¿Qué se imprime?', options: ['Error: No se puede dividir por cero', 'Infinity', 'NaN', '10'], answer: 'Error: No se puede dividir por cero' },
        { code: 'try {\n  console.log("A");\n} finally {\n  console.log("B");\n}', prompt: '¿Qué se imprime, en orden?', options: ['A y luego B', 'Solo A', 'Solo B', 'B y luego A'], answer: 'A y luego B' }
      ]
    }
  },
  {
    id: 'js-32',
    title: 'Clases: constructor y métodos',
    subtitle: 'Nivel 32',
    xp: 105,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una clase es una plantilla para crear objetos con la misma estructura. El <code>constructor</code> se ejecuta al crear una instancia con <code>new</code>, e inicializa sus propiedades con <code>this</code>.',
        'Dentro de una clase también se definen métodos, funciones que pueden usar y modificar las propiedades del objeto a través de <code>this</code>.'
      ],
      code:
        '<span class="tok-kw">class</span> Persona {\n' +
        '  constructor(nombre) {\n' +
        '    <span class="tok-kw">this</span>.nombre = nombre;\n' +
        '  }\n' +
        '  saludar() {\n' +
        '    <span class="tok-kw">return</span> `Hola, soy ${<span class="tok-kw">this</span>.nombre}`;\n' +
        '  }\n' +
        '}\n' +
        '<span class="tok-kw">const</span> ana = <span class="tok-kw">new</span> Persona(<span class="tok-string">"Ana"</span>);'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice el resultado de cada clase.',
      variant: 'console',
      questions: [
        { code: 'class Persona {\n  constructor(nombre) {\n    this.nombre = nombre;\n  }\n  saludar() {\n    return `Hola, soy ${this.nombre}`;\n  }\n}\nconst ana = new Persona("Ana");\nconsole.log(ana.saludar());', prompt: '¿Qué imprime la consola?', options: ['"Hola, soy Ana"', '"Hola, soy undefined"', 'undefined', 'Error'], answer: '"Hola, soy Ana"' },
        { code: 'class Contador {\n  constructor() {\n    this.valor = 0;\n  }\n  incrementar() {\n    this.valor++;\n  }\n}\nconst c = new Contador();\nc.incrementar();\nc.incrementar();\nconsole.log(c.valor);', prompt: '¿Qué imprime la consola?', options: ['2', '0', '1', 'undefined'], answer: '2' },
        { code: 'class Producto {\n  constructor(nombre, precio) {\n    this.nombre = nombre;\n    this.precio = precio;\n  }\n}\nconst p1 = new Producto("Mesa", 100);\nconsole.log(typeof p1);', prompt: '¿Qué imprime la consola?', options: ['"object"', '"Producto"', '"function"', '"class"'], answer: '"object"' },
        { code: 'class Animal {\n  constructor(nombre) {\n    this.nombre = nombre;\n  }\n}\nconst perro = new Animal("Rex");\nconst gato = new Animal("Rex");\nconsole.log(perro === gato);', prompt: '¿Qué imprime la consola?', options: ['false', 'true', 'undefined', 'Error'], answer: 'false' }
      ]
    }
  },
  {
    id: 'js-33',
    title: 'Herencia con extends',
    subtitle: 'Nivel 33',
    xp: 108,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Con <code>extends</code>, una clase puede heredar propiedades y métodos de otra clase, evitando repetir código entre clases parecidas.',
        'Dentro del constructor de la clase hija, <code>super(...)</code> llama al constructor de la clase padre para inicializar lo que ella necesita antes de añadir lo propio.'
      ],
      code:
        '<span class="tok-kw">class</span> Animal {\n' +
        '  constructor(nombre) { <span class="tok-kw">this</span>.nombre = nombre; }\n' +
        '}\n' +
        '<span class="tok-kw">class</span> Perro <span class="tok-kw">extends</span> Animal {\n' +
        '  ladrar() { console.log(<span class="tok-kw">this</span>.nombre + <span class="tok-string">" dice: ¡Guau!"</span>); }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas conceptuales sobre la herencia de clases.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué hace la palabra clave extends en una clase?', options: ['Permite que una clase herede propiedades y métodos de otra clase', 'Permite crear una copia exacta de una clase', 'Convierte una clase en una función', 'Elimina los métodos de la clase padre'], answer: 'Permite que una clase herede propiedades y métodos de otra clase' },
        { prompt: '¿Para qué se usa super() dentro del constructor de una clase hija?', options: ['Para llamar al constructor de la clase padre y ejecutar su inicialización', 'Para eliminar la clase padre', 'Para crear una nueva instancia global', 'Es opcional y nunca es necesario'], answer: 'Para llamar al constructor de la clase padre y ejecutar su inicialización' },
        { prompt: 'Si la clase Perro extiende de Animal, ¿qué puede hacer un objeto de tipo Perro?', options: ['Usar sus propios métodos y también los heredados de Animal', 'Solo usar los métodos de Animal, no los suyos propios', 'Nada, extends no afecta a los objetos', 'Convertirse automáticamente en Animal'], answer: 'Usar sus propios métodos y también los heredados de Animal' },
        { prompt: '¿Qué ocurre si una clase hija define un método con el mismo nombre que uno de la clase padre?', options: ['El método de la clase hija sobrescribe (override) al de la clase padre', 'Se produce un error automáticamente', 'Ambos métodos se ejecutan siempre juntos', 'JavaScript ignora el método de la clase hija'], answer: 'El método de la clase hija sobrescribe (override) al de la clase padre' }
      ]
    }
  },
  {
    id: 'js-34',
    title: 'Closures: funciones que recuerdan su entorno',
    subtitle: 'Nivel 34',
    xp: 111,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una <em>closure</em> es una función que "recuerda" las variables del entorno donde fue creada, incluso después de que ese entorno haya terminado de ejecutarse.',
        'Se usan mucho para crear variables privadas: una variable declarada dentro de una función solo es accesible desde las funciones internas que la usan, no desde fuera.'
      ],
      code:
        '<span class="tok-kw">function</span> crearContador() {\n' +
        '  <span class="tok-kw">let</span> valor = <span class="tok-num">0</span>;\n' +
        '  <span class="tok-kw">return</span> <span class="tok-kw">function</span>() {\n' +
        '    valor++;\n' +
        '    <span class="tok-kw">return</span> valor;\n' +
        '  };\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas conceptuales sobre las closures.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué es una closure en JavaScript?', options: ['Una función que recuerda las variables del entorno donde fue creada, incluso después de que ese entorno haya terminado', 'Una función que no puede recibir parámetros', 'Un tipo especial de bucle', 'Una forma de declarar variables globales'], answer: 'Una función que recuerda las variables del entorno donde fue creada, incluso después de que ese entorno haya terminado' },
        { prompt: '¿Cuál es un uso común de las closures?', options: ['Crear variables privadas que no se pueden modificar desde fuera de una función', 'Hacer que un bucle se repita infinitamente', 'Eliminar la necesidad de usar funciones', 'Convertir un array en un objeto'], answer: 'Crear variables privadas que no se pueden modificar desde fuera de una función' },
        { prompt: 'Si una función interna usa una variable declarada en la función externa que la contiene, ¿qué se forma?', options: ['Una closure', 'Un error de sintaxis', 'Una variable global automática', 'Un bucle infinito'], answer: 'Una closure' },
        { prompt: '¿Por qué las closures son posibles en JavaScript?', options: ['Porque las funciones mantienen una referencia al ámbito (scope) en el que fueron definidas', 'Porque todas las variables son siempre globales', 'Porque JavaScript copia el código de la función cada vez que se llama', 'Porque los navegadores lo activan manualmente'], answer: 'Porque las funciones mantienen una referencia al ámbito (scope) en el que fueron definidas' }
      ]
    }
  },
  {
    id: 'js-35',
    title: 'Callbacks: funciones como argumentos',
    subtitle: 'Nivel 35',
    xp: 115,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un <em>callback</em> es una función que se pasa como argumento a otra función, para que esta la ejecute en el momento adecuado. Ya los usamos en <code>.map()</code>, <code>.filter()</code> o <code>addEventListener()</code>.',
        'Los callbacks permiten personalizar el comportamiento de una función sin modificar su código: la función "avisa" con una llamada cuando le corresponde actuar.'
      ],
      code:
        '<span class="tok-kw">function</span> procesar(numero, callback) {\n' +
        '  <span class="tok-kw">return</span> callback(numero);\n' +
        '}\n' +
        'console.log(procesar(<span class="tok-num">5</span>, n =&gt; n * <span class="tok-num">3</span>));'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'function procesar(numero, callback) {\n  return callback(numero);\n}\nconsole.log(procesar(5, n => n * 3));', prompt: '¿Qué imprime la consola?', options: ['15', '5', '3', 'undefined'], answer: '15' },
        { code: 'function saludar(nombre, callback) {\n  console.log("Hola " + nombre);\n  callback();\n}\nsaludar("Ana", () => console.log("Callback ejecutado"));', prompt: '¿Qué se imprime, en orden?', options: ['Hola Ana y luego Callback ejecutado', 'Solo Hola Ana', 'Solo Callback ejecutado', 'Callback ejecutado y luego Hola Ana'], answer: 'Hola Ana y luego Callback ejecutado' },
        { code: 'const numeros = [1, 2, 3];\nnumeros.forEach(function(n) {\n  console.log(n * n);\n});', prompt: '¿Cuántas veces se ejecuta la función callback pasada a forEach?', options: ['3', '1', '9', '0'], answer: '3' },
        { code: 'function repetir(veces, callback) {\n  for (let i = 0; i < veces; i++) {\n    callback(i);\n  }\n}\nlet total = 0;\nrepetir(4, (i) => { total += i; });\nconsole.log(total);', prompt: '¿Qué imprime la consola?', options: ['6', '4', '10', '0'], answer: '6' }
      ]
    }
  },
  {
    id: 'js-36',
    title: 'Promesas: resolve y reject',
    subtitle: 'Nivel 36',
    xp: 118,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una <code>Promise</code> es un objeto que representa un valor que estará disponible ahora, más tarde o nunca: es el resultado de una operación asíncrona, como pedir datos a un servidor.',
        'Una promesa puede estar <strong>pendiente</strong>, <strong>cumplida</strong> (se llamó a <code>resolve</code>) o <strong>rechazada</strong> (se llamó a <code>reject</code>). Con <code>.then()</code> reaccionamos al éxito, y con <code>.catch()</code> al error.'
      ],
      code:
        '<span class="tok-kw">const</span> promesa = <span class="tok-kw">new</span> Promise((resolve, reject) =&gt; {\n' +
        '  resolve(<span class="tok-string">"¡Listo!"</span>);\n' +
        '});\n' +
        'promesa.then(valor =&gt; console.log(valor));'
    },
    exercise: {
      instructions: 'Responde estas preguntas conceptuales sobre las promesas.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué es una Promise en JavaScript?', options: ['Un objeto que representa un valor que estará disponible ahora, más tarde o nunca (resultado de una operación asíncrona)', 'Una función que se ejecuta inmediatamente y nunca falla', 'Un tipo de bucle especial', 'Un array de valores futuros'], answer: 'Un objeto que representa un valor que estará disponible ahora, más tarde o nunca (resultado de una operación asíncrona)' },
        { prompt: '¿Qué estados puede tener una Promise?', options: ['Pendiente, cumplida (resolved) o rechazada (rejected)', 'Solo verdadero o falso', 'Activa o inactiva', 'Iniciada, pausada o detenida'], answer: 'Pendiente, cumplida (resolved) o rechazada (rejected)' },
        { prompt: '¿Qué hace la función resolve() dentro de una Promise?', options: ['Marca la promesa como cumplida y entrega el valor resultante', 'Cancela la promesa', 'Convierte la promesa en un array', 'Detiene la ejecución del programa'], answer: 'Marca la promesa como cumplida y entrega el valor resultante' },
        { prompt: '¿Con qué método se maneja el resultado exitoso de una Promise (además de async/await)?', options: ['.then()', '.finally() únicamente', '.catch() únicamente', 'No se puede manejar el resultado'], answer: '.then()' }
      ]
    }
  },
  {
    id: 'js-37',
    title: 'Async/await',
    subtitle: 'Nivel 37',
    xp: 121,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>async/await</code> es una forma más cómoda de trabajar con promesas, escribiendo código asíncrono con apariencia síncrona. Una función <code>async</code> siempre devuelve una Promise.',
        'La palabra <code>await</code> pausa la ejecución de esa función hasta que la Promise se resuelva, y solo puede usarse dentro de una función <code>async</code>.'
      ],
      code:
        '<span class="tok-kw">async function</span> obtenerDatos() {\n' +
        '  <span class="tok-kw">try</span> {\n' +
        '    <span class="tok-kw">const</span> respuesta = <span class="tok-kw">await</span> fetch(<span class="tok-string">"/api/datos"</span>);\n' +
        '    <span class="tok-kw">const</span> datos = <span class="tok-kw">await</span> respuesta.json();\n' +
        '    console.log(datos);\n' +
        '  } <span class="tok-kw">catch</span> (error) {\n' +
        '    console.log(<span class="tok-string">"Error al obtener datos"</span>);\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas conceptuales sobre async/await.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué hace la palabra clave await?', options: ['Pausa la ejecución de la función async hasta que la Promise se resuelva', 'Detiene el programa completo para siempre', 'Convierte una función en síncrona para todo el archivo', 'Elimina la necesidad de usar Promises en cualquier parte'], answer: 'Pausa la ejecución de la función async hasta que la Promise se resuelva' },
        { prompt: '¿Dónde se puede usar la palabra clave await?', options: ['Solo dentro de una función declarada como async', 'En cualquier parte del código sin restricciones', 'Solo dentro de un bucle for', 'Solo en la primera línea del archivo'], answer: 'Solo dentro de una función declarada como async' },
        { prompt: '¿Qué devuelve siempre una función declarada como async?', options: ['Una Promise', 'Un array', 'Un booleano', 'undefined siempre'], answer: 'Una Promise' },
        { prompt: '¿Cómo se maneja un error dentro de una función async que usa await?', options: ['Con un bloque try/catch alrededor del await', 'Los errores nunca ocurren en funciones async', 'Con un bucle while especial', 'No es posible manejar errores en async/await'], answer: 'Con un bloque try/catch alrededor del await' }
      ]
    }
  },
  {
    id: 'js-38',
    title: 'Fetch API: peticiones HTTP',
    subtitle: 'Nivel 38',
    xp: 124,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La función <code>fetch()</code> permite hacer peticiones HTTP desde JavaScript para obtener datos de un servidor o una API, sin recargar la página.',
        '<code>fetch()</code> devuelve una Promise que se resuelve con la respuesta; para convertir el cuerpo de la respuesta en un objeto de JavaScript usable, se suele llamar a <code>.json()</code>.'
      ],
      code:
        'fetch(<span class="tok-string">"/api/usuarios"</span>)\n' +
        '  .then(respuesta =&gt; respuesta.json())\n' +
        '  .then(datos =&gt; console.log(datos))\n' +
        '  .catch(error =&gt; console.log(<span class="tok-string">"Error de red"</span>));'
    },
    exercise: {
      instructions: 'Responde estas preguntas conceptuales sobre la Fetch API.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué se usa la función fetch() en JavaScript?', options: ['Para hacer peticiones HTTP y obtener datos de un servidor o API', 'Para declarar variables globales', 'Para crear elementos del DOM', 'Para definir clases'], answer: 'Para hacer peticiones HTTP y obtener datos de un servidor o API' },
        { prompt: '¿Qué devuelve la función fetch()?', options: ['Una Promise que se resuelve con la respuesta de la petición', 'El dato directamente, sin esperar', 'Un array vacío siempre', 'Un número que indica el estado HTTP'], answer: 'Una Promise que se resuelve con la respuesta de la petición' },
        { prompt: 'Al recibir la respuesta de un fetch a una API que devuelve JSON, ¿qué método se suele usar para convertirla en un objeto de JavaScript usable?', options: ['.json()', '.text() únicamente', '.parse()', '.toObject()'], answer: '.json()' },
        { prompt: '¿Por qué es recomendable usar try/catch (o .catch()) junto con fetch()?', options: ['Porque la petición puede fallar (sin conexión, servidor caído, etc.) y hay que manejar ese error', 'Porque fetch() nunca funciona sin ellos', 'Porque es obligatorio por sintaxis', 'Porque convierte la petición en síncrona'], answer: 'Porque la petición puede fallar (sin conexión, servidor caído, etc.) y hay que manejar ese error' }
      ]
    }
  },
  {
    id: 'js-39',
    title: 'Delegación de eventos en el DOM',
    subtitle: 'Nivel 39',
    xp: 127,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La delegación de eventos consiste en poner un único <code>addEventListener</code> en un elemento padre, en lugar de uno en cada hijo. Dentro del evento, <code>event.target</code> indica el elemento exacto donde ocurrió el clic.',
        'Esta técnica funciona incluso con elementos añadidos dinámicamente después, porque el listener sigue estando en el padre, que ya existía cuando se registró.'
      ],
      code:
        'lista.addEventListener(<span class="tok-string">"click"</span>, (event) =&gt; {\n' +
        '  <span class="tok-kw">if</span> (event.target.tagName === <span class="tok-string">"LI"</span>) {\n' +
        '    console.log(event.target.textContent);\n' +
        '  }\n' +
        '});'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código sobre delegación de eventos.',
      variant: 'code',
      questions: [
        { code: 'lista.addEventListener("click", (event) => {\n  console.log(event.target.tagName);\n});', prompt: 'Si el usuario hace clic en un &lt;li&gt; dentro de "lista", ¿qué representa event.target?', options: ['El elemento <li> exacto donde ocurrió el clic', 'Siempre el elemento lista', 'El elemento <body>', 'undefined'], answer: 'El elemento <li> exacto donde ocurrió el clic' },
        { code: 'document.querySelectorAll("button").forEach(btn => {\n  btn.addEventListener("click", manejarClic);\n});', prompt: '¿Qué ventaja tiene la delegación de eventos (un solo listener en el padre) frente a este código, que añade un listener a cada botón?', options: ['Funciona también con botones añadidos dinámicamente después, sin tener que volver a añadir listeners', 'Es la única forma de que los clics funcionen', 'Hace que los botones cambien de color automáticamente', 'Elimina la necesidad de usar addEventListener'], answer: 'Funciona también con botones añadidos dinámicamente después, sin tener que volver a añadir listeners' },
        { code: 'contenedor.addEventListener("click", (event) => {\n  if (event.target.matches(".borrar")) {\n    event.target.closest("li").remove();\n  }\n});', prompt: "¿Qué hace event.target.closest('li') en este código?", options: ['Busca el <li> ancestro más cercano al elemento donde se hizo clic', 'Crea un nuevo elemento <li>', 'Cuenta cuántos <li> hay en el documento', 'Elimina todos los <li> del documento'], answer: 'Busca el <li> ancestro más cercano al elemento donde se hizo clic' },
        { code: 'lista.addEventListener("click", (event) => {\n  console.log("Clic en la lista");\n});', prompt: 'Si "lista" tiene 10 elementos &lt;li&gt; dentro y el usuario hace clic en cualquiera de ellos, ¿cuántos listeners de clic hay activos en total con delegación de eventos?', options: ['1 (solo el que está en lista)', '10 (uno por cada li)', '0, la delegación no usa listeners', '11'], answer: '1 (solo el que está en lista)' }
      ]
    }
  },
  {
    id: 'js-40',
    title: 'Temporizadores: setTimeout y setInterval',
    subtitle: 'Nivel 40',
    xp: 130,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>setTimeout(funcion, ms)</code> ejecuta una función una sola vez, después de esperar los milisegundos indicados. <code>setInterval(funcion, ms)</code> la repite indefinidamente cada cierto tiempo.',
        'Ambos son asíncronos: el código que viene después de ellos se ejecuta primero, sin esperar. <code>clearInterval(id)</code> detiene un <code>setInterval</code> que ya no queremos que siga repitiéndose.'
      ],
      code:
        'console.log(<span class="tok-string">"A"</span>);\n' +
        'setTimeout(() =&gt; {\n' +
        '  console.log(<span class="tok-string">"B"</span>);\n' +
        '}, <span class="tok-num">1000</span>);\n' +
        'console.log(<span class="tok-string">"C"</span>); <span class="tok-comment">// orden real: A, C, B</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código sobre temporizadores.',
      variant: 'code',
      questions: [
        { code: 'console.log("A");\nsetTimeout(() => {\n  console.log("B");\n}, 1000);\nconsole.log("C");', prompt: '¿En qué orden se imprimen A, B y C?', options: ['A, C, B', 'A, B, C', 'B, A, C', 'C, B, A'], answer: 'A, C, B' },
        { code: 'let contador = 0;\nconst intervalo = setInterval(() => {\n  contador++;\n  if (contador === 3) {\n    clearInterval(intervalo);\n  }\n}, 500);', prompt: '¿Qué hace clearInterval(intervalo) en este código?', options: ['Detiene la repetición del setInterval para que no se ejecute más', 'Reinicia el contador a 0', 'Ejecuta el intervalo inmediatamente una vez más', 'Elimina la variable contador'], answer: 'Detiene la repetición del setInterval para que no se ejecute más' },
        { code: 'setTimeout(() => {\n  console.log("Una vez");\n}, 0);', prompt: '¿Cuántas veces se ejecuta la función dentro de setTimeout, incluso con un retraso de 0 milisegundos?', options: ['1 vez', '0 veces, nunca se ejecuta', 'Infinitas veces', 'Depende del navegador, puede variar entre 1 y 10'], answer: '1 vez' },
        { code: 'console.log("Inicio");\nsetTimeout(() => console.log("Timeout"), 100);\nconsole.log("Fin");', prompt: "¿Qué se imprime primero: 'Fin' o 'Timeout'?", options: ['"Fin", porque el código síncrono se ejecuta antes que el temporizador', '"Timeout", porque siempre se ejecuta antes', 'Ambos al mismo tiempo', 'Ninguno, hay un error'], answer: '"Fin", porque el código síncrono se ejecuta antes que el temporizador' }
      ]
    }
  },
  {
    id: 'js-41',
    title: 'Local Storage desde JavaScript',
    subtitle: 'Nivel 41',
    xp: 133,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>localStorage</code> permite guardar datos en el navegador que persisten aunque se cierre la pestaña. <code>localStorage.setItem(clave, valor)</code> guarda un dato, y <code>localStorage.getItem(clave)</code> lo recupera.',
        'Importante: <code>localStorage</code> solo guarda <strong>strings</strong>. Si guardas un número, al recuperarlo será texto; y si la clave no existe, <code>getItem</code> devuelve <code>null</code>.'
      ],
      code:
        'localStorage.setItem(<span class="tok-string">"nombre"</span>, <span class="tok-string">"Ana"</span>);\n' +
        'console.log(localStorage.getItem(<span class="tok-string">"nombre"</span>));'
    },
    exercise: {
      instructions: 'Resuelve el desafío en la consola simulada: predice el resultado de cada operación.',
      variant: 'console',
      questions: [
        { code: 'localStorage.setItem("nombre", "Ana");\nconsole.log(localStorage.getItem("nombre"));', prompt: '¿Qué imprime la consola?', options: ['"Ana"', 'undefined', 'null', '"nombre"'], answer: '"Ana"' },
        { code: 'localStorage.setItem("edad", 25);\nconsole.log(typeof localStorage.getItem("edad"));', prompt: '¿Qué imprime la consola?', options: ['"string"', '"number"', '"object"', '"undefined"'], answer: '"string"' },
        { code: 'console.log(localStorage.getItem("noExiste"));', prompt: '¿Qué imprime la consola?', options: ['null', 'undefined', '""', 'Error'], answer: 'null' },
        { code: 'localStorage.setItem("clave", "valor");\nlocalStorage.removeItem("clave");\nconsole.log(localStorage.getItem("clave"));', prompt: '¿Qué imprime la consola?', options: ['null', '"valor"', 'undefined', 'Error'], answer: 'null' }
      ]
    }
  },
    {
    id: 'js-42',
    title: 'Renderizar tarjetas de proyecto dinámicamente',
    subtitle: 'Nivel 42',
    xp: 136,
    type: 'quiz',
    theory: {
      paragraphs: [
        'En vez de escribir cada tarjeta de proyecto a mano en el HTML, es mejor guardar los proyectos como un array de objetos en JavaScript y generar el HTML dinámicamente con <code>map()</code> y <code>join("")</code>. Así, agregar un proyecto nuevo es solo agregar un objeto al array.',
        'Los <em>template literals</em> (con backticks) hacen que insertar variables dentro del HTML generado sea mucho más legible que concatenar strings con <code>+</code>.'
      ],
      code:
        '<span class="tok-kw">const</span> proyectos = [\n' +
        '  { titulo: <span class="tok-string">\'Portafolio\'</span>, descripcion: <span class="tok-string">\'Mi sitio personal\'</span> }\n' +
        '];\n' +
        'document.querySelector(<span class="tok-string">\'#proyectos .grid\'</span>).innerHTML = proyectos\n' +
        '  .map(p =&gt; <span class="tok-string">`&lt;article class="tarjeta-proyecto"&gt;&lt;h3&gt;${p.titulo}&lt;/h3&gt;&lt;/article&gt;`</span>)\n' +
        '  .join(<span class="tok-string">\'\'</span>);'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'const proyectos = [{ titulo: \'A\' }, { titulo: \'B\' }];\nconst html = proyectos.map(p =&gt; `&lt;h3&gt;${p.titulo}&lt;/h3&gt;`).join(\'\');\nconsole.log(html);', prompt: '¿Qué imprime la consola?', options: ['<h3>A</h3><h3>B</h3>', '<h3>A</h3>, <h3>B</h3>', 'A, B', 'undefined'], answer: '<h3>A</h3><h3>B</h3>' },
        { code: 'const proyectos = [];\nconst html = proyectos.map(p =&gt; p.titulo).join(\'\');\nconsole.log(html.length);', prompt: '¿Qué imprime la consola si el array proyectos está vacío?', options: ['0', 'undefined', 'null', 'Error'], answer: '0' },
        { code: 'const p = { titulo: \'Blog\', url: \'https://x.com\' };\nconsole.log(`&lt;a href="${p.url}"&gt;${p.titulo}&lt;/a&gt;`);', prompt: '¿Qué imprime la consola?', options: ['<a href="https://x.com">Blog</a>', '<a href="${p.url}">${p.titulo}</a>', 'undefined', 'Error de sintaxis'], answer: '<a href="https://x.com">Blog</a>' },
        { code: 'document.querySelector(\'#proyectos .grid\').innerHTML = [\'&lt;p&gt;Uno&lt;/p&gt;\', \'&lt;p&gt;Dos&lt;/p&gt;\'].join(\'\');', prompt: '¿Qué le pasa al contenido del elemento con clase .grid dentro de #proyectos?', options: ['Se reemplaza por dos párrafos: "Uno" y "Dos"', 'No pasa nada, join no afecta el DOM', 'Se produce un error porque innerHTML no acepta arrays', 'El elemento se elimina de la página'], answer: 'Se reemplaza por dos párrafos: "Uno" y "Dos"' }
      ]
    }
  },
    {
    id: 'js-43',
    title: 'Menú hamburguesa: alternar clases',
    subtitle: 'Nivel 43',
    xp: 140,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'El botón <code>.nav-toggle</code> necesita un event listener de tipo <code>\'click\'</code> que alterne (agregue o quite) la clase <code>is-open</code> en la lista del menú. <code>classList.toggle()</code> hace exactamente eso: si la clase está, la quita; si no está, la agrega.',
        'Guardar una referencia al menú (<code>document.querySelector(\'nav ul\')</code>) antes de agregar el listener evita tener que buscarlo en el DOM cada vez que se hace clic.'
      ],
      code:
        '<span class="tok-kw">const</span> menu = document.querySelector(<span class="tok-string">\'nav ul\'</span>);\n' +
        '<span class="tok-kw">const</span> toggle = document.querySelector(<span class="tok-string">\'.nav-toggle\'</span>);\n' +
        'toggle.addEventListener(<span class="tok-string">\'click\'</span>, () =&gt; {\n' +
        '  menu.classList.toggle(<span class="tok-string">\'is-open\'</span>);\n' +
        '});'
    },
    exercise: {
      instructions: 'Ordená las líneas para hacer que el botón hamburguesa abra y cierre el menú.',
      items: [
        { id: 'i1', code: 'const menu = document.querySelector(\'nav ul\');' },
        { id: 'i2', code: 'const toggle = document.querySelector(\'.nav-toggle\');' },
        { id: 'i3', code: 'toggle.addEventListener(\'click\', () =&gt; {' },
        { id: 'i4', code: '  menu.classList.toggle(\'is-open\');' },
        { id: 'i5', code: '});' }
      ],
      correctOrder: ['i1', 'i2', 'i3', 'i4', 'i5']
    }
  },
    {
    id: 'js-44',
    title: 'Scroll suave al hacer clic en el menú',
    subtitle: 'Nivel 44',
    xp: 144,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'Cuando el menú tiene enlaces como <code>&lt;a href="#proyectos"&gt;</code>, el navegador salta de golpe a esa sección. Para que el scroll sea suave, hay que interceptar el clic con <code>preventDefault()</code> y mover la vista manualmente con <code>scrollIntoView({ behavior: \'smooth\' })</code>.',
        '<code>document.querySelectorAll(\'nav a\')</code> selecciona todos los enlaces del menú, y <code>forEach</code> permite agregarles el mismo event listener a cada uno sin repetir código.'
      ],
      code:
        'document.querySelectorAll(<span class="tok-string">\'nav a\'</span>).forEach(link =&gt; {\n' +
        '  link.addEventListener(<span class="tok-string">\'click\'</span>, (e) =&gt; {\n' +
        '    e.preventDefault();\n' +
        '    <span class="tok-kw">const</span> destino = document.querySelector(link.getAttribute(<span class="tok-string">\'href\'</span>));\n' +
        '    destino.scrollIntoView({ behavior: <span class="tok-string">\'smooth\'</span> });\n' +
        '  });\n' +
        '});'
    },
    exercise: {
      instructions: 'Ordená las líneas para que los enlaces del menú hagan scroll suave hacia cada sección.',
      items: [
        { id: 'i1', code: 'document.querySelectorAll(\'nav a\').forEach(link =&gt; {' },
        { id: 'i2', code: '  link.addEventListener(\'click\', (e) =&gt; {' },
        { id: 'i3', code: '    e.preventDefault();' },
        { id: 'i4', code: '    const destino = document.querySelector(link.getAttribute(\'href\'));' },
        { id: 'i5', code: '    destino.scrollIntoView({ behavior: \'smooth\' });' },
        { id: 'i6', code: '  });\n});' }
      ],
      correctOrder: ['i1', 'i2', 'i3', 'i4', 'i5', 'i6']
    }
  },
  {
    id: 'js-45',
    title: 'Manipulación avanzada del DOM',
    subtitle: 'Nivel 45',
    xp: 148,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>document.createElement("tag")</code> crea un nuevo elemento en memoria, que todavía no se ve en la página hasta que lo añadamos con <code>.appendChild()</code>.',
        'Con <code>.remove()</code> eliminamos un elemento del DOM, y con <code>.contains()</code> podemos comprobar si un elemento forma parte del documento.'
      ],
      code:
        '<span class="tok-kw">const</span> li = document.createElement(<span class="tok-string">"li"</span>);\n' +
        'li.textContent = <span class="tok-string">"Nuevo elemento"</span>;\n' +
        'lista.appendChild(li);'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código sobre manipulación del DOM.',
      variant: 'code',
      questions: [
        { code: 'const parrafo = document.createElement("p");\nparrafo.textContent = "Hola";\ndocument.body.appendChild(parrafo);', prompt: '¿Qué efecto tiene este código?', options: ['Crea un nuevo párrafo con el texto "Hola" y lo añade al final del body', 'Modifica un párrafo que ya existía en la página', 'Elimina todos los párrafos del body', 'Crea un párrafo pero no lo muestra en la página'], answer: 'Crea un nuevo párrafo con el texto "Hola" y lo añade al final del body' },
        { code: 'const lista = document.querySelector("ul");\nfor (let i = 0; i < 3; i++) {\n  const li = document.createElement("li");\n  li.textContent = "Item " + i;\n  lista.appendChild(li);\n}', prompt: '¿Cuántos elementos &lt;li&gt; nuevos se añaden a la lista?', options: ['3', '2', '4', '0'], answer: '3' },
        { code: 'const elemento = document.querySelector("#viejo");\nelemento.remove();', prompt: '¿Qué hace el método .remove() en este código?', options: ['Elimina el elemento con id "viejo" del DOM', 'Solo lo oculta visualmente pero sigue en el DOM', 'Elimina todos los elementos de la página', 'Crea una copia del elemento'], answer: 'Elimina el elemento con id "viejo" del DOM' },
        { code: 'const div = document.createElement("div");\nconsole.log(document.body.contains(div));', prompt: '¿Qué imprime la consola?', options: ['false', 'true', 'undefined', 'Error'], answer: 'false' }
      ]
    }
  },
  {
    id: 'js-46',
    title: 'Formularios y validación',
    subtitle: 'Nivel 46',
    xp: 152,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Con <code>event.preventDefault()</code> evitamos que un formulario recargue la página al enviarse, para poder validarlo con JavaScript antes de procesarlo.',
        '<code>input.value</code> nos da el texto que el usuario ha escrito. Conviene combinarlo con <code>.trim()</code> para ignorar espacios, y con <code>Number()</code> si esperamos un valor numérico.'
      ],
      code:
        'formulario.addEventListener(<span class="tok-string">"submit"</span>, (event) =&gt; {\n' +
        '  event.preventDefault();\n' +
        '  <span class="tok-kw">if</span> (input.value.trim() === <span class="tok-string">""</span>) {\n' +
        '    console.log(<span class="tok-string">"Campo vacío"</span>);\n' +
        '  }\n' +
        '});'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código sobre formularios y validación.',
      variant: 'code',
      questions: [
        { code: 'formulario.addEventListener("submit", (event) => {\n  event.preventDefault();\n});', prompt: '¿Qué hace event.preventDefault() en el evento submit de un formulario?', options: ['Evita que la página se recargue al enviar el formulario', 'Elimina el formulario de la página', 'Envía el formulario dos veces', 'Cancela todos los eventos del documento'], answer: 'Evita que la página se recargue al enviar el formulario' },
        { code: 'const input = document.querySelector("#email");\nconsole.log(input.value);', prompt: '¿Qué representa input.value?', options: ['El texto que el usuario ha escrito actualmente en ese campo', 'El atributo placeholder del input', 'El tipo de input (text, email, etc.)', 'Siempre está vacío hasta que se envía el formulario'], answer: 'El texto que el usuario ha escrito actualmente en ese campo' },
        { code: 'formulario.addEventListener("submit", (event) => {\n  event.preventDefault();\n  if (input.value.trim() === "") {\n    console.log("El campo no puede estar vacío");\n    return;\n  }\n  console.log("Formulario enviado");\n});', prompt: 'Si el usuario deja el campo vacío (o solo con espacios) y envía el formulario, ¿qué se imprime?', options: ['El campo no puede estar vacío', 'Formulario enviado', 'Ambos mensajes', 'Ninguno'], answer: 'El campo no puede estar vacío' },
        { code: 'const edad = Number(inputEdad.value);\nif (edad < 18) {\n  console.log("Debes ser mayor de edad");\n} else {\n  console.log("Acceso permitido");\n}', prompt: 'Si inputEdad.value es el texto "15", ¿qué se imprime?', options: ['Debes ser mayor de edad', 'Acceso permitido', 'undefined', 'Error, no se puede comparar un string'], answer: 'Debes ser mayor de edad' }
      ]
    }
  },
    {
    id: 'js-47',
    title: 'Validar el formulario de contacto',
    subtitle: 'Nivel 47',
    xp: 156,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Antes de "enviar" el formulario de contacto, conviene validar en JavaScript que los campos no estén vacíos y que el correo tenga al menos un formato básico válido (por ejemplo, que contenga un <code>@</code>).',
        'Interceptar el evento <code>submit</code> del &lt;form&gt; con <code>preventDefault()</code> evita que la página se recargue, dándote tiempo para validar y mostrar mensajes de error antes de continuar.'
      ],
      code:
        'form.addEventListener(<span class="tok-string">\'submit\'</span>, (e) =&gt; {\n' +
        '  e.preventDefault();\n' +
        '  <span class="tok-kw">if</span> (!nombre.value || !email.value.includes(<span class="tok-string">\'@\'</span>)) {\n' +
        '    mostrarError(<span class="tok-string">\'Completa todos los campos correctamente.\'</span>);\n' +
        '    <span class="tok-kw">return</span>;\n' +
        '  }\n' +
        '  mostrarExito(<span class="tok-string">\'¡Mensaje enviado!\'</span>);\n' +
        '});'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'const email = \'ana@mail.com\';\nconsole.log(email.includes(\'@\'));', prompt: '¿Qué imprime la consola?', options: ['true', 'false', 'undefined', 'Error'], answer: 'true' },
        { code: 'function validar(nombre, email) {\n  if (!nombre || !email.includes(\'@\')) return false;\n  return true;\n}\nconsole.log(validar(\'\', \'ana@mail.com\'));', prompt: '¿Qué imprime la consola?', options: ['false', 'true', 'undefined', "''"], answer: 'false' },
        { code: 'form.addEventListener(\'submit\', (e) =&gt; {\n  e.preventDefault();\n  console.log(\'interceptado\');\n});', prompt: '¿Qué evita e.preventDefault() en este caso?', options: ['Que la página se recargue al enviar el formulario', 'Que el formulario se muestre en pantalla', 'Que el usuario pueda escribir en los campos', 'Que se dispare el evento submit'], answer: 'Que la página se recargue al enviar el formulario' },
        { code: 'const nombre = \'   \';\nconsole.log(Boolean(nombre));', prompt: '¿Qué imprime la consola? (pista: un string con solo espacios no está "vacío" para JavaScript)', options: ['true', 'false', 'undefined', 'Error'], answer: 'true' }
      ]
    }
  },
    {
    id: 'js-48',
    title: 'Modo oscuro con localStorage',
    subtitle: 'Nivel 48',
    xp: 160,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Alternar el modo oscuro/claro es simple: un botón agrega o quita la clase <code>tema-claro</code> del &lt;body&gt; con <code>classList.toggle()</code>. Pero para que la preferencia se recuerde entre visitas, hay que guardarla en <code>localStorage</code>.',
        'Al cargar la página conviene leer <code>localStorage.getItem(\'tema\')</code> y, si dice <code>\'claro\'</code>, aplicar la clase de inmediato — así evitás el "parpadeo" de un tema que cambia recién después de cargar.'
      ],
      code:
        'btnTema.addEventListener(<span class="tok-string">\'click\'</span>, () =&gt; {\n' +
        '  document.body.classList.toggle(<span class="tok-string">\'tema-claro\'</span>);\n' +
        '  <span class="tok-kw">const</span> tema = document.body.classList.contains(<span class="tok-string">\'tema-claro\'</span>) ? <span class="tok-string">\'claro\'</span> : <span class="tok-string">\'oscuro\'</span>;\n' +
        '  localStorage.setItem(<span class="tok-string">\'tema\'</span>, tema);\n' +
        '});\n' +
        '<span class="tok-kw">if</span> (localStorage.getItem(<span class="tok-string">\'tema\'</span>) === <span class="tok-string">\'claro\'</span>) {\n' +
        '  document.body.classList.add(<span class="tok-string">\'tema-claro\'</span>);\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: "localStorage.setItem('tema', 'claro');\nconsole.log(localStorage.getItem('tema'));", prompt: '¿Qué imprime la consola?', options: ["'claro'", 'null', 'undefined', "'oscuro'"], answer: "'claro'" },
        { code: "document.body.classList.toggle('tema-claro');\nconsole.log(document.body.classList.contains('tema-claro'));", prompt: 'Si body no tenía la clase tema-claro antes de este código, ¿qué imprime la consola?', options: ['true', 'false', 'undefined', 'Error'], answer: 'true' },
        { code: "const tema = document.body.classList.contains('tema-claro') ? 'claro' : 'oscuro';\nconsole.log(tema);", prompt: 'Si document.body NO tiene la clase tema-claro, ¿qué imprime la consola?', options: ["'oscuro'", "'claro'", 'undefined', 'false'], answer: "'oscuro'" },
        { prompt: '¿Por qué conviene leer localStorage.getItem(\'tema\') apenas carga la página, antes de mostrar el contenido?', options: ['Para aplicar el tema guardado antes de que el usuario vea un "parpadeo" de tema incorrecto', 'Porque localStorage solo funciona al inicio de la página', 'Porque classList.toggle() lo requiere obligatoriamente', 'No hay ninguna razón real, es solo una convención'], answer: 'Para aplicar el tema guardado antes de que el usuario vea un "parpadeo" de tema incorrecto' }
      ]
    }
  },
    {
    id: 'js-49',
    title: 'Animar al hacer scroll: IntersectionObserver',
    subtitle: 'Nivel 49',
    xp: 164,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Para que las secciones o tarjetas de tu portafolio aparezcan suavemente cuando el usuario llega a ellas al hacer scroll, <code>IntersectionObserver</code> es la herramienta ideal: observa un elemento y ejecuta una función cuando entra (o sale) de la pantalla, sin necesidad de escuchar el evento scroll manualmente.',
        'El callback del observer recibe una lista de "entradas"; <code>entrada.isIntersecting</code> indica si ese elemento está actualmente visible en pantalla.'
      ],
      code:
        '<span class="tok-kw">const</span> observer = <span class="tok-kw">new</span> IntersectionObserver((entradas) =&gt; {\n' +
        '  entradas.forEach(entrada =&gt; {\n' +
        '    <span class="tok-kw">if</span> (entrada.isIntersecting) {\n' +
        '      entrada.target.classList.add(<span class="tok-string">\'visible\'</span>);\n' +
        '    }\n' +
        '  });\n' +
        '});\n' +
        'document.querySelectorAll(<span class="tok-string">\'.tarjeta-proyecto\'</span>).forEach(tarjeta =&gt; observer.observe(tarjeta));'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: "const observer = new IntersectionObserver((entradas) =&gt; {\n  entradas.forEach(e =&gt; console.log(e.isIntersecting));\n});\nobserver.observe(document.querySelector('.tarjeta-proyecto'));", prompt: '¿Qué representa el valor que imprime e.isIntersecting?', options: ['Si el elemento observado está actualmente visible en la pantalla', 'El número de píxeles que scrolleó la página', 'La posición horizontal (X) del elemento', 'Si el elemento tiene la clase "visible"'], answer: 'Si el elemento observado está actualmente visible en la pantalla' },
        { code: "document.querySelectorAll('.tarjeta-proyecto').forEach(t =&gt; observer.observe(t));", prompt: '¿Qué hace este código?', options: ['Le dice al observer que vigile cada tarjeta de proyecto individualmente', 'Oculta todas las tarjetas de proyecto de la página', 'Elimina el observer de cada tarjeta', 'Cuenta cuántas tarjetas hay en la página'], answer: 'Le dice al observer que vigile cada tarjeta de proyecto individualmente' },
        { code: "if (entrada.isIntersecting) {\n  entrada.target.classList.add('visible');\n}", prompt: '¿Qué elemento recibe la clase "visible"?', options: ['entrada.target: el elemento que está siendo observado y entró en pantalla', 'Todos los elementos de la página', 'document.body únicamente', 'Ninguno, classList.add no afecta el DOM'], answer: 'entrada.target: el elemento que está siendo observado y entró en pantalla' },
        { prompt: '¿Cuál es la ventaja de IntersectionObserver frente a escuchar el evento "scroll" manualmente?', options: ['Es más eficiente porque el navegador solo avisa cuando el elemento realmente entra o sale de pantalla', 'Es la única forma de detectar el scroll que existe en JavaScript', 'Funciona sin necesidad de escribir nada de CSS', 'Reemplaza por completo a querySelectorAll'], answer: 'Es más eficiente porque el navegador solo avisa cuando el elemento realmente entra o sale de pantalla' }
      ]
    }
  },
    {
    id: 'js-50',
    title: 'Proyecto integrador: la interactividad de tu portafolio',
    subtitle: 'Nivel 50',
    xp: 170,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Llegaste al último nivel del módulo de JavaScript. Aquí combinamos varias piezas que ya construiste: renderizar proyectos dinámicamente, alternar el menú, validar el formulario y recordar el tema con localStorage — tal como se combinan en tu portafolio real.',
        'Este repaso final junta ideas de todo el módulo de JavaScript, aplicadas directamente a la interactividad de la página que armaste en HTML y CSS.'
      ],
      code:
        '<span class="tok-kw">const</span> proyectos = [{ titulo: <span class="tok-string">\'Portafolio\'</span> }];\n' +
        '<span class="tok-kw">const</span> html = proyectos.map(p =&gt; <span class="tok-string">`&lt;h3&gt;${p.titulo}&lt;/h3&gt;`</span>).join(<span class="tok-string">\'\'</span>);\n' +
        'console.log(html); <span class="tok-comment">// &lt;h3&gt;Portafolio&lt;/h3&gt;</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: "const proyectos = [{ titulo: 'Uno' }, { titulo: 'Dos' }, { titulo: 'Tres' }];\nconst html = proyectos.map(p =&gt; `&lt;h3&gt;${p.titulo}&lt;/h3&gt;`).join('');\nconsole.log(html.split('&lt;/h3&gt;').length - 1);", prompt: '¿Qué imprime la consola? (pista: cuántas veces aparece "&lt;/h3&gt;" en el resultado)', options: ['3', '2', '4', '0'], answer: '3' },
        { code: "const menu = { abierto: false };\nfunction toggleMenu() { menu.abierto = !menu.abierto; }\ntoggleMenu();\ntoggleMenu();\ntoggleMenu();\nconsole.log(menu.abierto);", prompt: '¿Qué imprime la consola después de llamar a toggleMenu() tres veces?', options: ['true', 'false', 'undefined', 'Error'], answer: 'true' },
        { code: "function validarContacto(nombre, email) {\n  if (!nombre.trim() || !email.includes('@')) return false;\n  return true;\n}\nconsole.log(validarContacto('Ana', 'ana@mail.com'), validarContacto('  ', 'ana@mail.com'));", prompt: '¿Qué imprime la consola?', options: ["'true false'", "'true true'", "'false false'", "'false true'"], answer: "'true false'" },
        { code: "localStorage.setItem('tema', 'oscuro');\nfunction cargarTema() {\n  return localStorage.getItem('tema') === 'claro' ? 'claro' : 'oscuro';\n}\nconsole.log(cargarTema());", prompt: '¿Qué imprime la consola?', options: ["'oscuro'", "'claro'", 'null', 'undefined'], answer: "'oscuro'" }
      ]
    }
  }
];
