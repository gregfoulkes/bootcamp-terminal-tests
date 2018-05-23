let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe ('findItemsOver', function(){

  it ('Should return [{"name":"pears","qty":37}]', function(){

    assert.deepEqual(findItemsOver([{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}], 30),[{"name":"pears","qty":37}]);
  });
  it ('Should return [{"name":"oranges","qty":27}]', function(){

    assert.deepEqual(findItemsOver([{name : 'oranges', qty : 27}, {name : 'pears', qty : 3}], 15),[{"name":"oranges","qty":27}]);
  });
});
