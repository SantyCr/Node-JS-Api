const express = require('express');
const { insertSubcategoria, consultaSubcategoria, updateSubcategoria, deleteSubcategoria } = require('../models/subcategorias.model');
const router = express.Router();

router.get('/subcategorias', (req, res) =>{
    consultaSubcategoria((result)=>{
        res.json(result)
    })
})

router.post('/subcategorias',(req, res)=>{
    insertSubcategoria(req.body, (result)=>{
        res.json(result);
    })
})
router.put('/subcategorias',(req, res)=>{
    console.log(req.body)
    updateSubcategoria(req.body, (result)=>{
        res.json(result)
    })
})
router.delete('/subcategorias/:id',(req, res)=>{
    deleteSubcategoria(id, (result)=>{
        res.json(result)
    })
})
module.exports =router;