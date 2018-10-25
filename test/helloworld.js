var assert = require('assert');
var helloWorld = require('../src/helloworld');

describe('helloworld', function() {
  describe('#proclaim', function() {
    it('should give me the right message', function() {
      assert.equal(helloWorld.proclaim(), "hello out there!");
    });
  });
});
