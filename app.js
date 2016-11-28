'use strict';
//Incluisão de Bibliotecas
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');

//Inclusão de modulos proprios
const config = require('./src/config/config');
const routerApi = require('./src/routes/routerApi');


//Configuração
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(helmet());
app.use(express.static(__dirname + '/listApp'));
//app.use(express.static(__dirname + '/public'));

//Rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/listApp/index.html');
});

app.use('/api', routerApi);

//Inicio de Servidor
app.listen(PORT, function(){
    console.log("Servidor rodando em: localhost:3000");
});
