'use strict';
//Inclusão de Bibliotecas
const express = require('express');

//Inclusão de Modulos Proprios
const listController = require('../controllers/listController');

//Configuração
const router = express.Router();

//Inicio de Configuração das Rotas
//Get: /api/client
router.get('/client', function(req, res){
    listController.find(req.query, function(err, entry){
        if(err){
            throw err;
            res.status(500).json(err);
        }
        else{
            res.status(200).json(entry);
        }
    })
});

//Get: /api/client/:id
router.get('/client/:id', function(req, res){
    listController.findId(req.params.id, function(err, entry){
        if(err){
            throw err;
            res.status(500).json(err);
        }
        else{
            res.status(200).json(entry);
        }
    })
});

//Post: /api/client
router.post('/client', function(req, res){
    listController.create(req.body, function(err, entry){
        if(err){
            throw err;
            res.status(500).json(err);
        }
        else{
            res.status(200).json(entry);
        }
    });
});

//Put: /api/client/:id
router.put('/client/:id', function(req, res){
    listController.update(req.params.id, req.body, function(err, entry){
        if(err){
            throw err;
            res.status(500).json(err);
        }
        else{
            res.status(200).json(entry);
        }
    });
});

//Delete: /api/client/:id
router.delete('/client/:id', function(req, res){
    listController.remove(req.params.id, function(err, entry){
        if(err){
            throw err;
            res.status(500).json(err);
        }
        else{
            res.status(200).json(entry);
        }
    });
});

module.exports = router;
