 module.exports = function (salesData){
 var dataMap = {}
 var max = 0;
 var name = '';
	for(var i=0;i<salesData.length; i++){
      var saleList = salesData[i];
      if (dataMap[saleList.department] === undefined){
      	dataMap[saleList.department] =  0
      }
     dataMap[saleList.department] += saleList.sales
  	}
	for (var key in dataMap){
      if(dataMap[key] > max){
      max = dataMap[key];
      name = key
   	 }
 	}
 console.log(name)
 return name;
}
