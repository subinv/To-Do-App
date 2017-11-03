

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setup-controller');
var apiController = require('./controllers/api-controller');

//need tp serve the dist as the angular will bundled by webpack compiled to js so we need to give that path
app.use(express.static(__dirname + '/public/dist'));


//set connection to moongose db it will be connected always
mongoose.connect(config.getDbConnection(),(err,db) => {
    if (err) return console.log(err);

    console.log("connected");
});
//mongoose.connect(config.getDbConnection(), { useMongoClient: true });
//mongoose.connection.openUri();

//it will add endpoint check for dev
setupController(app);
apiController(app);


let port =  process.env.PORT || 3000;
app.listen(port);