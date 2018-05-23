module.exports = function(reg,num){
  var fromStellies = [];
    var splitReg = reg.split(',');
    for (var i=0; i<splitReg.length; i ++){
      if(splitReg[i].startsWith(num)){
        fromStellies.push(splitReg[i]);
    		}
    	}
   console.log(fromStellies.length)
   return fromStellies.length;
}
