const assert = require('assert');
const User = require('../src/user');


describe('Creating records',()=>{
    it('saves a user',(done)=>{ //<------------ 1.callback 
        const joe = new User({ name: 'Joe'});
        
        //joe.save();
        joe.save()
        .then((result) => {
            //Has joe been saved successfully?
            assert(!joe.isNew);
            done(); //<------------------- 2.callback: we should use 
        }).catch((err) => {
            console.log('Error');
        });

    });
});