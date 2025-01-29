import code from "../assets/code-svgrepo-com.svg";
import html from '../assets/html.svg';
import git from '../assets/git.svg';
import figma from '../assets/figma-svgrepo-com.svg';
import bootstrap from '../assets/bootstrap.svg';
import js from '../assets/js.svg';
import react from '../assets/react.svg';
import node from '../assets/node.svg';
import python from '../assets/python.svg';
import database from '../assets/database-server-svgrepo-com.svg';

const courseData = [
    {
        id: 1,
        title: 'Introducción a la programación',
        description: 'Este curso está diseñado para personas sin experiencia previa en programación que desean aprender los fundamentos de este apasionante campo. A lo largo del curso, los estudiantes descubrirán cómo funcionan los lenguajes de programación, escribirán su primer código y entenderán los conceptos básicos que son la base de todas las tecnologías digitales modernas. Con ejemplos prácticos y explicaciones claras, los participantes desarrollarán habilidades clave para resolver problemas, pensar de manera lógica y sentar las bases para futuros aprendizajes en áreas avanzadas.',
        shortDescription: 'Da tus primeros pasos en el mundo de la programación. Aprende los conceptos fundamentales como variables, condicionales, loops, funciones y estructuras de datos básicas, sin necesidad de experiencia previa.',
        image: code,
        duration: '4 semanas',
        level: 'Principiante',
        requirements: 'Ninguno',
        metodologia: 'El curso combina teoría con ejercicios prácticos, retos semanales y tutorías en vivo para resolver dudas. Se fomenta la colaboración y el aprendizaje interactivo para consolidar los conocimientos adquiridos.',
        estructura: {
            unidad1: {
                titulo: 'Introducción a la programación y conceptos básicos',
                temas: [
                    '¿Qué es la programación?',
                    'Tipos de lenguajes de programación',
                    'El ciclo de desarrollo de software',
                    'Primeros pasos: instalación de herramientas básicas (IDEs, terminal)',
                ],
            },
            unidad2: {
                titulo: 'Fundamentos de lógica y resolución de problemas',
                temas: [
                    'Pensamiento computacional',
                    'Algoritmos y diagramas de flujo',
                    'Variables, constantes y tipos de datos',
                    'Ejercicios prácticos de lógica',
                ],
            },
            unidad3: {
                titulo: 'Estructuras de control de flujo',
                temas: [
                    'Condicionales: if, else, switch',
                    'Bucles: for, while, do-while',
                    'Ejercicios prácticos con control de flujo',
                ],
            },
            unidad4: {
                titulo: 'Introducción a funciones y modularidad',
                temas: [
                    '¿Qué son las funciones y por qué son importantes?',
                    'Declaración, argumentos y valores de retorno',
                    'Buenas prácticas para escribir funciones',
                    'Resolviendo problemas con funciones',
                ],
            },
            unidad5: {
                titulo: 'Estructuras de datos básicas',
                temas: [
                    'Arreglos y listas: qué son y cómo usarlos',
                    'Introducción a cadenas de texto',
                    'Manejo básico de datos en memoria',
                ],
            },
            unidad6: {
                titulo: 'Proyecto final: Resolvamos un problema real',
                temas: [
                    'Desarrollo de un programa sencillo aplicando todo lo aprendido',
                    'Presentación de resultados y retroalimentación',
                ],
            },
        },
    },
    {
        id: 2,
        title: 'Desarrollo Web con HTML y CSS',
        description: 'Este curso está diseñado para personas que desean aprender a crear sitios web desde cero utilizando los fundamentos del desarrollo web: HTML y CSS. A lo largo de este curso, los participantes aprenderán a estructurar páginas web correctamente, aplicar estilos visuales modernos y crear diseños responsivos que se adapten a cualquier dispositivo. Al finalizar, los estudiantes tendrán las habilidades necesarias para construir sitios web funcionales y atractivos, listos para ser compartidos en internet.',
        shortDescription: 'Aprende a estructurar páginas web con HTML y a darles estilo con CSS. Este curso abarca temas como diseño responsive, flexbox, grid y buenas prácticas de accesibilidad. Incluye proyectos para aplicar lo aprendido.',
        image: html,
        duration: '8 semanas',
        requirements: 'Conocimientos básicos de programación',
        metodologia: 'Este curso adopta un enfoque práctico y progresivo, donde los estudiantes aprenderán desarrollando proyectos reales. Se combina teoría esencial con ejemplos prácticos y ejercicios semanales para reforzar lo aprendido. Los participantes trabajarán en pequeños proyectos, de modo que puedan aplicar los conceptos adquiridos a lo largo del curso.',
        estructura: {
            unidad1: {
                titulo: 'Introducción al desarrollo web',
                temas: [
                    'Qué es el desarrollo web',
                    'Estructura básica de un sitio web',
                    'Herramientas necesarias: editores de texto, navegadores y terminal',
                    'Introducción al navegador y la consola',
                    'Primer archivo HTML: la estructura básica',
                    'Proyecto práctico: Crear una página web básica con texto e imágenes',
                ],
            },
            unidad2: {
                titulo: 'Estructurando el contenido',
                temas: [
                    'Estructura HTML: etiquetas, atributos y valores',
                    'Etiquetas esenciales: div, header, footer, section, article',
                    'Formularios y controles de entrada',
                    'Enlaces y navegación entre páginas',
                    'Multimedia en HTML: imágenes, videos y audios',
                    'Proyecto práctico: Construir una página web con un formulario de contacto y elementos multimedia',
                ],
            },
            unidad3: {
                titulo: 'Estilizando tu sitio web',
                temas: [
                    'Introducción a CSS: cómo enlazar archivos CSS con HTML',
                    'Selectores, propiedades y valores',
                    'Colores, fuentes y texto: tipografía y estilos básicos',
                    'Modelos de caja: márgenes, bordes, rellenos y dimensiones',
                    'Fondos y bordes: gradientes y estilos personalizados',
                    'Proyecto práctico: Estilizar una página web con colores, fuentes y márgenes',
                ],
            },
            unidad4: {
                titulo: 'Diseño responsivo con CSS',
                temas: [
                    'Qué es el diseño responsivo y por qué es importante',
                    'Medios de consulta (media queries)',
                    'Flexbox: conceptos básicos y cómo usarlo para crear layouts responsivos',
                    'Grid Layout: principios y uso para crear diseños de múltiples columnas',
                    'Proyecto práctico: Crear una página web que se adapte a dispositivos móviles, tabletas y escritorios',
                ],
            },
            unidad5: {
                titulo: 'Frameworks CSS - Bootstrap',
                temas: [
                    'Introducción a Bootstrap: qué es y cómo usarlo',
                    'Estructura de una página web con Bootstrap',
                    'Componentes y utilidades de Bootstrap: botones, formularios, tarjetas, tablas',
                    'Creación de una interfaz de usuario con Bootstrap',
                    'Proyecto práctico: Construir una página web utilizando Bootstrap, con diseño responsivo y componentes',
                ],
            },
            unidad6: {
                titulo: 'Proyecto Final: Construcción de un sitio web completo',
                temas: [
                    'Planificación de un proyecto web completo: diseño, estructura y funcionalidades',
                    'Aplicación de todos los conceptos aprendidos: HTML, CSS, diseño responsivo, y Bootstrap',
                    'Pruebas y optimización para dispositivos móviles',
                    'Proyecto práctico: Crear un sitio web completo y funcional, como una página de presentación personal o un sitio de portafolio',
                ],
            },
        }
    },
    {
        id: 3,
        title: 'Control de Versiones con Git y GitHub',
        description: 'Este curso está diseñado para enseñar a los estudiantes cómo utilizar Git, el sistema de control de versiones más popular, y GitHub, la plataforma basada en la nube para alojar repositorios y colaborar en proyectos de software. A lo largo del curso, los participantes aprenderán a gestionar proyectos de desarrollo, colaborar en equipo, llevar un control adecuado de los cambios en el código y manejar diferentes versiones de manera eficiente. Al finalizar, los estudiantes serán capaces de trabajar de forma profesional en proyectos que requieran colaboración utilizando Git y GitHub.',
        shortDescription: 'Aprende a manejar tu código de forma profesional con Git y GitHub. Este curso incluye comandos básicos y avanzados de Git, así como trabajo colaborativo en proyectos.',
        image: git,
        duration: '6 semanas',
        requirements: 'Conocimientos básicos de programación',
        metodologia: 'El curso está enfocado en el aprendizaje práctico, con sesiones teóricas seguidas de ejercicios y proyectos reales. Los estudiantes trabajarán directamente con Git y GitHub, realizando tareas prácticas, creando y colaborando en repositorios, y resolviendo conflictos comunes que surgen durante el desarrollo de proyectos.',
        estructura: {
            unidad1: {
                titulo: 'Introducción a Git y Control de Versiones',
                temas: [
                    '¿Qué es un sistema de control de versiones?',
                    '¿Por qué usar Git? Beneficios y mejores prácticas',
                    'Instalación de Git en el sistema operativo',
                    'Configuración básica de Git: nombre de usuario, correo electrónico',
                    'Primeros pasos: crear un repositorio Git local',
                    'Proyecto práctico: Inicializar un repositorio local y realizar el primer commit',
                ],
            },
            unidad2: {
                titulo: 'Comandos básicos de Git',
                temas: [
                    'Estado de los archivos: git status, git diff',
                    'Añadir cambios: git add y git commit',
                    'Visualizar el historial: git log',
                    'Deshacer cambios: git checkout, git revert, git reset',
                    'Trabajar con ramas: git branch, git checkout -b',
                    'Proyecto práctico: Realizar cambios en un proyecto y gestionar el historial con git add, git commit y git log',
                ],
            },
            unidad3: {
                titulo: 'GitHub - Creación y gestión de repositorios remotos',
                temas: [
                    '¿Qué es GitHub y cómo se utiliza?',
                    'Crear una cuenta en GitHub y establecer un repositorio remoto',
                    'Conectar el repositorio local con GitHub: git remote, git push, git pull',
                    'Gestionar el repositorio remoto: git clone, git fetch, git merge',
                    'Configurar repositorios públicos y privados',
                    'Proyecto práctico: Subir un proyecto local a GitHub y gestionarlo de forma remota',
                ],
            },
            unidad4: {
                titulo: 'Colaboración con Git y GitHub',
                temas: [
                    'Trabajar en equipo con Git: clonación de repositorios, git pull, git push',
                    'Gestionar conflictos de fusión: resolución de conflictos, git merge',
                    'Pull requests en GitHub: qué son y cómo crearlos',
                    'Revisar y hacer revisiones de código en GitHub',
                    'Proyecto práctico: Colaborar en un repositorio en equipo, crear un pull request y resolver conflictos',
                ],
            },
            unidad5: {
                titulo: 'Flujos de trabajo con Git',
                temas: [
                    'Git Flow: ¿qué es y cómo implementarlo?',
                    'Flujo de trabajo básico: desarrollo en ramas, trabajo con ramas de características',
                    'Integración continua y GitHub Actions',
                    'Buenas prácticas para escribir mensajes de commit claros y descriptivos',
                    'Proyecto práctico: Crear un flujo de trabajo básico con ramas y realizar un merge controlado',
                ],
            },
            unidad6: {
                titulo: ' Proyecto Final - Creación de un proyecto colaborativo',
                temas: [
                    'Planificación de un proyecto en equipo utilizando Git y GitHub',
                    'Creación de un repositorio, gestión de ramas, commits y pull requests',
                    'Documentación del proyecto en GitHub con el uso de README.md',
                    'Revisión de código y colaboración en equipo',
                    'Proyecto práctico: Desarrollar un proyecto completo en equipo, utilizando las prácticas de Git y GitHub',
                ],
            },
        }
    },
    {
        id: 4,
        title: 'Introducción al Diseño UX/UI',
        description: 'Este curso está diseñado para introducir a los estudiantes en el mundo del diseño de experiencia de usuario (UX) y la interfaz de usuario (UI). Los participantes aprenderán los principios fundamentales del diseño centrado en el usuario, cómo crear interfaces atractivas y funcionales, y cómo realizar investigaciones de usuarios para mejorar la experiencia general en productos digitales. Al finalizar el curso, los estudiantes tendrán una comprensión sólida de los procesos de diseño UX/UI y las herramientas más utilizadas en la industria.',
        shortDescription: 'Descubre cómo diseñar interfaces de usuario intuitivas y agradables. Este curso incluye fundamentos de diseño, prototipado con herramientas como Figma y conceptos básicos de experiencia de usuario.',
        image: figma,
        duration: '6 semanas',
        requirements: 'Conocimientos básicos de programación',
        metodologia: 'Este curso adopta un enfoque práctico y colaborativo, combinando teoría fundamental y proyectos reales. Los estudiantes aprenderán a través de la realización de ejercicios, estudios de casos, y la creación de prototipos de diseño UX/UI que podrán presentar como parte de su portafolio',
        estructura: {
            unidad1: {
                titulo: 'Introducción al Diseño UX/UI',
                temas: [
                    '¿Qué es UX (Experiencia de Usuario) y qué es UI (Interfaz de Usuario)?',
                    'Diferencias entre diseño UX y diseño UI',
                    'El proceso de diseño UX/UI: Investigación, diseño, pruebas, implementación',
                    'Principios clave del diseño UX: usabilidad, accesibilidad, y funcionalidad',
                    'Principios del diseño UI: estética, consistencia, y diseño visual',
                    'Proyecto práctico: Analizar una aplicación existente y evaluar su diseño UX/UI',
                ],
            },
            unidad2: {
                titulo: 'Investigación de Usuario',
                temas: [
                    'La importancia de la investigación de usuarios en el diseño',
                    'Métodos de investigación: entrevistas, encuestas, análisis de la competencia',
                    'Creación de personas y mapas de empatía',
                    'Técnicas de investigación cualitativa y cuantitativa',
                    'Realización de un análisis de necesidades y objetivos de usuario',
                    'Proyecto práctico: Crear un perfil de usuario (persona) para un proyecto de diseño',
                ],
            },
            unidad3: {
                titulo: 'Diseño de Experiencia de Usuario (UX)',
                temas: [
                    'Arquitectura de la información: estructuración de contenido y navegación',
                    'Wireframes: creación de esquemas de la interfaz',
                    'Diseño de flujos de usuario: cómo se mueven los usuarios a través de una aplicación o página web',
                    'Principios de interacción: cómo diseñar interacciones intuitivas',
                    'Configurar repositorios públicos y privados',
                    'Proyecto práctico: Crear un wireframe y un flujo de usuario para una aplicación web o móvil',
                ],
            },
            unidad4: {
                titulo: 'Diseño de la Interfaz de Usuario (UI)',
                temas: [
                    'Fundamentos del diseño visual: color, tipografía, iconografía y espaciado',
                    'Diseño de botones, formularios y otros componentes de la interfaz',
                    'Diseño responsivo: cómo hacer que el diseño se adapte a diferentes dispositivos',
                    'Prototipado de interfaces interactivas',
                    'Proyecto práctico: Crear un prototipo interactivo utilizando Figma',
                ],
            },
            unidad5: {
                titulo: 'Pruebas de Usabilidad',
                temas: [
                    'Qué son las pruebas de usabilidad y por qué son esenciales en el diseño UX',
                    'Tipos de pruebas: pruebas de usuario, pruebas A/B, análisis heurístico',
                    'Cómo organizar y realizar pruebas de usabilidad',
                    'Analizar los resultados de las pruebas y realizar ajustes',
                    'Proyecto práctico: Realizar una prueba de usabilidad sobre un prototipo y hacer recomendaciones de mejora',
                ],
            },
            unidad6: {
                titulo: 'Proyecto Final - Diseño UX/UI para una Aplicación',
                temas: [
                    'Planificación de un proyecto de diseño UX/UI desde el inicio: investigación, wireframes, prototipos',
                    'Aplicación de principios de diseño UX/UI a un caso real',
                    'Presentación del proyecto final: cómo comunicar el diseño a un cliente o equipo',
                    'Proyecto práctico: Diseñar una aplicación móvil o sitio web completo, desde la investigación hasta el prototipo final, aplicando todos los conceptos aprendidos en el curso',
                ],
            },
        }
    },
    {
        id: 5,
        title: 'Desarrollo de Interfaces Web con Bootstrap',
        description: 'Este curso está diseñado para enseñar a los estudiantes a utilizar Bootstrap, el framework de diseño front-end más popular, para crear interfaces web atractivas, funcionales y responsivas. A lo largo del curso, los participantes aprenderán a aprovechar las herramientas y componentes predefinidos de Bootstrap para desarrollar interfaces de usuario de alta calidad de manera rápida y eficiente. Este curso está orientado tanto a principiantes como a desarrolladores que buscan mejorar su productividad en el desarrollo de interfaces web',
        shortDescription: 'Domina este framework CSS para construir páginas web rápidas y responsive. Aprende a trabajar con su sistema de grillas, componentes y personalización de estilos.',
        image: bootstrap,
        duration: '6 semanas',
        requirements: 'Conocimientos básicos de programación',
        metodologia: 'El curso sigue una metodología práctica, combinando teoría y ejercicios prácticos. Los estudiantes aprenderán a integrar Bootstrap en sus proyectos web y a utilizar sus componentes y utilidades para crear diseños modernos y adaptables a diferentes dispositivos. Además, realizarán proyectos reales para aplicar los conceptos aprendidos y crear sitios web funcionales.',
        estructura: {
            unidad1: {
                titulo: 'Introducción a Bootstrap y Preparación del Entorno',
                temas: [
                    '¿Qué es Bootstrap y por qué usarlo?',
                    'Instalación de Bootstrap: opciones de CDN y descarga',
                    'Estructura básica de un proyecto con Bootstrap',
                    'Introducción a las clases y componentes de Bootstrap',
                    'Personalización de Bootstrap: variables y personalización de temas',
                    'Proyecto práctico: Crear una página web básica con Bootstrap y aplicar personalización de colores y tipografía',
                ],
            },
            unidad2: {
                titulo: 'Sistema de Rejillas (Grid System) y Diseño Responsivo',
                temas: [
                    'El sistema de rejillas de Bootstrap: filas, columnas y cómo funciona el grid',
                    'Diseño responsivo: cómo crear interfaces que se adapten a diferentes tamaños de pantalla',
                    'Clases de visibilidad: cómo ocultar o mostrar elementos según el tamaño de pantalla',
                    'Uso de breakpoints y clases personalizadas para dispositivos móviles, tabletas y escritorios',
                    'Proyecto práctico: Crear una página web responsiva utilizando el sistema de rejillas de Bootstrap, adaptando el diseño a diferentes tamaños de pantalla',
                ],
            },
            unidad3: {
                titulo: 'Componentes de Interfaz con Bootstrap',
                temas: [
                    'Navegación: menús de navegación, barras de navegación, menús desplegables',
                    'Formularios: creación de formularios con entradas de texto, botones, campos de selección, validación',
                    'Botones: tipos de botones, colores y tamaños',
                    'Tarjetas (Cards): uso de tarjetas para mostrar contenido en una interfaz',
                    'Modales: cómo crear ventanas modales para mostrar contenido adicional o formularios',
                    'Alertas y notificaciones: cómo mostrar mensajes emergentes para el usuario',
                    'Proyecto práctico: Crear una página de contacto con formularios, botones y una barra de navegación utilizando componentes de Bootstrap',
                ],
            },
            unidad4: {
                titulo: 'Utilización de Utilidades de Bootstrap',
                temas: [
                    'Espaciado: clases para márgenes y relleno (margin, padding)',
                    'Alineación: cómo alinear texto, imágenes y otros elementos',
                    'Colores y fondos: clases para establecer colores de fondo, texto, bordes',
                    'Tipografía: clases para controlar fuentes, tamaños y estilos de texto',
                    'Sombreado y bordes: agregar sombras a elementos y personalizar bordes',
                    'Proyecto práctico: Crear una página web con diseño avanzado utilizando las utilidades de Bootstrap, como espaciado, alineación y colores',
                ],
            },
            unidad5: {
                titulo: 'Personalización Avanzada de Bootstrap',
                temas: [
                    'Cómo personalizar Bootstrap utilizando SASS para modificar variables y temas',
                    'Creación de un diseño único con Bootstrap y personalización de sus componentes',
                    'Uso de temas y plantillas predefinidas para acelerar el desarrollo',
                    'Integración de iconos y fuentes personalizadas',
                    'Proyecto práctico: Crear una interfaz completamente personalizada utilizando Bootstrap y modificando sus variables con SASS',
                ],
            },
            unidad6: {
                titulo: 'Proyecto Final - Desarrollo de una Página Web Completa con Bootstrap',
                temas: [
                    'Planificación y diseño de una página web completa utilizando Bootstrap',
                    'Creación de una interfaz de usuario responsiva con varios componentes y utilidades de Bootstrap',
                    'Implementación de buenas prácticas de accesibilidad y usabilidad en el diseño',
                    'Optimización de la carga de la página y mejores prácticas para un rendimiento adecuado',
                    'Proyecto práctico: Desarrollar una página web completa, como un portafolio o una landing page, utilizando Bootstrap, aplicando todos los conceptos aprendidos',
                ],
            },
        }
    },
    {
        id: 6,
        title: 'JavaScript',
        description: 'Este curso es una introducción completa a JavaScript, uno de los lenguajes de programación más populares y esenciales para el desarrollo web. Los estudiantes aprenderán desde los fundamentos hasta conceptos avanzados, incluyendo cómo manipular elementos en una página web, crear interactividad y desarrollar aplicaciones dinámicas. Este curso está diseñado tanto para principiantes que buscan aprender JavaScript desde cero como para desarrolladores que deseen reforzar sus conocimientos.',
        shortDescription: 'Conoce el lenguaje que da vida a las páginas web. Aprende desde los fundamentos de JavaScript, como variables, funciones y loops, hasta manipulación del DOM, eventos y programación asíncrona.',
        image: js,
        duration: '9 semanas',
        requirements: 'Conocimientos básicos de programación',
        metodologia: 'El curso sigue un enfoque práctico, combinando teoría, ejercicios interactivos y proyectos para garantizar que los estudiantes adquieran habilidades aplicables.',
        estructura: {
            unidad1: {
                titulo: 'Fundamentos de JavaScript',
                temas: [
                    'Introducción a JavaScript: historia, importancia y usos',
                    'Cómo integrar JavaScript en HTML: <script> y consola del navegador',
                    'Sintaxis básica: variables (var, let, const), operadores y tipos de datos',
                    'Introducción a funciones y su sintaxis básica',
                    'Buenas prácticas de codificación',
                    'Ejercicio práctico: Crear un programa simple que calcule el área de un triángulo',
                ],
            },
            unidad2: {
                titulo: 'Estructuras de Control',
                temas: [
                    'Condicionales (if, else, switch)',
                    'Bucles (for, while, do...while)',
                    'Manejo de errores con try...catch',
                    'Uso de operadores lógicos y comparaciones',
                    'Ejercicio práctico: Crear un programa que determine si un número es primo',
                ],
            },
            unidad3: {
                titulo: 'Manipulación del DOM (Document Object Model)',
                temas: [
                    '¿Qué es el DOM? Cómo interactuar con él',
                    'Selección de elementos (querySelector, getElementById, etc.)',
                    'Manipulación de contenido (añadir, modificar, eliminar)',
                    'Manejo de atributos, estilos y clases',
                    'Ejercicio práctico: Crear un contador interactivo que permita sumar y restar números',
                ],
            },
            unidad4: {
                titulo: 'Eventos en JavaScript',
                temas: [
                    'Introducción a eventos: onclick, onchange, oninput, etc',
                    'Uso de addEventListener para manejar eventos',
                    'Eventos comunes en formularios, botones y elementos interactivos',
                    'Propagación y delegación de eventos',
                    'Ejercicio práctico: Crear un formulario con validación en tiempo real utilizando evento',
                ],
            },
            unidad5: {
                titulo: 'Funciones Avanzadas y Programación Modular',
                temas: [
                    'Funciones de flecha y funciones anónimas',
                    'Callbacks y promesas',
                    'Introducción a async y await',
                    'Modularización de código: uso de módulos (import/export)',
                    'Ejercicio práctico: Crear una aplicación que consuma una API externa para mostrar datos climáticos',
                ],
            },
            unidad6: {
                titulo: 'Estructuras de Datos y Manipulación',
                temas: [
                    'Arrays: métodos principales (push, pop, map, filter, etc.)',
                    'Objetos: creación y manipulación',
                    'Desestructuración y operador spread/rest',
                    'Uso de JSON para intercambio de datos',
                    'Ejercicio práctico: Crear una lista de tareas (to-do list) que permita agregar, editar y eliminar tareas',
                ],
            },
            unidad7: {
                titulo: 'Almacenamiento Local y Sesión',
                temas: [
                    'Uso de localStorage y sessionStorage',
                    'Guardar y recuperar datos en aplicaciones web',
                    'Introducción a las cookies',
                    'Ejercicio práctico: Crear un sistema que recuerde las preferencias del usuario (como el tema oscuro o claro)',
                ],
            },
            unidad8: {
                titulo: 'Proyecto Final',
                temas: [
                    'Planificación y desarrollo de una aplicación interactiva desde cero',
                    'Implementación de manipulación del DOM, eventos, y almacenamiento local',
                    'Mejores prácticas para estructurar y documentar el código',
                    'Proyecto práctico: Desarrollar un juego interactivo (como un juego de memoria o "Simón dice") que combine todos los conceptos aprendidos',
                ],
            },
        }
    },
    {
        id: 7,
        title: 'Fundamentos de Desarrollo con React',
        description: 'Este curso es una guía completa para aprender React, la biblioteca de JavaScript más popular para el desarrollo de interfaces de usuario dinámicas y rápidas. Desde los conceptos básicos hasta temas más avanzados, los estudiantes aprenderán a construir aplicaciones web modernas, modulares y mantenibles utilizando React. Ideal para desarrolladores que ya tienen conocimientos de JavaScript y desean dar el siguiente paso en el desarrollo frontend',
        shortDescription: 'Aprende a construir interfaces de usuario dinámicas con React. Este curso incluye componentes, props, estados y cómo manejar eventos en aplicaciones modernas. Requiere conocimientos básicos de JavaScript.',
        image: react,
        duration: '10 semanas',
        level: 'Intermedio',
        requirements: 'JavaScript',
        metodologia: 'El curso sigue un enfoque práctico, combinando teoría, ejercicios interactivos y proyectos para garantizar que los estudiantes adquieran habilidades aplicables.',
        estructura: {
            unidad1: {
                titulo: 'Introducción a React y JSX',
                temas: [
                    '¿Qué es React? Ventajas y ecosistema',
                    'Instalación y configuración inicial de un proyecto React',
                    'Fundamentos de JSX: cómo funciona y buenas prácticas',
                    'Componentes funcionales básicos',
                    'Ejercicio práctico: Crear un componente que muestre un mensaje personalizado',
                ],
            },
            unidad2: {
                titulo: 'Componentes y Props',
                temas: [
                    'Creación de componentes reutilizables',
                    'Uso de props para pasar datos entre componentes',
                    'PropTypes y validación de props',
                    'Manejo de estructuras de componentes anidadas',
                    'Ejercicio práctico: Crear un componente de tarjeta con información dinámica pasada como props',
                ],
            },
            unidad3: {
                titulo: 'State y Eventos',
                temas: [
                    'Introducción al estado (useState)',
                    'Actualización y manejo del estado',
                    'Control de eventos (onClick, onChange, etc.)',
                    'Diferencia entre estado local y props',
                    'Ejercicio práctico: Crear un contador con botones para incrementar, decrementar y reiniciar el valor',
                ],
            },
            unidad4: {
                titulo: 'Ciclo de Vida y Efectos',
                temas: [
                    'Introducción al ciclo de vida de los componentes',
                    'Uso del hook useEffect para efectos secundarios',
                    'Manejo de dependencias en useEffect',
                    'Limpieza de efectos',
                    'Ejercicio práctico: Crear un temporizador que se actualice automáticamente cada segundo',
                ],
            },
            unidad5: {
                titulo: 'Renderizado Condicional y Listas',
                temas: [
                    'Renderizado condicional con operadores (if, ternario, &&)',
                    'Renderizado de listas con el método map',
                    'Uso de keys para elementos en listas dinámicas.',
                    'Ejercicio práctico: Crear una lista de tareas (to-do list) con opciones para marcar como completadas o eliminarlas',
                ],
            },
            unidad6: {
                titulo: 'React Router',
                temas: [
                    'Introducción a React Router',
                    'Configuración de rutas y navegación entre páginas',
                    'Rutas dinámicas y parámetros (useParams)',
                    'Redirección y navegación programática (useNavigate)',
                    'Ejercicio práctico: Crear una aplicación con múltiples páginas: Inicio, Acerca de y Contacto',
                ],
            },
            unidad7: {
                titulo: 'Manejo Global de Estado',
                temas: [
                    'Introducción a Context API',
                    'Creación de contextos y proveedores de datos',
                    'Consumo de contextos con useContext',
                    'Comparativa de Context API con otras herramientas como Redux',
                    'Ejercicio práctico: Implementar un tema oscuro/claro en la aplicación utilizando Context API',
                ],
            },
            unidad8: {
                titulo: 'Optimización y Buenas Prácticas',
                temas: [
                    'Uso de React.memo para optimizar componentes',
                    'Hooks avanzados: useCallback y useMemo',
                    'Fragmentos y portales',
                    'Error boundaries para manejar errores en la interfaz',
                    'Ejercicio práctico: Optimizar una aplicación para reducir renders innecesarios',
                ],
            },
            unidad9: {
                titulo: 'Consumo de APIs con React',
                temas: [
                    'Fetching de datos utilizando fetch y axios',
                    'Manejo de estados de carga y errores',
                    'Paginación y filtrado de datos en tablas',
                    'Ejercicio práctico: Crear una aplicación que consuma una API pública y muestre resultados dinámicos',
                ],
            },
            unidad10: {
                titulo: 'Proyecto Final',
                temas: [
                    'Planificación y diseño de una aplicación desde cero',
                    'Implementación de componentes reutilizables',
                    'Manejo de estado global',
                    'Consumo de APIs y optimización del rendimiento',
                    'Proyecto práctico: Crear una aplicación de e-commerce que permita navegar por productos, añadir al carrito y simular un proceso de compra',
                ],
            },
        }
    },
    {
        id: 8,
        title: 'Backend con Node.js y Express',
        description: 'Este curso está diseñado para aprender los fundamentos del desarrollo backend utilizando Node.js y el framework Express.js. Los estudiantes comprenderán cómo construir APIs RESTful, gestionar bases de datos y crear servidores robustos y escalables. Está dirigido a desarrolladores con conocimientos básicos de JavaScript que deseen expandir sus habilidades al desarrollo del lado del servidor',
        shortDescription: 'Aprende a construir servidores y gestionar bases de datos utilizando Node.js y Express. El curso incluye manejo de rutas, autenticación y conexión con bases de datos.',
        image: node,
        duration: '9 semanas',
        level: 'Intermedio',
        requirements: 'Conocimientos básicos de programación',
        metodologia: 'El curso sigue un enfoque práctico, combinando teoría, ejercicios interactivos y proyectos para garantizar que los estudiantes adquieran habilidades aplicables.',
        estructura: {
            unidad1: {
                titulo: 'Introducción a Node.js',
                temas: [
                    '¿Qué es Node.js? Ventajas y casos de uso',
                    'Instalación y configuración inicial',
                    'Creación de scripts básicos en Node.js',
                    'Módulos nativos: fs, path, os, etc',
                    'Ejercicio práctico: Crear un script que lea y escriba en archivos de texto',
                ],
            },
            unidad2: {
                titulo: 'Fundamentos de Express.js',
                temas: [
                    'Introducción a Express.js y su rol en el desarrollo backend',
                    'Configuración de un servidor básico',
                    'Rutas y manejo de métodos HTTP',
                    'Middleware: qué son y cómo funcionan',
                    'Ejercicio práctico: Crear un servidor con rutas básicas para un sistema de notas',
                ],
            },
            unidad3: {
                titulo: 'APIs RESTful',
                temas: [
                    'Diseño de APIs RESTful',
                    'Métodos HTTP: GET, POST, PUT, DELETE',
                    'Respuestas en formato JSON',
                    'Manejo de errores y respuestas estándar',
                    'Ejercicio práctico: Construir una API básica para gestionar usuarios',
                ],
            },
            unidad4: {
                titulo: 'Autenticación y Autorización',
                temas: [
                    'Introducción a la autenticación y autorización',
                    'Implementación de autenticación basada en tokens (JWT)',
                    'Gestión de usuarios y contraseñas en la base de datos',
                    'Middleware de protección de rutas privadas',
                    'Ejercicio práctico: Crear un sistema de autenticación para una API',
                ],
            },
            unidad5: {
                titulo: 'Gestión de Archivos',
                temas: [
                    'Subida y almacenamiento de archivos',
                    'Uso de multer para manejar archivos en Express',
                    'Guardar rutas de archivos en la base de datos',
                    'Gestión de archivos estáticos',
                    'Ejercicio práctico: Crear una funcionalidad para subir y gestionar imágenes de perfil',
                ],
            },
            unidad6: {
                titulo: 'Configuración y Despliegue',
                temas: [
                    'Variables de entorno y configuración con dotenv',
                    'Buenas prácticas para estructurar proyectos Node.js',
                    'Despliegue de aplicaciones en servicios como Heroku o Render',
                    'Logs y monitoreo con herramientas externas',
                    'Ejercicio práctico: Configurar y desplegar una API en la nube',
                ],
            },
            unidad7: {
                titulo: 'Proyecto Final',
                temas: [
                    'Diseñar y construir una API RESTful para una aplicación funcional (como un blog, un sistema de tareas o una tienda en línea)',
                    'Implementar autenticación y manejo de usuarios',
                    'Integrar MongoDB para el almacenamiento de datos',
                    'Desplegar la API en un servicio en la nube',
                ],
            },
        }
    },
    {
        id: 9,
        title: 'Python',
        description: 'Este curso es una inmersión completa en Python, uno de los lenguajes de programación más populares y versátiles del mundo. Diseñado tanto para principiantes como para programadores con experiencia en otros lenguajes, este curso enseña desde los conceptos básicos hasta aplicaciones avanzadas, como análisis de datos, automatización de tareas y desarrollo web. Python es ideal para quienes buscan aprender programación con un lenguaje intuitivo y poderoso.',
        shortDescription: 'Conoce las bases de Python, uno de los lenguajes de programación más populares. Aprende conceptos como variables, estructuras de control, funciones y manipulación de datos. Perfecto para quienes comienzan en la programación.',
        image: python,
        duration: '12 semanas',
        level: 'Intermedio',
        requirements: 'Conocimientos básicos de programación',
        metodologia: 'El curso sigue un enfoque práctico, combinando teoría, ejercicios interactivos y proyectos para garantizar que los estudiantes adquieran habilidades aplicables.',
        estructura: {
            unidad1: {
                titulo: 'Fundamentos de Python',
                temas: [
                    'Introducción a Python: historia y características',
                    'Instalación y configuración del entorno (Python y editores como VSCode o PyCharm)',
                    'Sintaxis básica: variables, operadores y comentarios',
                    'Entrada y salida de datos (input y print)',
                    'Ejercicio práctico: Crear un programa para calcular el área de un círculo',
                ],
            },
            unidad2: {
                titulo: 'Estructuras de Control',
                temas: [
                    'Condicionales: if, elif y else',
                    'Ciclos: for y while',
                    'Manejo de interrupciones con break y continue',
                    'Ejercicio práctico: Crear un programa que identifique números primos en un rango',
                ],
            },
            unidad3: {
                titulo: 'Estructuras de Datos',
                temas: [
                    'Listas, tuplas y conjuntos: definición, manipulación y usos',
                    'Diccionarios: almacenamiento y acceso a datos clave-valor',
                    'Operaciones comunes en estructuras de datos',
                    'Ejercicio práctico: Construir un programa que maneje una lista de tareas con opciones para agregar, eliminar y listar tareas',
                ],
            },
            unidad4: {
                titulo: 'Funciones y Modularidad',
                temas: [
                    'Definición y uso de funciones',
                    'Parámetros, argumentos y valores de retorno',
                    'Importación y creación de módulos personalizados',
                    'Alcance de las variables (local y global)',
                    'Ejercicio práctico: Crear una calculadora modular con operaciones básicas',
                ],
            },
            unidad5: {
                titulo: 'Manejo de Archivos',
                temas: [
                    'Lectura y escritura de archivos (txt, csv)',
                    'Manejo de excepciones con try, except, finally',
                    'Serialización de datos con json y pickle',
                    'Ejercicio práctico: Construir un programa que registre y lea información de usuarios desde un archivo',
                ],
            },
            unidad6: {
                titulo: 'Introducción a Programación Orientada a Objetos (POO)',
                temas: [
                    'Clases y objetos: creación y uso',
                    'Métodos y atributos',
                    'Principios básicos: herencia, polimorfismo y encapsulación',
                    'Uso de self y __init__',
                    'Ejercicio práctico: Crear una clase para gestionar la información de estudiantes en un sistema académico',
                ],
            },
            unidad7: {
                titulo: 'Bibliotecas y Herramientas de Python',
                temas: [
                    'Uso de bibliotecas estándar (como math, os y datetime)',
                    'Instalación de paquetes externos con pip',
                    'Introducción a bibliotecas populares',
                    'Ejercicio práctico: Crear un programa que lea datos desde un archivo CSV y genere un gráfico',
                ],
            },
            unidad8: {
                titulo: 'Proyecto Final',
                temas: [
                    'Implementar un programa completo que combine los conceptos aprendidos',
                ],
            },
        }
    },
    { 
        id: 10,
        title: 'Bases de Datos',
        description: 'En este curso aprenderás los fundamentos de las bases de datos, su importancia en el desarrollo de aplicaciones y cómo gestionarlas de manera eficiente. Descubre cómo modelar, estructurar y administrar datos utilizando SQL y las mejores prácticas del sector. Este curso es ideal para quienes desean entender cómo funcionan los sistemas de gestión de bases de datos (DBMS) y cómo integrarlos en proyectos reales.',
        shortDescription: 'Aprende los fundamentos de las bases de datos, desde qué son y cómo funcionan hasta cómo diseñar y gestionar información de manera eficiente.',
        image: database,
        duration: '5 semanas',
        level: 'Intermedio',
        requirements: 'Conocimientos básicos de programación',
        metodologia: 'El curso sigue un enfoque práctico, combinando teoría, ejercicios interactivos y proyectos para garantizar que los estudiantes adquieran habilidades aplicables.',
        estructura: {
            unidad1: {
                titulo: 'Introducción a las Bases de Datos',
                temas: [
                    '¿Qué son las bases de datos y por qué son importantes?',
                    'Tipos de bases de datos: relacionales y no relacionales',
                    'Sistemas de gestión de bases de datos (DBMS): MySQL, PostgreSQL, SQLite',
                    'Ejercicio práctico: Instalar y configurar un sistema de gestión de bases de datos',
                ],
            },
            unidad2: {
                titulo: 'Diseño de Bases de Datos Relacionales',
                temas: [
                    'Conceptos básicos: tablas, filas, columnas y relaciones',
                    'Normalización: eliminar redundancias y mejorar la estructura de datos',
                    'Creación de diagramas entidad-relación (ERD)',
                    'Tipos de relaciones: uno a uno, uno a muchos, muchos a muchos',
                    'Ejercicio práctico: Diseñar un modelo ERD para un sistema de gestión de inventarios',
                ],
            },
            unidad3: {
                titulo: 'Lenguaje SQL Básico',
                temas: [
                    'Introducción al lenguaje SQL: sintaxis y comandos básicos',
                    'Creación y gestión de bases de datos y tablas',
                    'Operaciones básicas: SELECT, INSERT, UPDATE, DELETE',
                    'Filtrado de datos con WHERE, operadores y funciones agregadas (SUM, COUNT, AVG)',
                    'Ejercicio práctico: Crear una base de datos de prueba y realizar consultas simples',
                ],
            },
            unidad4: {
                titulo: 'Consultas Avanzadas en SQL',
                temas: [
                    'Uso de JOIN para combinar tablas: INNER, LEFT, RIGHT y FULL',
                    'Subconsultas y consultas anidadas',
                    'Índices y optimización de consultas',
                    'Funciones avanzadas y operaciones en SQL',
                    'Ejercicio práctico: Crear un reporte combinando datos de varias tablas (por ejemplo, ventas y clientes)',
                ],
            },
            unidad5: {
                titulo: 'Administración de Bases de Datos',
                temas: [
                    'Creación y gestión de usuarios y permisos',
                    'Copias de seguridad y restauración de datos',
                    'Transacciones: COMMIT, ROLLBACK y control de concurrencia',
                    'Introducción a la seguridad en bases de datos',
                    'Ejercicio práctico: Configurar un sistema de usuarios con permisos diferenciados y realizar una transacción controlada',
                ],
            },
            unidad6: {
                titulo: 'Bases de Datos No Relacionales (Introducción)',
                temas: [
                    '¿Qué son las bases de datos NoSQL?',
                    'Comparación entre bases de datos relacionales y no relacionales',
                    'Ejemplo práctico con MongoDB: colección, documento, campo',
                    'Consultas básicas en MongoDB',
                    'Ejercicio práctico: Crear y consultar una base de datos en MongoDB para un blog',
                ],
            },
            unidad7: {
                titulo: 'Integración con Aplicaciones',
                temas: [
                    'Uso de bases de datos con lenguajes de programación (Python, Node.js)',
                    'Conexión y ejecución de consultas desde el código',
                    'Introducción a ORMs (Object-Relational Mapping): SQLAlchemy, Sequelize',
                    'Ejercicio práctico: Crear una aplicación básica que interactúe con una base de datos (por ejemplo, un sistema de registro de usuarios)',
                ],
            },
            unidad8: {
                titulo: 'Proyecto Final',
                temas: [
                    'Diseñar, implementar y administrar una base de datos completa',
                ],
            },
        }
    },
];

export default courseData;
