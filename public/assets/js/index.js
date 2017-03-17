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

//STEP3
//handleOutput IN HANDLESEARCH.JS
var searchRequests = (function () {

  var prevResult = '';

  return function (val) {
    if (val!==prevResult) {
      fetch('/search?q=' + val, handleOutput);
    } else {
      handleOutput(null, '');
    }
    prevResult=val;
  };

})();



var validateInput = (function () {

  var ifSymbols = function(string) {
    return string.match(/[^a-z]/gi);
  };
//STEP2
  return function (inputText, cb) {
    if (inputText && !ifSymbols(inputText)) {
      cb(inputText);
    } else {
      cb();
    }
  };

})();

function submitColor(formValue, callback) {
  if (formValue) {
    fetch('/color?q=' + formValue, callback);
  } else {
    callback(null, '');
  }
}

function getColorCode (err, res){
  if (err){
    return 'There is an error';
  }
  if (res){
    document.body.style.backgroundColor = res;
    document.querySelector('.header__heading').style.color = invertColor(res);
  }

}
function invertColor(hexTripletColor) {
  var color = hexTripletColor;
  color = color.substring(1);           // remove #
  color = parseInt(color, 16);          // convert to integer
  color = 0xFFFFFF ^ color;             // invert three bytes
  color = color.toString(16);           // convert to hex
  color = ('000000' + color).slice(-6); // pad with leading zeros
  color = '#' + color;                  // prepend #
  return color;
}


var inputDOM = document.getElementById('search-term');
var form = document.getElementById('form');

//STEP1
inputDOM.addEventListener('keyup', function(e) {
  validateInput(e.target.value, searchRequests);
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  submitColor(e.target[0].value, getColorCode)
});
