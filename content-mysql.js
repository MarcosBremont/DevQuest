/* ==========================================================================
   DevQuest — content-mysql.js
   Niveles del módulo MySQL (de principiante a avanzado).
   Cada nivel: { id, title, subtitle, xp, type, theory, exercise }
   ========================================================================== */

'use strict';

const MYSQL_LEVELS = [
  {
    id: 'mysql-1',
    title: 'Introducción a bases de datos',
    subtitle: 'Nivel 1',
    xp: 50,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una <strong>base de datos</strong> organiza información en <strong>tablas</strong>, parecidas a hojas de cálculo: cada tabla tiene <strong>columnas</strong> (los campos, como "nombre" o "edad") y <strong>filas</strong> (cada registro individual, como un usuario concreto).',
        '<strong>MySQL</strong> es un sistema gestor de bases de datos relacionales: "relacional" significa que las tablas pueden conectarse entre sí mediante claves, para no repetir información. Para comunicarnos con él usamos el lenguaje <strong>SQL</strong> (Structured Query Language).'
      ],
      code:
        '<span class="tok-comment">-- Tabla "usuarios"</span>\n' +
        '<span class="tok-comment">-- id | nombre | edad</span>\n' +
        '<span class="tok-comment">-- 1  | Ana    | 20</span>\n' +
        '<span class="tok-comment">-- 2  | Luis   | 17</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre los fundamentos de las bases de datos.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué es una tabla en una base de datos?', options: ['Una estructura con columnas y filas que guarda datos relacionados', 'Un tipo de gráfico', 'Un archivo de texto sin formato', 'Una consulta SQL'], answer: 'Una estructura con columnas y filas que guarda datos relacionados' },
        { prompt: '¿Qué representa cada fila de una tabla?', options: ['Un registro individual (ej. un usuario concreto)', 'El nombre de una columna', 'El tipo de dato de la tabla', 'La base de datos completa'], answer: 'Un registro individual (ej. un usuario concreto)' },
        { prompt: '¿Qué significa que MySQL sea un sistema "relacional"?', options: ['Que las tablas pueden conectarse entre sí mediante claves', 'Que solo puede tener una tabla', 'Que no permite guardar números', 'Que los datos se pierden al cerrar el programa'], answer: 'Que las tablas pueden conectarse entre sí mediante claves' },
        { prompt: '¿Qué significan las siglas SQL?', options: ['Structured Query Language', 'Simple Question Logic', 'System Query List', 'Standard Quality Language'], answer: 'Structured Query Language' }
      ]
    }
  },
  {
    id: 'mysql-2',
    title: 'SELECT básico',
    subtitle: 'Nivel 2',
    xp: 55,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La instrucción <code>SELECT</code> se usa para consultar datos. <code>SELECT * FROM usuarios;</code> pide todas las columnas de la tabla "usuarios"; el asterisco <code>*</code> significa "todas las columnas".',
        'Para pedir solo algunas columnas, se listan por su nombre separadas por comas: <code>SELECT nombre, edad FROM usuarios;</code> devuelve únicamente esas dos columnas de cada fila.'
      ],
      code:
        '<span class="tok-comment">-- Tabla "usuarios"</span>\n' +
        '<span class="tok-comment">-- id | nombre | edad</span>\n' +
        '<span class="tok-comment">-- 1  | Ana    | 20</span>\n' +
        '<span class="tok-comment">-- 2  | Luis   | 17</span>\n\n' +
        '<span class="tok-kw">SELECT</span> nombre <span class="tok-kw">FROM</span> usuarios;\n' +
        '<span class="tok-comment">-- Devuelve: Ana, Luis</span>'
    },
    exercise: {
      instructions: 'Analiza cada consulta y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- Tabla "usuarios"\n-- id | nombre | edad\n-- 1  | Ana    | 20\n-- 2  | Luis   | 17\n\nSELECT * FROM usuarios;', prompt: '¿Qué devuelve esta consulta?', options: ['Todas las columnas y filas de la tabla usuarios', 'Solo la columna nombre', 'Solo la primera fila', 'Un error de sintaxis'], answer: 'Todas las columnas y filas de la tabla usuarios' },
        { code: '-- Tabla "usuarios"\n-- id | nombre | edad\n-- 1  | Ana    | 20\n-- 2  | Luis   | 17\n\nSELECT nombre, edad FROM usuarios;', prompt: '¿Qué columnas devuelve esta consulta?', options: ['nombre y edad', 'id, nombre y edad', 'solo id', 'Ninguna, falta WHERE'], answer: 'nombre y edad' },
        { code: 'SELECT * FROM productos;', prompt: '¿Qué significa el asterisco (*) en un SELECT?', options: ['Todas las columnas de la tabla', 'Multiplicar los valores', 'Un comodín solo para texto', 'Un error de sintaxis'], answer: 'Todas las columnas de la tabla' },
        { code: 'SELECT nombre FROM clientes', prompt: '¿Qué le falta a esta consulta para seguir la convención habitual de SQL?', options: ['El punto y coma (;) al final', 'La palabra SELECT', 'El nombre de la tabla', 'Nada, está completa'], answer: 'El punto y coma (;) al final' }
      ]
    }
  },
  {
    id: 'mysql-3',
    title: 'Filtrar con WHERE',
    subtitle: 'Nivel 3',
    xp: 58,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La cláusula <code>WHERE</code> filtra qué filas se devuelven, según una condición: <code>SELECT * FROM usuarios WHERE edad >= 18;</code> solo devuelve las filas donde la edad sea 18 o más.',
        'Se pueden usar los operadores de comparación habituales: <code>= != &gt; &lt; &gt;= &lt;=</code>. Los textos van entre comillas simples, como <code>WHERE nombre = \'Ana\'</code>; los números no.'
      ],
      code:
        '<span class="tok-comment">-- id | nombre | edad</span>\n' +
        '<span class="tok-comment">-- 1  | Ana    | 20</span>\n' +
        '<span class="tok-comment">-- 2  | Luis   | 17</span>\n\n' +
        '<span class="tok-kw">SELECT</span> nombre <span class="tok-kw">FROM</span> usuarios <span class="tok-kw">WHERE</span> edad &gt;= <span class="tok-num">18</span>;\n' +
        '<span class="tok-comment">-- Devuelve: Ana</span>'
    },
    exercise: {
      instructions: 'Analiza cada consulta con WHERE y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- id | nombre | edad\n-- 1  | Ana    | 20\n-- 2  | Luis   | 17\n-- 3  | Marta  | 25\n\nSELECT nombre FROM usuarios WHERE edad >= 18;', prompt: '¿Qué nombres devuelve esta consulta?', options: ['Ana y Marta', 'Ana, Luis y Marta', 'Luis', 'Ninguno'], answer: 'Ana y Marta' },
        { code: '-- id | nombre | ciudad\n-- 1  | Ana    | Madrid\n-- 2  | Luis   | Bogotá\n\nSELECT * FROM usuarios WHERE ciudad = \'Bogotá\';', prompt: '¿Qué fila devuelve esta consulta?', options: ['La de Luis', 'La de Ana', 'Ninguna fila', 'Todas las filas'], answer: 'La de Luis' },
        { code: '-- id | precio\n-- 1  | 50\n-- 2  | 120\n-- 3  | 80\n\nSELECT id FROM productos WHERE precio > 100;', prompt: '¿Qué id devuelve esta consulta?', options: ['2', '1', '3', '1, 2 y 3'], answer: '2' },
        { code: 'SELECT * FROM usuarios WHERE edad != 17;', prompt: '¿Qué filas excluye el operador != en este WHERE?', options: ['Las que tienen edad igual a 17', 'Todas las filas', 'Ninguna fila', 'Las que no tienen edad'], answer: 'Las que tienen edad igual a 17' }
      ]
    }
  },
  {
    id: 'mysql-4',
    title: 'Ordenar con ORDER BY',
    subtitle: 'Nivel 4',
    xp: 60,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>ORDER BY</code> ordena los resultados según una o varias columnas. Por defecto ordena de forma ascendente (<code>ASC</code>); para descendente se añade <code>DESC</code>: <code>SELECT * FROM usuarios ORDER BY edad DESC;</code> muestra primero a los de mayor edad.',
        'Se puede ordenar por varias columnas a la vez separándolas por comas, y cada una puede tener su propio <code>ASC</code>/<code>DESC</code> independiente.'
      ],
      code:
        '<span class="tok-comment">-- id | nombre | edad</span>\n' +
        '<span class="tok-comment">-- 1  | Ana    | 20</span>\n' +
        '<span class="tok-comment">-- 2  | Luis   | 17</span>\n\n' +
        '<span class="tok-kw">SELECT</span> nombre <span class="tok-kw">FROM</span> usuarios <span class="tok-kw">ORDER BY</span> edad <span class="tok-kw">DESC</span>;\n' +
        '<span class="tok-comment">-- Devuelve: Ana, Luis (mayor a menor edad)</span>'
    },
    exercise: {
      instructions: 'Analiza cada consulta con ORDER BY y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- nombre | edad\n-- Ana    | 20\n-- Luis   | 17\n-- Marta  | 25\n\nSELECT nombre FROM usuarios ORDER BY edad ASC;', prompt: '¿En qué orden aparecen los nombres?', options: ['Luis, Ana, Marta', 'Marta, Ana, Luis', 'Ana, Luis, Marta', 'Orden alfabético'], answer: 'Luis, Ana, Marta' },
        { code: '-- nombre | edad\n-- Ana    | 20\n-- Luis   | 17\n-- Marta  | 25\n\nSELECT nombre FROM usuarios ORDER BY edad DESC;', prompt: '¿En qué orden aparecen los nombres?', options: ['Marta, Ana, Luis', 'Luis, Ana, Marta', 'Ana, Luis, Marta', 'Orden alfabético'], answer: 'Marta, Ana, Luis' },
        { code: 'SELECT * FROM productos ORDER BY precio;', prompt: 'Si no se especifica ASC ni DESC, ¿en qué orden se ordena por defecto?', options: ['Ascendente (de menor a mayor)', 'Descendente (de mayor a menor)', 'Aleatorio', 'No se ordena'], answer: 'Ascendente (de menor a mayor)' },
        { code: 'SELECT nombre FROM usuarios ORDER BY nombre ASC;', prompt: '¿Cómo se ordenan los textos con ASC?', options: ['Alfabéticamente de la A a la Z', 'De la Z a la A', 'Por longitud del texto', 'No se pueden ordenar textos'], answer: 'Alfabéticamente de la A a la Z' }
      ]
    }
  },
  {
    id: 'mysql-5',
    title: 'Limitar resultados con LIMIT',
    subtitle: 'Nivel 5',
    xp: 62,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        '<code>LIMIT</code> restringe cuántas filas devuelve una consulta, muy útil para no traer miles de resultados de golpe: <code>SELECT * FROM usuarios LIMIT 5;</code> devuelve como máximo 5 filas.',
        'Combinado con <code>OFFSET</code> permite "paginar" resultados: <code>LIMIT 5 OFFSET 10</code> se salta las primeras 10 filas y devuelve las siguientes 5, útil para mostrar "página 3" de una lista larga.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> nombre <span class="tok-kw">FROM</span> usuarios <span class="tok-kw">ORDER BY</span> edad <span class="tok-kw">LIMIT</span> <span class="tok-num">3</span>;\n' +
        '<span class="tok-comment">-- Devuelve como máximo 3 filas</span>'
    },
    exercise: {
      instructions: 'Completa la palabra clave o valor que falta en cada consulta.',
      blanks: [
        { id: 'b1', before: 'SELECT * FROM usuarios ', after: ' 5;', answer: 'LIMIT', options: ['LIMIT', 'TOP', 'MAX', 'ROWS'] },
        { id: 'b2', before: 'SELECT * FROM usuarios LIMIT 5 ', after: ' 10;', answer: 'OFFSET', options: ['OFFSET', 'SKIP', 'START', 'FROM'] },
        { id: 'b3', before: 'SELECT * FROM productos ORDER BY precio DESC LIMIT ', after: ';', answer: '1', options: ['1', '0', 'ALL', 'NULL'] },
        { id: 'b4', before: 'SELECT * FROM clientes ', after: ' 20;', answer: 'LIMIT', options: ['LIMIT', 'COUNT', 'FIRST', 'ONLY'] }
      ]
    }
  },
  {
    id: 'mysql-6',
    title: 'Tipos de datos en MySQL',
    subtitle: 'Nivel 6',
    xp: 65,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Cada columna de una tabla tiene un tipo de dato fijo. Los más comunes son <code>INT</code> (números enteros), <code>VARCHAR(n)</code> (texto de longitud variable hasta n caracteres), <code>DECIMAL</code> (números con decimales exactos, ideal para dinero) y <code>DATE</code> (fechas).',
        'Elegir bien el tipo importa: usar <code>DECIMAL</code> en vez de tipos de coma flotante evita errores de redondeo en precios, y <code>VARCHAR(n)</code> con un límite razonable evita desperdiciar espacio.'
      ],
      code:
        '<span class="tok-kw">CREATE TABLE</span> productos (\n' +
        '  id <span class="tok-kw">INT</span>,\n' +
        '  nombre <span class="tok-kw">VARCHAR</span>(<span class="tok-num">100</span>),\n' +
        '  precio <span class="tok-kw">DECIMAL</span>(<span class="tok-num">10</span>,<span class="tok-num">2</span>),\n' +
        '  fecha_creacion <span class="tok-kw">DATE</span>\n' +
        ');'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre tipos de datos en MySQL.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué tipo de dato usarías para guardar la edad de una persona?', options: ['INT', 'VARCHAR', 'DATE', 'BOOLEAN'], answer: 'INT' },
        { prompt: '¿Qué tipo de dato usarías para guardar el precio de un producto con decimales exactos?', options: ['DECIMAL', 'INT', 'VARCHAR', 'DATE'], answer: 'DECIMAL' },
        { prompt: '¿Qué significa el número entre paréntesis en VARCHAR(100)?', options: ['La longitud máxima de caracteres que admite', 'La cantidad de filas de la tabla', 'El valor por defecto', 'El número de columnas'], answer: 'La longitud máxima de caracteres que admite' },
        { prompt: '¿Qué tipo de dato usarías para guardar una fecha de nacimiento?', options: ['DATE', 'INT', 'VARCHAR', 'DECIMAL'], answer: 'DATE' }
      ]
    }
  },
  {
    id: 'mysql-7',
    title: 'Crear tablas con CREATE TABLE',
    subtitle: 'Nivel 7',
    xp: 56,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        '<code>CREATE TABLE</code> crea una tabla nueva: se indica su nombre y, entre paréntesis, cada columna con su tipo de dato. Es habitual marcar una columna como <code>PRIMARY KEY</code> para identificar cada fila de forma única.',
        'Cada columna se separa de la siguiente por una coma, y la instrucción completa termina con punto y coma. Una vez creada, la tabla empieza vacía: aún no tiene ninguna fila.'
      ],
      code:
        '<span class="tok-kw">CREATE TABLE</span> alumnos (\n' +
        '  id <span class="tok-kw">INT</span> <span class="tok-kw">PRIMARY KEY</span>,\n' +
        '  nombre <span class="tok-kw">VARCHAR</span>(<span class="tok-num">50</span>),\n' +
        '  nota <span class="tok-kw">DECIMAL</span>(<span class="tok-num">4</span>,<span class="tok-num">2</span>)\n' +
        ');'
    },
    exercise: {
      instructions: 'Completa cada consulta CREATE TABLE con la palabra clave correcta.',
      blanks: [
        { id: 'b1', before: '', after: ' clientes (id INT, nombre VARCHAR(50));', answer: 'CREATE TABLE', options: ['CREATE TABLE', 'ALTER TABLE', 'NEW TABLE', 'ADD TABLE'] },
        { id: 'b2', before: 'CREATE TABLE clientes (id INT ', after: ', nombre VARCHAR(50));', answer: 'PRIMARY KEY', options: ['PRIMARY KEY', 'UNIQUE INDEX', 'MAIN KEY', 'NOT NULL KEY'] },
        { id: 'b3', before: 'CREATE TABLE clientes (id INT PRIMARY KEY, nombre ', after: '(50));', answer: 'VARCHAR', options: ['VARCHAR', 'INT', 'DATE', 'DECIMAL'] },
        { id: 'b4', before: 'CREATE TABLE clientes (id INT PRIMARY KEY, nombre VARCHAR(50), edad ', after: ');', answer: 'INT', options: ['INT', 'VARCHAR', 'TABLE', 'SELECT'] }
      ]
    }
  },
  {
    id: 'mysql-8',
    title: 'Insertar datos con INSERT INTO',
    subtitle: 'Nivel 8',
    xp: 58,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        '<code>INSERT INTO</code> añade una fila nueva a una tabla: se indica el nombre de la tabla, entre paréntesis las columnas a rellenar, y tras <code>VALUES</code> los valores en el mismo orden que esas columnas.',
        'Los textos van entre comillas simples (<code>\'Ana\'</code>) y los números sin comillas. Si el orden de columnas y valores no coincide, los datos acaban en la columna equivocada.'
      ],
      code:
        '<span class="tok-kw">INSERT INTO</span> alumnos (nombre, nota) <span class="tok-kw">VALUES</span> (<span class="tok-string">\'Ana\'</span>, <span class="tok-num">9.5</span>);\n' +
        '<span class="tok-comment">-- Añade una fila nueva a la tabla alumnos</span>'
    },
    exercise: {
      instructions: 'Completa cada consulta INSERT INTO con la palabra o valor correcto.',
      blanks: [
        { id: 'b1', before: '', after: ' clientes (nombre, edad) VALUES (\'Ana\', 20);', answer: 'INSERT INTO', options: ['INSERT INTO', 'INSERT ROW', 'ADD INTO', 'APPEND TO'] },
        { id: 'b2', before: 'INSERT INTO clientes (nombre, edad) ', after: ' (\'Ana\', 20);', answer: 'VALUES', options: ['VALUES', 'SET', 'DATA', 'ROW'] },
        { id: 'b3', before: 'INSERT INTO clientes (nombre, edad) VALUES (', after: ', 20);', answer: "'Ana'", options: ["'Ana'", 'Ana', '"Ana"', 'Ana;'] },
        { id: 'b4', before: 'INSERT INTO productos (nombre, precio) VALUES (\'Mesa\', ', after: ');', answer: '150', options: ['150', "'150'", 'CIENTO CINCUENTA', '150.00.00'] }
      ]
    }
  },
  {
    id: 'mysql-9',
    title: 'Actualizar datos con UPDATE',
    subtitle: 'Nivel 9',
    xp: 60,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>UPDATE</code> modifica filas ya existentes: se indica la tabla, con <code>SET</code> qué columnas cambian y a qué valor, y con <code>WHERE</code> qué filas se ven afectadas.',
        'Si se omite <code>WHERE</code>, MySQL actualiza <strong>todas</strong> las filas de la tabla, no solo una: es uno de los errores más peligrosos y comunes al escribir un UPDATE.'
      ],
      code:
        '<span class="tok-kw">UPDATE</span> usuarios <span class="tok-kw">SET</span> edad = <span class="tok-num">21</span> <span class="tok-kw">WHERE</span> nombre = <span class="tok-string">\'Ana\'</span>;\n' +
        '<span class="tok-comment">-- Solo cambia la fila de Ana</span>'
    },
    exercise: {
      instructions: 'Analiza cada UPDATE y decide qué ocurre.',
      variant: 'code',
      questions: [
        { code: '-- id | nombre | edad\n-- 1  | Ana    | 20\n-- 2  | Luis   | 17\n\nUPDATE usuarios SET edad = 21 WHERE nombre = \'Ana\';', prompt: '¿Qué fila se modifica?', options: ['La fila de Ana, que pasa a tener edad 21', 'La fila de Luis, que pasa a tener edad 21', 'Todas las filas, que pasan a tener edad 21', 'Ninguna, falta un JOIN'], answer: 'La fila de Ana, que pasa a tener edad 21' },
        { code: 'UPDATE usuarios SET activo = 0;', prompt: '¿Qué ocurre si un UPDATE no lleva WHERE?', options: ['Se actualizan todas las filas de la tabla', 'No se actualiza ninguna fila', 'Da un error de sintaxis', 'Solo se actualiza la primera fila'], answer: 'Se actualizan todas las filas de la tabla' },
        { code: 'UPDATE productos SET precio = 99, stock = 10 WHERE id = 3;', prompt: '¿Cuántas columnas se actualizan en la fila con id = 3?', options: ['Dos: precio y stock', 'Solo precio', 'Solo stock', 'Ninguna, falta VALUES'], answer: 'Dos: precio y stock' },
        { code: 'UPDATE usuarios SET edad = edad + 1 WHERE id = 5;', prompt: '¿Qué hace esta consulta?', options: ['Suma 1 a la edad actual del usuario con id 5', 'Establece la edad en 1 para el usuario con id 5', 'Suma 1 a la edad de todos los usuarios', 'Elimina el usuario con id 5'], answer: 'Suma 1 a la edad actual del usuario con id 5' }
      ]
    }
  },
  {
    id: 'mysql-10',
    title: 'Eliminar datos con DELETE',
    subtitle: 'Nivel 10',
    xp: 62,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>DELETE FROM</code> elimina filas de una tabla. Igual que con UPDATE, la cláusula <code>WHERE</code> decide qué filas se borran; sin ella, se eliminan todas las filas de la tabla (aunque la tabla en sí sigue existiendo).',
        'DELETE borra fila por fila y puede deshacerse dentro de una transacción con <code>ROLLBACK</code> (lo verás más adelante), a diferencia de operaciones más drásticas como <code>TRUNCATE</code> o <code>DROP TABLE</code>.'
      ],
      code:
        '<span class="tok-kw">DELETE FROM</span> usuarios <span class="tok-kw">WHERE</span> edad &lt; <span class="tok-num">18</span>;\n' +
        '<span class="tok-comment">-- Borra solo las filas con edad menor a 18</span>'
    },
    exercise: {
      instructions: 'Analiza cada DELETE y decide qué ocurre.',
      variant: 'code',
      questions: [
        { code: '-- id | nombre | edad\n-- 1  | Ana    | 20\n-- 2  | Luis   | 17\n\nDELETE FROM usuarios WHERE edad &lt; 18;', prompt: '¿Qué fila se elimina?', options: ['La de Luis (edad 17)', 'La de Ana (edad 20)', 'Ambas filas', 'Ninguna fila'], answer: 'La de Luis (edad 17)' },
        { code: 'DELETE FROM usuarios;', prompt: '¿Qué ocurre con esta consulta, sin WHERE?', options: ['Se eliminan todas las filas, pero la tabla sigue existiendo', 'No se elimina nada', 'Se elimina la tabla completa', 'Da un error de sintaxis obligatorio'], answer: 'Se eliminan todas las filas, pero la tabla sigue existiendo' },
        { code: 'DELETE FROM productos WHERE stock = 0;', prompt: '¿Qué filas elimina esta consulta?', options: ['Las de los productos sin stock (stock igual a 0)', 'Todos los productos', 'Solo el producto más barato', 'Ninguna, stock no puede ser 0'], answer: 'Las de los productos sin stock (stock igual a 0)' },
        { code: 'DELETE FROM usuarios WHERE id = 5;', prompt: '¿Qué diferencia hay entre esta consulta y "SELECT * FROM usuarios WHERE id = 5;"?', options: ['DELETE borra esa fila; SELECT solo la muestra, sin modificar nada', 'No hay ninguna diferencia real', 'SELECT borra la fila y DELETE solo la muestra', 'DELETE nunca acepta una cláusula WHERE'], answer: 'DELETE borra esa fila; SELECT solo la muestra, sin modificar nada' }
      ]
    }
  },
  {
    id: 'mysql-11',
    title: 'Claves primarias (PRIMARY KEY)',
    subtitle: 'Nivel 11',
    xp: 63,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una <strong>PRIMARY KEY</strong> identifica de forma única cada fila de una tabla: no puede repetirse ni quedar vacía (<code>NULL</code>). Por eso muchas tablas usan una columna sencilla como <code>id</code> para este propósito.',
        'Una tabla solo puede tener una PRIMARY KEY, aunque esa clave puede estar formada por varias columnas a la vez (clave compuesta), por ejemplo cuando una fila solo tiene sentido como combinación de dos valores.'
      ],
      code:
        '<span class="tok-kw">CREATE TABLE</span> usuarios (\n' +
        '  id <span class="tok-kw">INT</span> <span class="tok-kw">PRIMARY KEY</span>,\n' +
        '  nombre <span class="tok-kw">VARCHAR</span>(<span class="tok-num">50</span>)\n' +
        ');'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre claves primarias.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué garantiza una PRIMARY KEY?', options: ['Que cada fila tenga un valor único y no nulo que la identifique', 'Que la columna solo acepte números', 'Que la tabla no pueda tener más de una columna', 'Que los datos se ordenen automáticamente'], answer: 'Que cada fila tenga un valor único y no nulo que la identifique' },
        { prompt: '¿Puede una tabla tener dos columnas distintas marcadas cada una como PRIMARY KEY por separado?', options: ['No, solo puede haber una PRIMARY KEY por tabla (aunque puede tener varias columnas)', 'Sí, cuantas quiera', 'Solo si son del mismo tipo de dato', 'Solo en tablas temporales'], answer: 'No, solo puede haber una PRIMARY KEY por tabla (aunque puede tener varias columnas)' },
        { prompt: '¿Qué pasa si intentas insertar un valor duplicado en una columna PRIMARY KEY?', options: ['MySQL rechaza la inserción con un error', 'El valor se sobrescribe automáticamente', 'Se crea una fila duplicada sin problema', 'El valor se convierte en NULL'], answer: 'MySQL rechaza la inserción con un error' },
        { prompt: '¿Por qué muchas tablas usan una columna "id" como PRIMARY KEY en vez de, por ejemplo, el nombre?', options: ['Porque es un valor sencillo, único y estable para identificar cada fila', 'Porque siempre debe ser el primer dato que ve el usuario', 'Porque ocupa menos espacio que cualquier otro tipo de dato', 'Porque MySQL lo exige obligatoriamente'], answer: 'Porque es un valor sencillo, único y estable para identificar cada fila' }
      ]
    }
  },
  {
    id: 'mysql-12',
    title: 'Valores NULL: IS NULL / IS NOT NULL',
    subtitle: 'Nivel 12',
    xp: 65,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>NULL</code> representa la ausencia de valor, no es lo mismo que 0 ni que una cadena vacía <code>\'\'</code>. Como NULL no es "igual" a nada (ni siquiera a sí mismo), no se puede comparar con <code>=</code>.',
        'Para filtrar filas con o sin valor se usan los operadores especiales <code>IS NULL</code> e <code>IS NOT NULL</code>: <code>WHERE telefono IS NULL</code> encuentra las filas donde ese campo está vacío.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> nombre <span class="tok-kw">FROM</span> usuarios <span class="tok-kw">WHERE</span> telefono <span class="tok-kw">IS NULL</span>;\n' +
        '<span class="tok-comment">-- Devuelve los usuarios sin teléfono registrado</span>'
    },
    exercise: {
      instructions: 'Analiza cada consulta con NULL y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- id | nombre | telefono\n-- 1  | Ana    | 555-1234\n-- 2  | Luis   | NULL\n\nSELECT nombre FROM usuarios WHERE telefono IS NULL;', prompt: '¿Qué devuelve esta consulta?', options: ['Luis', 'Ana', 'Ana y Luis', 'Ninguno'], answer: 'Luis' },
        { code: 'SELECT * FROM usuarios WHERE telefono = NULL;', prompt: '¿Por qué esta consulta nunca devuelve filas, aunque haya valores NULL en telefono?', options: ['Porque NULL nunca se compara con el operador =; hay que usar IS NULL', 'Porque falta el punto y coma', 'Porque la columna telefono no existe', 'Porque NULL siempre equivale a 0'], answer: 'Porque NULL nunca se compara con el operador =; hay que usar IS NULL' },
        { code: '-- id | nombre | telefono\n-- 1  | Ana    | 555-1234\n-- 2  | Luis   | NULL\n\nSELECT nombre FROM usuarios WHERE telefono IS NOT NULL;', prompt: '¿Qué devuelve esta consulta?', options: ['Ana', 'Luis', 'Ana y Luis', 'Ninguno'], answer: 'Ana' },
        { code: '-- id | nombre | apodo\n-- 1  | Ana    | \'\'\n-- 2  | Luis   | NULL', prompt: '¿Es lo mismo una cadena vacía (\'\') que NULL en MySQL?', options: ['No, la cadena vacía es un valor de texto y NULL significa "sin valor"', 'Sí, son exactamente lo mismo', 'NULL siempre se interpreta como el número 0', 'La cadena vacía es un error de sintaxis'], answer: 'No, la cadena vacía es un valor de texto y NULL significa "sin valor"' }
      ]
    }
  },
  {
    id: 'mysql-13',
    title: 'Operadores lógicos en WHERE: AND, OR, NOT',
    subtitle: 'Nivel 13',
    xp: 67,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Los operadores <code>AND</code>, <code>OR</code> y <code>NOT</code> combinan varias condiciones en un mismo WHERE: <code>AND</code> exige que se cumplan todas, <code>OR</code> que se cumpla al menos una, y <code>NOT</code> invierte una condición.',
        'Sin paréntesis, <code>AND</code> se evalúa antes que <code>OR</code> (igual que la multiplicación antes que la suma en matemáticas), así que conviene usar paréntesis cuando se combinan ambos para evitar sorpresas.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> nombre <span class="tok-kw">FROM</span> usuarios\n' +
        '<span class="tok-kw">WHERE</span> edad &gt;= <span class="tok-num">18</span> <span class="tok-kw">AND</span> ciudad = <span class="tok-string">\'Madrid\'</span>;\n' +
        '<span class="tok-comment">-- Ambas condiciones deben cumplirse</span>'
    },
    exercise: {
      instructions: 'Analiza cada consulta con operadores lógicos y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- nombre | edad | ciudad\n-- Ana    | 20   | Madrid\n-- Luis   | 17   | Madrid\n-- Marta  | 25   | Bogotá\n\nSELECT nombre FROM usuarios WHERE edad &gt;= 18 AND ciudad = \'Madrid\';', prompt: '¿Qué nombres devuelve esta consulta?', options: ['Solo Ana', 'Ana y Marta', 'Solo Luis', 'Ana, Luis y Marta'], answer: 'Solo Ana' },
        { code: '-- nombre | edad | ciudad\n-- Ana    | 20   | Madrid\n-- Luis   | 17   | Madrid\n-- Marta  | 25   | Bogotá\n\nSELECT nombre FROM usuarios WHERE edad &lt; 18 OR ciudad = \'Bogotá\';', prompt: '¿Qué nombres devuelve esta consulta?', options: ['Luis y Marta', 'Solo Luis', 'Solo Marta', 'Ana, Luis y Marta'], answer: 'Luis y Marta' },
        { code: '-- nombre | activo\n-- Ana    | 1\n-- Luis   | 0\n\nSELECT nombre FROM usuarios WHERE NOT activo = 1;', prompt: '¿Qué nombre devuelve esta consulta?', options: ['Luis', 'Ana', 'Ana y Luis', 'Ninguno'], answer: 'Luis' },
        { code: 'SELECT * FROM productos WHERE categoria = \'ropa\' OR categoria = \'zapatos\' AND precio &lt; 50;', prompt: '¿Qué operador se evalúa primero en ausencia de paréntesis, AND u OR?', options: ['AND se evalúa antes que OR', 'OR se evalúa antes que AND', 'Se evalúan en el orden en que aparecen, de izquierda a derecha', 'Es un error de sintaxis sin paréntesis'], answer: 'AND se evalúa antes que OR' }
      ]
    }
  },
  {
    id: 'mysql-14',
    title: 'BETWEEN, IN y LIKE',
    subtitle: 'Nivel 14',
    xp: 69,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>BETWEEN a AND b</code> comprueba que un valor esté en un rango, incluyendo ambos extremos. <code>IN (lista)</code> comprueba que un valor coincida con alguno de una lista. Ambos son atajos para evitar varios OR seguidos.',
        '<code>LIKE</code> busca coincidencias de texto con comodines: <code>%</code> representa cualquier cantidad de caracteres (incluido ninguno) y <code>_</code> representa exactamente un carácter.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> nombre <span class="tok-kw">FROM</span> usuarios <span class="tok-kw">WHERE</span> nombre <span class="tok-kw">LIKE</span> <span class="tok-string">\'An%\'</span>;\n' +
        '<span class="tok-comment">-- Encuentra nombres que empiezan por "An"</span>'
    },
    exercise: {
      instructions: 'Analiza cada consulta con BETWEEN, IN y LIKE y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- nombre | precio\n-- A | 10\n-- B | 30\n-- C | 50\n-- D | 70\n\nSELECT nombre FROM productos WHERE precio BETWEEN 10 AND 50;', prompt: '¿Qué productos devuelve? (BETWEEN incluye los extremos)', options: ['A, B y C', 'Solo B', 'A, B, C y D', 'Solo D'], answer: 'A, B y C' },
        { code: '-- nombre | ciudad\n-- Ana   | Madrid\n-- Luis  | Lima\n-- Marta | Bogotá\n\nSELECT nombre FROM usuarios WHERE ciudad IN (\'Madrid\', \'Bogotá\');', prompt: '¿Qué nombres devuelve esta consulta?', options: ['Ana y Marta', 'Solo Ana', 'Solo Luis', 'Ana, Luis y Marta'], answer: 'Ana y Marta' },
        { code: '-- nombre\n-- Ana\n-- Andrea\n-- Luis\n\nSELECT nombre FROM usuarios WHERE nombre LIKE \'An%\';', prompt: '¿Qué nombres devuelve? (% significa cualquier cantidad de caracteres)', options: ['Ana y Andrea', 'Solo Ana', 'Solo Andrea', 'Los tres'], answer: 'Ana y Andrea' },
        { code: 'SELECT nombre FROM usuarios WHERE nombre LIKE \'_na\';', prompt: '¿Qué representa el guion bajo (_) dentro de un patrón LIKE?', options: ['Exactamente un carácter cualquiera', 'Cero o más caracteres', 'El inicio de la cadena', 'Un espacio en blanco'], answer: 'Exactamente un carácter cualquiera' }
      ]
    }
  },
  {
    id: 'mysql-15',
    title: 'Alias de columnas y tablas con AS',
    subtitle: 'Nivel 15',
    xp: 71,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>AS</code> crea un alias, un "apodo" temporal para una columna o una tabla, útil para resultados más legibles o para acortar nombres largos de tablas en consultas con varias de ellas.',
        'El alias solo existe durante esa consulta: no cambia el nombre real de la columna ni de la tabla. Además, la palabra <code>AS</code> es opcional en MySQL: <code>nombre cliente</code> funciona igual que <code>nombre AS cliente</code>.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> p.nombre <span class="tok-kw">AS</span> producto, p.precio <span class="tok-kw">AS</span> costo\n' +
        '<span class="tok-kw">FROM</span> productos <span class="tok-kw">AS</span> p;'
    },
    exercise: {
      instructions: 'Analiza cada consulta con alias y decide qué ocurre.',
      variant: 'code',
      questions: [
        { code: 'SELECT nombre AS cliente FROM usuarios;', prompt: '¿Cómo se llamará la columna en el resultado?', options: ['cliente', 'nombre', 'usuarios', 'No cambia de nombre'], answer: 'cliente' },
        { code: 'SELECT p.nombre FROM productos AS p WHERE p.precio &gt; 100;', prompt: '¿Qué representa "p" en esta consulta?', options: ['Un alias (apodo) para la tabla productos', 'Una columna de la tabla', 'Una función de MySQL', 'Un error de sintaxis'], answer: 'Un alias (apodo) para la tabla productos' },
        { code: 'SELECT precio AS costo_final FROM productos;', prompt: '¿AS cambia el nombre real de la columna en la tabla?', options: ['No, solo cambia el nombre en el resultado de esa consulta', 'Sí, renombra la columna de forma permanente', 'Sí, pero solo la primera vez que se ejecuta', 'No, AS no tiene ningún efecto en absoluto'], answer: 'No, solo cambia el nombre en el resultado de esa consulta' },
        { code: 'SELECT nombre cliente FROM usuarios;', prompt: 'Esta consulta omite la palabra AS. ¿Es válida en MySQL?', options: ['Sí, AS es opcional al crear un alias', 'No, siempre hace falta escribir AS', 'No, esto genera un error de sintaxis obligatorio', 'Solo es válido para alias de tablas, no de columnas'], answer: 'Sí, AS es opcional al crear un alias' }
      ]
    }
  },
  {
    id: 'mysql-16',
    title: 'Funciones de agregación: COUNT y SUM',
    subtitle: 'Nivel 16',
    xp: 73,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>COUNT(*)</code> cuenta cuántas filas hay, incluidas las que tienen NULL en alguna columna. <code>COUNT(columna)</code>, en cambio, solo cuenta las filas donde esa columna concreta no es NULL.',
        '<code>SUM(columna)</code> suma todos los valores numéricos de una columna, ignorando los valores NULL como si esas filas no existieran para el cálculo.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> <span class="tok-kw">COUNT</span>(*) <span class="tok-kw">FROM</span> usuarios;\n' +
        '<span class="tok-comment">-- Cuenta todas las filas de la tabla</span>'
    },
    exercise: {
      instructions: 'Analiza cada consulta con COUNT y SUM y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- id | nombre | telefono\n-- 1  | Ana    | 555-1234\n-- 2  | Luis   | NULL\n-- 3  | Marta  | 555-9999\n\nSELECT COUNT(*) FROM usuarios;', prompt: '¿Qué devuelve COUNT(*)?', options: ['3', '2', '1', '0'], answer: '3' },
        { code: '-- id | nombre | telefono\n-- 1  | Ana    | 555-1234\n-- 2  | Luis   | NULL\n-- 3  | Marta  | 555-9999\n\nSELECT COUNT(telefono) FROM usuarios;', prompt: '¿Qué devuelve COUNT(telefono), teniendo en cuenta que Luis tiene NULL?', options: ['2', '3', '1', '0'], answer: '2' },
        { code: '-- nombre | precio\n-- A | 10\n-- B | 20\n-- C | 30\n\nSELECT SUM(precio) FROM productos;', prompt: '¿Qué devuelve esta consulta?', options: ['60', '3', '10', '30'], answer: '60' },
        { code: '-- nombre | precio\n-- A | 10\n-- B | NULL\n-- C | 30\n\nSELECT SUM(precio) FROM productos;', prompt: '¿Cómo afectan los valores NULL a SUM()?', options: ['SUM() los ignora, como si esas filas no existieran para la suma', 'SUM() los trata como 0 y detiene el cálculo', 'SUM() devuelve NULL si hay algún NULL en la columna', 'Da un error de sintaxis'], answer: 'SUM() los ignora, como si esas filas no existieran para la suma' }
      ]
    }
  },
  {
    id: 'mysql-17',
    title: 'Funciones de agregación: AVG, MIN y MAX',
    subtitle: 'Nivel 17',
    xp: 74,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>AVG(columna)</code> calcula el promedio de los valores numéricos de una columna, ignorando los NULL tanto en la suma como en el conteo. <code>MIN</code> y <code>MAX</code> devuelven el valor más pequeño y más grande.',
        'Estas cuatro funciones (<code>COUNT</code>, <code>SUM</code>, <code>AVG</code>, <code>MIN</code>, <code>MAX</code>) se llaman funciones de agregación porque reducen muchas filas a un único valor resumen.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> <span class="tok-kw">AVG</span>(precio) <span class="tok-kw">FROM</span> productos;\n' +
        '<span class="tok-comment">-- Devuelve el precio promedio</span>'
    },
    exercise: {
      instructions: 'Analiza cada consulta con AVG, MIN y MAX y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- nombre | precio\n-- A | 10\n-- B | 20\n-- C | 30\n\nSELECT AVG(precio) FROM productos;', prompt: '¿Qué devuelve esta consulta?', options: ['20', '60', '10', '30'], answer: '20' },
        { code: '-- nombre | precio\n-- A | 10\n-- B | 20\n-- C | 30\n\nSELECT MIN(precio) FROM productos;', prompt: '¿Qué devuelve MIN(precio)?', options: ['10', '30', '20', '60'], answer: '10' },
        { code: '-- nombre | edad\n-- Ana   | 20\n-- Luis  | 17\n-- Marta | 25\n\nSELECT MAX(edad) FROM usuarios;', prompt: '¿Qué devuelve MAX(edad)?', options: ['25', '20', '17', '62'], answer: '25' },
        { code: '-- nombre | nota\n-- Ana   | 8\n-- Luis  | NULL\n-- Marta | 6\n\nSELECT AVG(nota) FROM examenes;', prompt: '¿Qué promedio calcula AVG() en esta tabla?', options: ['7 (el promedio de 8 y 6, ignorando el NULL de Luis)', '4.67 (contando el NULL como 0)', 'NULL, porque hay un valor NULL', '14, la suma de las notas'], answer: '7 (el promedio de 8 y 6, ignorando el NULL de Luis)' }
      ]
    }
  },
  {
    id: 'mysql-18',
    title: 'Agrupar resultados con GROUP BY',
    subtitle: 'Nivel 18',
    xp: 76,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>GROUP BY</code> agrupa las filas que comparten el mismo valor en una columna, para poder aplicarles una función de agregación a cada grupo por separado en lugar de a toda la tabla.',
        'Si el SELECT incluye una columna que no está en el GROUP BY ni dentro de una función de agregación, MySQL no puede saber qué valor mostrar cuando un grupo contiene varias filas distintas: es una fuente habitual de resultados confusos.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> ciudad, <span class="tok-kw">COUNT</span>(*) <span class="tok-kw">AS</span> total\n' +
        '<span class="tok-kw">FROM</span> usuarios\n' +
        '<span class="tok-kw">GROUP BY</span> ciudad;'
    },
    exercise: {
      instructions: 'Analiza cada consulta con GROUP BY y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- nombre | ciudad\n-- Ana   | Madrid\n-- Luis  | Madrid\n-- Marta | Bogotá\n\nSELECT ciudad, COUNT(*) AS total FROM usuarios GROUP BY ciudad;', prompt: '¿Cuántos grupos (filas de resultado) produce esta consulta?', options: ['2 (Madrid y Bogotá)', '3 (una por usuario)', '1 (todos juntos)', '0'], answer: '2 (Madrid y Bogotá)' },
        { code: '-- nombre | ciudad\n-- Ana   | Madrid\n-- Luis  | Madrid\n-- Marta | Bogotá\n\nSELECT ciudad, COUNT(*) AS total FROM usuarios GROUP BY ciudad;', prompt: '¿Qué valor de "total" corresponde a Madrid?', options: ['2', '1', '3', '0'], answer: '2' },
        { code: '-- categoria | precio\n-- ropa | 20\n-- ropa | 30\n-- tech | 100\n\nSELECT categoria, SUM(precio) AS total FROM productos GROUP BY categoria;', prompt: '¿Qué total corresponde a la categoría "ropa"?', options: ['50', '20', '30', '150'], answer: '50' },
        { code: 'SELECT nombre, ciudad, COUNT(*) FROM usuarios GROUP BY ciudad;', prompt: 'Esta consulta selecciona "nombre" sin agruparlo ni agregarlo. ¿Por qué suele ser un problema?', options: ['Porque MySQL no puede saber qué "nombre" mostrar si hay varias filas distintas en el mismo grupo', 'Porque "nombre" no puede aparecer nunca en un SELECT con GROUP BY', 'Porque GROUP BY solo permite columnas numéricas', 'Porque hace falta usar HAVING en su lugar'], answer: 'Porque MySQL no puede saber qué "nombre" mostrar si hay varias filas distintas en el mismo grupo' }
      ]
    }
  },
  {
    id: 'mysql-19',
    title: 'Filtrar grupos con HAVING',
    subtitle: 'Nivel 19',
    xp: 78,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>HAVING</code> filtra grupos después de que <code>GROUP BY</code> los haya formado, y puede usar funciones de agregación como <code>COUNT()</code> o <code>SUM()</code> en su condición; <code>WHERE</code>, en cambio, filtra filas individuales antes de agrupar y no admite agregaciones.',
        'Por eso se usan juntos con roles distintos: <code>WHERE</code> descarta filas al principio, y <code>HAVING</code> descarta grupos ya calculados al final.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> ciudad, <span class="tok-kw">COUNT</span>(*) <span class="tok-kw">AS</span> total\n' +
        '<span class="tok-kw">FROM</span> usuarios\n' +
        '<span class="tok-kw">GROUP BY</span> ciudad\n' +
        '<span class="tok-kw">HAVING</span> <span class="tok-kw">COUNT</span>(*) &gt; <span class="tok-num">1</span>;'
    },
    exercise: {
      instructions: 'Analiza cada consulta con HAVING y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- nombre | ciudad\n-- Ana   | Madrid\n-- Luis  | Madrid\n-- Marta | Bogotá\n\nSELECT ciudad, COUNT(*) AS total FROM usuarios GROUP BY ciudad HAVING COUNT(*) &gt; 1;', prompt: '¿Qué ciudades devuelve esta consulta?', options: ['Solo Madrid (tiene más de 1 usuario)', 'Madrid y Bogotá', 'Solo Bogotá', 'Ninguna'], answer: 'Solo Madrid (tiene más de 1 usuario)' },
        { code: 'SELECT categoria, SUM(precio) AS total FROM productos GROUP BY categoria HAVING total &gt; 100;', prompt: '¿En qué momento actúa HAVING respecto a WHERE?', options: ['HAVING filtra después de agrupar; WHERE filtra antes de agrupar', 'HAVING y WHERE hacen exactamente lo mismo', 'HAVING filtra antes de agrupar; WHERE filtra después', 'WHERE solo puede usarse junto con GROUP BY'], answer: 'HAVING filtra después de agrupar; WHERE filtra antes de agrupar' },
        { code: 'SELECT categoria FROM productos WHERE COUNT(*) &gt; 1 GROUP BY categoria;', prompt: '¿Por qué esta consulta da un error?', options: ['Porque WHERE no puede usar funciones de agregación como COUNT(); para eso se usa HAVING', 'Porque falta el punto y coma', 'Porque GROUP BY debe ir antes de WHERE', 'Porque COUNT() no existe en MySQL'], answer: 'Porque WHERE no puede usar funciones de agregación como COUNT(); para eso se usa HAVING' },
        { code: '-- nombre | categoria | precio\n-- A | ropa | 20\n-- B | ropa | 80\n-- C | tech | 200\n-- D | tech | 5\n\nSELECT categoria, SUM(precio) AS total FROM productos WHERE precio &gt; 10 GROUP BY categoria HAVING total &gt; 50;', prompt: 'D (precio 5) se descarta por el WHERE antes de agrupar. ¿Qué categorías aparecen en el resultado final?', options: ['ropa y tech (ambas superan 50 tras el filtro)', 'Solo ropa', 'Solo tech', 'Ninguna categoría'], answer: 'ropa y tech (ambas superan 50 tras el filtro)' }
      ]
    }
  },
  {
    id: 'mysql-20',
    title: 'Orden de las cláusulas de una consulta',
    subtitle: 'Nivel 20',
    xp: 80,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'Una consulta SQL completa sigue siempre el mismo orden al <strong>escribirse</strong>: <code>SELECT</code>, <code>FROM</code>, <code>WHERE</code>, <code>GROUP BY</code>, <code>HAVING</code>, <code>ORDER BY</code> y por último <code>LIMIT</code>.',
        'No todas las cláusulas son obligatorias, pero las que aparecen deben respetar ese orden: escribir <code>WHERE</code> después de <code>GROUP BY</code>, por ejemplo, es un error de sintaxis.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> categoria, <span class="tok-kw">COUNT</span>(*) <span class="tok-kw">AS</span> total\n' +
        '<span class="tok-kw">FROM</span> productos\n' +
        '<span class="tok-kw">WHERE</span> precio &gt; <span class="tok-num">10</span>\n' +
        '<span class="tok-kw">GROUP BY</span> categoria\n' +
        '<span class="tok-kw">HAVING</span> <span class="tok-kw">COUNT</span>(*) &gt; <span class="tok-num">1</span>\n' +
        '<span class="tok-kw">ORDER BY</span> total <span class="tok-kw">DESC</span>\n' +
        '<span class="tok-kw">LIMIT</span> <span class="tok-num">5</span>;'
    },
    exercise: {
      instructions: 'Ordena las piezas tal como se escriben en una consulta SQL completa.',
      items: [
        { id: 's1', code: 'SELECT categoria, COUNT(*) AS total' },
        { id: 's2', code: 'FROM productos' },
        { id: 's3', code: 'WHERE precio &gt; 10' },
        { id: 's4', code: 'GROUP BY categoria' },
        { id: 's5', code: 'HAVING COUNT(*) &gt; 1' },
        { id: 's6', code: 'ORDER BY total DESC LIMIT 5' }
      ],
      correctOrder: ['s1', 's2', 's3', 's4', 's5', 's6']
    }
  },
  {
    id: 'mysql-21',
    title: 'Claves foráneas y relaciones entre tablas',
    subtitle: 'Nivel 21',
    xp: 82,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una <strong>FOREIGN KEY</strong> (clave foránea) es una columna que referencia la PRIMARY KEY de otra tabla, y así conecta ambas tablas: por ejemplo, la columna <code>cliente_id</code> de "pedidos" puede apuntar a <code>id</code> en "clientes".',
        'MySQL usa esa relación para mantener la <strong>integridad referencial</strong>: impide insertar un pedido con un cliente_id que no exista en la tabla clientes, evitando así registros "huérfanos".'
      ],
      code:
        '<span class="tok-kw">CREATE TABLE</span> pedidos (\n' +
        '  id <span class="tok-kw">INT</span> <span class="tok-kw">PRIMARY KEY</span>,\n' +
        '  cliente_id <span class="tok-kw">INT</span>,\n' +
        '  <span class="tok-kw">FOREIGN KEY</span> (cliente_id) <span class="tok-kw">REFERENCES</span> clientes(id)\n' +
        ');'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre claves foráneas y relaciones.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué es una clave foránea (FOREIGN KEY)?', options: ['Una columna que referencia la PRIMARY KEY de otra tabla, para relacionar registros', 'Una copia de todos los datos de otra tabla', 'Una clave que solo puede tener valores de texto', 'Un tipo de índice para acelerar búsquedas'], answer: 'Una columna que referencia la PRIMARY KEY de otra tabla, para relacionar registros' },
        { prompt: '¿Qué evita una FOREIGN KEY?', options: ['Que se inserte un valor que no existe en la tabla referenciada (evita registros huérfanos)', 'Que se puedan borrar filas de la tabla', 'Que se repitan valores en cualquier columna', 'Que se puedan crear nuevas tablas'], answer: 'Que se inserte un valor que no existe en la tabla referenciada (evita registros huérfanos)' },
        { prompt: 'Si la tabla pedidos tiene una columna cliente_id que es FOREIGN KEY hacia clientes.id, ¿qué representa esta relación?', options: ['Que cada pedido pertenece a un cliente concreto que debe existir en la tabla clientes', 'Que cada cliente solo puede hacer un pedido', 'Que la tabla pedidos contiene una copia de todos los datos del cliente', 'Que clientes depende de pedidos'], answer: 'Que cada pedido pertenece a un cliente concreto que debe existir en la tabla clientes' },
        { prompt: 'En una relación uno a muchos (ej. un cliente con muchos pedidos), ¿en qué tabla suele ir la FOREIGN KEY?', options: ['En la tabla del lado "muchos" (pedidos), apuntando al lado "uno" (clientes)', 'En la tabla del lado "uno" (clientes), apuntando a pedidos', 'En ambas tablas por igual', 'En ninguna, se usa una tabla aparte'], answer: 'En la tabla del lado "muchos" (pedidos), apuntando al lado "uno" (clientes)' }
      ]
    }
  },
  {
    id: 'mysql-22',
    title: 'INNER JOIN',
    subtitle: 'Nivel 22',
    xp: 84,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>INNER JOIN</code> combina filas de dos tablas según una condición (<code>ON</code>), y solo devuelve las filas que tienen coincidencia en <strong>ambas</strong> tablas; si una fila no tiene pareja, se descarta.',
        'Es el tipo de JOIN más habitual: por ejemplo, unir pedidos con clientes para saber el nombre del cliente de cada pedido, descartando pedidos con un cliente_id que ya no existe.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> p.producto, c.nombre\n' +
        '<span class="tok-kw">FROM</span> pedidos p\n' +
        '<span class="tok-kw">INNER JOIN</span> clientes c <span class="tok-kw">ON</span> p.cliente_id = c.id;'
    },
    exercise: {
      instructions: 'Analiza cada consulta con INNER JOIN y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- Tabla clientes\n-- id | nombre\n-- 1  | Ana\n-- 2  | Luis\n\n-- Tabla pedidos\n-- id | cliente_id | producto\n-- 1  | 1          | Mesa\n-- 2  | 1          | Silla\n-- 3  | 3          | Lampara\n\nSELECT p.producto, c.nombre FROM pedidos p INNER JOIN clientes c ON p.cliente_id = c.id;', prompt: '¿Cuántas filas devuelve esta consulta?', options: ['2 filas (Lampara se excluye porque no hay cliente con id 3)', '3 filas, todas los pedidos', '1 fila', '0 filas'], answer: '2 filas (Lampara se excluye porque no hay cliente con id 3)' },
        { code: 'SELECT * FROM a INNER JOIN b ON a.id = b.a_id;', prompt: '¿Qué filas devuelve un INNER JOIN?', options: ['Solo las filas que tienen coincidencia en ambas tablas', 'Todas las filas de la tabla izquierda, tengan o no coincidencia', 'Todas las filas de ambas tablas, combinadas sin condición', 'Solo las filas que no tienen coincidencia'], answer: 'Solo las filas que tienen coincidencia en ambas tablas' },
        { code: 'SELECT p.producto FROM pedidos p INNER JOIN clientes c ON p.cliente_id = c.id;', prompt: '¿Qué función cumple la cláusula ON en un JOIN?', options: ['Define la condición que deben cumplir las filas para considerarse relacionadas', 'Ordena los resultados', 'Limita el número de filas devueltas', 'Filtra filas después de agrupar'], answer: 'Define la condición que deben cumplir las filas para considerarse relacionadas' },
        { code: '-- Tabla autores\n-- id | nombre\n-- 1  | Cervantes\n-- 2  | Borges\n\n-- Tabla libros\n-- id | autor_id | titulo\n-- 1  | 1        | Quijote\n-- 2  | 1        | Novelas ejemplares\n-- 3  | 2        | Ficciones\n\nSELECT titulo, nombre FROM libros INNER JOIN autores ON libros.autor_id = autores.id;', prompt: '¿Cuántas filas devuelve esta consulta?', options: ['3 filas, una por cada libro (todos tienen autor)', '2 filas', '1 fila', '0 filas, faltan alias'], answer: '3 filas, una por cada libro (todos tienen autor)' }
      ]
    }
  },
  {
    id: 'mysql-23',
    title: 'LEFT JOIN',
    subtitle: 'Nivel 23',
    xp: 86,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>LEFT JOIN</code> conserva <strong>todas</strong> las filas de la tabla de la izquierda, tengan o no coincidencia en la tabla de la derecha; cuando no hay coincidencia, las columnas de la derecha aparecen como <code>NULL</code>.',
        'Por eso es la herramienta ideal para preguntas como "¿qué clientes no tienen pedidos?": se hace un LEFT JOIN y luego se filtra por <code>WHERE columna_derecha IS NULL</code>.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> c.nombre, p.producto\n' +
        '<span class="tok-kw">FROM</span> clientes c\n' +
        '<span class="tok-kw">LEFT JOIN</span> pedidos p <span class="tok-kw">ON</span> c.id = p.cliente_id;'
    },
    exercise: {
      instructions: 'Analiza cada consulta con LEFT JOIN y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- Tabla clientes\n-- id | nombre\n-- 1  | Ana\n-- 2  | Luis\n\n-- Tabla pedidos\n-- id | cliente_id | producto\n-- 1  | 1          | Mesa\n\nSELECT c.nombre, p.producto FROM clientes c LEFT JOIN pedidos p ON c.id = p.cliente_id;', prompt: '¿Qué devuelve esta consulta para Luis, que no tiene pedidos?', options: ['Una fila con Luis y producto en NULL', 'Ninguna fila para Luis (se excluye)', 'Un error, porque Luis no tiene pedidos', 'Una fila vacía sin el nombre Luis'], answer: 'Una fila con Luis y producto en NULL' },
        { code: '-- Tabla clientes\n-- id | nombre\n-- 1  | Ana\n-- 2  | Luis\n\n-- Tabla pedidos\n-- id | cliente_id | producto\n-- 1  | 1          | Mesa\n\nSELECT c.nombre, p.producto FROM clientes c LEFT JOIN pedidos p ON c.id = p.cliente_id;', prompt: '¿Cuántas filas totales devuelve esta consulta?', options: ['2 (Ana con Mesa, y Luis con NULL)', '1 (solo Ana)', '3', '0'], answer: '2 (Ana con Mesa, y Luis con NULL)' },
        { code: 'SELECT c.nombre, p.producto FROM clientes c LEFT JOIN pedidos p ON c.id = p.cliente_id;', prompt: '¿En qué se diferencia LEFT JOIN de INNER JOIN?', options: ['LEFT JOIN mantiene todas las filas de la izquierda aunque no haya coincidencia; INNER JOIN las descarta', 'LEFT JOIN descarta las filas sin coincidencia; INNER JOIN las mantiene', 'Son exactamente iguales', 'LEFT JOIN solo funciona con una tabla'], answer: 'LEFT JOIN mantiene todas las filas de la izquierda aunque no haya coincidencia; INNER JOIN las descarta' },
        { code: 'SELECT c.nombre FROM clientes c LEFT JOIN pedidos p ON c.id = p.cliente_id WHERE p.id IS NULL;', prompt: '¿Para qué sirve este patrón (LEFT JOIN + WHERE columna_derecha IS NULL)?', options: ['Para encontrar filas de la izquierda que NO tienen coincidencia en la derecha (ej. clientes sin pedidos)', 'Para encontrar filas que sí tienen coincidencia', 'Para eliminar filas duplicadas', 'Para contar cuántas tablas hay en la base de datos'], answer: 'Para encontrar filas de la izquierda que NO tienen coincidencia en la derecha (ej. clientes sin pedidos)' }
      ]
    }
  },
  {
    id: 'mysql-24',
    title: 'RIGHT JOIN',
    subtitle: 'Nivel 24',
    xp: 88,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>RIGHT JOIN</code> es el espejo de LEFT JOIN: conserva todas las filas de la tabla de la <strong>derecha</strong>, aunque no tengan coincidencia en la izquierda, rellenando con NULL las columnas que falten.',
        'Cualquier RIGHT JOIN puede reescribirse como un LEFT JOIN cambiando el orden de las tablas, por lo que muchos equipos prefieren usar siempre LEFT JOIN por consistencia.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> c.nombre, p.producto\n' +
        '<span class="tok-kw">FROM</span> pedidos p\n' +
        '<span class="tok-kw">RIGHT JOIN</span> clientes c <span class="tok-kw">ON</span> p.cliente_id = c.id;'
    },
    exercise: {
      instructions: 'Analiza cada consulta con RIGHT JOIN y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- Tabla clientes\n-- id | nombre\n-- 1  | Ana\n-- 2  | Luis\n\n-- Tabla pedidos\n-- id | cliente_id | producto\n-- 1  | 1          | Mesa\n\nSELECT c.nombre, p.producto FROM pedidos p RIGHT JOIN clientes c ON p.cliente_id = c.id;', prompt: '¿Qué tabla determina qué filas se conservan siempre en este RIGHT JOIN?', options: ['La tabla de la derecha (clientes)', 'La tabla de la izquierda (pedidos)', 'Ninguna, se conservan todas siempre', 'Solo la tabla mencionada en el WHERE'], answer: 'La tabla de la derecha (clientes)' },
        { code: '-- Tabla clientes\n-- id | nombre\n-- 1  | Ana\n-- 2  | Luis\n\n-- Tabla pedidos\n-- id | cliente_id | producto\n-- 1  | 1          | Mesa\n\nSELECT c.nombre, p.producto FROM pedidos p RIGHT JOIN clientes c ON p.cliente_id = c.id;', prompt: '¿Cuántas filas devuelve esta consulta?', options: ['2 (Ana con Mesa, y Luis con NULL)', '1 (solo Ana)', '0', '3'], answer: '2 (Ana con Mesa, y Luis con NULL)' },
        { code: 'SELECT * FROM pedidos p RIGHT JOIN clientes c ON p.cliente_id = c.id;', prompt: '¿Cómo se podría reescribir esta consulta usando LEFT JOIN en vez de RIGHT JOIN?', options: ['SELECT * FROM clientes c LEFT JOIN pedidos p ON p.cliente_id = c.id;', 'SELECT * FROM pedidos p LEFT JOIN clientes c ON p.cliente_id = c.id;', 'No es posible reescribirla con LEFT JOIN', 'SELECT * FROM clientes c INNER JOIN pedidos p ON p.cliente_id = c.id;'], answer: 'SELECT * FROM clientes c LEFT JOIN pedidos p ON p.cliente_id = c.id;' },
        { code: 'SELECT * FROM pedidos p RIGHT JOIN clientes c ON p.cliente_id = c.id;', prompt: '¿Por qué RIGHT JOIN se usa mucho menos que LEFT JOIN en la práctica?', options: ['Porque cualquier RIGHT JOIN puede escribirse como un LEFT JOIN cambiando el orden de las tablas', 'Porque RIGHT JOIN no existe en MySQL', 'Porque RIGHT JOIN es mucho más lento que LEFT JOIN', 'Porque RIGHT JOIN no admite la cláusula ON'], answer: 'Porque cualquier RIGHT JOIN puede escribirse como un LEFT JOIN cambiando el orden de las tablas' }
      ]
    }
  },
  {
    id: 'mysql-25',
    title: 'Combinar múltiples JOIN',
    subtitle: 'Nivel 25',
    xp: 90,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Cuando los datos que necesitas están repartidos en tres o más tablas relacionadas, se pueden encadenar varias cláusulas <code>JOIN</code> seguidas, cada una con su propia condición <code>ON</code>.',
        'El orden de los JOIN importa para la legibilidad y para saber con qué tabla se relaciona cada nuevo JOIN; además, mezclar tipos de JOIN (INNER y LEFT) en la misma consulta puede cambiar qué filas sobreviven al final.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> p.producto, c.nombre, cat.nombre <span class="tok-kw">AS</span> categoria\n' +
        '<span class="tok-kw">FROM</span> pedidos p\n' +
        '<span class="tok-kw">INNER JOIN</span> clientes c <span class="tok-kw">ON</span> p.cliente_id = c.id\n' +
        '<span class="tok-kw">INNER JOIN</span> categorias cat <span class="tok-kw">ON</span> p.categoria_id = cat.id;'
    },
    exercise: {
      instructions: 'Analiza cada consulta con múltiples JOIN y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- clientes: id | nombre -> (1,Ana) (2,Luis)\n-- categorias: id | nombre -> (1,Muebles) (2,Ropa)\n-- pedidos: id | cliente_id | categoria_id | producto\n--   1 | 1 | 1 | Mesa\n--   2 | 2 | 2 | Camisa\n\nSELECT p.producto, c.nombre AS cliente, cat.nombre AS categoria\nFROM pedidos p\nINNER JOIN clientes c ON p.cliente_id = c.id\nINNER JOIN categorias cat ON p.categoria_id = cat.id;', prompt: '¿Qué categoría aparece junto al pedido "Mesa"?', options: ['Muebles', 'Ropa', 'Ana', 'Ninguna'], answer: 'Muebles' },
        { code: 'SELECT p.producto, c.nombre, cat.nombre\nFROM pedidos p\nINNER JOIN clientes c ON p.cliente_id = c.id\nINNER JOIN categorias cat ON p.categoria_id = cat.id;', prompt: 'Para combinar datos de 3 tablas relacionadas entre sí en una sola consulta, ¿cuántas cláusulas JOIN se necesitan como mínimo?', options: ['2', '1', '3', '0'], answer: '2' },
        { code: 'SELECT * FROM a\nINNER JOIN b ON a.id = b.a_id\nINNER JOIN c ON b.id = c.b_id;', prompt: 'En esta consulta, ¿con qué tabla se relaciona directamente "c"?', options: ['Con la tabla b, a través de b.id = c.b_id', 'Con la tabla a directamente', 'Con ninguna, falta un JOIN adicional', 'Con sí misma'], answer: 'Con la tabla b, a través de b.id = c.b_id' },
        { code: 'SELECT c.nombre, p.producto, cat.nombre AS categoria\nFROM clientes c\nLEFT JOIN pedidos p ON c.id = p.cliente_id\nINNER JOIN categorias cat ON p.categoria_id = cat.id;', prompt: 'Si un cliente no tiene ningún pedido, ¿qué ocurre con esta consulta que mezcla LEFT JOIN con un INNER JOIN después?', options: ['El INNER JOIN final descarta a ese cliente, porque no hay categoria_id que coincida', 'El cliente aparece igualmente gracias al LEFT JOIN inicial', 'Da un error de sintaxis por mezclar tipos de JOIN', 'Se ignora el INNER JOIN automáticamente'], answer: 'El INNER JOIN final descarta a ese cliente, porque no hay categoria_id que coincida' }
      ]
    }
  },
  {
    id: 'mysql-26',
    title: 'Subconsultas (subqueries)',
    subtitle: 'Nivel 26',
    xp: 92,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una <strong>subconsulta</strong> es un SELECT dentro de otra consulta, normalmente entre paréntesis. La subconsulta se resuelve primero y su resultado se usa en la consulta externa, por ejemplo dentro de un WHERE.',
        'Si la subconsulta se compara con <code>=</code>, debe devolver un único valor; si se usa con <code>IN</code>, puede devolver una lista de valores con los que comparar.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> nombre <span class="tok-kw">FROM</span> productos\n' +
        '<span class="tok-kw">WHERE</span> precio &gt; (<span class="tok-kw">SELECT</span> <span class="tok-kw">AVG</span>(precio) <span class="tok-kw">FROM</span> productos);'
    },
    exercise: {
      instructions: 'Analiza cada consulta con subconsultas y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- nombre | precio\n-- A | 10\n-- B | 20\n-- C | 60\n\nSELECT nombre FROM productos WHERE precio &gt; (SELECT AVG(precio) FROM productos);', prompt: 'El precio promedio es 30. ¿Qué productos devuelve la consulta externa (precio &gt; promedio)?', options: ['Solo C (60 > 30)', 'A y B', 'Los tres', 'Ninguno'], answer: 'Solo C (60 > 30)' },
        { code: '-- id | categoria_id\n-- 1 | 5\n-- 2 | 8\n\n-- Tabla categorias_destacadas: categoria_id\n-- 5\n\nSELECT nombre FROM productos WHERE categoria_id IN (SELECT categoria_id FROM categorias_destacadas);', prompt: '¿Qué hace la subconsulta dentro del IN?', options: ['Genera la lista de valores permitidos con la que se compara categoria_id', 'Cuenta cuántas categorías hay en total', 'Ordena los productos por categoría', 'Elimina las categorías no destacadas'], answer: 'Genera la lista de valores permitidos con la que se compara categoria_id' },
        { code: 'SELECT nombre FROM productos WHERE precio = (SELECT MAX(precio) FROM productos);', prompt: '¿Por qué esta subconsulta debe devolver un único valor?', options: ['Porque se compara con =, que necesita exactamente un valor a cada lado', 'Porque las subconsultas nunca pueden devolver más de una fila en MySQL', 'Porque MAX() solo puede usarse una vez por consulta', 'Porque WHERE no admite subconsultas con varias columnas'], answer: 'Porque se compara con =, que necesita exactamente un valor a cada lado' },
        { code: 'SELECT nombre FROM productos WHERE precio &gt; (SELECT AVG(precio) FROM productos);', prompt: '¿Se ejecuta primero la subconsulta interna (SELECT AVG...) o la consulta externa?', options: ['Primero se resuelve la subconsulta interna, y su resultado se usa en la consulta externa', 'Primero se resuelve la consulta externa', 'Se ejecutan exactamente al mismo tiempo', 'El orden es aleatorio'], answer: 'Primero se resuelve la subconsulta interna, y su resultado se usa en la consulta externa' }
      ]
    }
  },
  {
    id: 'mysql-27',
    title: 'UNION y UNION ALL',
    subtitle: 'Nivel 27',
    xp: 94,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>UNION</code> combina el resultado de dos SELECT (con el mismo número de columnas) en uno solo, eliminando las filas duplicadas que aparezcan en ambos. <code>UNION ALL</code> hace lo mismo pero conserva los duplicados.',
        'Como comprobar y quitar duplicados cuesta trabajo, <code>UNION ALL</code> suele ser más rápido que <code>UNION</code> cuando sabes que no habrá filas repetidas o no te importa que las haya.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> nombre <span class="tok-kw">FROM</span> clientes\n' +
        '<span class="tok-kw">UNION</span>\n' +
        '<span class="tok-kw">SELECT</span> nombre <span class="tok-kw">FROM</span> proveedores;'
    },
    exercise: {
      instructions: 'Analiza cada consulta con UNION y UNION ALL y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- Tabla clientes: nombre -> Ana, Luis\n-- Tabla proveedores: nombre -> Luis, Marta\n\nSELECT nombre FROM clientes\nUNION\nSELECT nombre FROM proveedores;', prompt: 'Luis aparece en ambas tablas. ¿Cuántas veces aparece "Luis" en el resultado de esta consulta?', options: ['1 vez, porque UNION elimina duplicados', '2 veces', '0 veces, se excluye por estar repetido', '3 veces'], answer: '1 vez, porque UNION elimina duplicados' },
        { code: '-- Tabla clientes: nombre -> Ana, Luis\n-- Tabla proveedores: nombre -> Luis, Marta\n\nSELECT nombre FROM clientes\nUNION ALL\nSELECT nombre FROM proveedores;', prompt: '¿Cuántas veces aparece "Luis" si se usa UNION ALL en vez de UNION?', options: ['2 veces, porque UNION ALL conserva los duplicados', '1 vez', '0 veces', '3 veces'], answer: '2 veces, porque UNION ALL conserva los duplicados' },
        { code: 'SELECT nombre, edad FROM clientes\nUNION\nSELECT nombre FROM proveedores;', prompt: '¿Por qué esta consulta da un error?', options: ['Porque ambos SELECT deben devolver el mismo número de columnas', 'Porque UNION no admite la columna edad', 'Porque falta ORDER BY', 'Porque las tablas deben tener el mismo nombre'], answer: 'Porque ambos SELECT deben devolver el mismo número de columnas' },
        { code: 'SELECT nombre FROM clientes\nUNION ALL\nSELECT nombre FROM proveedores;', prompt: '¿Por qué UNION ALL suele ser más rápido que UNION?', options: ['Porque no tiene que comprobar ni eliminar filas duplicadas', 'Porque usa menos tablas', 'Porque no permite WHERE', 'Porque limita automáticamente los resultados a 10 filas'], answer: 'Porque no tiene que comprobar ni eliminar filas duplicadas' }
      ]
    }
  },
  {
    id: 'mysql-28',
    title: 'Modificar tablas con ALTER TABLE',
    subtitle: 'Nivel 28',
    xp: 96,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        '<code>ALTER TABLE</code> modifica la estructura de una tabla ya creada: se puede añadir una columna con <code>ADD COLUMN</code>, eliminarla con <code>DROP COLUMN</code> o cambiar su tipo con <code>MODIFY COLUMN</code>.',
        'A diferencia de INSERT o UPDATE, ALTER TABLE cambia la <strong>estructura</strong> de la tabla, no sus datos concretos; en tablas grandes puede tardar bastante en aplicarse.'
      ],
      code:
        '<span class="tok-kw">ALTER TABLE</span> usuarios <span class="tok-kw">ADD COLUMN</span> telefono <span class="tok-kw">VARCHAR</span>(<span class="tok-num">20</span>);\n' +
        '<span class="tok-comment">-- Añade una columna nueva a la tabla</span>'
    },
    exercise: {
      instructions: 'Completa cada consulta ALTER TABLE con la palabra clave correcta.',
      blanks: [
        { id: 'b1', before: '', after: ' usuarios ADD COLUMN telefono VARCHAR(20);', answer: 'ALTER TABLE', options: ['ALTER TABLE', 'CHANGE TABLE', 'UPDATE TABLE', 'EDIT TABLE'] },
        { id: 'b2', before: 'ALTER TABLE usuarios ', after: ' COLUMN telefono VARCHAR(20);', answer: 'ADD', options: ['ADD', 'NEW', 'INSERT', 'CREATE'] },
        { id: 'b3', before: 'ALTER TABLE usuarios ', after: ' COLUMN apodo;', answer: 'DROP', options: ['DROP', 'DELETE', 'REMOVE', 'CLEAR'] },
        { id: 'b4', before: 'ALTER TABLE usuarios ', after: ' COLUMN nombre VARCHAR(100);', answer: 'MODIFY', options: ['MODIFY', 'UPDATE', 'CHANGE TYPE', 'SET'] }
      ]
    }
  },
  {
    id: 'mysql-29',
    title: 'DROP TABLE vs TRUNCATE',
    subtitle: 'Nivel 29',
    xp: 98,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>DROP TABLE</code> elimina la tabla por completo: su estructura y todos sus datos desaparecen. <code>TRUNCATE TABLE</code> vacía todos los datos pero conserva la estructura, lista para volver a usarse.',
        'TRUNCATE suele ser más rápido que un <code>DELETE FROM tabla;</code> sin WHERE, y además reinicia el contador de <code>AUTO_INCREMENT</code>, algo que DELETE no hace.'
      ],
      code:
        '<span class="tok-kw">TRUNCATE TABLE</span> logs;\n' +
        '<span class="tok-comment">-- Vacía la tabla logs, pero la tabla sigue existiendo</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre DROP TABLE y TRUNCATE.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué hace DROP TABLE?', options: ['Elimina la tabla por completo, con su estructura y todos sus datos', 'Solo borra los datos, dejando la estructura intacta', 'Bloquea la tabla para que nadie pueda modificarla', 'Crea una copia de seguridad de la tabla'], answer: 'Elimina la tabla por completo, con su estructura y todos sus datos' },
        { prompt: '¿Qué hace TRUNCATE TABLE?', options: ['Vacía todos los datos de la tabla pero conserva su estructura', 'Elimina la tabla completa', 'Borra solo la primera fila', 'Cambia el nombre de la tabla'], answer: 'Vacía todos los datos de la tabla pero conserva su estructura' },
        { prompt: 'Un DELETE FROM tabla; (sin WHERE) también borra todas las filas. ¿En qué se diferencia de TRUNCATE TABLE?', options: ['TRUNCATE suele ser más rápido y reinicia el contador de AUTO_INCREMENT', 'DELETE es más rápido y TRUNCATE más lento', 'Son exactamente lo mismo, sin ninguna diferencia', 'TRUNCATE no borra ninguna fila'], answer: 'TRUNCATE suele ser más rápido y reinicia el contador de AUTO_INCREMENT' },
        { prompt: '¿Cuál de estas operaciones es la más "destructiva", porque elimina también la estructura de la tabla?', options: ['DROP TABLE', 'TRUNCATE TABLE', 'DELETE FROM tabla WHERE id = 1;', 'SELECT * FROM tabla;'], answer: 'DROP TABLE' }
      ]
    }
  },
  {
    id: 'mysql-30',
    title: 'Restricciones: UNIQUE, NOT NULL y DEFAULT',
    subtitle: 'Nivel 30',
    xp: 100,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>UNIQUE</code> impide que dos filas tengan el mismo valor en esa columna. <code>NOT NULL</code> obliga a que la columna tenga siempre un valor. <code>DEFAULT</code> establece un valor automático cuando no se indica ninguno al insertar.',
        'Estas restricciones se definen al crear la tabla, junto al tipo de dato de cada columna, y ayudan a que la base de datos rechace por sí misma datos inválidos o incompletos.'
      ],
      code:
        '<span class="tok-kw">CREATE TABLE</span> usuarios (\n' +
        '  email <span class="tok-kw">VARCHAR</span>(<span class="tok-num">100</span>) <span class="tok-kw">UNIQUE</span> <span class="tok-kw">NOT NULL</span>,\n' +
        '  activo <span class="tok-kw">BOOLEAN</span> <span class="tok-kw">DEFAULT</span> <span class="tok-num">1</span>\n' +
        ');'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre restricciones de columnas.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué garantiza la restricción UNIQUE en una columna?', options: ['Que no puede haber dos filas con el mismo valor en esa columna', 'Que la columna siempre tendrá el mismo valor', 'Que la columna es la clave primaria', 'Que la columna no puede contener números'], answer: 'Que no puede haber dos filas con el mismo valor en esa columna' },
        { prompt: '¿Qué hace la restricción NOT NULL?', options: ['Obliga a que la columna tenga siempre un valor, no puede quedar vacía (NULL)', 'Obliga a que el valor sea siempre 0', 'Permite que el valor esté vacío solo algunas veces', 'Convierte automáticamente los valores en texto'], answer: 'Obliga a que la columna tenga siempre un valor, no puede quedar vacía (NULL)' },
        { prompt: 'En "activo BOOLEAN DEFAULT 1", ¿qué ocurre si al insertar una fila no se especifica un valor para "activo"?', options: ['Se usa automáticamente el valor 1', 'La inserción falla con un error', 'El valor queda en NULL', 'Se usa siempre el valor 0'], answer: 'Se usa automáticamente el valor 1' },
        { prompt: 'Una tabla puede tener varias columnas UNIQUE, pero solo una PRIMARY KEY. ¿En qué otro punto se diferencian?', options: ['Una columna UNIQUE sí puede aceptar NULL (normalmente uno), pero PRIMARY KEY nunca', 'Son exactamente iguales en todo', 'UNIQUE no impide valores repetidos', 'PRIMARY KEY permite valores repetidos'], answer: 'Una columna UNIQUE sí puede aceptar NULL (normalmente uno), pero PRIMARY KEY nunca' }
      ]
    }
  },
  {
    id: 'mysql-31',
    title: 'Auto incremento con AUTO_INCREMENT',
    subtitle: 'Nivel 31',
    xp: 103,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>AUTO_INCREMENT</code> hace que MySQL genere automáticamente un número único y creciente en cada fila nueva, sin que haya que indicarlo en el INSERT. Se usa casi siempre junto a la columna PRIMARY KEY.',
        'Ese contador nunca retrocede: si se borra la última fila, el siguiente valor generado sigue avanzando, no se reutilizan los números eliminados.'
      ],
      code:
        '<span class="tok-kw">CREATE TABLE</span> usuarios (\n' +
        '  id <span class="tok-kw">INT</span> <span class="tok-kw">AUTO_INCREMENT</span> <span class="tok-kw">PRIMARY KEY</span>,\n' +
        '  nombre <span class="tok-kw">VARCHAR</span>(<span class="tok-num">50</span>)\n' +
        ');'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre AUTO_INCREMENT.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué sirve AUTO_INCREMENT?', options: ['Para que MySQL genere automáticamente un número único y creciente en cada fila nueva', 'Para incrementar automáticamente el precio de un producto', 'Para contar cuántas tablas hay en la base de datos', 'Para ordenar los resultados de un SELECT'], answer: 'Para que MySQL genere automáticamente un número único y creciente en cada fila nueva' },
        { prompt: '¿Con qué tipo de columna se usa casi siempre AUTO_INCREMENT?', options: ['Con una columna PRIMARY KEY de tipo entero, como "id"', 'Solo con columnas de tipo texto', 'Con cualquier columna, sin importar el tipo', 'Solo con la última columna de la tabla'], answer: 'Con una columna PRIMARY KEY de tipo entero, como "id"' },
        { prompt: 'Si insertas usuarios con id 1, 2, 3 y luego borras el usuario con id 3, ¿qué id tendrá el siguiente usuario insertado normalmente?', options: ['4, el contador de AUTO_INCREMENT no se reduce al borrar filas', '3, se reutiliza el id borrado', '1, el contador se reinicia', 'Un id aleatorio'], answer: '4, el contador de AUTO_INCREMENT no se reduce al borrar filas' },
        { prompt: '¿Qué requisito tiene una columna con AUTO_INCREMENT en MySQL?', options: ['Debe estar indexada, normalmente como PRIMARY KEY o con una restricción UNIQUE', 'Debe ser de tipo VARCHAR', 'Debe permitir valores NULL', 'Debe tener siempre el valor por defecto 0'], answer: 'Debe estar indexada, normalmente como PRIMARY KEY o con una restricción UNIQUE' }
      ]
    }
  },
  {
    id: 'mysql-32',
    title: 'Funciones de texto: CONCAT, UPPER y LOWER',
    subtitle: 'Nivel 32',
    xp: 106,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>CONCAT()</code> une varios textos en uno solo: <code>CONCAT(nombre, \' \', apellido)</code> junta nombre y apellido separados por un espacio. <code>UPPER()</code> y <code>LOWER()</code> convierten el texto a mayúsculas o minúsculas.',
        'Estas funciones se pueden anidar unas dentro de otras, por ejemplo <code>CONCAT(UPPER(nombre), \' \', apellido)</code> pone el nombre en mayúsculas manteniendo el apellido tal cual.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> <span class="tok-kw">CONCAT</span>(nombre, <span class="tok-string">\' \'</span>, apellido) <span class="tok-kw">AS</span> completo\n' +
        '<span class="tok-kw">FROM</span> usuarios;'
    },
    exercise: {
      instructions: 'Analiza cada consulta con funciones de texto y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: '-- nombre | apellido\n-- Ana | Gómez\n\nSELECT CONCAT(nombre, \' \', apellido) AS completo FROM usuarios;', prompt: '¿Qué devuelve esta consulta?', options: ["'Ana Gómez'", "'AnaGómez'", "'Ana' y 'Gómez' por separado", 'Un error, CONCAT no existe'], answer: "'Ana Gómez'" },
        { code: "SELECT UPPER(nombre) FROM usuarios; -- nombre = 'ana'", prompt: "¿Qué devuelve UPPER('ana')?", options: ["'ANA'", "'ana'", "'Ana'", 'Un error'], answer: "'ANA'" },
        { code: "SELECT LOWER(nombre) FROM usuarios; -- nombre = 'ANA'", prompt: "¿Qué devuelve LOWER('ANA')?", options: ["'ana'", "'ANA'", "'Ana'", "''"], answer: "'ana'" },
        { code: "SELECT CONCAT(UPPER(nombre), ' ', apellido) FROM usuarios;\n-- nombre = 'ana', apellido = 'Gómez'", prompt: '¿Qué resultado produce esta combinación de funciones?', options: ["'ANA Gómez'", "'ana Gómez'", "'ANA GÓMEZ'", 'Un error, no se pueden anidar funciones'], answer: "'ANA Gómez'" }
      ]
    }
  },
  {
    id: 'mysql-33',
    title: 'Funciones de texto: SUBSTRING y LENGTH',
    subtitle: 'Nivel 33',
    xp: 109,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>SUBSTRING(texto, inicio, longitud)</code> extrae una parte de un texto; en MySQL la primera posición es la 1, no la 0. <code>LENGTH(texto)</code> devuelve cuántos caracteres tiene un texto.',
        'Estas funciones se pueden combinar: por ejemplo, calcular la longitud del resultado de un CONCAT para saber cuántos caracteres tiene un texto compuesto.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> <span class="tok-kw">SUBSTRING</span>(<span class="tok-string">\'MySQL\'</span>, <span class="tok-num">1</span>, <span class="tok-num">2</span>);\n' +
        '<span class="tok-comment">-- Devuelve \'My\'</span>'
    },
    exercise: {
      instructions: 'Analiza cada consulta con SUBSTRING y LENGTH y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: "SELECT SUBSTRING('DevQuest', 1, 3);", prompt: '¿Qué devuelve esta consulta? (SUBSTRING empieza a contar desde 1)', options: ["'Dev'", "'evQ'", "'Que'", "'DevQuest'"], answer: "'Dev'" },
        { code: "SELECT SUBSTRING('DevQuest', 4, 5);", prompt: '¿Qué devuelve esta consulta?', options: ["'Quest'", "'Dev'", "'uest'", "'Ques'"], answer: "'Quest'" },
        { code: "SELECT LENGTH('MySQL');", prompt: '¿Qué devuelve esta consulta?', options: ['5', '4', '6', '1'], answer: '5' },
        { code: "SELECT LENGTH(CONCAT('Dev', 'Quest'));", prompt: '¿Qué devuelve esta consulta?', options: ['8', '3', '5', '7'], answer: '8' }
      ]
    }
  },
  {
    id: 'mysql-34',
    title: 'Funciones de fecha: NOW, DATE y DATEDIFF',
    subtitle: 'Nivel 34',
    xp: 112,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>NOW()</code> devuelve la fecha y hora actuales del servidor. <code>DATE(valor)</code> extrae solo la parte de fecha (año-mes-día), descartando la hora. <code>DATEDIFF(fecha1, fecha2)</code> calcula los días entre dos fechas.',
        'DATEDIFF resta fecha2 a fecha1: si fecha1 es anterior a fecha2, el resultado es un número negativo, algo fácil de olvidar al leer una consulta.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> <span class="tok-kw">DATEDIFF</span>(<span class="tok-string">\'2026-08-20\'</span>, <span class="tok-string">\'2026-08-12\'</span>);\n' +
        '<span class="tok-comment">-- Devuelve 8 (días de diferencia)</span>'
    },
    exercise: {
      instructions: 'Analiza cada consulta con funciones de fecha y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: "SELECT DATEDIFF('2026-01-10', '2026-01-01');", prompt: '¿Qué devuelve esta consulta?', options: ['9', '10', '1', '0'], answer: '9' },
        { code: 'SELECT DATE(NOW());', prompt: '¿Qué hace la función DATE() aplicada a NOW()?', options: ['Extrae solo la parte de fecha (año-mes-día), descartando la hora', 'Devuelve solo la hora actual', 'Suma un día a la fecha actual', 'Convierte la fecha en texto sin formato'], answer: 'Extrae solo la parte de fecha (año-mes-día), descartando la hora' },
        { code: "SELECT DATEDIFF('2026-08-01', '2026-08-15');", prompt: '¿Qué devuelve esta consulta? (fíjate en el orden de las fechas)', options: ['-14', '14', '0', '1'], answer: '-14' },
        { code: 'SELECT NOW();', prompt: '¿Qué devuelve la función NOW() en MySQL?', options: ['La fecha y hora actuales del servidor', 'Solo el año actual', 'El número de filas de la tabla', 'Un valor NULL'], answer: 'La fecha y hora actuales del servidor' }
      ]
    }
  },
  {
    id: 'mysql-35',
    title: 'Índices y por qué mejoran el rendimiento',
    subtitle: 'Nivel 35',
    xp: 115,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un <strong>índice</strong> es una estructura auxiliar que permite a MySQL encontrar filas rápidamente sin recorrer toda la tabla, de forma parecida al índice alfabético de un libro para no leerlo entero.',
        'Los índices aceleran las lecturas (SELECT con WHERE, JOIN u ORDER BY sobre esa columna), pero tienen un coste: cada INSERT, UPDATE o DELETE debe actualizar también el índice, así que no conviene indexar cualquier columna sin razón.'
      ],
      code:
        '<span class="tok-kw">CREATE INDEX</span> idx_email <span class="tok-kw">ON</span> usuarios(email);\n' +
        '<span class="tok-comment">-- Acelera las búsquedas por email</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre índices y rendimiento.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué es un índice en una base de datos?', options: ['Una estructura auxiliar que permite encontrar filas más rápido, sin recorrer toda la tabla', 'Una copia completa de la tabla', 'Una restricción que impide insertar datos', 'Un tipo de JOIN'], answer: 'Una estructura auxiliar que permite encontrar filas más rápido, sin recorrer toda la tabla' },
        { prompt: 'Los índices aceleran las lecturas, pero...', options: ['Ralentizan un poco las escrituras (INSERT/UPDATE/DELETE), porque el índice también hay que actualizarlo', 'No tienen ningún coste, son beneficio puro', 'Hacen que las consultas SELECT sean más lentas', 'Solo funcionan en la columna PRIMARY KEY'], answer: 'Ralentizan un poco las escrituras (INSERT/UPDATE/DELETE), porque el índice también hay que actualizarlo' },
        { prompt: '¿En qué tipo de columna suele tener más sentido crear un índice?', options: ['En columnas que se usan frecuentemente en WHERE, JOIN u ORDER BY', 'En columnas que nunca se consultan', 'En columnas de tipo TEXT muy largas sin uso en filtros', 'En todas las columnas, sin excepción, siempre mejora el rendimiento'], answer: 'En columnas que se usan frecuentemente en WHERE, JOIN u ORDER BY' },
        { prompt: '¿La columna PRIMARY KEY de una tabla ya tiene un índice automáticamente?', options: ['Sí, MySQL crea un índice automáticamente sobre la PRIMARY KEY', 'No, hay que crearlo siempre a mano', 'Solo si la tabla usa el motor MyISAM', 'Solo si se usa AUTO_INCREMENT'], answer: 'Sí, MySQL crea un índice automáticamente sobre la PRIMARY KEY' }
      ]
    }
  },
  {
    id: 'mysql-36',
    title: 'Normalización de bases de datos (1FN, 2FN, 3FN)',
    subtitle: 'Nivel 36',
    xp: 118,
    type: 'quiz',
    theory: {
      paragraphs: [
        'La <strong>normalización</strong> es un proceso para organizar las tablas de una base de datos y reducir la redundancia de datos, evitando que la misma información se repita en varios sitios y se vuelva inconsistente.',
        'Se aplica en niveles progresivos llamados <strong>formas normales</strong> (1FN, 2FN, 3FN...), cada una más estricta que la anterior sobre cómo deben depender los datos de la clave primaria.'
      ],
      code:
        '<span class="tok-comment">-- Antes (sin normalizar): repite la ciudad en cada fila</span>\n' +
        '<span class="tok-comment">-- id | nombre | ciudad   | codigo_postal</span>\n' +
        '<span class="tok-comment">-- 1  | Ana    | Madrid   | 28001</span>\n' +
        '<span class="tok-comment">-- 2  | Luis   | Madrid   | 28001</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre normalización.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué exige la Primera Forma Normal (1FN)?', options: ['Que cada columna tenga valores atómicos (indivisibles), sin listas ni grupos repetidos', 'Que la tabla no tenga clave primaria', 'Que todas las columnas sean de tipo texto', 'Que haya al menos dos tablas relacionadas'], answer: 'Que cada columna tenga valores atómicos (indivisibles), sin listas ni grupos repetidos' },
        { prompt: '¿Qué exige la Segunda Forma Normal (2FN)?', options: ['Que todos los atributos no clave dependan de la clave primaria completa, no solo de una parte', 'Que la tabla tenga como máximo dos columnas', 'Que no existan claves foráneas', 'Que los datos estén ordenados alfabéticamente'], answer: 'Que todos los atributos no clave dependan de la clave primaria completa, no solo de una parte' },
        { prompt: '¿Qué exige la Tercera Forma Normal (3FN)?', options: ['Que no existan dependencias transitivas: los atributos no clave no dependen de otros atributos no clave', 'Que la tabla tenga exactamente tres columnas', 'Que se eliminen todas las claves foráneas', 'Que los datos se guarden en tres tablas exactamente'], answer: 'Que no existan dependencias transitivas: los atributos no clave no dependen de otros atributos no clave' },
        { prompt: '¿Cuál es el principal objetivo de normalizar una base de datos?', options: ['Reducir la redundancia de datos y evitar inconsistencias al actualizarlos', 'Hacer que las consultas SELECT sean siempre más rápidas', 'Reducir el número de tablas al mínimo posible', 'Eliminar la necesidad de usar JOIN'], answer: 'Reducir la redundancia de datos y evitar inconsistencias al actualizarlos' }
      ]
    }
  },
  {
    id: 'mysql-37',
    title: 'Transacciones: COMMIT y ROLLBACK',
    subtitle: 'Nivel 37',
    xp: 121,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una <strong>transacción</strong> agrupa varias operaciones para que se ejecuten como una sola unidad: o se aplican todas, o no se aplica ninguna. Se inicia con <code>START TRANSACTION</code>.',
        '<code>COMMIT</code> confirma y guarda de forma permanente todos los cambios de la transacción. <code>ROLLBACK</code> deshace todos los cambios realizados desde que empezó, como si nunca hubieran ocurrido.'
      ],
      code:
        '<span class="tok-kw">START TRANSACTION</span>;\n' +
        '<span class="tok-kw">UPDATE</span> cuentas <span class="tok-kw">SET</span> saldo = saldo - <span class="tok-num">100</span> <span class="tok-kw">WHERE</span> id = <span class="tok-num">1</span>;\n' +
        '<span class="tok-kw">UPDATE</span> cuentas <span class="tok-kw">SET</span> saldo = saldo + <span class="tok-num">100</span> <span class="tok-kw">WHERE</span> id = <span class="tok-num">2</span>;\n' +
        '<span class="tok-kw">COMMIT</span>;'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre transacciones.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué es una transacción en una base de datos?', options: ['Un conjunto de operaciones que se ejecutan como una sola unidad: o se aplican todas, o ninguna', 'Una consulta SELECT cualquiera', 'Una copia de seguridad automática', 'Un tipo de índice'], answer: 'Un conjunto de operaciones que se ejecutan como una sola unidad: o se aplican todas, o ninguna' },
        { prompt: '¿Qué hace COMMIT?', options: ['Confirma y guarda de forma permanente todos los cambios de la transacción', 'Deshace todos los cambios de la transacción', 'Bloquea la tabla para siempre', 'Crea una tabla nueva'], answer: 'Confirma y guarda de forma permanente todos los cambios de la transacción' },
        { prompt: '¿Qué hace ROLLBACK?', options: ['Deshace todos los cambios realizados desde el inicio de la transacción', 'Guarda los cambios de forma permanente', 'Elimina la tabla completa', 'Acelera la consulta actual'], answer: 'Deshace todos los cambios realizados desde el inicio de la transacción' },
        { prompt: 'En una transferencia bancaria (restar dinero de una cuenta y sumarlo a otra), ¿por qué conviene usar una transacción?', options: ['Para asegurar que ambas operaciones se completen juntas; si una falla, se deshacen ambas con ROLLBACK', 'Para que la operación tarde más tiempo', 'Para que no se pueda usar SELECT durante la transferencia', 'Para crear automáticamente una copia de la tabla'], answer: 'Para asegurar que ambas operaciones se completen juntas; si una falla, se deshacen ambas con ROLLBACK' }
      ]
    }
  },
  {
    id: 'mysql-38',
    title: 'Vistas con CREATE VIEW',
    subtitle: 'Nivel 38',
    xp: 124,
    type: 'fill-tags',
    theory: {
      paragraphs: [
        'Una <strong>vista</strong> (VIEW) es una consulta SELECT guardada con un nombre, que se puede consultar como si fuera una tabla normal: <code>CREATE VIEW nombre AS SELECT ...</code>.',
        'La vista no guarda una copia de los datos; cada vez que se consulta, ejecuta de nuevo el SELECT original. Es útil para simplificar consultas complejas que se repiten mucho.'
      ],
      code:
        '<span class="tok-kw">CREATE VIEW</span> usuarios_activos <span class="tok-kw">AS</span>\n' +
        '<span class="tok-kw">SELECT</span> * <span class="tok-kw">FROM</span> usuarios <span class="tok-kw">WHERE</span> activo = <span class="tok-num">1</span>;\n' +
        '<span class="tok-comment">-- Ahora se puede usar: SELECT * FROM usuarios_activos;</span>'
    },
    exercise: {
      instructions: 'Completa cada consulta relacionada con vistas.',
      blanks: [
        { id: 'b1', before: '', after: ' usuarios_activos AS SELECT * FROM usuarios WHERE activo = 1;', answer: 'CREATE VIEW', options: ['CREATE VIEW', 'CREATE TABLE', 'NEW VIEW', 'MAKE VIEW'] },
        { id: 'b2', before: 'CREATE VIEW usuarios_activos ', after: ' SELECT * FROM usuarios WHERE activo = 1;', answer: 'AS', options: ['AS', 'FROM', 'LIKE', 'WITH'] },
        { id: 'b3', before: 'SELECT * FROM ', after: ';', answer: 'usuarios_activos', options: ['usuarios_activos', 'usuarios', 'activos', 'vista_usuarios'] },
        { id: 'b4', before: '', after: ' usuarios_activos;', answer: 'DROP VIEW', options: ['DROP VIEW', 'DELETE VIEW', 'REMOVE VIEW', 'CLEAR VIEW'] }
      ]
    }
  },
  {
    id: 'mysql-39',
    title: 'Procedimientos almacenados (Stored Procedures)',
    subtitle: 'Nivel 39',
    xp: 127,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un <strong>procedimiento almacenado</strong> es un bloque de código SQL guardado dentro de la base de datos, con un nombre, que se puede ejecutar repetidamente con <code>CALL nombre_procedimiento();</code>.',
        'Permiten reutilizar lógica compleja (varias sentencias, condicionales, bucles) sin repetir el mismo SQL en cada aplicación que se conecta a la base de datos, y pueden recibir parámetros de entrada.'
      ],
      code:
        '<span class="tok-kw">CALL</span> obtener_pedidos_cliente(<span class="tok-num">5</span>);\n' +
        '<span class="tok-comment">-- Ejecuta el procedimiento con el parámetro 5</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre procedimientos almacenados.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué es un procedimiento almacenado (stored procedure)?', options: ['Un bloque de código SQL guardado en la base de datos que se puede ejecutar repetidamente con CALL', 'Una tabla especial de solo lectura', 'Un tipo de índice avanzado', 'Una copia de seguridad automática de la base de datos'], answer: 'Un bloque de código SQL guardado en la base de datos que se puede ejecutar repetidamente con CALL' },
        { prompt: '¿Cuál es la principal ventaja de usar procedimientos almacenados?', options: ['Reutilizar lógica compleja sin repetir el mismo SQL en cada aplicación que se conecta a la base de datos', 'Hacer que las tablas ocupen menos espacio en disco', 'Eliminar la necesidad de usar SELECT', 'Crear automáticamente copias de seguridad'], answer: 'Reutilizar lógica compleja sin repetir el mismo SQL en cada aplicación que se conecta a la base de datos' },
        { prompt: '¿Cómo se ejecuta un procedimiento almacenado ya creado?', options: ['Con la instrucción CALL, seguida del nombre del procedimiento', 'Con un SELECT normal', 'Escribiendo su nombre directamente en la URL', 'No se pueden ejecutar manualmente'], answer: 'Con la instrucción CALL, seguida del nombre del procedimiento' },
        { prompt: '¿Pueden los procedimientos almacenados recibir parámetros de entrada?', options: ['Sí, se pueden definir parámetros que se usan dentro del procedimiento', 'No, siempre trabajan con datos fijos', 'Solo pueden recibir un parámetro como máximo', 'Solo funcionan sin ningún parámetro'], answer: 'Sí, se pueden definir parámetros que se usan dentro del procedimiento' }
      ]
    }
  },
  {
    id: 'mysql-40',
    title: 'Funciones definidas por el usuario',
    subtitle: 'Nivel 40',
    xp: 130,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Además de las funciones integradas (CONCAT, AVG, NOW...), MySQL permite crear <strong>funciones propias</strong> con <code>CREATE FUNCTION</code>, que siempre devuelven un valor y declaran su tipo con <code>RETURNS</code>.',
        'A diferencia de un procedimiento almacenado (que se ejecuta con CALL), una función se puede usar directamente dentro de una consulta, igual que cualquier otra función de MySQL: <code>SELECT calcular_iva(precio) FROM productos;</code>.'
      ],
      code:
        '<span class="tok-kw">CREATE FUNCTION</span> calcular_iva(precio <span class="tok-kw">DECIMAL</span>(<span class="tok-num">10</span>,<span class="tok-num">2</span>))\n' +
        '<span class="tok-kw">RETURNS</span> <span class="tok-kw">DECIMAL</span>(<span class="tok-num">10</span>,<span class="tok-num">2</span>)\n' +
        '<span class="tok-kw">RETURN</span> precio * <span class="tok-num">1.21</span>;'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre funciones definidas por el usuario.',
      variant: 'plain',
      questions: [
        { prompt: '¿En qué se diferencia una función definida por el usuario de un procedimiento almacenado?', options: ['La función siempre devuelve un valor y puede usarse dentro de un SELECT; el procedimiento no funciona así', 'Son exactamente lo mismo, solo cambia el nombre', 'La función no puede recibir parámetros', 'El procedimiento siempre devuelve un valor y la función no'], answer: 'La función siempre devuelve un valor y puede usarse dentro de un SELECT; el procedimiento no funciona así' },
        { prompt: 'Si defines una función llamada calcular_iva(precio), ¿cómo podrías usarla dentro de una consulta?', options: ['SELECT calcular_iva(precio) FROM productos;', 'CALL calcular_iva(precio);', 'No se puede usar dentro de un SELECT', 'UPDATE calcular_iva(precio);'], answer: 'SELECT calcular_iva(precio) FROM productos;' },
        { prompt: '¿Para qué sirve crear funciones propias?', options: ['Para reutilizar un cálculo o lógica que se repite en muchas consultas, con un nombre claro', 'Para reemplazar por completo el uso de SELECT', 'Para crear nuevas tablas automáticamente', 'Para borrar datos de forma más rápida'], answer: 'Para reutilizar un cálculo o lógica que se repite en muchas consultas, con un nombre claro' },
        { prompt: '¿Qué debe declararse obligatoriamente al crear una función en MySQL, además de su lógica?', options: ['El tipo de dato que devuelve (RETURNS)', 'El número de tablas que usará', 'El nombre del usuario que la ejecuta', 'La cantidad de filas que afectará'], answer: 'El tipo de dato que devuelve (RETURNS)' }
      ]
    }
  },
  {
    id: 'mysql-41',
    title: 'Triggers (disparadores)',
    subtitle: 'Nivel 41',
    xp: 134,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Un <strong>trigger</strong> (disparador) es un bloque de código que se ejecuta automáticamente cuando ocurre un evento sobre una tabla: <code>INSERT</code>, <code>UPDATE</code> o <code>DELETE</code>. Nunca se llama manualmente.',
        'Puede definirse como <code>BEFORE</code> (antes de guardar el cambio, pudiendo incluso modificar los valores) o <code>AFTER</code> (después, cuando la fila ya existe con su cambio aplicado).'
      ],
      code:
        '<span class="tok-kw">CREATE TRIGGER</span> antes_borrar\n' +
        '<span class="tok-kw">BEFORE DELETE ON</span> usuarios\n' +
        '<span class="tok-kw">FOR EACH ROW</span>\n' +
        '<span class="tok-kw">INSERT INTO</span> auditoria (accion) <span class="tok-kw">VALUES</span> (<span class="tok-string">\'usuario eliminado\'</span>);'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre triggers.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué es un trigger (disparador) en MySQL?', options: ['Un bloque de código que se ejecuta automáticamente cuando ocurre un evento como INSERT, UPDATE o DELETE en una tabla', 'Una función que hay que llamar manualmente con CALL', 'Un tipo de índice especial', 'Una copia de seguridad programada'], answer: 'Un bloque de código que se ejecuta automáticamente cuando ocurre un evento como INSERT, UPDATE o DELETE en una tabla' },
        { prompt: '¿Qué diferencia hay entre un trigger BEFORE INSERT y uno AFTER INSERT?', options: ['BEFORE se ejecuta antes de guardar la fila (puede modificar los valores); AFTER se ejecuta después, cuando la fila ya existe', 'No hay ninguna diferencia real', 'AFTER se ejecuta antes que BEFORE', 'BEFORE solo funciona con DELETE'], answer: 'BEFORE se ejecuta antes de guardar la fila (puede modificar los valores); AFTER se ejecuta después, cuando la fila ya existe' },
        { prompt: '¿Para cuál de estas tareas sería útil un trigger?', options: ['Registrar automáticamente en una tabla de auditoría cada vez que se borra una fila', 'Ejecutar un SELECT manualmente cuando el usuario lo pide', 'Crear una tabla nueva cada mes', 'Cambiar el nombre de la base de datos'], answer: 'Registrar automáticamente en una tabla de auditoría cada vez que se borra una fila' },
        { prompt: '¿Hay que llamar manualmente a un trigger, como se hace con CALL en los procedimientos?', options: ['No, se ejecuta automáticamente cuando ocurre el evento que lo activa', 'Sí, siempre hay que llamarlo con CALL', 'Sí, pero solo una vez al día', 'No, pero hay que ejecutarlo con SELECT'], answer: 'No, se ejecuta automáticamente cuando ocurre el evento que lo activa' }
      ]
    }
  },
  {
    id: 'mysql-42',
    title: 'CASE WHEN en consultas',
    subtitle: 'Nivel 42',
    xp: 138,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>CASE WHEN condición THEN valor ... ELSE valor END</code> funciona como un "si/sino" dentro de una consulta: evalúa las condiciones en orden y devuelve el valor asociado a la primera que se cumpla.',
        'Si ninguna condición se cumple y no hay <code>ELSE</code>, CASE devuelve <code>NULL</code>. Y como se evalúa en orden, el orden de las condiciones importa: una condición más amplia colocada primero puede "tapar" a las siguientes.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> nombre,\n' +
        '  <span class="tok-kw">CASE</span>\n' +
        '    <span class="tok-kw">WHEN</span> edad &gt;= <span class="tok-num">18</span> <span class="tok-kw">THEN</span> <span class="tok-string">\'Adulto\'</span>\n' +
        '    <span class="tok-kw">ELSE</span> <span class="tok-string">\'Menor\'</span>\n' +
        '  <span class="tok-kw">END</span> <span class="tok-kw">AS</span> categoria\n' +
        '<span class="tok-kw">FROM</span> usuarios;'
    },
    exercise: {
      instructions: 'Analiza cada consulta con CASE WHEN y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: "-- nombre | edad\n-- Ana | 20\n-- Luis | 15\n\nSELECT nombre,\n  CASE\n    WHEN edad &gt;= 18 THEN 'Adulto'\n    ELSE 'Menor'\n  END AS categoria\nFROM usuarios;", prompt: '¿Qué categoría le corresponde a Luis (15 años)?', options: ["'Menor'", "'Adulto'", 'NULL', 'Un error de sintaxis'], answer: "'Menor'" },
        { code: "-- nombre | nota\n-- Ana | 9\n-- Luis | 5\n-- Marta | 7\n\nSELECT nombre,\n  CASE\n    WHEN nota &gt;= 9 THEN 'Sobresaliente'\n    WHEN nota &gt;= 6 THEN 'Aprobado'\n    ELSE 'Suspenso'\n  END AS resultado\nFROM examenes;", prompt: '¿Qué resultado le corresponde a Marta (nota 7)?', options: ["'Aprobado'", "'Sobresaliente'", "'Suspenso'", 'NULL'], answer: "'Aprobado'" },
        { code: "SELECT nombre,\n  CASE\n    WHEN edad &gt;= 18 THEN 'Adulto'\n  END AS categoria\nFROM usuarios;\n-- (sin cláusula ELSE)", prompt: 'Si ninguna condición WHEN se cumple y no hay ELSE, ¿qué valor devuelve CASE?', options: ['NULL', 'Un error de sintaxis obligatorio', '0', 'Cadena vacía'], answer: 'NULL' },
        { code: "SELECT nombre,\n  CASE\n    WHEN nota &gt;= 5 THEN 'Aprobado'\n    WHEN nota &gt;= 9 THEN 'Sobresaliente'\n    ELSE 'Suspenso'\n  END AS resultado\nFROM examenes;\n-- nota = 9", prompt: "Con nota = 9, esta consulta devuelve 'Aprobado' y no 'Sobresaliente'. ¿Por qué?", options: ['Porque CASE evalúa las condiciones en orden y se queda con la primera que se cumple', 'Porque hay un error de sintaxis', 'Porque WHEN solo puede usarse una vez', 'Porque ELSE tiene prioridad sobre WHEN'], answer: 'Porque CASE evalúa las condiciones en orden y se queda con la primera que se cumple' }
      ]
    }
  },
  {
    id: 'mysql-43',
    title: 'Subconsultas correlacionadas',
    subtitle: 'Nivel 43',
    xp: 142,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Una <strong>subconsulta correlacionada</strong> hace referencia a una columna de la consulta externa, así que, conceptualmente, se reevalúa para cada fila que procesa esa consulta externa (a diferencia de una subconsulta independiente, que se resuelve una sola vez).',
        'Son útiles para comparar cada fila con un grupo relacionado con ella misma, como "empleados que ganan más que el promedio de su propio departamento".'
      ],
      code:
        '<span class="tok-kw">SELECT</span> nombre <span class="tok-kw">FROM</span> empleados e\n' +
        '<span class="tok-kw">WHERE</span> salario &gt; (\n' +
        '  <span class="tok-kw">SELECT</span> <span class="tok-kw">AVG</span>(salario) <span class="tok-kw">FROM</span> empleados\n' +
        '  <span class="tok-kw">WHERE</span> departamento_id = e.departamento_id\n' +
        ');'
    },
    exercise: {
      instructions: 'Analiza cada consulta con subconsultas correlacionadas y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: "SELECT nombre FROM empleados e\nWHERE salario &gt; (\n  SELECT AVG(salario) FROM empleados\n  WHERE departamento_id = e.departamento_id\n);", prompt: "¿Qué hace que esta subconsulta sea 'correlacionada'?", options: ['Que hace referencia a una columna de la consulta externa (e.departamento_id)', 'Que usa la función AVG()', 'Que no tiene cláusula WHERE propia', 'Que devuelve más de una columna'], answer: 'Que hace referencia a una columna de la consulta externa (e.departamento_id)' },
        { code: "SELECT nombre FROM empleados e\nWHERE salario &gt; (\n  SELECT AVG(salario) FROM empleados\n  WHERE departamento_id = e.departamento_id\n);", prompt: 'A diferencia de una subconsulta independiente (que se resuelve una sola vez), ¿cuántas veces se evalúa conceptualmente una subconsulta correlacionada?', options: ['Una vez por cada fila que procesa la consulta externa', 'Exactamente una vez, igual que cualquier otra subconsulta', 'Nunca, MySQL las ignora', 'Solo si se usa DISTINCT'], answer: 'Una vez por cada fila que procesa la consulta externa' },
        { code: "SELECT nombre FROM empleados e\nWHERE salario &gt; (\n  SELECT AVG(salario) FROM empleados\n  WHERE departamento_id = e.departamento_id\n);", prompt: '¿Qué obtiene esta consulta?', options: ['Los empleados que ganan más que el salario promedio de su propio departamento', 'Los empleados que ganan más que el salario promedio de toda la empresa', 'Todos los empleados ordenados por salario', 'Solo el empleado con el salario más alto'], answer: 'Los empleados que ganan más que el salario promedio de su propio departamento' },
        { code: "SELECT nombre FROM empleados e\nWHERE salario &gt; (SELECT AVG(salario) FROM empleados WHERE departamento_id = e.departamento_id);", prompt: '¿Por qué las subconsultas correlacionadas pueden ser más lentas que un JOIN equivalente en tablas grandes?', options: ['Porque, conceptualmente, se reevalúan para cada fila de la consulta externa en lugar de calcularse una sola vez', 'Porque siempre generan un error si la tabla tiene más de 100 filas', 'Porque no pueden usar índices bajo ninguna circunstancia', 'Porque MySQL no permite subconsultas correlacionadas'], answer: 'Porque, conceptualmente, se reevalúan para cada fila de la consulta externa en lugar de calcularse una sola vez' }
      ]
    }
  },
  {
    id: 'mysql-44',
    title: 'La cláusula EXISTS',
    subtitle: 'Nivel 44',
    xp: 146,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>EXISTS</code> evalúa si una subconsulta devuelve al menos una fila (verdadero) o ninguna (falso); no le importa qué columnas ni qué valores devuelve, solo si hay resultado o no. Por eso es habitual escribir <code>SELECT 1</code> dentro.',
        'Se usa mucho junto a una subconsulta correlacionada para comprobar existencia de forma eficiente, ya que MySQL puede detenerse en cuanto encuentra la primera fila que cumple la condición.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> nombre <span class="tok-kw">FROM</span> clientes c\n' +
        '<span class="tok-kw">WHERE EXISTS</span> (\n' +
        '  <span class="tok-kw">SELECT</span> <span class="tok-num">1</span> <span class="tok-kw">FROM</span> pedidos p <span class="tok-kw">WHERE</span> p.cliente_id = c.id\n' +
        ');'
    },
    exercise: {
      instructions: 'Analiza cada consulta con EXISTS y decide qué resultado devuelve.',
      variant: 'code',
      questions: [
        { code: "-- Tabla clientes: id | nombre -> (1,Ana) (2,Luis)\n-- Tabla pedidos: id | cliente_id -> (1,1)\n\nSELECT nombre FROM clientes c\nWHERE EXISTS (\n  SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id\n);", prompt: '¿Qué nombres devuelve esta consulta?', options: ['Solo Ana, porque es la única con al menos un pedido', 'Solo Luis', 'Ana y Luis', 'Ninguno'], answer: 'Solo Ana, porque es la única con al menos un pedido' },
        { code: "SELECT nombre FROM clientes c\nWHERE EXISTS (\n  SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id\n);", prompt: '¿Qué evalúa EXISTS respecto a la subconsulta que contiene?', options: ['Si la subconsulta devuelve al menos una fila (verdadero) o ninguna (falso)', 'El valor exacto que devuelve la subconsulta', 'Cuántas filas exactamente devuelve la subconsulta', 'Si la subconsulta contiene errores de sintaxis'], answer: 'Si la subconsulta devuelve al menos una fila (verdadero) o ninguna (falso)' },
        { code: "-- Tabla clientes: id | nombre -> (1,Ana) (2,Luis)\n-- Tabla pedidos: id | cliente_id -> (1,1)\n\nSELECT nombre FROM clientes c\nWHERE NOT EXISTS (\n  SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id\n);", prompt: '¿Qué devuelve NOT EXISTS con esta misma tabla de clientes y pedidos?', options: ['Solo Luis, que no tiene ningún pedido', 'Solo Ana', 'Ana y Luis', 'Ninguno'], answer: 'Solo Luis, que no tiene ningún pedido' },
        { code: "SELECT nombre FROM clientes c\nWHERE EXISTS (\n  SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id\n);", prompt: "En 'SELECT 1 FROM pedidos p WHERE...', ¿por qué se usa 1 en lugar de una columna concreta?", options: ['Porque a EXISTS no le importa qué columnas devuelve la subconsulta, solo si hay filas o no', 'Porque 1 es la única columna permitida en MySQL', 'Porque hace que la consulta devuelva exactamente una fila', 'Porque es obligatorio por sintaxis usar un número'], answer: 'Porque a EXISTS no le importa qué columnas devuelve la subconsulta, solo si hay filas o no' }
      ]
    }
  },
  {
    id: 'mysql-45',
    title: 'Orden lógico de ejecución de una consulta',
    subtitle: 'Nivel 45',
    xp: 150,
    type: 'order-builder',
    theory: {
      paragraphs: [
        'Aunque una consulta se <strong>escribe</strong> como SELECT...FROM...WHERE..., MySQL no la <strong>ejecuta</strong> en ese orden. El motor primero decide de dónde vienen los datos (FROM), y solo casi al final calcula qué columnas mostrar (SELECT).',
        'Por eso no puedes usar en el WHERE un alias definido en el SELECT: cuando se evalúa WHERE, ese alias todavía no existe. El orden lógico real es FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.'
      ],
      code:
        '<span class="tok-comment">-- Orden en que se ESCRIBE:</span>\n' +
        '<span class="tok-kw">SELECT</span> ... <span class="tok-kw">FROM</span> ... <span class="tok-kw">WHERE</span> ... <span class="tok-kw">GROUP BY</span> ... <span class="tok-kw">HAVING</span> ... <span class="tok-kw">ORDER BY</span> ...\n\n' +
        '<span class="tok-comment">-- Orden en que se EJECUTA:</span>\n' +
        '<span class="tok-kw">FROM</span> → <span class="tok-kw">WHERE</span> → <span class="tok-kw">GROUP BY</span> → <span class="tok-kw">HAVING</span> → <span class="tok-kw">SELECT</span> → <span class="tok-kw">ORDER BY</span>'
    },
    exercise: {
      instructions: 'Ordena las piezas según el orden LÓGICO real en que MySQL procesa una consulta (no el orden en que se escribe).',
      items: [
        { id: 'l1', code: '1. FROM — elige las tablas de origen' },
        { id: 'l2', code: '2. WHERE — filtra filas individuales' },
        { id: 'l3', code: '3. GROUP BY — agrupa las filas filtradas' },
        { id: 'l4', code: '4. HAVING — filtra los grupos ya formados' },
        { id: 'l5', code: '5. SELECT — elige qué columnas mostrar' },
        { id: 'l6', code: '6. ORDER BY / LIMIT — ordena y recorta el resultado final' }
      ],
      correctOrder: ['l1', 'l2', 'l3', 'l4', 'l5', 'l6']
    }
  },
  {
    id: 'mysql-46',
    title: 'Optimizar consultas con EXPLAIN',
    subtitle: 'Nivel 46',
    xp: 154,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Escribiendo <code>EXPLAIN</code> justo antes de una consulta, MySQL muestra cómo planea ejecutarla: si va a usar algún índice, cuántas filas espera examinar, en qué orden combina las tablas de un JOIN, etc.',
        'EXPLAIN no ejecuta realmente la consulta ni modifica datos, solo muestra el plan. Es la primera herramienta a la que recurrir cuando una consulta va lenta y quieres decidir si hace falta añadir un índice.'
      ],
      code:
        '<span class="tok-kw">EXPLAIN</span> <span class="tok-kw">SELECT</span> * <span class="tok-kw">FROM</span> pedidos <span class="tok-kw">WHERE</span> cliente_id = <span class="tok-num">5</span>;\n' +
        '<span class="tok-comment">-- Muestra el plan de ejecución, no los resultados</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre EXPLAIN.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué sirve la instrucción EXPLAIN antes de una consulta?', options: ['Para ver cómo MySQL planea ejecutar la consulta (por ejemplo, si usa un índice o recorre toda la tabla)', 'Para ejecutar la consulta dos veces y comparar resultados', 'Para traducir la consulta a otro lenguaje', 'Para borrar automáticamente los datos duplicados'], answer: 'Para ver cómo MySQL planea ejecutar la consulta (por ejemplo, si usa un índice o recorre toda la tabla)' },
        { prompt: 'Si EXPLAIN indica que una consulta hace un recorrido completo de la tabla ("full table scan"), ¿qué suele significar?', options: ['Que la consulta no está usando ningún índice y revisa fila por fila, lo cual puede ser lento en tablas grandes', 'Que la consulta es la más rápida posible', 'Que la tabla está vacía', 'Que la consulta tiene un error de sintaxis'], answer: 'Que la consulta no está usando ningún índice y revisa fila por fila, lo cual puede ser lento en tablas grandes' },
        { prompt: '¿EXPLAIN modifica o devuelve los datos reales de la tabla?', options: ['No, solo muestra el plan de ejecución; no modifica ni devuelve los datos reales', 'Sí, borra la tabla temporalmente', 'Sí, actualiza automáticamente los índices', 'No, pero bloquea la tabla mientras se usa'], answer: 'No, solo muestra el plan de ejecución; no modifica ni devuelve los datos reales' },
        { prompt: '¿En qué situación resulta más útil usar EXPLAIN?', options: ['Cuando una consulta va lenta y quieres entender por qué, para decidir si añadir un índice', 'Cuando quieres insertar datos nuevos', 'Cuando quieres cambiar el tipo de una columna', 'Cuando quieres hacer una copia de seguridad'], answer: 'Cuando una consulta va lenta y quieres entender por qué, para decidir si añadir un índice' }
      ]
    }
  },
  {
    id: 'mysql-47',
    title: 'Motores de almacenamiento: InnoDB vs MyISAM',
    subtitle: 'Nivel 47',
    xp: 158,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<strong>InnoDB</strong> es el motor de almacenamiento por defecto en las versiones modernas de MySQL: admite transacciones (COMMIT/ROLLBACK), claves foráneas, y usa bloqueo a nivel de fila para permitir más concurrencia.',
        '<strong>MyISAM</strong> es un motor más antiguo que no admite transacciones ni claves foráneas. Hoy en día se recomienda casi siempre InnoDB, precisamente por la integridad referencial y la seguridad que aportan las transacciones.'
      ],
      code:
        '<span class="tok-kw">CREATE TABLE</span> pedidos (\n' +
        '  id <span class="tok-kw">INT</span> <span class="tok-kw">PRIMARY KEY</span>\n' +
        ') <span class="tok-kw">ENGINE</span> = <span class="tok-kw">InnoDB</span>;'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre motores de almacenamiento.',
      variant: 'plain',
      questions: [
        { prompt: '¿Qué motor de almacenamiento admite transacciones (COMMIT/ROLLBACK) y claves foráneas?', options: ['InnoDB', 'MyISAM', 'Ambos por igual', 'Ninguno de los dos'], answer: 'InnoDB' },
        { prompt: '¿Cuál es el motor por defecto en las versiones modernas de MySQL?', options: ['InnoDB es el motor por defecto en las versiones modernas de MySQL', 'MyISAM es el motor por defecto en todas las versiones', 'No existe un motor por defecto, hay que elegirlo siempre', 'MySQL no usa motores de almacenamiento'], answer: 'InnoDB es el motor por defecto en las versiones modernas de MySQL' },
        { prompt: '¿Qué tipo de bloqueo (locking) usa InnoDB, que suele ofrecer mejor concurrencia que MyISAM?', options: ['Bloqueo a nivel de fila (row-level locking)', 'Bloqueo a nivel de toda la base de datos', 'Ningún tipo de bloqueo', 'Bloqueo únicamente al hacer SELECT'], answer: 'Bloqueo a nivel de fila (row-level locking)' },
        { prompt: '¿Por qué en la práctica actual se recomienda casi siempre InnoDB en lugar de MyISAM?', options: ['Porque InnoDB ofrece integridad referencial (claves foráneas) y transacciones, importantes para datos consistentes', 'Porque MyISAM no permite hacer SELECT', 'Porque InnoDB no permite crear índices', 'Porque MyISAM es más rápido en absolutamente todos los casos'], answer: 'Porque InnoDB ofrece integridad referencial (claves foráneas) y transacciones, importantes para datos consistentes' }
      ]
    }
  },
  {
    id: 'mysql-48',
    title: 'Seguridad: usuarios y permisos con GRANT/REVOKE',
    subtitle: 'Nivel 48',
    xp: 162,
    type: 'quiz',
    theory: {
      paragraphs: [
        '<code>GRANT</code> da permisos específicos a un usuario, como poder hacer SELECT o INSERT sobre una tabla o base de datos concreta. <code>REVOKE</code> hace lo contrario: quita permisos que se le habían concedido antes.',
        'Es buena práctica aplicar el "principio de mínimo privilegio": dar a cada usuario solo los permisos que realmente necesita para su trabajo, reduciendo el riesgo si esa cuenta se ve comprometida o comete un error.'
      ],
      code:
        '<span class="tok-kw">GRANT SELECT</span> <span class="tok-kw">ON</span> tienda.productos <span class="tok-kw">TO</span> <span class="tok-string">\'app_lectura\'</span>@<span class="tok-string">\'%\'</span>;\n' +
        '<span class="tok-comment">-- Solo permite leer, no modificar</span>'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre permisos y seguridad en MySQL.',
      variant: 'plain',
      questions: [
        { prompt: '¿Para qué sirve la instrucción GRANT en MySQL?', options: ['Para dar permisos específicos a un usuario, como poder hacer SELECT o INSERT en una tabla o base de datos', 'Para crear una tabla nueva', 'Para borrar todos los datos de un usuario', 'Para calcular estadísticas de una tabla'], answer: 'Para dar permisos específicos a un usuario, como poder hacer SELECT o INSERT en una tabla o base de datos' },
        { prompt: '¿Qué hace REVOKE?', options: ['Quita permisos que se le habían concedido previamente a un usuario', 'Otorga todos los permisos posibles automáticamente', 'Elimina la cuenta del usuario por completo', 'Crea una copia de seguridad del usuario'], answer: 'Quita permisos que se le habían concedido previamente a un usuario' },
        { prompt: '¿Por qué es una buena práctica dar a cada usuario solo los permisos mínimos que necesita para su trabajo?', options: ['Porque reduce el riesgo si esa cuenta se ve comprometida o comete un error', 'Porque MySQL solo permite 3 permisos por usuario', 'Porque así las consultas se ejecutan más rápido', 'Porque es obligatorio por la sintaxis de GRANT'], answer: 'Porque reduce el riesgo si esa cuenta se ve comprometida o comete un error' },
        { prompt: '¿Qué tipo de permiso otorgarías a una aplicación que solo necesita leer datos, sin modificarlos nunca?', options: ['Solo SELECT', 'SELECT, INSERT, UPDATE y DELETE', 'ALL PRIVILEGES', 'DROP y ALTER'], answer: 'Solo SELECT' }
      ]
    }
  },
  {
    id: 'mysql-49',
    title: 'Relaciones muchos a muchos',
    subtitle: 'Nivel 49',
    xp: 166,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Cuando un alumno puede estar en varios cursos y un curso puede tener varios alumnos, ninguna de las dos tablas puede guardar directamente la FOREIGN KEY de la otra. Se necesita una <strong>tabla intermedia</strong> (o "tabla puente").',
        'Esa tabla intermedia (por ejemplo <code>alumnos_cursos</code>) tiene, como mínimo, dos claves foráneas: <code>alumno_id</code> y <code>curso_id</code>, una fila por cada combinación real de alumno y curso.'
      ],
      code:
        '<span class="tok-kw">CREATE TABLE</span> alumnos_cursos (\n' +
        '  alumno_id <span class="tok-kw">INT</span>,\n' +
        '  curso_id <span class="tok-kw">INT</span>,\n' +
        '  <span class="tok-kw">PRIMARY KEY</span> (alumno_id, curso_id),\n' +
        '  <span class="tok-kw">FOREIGN KEY</span> (alumno_id) <span class="tok-kw">REFERENCES</span> alumnos(id),\n' +
        '  <span class="tok-kw">FOREIGN KEY</span> (curso_id) <span class="tok-kw">REFERENCES</span> cursos(id)\n' +
        ');'
    },
    exercise: {
      instructions: 'Responde estas preguntas sobre relaciones muchos a muchos.',
      variant: 'plain',
      questions: [
        { prompt: '¿Cómo se modela una relación muchos a muchos (ej. alumnos y cursos) en una base de datos relacional?', options: ['Con una tabla intermedia (tabla puente) que tiene claves foráneas hacia ambas tablas', 'Añadiendo una columna de lista en cada tabla', 'No es posible modelar este tipo de relación en SQL', 'Duplicando cada fila tantas veces como relaciones tenga'], answer: 'Con una tabla intermedia (tabla puente) que tiene claves foráneas hacia ambas tablas' },
        { prompt: 'En una tabla intermedia "alumnos_cursos" para relacionar alumnos y cursos, ¿qué columnas suele tener como mínimo?', options: ['alumno_id y curso_id, cada una como clave foránea hacia su tabla respectiva', 'Solo una columna llamada relacion', 'Todas las columnas de ambas tablas duplicadas', 'Ninguna, la tabla se queda vacía'], answer: 'alumno_id y curso_id, cada una como clave foránea hacia su tabla respectiva' },
        { prompt: '¿Qué suele usarse como PRIMARY KEY de la tabla intermedia alumnos_cursos?', options: ['La combinación de alumno_id y curso_id (clave primaria compuesta), o un id propio autoincremental', 'Solamente el nombre del alumno', 'No necesita ninguna clave primaria', 'El nombre del curso repetido en cada fila'], answer: 'La combinación de alumno_id y curso_id (clave primaria compuesta), o un id propio autoincremental' },
        { prompt: 'Para obtener los cursos de un alumno concreto usando esta tabla intermedia, ¿qué necesitas hacer?', options: ['JOIN entre alumnos, alumnos_cursos y cursos, uniendo por los id correspondientes', 'Una sola consulta a la tabla cursos, sin ningún JOIN', 'Borrar la tabla intermedia primero', 'Usar únicamente GROUP BY, sin JOIN'], answer: 'JOIN entre alumnos, alumnos_cursos y cursos, uniendo por los id correspondientes' }
      ]
    }
  },
  {
    id: 'mysql-50',
    title: 'Proyecto integrador: las consultas de tu app CRUD',
    subtitle: 'Nivel 50',
    xp: 170,
    type: 'quiz',
    theory: {
      paragraphs: [
        'Es hora de combinar todo lo aprendido: JOIN para relacionar tablas, WHERE para filtrar filas antes de agrupar, GROUP BY y una función de agregación, HAVING para filtrar grupos, y ORDER BY / LIMIT para el resultado final. Estas son exactamente las consultas SELECT, INSERT, UPDATE y DELETE que tu aplicación en C# va a ejecutar a través de MySqlCommand para completar su CRUD.',
        'Recuerda el orden lógico: primero se combinan y filtran las filas (FROM, JOIN, WHERE), después se agrupan (GROUP BY) y se filtran los grupos (HAVING), y solo al final se decide qué mostrar y cómo ordenarlo (SELECT, ORDER BY, LIMIT). Si ya avanzaste en el módulo de C#, este es el mismo SQL que le pasarías a tu ProductoRepository.'
      ],
      code:
        '<span class="tok-kw">SELECT</span> c.nombre <span class="tok-kw">AS</span> cliente, <span class="tok-kw">COUNT</span>(p.id) <span class="tok-kw">AS</span> total_pedidos, <span class="tok-kw">SUM</span>(p.total) <span class="tok-kw">AS</span> gasto\n' +
        '<span class="tok-kw">FROM</span> clientes c\n' +
        '<span class="tok-kw">INNER JOIN</span> pedidos p <span class="tok-kw">ON</span> p.cliente_id = c.id\n' +
        '<span class="tok-kw">WHERE</span> p.estado = <span class="tok-string">\'completado\'</span>\n' +
        '<span class="tok-kw">GROUP BY</span> c.nombre\n' +
        '<span class="tok-kw">HAVING</span> <span class="tok-kw">COUNT</span>(p.id) &gt; <span class="tok-num">1</span>\n' +
        '<span class="tok-kw">ORDER BY</span> gasto <span class="tok-kw">DESC</span>\n' +
        '<span class="tok-kw">LIMIT</span> <span class="tok-num">3</span>;'
    },
    exercise: {
      instructions: 'Analiza esta consulta integradora y responde qué resultado produce en cada caso.',
      variant: 'code',
      questions: [
        { code: "-- clientes: id | nombre -> (1,Ana) (2,Luis) (3,Marta)\n-- pedidos: id | cliente_id | total | estado\n--   1 | 1 | 100 | completado\n--   2 | 1 |  50 | completado\n--   3 | 2 | 300 | completado\n--   4 | 2 |  10 | completado\n--   5 | 3 |  20 | pendiente\n\nSELECT c.nombre AS cliente, COUNT(p.id) AS total_pedidos, SUM(p.total) AS gasto\nFROM clientes c\nINNER JOIN pedidos p ON p.cliente_id = c.id\nWHERE p.estado = 'completado'\nGROUP BY c.nombre\nHAVING COUNT(p.id) &gt; 1\nORDER BY gasto DESC\nLIMIT 3;", prompt: '¿Qué cliente aparece primero en el resultado final?', options: ['Luis (gastó más, 310 en total)', 'Ana', 'Marta', 'Ninguno, la consulta da error'], answer: 'Luis (gastó más, 310 en total)' },
        { code: "-- clientes: id | nombre -> (1,Ana) (2,Luis) (3,Marta)\n-- pedidos: id | cliente_id | total | estado\n--   1 | 1 | 100 | completado\n--   2 | 1 |  50 | completado\n--   3 | 2 | 300 | completado\n--   4 | 2 |  10 | completado\n--   5 | 3 |  20 | pendiente\n\nSELECT c.nombre AS cliente, COUNT(p.id) AS total_pedidos, SUM(p.total) AS gasto\nFROM clientes c\nINNER JOIN pedidos p ON p.cliente_id = c.id\nWHERE p.estado = 'completado'\nGROUP BY c.nombre\nHAVING COUNT(p.id) &gt; 1\nORDER BY gasto DESC\nLIMIT 3;", prompt: '¿Por qué Marta no aparece en absoluto en el resultado, ni siquiera con 0 pedidos?', options: ['Porque su único pedido tiene estado "pendiente" y el WHERE lo descarta antes de agrupar, dejándola sin filas que agrupar', 'Porque HAVING la excluye explícitamente por su nombre', 'Porque ORDER BY la elimina del resultado', 'Porque LIMIT 3 no permite mostrar 3 clientes'], answer: 'Porque su único pedido tiene estado "pendiente" y el WHERE lo descarta antes de agrupar, dejándola sin filas que agrupar' },
        { code: "SELECT c.nombre AS cliente, COUNT(p.id) AS total_pedidos, SUM(p.total) AS gasto\nFROM clientes c\nINNER JOIN pedidos p ON p.cliente_id = c.id\nWHERE p.estado = 'completado'\nGROUP BY c.nombre\nHAVING COUNT(p.id) &gt; 1\nORDER BY gasto DESC\nLIMIT 3;", prompt: '¿Qué hace la cláusula HAVING COUNT(p.id) &gt; 1 en esta consulta?', options: ['Excluye del resultado a los clientes con 1 o menos pedidos completados', 'Excluye a los pedidos con menos de 1 producto', 'Ordena los clientes por número de pedidos', 'Limita el resultado a un único cliente'], answer: 'Excluye del resultado a los clientes con 1 o menos pedidos completados' },
        { code: "-- Pedidos completados de Ana: 100 y 50\n\nSELECT c.nombre AS cliente, SUM(p.total) AS gasto\nFROM clientes c\nINNER JOIN pedidos p ON p.cliente_id = c.id\nWHERE p.estado = 'completado'\nGROUP BY c.nombre;", prompt: "Según los datos de ejemplo (pedidos completados de Ana: 100 y 50), ¿cuánto vale 'gasto' para Ana?", options: ['150', '100', '50', '310'], answer: '150' }
      ]
    }
  }
];
