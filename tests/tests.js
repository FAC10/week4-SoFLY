var test = require('tape');
var backendTests = require('./backendtests.js');

test('Check tape is working with a simple passing test', function (t) {
  t.pass('a message to print out on sucess');
  t.end();
});

backendTests();
