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

-Cuando se va a subir el proyecto a github, al crear el repositorio te da la opción de elegir el tipo de proyecto que vas a crear. Los proyectos Nodejs crean automaticamente un archivo llamado "gitignore" que puedes acceder y seleccionar documentos del proyecto que no queremos que se suban. Por ejemplo, node_modules puede ocupar mucho espacio y normalmente no se suele subir a github