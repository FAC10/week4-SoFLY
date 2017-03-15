var fs = require('fs');
var path = require('path');
var handler = require('./handler.js');

module.exports = function(request, response){
  var url = request.url;

  if (url === '/') {
    handler.serveLanding(request, response);
  } else if (url.indexOf('public') !== -1) {
    var extension = url.split('.')[1];
    var extensionType = {
      'html': 'text',
      'css': 'text/css',
      'js': 'application/javascript',
    };
    fs.readFIle(path.join(__dirname, '..', '..', url), function(error,file){
      if (error) throw error;
      response.writeHead(200, 'Content-Type: extension');
      response.end(file);
    });
  } else {
    response.writeHead(404, 'Content-Type: text/html');
    response.end('<h2>404: Page not found</h2>');
  }
};
