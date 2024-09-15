const { Product } = require('../models/Products');

// Agregar un producto
const addProduct = async (req, res) => {
    const { title, descripcion, price, imagen, stock } = req.body;
    if (!title || !descripcion || !price || !imagen || !stock) {
        return res.status(400).json({ mensaje: 'Faltan parametros' });
    }

    const product = new Product();
    await product.addProduct({
        title,
        descripcion,
        price,
        imagen,
        stock
    });
    res.status(202).json({ mensaje: 'Producto Guardado' });
}

// Obtener todos los productos
const getProducts = async (req, res) => {
    const product = new Product();
    const data = await product.getProducts();
    console.table(data);
    res.status(200).send(data);
}

// Obtener producto por ID
const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = new Product();
    const data = await product.getProductById(id);
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
}

// Actualizar un producto
const updateProduct = async (req, res) => {
    const id = req.params.id;
    const { title, descripcion, price, imagen, stock } = req.body;
    const product = new Product();

    try {
        const existingProduct = await product.getProductById(id);
        if (!existingProduct) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        // Actualizar los campos del producto
        const updatedProduct = {
            title: title || existingProduct.title,
            descripcion: descripcion || existingProduct.descripcion,
            price: price || existingProduct.price,
            imagen: imagen || existingProduct.imagen,
            stock: stock || existingProduct.stock,
        };

        await product.updateProduct(id, updatedProduct);
        res.status(200).json({ mensaje: 'Producto actualizado', updatedProduct });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el producto', error });
    }
}

module.exports = { addProduct, getProducts, getProductById, updateProduct };
