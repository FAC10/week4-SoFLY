var fs = require('fs');
var path = require('path');
var _url = require('url');
var searchFile = require('./searchfile');
var handler = module.exports = {};

handler.serveLanding = function (request, response) {
  fs.readFile(path.join(__dirname,'..','public', 'index.html'), function(err, file){
    if (err) throw err;
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(file);
  });
};

handler.autocomplete = function (request, response) {

  response.writeHead(200, {'content-type': 'application/json'});
  var url_parts = _url.parse(request.url, true);
  console.log(url_parts);
  var searchQuery = url_parts.query;

  searchFile('words.txt', searchQuery.q , 10, (err, res) => {
    response.end(res);
  });
  // fs.readFile(path.join(__dirname, 'words.txt'), (err, res) => {
  //   var result = res.toString();
  //   var re = new RegExp('\\b(' + searchQuery.q + ')\\w+', 'gi');
  //   var searchResults = result.match(re);
  //   searchResults = searchResults ? searchResults.slice(0, 10) : '';
  //   response.end(JSON.stringify({searchResults}));
  // });

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
