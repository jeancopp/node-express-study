"use strict"

var express = require("express");
var bodyParser = require('body-parser');
var validator = require("express-validator");

class ConfiguraExpress {

    constructor() {
        this.app = express();
        this.app.set("view engine", "ejs");
        this.app.set("views", "./app/views");


        this.app.use(express.static('./app/public'));
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

        this.app.use(function (req, res, next) {
            res.status(404).render("erros/404");
        });

        this.app.use(function (error, req, res, next) {
            if (process.env.NODE_ENV == 'production') {
                res.status(500).render('errors/500');
                return;
            }
            next(errors);
        });

    }

    run(port, startFunction) {
        var http = require('http').Server(this.app);
        var io = require('socket.io')(http);

        this.app.set('io', io);
        return http.listen(port, startFunction);
    }

    getServer() {
        return this.app;
    }

}


module.exports = new ConfiguraExpress();