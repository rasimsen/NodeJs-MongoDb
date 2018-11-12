const mongoose = require('mongoose');


//only one time runs for whole test
//done added for sync.callback
before((done)=>{
    mongoose.connect('mongodb://localhost:27017/users_test',{ useNewUrlParser: true });
    mongoose.connection
    .once('open',()=>{
            done();
        })
    .on('error',(error)=>{
        console.warn('Warning',error);
    });    
});

//before each test methods run, it runs, it drops tables at the beginning.
//by default, js is async. that why we should add callback to code below
//otherwise below method can complete after test methods that can be problem
beforeEach((done)=>{
    mongoose.connection.collections.users.drop(()=>{
        //Ready to run next the next test
        done();
    });
});

