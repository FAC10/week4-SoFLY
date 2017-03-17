const test = require('tape');
const http = require('http');
const searchFile = require('../src/searchfile.js');

function backendTest() {

//Test router.js/handler.js
  const url = 'http://localhost:4000/';
//Test landing here
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

    var searchWord = 'Brick';
    http.get(url + 'search?q=' + searchWord, (res) => {
      var body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', ()=>{
        var { searchResults } = JSON.parse(body);
        t.deepEqual(['Brick Red'], searchResults);
      });
    });
  });


//Test public here
  test('Check urls starting with \'assets\' return files', (t) => {
    t.plan(5);
    http.get(url + 'blahblah/assets', (res) => {
      t.equal(404, res.statusCode);
    });

    http.get(url + 'assets', (res) => {
      t.equal(404, res.statusCode);
    });

    http.get(url + 'assets/indfsf.html', (res) => {
      t.equal(404, res.statusCode);
    });

    http.get(url + 'assets/../../src/server.js', (res) => {
      t.equal(404, res.statusCode);
    });

    http.get(url + 'assets/css/style.css', (res) => {
      t.equal(200, res.statusCode);
    });
  });

//Test 404 here
  test('Check broken link redirects to 404', (t) => {
    t.plan(1);
    http.get(url + 'thisisnotreal', (res) => {
      t.equal(404, res.statusCode);
    });
  });

//Test serveAutocomplete
  test('does searchfile function work', (t) => {
    t.plan(1);
    searchFile('../../tests/testfile.txt', 'ab', 3, false, (err, res) => {
      var r = JSON.parse(res);
      t.deepEqual(['abatable', 'abate', 'abatement'], r.searchResults);
    });
  });

}

module.exports = backendTest;
