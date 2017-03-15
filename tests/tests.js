require("fs").readFile('./words.txt', function(err, filecontent) {
    if (err){
        throw err;
      }
    console.log((filecontent.toString().match(/(va)\w+/g)))
});
