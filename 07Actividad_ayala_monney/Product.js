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
            id: id,
            title: title,
            descripcion: descripcion,
            price: price,
            imagen: imagen,
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
        return array.find(product => product.id === id);
    }
}


module.exports = { Product }