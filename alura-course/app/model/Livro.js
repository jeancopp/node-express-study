"use strict";

class Livro{
    constructor(titulo, descricao, preco){
        if(!titulo || typeof titulo === "")
            throw "Titulo não pode estar em branco";
        if(!descricao || descricao ==="")
            throw "Descrição não pode estar em branco";
        if(!preco || typeof preco !== "number" || preco < 0.00 )
            throw "Preço inválido";
        
        this.titulo = titulo;
        this.descricao = descricao;
        this.preco = preco;
        
    }
}