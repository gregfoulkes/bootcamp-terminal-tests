let assert = require("assert");
let mostWordsEndWith = require("../mostWordsEndWith");

describe ('mostWordsEndWith', function(){
  it ('Should return t', function(){
    assert.equal(mostWordsEndWith('Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.'), 't');
  });
});
