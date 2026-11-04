const test = require('node:test');
const assert = require('node:assert/strict');
const { createId } = require('../lib/identifiers');
test('creates opaque and unique identifiers', () => {
  const one = createId('ord'), two = createId('ord');
  assert.match(one, /^ord_[a-f0-9]{24}$/);
  assert.notEqual(one, two);
});
test('rejects invalid ID namespaces', () => {
  assert.throws(() => createId('../'));
});
