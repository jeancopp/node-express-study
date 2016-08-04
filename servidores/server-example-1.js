var http = require('http');

var server = http.createServer(function (request, response) {
    console.log("Que não vai chegar requisição, o que!? ")
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Hello, it's me</h1>");
    response.end();
});



server.listen(3000, () => console.log("Tá saindo da jaula o monstro") );