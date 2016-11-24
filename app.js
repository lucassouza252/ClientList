'use strict';
//Incluisão de Bibliotecas
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Inclusão de modulos proprios
const config = require('./src/config/config');
const router = require('./src/routes/router');

//Configuração
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

//Rotas
app.use('/api', router)

//Inicio de Servidor
app.listen(PORT, function(){
    console.log("Servidor rodando em: localhost:3000");
});
