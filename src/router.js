var fs = require('fs');
var path = require('path');
var handler = require('./handler.js');

module.exports = function(request, response){
  var url = request.url;
  if (url === '/') {
    handler.serveLanding(request, response);
  } else if (url.indexOf('assets') !== -1) {
    var extension = url.split('.')[1];
    var extensionType = {
      'html': 'text',
      'css': 'text/css',
      'js': 'application/javascript',
    };
    fs.readFile(path.join(__dirname, '..', 'public', url), function(error,file){
      if (error) throw error;
      response.writeHead(200, {'Content-Type': extensionType[extension]});
      response.end(file);
    });
  } else if (url.includes('/search')){
    handler.autocomplete(request, response);
  }
  else {
    response.writeHead(404, 'Content-Type: text/html');
    response.end('<h2>404: Page not found</h2>');
  }
};
