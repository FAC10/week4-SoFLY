var fs = require('fs');
var path = require('path');
var _url = require('url');
var searchFile = require('./searchfile');
var colors = require('./data/colors.json');
var handler = module.exports = {};

handler.serveStatic = function (request, response, page) {
  fs.readFile(path.join(__dirname,'..','public', page), function(err, file){
    if (err) throw err;
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(file);
  });
};

handler.autocomplete = function (request, response, file, inclusiveSearch) {

  response.writeHead(200, {'content-type': 'application/json'});
  var url_parts = _url.parse(request.url, true);
  var searchQuery = url_parts.query;

  searchFile(file, searchQuery.q , 20, inclusiveSearch, (err, res) => {
    response.end(res);
  });

};

handler.autoColor = function (request, response) {

  var url_parts = _url.parse(request.url, true);
  var searchQuery = url_parts.query;

  response.writeHead(200, {'content-type': 'application/json'});

  if (colors[searchQuery.q]){

    var colorsObj = JSON.stringify(colors[searchQuery.q]);
    response.end(colorsObj);
    return;
  }

  var defaultCol = JSON.stringify('#DCDCDC');
  response.end(defaultCol);
};


handler.servePublic = function (request, response) {
  var url = request.url;
  var extension = url.split('.')[1];
  var extensionType = {
    'html': 'text',
    'css': 'text/css',
    'js': 'application/javascript',
  };

  fs.readFile(path.join(__dirname, '..', 'public', url), function(error,file){
    if (error || url.includes('..')) {
      handler.serveError (request, response);
      return;
    }
    response.writeHead(200, {'Content-Type': extensionType[extension]});
    response.end(file);
  });
};

handler.serveError = function (request, response) {
  response.writeHead(404, {'Content-Type': 'text/html'});
  response.end('404: Page not found');
};
