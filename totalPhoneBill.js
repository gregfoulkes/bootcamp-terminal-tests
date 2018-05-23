
module.exports = function (phone){
  var total = 0;
  var call = 0
  var sms = 0
  var splitBill = phone.split(', ');
for (var i = 0; i<splitBill.length; i++){
	if (splitBill[i].startsWith('c')){
  		call = call+1;
    	}
  else if(splitBill[i].startsWith('s')){
          sms = sms+1
          }
	}

var total= call*2.75 + sms*0.65;
  console.log(total)
return "R"+total.toFixed(2);
}
