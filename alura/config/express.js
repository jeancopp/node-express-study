"use strict"


class ConfiguraExpress{
    
    constructor(){
        this.app = require("express")();
        this.app.set("view engine","ejs");
    }
    
    run(port,startFunction){
        return this.app.listen(port,startFunction);    
    }
    
    getServer(){
        return this.app;
    }
    
}


module.exports = new ConfiguraExpress();