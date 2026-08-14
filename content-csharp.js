/* ==========================================================================
   DevQuest — content-csharp.js
   Niveles del módulo C# (de principiante a avanzado).
   Cada nivel: { id, title, subtitle, xp, type, theory, exercise }
   ========================================================================== */

'use strict';

const CSHARP_LEVELS = [
  {
    id: 'csharp-1',
    title: 'Introducción a C#',
    subtitle: 'Nivel 1',
    xp: 50,
    type: 'quiz',
    theory: {
      paragraphs: [
        'C# es un lenguaje de programación creado por Microsoft, muy usado para aplicaciones de escritorio, videojuegos (con Unity) y aplicaciones web con .NET. A diferencia de JavaScript, C# es un lenguaje <strong>compilado</strong> y <strong>fuertemente tipado</strong>: cada variable tiene un tipo fijo desde que se declara.',
        'Todo programa en C# empieza en un método especial llamado <code>Main</code>, que vive dentro de una <code>class</code>. La instrucción <code>using</code> al principio del archivo importa funcionalidades de otras partes de .NET, como <code>System</code> para poder usar <code>Console</code>.'
      ],
      code:
        '<span class="tok-kw">using</span> System;\n\n' +
        '<span class="tok-kw">class</span> Programa {\n' +
        '  <span class="tok-kw">static</span> <span class="tok-kw">void</span> Main() {\n' +
        '    Console.WriteLine(<span class="tok-string">"Hola, DevQuest"</span>);\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre los fundamentos de C#.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué empresa creó el lenguaje C#?', options: ['Microsoft', 'Google', 'Apple', 'Oracle'], answer: 'Microsoft' },
        { prompt: '¿Qué método especial es el punto de entrada de un programa en C#?', options: ['Main', 'Start', 'Init', 'Run'], answer: 'Main' },
        { prompt: '¿Qué significa que C# sea "fuertemente tipado"?', options: ['Que cada variable tiene un tipo fijo desde que se declara', 'Que no se pueden usar números', 'Que solo funciona con texto', 'Que no necesita compilarse'], answer: 'Que cada variable tiene un tipo fijo desde que se declara' },
        { prompt: '¿Qué instrucción se usa para importar funcionalidades como Console?', options: ['using', 'import', 'include', 'require'], answer: 'using' }
      ]
    }
  },
  {
    id: 'csharp-2',
    title: 'Variables y tipos de datos',
    subtitle: 'Nivel 2',
    xp: 55,
    type: 'quiz',
    theory: {
      paragraphs: [
        'En C#, cada variable se declara indicando primero su <strong>tipo</strong> y luego su nombre: <code>int edad = 16;</code>. Los tipos más comunes son <code>int</code> (números enteros), <code>double</code> (decimales), <code>string</code> (texto) y <code>bool</code> (verdadero/falso).',
        'También existe <code>var</code>, que deja que el compilador deduzca el tipo automáticamente a partir del valor asignado, pero ese tipo queda fijado igualmente: no se puede cambiar después.'
      ],
      code:
        '<span class="tok-kw">int</span> edad = <span class="tok-num">16</span>;\n' +
        '<span class="tok-kw">double</span> altura = <span class="tok-num">1.75</span>;\n' +
        '<span class="tok-kw">string</span> nombre = <span class="tok-string">"Ana"</span>;\n' +
        '<span class="tok-kw">bool</span> activo = <span class="tok-kw">true</span>;'
    },
    exercise: {
      instructions: 'Resuelve el desafío: predice qué imprime cada bloque de código.',
      variant: 'code',
      questions: [
        { code: 'int edad = 15;\nedad = edad + 1;\nConsole.WriteLine(edad);', prompt: '¿Qué imprime la consola?', options: ['16', '15', '"15"', 'Error'], answer: '16' },
        { code: 'string nombre = "Ana";\nConsole.WriteLine(nombre.Length);', prompt: '¿Qué imprime la consola?', options: ['3', '"Ana"', '4', 'Error'], answer: '3' },
        { code: 'bool activo = true;\nConsole.WriteLine(activo);', prompt: '¿Qué imprime la consola?', options: ['True', 'true', '1', '"activo"'], answer: 'True' },
        { code: 'double precio = 9.5;\nConsole.WriteLine(precio + 0.5);', prompt: '¿Qué imprime la consola?', options: ['10', '9.55', '"10"', 'Error'], answer: '10' }
      ]
    }
  },
  {
    id: 'csharp-3',
    title: 'Operadores y expresiones',
    subtitle: 'Nivel 3',
    xp: 58,
    type: 'quiz',
    theory: {
      paragraphs: [
        'C# tiene los operadores aritméticos habituales (<code>+ - * / %</code>) y operadores de comparación (<code>== != &gt; &lt;</code>) que devuelven un <code>bool</code>.',
        'Ojo con la división entre enteros: <code>7 / 2</code> da <code>3</code> (se descarta la parte decimal) porque ambos operandos son <code>int</code>. Para obtener <code>3.5</code> hay que usar al menos un <code>double</code>, como en <code>7.0 / 2</code>.'
      ],
      code:
        '<span class="tok-kw">int</span> a = <span class="tok-num">7</span>;\n' +
        '<span class="tok-kw">int</span> b = <span class="tok-num">2</span>;\n' +
        'Console.WriteLine(a / b); <span class="tok-comment">// 3, división entera</span>\n' +
        'Console.WriteLine(a % b); <span class="tok-comment">// 1, resto de la división</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'int a = 7;\nint b = 2;\nConsole.WriteLine(a / b);', prompt: '¿Qué imprime la consola?', options: ['3', '3.5', '1', 'Error'], answer: '3' },
        { code: 'int a = 7;\nint b = 2;\nConsole.WriteLine(a % b);', prompt: '¿Qué imprime la consola?', options: ['1', '3', '0', '2'], answer: '1' },
        { code: 'double a = 7.0;\nint b = 2;\nConsole.WriteLine(a / b);', prompt: '¿Qué imprime la consola?', options: ['3.5', '3', '3.0', 'Error'], answer: '3.5' },
        { code: 'int x = 5;\nConsole.WriteLine(x > 3 && x < 10);', prompt: '¿Qué imprime la consola?', options: ['True', 'False', '5', 'Error'], answer: 'True' }
      ]
    }
  },
  {
    id: 'csharp-4',
    title: 'Entrada y salida por consola',
    subtitle: 'Nivel 4',
    xp: 60,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        '<code>Console.WriteLine()</code> imprime texto en la consola seguido de un salto de línea; <code>Console.Write()</code> hace lo mismo pero sin saltar de línea. Para leer lo que escribe el usuario se usa <code>Console.ReadLine()</code>, que siempre devuelve texto (<code>string</code>).',
        'Si necesitas ese texto como número, hay que convertirlo explícitamente, por ejemplo con <code>Convert.ToInt32()</code> o <code>int.Parse()</code>.'
      ],
      code:
        'Console.Write(<span class="tok-string">"Escribe tu nombre: "</span>);\n' +
        '<span class="tok-kw">string</span> nombre = Console.ReadLine();\n' +
        'Console.WriteLine(<span class="tok-string">"Hola, "</span> + nombre);'
    },
    exercise: {
      instructions: 'Completa el método correcto en cada línea.',
      blanks: [
        { id: 'b1', before: 'Console.', after: '("Bienvenido a DevQuest");', answer: 'WriteLine', options: ['WriteLine', 'Write', 'Print', 'Log'] },
        { id: 'b2', before: 'string nombre = Console.', after: '();', answer: 'ReadLine', options: ['ReadLine', 'Read', 'GetLine', 'Input'] },
        { id: 'b3', before: 'int edad = ', after: '.ToInt32(Console.ReadLine());', answer: 'Convert', options: ['Convert', 'Parse', 'Cast', 'ToNumber'] },
        { id: 'b4', before: 'Console.', after: '("Sin salto de línea");', answer: 'Write', options: ['Write', 'WriteLine', 'Print', 'Append'] }
      ]
    }
  },
  {
    id: 'csharp-5',
    title: 'Condicionales if / else',
    subtitle: 'Nivel 5',
    xp: 62,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los condicionales <code>if</code> / <code>else if</code> / <code>else</code> permiten ejecutar distintos bloques de código según una condición booleana, igual que en muchos otros lenguajes.',
        'A diferencia de JavaScript, en C# la condición del <code>if</code> debe ser exactamente un <code>bool</code> — no se puede poner un número o un texto directamente esperando que se "convierta" automáticamente.'
      ],
      code:
        '<span class="tok-kw">int</span> nota = <span class="tok-num">7</span>;\n' +
        '<span class="tok-kw">if</span> (nota &gt;= <span class="tok-num">6</span>) {\n' +
        '  Console.WriteLine(<span class="tok-string">"Aprobado"</span>);\n' +
        '} <span class="tok-kw">else</span> {\n' +
        '  Console.WriteLine(<span class="tok-string">"Reprobado"</span>);\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'int nota = 5;\nif (nota >= 6) {\n  Console.WriteLine("Aprobado");\n} else {\n  Console.WriteLine("Reprobado");\n}', prompt: '¿Qué se imprime?', options: ['Reprobado', 'Aprobado', 'undefined', 'Error'], answer: 'Reprobado' },
        { code: 'int edad = 20;\nif (edad < 13) {\n  Console.WriteLine("Niño");\n} else if (edad < 18) {\n  Console.WriteLine("Adolescente");\n} else {\n  Console.WriteLine("Adulto");\n}', prompt: '¿Qué se imprime?', options: ['Adulto', 'Adolescente', 'Niño', 'Error'], answer: 'Adulto' },
        { code: 'int x = 4;\nConsole.WriteLine(x % 2 == 0 ? "Par" : "Impar");', prompt: '¿Qué se imprime?', options: ['Par', 'Impar', '0', 'True'], answer: 'Par' },
        { code: 'bool esMayor = 15 > 20;\nConsole.WriteLine(esMayor);', prompt: '¿Qué se imprime?', options: ['False', 'True', '15', 'Error'], answer: 'False' }
      ]
    }
  },
  {
    id: 'csharp-6',
    title: 'Bucles for y while',
    subtitle: 'Nivel 6',
    xp: 65,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El bucle <code>for</code> repite un bloque un número determinado de veces, controlando en una sola línea el valor inicial, la condición de parada y el incremento: <code>for (int i = 0; i &lt; 5; i++)</code>.',
        'El bucle <code>while</code> repite mientras una condición sea verdadera, sin un contador integrado — hay que actualizar la variable de control dentro del propio bloque para evitar un bucle infinito.'
      ],
      code:
        '<span class="tok-kw">for</span> (<span class="tok-kw">int</span> i = <span class="tok-num">0</span>; i &lt; <span class="tok-num">3</span>; i++) {\n' +
        '  Console.WriteLine(i);\n' +
        '}\n' +
        '<span class="tok-comment">// Imprime: 0, 1, 2</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'for (int i = 0; i < 3; i++) {\n  Console.WriteLine(i);\n}', prompt: '¿Cuántas veces se ejecuta Console.WriteLine?', options: ['3', '2', '4', 'Infinitas'], answer: '3' },
        { code: 'int i = 0;\nwhile (i < 4) {\n  i++;\n}\nConsole.WriteLine(i);', prompt: '¿Qué imprime la consola al final?', options: ['4', '3', '0', 'Infinito'], answer: '4' },
        { code: 'int suma = 0;\nfor (int i = 1; i <= 3; i++) {\n  suma += i;\n}\nConsole.WriteLine(suma);', prompt: '¿Qué imprime la consola?', options: ['6', '3', '5', '0'], answer: '6' },
        { code: 'int i = 5;\ndo {\n  Console.WriteLine(i);\n  i++;\n} while (i < 5);', prompt: '¿Cuántas veces se ejecuta Console.WriteLine con do-while?', options: ['1', '0', '5', 'Infinitas'], answer: '1' }
      ]
    }
  }
,
  {
    id: 'csharp-7',
    title: 'Arrays',
    subtitle: 'Nivel 7',
    xp: 68,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un array (o arreglo) guarda varios valores del mismo tipo en una sola variable, con un tamaño fijo desde que se crea. Se declara con corchetes: <code>int[] numeros = new int[5];</code> o directamente con valores: <code>int[] numeros = {10, 20, 30};</code>.',
        'Cada elemento se accede por su índice, que empieza en <code>0</code>. La propiedad <code>Length</code> devuelve cuántos elementos tiene el array. Intentar acceder a un índice fuera de rango lanza una excepción en tiempo de ejecución.'
      ],
      code:
        '<span class="tok-kw">int</span>[] numeros = { <span class="tok-num">10</span>, <span class="tok-num">20</span>, <span class="tok-num">30</span> };\n' +
        'Console.WriteLine(numeros[<span class="tok-num">0</span>]); <span class="tok-comment">// 10</span>\n' +
        'Console.WriteLine(numeros.Length); <span class="tok-comment">// 3</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'int[] numeros = { 10, 20, 30 };\nConsole.WriteLine(numeros[1]);', prompt: '¿Qué imprime la consola?', options: ['20', '10', '30', 'Error'], answer: '20' },
        { code: 'int[] numeros = { 5, 10, 15, 20 };\nConsole.WriteLine(numeros.Length);', prompt: '¿Qué imprime la consola?', options: ['4', '3', '5', 'Error'], answer: '4' },
        { code: 'int[] numeros = new int[3];\nConsole.WriteLine(numeros[0]);', prompt: '¿Qué imprime la consola?', options: ['0', 'null', 'Error', 'undefined'], answer: '0' },
        { code: 'int[] numeros = { 1, 2, 3 };\nConsole.WriteLine(numeros[3]);', prompt: '¿Qué ocurre al ejecutar este código?', options: ['Se lanza una excepción porque el índice está fuera de rango', 'Imprime 0', 'Imprime null', 'Imprime 3'], answer: 'Se lanza una excepción porque el índice está fuera de rango' }
      ]
    }
  },
  {
    id: 'csharp-8',
    title: 'Listas: List<T>',
    subtitle: 'Nivel 8',
    xp: 70,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'A diferencia de un array, una <code>List&lt;T&gt;</code> puede crecer o achicarse en tiempo de ejecución. Se declara indicando el tipo entre <code>&lt; &gt;</code>: <code>List&lt;int&gt; numeros = new List&lt;int&gt;();</code>.',
        'Para agregar elementos se usa <code>Add()</code>, para saber cuántos hay se usa la propiedad <code>Count</code> (no <code>Length</code>, que es de los arrays) y para quitar un valor concreto se usa <code>Remove()</code>.'
      ],
      code:
        'List&lt;<span class="tok-kw">string</span>&gt; nombres = <span class="tok-kw">new</span> List&lt;<span class="tok-kw">string</span>&gt;();\n' +
        'nombres.Add(<span class="tok-string">"Ana"</span>);\n' +
        'nombres.Add(<span class="tok-string">"Luis"</span>);\n' +
        'Console.WriteLine(nombres.Count); <span class="tok-comment">// 2</span>'
    },
    exercise: {
      instructions: 'Completa cada línea con el método o propiedad correcto de List&lt;T&gt;.',
      blanks: [
        { id: 'b1', before: 'List&lt;int&gt; numeros = new List&lt;int&gt;();\nnumeros.', after: '(5);', answer: 'Add', options: ['Add', 'Insert', 'Push', 'Append'] },
        { id: 'b2', before: 'numeros.Add(5);\nnumeros.Add(10);\nConsole.WriteLine(numeros.', after: ');', answer: 'Count', options: ['Count', 'Length', 'Size', 'Total'] },
        { id: 'b3', before: 'List&lt;string&gt; nombres = new List&lt;string&gt;();\nnombres.Add("Ana");\nnombres.', after: '("Ana");', answer: 'Remove', options: ['Remove', 'Delete', 'Erase', 'RemoveAt'] },
        { id: 'b4', before: 'List&lt;int&gt; numeros = new List&lt;int&gt;();\nnumeros.Add(1);\nnumeros.Add(2);\nnumeros.', after: '(0);', answer: 'RemoveAt', options: ['RemoveAt', 'Remove', 'DeleteAt', 'RemoveIndex'] }
      ]
    }
  },
  {
    id: 'csharp-9',
    title: 'Métodos: declaración y parámetros',
    subtitle: 'Nivel 9',
    xp: 70,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un método se declara indicando su tipo de retorno, nombre y parámetros entre paréntesis: <code>static int Sumar(int a, int b) { ... }</code>. Si no devuelve nada, el tipo de retorno es <code>void</code>.',
        'Los parámetros son variables locales al método que reciben los valores pasados al llamarlo (los "argumentos"). El número y el tipo de los argumentos deben coincidir con los parámetros declarados.'
      ],
      code:
        '<span class="tok-kw">static</span> <span class="tok-kw">int</span> Sumar(<span class="tok-kw">int</span> a, <span class="tok-kw">int</span> b) {\n' +
        '  <span class="tok-kw">return</span> a + b;\n' +
        '}\n\n' +
        'Console.WriteLine(Sumar(<span class="tok-num">3</span>, <span class="tok-num">4</span>)); <span class="tok-comment">// 7</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'static void Saludar(string nombre) {\n  Console.WriteLine("Hola, " + nombre);\n}\n\nSaludar("Ana");', prompt: '¿Qué imprime la consola?', options: ['Hola, Ana', 'Hola, nombre', 'Error', 'Hola, "Ana"'], answer: 'Hola, Ana' },
        { code: 'static int Multiplicar(int a, int b) {\n  return a * b;\n}\n\nConsole.WriteLine(Multiplicar(3, 4));', prompt: '¿Qué imprime la consola?', options: ['12', '7', '34', 'Error'], answer: '12' },
        { code: 'static void Mensaje() {\n  Console.WriteLine("Hola");\n}\n\nMensaje("Ana");', prompt: '¿Qué ocurre al ejecutar este código?', options: ['Error de compilación: el método no recibe parámetros', 'Imprime "Hola"', 'Imprime "Hola, Ana"', 'No ocurre nada'], answer: 'Error de compilación: el método no recibe parámetros' },
        { code: 'static void Repetir(string texto, int veces) {\n  for (int i = 0; i < veces; i++) {\n    Console.WriteLine(texto);\n  }\n}\n\nRepetir("Hi", 2);', prompt: '¿Cuántas veces se imprime "Hi"?', options: ['2', '1', '0', 'Infinitas'], answer: '2' }
      ]
    }
  },
  {
    id: 'csharp-10',
    title: 'Métodos: valores de retorno',
    subtitle: 'Nivel 10',
    xp: 72,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La palabra clave <code>return</code> termina la ejecución del método y entrega un valor al lugar donde se lo llamó. Ese valor debe coincidir con el tipo de retorno declarado en el método.',
        'Un método puede tener varios <code>return</code> dentro de distintos caminos (por ejemplo, dentro de un <code>if</code> y un <code>else</code>), pero solo se ejecuta uno de ellos por cada llamada. Si el tipo de retorno es <code>void</code>, no se puede devolver ningún valor.'
      ],
      code:
        '<span class="tok-kw">static</span> <span class="tok-kw">string</span> Clasificar(<span class="tok-kw">int</span> nota) {\n' +
        '  <span class="tok-kw">if</span> (nota &gt;= <span class="tok-num">6</span>) {\n' +
        '    <span class="tok-kw">return</span> <span class="tok-string">"Aprobado"</span>;\n' +
        '  }\n' +
        '  <span class="tok-kw">return</span> <span class="tok-string">"Reprobado"</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'static int Doble(int n) {\n  return n * 2;\n}\n\nint resultado = Doble(5);\nConsole.WriteLine(resultado);', prompt: '¿Qué imprime la consola?', options: ['10', '5', 'Error', '0'], answer: '10' },
        { code: 'static string Clasificar(int nota) {\n  if (nota >= 6) {\n    return "Aprobado";\n  }\n  return "Reprobado";\n}\n\nConsole.WriteLine(Clasificar(4));', prompt: '¿Qué imprime la consola?', options: ['Reprobado', 'Aprobado', '4', 'Error'], answer: 'Reprobado' },
        { code: 'static bool EsPar(int n) {\n  return n % 2 == 0;\n}\n\nConsole.WriteLine(EsPar(7));', prompt: '¿Qué imprime la consola?', options: ['False', 'True', '7', 'Error'], answer: 'False' },
        { code: 'static void Saludar() {\n  return "Hola";\n}', prompt: '¿Qué ocurre al compilar este código?', options: ['Error: un método void no puede devolver un valor', 'Se imprime "Hola"', 'Se compila sin problemas', 'Se ignora el return'], answer: 'Error: un método void no puede devolver un valor' }
      ]
    }
  },
  {
    id: 'csharp-11',
    title: 'Comentarios y buenas prácticas',
    subtitle: 'Nivel 11',
    xp: 65,
    type: 'quiz',
    theory: {
      paragraphs: [
        'En C# hay comentarios de una línea con <code>//</code> y de varias líneas con <code>/* ... */</code>. El compilador los ignora por completo: sirven solo para explicar el código a otras personas (o a ti mismo en el futuro).',
        'Una buena práctica es usar nombres descriptivos para variables y métodos (<code>CalcularTotal</code> en vez de <code>ct</code>), mantener una indentación consistente y evitar comentarios obvios que no aportan información nueva.'
      ],
      code:
        '<span class="tok-comment">// Calcula el precio con descuento</span>\n' +
        '<span class="tok-kw">static</span> <span class="tok-kw">double</span> ConDescuento(<span class="tok-kw">double</span> precio) {\n' +
        '  <span class="tok-comment">/* Aplicamos un 10% de descuento fijo */</span>\n' +
        '  <span class="tok-kw">return</span> precio * <span class="tok-num">0.9</span>;\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre comentarios y buenas prácticas en C#.',
      variant: 'plain',
      questions: [
        { prompt: '¿Cómo se escribe un comentario de una sola línea en C#?', options: ['Con dos barras al inicio de la línea (//)', 'Con una almohadilla (#)', 'Con dos guiones (--)', 'Con doble barra invertida'], answer: 'Con dos barras al inicio de la línea (//)' },
        { prompt: '¿Cuál de estos comentarios ocupa varias líneas?', options: ['/* comentario de varias líneas */', '// comentario', '# comentario', '-- comentario'], answer: '/* comentario de varias líneas */' },
        { prompt: '¿Por qué es mejor llamar a un método CalcularTotal en vez de ct?', options: ['Porque un nombre descriptivo hace el código más fácil de entender', 'Porque los nombres cortos no están permitidos en C#', 'Porque CalcularTotal ocupa menos memoria', 'Porque ct genera un error de compilación'], answer: 'Porque un nombre descriptivo hace el código más fácil de entender' },
        { prompt: '¿Qué le pasa al compilador con los comentarios?', options: ['Los ignora por completo, no afectan la ejecución', 'Los convierte en errores', 'Los ejecuta como si fueran código', 'Los muestra en la consola al ejecutar el programa'], answer: 'Los ignora por completo, no afectan la ejecución' }
      ]
    }
  },
  {
    id: 'csharp-12',
    title: 'Cadenas de texto: métodos comunes',
    subtitle: 'Nivel 12',
    xp: 74,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Las cadenas de texto (<code>string</code>) tienen métodos útiles como <code>ToUpper()</code> y <code>ToLower()</code> para cambiar mayúsculas/minúsculas, <code>Trim()</code> para quitar espacios de los extremos, y <code>Substring(inicio, largo)</code> para extraer una parte del texto.',
        'Las cadenas en C# son <strong>inmutables</strong>: estos métodos no modifican el string original, sino que devuelven uno nuevo. Si no guardas el resultado en una variable, el cambio se pierde.'
      ],
      code:
        '<span class="tok-kw">string</span> texto = <span class="tok-string">"  Hola Mundo  "</span>;\n' +
        'Console.WriteLine(texto.Trim()); <span class="tok-comment">// "Hola Mundo"</span>\n' +
        'Console.WriteLine(texto.Trim().ToUpper()); <span class="tok-comment">// "HOLA MUNDO"</span>\n' +
        'Console.WriteLine(<span class="tok-string">"DevQuest"</span>.Substring(<span class="tok-num">0</span>, <span class="tok-num">3</span>)); <span class="tok-comment">// "Dev"</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'string texto = "Hola";\nConsole.WriteLine(texto.ToUpper());', prompt: '¿Qué imprime la consola?', options: ['HOLA', 'hola', 'Hola', 'Error'], answer: 'HOLA' },
        { code: 'string texto = "  DevQuest  ";\nConsole.WriteLine(texto.Trim());', prompt: '¿Qué imprime la consola?', options: ['DevQuest', '  DevQuest  ', 'DevQuest  ', 'Error'], answer: 'DevQuest' },
        { code: 'string texto = "DevQuest";\nConsole.WriteLine(texto.Substring(3));', prompt: '¿Qué imprime la consola?', options: ['Quest', 'Dev', 'DevQ', 'Error'], answer: 'Quest' },
        { code: 'string texto = "Hola";\nstring resultado = texto.ToUpper();\nConsole.WriteLine(texto);', prompt: '¿Qué imprime la consola? (recuerda que los strings son inmutables)', options: ['Hola', 'HOLA', 'hola', 'Error'], answer: 'Hola' }
      ]
    }
  },
  {
    id: 'csharp-13',
    title: 'Concatenación e interpolación de strings',
    subtitle: 'Nivel 13',
    xp: 74,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Se pueden unir strings con el operador <code>+</code> (concatenación), pero cuando hay que mezclar texto con variables suele ser más claro usar <strong>interpolación</strong>: anteponer <code>$</code> al string y escribir las variables entre llaves <code>{ }</code>.',
        'Con interpolación, C# convierte automáticamente los valores no-string a texto antes de insertarlos, incluyendo números y resultados de expresiones.'
      ],
      code:
        '<span class="tok-kw">string</span> nombre = <span class="tok-string">"Ana"</span>;\n' +
        '<span class="tok-kw">int</span> edad = <span class="tok-num">16</span>;\n' +
        'Console.WriteLine(<span class="tok-string">"Hola, "</span> + nombre); <span class="tok-comment">// concatenación</span>\n' +
        'Console.WriteLine($<span class="tok-string">"Hola, {nombre}. Tienes {edad} años"</span>); <span class="tok-comment">// interpolación</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'string nombre = "Ana";\nConsole.WriteLine("Hola, " + nombre);', prompt: '¿Qué imprime la consola?', options: ['Hola, Ana', 'Hola, nombre', 'Hola,Ana', 'Error'], answer: 'Hola, Ana' },
        { code: 'int edad = 16;\nConsole.WriteLine($"Tienes {edad} años");', prompt: '¿Qué imprime la consola?', options: ['Tienes 16 años', 'Tienes edad años', 'Tienes {edad} años', 'Error'], answer: 'Tienes 16 años' },
        { code: 'int a = 2;\nint b = 3;\nConsole.WriteLine($"La suma es {a + b}");', prompt: '¿Qué imprime la consola?', options: ['La suma es 5', 'La suma es a + b', 'La suma es 23', 'Error'], answer: 'La suma es 5' },
        { code: 'string nombre = "Ana";\nint edad = 16;\nConsole.WriteLine(nombre + edad);', prompt: '¿Qué imprime la consola?', options: ['Ana16', 'Error de compilación', 'Ana 16', '16Ana'], answer: 'Ana16' }
      ]
    }
  },
  {
    id: 'csharp-14',
    title: 'Conversión de tipos (casting)',
    subtitle: 'Nivel 14',
    xp: 76,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La conversión <strong>implícita</strong> ocurre automáticamente cuando no hay riesgo de perder información, como pasar de <code>int</code> a <code>double</code>. La conversión <strong>explícita</strong> (casting) es obligatoria cuando sí se puede perder datos, como de <code>double</code> a <code>int</code>, y se escribe con el tipo entre paréntesis: <code>(int)3.9</code>.',
        'Al convertir un <code>double</code> a <code>int</code> con casting, C# <strong>trunca</strong> la parte decimal (no redondea): <code>(int)3.9</code> da <code>3</code>, y <code>(int)-3.9</code> da <code>-3</code>.'
      ],
      code:
        '<span class="tok-kw">double</span> precio = <span class="tok-num">9.99</span>;\n' +
        '<span class="tok-kw">int</span> entero = (<span class="tok-kw">int</span>)precio; <span class="tok-comment">// casting explícito</span>\n' +
        'Console.WriteLine(entero); <span class="tok-comment">// 9, se trunca</span>\n\n' +
        '<span class="tok-kw">int</span> cantidad = <span class="tok-num">5</span>;\n' +
        '<span class="tok-kw">double</span> total = cantidad; <span class="tok-comment">// conversión implícita</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'double precio = 9.99;\nint entero = (int)precio;\nConsole.WriteLine(entero);', prompt: '¿Qué imprime la consola?', options: ['9', '10', '9.99', 'Error'], answer: '9' },
        { code: 'double n = -3.9;\nConsole.WriteLine((int)n);', prompt: '¿Qué imprime la consola?', options: ['-3', '-4', '-3.9', 'Error'], answer: '-3' },
        { code: 'int cantidad = 5;\ndouble total = cantidad;\nConsole.WriteLine(total);', prompt: '¿Qué imprime la consola?', options: ['5', '5.0', 'Error', '5,0'], answer: '5' },
        { code: 'int a = 10;\nint b = 3;\ndouble resultado = a / b;\nConsole.WriteLine(resultado);', prompt: '¿Qué imprime la consola?', options: ['3', '3.33', '3.3333333333333335', 'Error'], answer: '3' }
      ]
    }
  },
  {
    id: 'csharp-15',
    title: 'Constantes (const) y solo lectura (readonly)',
    subtitle: 'Nivel 15',
    xp: 70,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>const</code> declara una constante cuyo valor se fija en tiempo de compilación y nunca puede cambiar; debe asignarse en la misma línea donde se declara, por ejemplo <code>const double PI = 3.14;</code>.',
        '<code>readonly</code> también crea un valor que no se puede reasignar, pero es más flexible: se puede asignar en el constructor de la clase, lo que permite que cada objeto tenga su propio valor fijo calculado en tiempo de ejecución.'
      ],
      code:
        '<span class="tok-kw">class</span> Circulo {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">const</span> <span class="tok-kw">double</span> PI = <span class="tok-num">3.14</span>;\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">readonly</span> <span class="tok-kw">double</span> Radio;\n\n' +
        '  <span class="tok-kw">public</span> Circulo(<span class="tok-kw">double</span> radio) {\n' +
        '    Radio = radio; <span class="tok-comment">// válido: se asigna en el constructor</span>\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre const y readonly.',
      variant: 'plain',
      questions: [
        { prompt: '¿Cuándo debe asignarse el valor de una variable const?', options: ['En la misma línea donde se declara', 'En el constructor de la clase', 'En cualquier método de la clase', 'Después de crear el objeto'], answer: 'En la misma línea donde se declara' },
        { prompt: '¿Qué diferencia principal tiene readonly frente a const?', options: ['readonly se puede asignar en el constructor, permitiendo un valor distinto por objeto', 'readonly permite cambiar el valor en cualquier momento', 'readonly solo funciona con tipos string', 'No hay ninguna diferencia, son sinónimos'], answer: 'readonly se puede asignar en el constructor, permitiendo un valor distinto por objeto' },
        { prompt: '¿Qué ocurre si intentas reasignar una variable const fuera de su declaración?', options: ['El compilador marca un error', 'Se actualiza el valor sin problema', 'Se ignora la nueva asignación en silencio', 'Se lanza una excepción en tiempo de ejecución'], answer: 'El compilador marca un error' },
        { prompt: '¿Cuál de estas es una buena razón para usar const?', options: ['Para un valor que nunca cambiará, como el número de días de la semana', 'Para guardar el resultado de una consulta al usuario', 'Para un contador que se actualiza en un bucle', 'Para el nombre que escribe el usuario por teclado'], answer: 'Para un valor que nunca cambiará, como el número de días de la semana' }
      ]
    }
  },
  {
    id: 'csharp-16',
    title: 'POO: clases y objetos',
    subtitle: 'Nivel 16',
    xp: 76,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una <strong>clase</strong> es un molde o plantilla que define qué datos (campos/propiedades) y comportamientos (métodos) tendrán los objetos creados a partir de ella. Un <strong>objeto</strong> es una instancia concreta de esa clase, creada con la palabra clave <code>new</code>.',
        'Por ejemplo, la clase <code>Perro</code> podría definir que todo perro tiene un <code>Nombre</code> y puede <code>Ladrar()</code>; cada objeto <code>Perro</code> que crees tendrá su propio nombre, pero compartirá el mismo comportamiento definido en la clase.'
      ],
      code:
        '<span class="tok-kw">class</span> Perro {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">string</span> Nombre;\n\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">void</span> Ladrar() {\n' +
        '    Console.WriteLine(Nombre + <span class="tok-string">" dice: ¡Guau!"</span>);\n' +
        '  }\n' +
        '}\n\n' +
        'Perro miPerro = <span class="tok-kw">new</span> Perro();\n' +
        'miPerro.Nombre = <span class="tok-string">"Toby"</span>;\n' +
        'miPerro.Ladrar();'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre clases y objetos.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué es una clase en programación orientada a objetos?', options: ['Un molde que define los datos y comportamientos de sus objetos', 'Un valor numérico fijo', 'Una función que solo se ejecuta una vez', 'Un archivo de configuración'], answer: 'Un molde que define los datos y comportamientos de sus objetos' },
        { prompt: '¿Con qué palabra clave se crea un objeto a partir de una clase?', options: ['new', 'create', 'object', 'make'], answer: 'new' },
        { prompt: 'Si la clase Perro define un método Ladrar(), ¿qué representa ese método?', options: ['Un comportamiento que puede tener cualquier objeto Perro', 'Un dato exclusivo de un solo perro', 'El nombre de la clase', 'Un tipo de dato'], answer: 'Un comportamiento que puede tener cualquier objeto Perro' },
        { prompt: '¿Qué relación hay entre una clase y sus objetos?', options: ['La clase es el molde y los objetos son instancias creadas a partir de ella', 'Son exactamente lo mismo', 'Un objeto puede existir sin ninguna clase', 'Una clase solo puede tener un objeto'], answer: 'La clase es el molde y los objetos son instancias creadas a partir de ella' }
      ]
    }
  },
  {
    id: 'csharp-17',
    title: 'Constructores',
    subtitle: 'Nivel 17',
    xp: 78,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un <strong>constructor</strong> es un método especial que se ejecuta automáticamente al crear un objeto con <code>new</code>. Tiene el mismo nombre que la clase y no declara tipo de retorno, ni siquiera <code>void</code>.',
        'Se suele usar para inicializar los campos del objeto con los valores recibidos como parámetros. Si no escribes ningún constructor, C# genera uno vacío automáticamente (el "constructor por defecto").'
      ],
      code:
        '<span class="tok-kw">class</span> Persona {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">string</span> Nombre;\n\n' +
        '  <span class="tok-kw">public</span> Persona(<span class="tok-kw">string</span> nombre) {\n' +
        '    Nombre = nombre;\n' +
        '  }\n' +
        '}\n\n' +
        'Persona p = <span class="tok-kw">new</span> Persona(<span class="tok-string">"Luis"</span>);\n' +
        'Console.WriteLine(p.Nombre); <span class="tok-comment">// Luis</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'class Persona {\n  public string Nombre;\n\n  public Persona(string nombre) {\n    Nombre = nombre;\n  }\n}\n\nPersona p = new Persona("Luis");\nConsole.WriteLine(p.Nombre);', prompt: '¿Qué imprime la consola?', options: ['Luis', 'Nombre', 'Persona', 'Error'], answer: 'Luis' },
        { code: 'class Contador {\n  public int Valor;\n\n  public Contador() {\n    Valor = 0;\n  }\n}\n\nContador c = new Contador();\nConsole.WriteLine(c.Valor);', prompt: '¿Qué imprime la consola?', options: ['0', 'null', 'Error', '1'], answer: '0' },
        { code: 'class Punto {\n  public int X;\n  public int Y;\n\n  public Punto(int x, int y) {\n    X = x;\n    Y = y;\n  }\n}\n\nPunto p = new Punto(3, 5);\nConsole.WriteLine(p.X + p.Y);', prompt: '¿Qué imprime la consola?', options: ['8', '35', 'Error', '15'], answer: '8' },
        { code: 'class Auto {\n  public Auto() {\n    Console.WriteLine("Auto creado");\n  }\n}', prompt: '¿Qué diferencia principal tiene un constructor respecto a un método normal?', options: ['No tiene tipo de retorno y se llama igual que la clase', 'Debe llamarse siempre Main', 'Solo puede tener un parámetro', 'Debe ser siempre privado'], answer: 'No tiene tipo de retorno y se llama igual que la clase' }
      ]
    }
  },
  {
    id: 'csharp-18',
    title: 'Propiedades (get/set)',
    subtitle: 'Nivel 18',
    xp: 78,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Las <strong>propiedades</strong> exponen datos de un objeto de forma controlada, combinando un campo con lógica de lectura (<code>get</code>) y escritura (<code>set</code>). La forma más simple es la propiedad automática: <code>public string Nombre { get; set; }</code>.',
        'También se puede agregar lógica personalizada, por ejemplo para validar un valor antes de guardarlo, usando un campo privado por detrás y escribiendo el cuerpo de <code>set</code> explícitamente.'
      ],
      code:
        '<span class="tok-kw">class</span> Persona {\n' +
        '  <span class="tok-kw">private</span> <span class="tok-kw">int</span> _edad;\n\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">int</span> Edad {\n' +
        '    <span class="tok-kw">get</span> { <span class="tok-kw">return</span> _edad; }\n' +
        '    <span class="tok-kw">set</span> { <span class="tok-kw">if</span> (value &gt;= <span class="tok-num">0</span>) _edad = value; }\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'class Persona {\n  public string Nombre { get; set; }\n}\n\nPersona p = new Persona();\np.Nombre = "Ana";\nConsole.WriteLine(p.Nombre);', prompt: '¿Qué imprime la consola?', options: ['Ana', 'Nombre', 'Error', 'null'], answer: 'Ana' },
        { code: 'class Persona {\n  private int _edad;\n  public int Edad {\n    get { return _edad; }\n    set { if (value >= 0) _edad = value; }\n  }\n}\n\nPersona p = new Persona();\np.Edad = -5;\nConsole.WriteLine(p.Edad);', prompt: '¿Qué imprime la consola?', options: ['0', '-5', 'Error', 'null'], answer: '0' },
        { code: 'public int Edad {\n  set { _edad = value; }\n}', prompt: '¿Qué palabra especial representa el valor recibido dentro de un set?', options: ['value', 'this', 'input', 'param'], answer: 'value' },
        { code: 'class CuentaBancaria {\n  private double saldo;\n  public double Saldo {\n    get { return saldo; }\n  }\n}', prompt: '¿Cuál es la ventaja de usar propiedades en vez de campos públicos directos?', options: ['Permiten validar o transformar el valor antes de guardarlo o devolverlo', 'Ocupan menos memoria', 'Son obligatorias en todo método static', 'Hacen que el programa compile más rápido'], answer: 'Permiten validar o transformar el valor antes de guardarlo o devolverlo' }
      ]
    }
  },
  {
    id: 'csharp-19',
    title: 'Modificadores de acceso',
    subtitle: 'Nivel 19',
    xp: 72,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los modificadores de acceso controlan desde dónde se puede usar un miembro de una clase. <code>public</code> es accesible desde cualquier lugar; <code>private</code> solo desde dentro de la misma clase.',
        '<code>protected</code> es accesible desde la propia clase y desde las clases que heredan de ella, pero no desde fuera. Si no se indica ningún modificador en un miembro de clase, el valor por defecto es <code>private</code>.'
      ],
      code:
        '<span class="tok-kw">class</span> CuentaBancaria {\n' +
        '  <span class="tok-kw">private</span> <span class="tok-kw">double</span> saldo;\n\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">void</span> Depositar(<span class="tok-kw">double</span> monto) {\n' +
        '    saldo += monto;\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre modificadores de acceso.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué modificador permite el acceso desde cualquier parte del programa?', options: ['public', 'private', 'protected', 'internal'], answer: 'public' },
        { prompt: '¿Qué modificador limita el acceso solo a la propia clase?', options: ['private', 'public', 'protected', 'static'], answer: 'private' },
        { prompt: '¿Quién puede acceder a un miembro protected además de la propia clase?', options: ['Las clases que heredan de ella', 'Cualquier clase del programa', 'Solo el método Main', 'Nadie más, es igual que private'], answer: 'Las clases que heredan de ella' },
        { prompt: 'Si no escribes ningún modificador de acceso en un campo de una clase, ¿cuál se usa por defecto?', options: ['private', 'public', 'protected', 'No compila'], answer: 'private' }
      ]
    }
  },
  {
    id: 'csharp-20',
    title: 'Métodos y campos estáticos',
    subtitle: 'Nivel 20',
    xp: 80,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un miembro <code>static</code> pertenece a la <strong>clase</strong> en sí, no a cada objeto individual. Se accede escribiendo el nombre de la clase, no el de una instancia: <code>Matematica.Pi</code> en vez de crear un objeto.',
        'Un campo estático se comparte entre todos los objetos de la clase: si un objeto lo modifica, el cambio se ve reflejado para todos, porque en realidad solo existe una copia de ese valor.'
      ],
      code:
        '<span class="tok-kw">class</span> Contador {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">static</span> <span class="tok-kw">int</span> Total = <span class="tok-num">0</span>;\n\n' +
        '  <span class="tok-kw">public</span> Contador() {\n' +
        '    Total++;\n' +
        '  }\n' +
        '}\n\n' +
        '<span class="tok-kw">new</span> Contador();\n' +
        '<span class="tok-kw">new</span> Contador();\n' +
        'Console.WriteLine(Contador.Total); <span class="tok-comment">// 2</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'class Contador {\n  public static int Total = 0;\n\n  public Contador() {\n    Total++;\n  }\n}\n\nnew Contador();\nnew Contador();\nnew Contador();\nConsole.WriteLine(Contador.Total);', prompt: '¿Qué imprime la consola?', options: ['3', '1', '0', 'Error'], answer: '3' },
        { code: 'class Matematica {\n  public static int Cuadrado(int n) {\n    return n * n;\n  }\n}\n\nConsole.WriteLine(Matematica.Cuadrado(5));', prompt: '¿Qué imprime la consola?', options: ['25', '10', '5', 'Error'], answer: '25' },
        { code: 'class Ayuda {\n  public static void Mostrar() {\n    Console.WriteLine("Hola");\n  }\n}\n\nAyuda a = new Ayuda();\na.Mostrar();', prompt: '¿Qué ocurre al intentar llamar a un método static a través de una instancia (objeto) en vez de la clase?', options: ['No compila: los miembros static deben llamarse con el nombre de la clase', 'Compila y se ejecuta sin ningún problema', 'Se lanza una excepción en tiempo de ejecución', 'Imprime null'], answer: 'No compila: los miembros static deben llamarse con el nombre de la clase' },
        { code: 'class Config {\n  public static string Version = "1.0";\n}\n\nConfig.Version = "2.0";\nConsole.WriteLine(Config.Version);', prompt: '¿Qué imprime la consola?', options: ['2.0', '1.0', 'Error', 'null'], answer: '2.0' }
      ]
    }
  },
  {
    id: 'csharp-21',
    title: 'Herencia',
    subtitle: 'Nivel 21',
    xp: 82,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La herencia permite que una clase (la <strong>clase derivada</strong>) reutilice los campos y métodos de otra (la <strong>clase base</strong>), usando el símbolo <code>:</code>. Por ejemplo, <code>class Perro : Animal</code> significa que <code>Perro</code> hereda de <code>Animal</code>.',
        'La clase derivada obtiene automáticamente todos los miembros públicos y protegidos de la clase base, y puede añadir sus propios campos y métodos, o modificar el comportamiento heredado.'
      ],
      code:
        '<span class="tok-kw">class</span> Animal {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">string</span> Nombre;\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">void</span> Comer() {\n' +
        '    Console.WriteLine(Nombre + <span class="tok-string">" está comiendo"</span>);\n' +
        '  }\n' +
        '}\n\n' +
        '<span class="tok-kw">class</span> Perro : Animal {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">void</span> Ladrar() {\n' +
        '    Console.WriteLine(Nombre + <span class="tok-string">" ladra"</span>);\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre herencia.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué símbolo se usa en C# para indicar que una clase hereda de otra?', options: [':', 'extends', '->', '::'], answer: ':' },
        { prompt: 'Si Perro hereda de Animal y Animal tiene el método Comer(), ¿puede un objeto Perro llamar a Comer()?', options: ['Sí, porque hereda los miembros públicos de Animal', 'No, los métodos nunca se heredan', 'Solo si Comer() es static', 'Solo si se vuelve a escribir en Perro'], answer: 'Sí, porque hereda los miembros públicos de Animal' },
        { prompt: '¿Cómo se llama la clase de la que se hereda?', options: ['Clase base', 'Clase hija', 'Clase derivada', 'Subclase'], answer: 'Clase base' },
        { prompt: '¿Cuántas clases base puede tener directamente una clase en C# (herencia simple)?', options: ['Una sola', 'Dos', 'Tantas como interfaces implemente', 'Ninguna limitación'], answer: 'Una sola' }
      ]
    }
  },
  {
    id: 'csharp-22',
    title: 'Polimorfismo y override',
    subtitle: 'Nivel 22',
    xp: 86,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El polimorfismo permite que una clase derivada redefina el comportamiento de un método heredado. Para eso, el método en la clase base debe marcarse como <code>virtual</code>, y en la clase derivada se usa <code>override</code> para reemplazarlo.',
        'Cuando se llama al método a través de una referencia de la clase base pero el objeto real es de la clase derivada, C# ejecuta la versión sobrescrita: siempre se usa el comportamiento del tipo real del objeto (esto se llama "despacho dinámico").'
      ],
      code:
        '<span class="tok-kw">class</span> Animal {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">virtual</span> <span class="tok-kw">void</span> HacerSonido() {\n' +
        '    Console.WriteLine(<span class="tok-string">"Sonido genérico"</span>);\n' +
        '  }\n' +
        '}\n\n' +
        '<span class="tok-kw">class</span> Gato : Animal {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">override</span> <span class="tok-kw">void</span> HacerSonido() {\n' +
        '    Console.WriteLine(<span class="tok-string">"Miau"</span>);\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'class Animal {\n  public virtual void HacerSonido() {\n    Console.WriteLine("Sonido genérico");\n  }\n}\n\nclass Gato : Animal {\n  public override void HacerSonido() {\n    Console.WriteLine("Miau");\n  }\n}\n\nAnimal a = new Gato();\na.HacerSonido();', prompt: '¿Qué imprime la consola?', options: ['Miau', 'Sonido genérico', 'MiauSonido genérico', 'Error'], answer: 'Miau' },
        { code: 'class Animal {\n  public virtual void HacerSonido() { }\n}', prompt: '¿Qué palabra clave debe tener el método en la clase base para poder sobrescribirlo?', options: ['virtual', 'static', 'abstract', 'sealed'], answer: 'virtual' },
        { code: 'class Animal {\n  public void Dormir() {\n    Console.WriteLine("Durmiendo");\n  }\n}\n\nclass Gato : Animal {\n  public new void Dormir() {\n    Console.WriteLine("Gato durmiendo");\n  }\n}\n\nAnimal a = new Gato();\na.Dormir();', prompt: '¿Qué imprime la consola? (Dormir no es virtual)', options: ['Durmiendo', 'Gato durmiendo', 'Error', 'DurmiendoGato durmiendo'], answer: 'Durmiendo' },
        { code: 'class Forma {\n  public virtual double Area() {\n    return 0;\n  }\n}\n\nclass Cuadrado : Forma {\n  public override double Area() {\n    return 16;\n  }\n}\n\nForma f = new Cuadrado();\nConsole.WriteLine(f.Area());', prompt: '¿Qué imprime la consola?', options: ['16', '0', 'Error', 'Cuadrado'], answer: '16' }
      ]
    }
  },
  {
    id: 'csharp-23',
    title: 'Clases abstractas',
    subtitle: 'Nivel 23',
    xp: 84,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una clase <code>abstract</code> no se puede instanciar directamente con <code>new</code>; solo sirve como base para que otras clases hereden de ella. Puede mezclar métodos ya implementados con métodos <code>abstract</code> (sin cuerpo), que las clases derivadas están obligadas a implementar.',
        'Se usan cuando varias clases comparten una base común pero cada una debe completar cierto comportamiento a su manera, por ejemplo distintas formas que deben calcular su propia área.'
      ],
      code:
        '<span class="tok-kw">abstract</span> <span class="tok-kw">class</span> Forma {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">abstract</span> <span class="tok-kw">double</span> Area();\n' +
        '}\n\n' +
        '<span class="tok-kw">class</span> Circulo : Forma {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">override</span> <span class="tok-kw">double</span> Area() {\n' +
        '    <span class="tok-kw">return</span> <span class="tok-num">3.14</span>;\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre clases abstractas.',
      variant: 'plain',
      questions: [
        { prompt: '¿Se puede crear un objeto directamente de una clase abstract con new?', options: ['No, una clase abstracta no se puede instanciar directamente', 'Sí, sin ninguna restricción', 'Solo si no tiene métodos', 'Solo dentro del método Main'], answer: 'No, una clase abstracta no se puede instanciar directamente' },
        { prompt: '¿Qué debe hacer una clase que hereda de una clase abstracta con un método abstract?', options: ['Implementar ese método con override', 'Puede ignorarlo sin problema', 'Debe volverlo virtual', 'Debe eliminarlo'], answer: 'Implementar ese método con override' },
        { prompt: '¿Cuál es una buena razón para usar una clase abstracta?', options: ['Compartir una base común entre clases que deben implementar su propio comportamiento en ciertos métodos', 'Evitar tener que escribir constructores', 'Hacer que el programa use menos memoria', 'Impedir que existan clases derivadas'], answer: 'Compartir una base común entre clases que deben implementar su propio comportamiento en ciertos métodos' },
        { prompt: '¿Puede una clase abstracta tener métodos con implementación completa además de métodos abstractos?', options: ['Sí, puede combinar ambos tipos de métodos', 'No, todos los métodos deben ser abstractos', 'No, no puede tener ningún método', 'Solo puede tener un método en total'], answer: 'Sí, puede combinar ambos tipos de métodos' }
      ]
    }
  },
  {
    id: 'csharp-24',
    title: 'Interfaces',
    subtitle: 'Nivel 24',
    xp: 84,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una <code>interface</code> define un contrato: una lista de métodos y propiedades que una clase promete implementar, pero sin ningún código dentro de la interfaz. Se declara con <code>interface INombre</code> (por convención empieza con <code>I</code>).',
        'A diferencia de la herencia de clases (que es simple: solo una clase base), una clase en C# puede implementar <strong>varias interfaces</strong> a la vez, separadas por comas.'
      ],
      code:
        '<span class="tok-kw">interface</span> IVolador {\n' +
        '  <span class="tok-kw">void</span> Volar();\n' +
        '}\n\n' +
        '<span class="tok-kw">class</span> Pajaro : IVolador {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">void</span> Volar() {\n' +
        '    Console.WriteLine(<span class="tok-string">"El pájaro vuela"</span>);\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre interfaces.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué define una interfaz en C#?', options: ['Un contrato de métodos y propiedades que una clase debe implementar', 'Un valor constante compartido', 'Una clase que no puede heredar de nada', 'Un tipo de bucle'], answer: 'Un contrato de métodos y propiedades que una clase debe implementar' },
        { prompt: '¿Cuántas interfaces puede implementar una misma clase en C#?', options: ['Varias, separadas por comas', 'Solo una', 'Ninguna si ya hereda de una clase', 'Máximo dos'], answer: 'Varias, separadas por comas' },
        { prompt: '¿Qué convención de nombres se usa habitualmente para las interfaces en C#?', options: ['Empezar el nombre con la letra I, como IVolador', 'Terminar el nombre en Interface', 'Escribir el nombre en minúsculas', 'Usar guiones bajos entre palabras'], answer: 'Empezar el nombre con la letra I, como IVolador' },
        { prompt: 'Si una clase implementa una interfaz pero no define uno de sus métodos, ¿qué pasa?', options: ['El código no compila', 'Se usa una implementación vacía por defecto', 'El método simplemente no existe en tiempo de ejecución', 'Se lanza una excepción solo si se llama a ese método'], answer: 'El código no compila' }
      ]
    }
  },
  {
    id: 'csharp-25',
    title: 'Encapsulamiento',
    subtitle: 'Nivel 25',
    xp: 82,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El <strong>encapsulamiento</strong> consiste en ocultar los datos internos de un objeto (haciéndolos <code>private</code>) y exponer solo lo necesario a través de métodos o propiedades públicas, controlando cómo se accede y modifica ese estado.',
        'Esto protege al objeto de quedar en un estado inválido: por ejemplo, evita que alguien asigne un saldo negativo directamente a una cuenta bancaria, forzando a pasar por un método que valide la operación.'
      ],
      code:
        '<span class="tok-kw">class</span> CuentaBancaria {\n' +
        '  <span class="tok-kw">private</span> <span class="tok-kw">double</span> saldo;\n\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">void</span> Depositar(<span class="tok-kw">double</span> monto) {\n' +
        '    <span class="tok-kw">if</span> (monto &gt; <span class="tok-num">0</span>) saldo += monto;\n' +
        '  }\n\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">double</span> ObtenerSaldo() {\n' +
        '    <span class="tok-kw">return</span> saldo;\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre encapsulamiento.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué es el encapsulamiento?', options: ['Ocultar los datos internos de un objeto y exponer solo lo necesario mediante métodos o propiedades', 'Crear varias clases con el mismo nombre', 'Convertir todos los campos en static', 'Eliminar los constructores de una clase'], answer: 'Ocultar los datos internos de un objeto y exponer solo lo necesario mediante métodos o propiedades' },
        { prompt: '¿Por qué conviene declarar el campo saldo como private en una clase CuentaBancaria?', options: ['Para evitar que se modifique directamente sin pasar por una validación', 'Porque los campos private ocupan menos memoria', 'Porque C# obliga a que todos los campos sean private', 'Para que el campo sea más rápido de acceder'], answer: 'Para evitar que se modifique directamente sin pasar por una validación' },
        { prompt: '¿Cuál de estas prácticas refleja un buen encapsulamiento?', options: ['Usar un método Depositar() que valide el monto antes de modificar el saldo', 'Declarar el saldo como public para acceder más rápido', 'Duplicar el campo saldo en cada método', 'Permitir que cualquier clase modifique el saldo directamente'], answer: 'Usar un método Depositar() que valide el monto antes de modificar el saldo' },
        { prompt: '¿Qué beneficio da el encapsulamiento a largo plazo en un proyecto grande?', options: ['Facilita cambiar la implementación interna sin afectar el código que usa la clase', 'Hace que el programa ocupe menos espacio en disco', 'Elimina la necesidad de probar el código', 'Permite que todos los campos sean accesibles desde cualquier lugar'], answer: 'Facilita cambiar la implementación interna sin afectar el código que usa la clase' }
      ]
    }
  },
  {
    id: 'csharp-26',
    title: 'Sobrecarga de métodos (overloading)',
    subtitle: 'Nivel 26',
    xp: 88,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La <strong>sobrecarga</strong> (overloading) permite definir varios métodos con el <strong>mismo nombre</strong> en la misma clase, siempre que tengan una lista de parámetros distinta (diferente cantidad o diferente tipo).',
        'C# elige automáticamente qué versión ejecutar según los argumentos que le pases en la llamada. Ojo: no se puede sobrecargar un método cambiando solo el tipo de retorno, los parámetros tienen que ser distintos.'
      ],
      code:
        '<span class="tok-kw">static</span> <span class="tok-kw">int</span> Sumar(<span class="tok-kw">int</span> a, <span class="tok-kw">int</span> b) {\n' +
        '  <span class="tok-kw">return</span> a + b;\n' +
        '}\n\n' +
        '<span class="tok-kw">static</span> <span class="tok-kw">double</span> Sumar(<span class="tok-kw">double</span> a, <span class="tok-kw">double</span> b) {\n' +
        '  <span class="tok-kw">return</span> a + b;\n' +
        '}\n\n' +
        'Console.WriteLine(Sumar(<span class="tok-num">2</span>, <span class="tok-num">3</span>)); <span class="tok-comment">// 5, usa la versión int</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'static int Sumar(int a, int b) {\n  return a + b;\n}\n\nstatic double Sumar(double a, double b) {\n  return a + b;\n}\n\nConsole.WriteLine(Sumar(2.5, 1.5));', prompt: '¿Qué imprime la consola?', options: ['4', '4.0', 'Error', '2.5'], answer: '4' },
        { code: 'static void Mostrar(string texto) {\n  Console.WriteLine("Texto: " + texto);\n}\n\nstatic void Mostrar(int numero) {\n  Console.WriteLine("Número: " + numero);\n}\n\nMostrar(5);', prompt: '¿Qué imprime la consola?', options: ['Número: 5', 'Texto: 5', 'Error', 'Número: 05'], answer: 'Número: 5' },
        { code: 'static int Sumar(int a, int b) {\n  return a + b;\n}', prompt: '¿Cuál de estas SÍ es una sobrecarga válida del método Sumar(int a, int b)?', options: ['static int Sumar(int a, int b, int c)', 'static double Sumar(int a, int b)', 'static int Total(int a, int b)', 'static int sumar(int a, int b)'], answer: 'static int Sumar(int a, int b, int c)' },
        { code: 'static int Multiplicar(int a, int b) {\n  return a * b;\n}\n\nstatic double Multiplicar(int a, int b) {\n  return a * b * 1.0;\n}', prompt: '¿Este código compila?', options: ['No, porque los dos métodos tienen los mismos parámetros y solo cambia el retorno', 'Sí, sin ningún problema', 'Sí, pero solo si están en clases distintas', 'No, porque falta el modificador override'], answer: 'No, porque los dos métodos tienen los mismos parámetros y solo cambia el retorno' }
      ]
    }
  },
  {
    id: 'csharp-27',
    title: 'Structs',
    subtitle: 'Nivel 27',
    xp: 86,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un <code>struct</code> se parece a una clase (puede tener campos, propiedades y métodos), pero es un <strong>tipo por valor</strong>, mientras que las clases son <strong>tipos por referencia</strong>. Se declara igual que una clase pero con la palabra <code>struct</code>.',
        'Al asignar un struct a otra variable o pasarlo a un método, se copia todo su contenido; modificar la copia no afecta al original. Con una clase, en cambio, ambas variables apuntarían al mismo objeto en memoria.'
      ],
      code:
        '<span class="tok-kw">struct</span> Punto {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">int</span> X;\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">int</span> Y;\n' +
        '}\n\n' +
        'Punto p1 = <span class="tok-kw">new</span> Punto { X = <span class="tok-num">1</span>, Y = <span class="tok-num">2</span> };\n' +
        'Punto p2 = p1; <span class="tok-comment">// se copia el valor completo</span>\n' +
        'p2.X = <span class="tok-num">99</span>;\n' +
        'Console.WriteLine(p1.X); <span class="tok-comment">// 1, p1 no cambió</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre structs.',
      variant: 'plain',
      questions: [
        { prompt: '¿Un struct es un tipo por valor o por referencia?', options: ['Por valor', 'Por referencia', 'Depende del tamaño', 'Ninguno de los dos'], answer: 'Por valor' },
        { prompt: 'Si copias un struct en otra variable y modificas la copia, ¿qué pasa con el original?', options: ['El original no cambia, porque se copió todo su contenido', 'El original cambia también, porque ambas variables apuntan al mismo dato', 'Se lanza una excepción', 'Depende de si el struct es public'], answer: 'El original no cambia, porque se copió todo su contenido' },
        { prompt: '¿Qué palabra clave se usa para declarar un struct?', options: ['struct', 'class', 'record', 'value'], answer: 'struct' },
        { prompt: '¿Cuál es un buen caso de uso típico para un struct?', options: ['Un dato pequeño e inmutable, como un punto con coordenadas X e Y', 'Una clase con cientos de campos y métodos complejos', 'Un objeto que representa una conexión a una base de datos', 'Una lista con miles de elementos'], answer: 'Un dato pequeño e inmutable, como un punto con coordenadas X e Y' }
      ]
    }
  },
  {
    id: 'csharp-28',
    title: 'Enums',
    subtitle: 'Nivel 28',
    xp: 88,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'Un <code>enum</code> define un conjunto fijo de valores con nombre, útil para representar opciones limitadas como los días de la semana o los estados de un pedido, en vez de usar números "mágicos" sueltos.',
        'Por detrás, cada valor de un enum es en realidad un número entero: el primero vale <code>0</code>, el segundo <code>1</code>, y así sucesivamente, salvo que se asignen valores explícitos.'
      ],
      code:
        '<span class="tok-kw">enum</span> DiaSemana {\n' +
        '  Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo\n' +
        '}\n\n' +
        'DiaSemana hoy = DiaSemana.Lunes;\n' +
        'Console.WriteLine(hoy); <span class="tok-comment">// Lunes</span>\n' +
        'Console.WriteLine((<span class="tok-kw">int</span>)hoy); <span class="tok-comment">// 0</span>'
    },
    exercise: {
      instructions: 'Completa el código que usa un enum de estados de pedido.',
      blanks: [
        { id: 'b1', before: '', after: ' Estado {\n  Pendiente, Enviado, Entregado\n}', answer: 'enum', options: ['enum', 'struct', 'class', 'interface'] },
        { id: 'b2', before: 'Estado pedido = Estado.', after: ';', answer: 'Pendiente', options: ['Pendiente', 'Enviado', 'Entregado', 'Cancelado'] },
        { id: 'b3', before: 'if (pedido == Estado.', after: ') {\n  Console.WriteLine("Ya se envió");\n}', answer: 'Enviado', options: ['Enviado', 'Pendiente', 'Entregado', 'Cancelado'] },
        { id: 'b4', before: 'Console.WriteLine((int)Estado.', after: '); // debe imprimir 0', answer: 'Pendiente', options: ['Pendiente', 'Enviado', 'Entregado', 'Cancelado'] }
      ]
    }
  },
  {
    id: 'csharp-29',
    title: 'Arrays multidimensionales',
    subtitle: 'Nivel 29',
    xp: 92,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un array multidimensional (rectangular) representa una tabla de filas y columnas. Se declara con una coma dentro de los corchetes: <code>int[,] matriz = new int[2, 3];</code> crea una matriz de 2 filas por 3 columnas.',
        'Para acceder a un elemento se indican ambos índices separados por coma: <code>matriz[0, 1]</code> es la fila 0, columna 1. La propiedad <code>GetLength(0)</code> devuelve el número de filas y <code>GetLength(1)</code> el número de columnas.'
      ],
      code:
        '<span class="tok-kw">int</span>[,] matriz = <span class="tok-kw">new</span> <span class="tok-kw">int</span>[<span class="tok-num">2</span>, <span class="tok-num">2</span>] { { <span class="tok-num">1</span>, <span class="tok-num">2</span> }, { <span class="tok-num">3</span>, <span class="tok-num">4</span> } };\n' +
        'Console.WriteLine(matriz[<span class="tok-num">1</span>, <span class="tok-num">0</span>]); <span class="tok-comment">// 3</span>\n' +
        'Console.WriteLine(matriz.GetLength(<span class="tok-num">0</span>)); <span class="tok-comment">// 2 filas</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'int[,] matriz = new int[2, 2] { { 1, 2 }, { 3, 4 } };\nConsole.WriteLine(matriz[0, 1]);', prompt: '¿Qué imprime la consola?', options: ['2', '1', '3', '4'], answer: '2' },
        { code: 'int[,] matriz = new int[2, 3];\nConsole.WriteLine(matriz.GetLength(1));', prompt: '¿Qué imprime la consola?', options: ['3', '2', '6', '0'], answer: '3' },
        { code: 'int[,] matriz = new int[3, 3];\nmatriz[1, 1] = 5;\nConsole.WriteLine(matriz[1, 1]);', prompt: '¿Qué imprime la consola?', options: ['5', '0', 'Error', 'null'], answer: '5' },
        { code: 'int[,] matriz = { { 1, 2 }, { 3, 4 }, { 5, 6 } };\nConsole.WriteLine(matriz.GetLength(0));', prompt: '¿Qué imprime la consola?', options: ['3', '2', '6', '1'], answer: '3' }
      ]
    }
  },
  {
    id: 'csharp-30',
    title: 'Colecciones: Dictionary<K,V>',
    subtitle: 'Nivel 30',
    xp: 94,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'Un <code>Dictionary&lt;TClave, TValor&gt;</code> guarda pares clave-valor, como una tabla de búsqueda rápida: cada clave es única y apunta a un valor asociado. Se declara indicando ambos tipos: <code>Dictionary&lt;string, int&gt; edades = new Dictionary&lt;string, int&gt;();</code>.',
        'Para agregar un par se usa <code>Add(clave, valor)</code> o directamente <code>diccionario[clave] = valor</code>. Para saber si una clave existe antes de usarla, conviene comprobarlo con <code>ContainsKey()</code> para evitar una excepción.'
      ],
      code:
        'Dictionary&lt;<span class="tok-kw">string</span>, <span class="tok-kw">int</span>&gt; edades = <span class="tok-kw">new</span> Dictionary&lt;<span class="tok-kw">string</span>, <span class="tok-kw">int</span>&gt;();\n' +
        'edades.Add(<span class="tok-string">"Ana"</span>, <span class="tok-num">16</span>);\n' +
        'edades[<span class="tok-string">"Luis"</span>] = <span class="tok-num">17</span>;\n' +
        'Console.WriteLine(edades[<span class="tok-string">"Ana"</span>]); <span class="tok-comment">// 16</span>'
    },
    exercise: {
      instructions: 'Completa el código que usa un Dictionary&lt;string, int&gt; para guardar edades.',
      blanks: [
        { id: 'b1', before: 'Dictionary&lt;string, int&gt; edades = new Dictionary&lt;string, int&gt;();\nedades.', after: '("Ana", 16);', answer: 'Add', options: ['Add', 'Insert', 'Push', 'Set'] },
        { id: 'b2', before: 'edades["Ana"] = 16;\nif (edades.', after: '("Luis")) {\n  Console.WriteLine("Existe");\n}', answer: 'ContainsKey', options: ['ContainsKey', 'HasKey', 'Contains', 'Exists'] },
        { id: 'b3', before: 'Dictionary&lt;string, int&gt; edades = new Dictionary&lt;string, int&gt;();\nedades.Add("Ana", 16);\nedades.Add("Luis", 17);\nConsole.WriteLine(edades.', after: ');', answer: 'Count', options: ['Count', 'Length', 'Size', 'Total'] },
        { id: 'b4', before: 'edades.Add("Ana", 16);\nedades.', after: '("Ana");', answer: 'Remove', options: ['Remove', 'Delete', 'RemoveAt', 'Erase'] }
      ]
    }
  },
  {
    id: 'csharp-31',
    title: 'Manejo de excepciones (try/catch/finally)',
    subtitle: 'Nivel 31',
    xp: 96,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'El bloque <code>try</code> contiene código que podría lanzar una excepción. Si ocurre un error, la ejecución salta inmediatamente al bloque <code>catch</code> que coincida con el tipo de excepción, sin terminar el resto del <code>try</code>.',
        'El bloque <code>finally</code> se ejecuta siempre al final, haya ocurrido una excepción o no — se usa típicamente para liberar recursos, como cerrar un archivo o una conexión.'
      ],
      code:
        '<span class="tok-kw">try</span> {\n' +
        '  <span class="tok-kw">int</span> resultado = <span class="tok-num">10</span> / <span class="tok-num">0</span>;\n' +
        '} <span class="tok-kw">catch</span> (DivideByZeroException e) {\n' +
        '  Console.WriteLine(<span class="tok-string">"Error: división por cero"</span>);\n' +
        '} <span class="tok-kw">finally</span> {\n' +
        '  Console.WriteLine(<span class="tok-string">"Fin del bloque"</span>);\n' +
        '}'
    },
    exercise: {
      instructions: 'Este código lanza una excepción dentro del try. Ordena las líneas según el orden real en que se imprimen en la consola.',
      items: [
        { id: 'i1', code: 'Console.WriteLine("Inicio");' },
        { id: 'i2', code: 'Console.WriteLine("Dentro del try");' },
        { id: 'i3', code: 'Console.WriteLine("Dentro del catch");' },
        { id: 'i4', code: 'Console.WriteLine("Dentro del finally");' },
        { id: 'i5', code: 'Console.WriteLine("Fin del programa");' }
      ],
      correctOrder: ['i1', 'i2', 'i3', 'i4', 'i5']
    }
  },
  {
    id: 'csharp-32',
    title: 'Excepciones personalizadas',
    subtitle: 'Nivel 32',
    xp: 98,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Se puede crear una excepción propia heredando de <code>Exception</code> (o de una subclase más específica), lo que permite representar errores concretos del dominio del programa, como <code>SaldoInsuficienteException</code>.',
        'Es buena práctica que el constructor de la excepción personalizada reciba un mensaje y lo pase al constructor de la clase base con <code>: base(mensaje)</code>, para que ese mensaje quede disponible en la propiedad <code>Message</code>.'
      ],
      code:
        '<span class="tok-kw">class</span> SaldoInsuficienteException : Exception {\n' +
        '  <span class="tok-kw">public</span> SaldoInsuficienteException(<span class="tok-kw">string</span> mensaje) : <span class="tok-kw">base</span>(mensaje) { }\n' +
        '}\n\n' +
        '<span class="tok-kw">throw</span> <span class="tok-kw">new</span> SaldoInsuficienteException(<span class="tok-string">"No hay saldo suficiente"</span>);'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre excepciones personalizadas.',
      variant: 'plain',
      questions: [
        { prompt: '¿De qué clase debe heredar una excepción personalizada, como mínimo?', options: ['Exception (o una subclase de Exception)', 'Object', 'Error', 'Console'], answer: 'Exception (o una subclase de Exception)' },
        { prompt: '¿Para qué sirve pasar el mensaje con : base(mensaje) en el constructor de una excepción personalizada?', options: ['Para que el mensaje quede disponible en la propiedad Message de la excepción', 'Para imprimir el mensaje automáticamente en consola', 'Es obligatorio aunque no tenga ningún efecto', 'Para convertir la excepción en un warning'], answer: 'Para que el mensaje quede disponible en la propiedad Message de la excepción' },
        { prompt: '¿Con qué palabra clave se lanza una excepción manualmente en C#?', options: ['throw', 'raise', 'catch', 'error'], answer: 'throw' },
        { prompt: '¿Por qué crear una excepción personalizada en vez de usar siempre Exception genérica?', options: ['Permite que quien atrape la excepción sepa exactamente qué tipo de error ocurrió', 'Hace que el programa se ejecute más rápido', 'Es un requisito obligatorio del compilador de C#', 'Evita tener que usar try/catch'], answer: 'Permite que quien atrape la excepción sepa exactamente qué tipo de error ocurrió' }
      ]
    }
  },
  {
    id: 'csharp-33',
    title: 'Nullable types y el operador ?.',
    subtitle: 'Nivel 33',
    xp: 100,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los tipos por valor como <code>int</code> o <code>bool</code> normalmente no pueden ser <code>null</code>. Agregando <code>?</code> después del tipo (<code>int?</code>) se convierte en un tipo <strong>nullable</strong>, que sí puede contener <code>null</code> además de sus valores normales.',
        'El operador de acceso condicional <code>?.</code> evita una excepción al acceder a un miembro de algo que podría ser <code>null</code>: si el valor a la izquierda es <code>null</code>, toda la expresión se corta ahí y da <code>null</code> en vez de lanzar un error.'
      ],
      code:
        '<span class="tok-kw">int</span>? edad = <span class="tok-kw">null</span>;\n' +
        'Console.WriteLine(edad.HasValue); <span class="tok-comment">// False</span>\n\n' +
        '<span class="tok-kw">string</span> nombre = <span class="tok-kw">null</span>;\n' +
        'Console.WriteLine(nombre?.Length); <span class="tok-comment">// (vacío, sin excepción)</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'int? edad = null;\nConsole.WriteLine(edad.HasValue);', prompt: '¿Qué imprime la consola?', options: ['False', 'True', 'null', 'Error'], answer: 'False' },
        { code: 'int? edad = 20;\nConsole.WriteLine(edad.Value);', prompt: '¿Qué imprime la consola?', options: ['20', 'null', 'Error', '20.0'], answer: '20' },
        { code: 'string nombre = null;\nConsole.WriteLine(nombre.Length);', prompt: '¿Qué ocurre al ejecutar este código?', options: ['Se lanza una excepción NullReferenceException', 'Imprime 0', 'Imprime null', 'Imprime una cadena vacía'], answer: 'Se lanza una excepción NullReferenceException' },
        { code: 'string nombre = null;\nConsole.WriteLine(nombre?.Length);', prompt: '¿Qué ocurre al ejecutar este código?', options: ['No se lanza excepción, el resultado es null', 'Se lanza una excepción NullReferenceException', 'Imprime 0', 'No compila'], answer: 'No se lanza excepción, el resultado es null' }
      ]
    }
  },
  {
    id: 'csharp-34',
    title: 'LINQ básico (Where, Select)',
    subtitle: 'Nivel 34',
    xp: 105,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'LINQ (Language Integrated Query) permite consultar colecciones con una sintaxis declarativa. <code>Where()</code> filtra elementos que cumplen una condición, y <code>Select()</code> transforma cada elemento en algo nuevo. Ambos reciben una expresión lambda y requieren <code>using System.Linq;</code>.',
        'Estos métodos no modifican la colección original: devuelven una nueva secuencia con el resultado. Se pueden encadenar, por ejemplo filtrar primero y transformar después — este mismo patrón es el que vas a usar más adelante para trabajar con listas de datos leídos desde una base de datos.'
      ],
      code:
        'List&lt;<span class="tok-kw">int</span>&gt; numeros = <span class="tok-kw">new</span> List&lt;<span class="tok-kw">int</span>&gt; { <span class="tok-num">1</span>, <span class="tok-num">2</span>, <span class="tok-num">3</span>, <span class="tok-num">4</span>, <span class="tok-num">5</span> };\n' +
        '<span class="tok-kw">var</span> pares = numeros.Where(n =&gt; n % <span class="tok-num">2</span> == <span class="tok-num">0</span>);\n' +
        '<span class="tok-kw">var</span> dobles = numeros.Select(n =&gt; n * <span class="tok-num">2</span>);'
    },
    exercise: {
      instructions: 'Completa el código LINQ que filtra y transforma la lista de números.',
      blanks: [
        { id: 'b1', before: 'List&lt;int&gt; numeros = new List&lt;int&gt; { 1, 2, 3, 4, 5, 6 };\nvar pares = numeros.', after: '(n => n % 2 == 0);', answer: 'Where', options: ['Where', 'Select', 'Filter', 'Find'] },
        { id: 'b2', before: 'var dobles = numeros.', after: '(n => n * 2);', answer: 'Select', options: ['Select', 'Where', 'Map', 'Convert'] },
        { id: 'b3', before: 'var mayoresA3 = numeros.Where(n => n > 3).', after: '(n => n * 10);', answer: 'Select', options: ['Select', 'Where', 'Take', 'Order'] },
        { id: 'b4', before: 'var soloPares = numeros.', after: '(n => n % 2 == 0);', answer: 'Where', options: ['Where', 'Select', 'Filter', 'Take'] }
      ]
    }
  },
  {
    id: 'csharp-35',
    title: 'LINQ avanzado (OrderBy, GroupBy, First)',
    subtitle: 'Nivel 35',
    xp: 110,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>OrderBy()</code> ordena una secuencia de forma ascendente según la clave que le indiques (usa <code>OrderByDescending()</code> para orden descendente). <code>GroupBy()</code> agrupa los elementos según una clave, devolviendo grupos que se pueden recorrer.',
        '<code>First()</code> devuelve el primer elemento que cumple una condición y lanza una excepción si no hay ninguno; <code>FirstOrDefault()</code> hace lo mismo pero devuelve el valor por defecto del tipo (por ejemplo <code>0</code> para <code>int</code>) en vez de fallar.'
      ],
      code:
        'List&lt;<span class="tok-kw">int</span>&gt; numeros = <span class="tok-kw">new</span> List&lt;<span class="tok-kw">int</span>&gt; { <span class="tok-num">5</span>, <span class="tok-num">1</span>, <span class="tok-num">4</span>, <span class="tok-num">2</span> };\n' +
        '<span class="tok-kw">var</span> ordenados = numeros.OrderBy(n =&gt; n);\n' +
        '<span class="tok-kw">int</span> primero = numeros.First(n =&gt; n &gt; <span class="tok-num">3</span>); <span class="tok-comment">// 5</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'List&lt;int&gt; numeros = new List&lt;int&gt; { 5, 1, 4, 2 };\nvar ordenados = numeros.OrderBy(n => n).ToList();\nConsole.WriteLine(ordenados[0]);', prompt: '¿Qué imprime la consola?', options: ['1', '5', '4', '2'], answer: '1' },
        { code: 'List&lt;int&gt; numeros = new List&lt;int&gt; { 5, 1, 4, 2 };\nint primero = numeros.First(n => n > 3);\nConsole.WriteLine(primero);', prompt: '¿Qué imprime la consola?', options: ['5', '1', '4', '3'], answer: '5' },
        { code: 'List&lt;int&gt; numeros = new List&lt;int&gt; { 1, 2, 3 };\nint resultado = numeros.FirstOrDefault(n => n > 10);\nConsole.WriteLine(resultado);', prompt: '¿Qué imprime la consola?', options: ['0', 'null', 'Error', '10'], answer: '0' },
        { code: 'List&lt;int&gt; numeros = new List&lt;int&gt; { 1, 2, 3 };\nint resultado = numeros.First(n => n > 10);', prompt: '¿Qué ocurre al ejecutar este código?', options: ['Se lanza una excepción porque ningún elemento cumple la condición', 'Imprime 0', 'Imprime null', 'No compila'], answer: 'Se lanza una excepción porque ningún elemento cumple la condición' }
      ]
    }
  },
  {
    id: 'csharp-36',
    title: 'Expresiones lambda',
    subtitle: 'Nivel 36',
    xp: 114,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una <strong>expresión lambda</strong> es una forma compacta de escribir una función anónima, sin necesidad de declararla como método aparte. Se escribe con la sintaxis <code>(parámetros) =&gt; expresión</code>.',
        'Se usan constantemente con LINQ, pero también se pueden guardar en una variable como cualquier otro valor, por ejemplo <code>Func&lt;int, int&gt; doble = n =&gt; n * 2;</code>.'
      ],
      code:
        'Func&lt;<span class="tok-kw">int</span>, <span class="tok-kw">int</span>&gt; doble = n =&gt; n * <span class="tok-num">2</span>;\n' +
        'Console.WriteLine(doble(<span class="tok-num">5</span>)); <span class="tok-comment">// 10</span>\n\n' +
        'Func&lt;<span class="tok-kw">int</span>, <span class="tok-kw">int</span>, <span class="tok-kw">int</span>&gt; sumar = (a, b) =&gt; a + b;\n' +
        'Console.WriteLine(sumar(<span class="tok-num">2</span>, <span class="tok-num">3</span>)); <span class="tok-comment">// 5</span>'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'Func&lt;int, int&gt; doble = n => n * 2;\nConsole.WriteLine(doble(6));', prompt: '¿Qué imprime la consola?', options: ['12', '6', '8', 'Error'], answer: '12' },
        { code: 'Func&lt;int, int, int&gt; sumar = (a, b) => a + b;\nConsole.WriteLine(sumar(4, 5));', prompt: '¿Qué imprime la consola?', options: ['9', '45', '20', 'Error'], answer: '9' },
        { code: 'List&lt;int&gt; numeros = new List&lt;int&gt; { 1, 2, 3, 4 };\nvar pares = numeros.Where(n => n % 2 == 0).ToList();\nConsole.WriteLine(pares.Count);', prompt: '¿Qué imprime la consola?', options: ['2', '4', '1', '0'], answer: '2' },
        { code: 'Action saludar = () => Console.WriteLine("Hola");\nsaludar();', prompt: '¿Qué imprime la consola?', options: ['Hola', 'saludar', 'Error', 'Nada, falta un parámetro'], answer: 'Hola' }
      ]
    }
  },
  {
    id: 'csharp-37',
    title: 'Genéricos (Generics)',
    subtitle: 'Nivel 37',
    xp: 118,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los <strong>genéricos</strong> permiten escribir una clase o método que funciona con cualquier tipo, indicado con un parámetro de tipo entre <code>&lt; &gt;</code>, como la <code>T</code> en <code>class Caja&lt;T&gt;</code>. El tipo concreto se decide recién al usar la clase.',
        'Esto evita duplicar código: en vez de escribir una clase distinta para cada tipo de dato, se escribe una sola vez <code>Caja&lt;T&gt;</code> y se usa como <code>Caja&lt;int&gt;</code> o <code>Caja&lt;string&gt;</code> según haga falta. Más adelante vas a ver <code>List&lt;Producto&gt;</code> o <code>List&lt;Cliente&gt;</code> — el mismo <code>List&lt;T&gt;</code> genérico funcionando con tus propios modelos de datos.'
      ],
      code:
        '<span class="tok-kw">class</span> Caja&lt;T&gt; {\n' +
        '  <span class="tok-kw">public</span> T Contenido;\n\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">void</span> Mostrar() {\n' +
        '    Console.WriteLine(Contenido);\n' +
        '  }\n' +
        '}\n\n' +
        'Caja&lt;<span class="tok-kw">int</span>&gt; caja = <span class="tok-kw">new</span> Caja&lt;<span class="tok-kw">int</span>&gt;();\n' +
        'caja.Contenido = <span class="tok-num">42</span>;'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre genéricos.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué problema resuelven los genéricos en C#?', options: ['Evitan duplicar código para trabajar con distintos tipos de forma segura', 'Hacen que el código se ejecute sin compilar', 'Eliminan la necesidad de usar clases', 'Permiten declarar variables sin tipo'], answer: 'Evitan duplicar código para trabajar con distintos tipos de forma segura' },
        { prompt: 'En una clase genérica como "class Caja&lt;T&gt;", ¿qué representa la T?', options: ['Un parámetro de tipo que se define al usar la clase', 'El nombre obligatorio de la clase', 'Una palabra clave reservada de C#', 'Un tipo de dato específico de .NET'], answer: 'Un parámetro de tipo que se define al usar la clase' },
        { prompt: '¿Cuál es una ventaja de una lista genérica frente a tener que crear una clase distinta para cada tipo de dato?', options: ['Reutiliza el mismo código para cualquier tipo, manteniendo la seguridad de tipos', 'Es más lento en tiempo de ejecución', 'Solo funciona con tipos numéricos', 'Elimina la necesidad de usar new'], answer: 'Reutiliza el mismo código para cualquier tipo, manteniendo la seguridad de tipos' },
        { prompt: '¿Se pueden aplicar los genéricos también a métodos, no solo a clases?', options: ['Sí, existen los métodos genéricos que aceptan un parámetro de tipo propio', 'No, los genéricos son exclusivos de las clases', 'Solo si el método es static', 'Solo en interfaces'], answer: 'Sí, existen los métodos genéricos que aceptan un parámetro de tipo propio' }
      ]
    }
  },
  {
    id: 'csharp-38',
    title: 'Records como modelos de datos',
    subtitle: 'Nivel 38',
    xp: 122,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un <code>record</code> (desde C# 9) es un tipo pensado para representar <strong>datos inmutables</strong>. Se puede declarar en una sola línea: <code>record Producto(int Id, string Nombre, double Precio);</code>, y el compilador genera automáticamente las propiedades, el constructor y más.',
        'Los records son ideales como <strong>modelo de datos</strong> para representar una fila de una tabla: cada instancia de <code>Producto</code> representa un registro, con sus propiedades correspondiendo a las columnas. Vas a usar exactamente este patrón cuando conectes C# con MySQL más adelante en este módulo.'
      ],
      code:
        '<span class="tok-kw">record</span> Producto(<span class="tok-kw">int</span> Id, <span class="tok-kw">string</span> Nombre, <span class="tok-kw">double</span> Precio);\n\n' +
        'Producto p1 = <span class="tok-kw">new</span> Producto(<span class="tok-num">1</span>, <span class="tok-string">"Mouse"</span>, <span class="tok-num">15</span>);\n' +
        'Producto p2 = <span class="tok-kw">new</span> Producto(<span class="tok-num">1</span>, <span class="tok-string">"Mouse"</span>, <span class="tok-num">15</span>);\n' +
        'Console.WriteLine(p1 == p2); <span class="tok-comment">// True, igualdad por valor</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre records.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué tipo de datos está especialmente pensado un record?', options: ['Datos inmutables, como el estado de una entidad que no cambia', 'Datos que cambian constantemente en un bucle', 'Solo para números enteros', 'Solo para representar excepciones'], answer: 'Datos inmutables, como el estado de una entidad que no cambia' },
        { prompt: 'Si p1 y p2 son dos records Producto con los mismos valores, ¿qué devuelve p1 == p2?', options: ['True, porque los records comparan por valor', 'False, porque son objetos distintos en memoria', 'Depende de si se declararon con new', 'Error de compilación'], answer: 'True, porque los records comparan por valor' },
        { prompt: '¿Por qué un record es una buena opción para representar una fila de una tabla de base de datos?', options: ['Porque sus propiedades pueden representar las columnas de forma clara e inmutable', 'Porque solo los records pueden guardarse en una base de datos', 'Porque los records se conectan automáticamente a MySQL', 'Porque no permiten más de dos propiedades'], answer: 'Porque sus propiedades pueden representar las columnas de forma clara e inmutable' },
        { prompt: '¿Qué genera automáticamente el compilador al declarar un record con parámetros, como Producto(int Id, string Nombre, double Precio)?', options: ['Las propiedades y el constructor, entre otras cosas', 'Solo el nombre de la clase', 'Un método Main automático', 'Una interfaz vacía'], answer: 'Las propiedades y el constructor, entre otras cosas' }
      ]
    }
  },
  {
    id: 'csharp-39',
    title: 'Async/await en C#',
    subtitle: 'Nivel 39',
    xp: 126,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un método marcado como <code>async</code> puede usar <code>await</code> para esperar una operación que toma tiempo (como leer un archivo, llamar a una API, o consultar una base de datos) <strong>sin bloquear</strong> el hilo de ejecución mientras espera.',
        'Un método <code>async</code> normalmente devuelve <code>Task</code> (si no devuelve ningún valor útil) o <code>Task&lt;T&gt;</code> (si devuelve un valor de tipo <code>T</code>). Las operaciones de base de datos suelen tener una versión async (como <code>ExecuteReaderAsync()</code>), muy usada en aplicaciones reales para no congelar la interfaz mientras se espera al servidor.'
      ],
      code:
        '<span class="tok-kw">static</span> <span class="tok-kw">async</span> Task&lt;<span class="tok-kw">string</span>&gt; ObtenerDatos() {\n' +
        '  <span class="tok-kw">await</span> Task.Delay(<span class="tok-num">1000</span>); <span class="tok-comment">// simula una espera</span>\n' +
        '  <span class="tok-kw">return</span> <span class="tok-string">"Datos listos"</span>;\n' +
        '}\n\n' +
        '<span class="tok-kw">string</span> resultado = <span class="tok-kw">await</span> ObtenerDatos();'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre async/await.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué permite hacer await dentro de un método async?', options: ['Esperar una operación larga sin bloquear el hilo de ejecución', 'Detener el programa por completo hasta reiniciarlo', 'Ejecutar dos métodos exactamente al mismo tiempo en el mismo hilo', 'Convertir cualquier método en static'], answer: 'Esperar una operación larga sin bloquear el hilo de ejecución' },
        { prompt: '¿Qué tipo de retorno usa normalmente un método async que no devuelve ningún valor útil?', options: ['Task', 'void', 'int', 'string'], answer: 'Task' },
        { prompt: '¿Qué tipo de retorno usa un método async que sí devuelve un valor de tipo string?', options: ['Task de string', 'string', 'void', 'async string'], answer: 'Task de string' },
        { prompt: '¿Por qué muchas operaciones de base de datos ofrecen una versión async, como ExecuteReaderAsync()?', options: ['Para no bloquear el programa mientras se espera la respuesta del servidor de base de datos', 'Porque las consultas SQL no funcionan de forma síncrona', 'Porque son obligatorias en cualquier conexión', 'Porque hacen que la consulta se ejecute dos veces'], answer: 'Para no bloquear el programa mientras se espera la respuesta del servidor de base de datos' }
      ]
    }
  },
  {
    id: 'csharp-40',
    title: 'Conectar C# a una base de datos MySQL',
    subtitle: 'Nivel 40',
    xp: 130,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Para que un programa en C# pueda leer y escribir en una base de datos MySQL, necesita un paquete conector (como <strong>MySqlConnector</strong>, instalable con NuGet) y la clase <code>MySqlConnection</code>, que representa la conexión abierta hacia el servidor.',
        'La conexión se configura con una <strong>cadena de conexión</strong> (connection string): un texto con el servidor, la base de datos y las credenciales. Siempre hay que cerrar la conexión cuando se termina de usar, normalmente envolviéndola en un bloque <code>using</code> para que se cierre automáticamente aunque ocurra un error.'
      ],
      code:
        '<span class="tok-kw">using</span> MySqlConnector;\n\n' +
        '<span class="tok-kw">string</span> cadena = <span class="tok-string">"Server=localhost;Database=devquest;User=root;Password=1234;"</span>;\n\n' +
        '<span class="tok-kw">using</span> (<span class="tok-kw">var</span> conexion = <span class="tok-kw">new</span> MySqlConnection(cadena)) {\n' +
        '  conexion.Open();\n' +
        '  Console.WriteLine(<span class="tok-string">"Conexión abierta correctamente"</span>);\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre cómo conectar C# con MySQL.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué clase representa la conexión hacia un servidor MySQL desde C#?', options: ['MySqlConnection', 'MySqlCommand', 'MySqlDataReader', 'MySqlServer'], answer: 'MySqlConnection' },
        { prompt: '¿Qué es una "cadena de conexión" (connection string)?', options: ['Un texto con el servidor, la base de datos y las credenciales necesarias para conectarse', 'Una consulta SQL completa', 'El nombre de una tabla', 'Un tipo de dato de C#'], answer: 'Un texto con el servidor, la base de datos y las credenciales necesarias para conectarse' },
        { prompt: '¿Por qué conviene envolver la MySqlConnection en un bloque "using"?', options: ['Para que la conexión se cierre automáticamente aunque ocurra un error', 'Para que la conexión nunca se cierre', 'Porque es obligatorio en cualquier clase de C#', 'Para que la consulta se ejecute más rápido'], answer: 'Para que la conexión se cierre automáticamente aunque ocurra un error' },
        { prompt: '¿Qué método abre efectivamente la conexión con el servidor de base de datos?', options: ['Open()', 'Connect()', 'Start()', 'Init()'], answer: 'Open()' }
      ]
    }
  },
  {
    id: 'csharp-41',
    title: 'Ejecutar comandos SQL desde C#',
    subtitle: 'Nivel 41',
    xp: 134,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>MySqlCommand</code> representa una instrucción SQL que se va a ejecutar sobre una conexión abierta. Para operaciones que NO devuelven filas (<code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>, <code>CREATE TABLE</code>), se usa el método <code>ExecuteNonQuery()</code>, que devuelve cuántas filas fueron afectadas.',
        'Esto conecta directamente con tres de las cuatro operaciones del CRUD: <strong>Create</strong> (INSERT), <strong>Update</strong> (UPDATE) y <strong>Delete</strong> (DELETE) se ejecutan todas de la misma forma desde C# — solo cambia el texto de la consulta SQL que le pasás al MySqlCommand.'
      ],
      code:
        '<span class="tok-kw">using</span> (<span class="tok-kw">var</span> conexion = <span class="tok-kw">new</span> MySqlConnection(cadena)) {\n' +
        '  conexion.Open();\n' +
        '  <span class="tok-kw">var</span> comando = <span class="tok-kw">new</span> MySqlCommand(\n' +
        '    <span class="tok-string">"INSERT INTO productos (nombre, precio) VALUES (\'Mouse\', 15)"</span>, conexion);\n' +
        '  <span class="tok-kw">int</span> filas = comando.ExecuteNonQuery();\n' +
        '  Console.WriteLine(filas + <span class="tok-string">" fila(s) insertada(s)"</span>);\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'var comando = new MySqlCommand("UPDATE productos SET precio = 20 WHERE id = 1", conexion);\nint filas = comando.ExecuteNonQuery();\nConsole.WriteLine(filas);', prompt: 'Si la consulta actualizó exactamente una fila, ¿qué representa el valor que imprime la consola?', options: ['El número de filas afectadas por la operación (1)', 'El nuevo precio del producto', 'El id del producto actualizado', 'Siempre imprime 0'], answer: 'El número de filas afectadas por la operación (1)' },
        { code: 'var comando = new MySqlCommand("DELETE FROM productos WHERE id = 3", conexion);\ncomando.ExecuteNonQuery();', prompt: '¿Qué método de MySqlCommand ejecuta correctamente esta consulta DELETE?', options: ['ExecuteNonQuery()', 'ExecuteReader()', 'ExecuteScalar()', 'Open()'], answer: 'ExecuteNonQuery()' },
        { code: 'var comando = new MySqlCommand("SELECT * FROM productos", conexion);\nint filas = comando.ExecuteNonQuery();', prompt: '¿Por qué NO conviene usar ExecuteNonQuery() para esta consulta SELECT?', options: ['ExecuteNonQuery() no devuelve las filas de resultado, solo un conteo de filas afectadas', 'SELECT no es una consulta SQL válida', 'ExecuteNonQuery() borra la tabla automáticamente', 'No compila'], answer: 'ExecuteNonQuery() no devuelve las filas de resultado, solo un conteo de filas afectadas' },
        { code: 'var conexion = new MySqlConnection(cadena);\nvar comando = new MySqlCommand("INSERT INTO productos (nombre) VALUES (\'Teclado\')", conexion);\ncomando.ExecuteNonQuery();', prompt: '¿Qué problema tiene este código?', options: ['Nunca se llamó a conexion.Open(), así que fallará al ejecutar el comando', 'INSERT no admite una sola columna', 'Falta el punto y coma en la consulta', 'MySqlCommand no existe en C#'], answer: 'Nunca se llamó a conexion.Open(), así que fallará al ejecutar el comando' }
      ]
    }
  },
  {
    id: 'csharp-42',
    title: 'Leer resultados con MySqlDataReader',
    subtitle: 'Nivel 42',
    xp: 138,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Para consultas que sí devuelven filas (<code>SELECT</code>, la "R" de CRUD), se usa <code>ExecuteReader()</code>, que devuelve un <code>MySqlDataReader</code>: un cursor que se recorre fila por fila llamando a <code>Read()</code>, el cual devuelve <code>true</code> mientras haya una fila más disponible.',
        'Dentro de cada fila se accede a las columnas por nombre, por ejemplo <code>reader.GetString("nombre")</code> o <code>reader.GetDouble("precio")</code>, indicando el tipo correcto de cada una.'
      ],
      code:
        '<span class="tok-kw">var</span> comando = <span class="tok-kw">new</span> MySqlCommand(<span class="tok-string">"SELECT nombre, precio FROM productos"</span>, conexion);\n' +
        '<span class="tok-kw">using</span> (<span class="tok-kw">var</span> reader = comando.ExecuteReader()) {\n' +
        '  <span class="tok-kw">while</span> (reader.Read()) {\n' +
        '    Console.WriteLine(reader.GetString(<span class="tok-string">"nombre"</span>) + <span class="tok-string">" - "</span> + reader.GetDouble(<span class="tok-string">"precio"</span>));\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'var comando = new MySqlCommand("SELECT nombre FROM productos", conexion);\nvar reader = comando.ExecuteReader();\nint contador = 0;\nwhile (reader.Read()) {\n  contador++;\n}\nConsole.WriteLine(contador);', prompt: 'Si la tabla productos tiene 5 filas, ¿qué imprime la consola?', options: ['5', '0', '1', 'Error'], answer: '5' },
        { code: 'var reader = comando.ExecuteReader();\nbool hayFila = reader.Read();', prompt: '¿Qué representa el valor booleano que devuelve reader.Read()?', options: ['Si hay una fila más disponible para leer', 'Si la consulta tuvo éxito en general', 'Si la tabla existe', 'Si la conexión sigue abierta'], answer: 'Si hay una fila más disponible para leer' },
        { code: 'var comando = new MySqlCommand("SELECT nombre, precio FROM productos", conexion);\nvar reader = comando.ExecuteReader();\nwhile (reader.Read()) {\n  string nombre = reader.GetString("nombre");\n  double precio = reader.GetDouble("precio");\n  Console.WriteLine(nombre + ": " + precio);\n}', prompt: '¿Qué patrón describe mejor este código?', options: ['Recorre cada fila del resultado e imprime sus columnas nombre y precio', 'Inserta una fila nueva por cada vuelta del bucle', 'Elimina todas las filas de la tabla', 'Cuenta cuántas columnas tiene la tabla'], answer: 'Recorre cada fila del resultado e imprime sus columnas nombre y precio' },
        { code: 'var comando = new MySqlCommand("SELECT COUNT(*) AS total FROM productos", conexion);\nvar reader = comando.ExecuteReader();\nreader.Read();\nint total = reader.GetInt32("total");\nConsole.WriteLine(total);', prompt: 'Si hay 8 productos en la tabla, ¿qué imprime la consola?', options: ['8', '1', '0', 'Error, hace falta un bucle while'], answer: '8' }
      ]
    }
  },
  {
    id: 'csharp-43',
    title: 'Consultas parametrizadas y seguridad',
    subtitle: 'Nivel 43',
    xp: 142,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Construir una consulta SQL concatenando texto directamente con datos del usuario (por ejemplo <code>"...WHERE nombre = \'" + nombreIngresado + "\'"</code>) es peligroso: si alguien escribe algo malicioso en ese campo, puede alterar la consulta completa. Esto se llama <strong>inyección SQL</strong>.',
        'La solución es usar <strong>parámetros</strong>: se escribe un marcador como <code>@nombre</code> en la consulta y se le asigna el valor por separado con <code>comando.Parameters.AddWithValue("@nombre", valor)</code>. El motor de la base de datos siempre trata ese valor como un dato, nunca como código SQL — nunca deberías construir una consulta CRUD concatenando texto del usuario.'
      ],
      code:
        '<span class="tok-comment">// ❌ Peligroso: vulnerable a inyección SQL</span>\n' +
        '<span class="tok-kw">var</span> malo = <span class="tok-kw">new</span> MySqlCommand(\n' +
        '  <span class="tok-string">"SELECT * FROM usuarios WHERE nombre = \'"</span> + nombreIngresado + <span class="tok-string">"\'"</span>, conexion);\n\n' +
        '<span class="tok-comment">// ✅ Seguro: consulta parametrizada</span>\n' +
        '<span class="tok-kw">var</span> bueno = <span class="tok-kw">new</span> MySqlCommand(\n' +
        '  <span class="tok-string">"SELECT * FROM usuarios WHERE nombre = @nombre"</span>, conexion);\n' +
        'bueno.Parameters.AddWithValue(<span class="tok-string">"@nombre"</span>, nombreIngresado);'
    },
    exercise: {
      instructions: 'Analiza cada situación sobre seguridad en consultas SQL desde C#.',
      variant: 'code',
      questions: [
        { code: 'string sql = "SELECT * FROM usuarios WHERE nombre = \'" + entrada + "\'";\nvar comando = new MySqlCommand(sql, conexion);', prompt: '¿Qué riesgo tiene este código si "entrada" viene directamente de lo que escribió un usuario?', options: ['Es vulnerable a inyección SQL, porque concatena texto sin validar', 'Ninguno, así se hace siempre en C#', 'Es más rápido que usar parámetros', 'No compila'], answer: 'Es vulnerable a inyección SQL, porque concatena texto sin validar' },
        { code: 'var comando = new MySqlCommand("SELECT * FROM usuarios WHERE nombre = @nombre", conexion);\ncomando.Parameters.AddWithValue("@nombre", entrada);', prompt: '¿Por qué esta versión es segura aunque "entrada" contenga texto malicioso?', options: ['Porque el valor se envía por separado y nunca se interpreta como parte del código SQL', 'Porque @nombre elimina automáticamente las comillas', 'Porque MySqlCommand rechaza cualquier texto largo', 'No es más segura, da igual cuál uses'], answer: 'Porque el valor se envía por separado y nunca se interpreta como parte del código SQL' },
        { code: 'comando.Parameters.AddWithValue("@precio", 19.99);', prompt: '¿Qué hace exactamente este método?', options: ['Asigna un valor al marcador de parámetro @precio de la consulta', 'Ejecuta la consulta inmediatamente', 'Crea una columna nueva llamada precio', 'Convierte el precio a texto'], answer: 'Asigna un valor al marcador de parámetro @precio de la consulta' },
        { code: 'var comando = new MySqlCommand("INSERT INTO productos (nombre, precio) VALUES (@nombre, @precio)", conexion);\ncomando.Parameters.AddWithValue("@nombre", "Mouse");\ncomando.Parameters.AddWithValue("@precio", 15);', prompt: 'Además de la seguridad contra inyección SQL, ¿qué otra ventaja tienen los parámetros?', options: ['Evitan errores de formato con comillas, comas decimales o fechas dentro del texto SQL', 'Hacen que la tabla se cree automáticamente', 'Permiten usar cualquier nombre de tabla sin declararla', 'Eliminan la necesidad de abrir la conexión'], answer: 'Evitan errores de formato con comillas, comas decimales o fechas dentro del texto SQL' }
      ]
    }
  },
  {
    id: 'csharp-44',
    title: 'Mapear filas a objetos C#',
    subtitle: 'Nivel 44',
    xp: 146,
    type: 'quiz',
    theory: {
      paragraphs: [
        'En una aplicación real conviene no trabajar directamente con un <code>MySqlDataReader</code> por todo el programa: es más limpio convertir cada fila en un objeto C# (como el <code>record Producto</code> que ya viste) apenas se lee, y trabajar con esa <code>List&lt;Producto&gt;</code> en el resto del código.',
        'Esto separa la capa de acceso a datos de la lógica del programa: si mañana cambia la consulta SQL, el resto del código que usa <code>List&lt;Producto&gt;</code> no se entera de nada.'
      ],
      code:
        '<span class="tok-kw">record</span> Producto(<span class="tok-kw">int</span> Id, <span class="tok-kw">string</span> Nombre, <span class="tok-kw">double</span> Precio);\n\n' +
        'List&lt;Producto&gt; productos = <span class="tok-kw">new</span> List&lt;Producto&gt;();\n' +
        '<span class="tok-kw">using</span> (<span class="tok-kw">var</span> reader = comando.ExecuteReader()) {\n' +
        '  <span class="tok-kw">while</span> (reader.Read()) {\n' +
        '    productos.Add(<span class="tok-kw">new</span> Producto(\n' +
        '      reader.GetInt32(<span class="tok-string">"id"</span>),\n' +
        '      reader.GetString(<span class="tok-string">"nombre"</span>),\n' +
        '      reader.GetDouble(<span class="tok-string">"precio"</span>)\n' +
        '    ));\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'record Producto(int Id, string Nombre, double Precio);\n\nList&lt;Producto&gt; productos = new List&lt;Producto&gt;();\nwhile (reader.Read()) {\n  productos.Add(new Producto(reader.GetInt32("id"), reader.GetString("nombre"), reader.GetDouble("precio")));\n}\nConsole.WriteLine(productos.Count);', prompt: 'Si la consulta devolvió 4 filas, ¿qué imprime la consola?', options: ['4', '1', '0', 'Error'], answer: '4' },
        { code: 'record Producto(int Id, string Nombre, double Precio);\n\nvar p = new Producto(1, "Mouse", 15);\nConsole.WriteLine(p.Nombre);', prompt: '¿Qué imprime la consola?', options: ['Mouse', '1', '15', 'Error'], answer: 'Mouse' },
        { code: 'List&lt;Producto&gt; productos = LeerProductosDesdeLaBaseDeDatos();\nvar caros = productos.Where(p => p.Precio > 10).ToList();\nConsole.WriteLine(caros.Count);', prompt: '¿Qué representa la variable "caros" en este código?', options: ['Una lista filtrada, en memoria, de los productos con precio mayor a 10', 'Una nueva tabla en la base de datos', 'El precio total de todos los productos', 'Una consulta SQL sin ejecutar'], answer: 'Una lista filtrada, en memoria, de los productos con precio mayor a 10' },
        { code: 'MySqlDataReader reader = comando.ExecuteReader();\n// se usa reader.GetString(...) directamente en 10 lugares distintos del programa', prompt: '¿Cuál es la principal desventaja de usar el MySqlDataReader directamente en muchas partes del programa, en vez de mapear a objetos una sola vez?', options: ['El código queda acoplado a los detalles de la base de datos en muchos lugares, más difícil de mantener', 'MySqlDataReader no permite leer más de una columna', 'Es imposible de compilar', 'Los datos se leen en un orden aleatorio'], answer: 'El código queda acoplado a los detalles de la base de datos en muchos lugares, más difícil de mantener' }
      ]
    }
  },
  {
    id: 'csharp-45',
    title: 'Patrón repositorio para CRUD',
    subtitle: 'Nivel 45',
    xp: 150,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un <strong>repositorio</strong> es una clase que agrupa todas las operaciones de acceso a datos de una entidad — por ejemplo <code>ProductoRepository</code> con los métodos <code>Crear</code>, <code>ObtenerTodos</code>, <code>Actualizar</code> y <code>Eliminar</code> — en vez de esparcir código SQL por todo el programa.',
        'Cada método corresponde a una letra del CRUD y a una operación SQL: <strong>C</strong>rear→<code>INSERT</code>, <strong>R</strong>ead→<code>SELECT</code>, <strong>U</strong>pdate→<code>UPDATE</code>, <strong>D</strong>elete→<code>DELETE</code>. El resto del programa solo llama a estos métodos, sin preocuparse de conexiones ni de SQL.'
      ],
      code:
        '<span class="tok-kw">class</span> ProductoRepository {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">void</span> Crear(Producto p) { <span class="tok-comment">/* INSERT */</span> }\n' +
        '  <span class="tok-kw">public</span> List&lt;Producto&gt; ObtenerTodos() { <span class="tok-comment">/* SELECT */</span> <span class="tok-kw">return</span> <span class="tok-kw">new</span> List&lt;Producto&gt;(); }\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">void</span> Actualizar(Producto p) { <span class="tok-comment">/* UPDATE */</span> }\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">void</span> Eliminar(<span class="tok-kw">int</span> id) { <span class="tok-comment">/* DELETE */</span> }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre el patrón repositorio.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué agrupa una clase repositorio como ProductoRepository?', options: ['Todas las operaciones de acceso a datos de una entidad, en un solo lugar', 'Solo la interfaz visual del programa', 'Las pruebas unitarias del proyecto', 'Los mensajes de error del sistema'], answer: 'Todas las operaciones de acceso a datos de una entidad, en un solo lugar' },
        { prompt: '¿Qué operación SQL corresponde al método Crear de un repositorio?', options: ['INSERT', 'SELECT', 'UPDATE', 'DELETE'], answer: 'INSERT' },
        { prompt: '¿Qué operación SQL corresponde al método ObtenerTodos de un repositorio?', options: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'], answer: 'SELECT' },
        { prompt: '¿Cuál es la principal ventaja de usar un repositorio en vez de escribir SQL directamente en cada parte del programa?', options: ['El resto del código no necesita conocer los detalles de la base de datos, solo llama a métodos claros', 'Hace que las consultas SQL se ejecuten más rápido', 'Elimina por completo la necesidad de una base de datos', 'Evita tener que usar MySqlConnection'], answer: 'El resto del código no necesita conocer los detalles de la base de datos, solo llama a métodos claros' }
      ]
    }
  },
  {
    id: 'csharp-46',
    title: 'Manejo de errores al conectar con la base de datos',
    subtitle: 'Nivel 46',
    xp: 154,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Muchas cosas pueden salir mal al hablar con una base de datos: el servidor puede estar apagado, las credenciales pueden ser incorrectas, o la red puede fallar. Por eso las operaciones de base de datos casi siempre van dentro de un <code>try/catch</code>.',
        'El conector lanza excepciones de tipo <code>MySqlException</code> cuando algo falla del lado del servidor; es buena práctica capturarla específicamente (antes que una <code>Exception</code> genérica) para poder mostrar un mensaje más útil en vez de que el programa se cierre de golpe.'
      ],
      code:
        '<span class="tok-kw">try</span> {\n' +
        '  <span class="tok-kw">using</span> (<span class="tok-kw">var</span> conexion = <span class="tok-kw">new</span> MySqlConnection(cadena)) {\n' +
        '    conexion.Open();\n' +
        '    <span class="tok-comment">// ... operaciones CRUD ...</span>\n' +
        '  }\n' +
        '} <span class="tok-kw">catch</span> (MySqlException ex) {\n' +
        '  Console.WriteLine(<span class="tok-string">"Error de base de datos: "</span> + ex.Message);\n' +
        '} <span class="tok-kw">catch</span> (Exception ex) {\n' +
        '  Console.WriteLine(<span class="tok-string">"Error inesperado: "</span> + ex.Message);\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'try {\n  var conexion = new MySqlConnection("Server=noexiste;Database=x;User=root;Password=1234;");\n  conexion.Open();\n} catch (MySqlException ex) {\n  Console.WriteLine("Error de base de datos");\n}', prompt: 'Si el servidor "noexiste" no responde, ¿qué imprime la consola?', options: ['Error de base de datos', 'Nada, el programa se cierra sin avisar', 'Conexión abierta correctamente', 'Se reintenta automáticamente sin parar'], answer: 'Error de base de datos' },
        { code: 'try {\n  // operaciones con la base de datos\n} catch (MySqlException ex) {\n  Console.WriteLine("Error de base de datos: " + ex.Message);\n} catch (Exception ex) {\n  Console.WriteLine("Error inesperado: " + ex.Message);\n}', prompt: '¿Por qué el catch de MySqlException va ANTES que el catch de Exception genérica?', options: ['Porque C# evalúa los catch en orden y necesita el más específico primero para que se use correctamente', 'El orden no importa en absoluto', 'Porque Exception no puede capturar errores de bases de datos', 'Porque MySqlException siempre debe ir al final'], answer: 'Porque C# evalúa los catch en orden y necesita el más específico primero para que se use correctamente' },
        { code: 'try {\n  conexion.Open();\n  var comando = new MySqlCommand("INSERT INTO productos (nombre) VALUES (\'Mouse\')", conexion);\n  comando.ExecuteNonQuery();\n} catch (MySqlException) {\n  // no hace nada\n}', prompt: '¿Qué problema tiene capturar la excepción sin hacer nada dentro del catch?', options: ['El error queda oculto: nadie se entera de que la operación falló', 'No tiene ningún problema, es una buena práctica', 'Hace que el programa sea más rápido', 'MySqlException no se puede capturar así'], answer: 'El error queda oculto: nadie se entera de que la operación falló' },
        { code: 'void GuardarProducto(Producto p) {\n  using (var conexion = new MySqlConnection(cadena)) {\n    conexion.Open();\n    // ... INSERT ...\n  }\n}', prompt: 'Si Open() lanza una excepción y este método NO tiene try/catch, ¿qué ocurre?', options: ['La excepción sube hasta quien llamó a GuardarProducto, que debería manejarla', 'El programa la ignora silenciosamente', 'Se guarda igual el producto', 'C# la convierte automáticamente en un mensaje en pantalla'], answer: 'La excepción sube hasta quien llamó a GuardarProducto, que debería manejarla' }
      ]
    }
  },
  {
    id: 'csharp-47',
    title: 'Organizar un proyecto CRUD',
    subtitle: 'Nivel 47',
    xp: 158,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'A medida que un proyecto crece, conviene separar el código en archivos con responsabilidades claras en vez de meter todo en <code>Program.cs</code>: por ejemplo <code>Models/Producto.cs</code> (el modelo de datos), <code>Data/ProductoRepository.cs</code> (el acceso a la base de datos), y <code>Program.cs</code> (el punto de entrada que los conecta).',
        'Esta organización no cambia cómo funciona el programa, pero lo hace mucho más fácil de mantener — y es exactamente la estructura que vas a usar en el proyecto integrador de este módulo.'
      ],
      code:
        'MiAppCRUD/\n' +
        '├── Models/\n' +
        '│   └── Producto.cs\n' +
        '├── Data/\n' +
        '│   └── ProductoRepository.cs\n' +
        '└── Program.cs'
    },
    exercise: {
      instructions: 'Ordena los pasos en el orden lógico en que se construye un proyecto CRUD organizado.',
      items: [
        { id: 'i1', code: '1. Definir el modelo Producto en Models/Producto.cs (un record con Id, Nombre, Precio)' },
        { id: 'i2', code: '2. Crear ProductoRepository en Data/, con los métodos Crear, ObtenerTodos, Actualizar y Eliminar' },
        { id: 'i3', code: '3. Abrir la conexión a MySQL en Program.cs' },
        { id: 'i4', code: '4. Usar el repositorio desde Program.cs para ejecutar las operaciones CRUD' }
      ],
      correctOrder: ['i1', 'i2', 'i3', 'i4']
    }
  },
  {
    id: 'csharp-48',
    title: 'Construir un menú CRUD interactivo',
    subtitle: 'Nivel 48',
    xp: 162,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'Una app CRUD de consola típica muestra un menú en bucle: mientras el usuario no elija salir, se le muestran las opciones (Crear, Ver, Actualizar, Eliminar, Salir), se lee su elección con <code>Console.ReadLine()</code>, y con un <code>switch</code> se ejecuta la acción correspondiente antes de volver a mostrar el menú.',
        'Este bucle es el "pegamento" que conecta todo lo que aprendiste: usa el repositorio para ejecutar cada operación sobre la base de datos, y usa la entrada de consola para saber qué quiere hacer el usuario.'
      ],
      code:
        '<span class="tok-kw">bool</span> salir = <span class="tok-kw">false</span>;\n' +
        '<span class="tok-kw">while</span> (!salir) {\n' +
        '  Console.WriteLine(<span class="tok-string">"1) Crear  2) Ver todos  3) Actualizar  4) Eliminar  5) Salir"</span>);\n' +
        '  <span class="tok-kw">string</span> opcion = Console.ReadLine();\n' +
        '  <span class="tok-kw">switch</span> (opcion) {\n' +
        '    <span class="tok-kw">case</span> <span class="tok-string">"1"</span>: <span class="tok-comment">/* repo.Crear(...) */</span> <span class="tok-kw">break</span>;\n' +
        '    <span class="tok-kw">case</span> <span class="tok-string">"5"</span>: salir = <span class="tok-kw">true</span>; <span class="tok-kw">break</span>;\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Ordena los pasos de UNA vuelta del bucle del menú CRUD.',
      items: [
        { id: 'i1', code: '1. Mostrar las opciones del menú en pantalla (Crear, Ver, Actualizar, Eliminar, Salir)' },
        { id: 'i2', code: '2. Leer la opción elegida por el usuario con Console.ReadLine()' },
        { id: 'i3', code: '3. Ejecutar la acción del repositorio correspondiente según la opción (switch)' },
        { id: 'i4', code: '4. Repetir el bucle y volver a mostrar el menú, salvo que el usuario haya elegido salir' }
      ],
      correctOrder: ['i1', 'i2', 'i3', 'i4']
    }
  },
  {
    id: 'csharp-49',
    title: 'Buenas prácticas para aplicaciones CRUD',
    subtitle: 'Nivel 49',
    xp: 166,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Cerrar siempre las conexiones (con <code>using</code>), usar <strong>siempre</strong> consultas parametrizadas, y no mostrarle al usuario final los mensajes de error técnicos exactos son prácticas básicas para una app CRUD confiable y segura.',
        'También conviene <strong>validar los datos antes</strong> de enviarlos a la base de datos (por ejemplo, que un precio no sea negativo o que un nombre no esté vacío), en vez de confiar en que la base de datos rechace todo lo inválido.'
      ],
      code:
        '<span class="tok-kw">if</span> (precio &lt; <span class="tok-num">0</span>) {\n' +
        '  Console.WriteLine(<span class="tok-string">"El precio no puede ser negativo"</span>);\n' +
        '  <span class="tok-kw">return</span>;\n' +
        '}\n' +
        '<span class="tok-comment">// recién acá se ejecuta el INSERT</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre buenas prácticas en aplicaciones CRUD.',
      variant: 'plain',
      questions: [
        { prompt: '¿Por qué conviene validar los datos en C# antes de enviarlos a la base de datos?', options: ['Para detectar errores antes y dar un mensaje más claro, en vez de depender solo de la base de datos', 'Porque MySQL no puede rechazar datos inválidos', 'Porque hace que las consultas se ejecuten más rápido', 'No es necesario, es trabajo exclusivo del usuario'], answer: 'Para detectar errores antes y dar un mensaje más claro, en vez de depender solo de la base de datos' },
        { prompt: '¿Qué práctica de seguridad NUNCA debería faltar en las operaciones CRUD de una app real?', options: ['Usar consultas parametrizadas para todos los datos que vienen del usuario', 'Concatenar los datos directamente en el texto SQL', 'Deshabilitar el manejo de errores para simplificar el código', 'Guardar la contraseña de la base de datos en el código sin protección'], answer: 'Usar consultas parametrizadas para todos los datos que vienen del usuario' },
        { prompt: '¿Por qué es recomendable no mostrarle al usuario final el mensaje de error técnico exacto de la base de datos?', options: ['Puede revelar detalles internos del sistema y no es útil para alguien que no es programador', 'Porque los usuarios nunca cometen errores', 'Porque MySQL no permite mostrar errores', 'Porque siempre hace que el programa se cierre'], answer: 'Puede revelar detalles internos del sistema y no es útil para alguien que no es programador' },
        { prompt: '¿Qué pasa si nunca cerrás las conexiones a la base de datos en una app que se usa por mucho tiempo?', options: ['Se pueden agotar las conexiones disponibles en el servidor, afectando a toda la aplicación', 'No pasa nada, MySQL las cierra apenas se abre otra', 'La aplicación se vuelve más rápida', 'Es obligatorio dejarlas abiertas para que funcione'], answer: 'Se pueden agotar las conexiones disponibles en el servidor, afectando a toda la aplicación' }
      ]
    }
  },
  {
    id: 'csharp-50',
    title: 'Proyecto integrador: tu app CRUD completa',
    subtitle: 'Nivel 50',
    xp: 170,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Llegaste al final del módulo de C#. Con todo lo aprendido —desde variables y programación orientada a objetos hasta conectar con MySQL— ya tenés todo lo necesario para construir una aplicación CRUD completa: un programa de consola que permite <strong>Crear</strong>, <strong>Leer</strong>, <strong>Actualizar</strong> y <strong>Eliminar</strong> registros de una tabla de tu base de datos.',
        'Este repaso final combina esas piezas: el modelo de datos (record), el repositorio con consultas parametrizadas, y el menú interactivo — exactamente el mismo patrón que vas a usar en cualquier proyecto real que conecte C# con MySQL. Repasa también el módulo de MySQL: las consultas que escribas ahí son las que tu repositorio va a ejecutar.'
      ],
      code:
        '<span class="tok-kw">public</span> <span class="tok-kw">void</span> Crear(Producto p) {\n' +
        '  <span class="tok-kw">using</span> (<span class="tok-kw">var</span> conexion = <span class="tok-kw">new</span> MySqlConnection(cadena)) {\n' +
        '    conexion.Open();\n' +
        '    <span class="tok-kw">var</span> comando = <span class="tok-kw">new</span> MySqlCommand(\n' +
        '      <span class="tok-string">"INSERT INTO productos (nombre, precio) VALUES (@nombre, @precio)"</span>, conexion);\n' +
        '    comando.Parameters.AddWithValue(<span class="tok-string">"@nombre"</span>, p.Nombre);\n' +
        '    comando.Parameters.AddWithValue(<span class="tok-string">"@precio"</span>, p.Precio);\n' +
        '    comando.ExecuteNonQuery();\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código de una mini app CRUD y decide cuál es el resultado exacto. Este repaso final combina varios conceptos del módulo.',
      variant: 'code',
      questions: [
        { code: 'public void Crear(Producto p) {\n  using (var conexion = new MySqlConnection(cadena)) {\n    conexion.Open();\n    var comando = new MySqlCommand("INSERT INTO productos (nombre, precio) VALUES (@nombre, @precio)", conexion);\n    comando.Parameters.AddWithValue("@nombre", p.Nombre);\n    comando.Parameters.AddWithValue("@precio", p.Precio);\n    int filas = comando.ExecuteNonQuery();\n    Console.WriteLine(filas);\n  }\n}\n\nCrear(new Producto(0, "Mouse", 15));', prompt: '¿Qué imprime la consola tras insertar un único producto correctamente?', options: ['1', '0', 'Mouse', 'Error'], answer: '1' },
        { code: 'public List&lt;Producto&gt; ObtenerTodos() {\n  var lista = new List&lt;Producto&gt;();\n  using (var conexion = new MySqlConnection(cadena)) {\n    conexion.Open();\n    var comando = new MySqlCommand("SELECT id, nombre, precio FROM productos", conexion);\n    using (var reader = comando.ExecuteReader()) {\n      while (reader.Read()) {\n        lista.Add(new Producto(reader.GetInt32("id"), reader.GetString("nombre"), reader.GetDouble("precio")));\n      }\n    }\n  }\n  return lista;\n}\n\nvar productos = ObtenerTodos();\nConsole.WriteLine(productos.Count);', prompt: 'Si la tabla productos tiene 3 filas, ¿qué imprime la consola?', options: ['3', '0', '1', 'Error'], answer: '3' },
        { code: 'public void Actualizar(Producto p) {\n  using (var conexion = new MySqlConnection(cadena)) {\n    conexion.Open();\n    var comando = new MySqlCommand("UPDATE productos SET precio = @precio WHERE id = @id", conexion);\n    comando.Parameters.AddWithValue("@precio", p.Precio);\n    comando.Parameters.AddWithValue("@id", p.Id);\n    comando.ExecuteNonQuery();\n  }\n}', prompt: '¿Cuál de las 4 letras del CRUD implementa este método?', options: ['Update (actualizar)', 'Create (crear)', 'Read (leer)', 'Delete (eliminar)'], answer: 'Update (actualizar)' },
        { code: 'while (!salir) {\n  Console.WriteLine("1) Crear  2) Ver  3) Actualizar  4) Eliminar  5) Salir");\n  string opcion = Console.ReadLine();\n  switch (opcion) {\n    case "2":\n      var productos = repo.ObtenerTodos();\n      foreach (var p in productos) Console.WriteLine(p.Nombre);\n      break;\n    case "5":\n      salir = true;\n      break;\n  }\n}', prompt: 'Si el usuario escribe "2" y luego "5", ¿qué ocurre en ese orden?', options: ['Se listan todos los productos y después el programa termina el bucle', 'El programa termina antes de listar nada', 'Se listan los productos infinitas veces', 'No compila porque falta un case "1"'], answer: 'Se listan todos los productos y después el programa termina el bucle' }
      ]
    }
  }
];
