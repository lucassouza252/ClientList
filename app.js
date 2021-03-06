'use strict';
//Incluisão de Bibliotecas
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Inclusão de modulos proprios
const config = require('./src/config/config');
const routerApi = require('./src/routes/routerApi');


//Configuração
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
//app.use(cors({origin: '*'}));
app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

/*app.all("/api/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.setHeader('Access-Control-Allow-Credentials', true);
    return next();
});
*/

//Rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/listApp/index.html');
});

app.use('/api', routerApi);

//Inicio de Servidor
app.listen(PORT, function(){
    console.log("Servidor rodando em: localhost:3000");
});
