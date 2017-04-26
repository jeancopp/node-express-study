
var server = require('./test-server');
var request = require('supertest')(server);

describe('#ProdutosController', function(){
    it('#listagem json',function(done){
        request.get("/produtos")
            .set('Accept','application/json')
            .expect('Content-type',/json/)
            .expect(200, done);
               
    });
});