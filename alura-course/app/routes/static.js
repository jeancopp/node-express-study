module.exports = function (app) {
    app.get('/', function (req, res) {
        var conexao = new app.factory.ConexaoFactory(global.database).criar();
        var livroDao = new app.dao.LivroDAO(conexao);
        
        conexao.connect();
        livroDao.listar(function(err,ret) {
            if(err) {
                next(err);
            }else 
                res.format({
                    html : () => res.render('home/index', { livros: ret }),
                    json : () => res.json(ret) 
                });
            
        });
        conexao.end();
    });
}