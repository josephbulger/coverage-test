var assert = require('assert');
var mr = require('mock-require');

mr('../../src/deps/database', {
  query: async function(collection, criteria) {
      return { hello: "world" };
  }
});

var dal = require('../../src/scenario1/dal');



describe('scenario1: good way to isolate external dependencies', function() {
  describe('mocking your database calls', function() {
    it('should not be slow', function() {
      return dal.getVideo(123).then((result) => {        
        assert.deepEqual(result, { hello: 'world' });
      });
    });
    it('should call using the right parameters', function() {
      assert.ok(true);
    });
  });
});
  
  