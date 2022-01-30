const express = require("express")
const ruta = express.Router();

//const Cursos = require('../models/cursos_model');

ruta.get('/', (req, res)=>{
    res.json('Rutas de cursos echo')
})



module.exports = ruta;

