const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/muber',{ useNewUrlParser: true });

app.use(bodyParser.json());//** 1.*/
routes(app);//** 2.*/

module.exports = app;

//request handler listen for incoming HTTP request
//
//first argument is http request path, second is callback. 
//callback has 2 parameter
//
//    app.get('/api',(req,res)=>{});
//    app.post();
//    app.put();
//    app.delete();
//