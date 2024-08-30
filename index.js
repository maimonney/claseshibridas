const chalk = require('chalk');
const express = require('express');

const app = express();
const port = 3000;

//Ruta home
app.get('/', (request, response) => {
    response.send('Home');
    console.log('Accedio a la ruta /');
});

//Ruta producto
app.get('/products', (request, response) => {
    response.send('Productos');
    console.log('Accedio a la ruta /products');
});

//Ruta parametro
app.get('/products/:id', (request, response) => {
    // console.log(request);
    const id = request.params.id;
    response.send(`Productos con ID ${id}`);
    console.log(`Accedio a la ruta /products/${id}`);
});

console.log( chalk.blue('Ahora tengo colores') );
console.log( chalk.bgGreen('Ahora fondo verde') );

app.listen( port, () => {
    console.log( chalk.green(`Servidor escuchando en el puerto ${port}`))
});