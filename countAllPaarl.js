module.exports = function (reg) {
 var paarl = [];
 var splitReg = reg.split(',');
 for (var i = 0; i<splitReg.length; i =1 + i){
   var regTrim = splitReg[i].trim();
   if (regTrim.startsWith('CJ')){
 	paarl.push(regTrim);
   }
  }
  console.log(paarl)

  return paarl.length;
}
