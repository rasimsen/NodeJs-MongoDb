const Driver = require('../models/driver');

module.exports = {
    greeting(req, res){
        res.send({hi:'there'});
    },

    create(req,res){
        //console.log(req.body);
        //res.send({hi:'there'});
        const driverProps = req.body;

        Driver.create(driverProps)
            .then(driver=>res.send(driver));
    }
};