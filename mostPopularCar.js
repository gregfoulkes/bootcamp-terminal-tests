module.exports = function (cars){
  	var map = {}
	var name = ''

  	for (var i = 0;i<cars.length;i++){
    var carList = cars[i]
    if(map[carList.make] == undefined){
      map[carList.make] = 0
    }
    map[carList.make] = map[carList.make]+1
  	}

  	var max = 0;

    for (var key in map){
      if(map[key] > max){
        max = map[key];
        name = key;
		    }
    }
 console.log(name);
 return name;
}
