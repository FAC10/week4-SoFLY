var handleOutput = function (err, res) {
  if (err) console.log(err);

  document.getElementById('results').innerText = '';

  if (res.searchResults) {
    res.searchResults.forEach(function (e) {
      document.getElementById('results').innerText += e + '\n';
    });
  }

};
