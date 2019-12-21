import chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
import request = require('supertest');
import {App} from '../../app';
const _app = new App();

describe('POST /contact',()=>{
    before(done=>{
        _app.databaseSetup()
        .then(()=>done())
        .catch(err=>done(err));
    })
    after(done=>{
        _app.disconnectDatabase()
        .then(()=>done())
        .catch(err=>done(err));
    })
    //  * Postitive Test
    it('Creating a new Contact (Proper)',(done)=>{
        const data = {
            firstname: "Ayush",
            lastname: "Mahajan",
            email: "mahajan.ayush2306@gmail.com",
            phone: "8700803518"
        };
        request(_app.app).post('/contact')
        .send(data)
        .then((res)=>{
            const body = res.body;
            expect(body).to.contain.property('success');
            assert(body.success,true);
            expect(body).to.contain.property('message');
            done();
        })
        .catch(err=>done(err));
    })

    //  * Postitive Test

    it('Creating a new Contact without Phone Number',(done)=>{
        const data = {
            firstname: "Ayush",
            lastname: "Mahajan",
            email: "mahajan.ayush2306@gmail.com"
        };
        request(_app.app).post('/contact')
        .send(data)
        .then((res)=>{
            const body = res.body;
            expect(body).to.contain.property('success');
            expect(body).to.contain.property('message');
            done();
        })
        .catch(err=>done(err));
    })

    // ! Negative Test

    it('Creating a new Contact without firstname',(done)=>{
        const data = {
            lastname: "Mahajan",
            email: "mahajan.ayush2306@gmail.com",
            phone: "8700803518"
        };
        request(_app.app).post('/contact')
        .send(data)
        .then((res)=>{
            const body = res.body;
            expect(body.error).to.equal('"firstname" is required');
            done();
        })
        .catch(err=>done(err));
    })
})