var test = require('tape');
var http = require('http');

function backendTest() {

  test('Check landing works', (t) => {
    t.plan(1);
    http.get('http://localhost:4000/', (res) => {
      t.equal(200, res.statusCode);
    });
  });


//Router.js
//
//Test landing here
//
//
//
//Test autocomplete here
//
//
//
//Test public here
//
//
//
//Test 404 here
//
//
//
//Handler.js
//
//Test serveLanding
//
//
//
//Test serveAutocomplete
//(breakout Autocomplete into pieces)
//
//
//
//Test servePublic
//
//
//
//Test serveError
//
//
//
}

module.exports = backendTest;
