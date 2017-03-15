//set up server

var http = require('http');

var port = 8080;

function handleRequest(request, response){
    response.end('It Works!!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(port); 

console.log("Server is listening on port:", port);
