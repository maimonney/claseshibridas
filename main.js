const http = require('http');
const port = 3000;
const server = http.createServer( ( request, response )=> {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    const url = request.url;
    const array = url.split('/');
    const controller = array[1] ? array[1]:  null;
    const id = array[2] ? array[2] : null;
    console.log(controller, id);
    
    if( url == '/'){
        response.end('home');
    } else if ( url == '/coffee'){
        response.end('Lista de Cafes');
    } else if ( url == '/contact'){
        response.end('Contactos');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Erro 404 | Recurso no encontrado');

    }
    console.log(request.url);
});
// Abro desde el navegaro http://127.0.0.1:3000/

server.listen( port, ()=>{
    console.log('Servidor en el puerto ', port)
})

//Actividad 02
const ProductManager = require('./ProductManager.js');
const products = [
    {  title : 'Labial',
    descripcion : 'Labial oil',
    price : 20000,
    imagen : 'img.png',
    id : 1,
    stock : 14 
    },
    {  title : 'Eyerliner',
    descripcion : 'Eyeliner para ojos',
    price : 23400,
    imagen : 'img.png',
    id : 2,
    stock : 0 
    }
]

const  manager = new ProductManager(products)

const p1 = {
    title : 'Rubor',
    descripcion : 'Hola',
    price : 2222,
    imagen : 'img.png',
    id : 1,
    stock : 14 
}

const p2 = {
    title : 'Rubor',
    price : 2222,
    id : 1,
    stock : 14 
}



manager.addProduct(p1) 
manager.addProduct(p2) 
console.log(manager)
const productoXID = manager.getProductById(5)
console.log(productoXID)