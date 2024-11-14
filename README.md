# NextJS: Contenido estático
> Ejemplo de proyecto NextJS con contenido estático.

Esto es una réplica del sitio

- [Información tutorial FP - Junta de Andalucía](https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/index.html)

Para los estilos se ha usado el framework Tailwind.


## Estructura base de carpetas y archivos

```
src
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.jsx
│   ├── not-found.jsx
│   └── page.jsx
├── components
│   ├── item-lista.jsx
│   ├── menu-principal.jsx
│   ├── nav.jsx
│   └── titulo.jsx
└── lib
    └── utils.js
```

## Tratamiento de texto con expresiones regulares

Para extraer la información de las distintas opciones del menú principal, hemos optado por realizar un poco de tratamiento de texto usando expresiones regulares.

Copiamos el menú principal de https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/index.html

En VSCode pulsamos `Ctrl+H` y seleccionamos `Usar expresión regular` y realizamos 3 operaciones:

```
<[^>]*>
\n\s*   -->  \n
([^\n]*)\n  --> "$1",\n
```


## Generación de carpetas y páginas

Para automatizar la creación de carpetas y páginas hemos ejecutado el siguiente código en NodeJS.

```sh
cd  src/app
```

En NodeJS hacemos

```js
const menu = [
    "Información general: convalidaciones, exenciones y títulos",
    "1.- Solicitud de convalidaciones",
    "1.1.- Convalidaciones en FP",
    "1.1.1.- ¿Qué necesito para poder convalidar?",
    "1.1.2.- ¿Qué estudios puedo alegar?",
    "1.2.- ¿Dónde encontrar qué módulos son convalidables?",
    "1.2.1-. Condiciones para convalidar FOL",
    "1.2.2.- Condiciones para convalidar Empresa e Iniciativa Emprendedora",
    "1.2.3.- Condiciones para convalidar Inglés",
    "1.2.4.- Condiciones para convalidar Segunda Lengua Extranjera",
    "1.2.5.- Condiciones para convalidar las Horas de Libre Configuración",
    "1.2.6.- Condiciones para convalidar el módulo de Proyecto",
    "1.2.7.- Exención de la FCT",
    "1.3.- ¿Puedo convalidar un módulo acreditando experiencia laboral?",
    "1.4.- ¿Qué organismo resuelve las convalidaciones?",
    "1.5.- ¿Qué documentación debo enviar al centro?",
    "1.6.- ¿Cómo conseguir el programa de una asignatura universitaria?",
    "1.7.- ¿Cómo saber si me convalidarán un módulo si he alegado estudios universitarios?",
    "1.8.- ¿Cuándo tendré noticias sobre si se ha aprobado la convalidación?",
    "1.9.- ¿Qué efectos tendrá la convalidación en mi expediente?",
    "1.10.- Enlaces relacionados",
    "2.- Solicitud del título",
    "2.1.- Solicitud",
    "2.2.- Tramitación y recogida",
    "Historial de versiones"
]

function slug(texto) {
    return (
        texto.toLowerCase()
            .replace(/[:,¿?]/g, "")
            .replace("- ", "")
            .replace(/[. ]/g, '_')
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    )
}

const fs = require('fs')
menu.forEach( entrada   => fs.mkdirSync( slug(entrada)  )   ) 
menu.forEach( entrada => fs.copyFileSync ( 'page.jsx',  slug(entrada) + '/page.jsx'  )    ) 
```
