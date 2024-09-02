const chalk = require('chalk');
const express = require('express');
const ProductManager = require('./main.js');
const manager = require('./main.js');

const app = express();
const port = 3000;

app.use(express.json());

//Ruta home
app.get('/', (request, response) => {
    response.send('Home');
    console.log('Accedio a la ruta /');
});

//Ruta productos (Get)
app.get('/products', (request, response) => {
    const productos = manager.getProducts(); 
    //const product = ProductManager;
    console.log('PRODUCTOS ', productos);
    response.send(productos);
    console.log('Accedio a la ruta /products');
});

app.post('/products', (request, response) => {
    const product = request.body;
    console.log(response);
    console.log('Cliente en la ruta POST: /products');
    console.log(product);
    if(product.title && product.id){
        response.status(202).json({mensaje: 'Producto guardado'})
    } else{
        response.status(400).json({mensaje: 'Producto invalido'})
    }
});

const findById = (request, response) => {
    if(manager.id){
    const id = parseInt( request.params.id) ;
    const producto = manager.getProductById(id) 
    response.send(producto);
    console.log(`Accedio a la ruta /products/${id}`, producto);
} else{
    response.status(400).json({mensaje: `Producto con ${id} no encontrado`})
}
};

app.get('/products/:id', findById);

console.log( chalk.blue('Ahora tengo colores') );
console.log( chalk.bgGreen('Ahora fondo verde') );

app.listen( port, () => {
    console.log( chalk.green(`Servidor escuchando en el puerto ${port}`))
});