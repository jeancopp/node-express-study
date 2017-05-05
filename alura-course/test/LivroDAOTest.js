
var server = require('./test-server');
var request = require('supertest')(server);

describe('#ProdutosController', function(){
    beforeEach(function(done) {
            var connection = server.infra.connectionFactory();            
            connection.query("delete from livros", function(ex,result){
                if(!ex){
                    done();
                }
            });
    });

    it('#listagem json',function(done){
        request.get("/produtos")
            .set('Accept','application/json')
            .expect('Content-type',/json/)
            .expect(200, done);
               
    });

    it('#cadastro de produto com dados inválidos', function(done){
        request.post("/produtos")
            .send({
                titulo : "",
                descricao : "novo produto"
            }).expect(400, done);
    });
    
    it('#cadastro de produto com dados válidos', function(done){
        request.post("/produtos")
            .send({
                titulo : "produto de teste"
                ,descricao : "novo produto"
                ,preco: 20.50
            }).expect(302, done);
    });
    
});