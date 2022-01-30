const express = require('express');
const mongoose = require('mongoose');

const usuarios = require('./routes/usuarios');
const cursos = require('./routes/cursos');



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/usuarios', usuarios)
app.use('/api/cursos', cursos)

mongoose.connect('mongodb://localhost:27017/demo')
    .then(() => console.log('Se esta ejecutado MonogoBD'))
    .catch(err => console.log('No se pudo conectar ha MongoBD',err))


app.listen(port, () => {
    console.log("Api ResFull Corriendo Puerto"+port);
})


