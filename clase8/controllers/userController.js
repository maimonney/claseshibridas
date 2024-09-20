const User = require('../models/usersModels');

const creatUser = async (req, res) => {
    const {name, email, password} = req.body;

    // creo una instacia de modelo (user)
    const newUser = new User({
        name,
        email,
        password
    });
    
    await newUser.save();
    res.status(200).json({msg:'usuario creado', data: newUser});
}

const getUsers = async (req, res) => {
    // Crea la instacia y obtiene datos
    const users = await User.find();
    res.status(200).json({msg: 'ok', data: users});
}

// Se exporta como objeto porq son varios objetos
module.exports = {creatUser, getUsers};