let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe ('countAllPaarl', function(){

it ('Should return 1 registration from Paarl', function(){
  assert.equal(countAllPaarl('CJ 786876, CY 070973'),1);
  });
it ('Should return 2 registrations from Paarl', function(){
  assert.equal(countAllPaarl('CJ 786876, CY 070973 ,CJ 079708'),2)
  });
});
