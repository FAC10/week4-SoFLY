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

var searchRequest = function(val, cb) {
    fetch('/search?q=' + val, handleOutput);

};



var input = (function() {

    var validateInput = function(inputText, cb) {
        if (inputText && !ifSymbols(inputText)) {
            cb(inputText);
        }
    };

    var ifSymbols = function(string) {
        return string.match(/[^a-z]/gi);
    };

    return {
        validateInput: validateInput
    };

})();



var inputDOM = document.getElementById('search-term');
// DOM STUFF BELOW
inputDOM.addEventListener('keyup', function(e) {
    input.validateInput(e.target.value, searchRequest);
});