# Actividad 05

## Alumnas:

```
- Ayala Daiana Amanda Ortiz
- Monney Mailen
```

## Apuntes de clase

```
(El profe utiliza la terminal Git Bash)

    - node nombre.js --> para ejecutar un archivo JavaScript en Node.js
    - Con this se referencia el atributo propio de la clase.
    - Usamos module.export = nombreClase para exportar valores, funciones, objetos o clases que queremos hacer disponibles a otros modulos.
    - Se importan usando require('./nombreClase.js').

    - Modulo FileSystem, este proporciona funciones y métodos para trabajar con el sistema de archivos del sistema operativo.

    - Modulo OS, Operative System, nos permie ejecutar acciones de más bajo nivel en nuestro sistema, permitiendonos conocer varios detalles del soistema. 

    - chalk -> Es una librería para estilizar la salida de texto en la consola con colores, fondos y otros estilos.

    - express -> Es un framework de Node.js para construir aplicaciones web y APIs.

    - Rutas -> determinar cómo una aplicación responde a una solicitud de cliente:
        ▶ app es la instancia de express.
        ▶ METHOD es un método de solicitud HTTP.
        ▶ PATH: Es una ruta en el servidor.
        ▶ HANDLER: Es la función ejecutada cuando la ruta coincide.

    - app.use(express.json()) -> Este middleware permite a la aplicación Express parsear las solicitudes con cuerpo en formato JSON.
    - request -> representa la solicitud del cliente.
    - response -> representa la respuesta que se enviará al cliente.
    - req.params recibimos parametros en nuestra ruta, es un objeto que continen propieades

    # Métodos HTTP en Express:
        ▶ app.get -> es para obtener.
        ▶ app.post -> es para agregar.
        ▶ app.put -> es para actualizar.
        ▶ app.delete -> es para eliminar.

    - app.listen -> es para iniciar el servidor y hacer que la aplicación comience a escuchar solicitudes en un puerto específico.
    - express.json() -> especifica que trabaja con json.

    # Model - View - Controlador
    ▶ Model: representa los datos logicos, se encarga de la interaccion con la base de datos y la validacion.
    ▶ View: presenta los datos al usuario
    ▶ Controller: controla la comunicacion entre el modelo y la vista

    # Variables de entorno
    Se usan para guardar valores que no queremos exponer en nuestro código directamente. Permite que la app sea más segura.
    Se puede gestionar por medio de un archivo .env el cual lo agregamos en el .gitignore
    ▶ Se instala: npm install dotenv
    Luego podemos acceder a la variables por medio de process.env.variable
```

// Abro desde el navegador http://127.0.0.1:3000/


## Como iniciar un repositorio

```
1. Inicializo un repositorio
    - git init

2. Configuro el usuario & email
    - git config user.name "maimonney"
    - git config user.mail "maimonney30@gmail.com"

3. Agrego los archivos, comento
    - git add .
    - git commit -m "Agregar comentario"

4. Creo el repositorio en GITHUB

5. Vínculamos el repo local con la nube
    -  git remote add origin https://github.com/maimonney/claseshibridas.git

6. Realizo el push
    -git push origin master
```

## Clonar repositorio

```
1. Clono el repositorio
    - git clone https://github.com/maimonney/claseshibridas.git

2. Configuro el usuario & email
    - git config user.name "maimonney"
    - git config user.mail "maimonney30@gmail.com"

3. Agrego los archivos, comento y realizo push
    - git add .
    - git commit -m "Agregar comentario"
    -git push 

4. Para obtener los últimos cambios del repositorio
    - git pull
```
