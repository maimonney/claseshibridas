const fs = require('fs/promises');
const crypto = require('crypto');
class Product {
    path = '';
    
    constructor(path='data/products.json'){
        this.path = path;
    }

    async addProduct(product) {
        const { title, descripcion, price, imagen, stock } = product;
        const id = crypto.randomUUID();
        const data = await fs.readFile(this.path, 'utf-8');
        const array = JSON.parse(data);
        array.push({
            title: title,
            descripcion: descripcion,
            price: price,
            imagen: imagen,
            id: id,
            stock: stock
        });
        const dataStr = JSON.stringify(array, null, 2);
        await fs.writeFile(this.path, dataStr, 'utf-8');
    }
    
    async getProducts() {
        const data = await fs.readFile(this.path, 'utf-8');
        return JSON.parse(data);
    }

    async getProductById(id) {
        const data = await fs.readFile(this.path, 'utf-8');
        const array = JSON.parse(data);
    
        const numericId = Number(id); 
        const product = array.find(product => product.id === numericId);
    
        console.log('Producto encontrado:', product);
    
        return product;
    }
    
    async updateProduct(id, updatedProduct) {
        const data = await fs.readFile(this.path, 'utf-8');
        const array = JSON.parse(data);
        const index = array.findIndex(product => product.id === id);
    
        if (index !== -1) {
            array[index] = { ...array[index], ...updatedProduct };
            await fs.writeFile(this.path, JSON.stringify(array, null, 2), 'utf-8');
        }
}}


module.exports = { Product }