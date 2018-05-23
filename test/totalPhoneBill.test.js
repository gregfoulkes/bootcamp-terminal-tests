let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe ('totalPhoneBill', function(){
  it ('Should return R9.55',function(){
    assert.equal(totalPhoneBill('call, call, sms, call, sms'),"R9.55");
  });
  it ('Should return R11.65',function(){
    assert.equal(totalPhoneBill('call, call, call, call, sms'),"R11.65");
  });
});
