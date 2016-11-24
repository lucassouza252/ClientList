//Configuraçao do MongoDB no MLab

//Inclusão de bibliotecas
const mongoose = require('mongoose');

//Configuração da String de Conexão
const dbURI = 'mongodb://root:root@ds051953.mlab.com:51953/clientlist';


//Conectando ao DB
mongoose.connect(dbURI);

//Mensagens de status da conexão com o banco
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
