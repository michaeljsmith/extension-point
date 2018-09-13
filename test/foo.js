// @flow

var {describe, it} = require('mocha');
var assert = require('assert');

class Foo {
  y: number;

  constructor() {
    this.y = 1;
  }
};

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

