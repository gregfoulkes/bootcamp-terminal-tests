let assert = require("assert");
let isWeekday = require("../isWeekday");

describe ('isWeekday',function(){

it ('Should return true if weekday', function (){
  assert.equal(isWeekday('Monday'),true)
  });
it ('Should return false if not weekday', function (){
  assert.equal(isWeekday('Saturday'),false)
  });
});
