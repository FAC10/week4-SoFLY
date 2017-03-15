var http = require('http');
var router = require('./router.js');

var port = 4000;

var server = http.createServer(router);

server.listen(port);

console.log('Server is listening on port:', port);
