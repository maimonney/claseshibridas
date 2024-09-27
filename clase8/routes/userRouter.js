const express = require('express');
const router = express.Router();

// Importar controlador
const {creatUser, getUsers, getUsersById, deleteUsersById, updateUsersById} = require('../controllers/userController');

// Retorna todos los usuarios
router.get('/', getUsers);

// Crea los usuarios
router.post('/', creatUser);

//Obtener usuario por Id 
router.get('/:id', getUsersById);

//Eliminamos usuario por ID 
router.delete('/:id', deleteUsersById);

//Actualixar el usuario
router.put('/:id', updateUsersById );


module.exports = router;