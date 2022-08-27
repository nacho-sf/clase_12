# clase_12

-Para arrancar el servidor con la declaración "start" hay que escribirlo en "package.json", dentro del objeto "scripts" y al igual que "test": ("start": "node app.js")

-Se arrancaría con la declaración "npm start", por ser "start" una keyword. Si no, la declaración comenzaría con "npm run ..."

-Dentro de "scripts" se pueden meter múltiples tareas, por ejemplo "otratarea". Se ejecutaría con la declaración "npm run otratarea"
 
-También se crea en "scripts" la declaración "dev" (development), para tener otra forma de arrancar el servidor. En un entorno de pruebas y desarrollo, en vez de uso o explotación, nos interesa arrancar así para que el servidor se refresque constantemente y no haya que estar apagando y arrancando con cada cambio. Para esto instalamos Nodemon --> "npm i --save-dev nodemon"

-Se crea en "package.json" "devDependencies", que es donde irán todas las dependencias de desarrollo en un entorno de pruebas.

-Comando "npm list" para ver las cosas que están instaladas.

-Arrancamos el servidor con nodemon, con la declaración "npm run dev" porque "dev" no es una palabra reservada (start sí)

-En "start" se podría arrancar con nodemon, pero se deja node porque cuando se sube el proyecto a un hosting, por defecto el servicio de hosting viene buscando el comando "start" para arrancar, y si encuentra nodemon en lugar de node no va a funcionar.

-Probar el funcionamiento cambiando el mensaje de bienvenida y refrescando el browser en localhost

-Para trabajar más cómodo separar las pantallitas de la terminal de comandos del visualcode

-Para buscar lo de la ballena y otras cosillas npmjs.com

-Cuando se va a subir el proyecto a github, al crear el repositorio te da la opción de elegir el tipo de proyecto que vas a crear. Los proyectos Nodejs crean automaticamente un archivo llamado "gitignore" que puedes acceder y seleccionar documentos del proyecto que no queremos que se suban. Por ejemplo, node_modules puede ocupar mucho espacio y normalmente no se suele subir a github.






-La LÓGICA DE NEGOCIO es la lógica de funcionamiento de la app. Esta lógica de negocio es el CONTROLADOR -> Qué se va a hacer cuando por ruta se pida una cosa determinada. Ej: Se pide el /home.html y entonces la lógica lo genera y lo devuelve. Cómo se genera?? --> Motor de plantillas (Ej: PUG, EJS, handlebars, ...)

    -JS front: Interacción con el usuario (clicks, scroll, onMouseOver, enviar, hacer fetch...)
    -JS back: Gestión de datos en SPA (Single Page App)






PUG: (módulo de NodeJS) --> Mirar documentación en git      //SE PUEDE CREAR UNA WEB TOTALMENTE DESDE BACK//


-Es como escribir html, pero con otra nomenclatura que es más breve y sencilla. Después, este código lo complila con una función en un *.html para mostrarlo.

-En lugar de etiquetas de apertura y cierre, PUG aplica tabulaciones para indicar que un elemento está dentro de otro.

-Tutorial seguido para instalación (https://www.tutorialspoint.com/expressjs/expressjs_templating.htm)

-Instalar. Terminal de la derecha: "npp i pug". Como PUG es una dependencia del proyecto(dependencies), y no de desarollo(devDependencies, para hacer pruebas) Usamos "npm i pug" y no "npm install --save pug"

-Copiar a "app.js":
    app.set('view engine', 'pug'); --> Qué motor de vistas va a usar ('pug')
    app.set('views','./views'); -----> Ruta de la carpeta donde van a estar guardadas las 'views'

-Crear carpeta "views". Para crear carpetas por consola: "mkdir 'carpeta'"

-Crear template de pug. Para crear esto por consola: "touch 'my_view.pug'"

-Pegar en el template el código de ejemplo del tutorial:

doctype html
html
   head
      title = "Hello Pug"
   body
      p.greetings#people Mi primera plantilla!


-En la ruta localhost:3000/ le introducimos: res.render("my_view.pug"); para renderizar el html en dicha ruta. Si entramos en la ruta desde el navegador se verá el template renderizado en html.

-Para pasarle algo a la plantilla:
La plantilla es como un html con huecos. Este se va a rellenar con los datos que se le pasen en el objeto del siguiente parámetro --> res.render("my_view.pug",{section:"Home", msj});
                        let msj = 'Hola desde mi primer servidor! '+emoji


-Para leer lo que le hemos pasado a la plantilla:

doctype html
html
   head
        title = "Hello Pug"
   body
    h1 Estás en la #{section}  <---------------------- Escribir!
    p.greetings#people Mi primera plantilla!
    p #{msj}  <--------------------------------------- Escribir!



-La utilidad de las plantillas es que para diferentes rutas con diferentes datos no tienes que desarrollar diferentes html's. Con desarrollar una plantilla es suficiente. En nuestro ejemplo, hemos usado el renderizado de la template, adaptado a cada una de las rutas (ver app.js)

-También se podrían crear una vez el header y footer una vez, guardarlos en *.pug en la carpeta "views" y reutilezarlos en la plantilla principal con la etiqueta de pug "include".

-Traducir html's a pug... ultimos links en git the bridge