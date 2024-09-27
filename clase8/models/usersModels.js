//primero importo mongoose
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//Creo el esquema
const mySchema = new Schema({
        name:String,
        created: {
                type:Date,
                default: Date.now
        },
        email: {
                type: String, 
                require: true,
                unique: true,
        },
        password:{
                type: String, 
                require: true,
                
        }

}); 



const model = mongoose.model('User', mySchema);

//Exporto el model 
module.exports = model; 
