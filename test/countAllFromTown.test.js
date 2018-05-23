
let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe ('countAllFromTown', function(){

it ('Should return 2 from CL', function(){
  assert.equal(countAllFromTown('CY 28762,CX 34758,CL 29867,CL 32946','CL'),2);
  });
it ('Should return 3 from CY', function(){
  assert.equal(countAllFromTown('CY 28762,CX 34758,CY 29867,CL 32946,CY 698699','CY'),3);
  });
});
