var fs = require('fs');

// var stream = fs.createReadStream('./words.txt');

// var found = false;
//
// stream.on('data',function(d){
//   if(!found) found=!!(''+d).match("ve");
//   console.log(found);
// });
// stream.on('error',function(err){
//     then(err, found);
// });
// stream.on('close',function(err){
//     then(err, found);
// });


fs.readFile('./words.txt', (err, res) => {
  var result = res.toString();

  var index = result.match(/\b(agen)\w+/gi).slice(0, 10);
  console.log(index);
});
