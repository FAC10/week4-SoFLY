
var fs = require("fs");
var path = require("path");
var handlers = require("handler.js");

module.exports = function(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}
