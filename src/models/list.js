//Inclusão de Bibliotecas
const mongoose = require('mongoose');

//Exportando Model List
//Fiels são as validações de cada campo
module.exports = mongoose.model('List', {
    'name': require('./ListFields/fieldName'),
    'email': require('./ListFields/fieldEmail'),
    'registred_at': require('./ListFields/fieldRegistred_at'),
    'deliveryDate': require('./ListFields/fieldDeliveryDate'),
    'projectName': require('./ListFields/fieldProjectName')
});
