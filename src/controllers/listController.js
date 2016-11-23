//Inclusão do Model
const List = require('../models/list');

module.exports.find = function(query, done){

    List.find(query, done);
};

module.exports.create = function(obj, done){

    let list = new List(obj);

    list.save(function(err){
        done(err, list);
    });
};
