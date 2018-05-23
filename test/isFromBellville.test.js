let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe ('isFromBellville', function() {

it ('returns true if reg from Bellville',function() {
 assert.equal(isFromBellville('CY 246543'), true);
  });
it ('returns false if reg not from Bellville', function(){
  assert.equal(isFromBellville('CA 243243'), false);
  });
});
