const express = require('express');
const { Product } = require('./Product');
const app = express();
const port = 3000;
app.use( express.json());

// Abro desde el navegaro http://127.0.0.1:3000/

// Rutas
app.get('/', (req, res) => {
    res.send('Home');
    console.log('Cliente en el HOME')
});

// Retorna la lisa de usuarios
app.get('/products', async (req, res) => {
    const product = new Product();
    const data = await product.getProducts();
    console.table(data);
    res.status(200).send(data);
})
// Retorna el usuario por id
app.get('/products/:id', async ( req, res) => {
    const id = req.params.id;
    const product = new Product();
    const data = await product.getProductById(id);
    if( data ){
        res.status(200).json(data)
    } else {
        res.status(404).json({ mensaje: 'Producto no econtrado'})
    }
})

// Guarda un usuario
app.post('/products', async( req, res) => {
    console.log( req.body );
    const { title, descripcion, price, imagen, stock } = req.body;
    if( !title || !descripcion || !price || !imagen || !stock ){
        res.status(400).json({ mensaje: 'Faltan parametros'})
    }
    const product = new Product();
    await product.addProduct({
        title,
        descripcion,
        price,
        imagen,
        stock
    })
    res.status(202).json({ mensaje: 'Usuario Guardado'})
})


// Ruta products
app.get('/products', (req, res) =>{
    res.send('Products');
    console.log('Cliente en la ruta /products')
});

// POST
app.post('/products', (req, res) =>{
    const product = req.body;
    console.log('Cliente en la ruta POST: /products')
    console.log(product)
    if( product.name && product.price){
        res.status(202).json({ mensaje: 'Producto Guardado'});

    } else {
        res.status(400).json({ mensaje: 'Producto Invalido'});

    }

})

const findById =  (req, res) =>{
    const id = req.params.id;
    res.send(`Products con el Id ${id} `);
    console.log(`Cliente en la ruta /products/${id}`);
}

// Ruta products con Parámetros
app.get('/products/:id', findById );

app.listen( port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})