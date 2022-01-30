const mongoose = require('mongoose');

const usuariosShema = mongoose.Schema(
    {
        email:{
            type:String,
            require: true
        },
        nombre:{
            type:String,
            require: true
        },
        pasword:{
            type:String,
            require: true
        },
        estado:{
            type:String,
            default: true
        },
        imagen:{
            type:String,
            require: true
        }
});

module.exports = mongoose.model('Usuarios', usuariosShema)

