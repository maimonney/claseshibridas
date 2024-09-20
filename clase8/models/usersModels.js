//primero importo mongoose
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//Creo el esquema
const mySchema = new Schema({
        name:String,
        email:String,
        password:String

}); 



const model = mongoose.model('User', mySchema);

//Exporto el model 
module.exports = model; 
