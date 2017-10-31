var Todos = require('../models/todo-model');
var bodyParser = require('body-parser');

module.exports = function (app) {
  //send the data nicely to api so use middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/api/todo/:uname',function (req,res) {
      Todos.find({username:req.params.uname},function (err,todos) {
          if (err) throw err;

          res.send(todos);
      })
  });

  app.get('/api/todo/:id',function (req,res) {
      Todos.findById({_id:req.params.id},function (err,todo) {
          if (err) throw err;

          res.send(todo);
      });
  });

  app.post('/api/todo',function (req,res) {
      if (req.body.id){
          Todos.findByIdAndUpdate(req.body.id,{
              todo:req.body.todo,isDone: req.body.isDone, hasAttachment:req.body.hasAttachment
          },function (err,todo) {
              if (err) throw err;

              res.send("Succes");
          });
      }else {
          // craete a new
          var newTodo = Todos({
              username : "username",
              todo : req.body.todo,
              isDone : req.body.isDone,
              hasAttachment:req.body.hasAttachment
          });
          newTodo.save(function (err) {
              if (err) throw err;

              res.send("Succes");
          });
      }
  });

  app.delete('/api/todo',function (req,res) {
      Todos.findByIdAndRemove(req.body.id,function (err) {
          if (err) throw err;

          res.send("Succes");
      })
  });
};

