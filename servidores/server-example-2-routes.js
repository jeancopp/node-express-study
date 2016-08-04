var http = require('http');

var server = http.createServer(function (request, response) {
    if (!request.url) {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write("<h1>Página não encontrada </h1>");
    } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        if (request.url == "/") {
            response.write("<h1>Principal page!</h1>");
        } else if (request.url == "/bemvindo") {
            response.write("<h1>Welcome!</h1>");
        } else {
            response.write("<h1>Página não encontrada </h1>");
        }
        response.end();
    }
});

server.listen(3000, () => console.log('Servidor rodando!'));