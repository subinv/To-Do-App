//seed data - adding initial data to a database for development purpose
var Todos = require('../models/todo-model');

module.exports = function (app) {

    app.get('/api/setupTodos',function (req,res) {
        //seed db
        //json.generator.com for dummy json creation for large data
        var starterTodos = [
            {
                username: 'test',
                todo : 'Learn NodeJS',
                isDone : false,
                hasAttachment:false
            },
            {
                username: 'test',
                todo : 'Learn Angular',
                isDone : false,
                hasAttachment:false
            }
        ];
        Todos.create(starterTodos,function (err,result) {
            if (err) throw err;
            //send the data back to client
           res.send(result);
        });
    });
};