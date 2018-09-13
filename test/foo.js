// @flow

var {describe, it} = require('mocha');
//var assert = require('assert');
var {assert} = require('chai');

class Foo {
  y: number;

  constructor() {
    this.y = 1;
  }

  getY() {
    return this.y;
  }
};

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('Foo', () => {
  describe('#getY', () => {
    it('should have y=1', () => {
      const foo = new Foo();
      assert.equal(foo.getY(), 1);
    });
  })
});