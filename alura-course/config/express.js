"use strict"


class ConfiguraExpress {

    constructor() {
        this.app = require("express")();
        this.app.set("view engine", "ejs");
        this.app.set("views", "./app/views");

        var bodyParser = require('body-parser');
        var validator = require("express-validator");

        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        this.app.use(bodyParser.json());
        this.app.use(validator());


        var load = require("express-load");
        load("routes", { cwd: "app" })
            .then("factory")
            .then("model")
            .then("dao")
            .into(this.app);

    }

    run(port, startFunction) {
        return this.app.listen(port, startFunction);
    }

    getServer() {
        return this.app;
    }

}


module.exports = new ConfiguraExpress();