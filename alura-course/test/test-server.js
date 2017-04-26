
var package = require("../package.json");
var serverOptions = package.serverDev;
global.database = package.database;
var app = require("../" + serverOptions.configuration);
var server = app.getServer();
require("../" + serverOptions.routingFile)(server);
app.run(serverOptions.port,() => {});

module.exports = server;