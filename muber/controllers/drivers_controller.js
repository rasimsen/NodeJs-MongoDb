const Driver = require('../models/driver');

module.exports = {
    greeting(req, res){
        res.send({hi:'there'});
    },

    //to help: mongoosejs.com/docs - geo.location help
    //GeoJSON<Object,Array>
    index(req,res,next){

        const { lng, lat} = req.query;
        //'http://google.com?lng=80&lat=20' : express parsing the url

        Driver.geoNear(
            { type:'Point', coordinates:[lng,lat]},
            { spherical: true, maxDistance: 200000 }//200 km
        )
            .then(drivers => res.send(driver))
            .catch(next);
    },

    create(req,res,next){
        //console.log(req.body);
        //res.send({hi:'there'});
        const driverProps = req.body;

        Driver.create(driverProps)
            .then(driver=>res.send(driver))
            .catch(next);
    },

    edit(req,res,next){
        const driverId=req.params.id;
        const driverProps = req.body;

        Driver.findByIdAndUpdate({_id:driverId}, driverProps)
        .then((driver)=>Driver.findById({_id:driverId}))
        .then(driver=>res.send(deriver))
        .catch(next);

    },

    delete(req,res,next){
        const driverId = req.params.id;

        Driver.findByIdAndRemove({_id:driverId})
            .then(driver=>res.status(204).send(driver))
            .catch(next);
    }


};