const os = require('os');
const fs = require('fs/promises');

async function escribir() {
    try {
        await fs.writeFile('nota1.txt', 'Los módulos son unidades de código reutilizables');
        await fs.writeFile('nota2.txt', 'que permiten organizar y encapsular funcionalidades en archivos separados');
        console.log('Archivos de notas creados');
    } catch (error) {
        console.error('No se pudieron escribir los archivos txt', error);
    }
}

async function leer() {
    try {
        await escribir();

        const Nota1 = await fs.readFile('nota1.txt');
        const Nota2 = await fs.readFile('nota2.txt');

        const Frase = (Nota1 + ' ' + Nota2).toUpperCase();

        await fs.writeFile('frase.txt', Frase);
        console.log('Archivo fue creado con exito');
        console.log(Frase)
    } catch (error) {
        console.error('Error al leer o escribir los archivos', error);
    }
}

leer();

async function obtenerDatosSistema() {

    const datosSistema = {
        cpu: 'AMD Ryzen 5 5500',
        plataforma: 'win32',
        arquitectura: 'x64'
    };

    console.log(datosSistema);

    try {
        await fs.writeFile('datos_sistema.json', JSON.stringify(datosSistema, null, 2));
        console.log('Archivo JSON creado con éxito');
    } catch (error) {
        console.error('Error al escribir el archivo JSON', error);
    }

    try {
        const contenidoJSON = await fs.readFile('datos_sistema.json');
        const datosLeidos = JSON.parse(contenidoJSON);
        console.log("Datos del sistema leidos del archivo JSON");
        console.table(datosLeidos);
    } catch (error) {
        console.error('Error al leer el archivo JSON', error);
    }
}

obtenerDatosSistema();

// async function obtenerDatosSistema() {
//     const datosSistema = {
//         cpu: os.cpus()[0].model,
//         plataforma: os.platform(),
//         arquitectura: os.arch()
//     };

//     console.log(datosSistema);

//     try {
//         await fs.writeFile('datos_sistema.json', JSON.stringify(datosSistema, null, 2));
//         console.log('Archivo JSON creado con éxito');
//     } catch (error) {
//         console.error('Error al escribir el archivo JSON', error);
//     }

//     try {
//         const contenidoJSON = await fs.readFile('datos_sistema.json');
//         const datosLeidos = JSON.parse(contenidoJSON);
//         console.log("Datos del sistema leídos del archivo JSON:");
//         console.table(datosLeidos);
//     } catch (error) {
//         console.error('Error al leer el archivo JSON', error);
//     }
// }

// obtenerDatosSistema();