var fetch = function (url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200){
        cb(null, JSON.parse(xhr.responseText));
      } else {
        cb(true);
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};


var input = (function () {

  var watchInput = function (e, cb) {
    if (!ifSymbols(e.target.value)) {
      cb(null, e.target.value);
    }
  };

  var ifSymbols = function (string) {
    return string.match(/[^a-z]/gi);
  };

  return {watchInput:watchInput};

})()



var inputDOM = document.getElementById('search-term');
// DOM STUFF BELOW
inputDOM.addEventListener('keyup', function (e) {
  input.watchInput(e, console.log);
});
