var fs = require('fs');
var path = require('path');
var handler = require('./handler.js');

module.exports = function(request, response){
  var url = request.url;

  var page = {
    '/' : 'index.html',
    '/dictionary' : 'dictionary.html'
  }[url];

  if (page) {
    handler.serveStatic(request, response, page);

  } else if (url.indexOf('/searchword') === 0) {
    handler.autocomplete(request, response, 'words.txt', false);

  } else if (url.indexOf('/search') === 0) {
    handler.autocomplete(request, response, 'colors.txt', true);

  } else if (url.indexOf('/color') === 0) {
    handler.autoColor(request, response);

  } else if (url.indexOf('/assets') === 0) {
    handler.servePublic(request, response);

  } else {
    handler.serveError(request, response);

  }
};
