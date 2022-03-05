const express = require('express');
const { insertCategoria, consultaCategoria, updateCategoria, deleteCategoria } = require('../models/categorias.model');
const router = express.Router();

router.get('/categorias', (req, res) =>{
    consultaCategoria((result)=>{
        res.json(result)
    })
})

router.post('/categorias',(req, res)=>{
    insertCategoria(req.body, (result)=>{
        res.json(result);
    })
})
router.put('/categorias',(req, res)=>{
    console.log(req)
    updateCategoria(req.body, (result)=>{
        res.json(result)
    })
})
router.delete('/categorias/:id',(req, res)=>{
    deleteCategoria(id, (result)=>{
        res.json(result)
    })
})
module.exports =router;