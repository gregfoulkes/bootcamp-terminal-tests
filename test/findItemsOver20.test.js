let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe ('findItemsOver20', function(){

  it ('Should return [{"name":"pears","qty":37},{"name":"bananas","qty":27}]', function(){
    assert.deepEqual(findItemsOver20([{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}]), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
  });
  it ('Should return [{"name":"oranges","qty":42}]', function(){
    assert.deepEqual(findItemsOver20([{name : 'bananas', qty : 19}, {name : 'oranges', qty : 42},]), [{"name":"oranges","qty":42}]);
  });
});
