var fs = require('fs');
/*
 * Exists two ways to read a file with FS module: Sync and Async.
 * 
 * In sync mode, don't forget to pass a callback function, like this:
 * function(error, file){}.
 * 
 * In Async mode, the function will return value, like this way:
 * var fileReaded = fs.readFileSync("complete file path");
 */
/**
 * Default index page 
 */
var indexPagePath = "/public/index.html"
/*
//Async example:
fs.readFile(indexPagePath, function (erro, file) {
    if (erro) throw erro;
    console.log(file);
});
//*/
/*
// Sync example:
var file = fs.readFileSync(indexPagePath);
console.log(file);
//*/

var http = require('http');
var server = http.createServer(function (request, response) {
    // The __dirname is a constant to represent the root directory of application
    fs.readFile( __dirname + indexPagePath, function (err, html) {
        response.writeHeader(200, { 'Content-Type': 'text/html' });
        response.write(html);
        response.end();
    });
    console.log(__dirname + indexPagePath);
});

server.listen(3000,  () => console.log('Server online!') ) ;