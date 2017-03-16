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
var validateInput = require('../public/assets/js/index.js');


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

test('Check if validateInput returns a string with alphabet characters',function(t){
  validateInput('Istring', function(string){t.equal(string, 'Istring')})
  t.end();
})

test('Check if validateInput converts a string with special characters to undefined',function(t){
  validateInput('%^&*', function(string){t.equal(string, undefined)})
  t.end();
})
