const User = require('../models/usersModels');

const creatUser = async (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email, !password) {
        res.status(200).json( {msg: ' Faltan parametros obligatorios', data : {name, email, password} } )
    }try{
        const newUser = new User({
        name,
        email,
        password
    });
    
    await newUser.save();
    res.status(200).json({msg:'usuario creado', data: newUser}); 
    }catch(error){
        console.error(error);
        res.status(500).json({msg : 'Ups! hubo un error :c ', data: {}})
    }}

    // creo una instacia de modelo (user)


const getUsers = async (req, res) => {
    // Crea la instacia y obtiene datos
    const users = await User.find();
    res.status(200).json({msg: 'ok', data: users});
}

const getUsersById = async(req , res ) => {
    const {id } = req.params;
    try{
    const user = await User.findById(id);
    if(user){
      res.status(200).json({msg: 'Succes ', data: user});  
    } else{
        res.status(404).json({msg : 'Ups! hubo un error :c ', data: {}}) 
    } 
    
    }catch(error){
        console.error(error);
        res.status(500).json({msg : 'Ups! hubo un error :c ', data: {}})
    }
}




//Eliminamos usuario por ID 

const deleteUsersById = async(req , res ) => {
    const {id } = req.params;
    try{
    const user = await User.findByIdAndDelete(id);
    if(user){
      res.status(200).json({msg: 'Succes ', data: user});  
    } else{
        res.status(404).json({msg : 'Ups! hubo un error :c ', data: {}}) 
    } 
    
    }catch(error){
        console.error(error);
        res.status(500).json({msg : 'Ups! hubo un error :c ', data: {}})
    }
}


const updateUsersById = async (req, res ) => {
    const {id } = req.params;
    const {name, email, password} = req.body;
    try{
    const user = await User.findByIdAndUpdate(id , {email , password, name}, {new:true});
    if(user){
    res.status(200).json({msg: 'Succes ', data: user});  
    } else{
        res.status(404).json({msg : 'Ups! hubo un error :c ', data: {}}) 
    } 
    
    }catch(error){
        console.error(error);
        res.status(500).json({msg : 'Ups! hubo un error :c ', data: {}})
    }
}


// Se exporta como objeto porq son varios objetos
module.exports = {creatUser, getUsers, getUsersById , deleteUsersById, updateUsersById};