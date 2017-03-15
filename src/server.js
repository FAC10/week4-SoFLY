var http = require('http');
var fs = require('fs');
var path = require('path');
var router = require('./router.js');

var port = 4000;

var handler = router; //ask Finn why

// function handleRequest(request, response){
//     response.end('It Works!!! Path Hit: ' + request.url);
// }

var server = http.createServer(router);

server.listen(port);

console.log('Server is listening on port:', port);
