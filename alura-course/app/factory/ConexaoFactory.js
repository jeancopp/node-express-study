"use strict";


class ConexaoFactory{

    constructor(configuration){
        var mysql = require("mysql");
        this.conexao = mysql.createConnection(configuration);
    }

    criar(){
        return this.conexao;
    }
    
}

module.exports = () =>  ConexaoFactory ;