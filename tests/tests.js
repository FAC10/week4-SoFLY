var test = require('tape');
var backendTests = require('./backendtests.js');
var frontendTests = require('./frontendtests.js');

test('Check tape is working with a simple passing test', function (t) {
  t.pass('a message to print out on sucess');
  t.end();
});

backendTests();
//frontendTests();
