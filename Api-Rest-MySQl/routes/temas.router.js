const express = require('express');
const { insertTema, consultaTema, updateTema, deleteTema } = require('../models/temas.model');
const router = express.Router();

router.get('/temas', (req, res) =>{
    consultaTema((result)=>{
        res.json(result)
    })
})

router.post('/temas',(req, res)=>{
    insertTema(req.body, (result)=>{
        res.json(result);
    })
})
router.put('/temas',(req, res)=>{
    console.log(req.body)
    updateTema(req.body, (result)=>{
        res.json(result)
    })
})
router.delete('/temas/:id',(req, res)=>{
    deleteTema(id, (result)=>{
        res.json(result)
    })
})
module.exports =router;