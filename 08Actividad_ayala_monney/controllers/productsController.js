const { Products } = require('../models/Products');

const addProduct = async ( req, res) =>{
    const { title, descricpcion, price, imagen, stock } = req.body;
    if( !title || !descricpcion || !price || !imagen || !stock ){
        res.status(400).json({ mensaje: 'Faltan parametros'})
    }
    const Products = new Products();
    await Products.addProduct({
        title,
        descricpcion,
        price,
        imagen, 
        stock
    })
    res.status(202).json({ mensaje: 'Producto Guardado'})
}

const getProducts = async (req, res) => {
    const Products = new Products();
    const data = await Products.getProducts();
    console.table(data);
    res.status(200).send(data);
}

const getProductById = async ( req, res) => {
    const id = req.params.id;
    const Products = new Products();
    const data = await Products.getProductById(id);
    if( data ){
        res.status(200).json( data)
    } else {
        res.status(404).json({ mensaje: 'Producto no econtrado'})
    }
}

module.exports = { addProduct, getProducts, getProductById }
