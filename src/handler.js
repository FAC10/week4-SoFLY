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

handler.servePublic = function (request, response) {
  var url = request.url;
  var extension = url.split('.')[1];
  var extensionType = {
    'html': 'text',
    'css': 'text/css',
    'js': 'application/javascript',
  };
  fs.readFile(path.join(__dirname, '..', url), function(error,file){
    if (error) throw error;
    response.writeHead(200, 'Content-Type: extension');
    response.end(file);
  });
};

handler.serveError = function (request, response) {
  response.writeHead(404, 'Content-Type: text/html');
  response.end('404: Page not found');
};
