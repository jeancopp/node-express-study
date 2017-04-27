module.exports = function (app) {
    
    app.get('/produtos', function (req, res) {
        var conexao = new app.factory.ConexaoFactory(global.database).criar();
        var livroDao = new app.dao.LivroDAO(conexao);
        
        conexao.connect();
        livroDao.listar(function(err,ret) {
            res.format({
                html : () => res.render("produtos/lista", {lista : ret}),
                json : () => res.json(ret) 
            });
            
        });
        conexao.end();
    });

    app.get('/produtos/form', function (req, res) {
        res.render("produtos/form",{errosValidacao : {}, produto : {} });
    });
    
    app.post("/produtos",function(req,res){
        req.assert('titulo','Titúlo é obrigatório').notEmpty();
        req.assert('preco','Formato inválido').isFloat();


        var erros = req.validationErrors();
        if(erros){
             res.format({
                html : () => res.status(400).render('produtos/form',{errosValidacao: erros, produto: req.body }),
                json : () => res.status(400).json(erros) 
            });
            return;
        }
        
        var conexao = new app.factory.ConexaoFactory(global.database).criar();
        var livroDao = new app.dao.LivroDAO(conexao);

        conexao.connect();
        livroDao.gravar( req.body , function(err,result){
            var ret = {};
            if(err) {
                ret = {
                    html : () => res.status(400).render('produtos/form',{errosValidacao: err, produto: req.body }),
                    json : () => res.status(400).json(err) 
                };
            } else {
                ret = {
                    html : () => res.redirect("/produtos"),
                    json : () => {
                        var livro = req.body;
                        livro.id = result.insertId;
                        res.json(livro);
                    } 
                };
            }

            res.format(ret);
        });
        conexao.end();
    });
}