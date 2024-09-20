const express = require('express');
const router = express.Router();

// Importar controlador
const {creatUser, getUsers} = require('../controllers/userController');

// Retorna todos los usuarios
router.get('/', getUsers);

// Crea los usuarios
router.post('/', creatUser);

module.exports = router;