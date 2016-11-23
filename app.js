'use strict';
//Incluisão de Bibliotecas
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Inclusão de modulos proprios
const config = require('./src/config/config');
const listController = require('./src/controllers/listController');

//Configuração
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

//Rotas
app.get('/', function(req, res){
    listController.find(req.query, function(err, entry){
        if(err){
            console.log(err);
            res.status(500).json(err);
        }
        else{
            res.status(200).json(entry);
        }
    })
});

app.post('/', function(req, res){
    listController.create(req.body, function(err, entry){
        if(err){
            console.log(err);
            res.status(500).json(err);
        }
        else{
            res.status(200).json(entry);
        }
    });
});

//Inicio de Servidor
app.listen(PORT, function(){
    console.log("Servidor rodando em: localhost:3000");
});
