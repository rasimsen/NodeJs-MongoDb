const assert = require('assert');
//you can use SuperTest which is can be used to test HTTP endpoints.
const request = require('supertest');
const app=require('../app');


describe('The express app',()=>{
    it('handles a GET request to /api', (done)=>{
        request(app)
            .get('/api') // or .post(),.put(),.delete()
            .end((err,response)=>{
                //console.log(response);
                assert(response.body.hi === 'there');
                done();
            });
    });
});