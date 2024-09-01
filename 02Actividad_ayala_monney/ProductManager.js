class ProductManger{
    products = [];
    constructor(products){
        this.products = products
    }

    addProduct(product){
        if(!product.id || !product.title || !product.descripcion || !product.price || !product.imagen|| !product.stock)
        {console.log('El campo es obligatorio') 
    return}
        const existente = this.products.find(producto => producto.id === product.id)
        if(existente){
            console.log('El producto existente')
        }
        else{
        this.products.push(product)
        console.log('El producto cargado correctamente')  
        }
        
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        const productID = this.products.find(producto => producto.id === id)
        if(productID){
        return(productID)
        }
        else{
        console.log('Not found')  
        }
        return
    }
}

    //exporta la clase
module.exports = ProductManger;