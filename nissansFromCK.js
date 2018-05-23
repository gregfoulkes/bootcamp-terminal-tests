module.exports = function (cars){
  var map = {}
  var name = ''

  for (var i = 0; i<cars.length;i++){
  var carList = cars[i];
    var reg = carList.reg_number
    if(map[carList.make] == undefined){
      map[carList.make] = 0
     }

    if(reg.startsWith('CK') && carList.make == 'Nissan' ){
	  var count = 0
      count = count+1
    //map[carList.make]+1 //= map[carList.make]+1
      console.log(count)
		    }
  	}
      console.log(count)
  return count
}
