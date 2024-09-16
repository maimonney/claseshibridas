const express = require('express');
const mongoose = require('mongoose')
// Abro desde el navegador http://127.0.0.1:3000/



// Importamos el módulo dotenv
require('dotenv').config();
const {User} = require('./models/usersModels');


// Accedemos a la varible de entorno PORT
const port = process.env.PORT;

//Conectamos a la db
mongoose.connect('mongodb://localhost:27017/app')
const db = mongoose.connection;

db.on('error', () => console.error('Error')); 
db.once('open', ()=> {
    console.log('conexion correcta');
})

// importamos las rutas
const routerAPI = require('./routes');
const app = express();
// Middleware de JSON
app.use( express.json());

app.use((req,res,next) => {
console.log('Soy el middleware');
const body = req.body;
const {email, contraseña}= body;
if(email == 'juan@gmail.com' && contraseña == '1234'){
console.log(body)
next()  
} else{ res.status(403).json({msg:'Error'});}

})

// Ruta Raiz -> Voy a colocar algo de HTML luego
app.get('/users', (req, res) => {
    console.log('Get users')
    res.status(200).json({msg:'holiii'});

})

app.post('/users', async(req, res) => {
    console.log('Post users');
    const body = req.body;
    const user = {
        name : body.name,
        email : body.email,
        contraseña : body.contraseña,
    }
    const myuser = new Model(User);
    res.status(200).json({msg:'holiii'});
    myuser.save();

})

// Llamamos a la rutas
routerAPI(app);
app.listen( port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})