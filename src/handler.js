var fs = require('fs');
var path = require('path');

var handler = module.exports = {};

handler.serveLanding = function (request, response) {
  fs.readFile(path.join(__dirname,'..','public', 'index.html'), function(err, file){
    if (err) throw err;
    response.writeHead(200, 'Content-Type: text/html');
    response.end(file);
  });
};
