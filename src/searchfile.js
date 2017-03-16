var fs = require('fs');
var path = require('path');

module.exports = (filePath, string, numResults, cb) => {
  var newPath = filePath.split('/');
  fs.readFile(path.join(__dirname, ...newPath), (err, res) => {
    var result = res.toString();
    var re = new RegExp('\\b(' + string + ')\\w+', 'gi');
    var searchResults = result.match(re);
    searchResults = searchResults ? searchResults.slice(0, numResults) : '';
    cb(null, JSON.stringify({searchResults}));
  });
};
