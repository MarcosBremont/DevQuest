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
    title: 'Delegados',
    subtitle: 'Nivel 34',
    xp: 104,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un <code>delegate</code> es un tipo que representa la <strong>firma</strong> de un método (sus parámetros y su tipo de retorno), permitiendo guardar una referencia a un método en una variable y pasarla como si fuera un dato.',
        'Esto es útil para escribir código más flexible: por ejemplo, un método que recibe un delegado como parámetro puede ejecutar distinta lógica según qué método le pasen, sin tener que conocerlo de antemano.'
      ],
      code:
        '<span class="tok-kw">delegate</span> <span class="tok-kw">int</span> Operacion(<span class="tok-kw">int</span> a, <span class="tok-kw">int</span> b);\n\n' +
        '<span class="tok-kw">static</span> <span class="tok-kw">int</span> Sumar(<span class="tok-kw">int</span> a, <span class="tok-kw">int</span> b) { <span class="tok-kw">return</span> a + b; }\n\n' +
        'Operacion op = Sumar;\n' +
        'Console.WriteLine(op(<span class="tok-num">2</span>, <span class="tok-num">3</span>)); <span class="tok-comment">// 5</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre delegados.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué representa un delegate en C#?', options: ['La firma de un método, permitiendo tratar métodos como datos', 'Un tipo de excepción', 'Una colección de elementos', 'Un modificador de acceso'], answer: 'La firma de un método, permitiendo tratar métodos como datos' },
        { prompt: 'Si tienes "delegate int Operacion(int a, int b);", ¿qué método puede asignarse a una variable de ese tipo?', options: ['Cualquier método que reciba dos int y devuelva un int', 'Cualquier método sin importar sus parámetros', 'Solo métodos llamados Operacion', 'Solo métodos static void'], answer: 'Cualquier método que reciba dos int y devuelva un int' },
        { prompt: '¿Para qué sirve pasar un delegate como parámetro de un método?', options: ['Para que ese método pueda ejecutar distinta lógica según qué función le pasen', 'Para evitar declarar variables', 'Para que el método se ejecute automáticamente al iniciar el programa', 'Para convertir el método en static'], answer: 'Para que ese método pueda ejecutar distinta lógica según qué función le pasen' },
        { prompt: '¿Qué relación tienen las expresiones lambda con los delegados?', options: ['Una lambda puede asignarse a una variable de tipo delegate', 'No tienen ninguna relación', 'Las lambdas reemplazan por completo a las clases', 'Los delegados solo aceptan métodos static'], answer: 'Una lambda puede asignarse a una variable de tipo delegate' }
      ]
    }
  },
  {
    id: 'csharp-35',
    title: 'Eventos',
    subtitle: 'Nivel 35',
    xp: 108,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un <code>event</code> se construye sobre un delegate y sigue el patrón <strong>publicador/suscriptor</strong>: una clase "publica" el evento y otras partes del código se "suscriben" a él con <code>+=</code> para reaccionar cuando ocurre, sin que el publicador conozca de antemano quién escucha.',
        'A diferencia de un delegate normal, un <code>event</code> solo puede dispararse (invocarse) desde dentro de la clase que lo declara; el código externo solo puede suscribirse o desuscribirse, no invocarlo directamente.'
      ],
      code:
        '<span class="tok-kw">class</span> Boton {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">event</span> Action Click;\n\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">void</span> Presionar() {\n' +
        '    Click?.Invoke();\n' +
        '  }\n' +
        '}\n\n' +
        'Boton b = <span class="tok-kw">new</span> Boton();\n' +
        'b.Click += () =&gt; Console.WriteLine(<span class="tok-string">"¡Click!"</span>);\n' +
        'b.Presionar();'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre eventos.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué patrón sigue un event en C#?', options: ['Publicador/suscriptor: unas partes publican el evento y otras se suscriben', 'Herencia múltiple', 'Singleton', 'Encapsulamiento de campos privados'], answer: 'Publicador/suscriptor: unas partes publican el evento y otras se suscriben' },
        { prompt: '¿Con qué operador se suscribe un método a un evento?', options: ['+=', '=', '->', '::'], answer: '+=' },
        { prompt: '¿Desde dónde se puede invocar (disparar) un event?', options: ['Solo desde dentro de la clase que lo declara', 'Desde cualquier parte del programa', 'Solo desde el método Main', 'Solo desde una clase derivada'], answer: 'Solo desde dentro de la clase que lo declara' },
        { prompt: '¿Sobre qué tipo se construye un event?', options: ['Sobre un delegate', 'Sobre una interfaz', 'Sobre un struct', 'Sobre un enum'], answer: 'Sobre un delegate' }
      ]
    }
  },
  {
    id: 'csharp-36',
    title: 'LINQ básico (Where, Select)',
    subtitle: 'Nivel 36',
    xp: 118,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'LINQ (Language Integrated Query) permite consultar colecciones con una sintaxis declarativa. <code>Where()</code> filtra elementos que cumplen una condición, y <code>Select()</code> transforma cada elemento en algo nuevo. Ambos reciben una expresión lambda y requieren <code>using System.Linq;</code>.',
        'Estos métodos no modifican la colección original: devuelven una nueva secuencia con el resultado. Se pueden encadenar, por ejemplo filtrar primero y transformar después.'
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
    id: 'csharp-37',
    title: 'LINQ avanzado (OrderBy, GroupBy, First)',
    subtitle: 'Nivel 37',
    xp: 124,
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
    id: 'csharp-38',
    title: 'Expresiones lambda',
    subtitle: 'Nivel 38',
    xp: 122,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una <strong>expresión lambda</strong> es una forma compacta de escribir una función anónima, sin necesidad de declararla como método aparte. Se escribe con la sintaxis <code>(parámetros) =&gt; expresión</code>.',
        'Se usan constantemente con LINQ y delegados, pero también se pueden guardar en una variable como cualquier otro valor, por ejemplo <code>Func&lt;int, int&gt; doble = n =&gt; n * 2;</code>.'
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
    id: 'csharp-39',
    title: 'Genéricos (Generics)',
    subtitle: 'Nivel 39',
    xp: 128,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los <strong>genéricos</strong> permiten escribir una clase o método que funciona con cualquier tipo, indicado con un parámetro de tipo entre <code>&lt; &gt;</code>, como la <code>T</code> en <code>class Caja&lt;T&gt;</code>. El tipo concreto se decide recién al usar la clase.',
        'Esto evita duplicar código: en vez de escribir una clase distinta para cada tipo de dato, se escribe una sola vez <code>Caja&lt;T&gt;</code> y se usa como <code>Caja&lt;int&gt;</code> o <code>Caja&lt;string&gt;</code> según haga falta, con seguridad de tipos garantizada por el compilador.'
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
    id: 'csharp-40',
    title: 'Async/await en C#',
    subtitle: 'Nivel 40',
    xp: 132,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un método marcado como <code>async</code> puede usar <code>await</code> para esperar una operación que toma tiempo (como leer un archivo o llamar a una API) <strong>sin bloquear</strong> el hilo de ejecución mientras espera.',
        'Un método <code>async</code> normalmente devuelve <code>Task</code> (si no devuelve ningún valor útil) o <code>Task&lt;T&gt;</code> (si devuelve un valor de tipo <code>T</code> una vez terminada la operación). Nunca debería devolver <code>void</code>, salvo en manejadores de eventos.'
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
        { prompt: '¿Por qué normalmente se evita que un método async devuelva void?', options: ['Porque dificulta manejar excepciones y esperar a que termine desde quien lo llama', 'Porque C# no lo permite bajo ninguna circunstancia', 'Porque hace que el método se ejecute de forma síncrona', 'Porque solo los constructores pueden ser async'], answer: 'Porque dificulta manejar excepciones y esperar a que termine desde quien lo llama' }
      ]
    }
  },
  {
    id: 'csharp-41',
    title: 'Interfaces genéricas: IEnumerable, IComparable',
    subtitle: 'Nivel 41',
    xp: 130,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La interfaz <code>IEnumerable</code> es lo que permite recorrer una colección con <code>foreach</code>: cualquier clase que la implemente (como las listas o los arrays) puede iterarse elemento por elemento.',
        'La interfaz <code>IComparable</code> define un método <code>CompareTo()</code> que indica cómo comparar dos objetos entre sí, lo que permite que métodos como <code>Sort()</code> o <code>OrderBy()</code> sepan en qué orden colocarlos.'
      ],
      code:
        '<span class="tok-kw">class</span> Persona : IComparable&lt;Persona&gt; {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">int</span> Edad;\n\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">int</span> CompareTo(Persona otra) {\n' +
        '    <span class="tok-kw">return</span> Edad.CompareTo(otra.Edad);\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre IEnumerable e IComparable.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué permite hacer la interfaz IEnumerable en una clase?', options: ['Que sus objetos se puedan recorrer con foreach', 'Que sus objetos se puedan comparar entre sí', 'Que la clase no pueda tener herencia', 'Que sus métodos sean automáticamente static'], answer: 'Que sus objetos se puedan recorrer con foreach' },
        { prompt: '¿Qué método debe implementar una clase que implementa IComparable?', options: ['CompareTo', 'Equals', 'GetEnumerator', 'ToString'], answer: 'CompareTo' },
        { prompt: '¿Para qué le sirve a C# que una clase implemente IComparable?', options: ['Para saber cómo ordenar sus objetos con métodos como Sort() u OrderBy()', 'Para poder crear objetos con new', 'Para hacer que la clase sea abstracta', 'Para que la clase tenga un constructor por defecto'], answer: 'Para saber cómo ordenar sus objetos con métodos como Sort() u OrderBy()' },
        { prompt: '¿Qué tienen en común una lista genérica y un array respecto a IEnumerable?', options: ['Ambos implementan IEnumerable y se pueden recorrer con foreach', 'Ninguno de los dos se puede recorrer con foreach', 'Solo los arrays implementan IEnumerable', 'Solo las listas implementan IEnumerable'], answer: 'Ambos implementan IEnumerable y se pueden recorrer con foreach' }
      ]
    }
  },
  {
    id: 'csharp-42',
    title: 'Patrones de diseño básicos: Singleton',
    subtitle: 'Nivel 42',
    xp: 136,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El patrón <strong>Singleton</strong> garantiza que una clase tenga <strong>una sola instancia</strong> en toda la aplicación, y ofrece un punto de acceso global a ella. Se implementa con un constructor <code>private</code> (para que nadie más pueda usar <code>new</code>) y una propiedad o método <code>static</code> que devuelve siempre el mismo objeto.',
        'Se usa para recursos que tiene sentido que existan una única vez, como la configuración de la aplicación o una conexión compartida a un registro de logs.'
      ],
      code:
        '<span class="tok-kw">class</span> Configuracion {\n' +
        '  <span class="tok-kw">private</span> <span class="tok-kw">static</span> Configuracion instancia;\n' +
        '  <span class="tok-kw">private</span> Configuracion() { }\n\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">static</span> Configuracion Instancia {\n' +
        '    <span class="tok-kw">get</span> {\n' +
        '      <span class="tok-kw">if</span> (instancia == <span class="tok-kw">null</span>) instancia = <span class="tok-kw">new</span> Configuracion();\n' +
        '      <span class="tok-kw">return</span> instancia;\n' +
        '    }\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre el patrón Singleton.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué garantiza el patrón Singleton?', options: ['Que una clase tenga una única instancia en toda la aplicación', 'Que una clase no pueda heredar de otra', 'Que un método se ejecute solo una vez por segundo', 'Que todos los campos sean readonly'], answer: 'Que una clase tenga una única instancia en toda la aplicación' },
        { prompt: '¿Por qué el constructor de un Singleton se declara private?', options: ['Para que nadie fuera de la clase pueda crear instancias con new', 'Porque los constructores private se ejecutan más rápido', 'Es un requisito del compilador para cualquier clase static', 'Para que la clase pueda heredar de Exception'], answer: 'Para que nadie fuera de la clase pueda crear instancias con new' },
        { prompt: '¿Cómo se obtiene la única instancia de un Singleton desde otras partes del código?', options: ['A través de una propiedad o método static de la propia clase', 'Con el operador new de forma directa', 'Heredando de la clase Singleton', 'Solo se puede usar dentro del método Main'], answer: 'A través de una propiedad o método static de la propia clase' },
        { prompt: '¿Qué tipo de recurso es un buen candidato para implementarse como Singleton?', options: ['La configuración global de una aplicación', 'Cada producto de un carrito de compras', 'Cada fila de una tabla de la base de datos', 'Cada mensaje enviado por el usuario'], answer: 'La configuración global de una aplicación' }
      ]
    }
  },
  {
    id: 'csharp-43',
    title: 'Records (C# 9+)',
    subtitle: 'Nivel 43',
    xp: 134,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un <code>record</code> (desde C# 9) es un tipo pensado para representar <strong>datos inmutables</strong>. Se puede declarar en una sola línea: <code>record Persona(string Nombre, int Edad);</code>, y el compilador genera automáticamente las propiedades, el constructor y más.',
        'A diferencia de una <code>class</code> normal, dos records con los mismos valores se consideran <strong>iguales</strong> al compararlos con <code>==</code> o <code>Equals()</code> (igualdad por valor), mientras que dos objetos de una clase normal solo son iguales si son literalmente el mismo objeto en memoria (igualdad por referencia).'
      ],
      code:
        '<span class="tok-kw">record</span> Persona(<span class="tok-kw">string</span> Nombre, <span class="tok-kw">int</span> Edad);\n\n' +
        'Persona p1 = <span class="tok-kw">new</span> Persona(<span class="tok-string">"Ana"</span>, <span class="tok-num">16</span>);\n' +
        'Persona p2 = <span class="tok-kw">new</span> Persona(<span class="tok-string">"Ana"</span>, <span class="tok-num">16</span>);\n' +
        'Console.WriteLine(p1 == p2); <span class="tok-comment">// True, igualdad por valor</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre records.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué tipo de datos está especialmente pensado un record?', options: ['Datos inmutables, como el estado de una entidad que no cambia', 'Datos que cambian constantemente en un bucle', 'Solo para números enteros', 'Solo para representar excepciones'], answer: 'Datos inmutables, como el estado de una entidad que no cambia' },
        { prompt: 'Si p1 y p2 son dos records Persona con los mismos valores, ¿qué devuelve p1 == p2?', options: ['True, porque los records comparan por valor', 'False, porque son objetos distintos en memoria', 'Depende de si se declararon con new', 'Error de compilación'], answer: 'True, porque los records comparan por valor' },
        { prompt: '¿Qué diferencia principal hay entre un record y una class normal respecto a la igualdad?', options: ['El record compara por valor y la class normal compara por referencia', 'No hay ninguna diferencia', 'La class siempre es más rápida al comparar', 'El record nunca puede compararse con =='], answer: 'El record compara por valor y la class normal compara por referencia' },
        { prompt: '¿Qué genera automáticamente el compilador al declarar un record con parámetros, como Persona(string Nombre, int Edad)?', options: ['Las propiedades y el constructor, entre otras cosas', 'Solo el nombre de la clase', 'Un método Main automático', 'Una interfaz vacía'], answer: 'Las propiedades y el constructor, entre otras cosas' }
      ]
    }
  },
  {
    id: 'csharp-44',
    title: 'Pattern matching (switch expressions, is)',
    subtitle: 'Nivel 44',
    xp: 140,
    type: 'quiz',
    theory: {
      paragraphs: [
        'El operador <code>is</code> permite comprobar si un valor es de cierto tipo y, de paso, capturarlo en una nueva variable: <code>if (obj is int n)</code> comprueba y asigna <code>n</code> en un solo paso.',
        'Las <strong>switch expressions</strong> son una forma compacta de <code>switch</code> que devuelven un valor directamente, usando <code>=&gt;</code> en vez de <code>case</code> y <code>break</code>, y <code>_</code> como caso por defecto ("cualquier otro valor").'
      ],
      code:
        '<span class="tok-kw">object</span> valor = <span class="tok-num">5</span>;\n' +
        '<span class="tok-kw">if</span> (valor <span class="tok-kw">is</span> <span class="tok-kw">int</span> numero) {\n' +
        '  Console.WriteLine(<span class="tok-string">"Es un entero: "</span> + numero);\n' +
        '}\n\n' +
        '<span class="tok-kw">int</span> nota = <span class="tok-num">8</span>;\n' +
        '<span class="tok-kw">string</span> resultado = nota <span class="tok-kw">switch</span> {\n' +
        '  <span class="tok-num">10</span> =&gt; <span class="tok-string">"Perfecto"</span>,\n' +
        '  &gt;= <span class="tok-num">6</span> =&gt; <span class="tok-string">"Aprobado"</span>,\n' +
        '  _ =&gt; <span class="tok-string">"Reprobado"</span>\n' +
        '};'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto.',
      variant: 'code',
      questions: [
        { code: 'object valor = 5;\nif (valor is int numero) {\n  Console.WriteLine("Es un entero: " + numero);\n} else {\n  Console.WriteLine("No es un entero");\n}', prompt: '¿Qué imprime la consola?', options: ['Es un entero: 5', 'No es un entero', '5', 'Error'], answer: 'Es un entero: 5' },
        { code: 'int nota = 8;\nstring resultado = nota switch {\n  10 => "Perfecto",\n  >= 6 => "Aprobado",\n  _ => "Reprobado"\n};\nConsole.WriteLine(resultado);', prompt: '¿Qué imprime la consola?', options: ['Aprobado', 'Perfecto', 'Reprobado', '8'], answer: 'Aprobado' },
        { code: 'int nota = 3;\nstring resultado = nota switch {\n  10 => "Perfecto",\n  >= 6 => "Aprobado",\n  _ => "Reprobado"\n};\nConsole.WriteLine(resultado);', prompt: '¿Qué imprime la consola?', options: ['Reprobado', 'Aprobado', 'Perfecto', 'Error'], answer: 'Reprobado' },
        { code: 'object valor = "hola";\nif (valor is int numero) {\n  Console.WriteLine("Es entero");\n} else {\n  Console.WriteLine("No es entero");\n}', prompt: '¿Qué imprime la consola?', options: ['No es entero', 'Es entero', 'hola', 'Error'], answer: 'No es entero' }
      ]
    }
  },
  {
    id: 'csharp-45',
    title: 'Extension methods',
    subtitle: 'Nivel 45',
    xp: 138,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un <strong>extension method</strong> permite "agregar" un método nuevo a un tipo ya existente (incluso tipos de .NET como <code>string</code>) sin modificar su código original ni heredar de él. Se define como un método <code>static</code> dentro de una clase <code>static</code>, con <code>this</code> antes del primer parámetro.',
        'Una vez definido, se llama exactamente igual que un método normal de instancia: <code>"hola".EsPalindromo()</code>, aunque por detrás en realidad se está ejecutando un método static que recibió el string como argumento.'
      ],
      code:
        '<span class="tok-kw">static</span> <span class="tok-kw">class</span> StringExtensions {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">static</span> <span class="tok-kw">bool</span> EsPalindromo(<span class="tok-kw">this</span> <span class="tok-kw">string</span> texto) {\n' +
        '    <span class="tok-kw">string</span> invertido = <span class="tok-kw">new</span> <span class="tok-kw">string</span>(texto.Reverse().ToArray());\n' +
        '    <span class="tok-kw">return</span> texto == invertido;\n' +
        '  }\n' +
        '}\n\n' +
        'Console.WriteLine(<span class="tok-string">"ana"</span>.EsPalindromo()); <span class="tok-comment">// True</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre extension methods.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué permite hacer un extension method?', options: ['Agregar un método nuevo a un tipo existente sin modificar su código original', 'Eliminar métodos de una clase ya compilada', 'Convertir cualquier clase en abstracta', 'Cambiar el tipo de retorno de un método heredado'], answer: 'Agregar un método nuevo a un tipo existente sin modificar su código original' },
        { prompt: '¿Qué palabra clave se coloca antes del primer parámetro para indicar que un método es una extensión?', options: ['this', 'base', 'static', 'ref'], answer: 'this' },
        { prompt: '¿Dónde debe declararse un extension method?', options: ['Dentro de una clase static', 'Dentro de una interfaz', 'Dentro del método Main', 'Dentro de un struct'], answer: 'Dentro de una clase static' },
        { prompt: '¿Cómo se llama a un extension method una vez definido, por ejemplo EsPalindromo() para string?', options: ['Igual que un método normal de instancia, como texto.EsPalindromo()', 'Solo se puede llamar de forma static, escribiendo el nombre de la clase que lo contiene', 'Solo puede llamarse desde el método Main', 'No se puede invocar directamente, solo con reflection'], answer: 'Igual que un método normal de instancia, como texto.EsPalindromo()' }
      ]
    }
  },
  {
    id: 'csharp-46',
    title: 'Namespaces y organización de un archivo',
    subtitle: 'Nivel 46',
    xp: 130,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'Un archivo C# típico sigue un orden: primero las directivas <code>using</code> que importan funcionalidades externas, después la declaración del <code>namespace</code> que agrupa el código del proyecto, y dentro de él las clases.',
        'Los <code>namespace</code> evitan choques de nombres entre clases de distintas partes de un proyecto (o de librerías distintas) que podrían llamarse igual, organizando el código en una especie de carpetas lógicas.'
      ],
      code:
        '<span class="tok-kw">using</span> System;\n\n' +
        '<span class="tok-kw">namespace</span> DevQuest.App {\n' +
        '  <span class="tok-kw">class</span> Programa {\n' +
        '    <span class="tok-kw">static</span> <span class="tok-kw">void</span> Main() {\n' +
        '      Console.WriteLine(<span class="tok-string">"Hola"</span>);\n' +
        '    }\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Ordena las piezas para armar un archivo C# válido, de arriba hacia abajo.',
      items: [
        { id: 'i1', code: 'using System;' },
        { id: 'i2', code: 'namespace DevQuest.App {' },
        { id: 'i3', code: 'class Programa {' },
        { id: 'i4', code: 'static void Main() {' },
        { id: 'i5', code: 'Console.WriteLine("Hola");' }
      ],
      correctOrder: ['i1', 'i2', 'i3', 'i4', 'i5']
    }
  },
  {
    id: 'csharp-47',
    title: 'Manejo de archivos',
    subtitle: 'Nivel 47',
    xp: 145,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'La clase <code>File</code> (del espacio de nombres <code>System.IO</code>) permite trabajar con archivos de texto de forma sencilla. <code>File.WriteAllText(ruta, contenido)</code> crea o sobrescribe un archivo con el texto indicado.',
        'Para leer todo el contenido de un archivo existente se usa <code>File.ReadAllText(ruta)</code>, que devuelve un <code>string</code> con todo el texto. Si el archivo no existe, ambos métodos pueden lanzar una excepción, por lo que suele ser buena idea usar <code>try/catch</code> alrededor.'
      ],
      code:
        '<span class="tok-kw">using</span> System.IO;\n\n' +
        'File.WriteAllText(<span class="tok-string">"datos.txt"</span>, <span class="tok-string">"Hola DevQuest"</span>);\n' +
        '<span class="tok-kw">string</span> contenido = File.ReadAllText(<span class="tok-string">"datos.txt"</span>);\n' +
        'Console.WriteLine(contenido); <span class="tok-comment">// Hola DevQuest</span>'
    },
    exercise: {
      instructions: 'Completa el código que escribe y lee un archivo de texto.',
      blanks: [
        { id: 'b1', before: 'File.', after: '("datos.txt", "Hola DevQuest");', answer: 'WriteAllText', options: ['WriteAllText', 'Write', 'SaveText', 'CreateText'] },
        { id: 'b2', before: 'string contenido = File.', after: '("datos.txt");', answer: 'ReadAllText', options: ['ReadAllText', 'Read', 'GetText', 'LoadText'] },
        { id: 'b3', before: 'if (File.', after: '("datos.txt")) {\n  Console.WriteLine("El archivo existe");\n}', answer: 'Exists', options: ['Exists', 'Contains', 'Check', 'HasFile'] },
        { id: 'b4', before: 'File.', after: '("datos.txt");', answer: 'Delete', options: ['Delete', 'Remove', 'Erase', 'Clear'] }
      ]
    }
  },
  {
    id: 'csharp-48',
    title: 'Testing básico: pruebas unitarias',
    subtitle: 'Nivel 48',
    xp: 148,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una <strong>prueba unitaria</strong> (unit test) verifica automáticamente que una pequeña parte del código (normalmente un método) se comporta como se espera, comparando el resultado obtenido con el resultado esperado.',
        'El patrón habitual para escribir una prueba es <strong>Arrange-Act-Assert</strong>: preparar los datos de entrada, ejecutar el código que se quiere probar, y verificar (assert) que el resultado es el esperado. En .NET se suelen usar frameworks como xUnit, NUnit o MSTest.'
      ],
      code:
        '<span class="tok-comment">// Arrange</span>\n' +
        '<span class="tok-kw">int</span> a = <span class="tok-num">2</span>;\n' +
        '<span class="tok-kw">int</span> b = <span class="tok-num">3</span>;\n\n' +
        '<span class="tok-comment">// Act</span>\n' +
        '<span class="tok-kw">int</span> resultado = Calculadora.Sumar(a, b);\n\n' +
        '<span class="tok-comment">// Assert</span>\n' +
        'Assert.AreEqual(<span class="tok-num">5</span>, resultado);'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre pruebas unitarias.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué verifica una prueba unitaria?', options: ['Que una pequeña parte del código, como un método, se comporte como se espera', 'Que el programa completo no tenga ningún error visual', 'Que el usuario final esté satisfecho con la aplicación', 'Que el código compile más rápido'], answer: 'Que una pequeña parte del código, como un método, se comporte como se espera' },
        { prompt: '¿Qué significan las tres partes del patrón Arrange-Act-Assert?', options: ['Preparar los datos, ejecutar el código, y verificar el resultado', 'Escribir, compilar y ejecutar el programa', 'Analizar, actuar y aprobar un pull request', 'Declarar, asignar y eliminar variables'], answer: 'Preparar los datos, ejecutar el código, y verificar el resultado' },
        { prompt: '¿Por qué es útil tener pruebas automatizadas en un proyecto?', options: ['Permiten detectar rápidamente si un cambio rompe algo que antes funcionaba', 'Hacen que el código nunca tenga errores', 'Reemplazan por completo la necesidad de revisar el código', 'Son obligatorias para que el programa compile'], answer: 'Permiten detectar rápidamente si un cambio rompe algo que antes funcionaba' },
        { prompt: '¿Qué hace normalmente un método como Assert.AreEqual(esperado, obtenido) en una prueba?', options: ['Falla la prueba si el valor esperado y el obtenido no coinciden', 'Imprime ambos valores en la consola sin comparar nada', 'Modifica el valor obtenido para que coincida con el esperado', 'Solo funciona con números, nunca con strings'], answer: 'Falla la prueba si el valor esperado y el obtenido no coinciden' }
      ]
    }
  },
  {
    id: 'csharp-49',
    title: 'Buenas prácticas y convenciones de código',
    subtitle: 'Nivel 49',
    xp: 150,
    type: 'quiz',
    theory: {
      paragraphs: [
        'C# tiene convenciones de nombres muy consistentes: <strong>PascalCase</strong> (cada palabra empieza en mayúscula) para clases, métodos y propiedades públicas; <strong>camelCase</strong> (la primera palabra en minúscula) para variables locales y parámetros.',
        'Otras buenas prácticas: cada clase debería tener una responsabilidad clara, los métodos deberían ser cortos y hacer una sola cosa, y es preferible usar nombres descriptivos en vez de comentarios que expliquen código confuso.'
      ],
      code:
        '<span class="tok-kw">class</span> CalculadoraDePrecios {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">double</span> PrecioBase { <span class="tok-kw">get</span>; <span class="tok-kw">set</span>; }\n\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">double</span> CalcularTotal(<span class="tok-kw">double</span> impuesto) {\n' +
        '    <span class="tok-kw">return</span> PrecioBase + impuesto;\n' +
        '  }\n' +
        '}'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre buenas prácticas y convenciones en C#.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué convención de mayúsculas se usa normalmente para el nombre de una clase en C#?', options: ['PascalCase, como CalculadoraDePrecios', 'camelCase, como calculadoraDePrecios', 'snake_case, como calculadora_de_precios', 'Todo en mayúsculas, como CALCULADORADEPRECIOS'], answer: 'PascalCase, como CalculadoraDePrecios' },
        { prompt: '¿Qué convención se usa normalmente para una variable local, como un contador dentro de un método?', options: ['camelCase, como totalVentas', 'PascalCase, como TotalVentas', 'Con guion bajo al inicio siempre, como _totalVentas', 'Todo en mayúsculas'], answer: 'camelCase, como totalVentas' },
        { prompt: '¿Cuál de estas es una buena práctica al diseñar una clase?', options: ['Que tenga una responsabilidad clara y bien definida', 'Que haga tantas cosas distintas como sea posible', 'Que todos sus métodos sean private aunque se necesiten desde fuera', 'Que no tenga ningún método, solo campos'], answer: 'Que tenga una responsabilidad clara y bien definida' },
        { prompt: '¿Por qué se prefieren los nombres descriptivos en vez de comentarios que expliquen código confuso?', options: ['Porque un buen nombre hace innecesaria la explicación y no se puede desactualizar como un comentario', 'Porque los comentarios están prohibidos en C#', 'Porque los nombres largos hacen que el programa compile más rápido', 'Porque el compilador ignora los nombres de variable'], answer: 'Porque un buen nombre hace innecesaria la explicación y no se puede desactualizar como un comentario' }
      ]
    }
  },
  {
    id: 'csharp-50',
    title: 'Proyecto integrador: repaso general',
    subtitle: 'Nivel 50',
    xp: 170,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Has llegado al final del módulo de C#: desde variables y bucles hasta clases, interfaces, LINQ, genéricos y patrones de diseño. Este último nivel repasa varios de esos conceptos combinados, como se combinarían en un programa real.',
        'Tómate este repaso con calma: cada pregunta mezcla conceptos de niveles distintos, igual que ocurre en un proyecto de verdad, donde pocas veces se usa una sola idea de forma aislada.'
      ],
      code:
        '<span class="tok-kw">class</span> Producto {\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">string</span> Nombre { <span class="tok-kw">get</span>; <span class="tok-kw">set</span>; }\n' +
        '  <span class="tok-kw">public</span> <span class="tok-kw">double</span> Precio { <span class="tok-kw">get</span>; <span class="tok-kw">set</span>; }\n' +
        '}\n\n' +
        'List&lt;Producto&gt; productos = <span class="tok-kw">new</span> List&lt;Producto&gt;();\n' +
        'productos.Add(<span class="tok-kw">new</span> Producto { Nombre = <span class="tok-string">"Mouse"</span>, Precio = <span class="tok-num">15</span> });\n' +
        '<span class="tok-kw">var</span> caros = productos.Where(p =&gt; p.Precio &gt; <span class="tok-num">10</span>);'
    },
    exercise: {
      instructions: 'Analiza cada fragmento de código y decide cuál es el resultado exacto. Este repaso final combina varios conceptos del módulo.',
      variant: 'code',
      questions: [
        { code: 'class Producto {\n  public string Nombre { get; set; }\n  public double Precio { get; set; }\n}\n\nList&lt;Producto&gt; productos = new List&lt;Producto&gt;();\nproductos.Add(new Producto { Nombre = "Mouse", Precio = 15 });\nproductos.Add(new Producto { Nombre = "Teclado", Precio = 8 });\nvar caros = productos.Where(p => p.Precio > 10).ToList();\nConsole.WriteLine(caros.Count);', prompt: '¿Qué imprime la consola?', options: ['1', '2', '0', 'Error'], answer: '1' },
        { code: 'abstract class Forma {\n  public abstract double Area();\n}\n\nclass Rectangulo : Forma {\n  public double Base, Altura;\n  public override double Area() {\n    return Base * Altura;\n  }\n}\n\nForma f = new Rectangulo { Base = 4, Altura = 3 };\nConsole.WriteLine(f.Area());', prompt: '¿Qué imprime la consola?', options: ['12', '7', 'Error', '0'], answer: '12' },
        { code: 'int[] numeros = { 1, 2, 3 };\nint total = 0;\nforeach (int n in numeros) {\n  total += n;\n}\nConsole.WriteLine(total);', prompt: '¿Qué imprime la consola?', options: ['6', '3', '0', 'Error'], answer: '6' },
        { code: 'try {\n  int[] numeros = { 1, 2, 3 };\n  Console.WriteLine(numeros[5]);\n} catch (IndexOutOfRangeException) {\n  Console.WriteLine("Índice inválido");\n} finally {\n  Console.WriteLine("Fin");\n}', prompt: '¿Qué imprime la consola, en orden?', options: ['Índice inválido, luego Fin', 'Fin, luego Índice inválido', 'Solo Índice inválido', 'Solo Fin'], answer: 'Índice inválido, luego Fin' }
      ]
    }
  }
];
