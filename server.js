const http = require('http');
const manager = require('./main.js'); 

// Abro desde el navegaro http://127.0.0.1:3000/

const port = 3000;
const server = http.createServer( ( request, response )=> {
    const url = request.url;
    const array = url.split('/');
    const controller = array[1] ? array[1] : null;
    const id = array[2] ? parseInt(array[2], 10) : null;
    
    if (url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Hola desde el puerto 3000');
    } else if (controller === 'products') {
        if (id) {
            const product = manager.getProductById(id);
            if (product) {
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(product));
            } else {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end(JSON.stringify({ error: 'Producto no encontrado' }));
            }
        } else {
            try {
                const products = manager.getProducts();
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify(products));
            } catch (error) {
                response.writeHead(500, { 'Content-Type': 'text/plain' });
                response.end(JSON.stringify({ error: 'Error al obtener productos' }));
            }
        }
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Erro 404 | Recurso no encontrado');

    }
    console.log(request.url);
});

server.listen( port, ()=>{
    console.log('Servidor en el puerto ', port)
})
