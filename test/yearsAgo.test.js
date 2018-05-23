let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('yearsAgo', function(){
  it ('Should count 42 years ago', function(){
    assert.equal(yearsAgo(1976),42);
  });
  it ('Should return 40 years ago', function(){
    assert.equal(yearsAgo(1978),40);
  });
  it ('Should return 42 years ago', function(){
    assert.notEqual(yearsAgo(1969),42)
  });
});
