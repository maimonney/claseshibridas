const express = require('express');
// Abro desde el navegador http://127.0.0.1:3000/


// Importamos el módulo dotenv
require('dotenv').config();

// Accedemos a la varible de entorno PORT
const port = process.env.PORT;

// importamos las rutas
const routerAPI = require('./routes');
const app = express();
// Middleware de JSON
app.use( express.json());

// Ruta Raiz -> Voy a colocar algo de HTML luego
app.get('/', (req, res) => {
    res.status(200).send('<h1> API REST </h1>');
})

// Llamamos a la rutas
routerAPI(app);
app.listen( port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})