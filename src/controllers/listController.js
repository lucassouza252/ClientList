//Inclusão do Model
const List = require('../models/list');

//Exportando função find, para 'Read'
//Get: /api/client
module.exports.find = function(query, done){

    List.find(query, done);
};

//Exportando função findId, para 'Read'
//Get: /api/client/:id
module.exports.findId = function(query, done){

    List.findById(query, done);
};

//Exportando função create, para 'Create'
//Post: /api/client
module.exports.create = function(obj, done){

    let list = new List(obj);

    list.save(function(err){
        done(err, list);
    });
};

//Exportando função update, para 'Update'
//Put: /api/client/:id
module.exports.update = function(id, query, done){

    List.findById(id, function(err, client){
        client.name = query.name;
        client.email = query.email;
        client.projectName = query.projectName;
        client.deliveryDate = query.deliveryDate;

        client.save(function(err){
            done(err, client);
        });
    });
};

//Exportando função remove, para 'Delete'
//Delete: /api/client/:id
module.exports.remove = function(id, done){

    List.remove({
        _id: id
    },
    function(err, client){
        done(err, client);
    });
};
