"use strict"


class ConfiguraExpress {

    constructor() {
        this.app = require("express")();
        this.app.set("view engine", "ejs");
        this.app.set("views", "./app/views");

        var load = require("express-load");
        load("routes", { cwd: "app" })
            .then("factory")
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