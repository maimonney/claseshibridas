const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.URI_BD);
const db = mongoose.connection;

db.on('erro', () => console.error('error'));
db.once('open' , () => {
    console.log('Conexion correcta')
});

module.exports = db;