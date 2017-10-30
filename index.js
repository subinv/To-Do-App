"use strict"

let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

let port =  process.env.PORT || 3010;
app.listen(port);