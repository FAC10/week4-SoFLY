var fetch = function(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                cb(null, JSON.parse(xhr.responseText));
            } else {
                cb(true);
            }
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
};
// MAKE THIS A MODULE SO WE CAN HAVE A HIDDEN VARIABLE THAT CHECKS VAL
// AGAINST PREV SO IT WONT SEND DUPLICATE REQUESTS
var searchRequests = (function () {

  var prevResult = '';
  
  return function (val, cb) {
    if (val) {
      fetch('/search?q=' + val, handleOutput);
    } else {
      handleOutput(null, '');
    }
  };

})();



var validateInput = (function () {

  var ifSymbols = function(string) {
        return string.match(/[^a-z]/gi);
  };

  return function (inputText, cb) {
    if (inputText && !ifSymbols(inputText)) {
      cb(inputText);
    } else {
      cb();
    }
  };

})();



var inputDOM = document.getElementById('search-term');
// DOM STUFF BELOW
inputDOM.addEventListener('keyup', function(e) {
    input.validateInput(e.target.value, searchRequest);
});