/**
 * Page of error request
 */
var errorPage = "/public/error.html";
/**
 * Default page
 */
var defaultPage = "/artigos";

var http = require('http');
var url = require('url');
var fs = require('fs');

var afterReadFile = function (response) {
    return (err, html) => {
        response.writeHeader(200, { 'Content-Type': 'text/html' });
        response.end(html);
    };
};


var server = http.createServer(function (request, response) {
    
    var result = url.parse(request.url, true);
    console.log("Request pathname:" + result.pathname);
    
    var fileToRead = result.pathname;
    var callback = afterReadFile(response);
    
    if(fileToRead === "/favicon.ico") return afterReadFile(response)(null,"");
    
    
    fileToRead = fileToRead == "/" ? defaultPage : fileToRead;
    fileToRead = __dirname  + "/public" + fileToRead + ( !fileToRead.endsWith(".html") ? ".html" : "");
    console.log(fileToRead);
    if ( !fs.existsSync(fileToRead) ) {
        console.log("Not found file!\n\t Return:" + errorPage);
        fs.readFile(__dirname + errorPage, callback);
    } else {
        console.log("Found file!\n\t Return:" + fileToRead);
        fs.readFile(fileToRead, callback);
    }
    console.log("File:" + fileToRead);
    
});

server.listen(3000, () => console.log('Server online!'));