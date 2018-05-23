let assert = require("assert");
let fromWhere = require("../fromWhere");

describe ('fromWhere', function(){
  it ('Should return Paarl', function(){
    assert.equal(fromWhere('CJ 986987'),'Paarl')

  });
  it ('Should return Cape Town', function(){
    assert.equal(fromWhere('CA 986987'),'Cape Town')

  });
  it ('Should return Some other place', function(){
    assert.equal(fromWhere('GP 69679'),'Some other place!')

  });
  it ('Should return Bellville', function(){
    assert.equal(fromWhere('CY 986987'),'Bellville')

  });
});
