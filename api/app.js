const express = require("express");
const mysql = require("mysql");
const categoria = require('./routes/categoria.router')
const subcategoria = require('./routes/subcategoria.router')
const temas = require('./routes/temas.router')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Llamamos a las rutas
app.use(categoria)
app.use(subcategoria)
app.use(temas)





const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log("Servidor corriendo en el puerto ", port)
});