var fs = require('fs');
var path = require('path');

const searchWord = (filePath, string, numResults, cb) => {
  var newPath = filePath.split('/');
  fs.readFile(path.join(__dirname, ...newPath), (err, res) => {
    var result = res.toString();
    var re = new RegExp('\\b(' + string + ')\\w+', 'gi');
    var searchResults = result.match(re);
    searchResults = searchResults ? searchResults.slice(0, numResults) : '';
    cb(null, JSON.stringify({searchResults}));
  });
};

const searchWithinWords = (filePath, string, numResults, cb) => {
  var newPath = filePath.split('/');
  fs.readFile(path.join(__dirname, ...newPath), (err, res) => {
    var result = res.toString();
    var re = new RegExp('\\b.*' + string + '.*', 'gi');
    var searchResults = result.match(re);
    searchResults = searchResults ? searchResults.slice(0, numResults) : '';
    cb(null, JSON.stringify({searchResults}));
  });
};

module.exports = {
  searchWithinWords,
  searchWord
};
