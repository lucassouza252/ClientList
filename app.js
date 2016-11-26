'use strict';
//Incluisão de Bibliotecas
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');

//Inclusão de modulos proprios
const config = require('./src/config/config');
const routerApi = require('./src/routes/routerApi');
//const routerView = require('./src/routes/routerView');


//Configuração
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(helmet());
app.use('/angularApp', express.static(__dirname + '/angularApp'));

//Rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/new', function(req, res){
    res.sendFile(__dirname + '/public/new.html');
});

app.use('/api', routerApi);

//Inicio de Servidor
app.listen(PORT, function(){
    console.log("Servidor rodando em: localhost:3000");
});
