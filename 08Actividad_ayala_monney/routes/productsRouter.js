const express = require('express');
const router = express.Router();
const { getProducts, getProductById, addProduct, updateProduct } = require('../controllers/productsController');

// Obtener todos los productos
router.get('/', getProducts);

// Obtener producto por ID
router.get('/:id', getProductById);

// Crear producto
router.post('/', addProduct);

// Actualizar producto
router.put('/:id', updateProduct); 

module.exports = router;
