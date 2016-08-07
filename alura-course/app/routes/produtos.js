module.exports = function (app) {
    
    app.get('/produtos', function (req, res) {
        Conexao = app.factory.conexao;
        var conexao = new Conexao(global.database).getConnection();
        conexao.query("select * from livros", function(err,ret){
            res.render("produtos/lista",{lista : ret});
        });
        conexao.end();
    });
    app.get('/produtos/form', function (req, res) {
        res.render("produtos/form");
    });
    
}