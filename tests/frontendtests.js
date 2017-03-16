//handlesearch.js
//
//Test when a given an object to handleOutput, it outputs option elements to the DOM
//
//
//index.js
//
//Test `input`
//

var test = require('tape');
var handleOutput = require('../public/assets/js/handlesearch.js');


test('Check if tape is working with simple test', function(t){
  console.log(handleOutput);
  t.pass(1, 1, 'Check 1 is equal to 1');
  t.end();


});

test('Check if handleOutput returns an error when we pass in an error', function(t){
  console.log(handleOutput);
  t.equal(handleOutput('a'), Error, 'Yes, function returns error');
  t.end();


});
