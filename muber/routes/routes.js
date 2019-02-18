const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {

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

// Watch for incoming requests of methos GET
// to the route http://localhost:3050/api
//app.get('/api',(req,res)=>{
//    res.send({hi:'there'});
//});

app.get('/api',DriversController.greeting);

app.post('/api/drivers',DriversController.create);

app.put('/api/drivers/:id', DriversController.edit);

app.delete('/api/drivers/:id', DriversController.delete);

app.get('/api/drivers',DriversController.index);

};