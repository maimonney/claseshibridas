//primero importo mongoose
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//Creo el esquema
const mySchema = new Schema({
    nombre:{
        type:String,
        required: true  
    },
    email:{
        type:String,
        required: true
    },
    contraseña:{
        type:String,
        required: true  
    }
}); 



const model = mongoose.model('User', mySchema);

//Exporto el model 
module.exports = model; 
