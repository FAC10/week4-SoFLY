const test = require('tape');
const http = require('http');

function backendTest() {

//Test router.js
  const url = 'http://localhost:4000/';

  test('Check landing works', (t) => {
    t.plan(2);
    http.get(url, (res) => {
      t.equal(200, res.statusCode);
      t.equal('text/html', res.headers['content-type']);
    });
  });


//Test autocomplete here
  test('Check autocomplete works', (t) => {
    t.plan(3);
    http.get(url + 'search', (res) => {
      t.equal(200, res.statusCode);
      t.equal('application/json', res.headers['content-type']);
    });
    var searchWord = 'undefined';
    http.get(url + 'search?q=' + searchWord, (res) => {
      var body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', ()=>{
        var { searchResults } = JSON.parse(body);
        t.deepEqual(['undefinedly', 'undefinedness'], searchResults);
      });
    });
  });
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
}

module.exports = backendTest;
