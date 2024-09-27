// Importa las rutas
const userRouter = require('./userRouter');

function routerAPI(app){
    // Definimos los endPoint
    app.use('/api/users', userRouter);
}

module.exports = routerAPI;