"use strict";

class LivroDAO {

    constructor(conexao){
        this.conexao = conexao;
    }

    listar(callback){
        this.conexao.query("select * from livros",callback);
    }
    
   /* listar(id,callback){
        this.conexao.query("select * from livros where id = ?",[id],callback);
    }
//*/
    gravar(livro,callback){
        this.conexao.query("insert into livros set ?",livro,callback);
    }
}


module.exports = () => LivroDAO;