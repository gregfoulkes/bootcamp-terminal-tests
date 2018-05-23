
module.exports = function (year){
  var date = new Date();
  var isYear = date.getFullYear() - year;
  return isYear;
}
