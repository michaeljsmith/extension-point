// @flow

const OpenObject = require('./OpenObject.js');

const {describe, it} = require('mocha');
const {assert} = require('chai');

class TestObject extends OpenObject<TestObject> {}

describe('OpenObject', function() {
  describe('getsInitialValue', function() {
    const {object, field} = testField();

    it('should return initial value when first read', function() {
      const result: number = object.get(field);
      assert.equal(result, 100);
    });
  });

  describe('getsSetValue', function() {
    it('should return value from get() that was set in set()', function() {
      const {object, field} = testField();
      object.set(field, 50);
      const result: number = object.get(field);
      assert.equal(result, 50);
    });
  });

  describe('hasTrueIfSet', function() {
    it('should return true if value was initialized', function() {
      const {object, field} = testField();
      object.set(field, 50);
      assert.isTrue(object.has(field));
    });
  });

  describe('hasFalseIfNotSet', function() {
    it('should return false if value was not initialized', function() {
      const {object, field} = testField();
      assert.isFalse(object.has(field));
    });
  });
});

function testField() {
  const object = new TestObject();
  const field: OpenObject.Field<TestObject, number> =
      TestObject.field(object => 100);

  return {object, field};
}
