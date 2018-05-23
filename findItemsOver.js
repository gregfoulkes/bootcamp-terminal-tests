module.exports = function(list,threshold){
	var empty = []
  for (var i=0; i<list.length;i++){
  	var emp = list[i]
  if (emp.qty>threshold){
    empty.push(emp)
 console.log(emp)
  		}
  	}
return empty;
}
