let assert = require("assert");
let regCheck = require("../regCheck");

describe ('regCheck',function(){
  it ('returns true if reg from Cape Town', function(){
    assert.equal(regCheck('64646454 GP','GP'),true);
  });
  it('returns false if reg not from Cape Town', function(){
    assert.equal(regCheck('CA 989878','GP'),false)
  });
});
