QUnit.module( 'Frontend', function (assert) {
  // write your tests here
  QUnit.test('If 1, return 1', function(assert) {

    assert.equal(1, 1, 'Success: 1 does equal 1');
  });

  QUnit.test('Check if validateInput converts a string with special characters to undefined',function(assert){
    validateInput('%^&*', function(string){assert.equal(string, undefined);});
  });

  QUnit.test('Check if validateInput returns a string with alphabet characters',function(assert){
    validateInput('Istring', function(string){assert.equal(string, 'Istring');});
  });
  QUnit.test('Check if handleOutput returns an error when we pass in an argument in the first parameter', function(assert){
    assert.equal(handleOutput('a'), Error, 'Yes, function returns error');
  });

  QUnit.test('Check if getColorCode returns an error when we pass in an argument in the first parameter', function(assert){
    assert.equal(getColorCode('a'), 'There is an error', 'Yes, function returns error');
  });

  QUnit.test('Check if the fetch function return a callback with the argument true, when the apicall doesnt complete', function(assert){

    fetch(9, function(l){assert.equal(l, true, 'Yes the callback returns true as its argument')});

  });


});
