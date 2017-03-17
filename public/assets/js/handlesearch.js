//STEP4
var handleOutput = function (err, res) {
  if (err){
    return  Error;
  }

  if (res.searchResults) {
    var dataList = document.getElementById('datalist');
    dataList.innerHTML = '';

    res.searchResults.forEach(function (item) {
      // Create a new <option> element.
      var option = document.createElement('option');
      // Set the value using the item in the JSON array.
      option.value = item;
      dataList.appendChild(option);

    });
  }

};
