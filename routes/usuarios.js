const express = require("express");
const res = require("express/lib/response");
const ruta = express.Router();

const Usuarios = require('../models/usuario_model');

//GET

ruta.get('/', (req, res)=>{
    let resultado =  listarUsuarios();
    resultado.then(usuario => {
        res.json(usuario)
    })
})

async function listarUsuarios(){
    let usuarios = await Usuarios.find({"estado" : true});
   return usuarios;
}

//POST

ruta.post('/',(req, res) => {
    let body =req.body;
    let resultado = crearUsuario(body);
    console.log(req.body)

    resultado.then(user => {
        res.json({
            valor: user
        })
    }).catch(err => {
        res.status(400).json({
            error: err
        })

    })
})

async function crearUsuario(body){
    let usuario = new Usuarios({
        email : body.email,
        nombre : body.nombre,
        password : body.password,
    })
    return await usuario.save();
}

//PUT

ruta.put('/:email',(req, res) =>{
    let resultado = actualizarUsuario(req.params.email, req.body)

    resultado.then(valor =>{
        res.json({
            valor: valor
        })
    }).catch(err =>{
        res.status(400).json({
            error: err
        })
    })
})

async function actualizarUsuario(email, body){
    let usuario = await Usuarios.findOneAndUpdate(email, {
        $set: {
            nombre: body.nombre,
            password: body.password
        }
    },{new: true})
    return usuario;
} 

//DELETE

ruta.delete('/:email',(req, res)=>{
    let resultado = desactivarUsuario(req.params.email);
    resultado.then(valor =>{
        console.log("www")
        res.json({
            usuario: valor
        })
    })
    .catch(err =>{
        res.status(400).json({
            error:err
        })
    })
})

async function desactivarUsuario(email){    
    let usuario = await Usuarios.findOneAndUpdate(email,{
        $set: {
            estado: false
        }
    }, {new: true})
    return usuario;
}

module.exports = ruta;


