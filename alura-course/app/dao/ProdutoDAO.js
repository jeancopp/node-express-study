"use strict";

class ProdutoDAO{

    constructor(conexao){
        this.conexao = conexao;
    }

    listar(callback){
        this.conexao.query("select * from livro",callback);
    }
    
    listar(id,callback){
        this.conexao.query("select * from livro where ",callback);
    }

}


module.exports = ProdutoDAO;