let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe ('countRegNumber', function(){
  it ('Should return 4 registration plates', function(){
  assert.equal(countRegNumber('CA 354654, CY 54654, ND 565544, CX 69698'),4);
  });
  it('Should return 3 registration plates', function(){
  assert.equal(countRegNumber('CA 354654, CY 54654, ND 565544'),3);
  });
});
