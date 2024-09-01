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
    id : 3,
    stock : 14 
}

const p2 = {
    title : 'Rubor',
    price : 2222,
    id : 4,
    stock : 14 
}



manager.addProduct(p1) 
manager.addProduct(p2) 
console.log(manager)
const productoXID = manager.getProductById(5)
console.log(productoXID)

module.exports = manager;