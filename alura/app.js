/**
 * Lemos as configurações padrões, que ficaram dispostas no package.json
 */
var serverOptions = require("./package.json").server;

console.log("Lendo arquivo de callback do serviço:" + serverOptions.startFunction)
var startFunction = require(serverOptions.startFunction);

console.log("Lendo arquivo de configuração do app:" + serverOptions.startFunction)
var app = require(serverOptions.configuration);

console.log("Configurando as rotas: " + serverOptions.routingFile);
require(serverOptions.routingFile)(app.getServer());

console.log("Inicializando o servidor - Porta : " + serverOptions.port);
app.run(serverOptions.port,startFunction);