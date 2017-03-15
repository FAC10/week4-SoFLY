var fs = require('fs');
var path = require('path');
var handler = require('./handler.js');

module.exports = function(request, response){
  var url = request.url;
  if (url === '/') {
    handler.serveLanding(request, response);

  } else if (url.includes('/search')){
    handler.autocomplete(request, response);
  }

  else if (url.indexOf('assets') !== -1) {
    handler.servePublic(request, response);
  }

  else {
    handler.serveError(request, response);
  }
};
