var fs = require('fs');
var path = require('path');

const searchWord = (filePath, string, numResults, inclusiveSearch, cb) => {
  var newPath = filePath.split('/');
  fs.readFile(path.join(__dirname, 'data', ...newPath), (err, res) => {
    var result = res.toString();
    var startWord = new RegExp('\\b(' + string + ')\\w+', 'gi');
    var wordWithinText = new RegExp('\\b.*' + string + '.*', 'gi');

    var re = startWord;

    if (inclusiveSearch) {
      re = wordWithinText;
    }

    var searchResults = result.match(re);
    searchResults = searchResults ? searchResults.slice(0, numResults) : '';
    cb(null, JSON.stringify({searchResults}));
  });
};

module.exports = searchWord;
