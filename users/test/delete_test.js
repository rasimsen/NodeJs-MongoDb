const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user',()=>{
    let joe;

    beforeEach((done)=>{
        joe = new User({name:'Joe'});
        joe.save()
        .then((result) => {
            done();
        }).catch((err) => {
            console.log('delete:error in beforeEach!');
        });
    });

    it('model instance remove',(done)=>{
        joe.remove()//it remove joe instance that we created in beforeEach method
        .then(() => User.findOne({name:'Joe'}))//to test that the object deleted, it should return null
        .then((user)=>{//then: they work sequentially
            assert(user === null);
            done();
        })
        ;
    });

    it('class method remove',(done)=>{
        //remove a bunch of records with some given criteria
        User.remove({ name:'Joe' })
        .then(()=>User.findOne({name:'Joe'}))
        .then((user)=>{
            assert(user === null);
            done();
        });
    });
 
    it('class method findAndRemove',(done)=>{
        User.findOneAndRemove({name:'Joe'})
        .then(()=>User.findOne({name:'Joe'}))
        .then((user)=>{
            assert(user === null);
            done();
        });
    });

    it('class method findByIdAndRemove',(done)=>{
        User.findByIdAndRemove(joe._id)
        .then(()=>User.findOne({name:'Joe'}))
        .then((user)=>{
            assert(user === null);
            done();
        });
    });


});