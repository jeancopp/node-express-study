module.exports = function (app) {
    app.get('/promocoes/form', function (req, res) {
        var conexao = new app.factory.ConexaoFactory(global.database).criar();
        var livroDao = new app.dao.LivroDAO(conexao);
        
        conexao.connect();
        livroDao.listar(function(err,ret) {
            if(err) {
                next(err);
            }else 
                res.format({
                    html : () => res.render('promocoes/form', { livros: ret }),
                    json : () => res.json(ret) 
                });
            
        });
        conexao.end();
    });
    app.post("/promocoes",function(req,res){
        var promocao = req.body;
        app.get('io').emit('novaPromocao',promocao);
        res.redirect('promocoes/form');
    });
}

