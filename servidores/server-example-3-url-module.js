var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    var result = url.parse(request.url, true);
    
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Data of string query</h1><br/><h2>"+JSON.stringify(result)+"</h2>");
    console.log(JSON.stringify(result));
    for (var key in result.query) {
        response.write("<h2>" + key + " : " + result.query[key] + "</h2>");
    }
    
    response.end();
});

server.listen(3000, () => console.log('Servidor http.') );