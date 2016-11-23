//Inclusão de Bibliotecas
const mongoose = require('mongoose');

//Exportando Model List
module.exports = mongoose.model('List', {
    'name': String,
    'email': String,
    'registred_at': { type: Date, default: Date.now},
    'nameProject': String
});
