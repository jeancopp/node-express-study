"use strict";


class Conexao{

    constructor(configuration){
        var mysql = require("mysql");
        this.conexao = mysql.createConnection(configuration);
    }

    getConnection(){
        return this.conexao;
    }
    
}

module.exports = () => { return Conexao; } ;