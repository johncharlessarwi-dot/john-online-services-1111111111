const test = require('node:test');
const assert = require('node:assert/strict');
const { validateOrderInput } = require('../lib/order-input');
const valid = { customer_name: 'John', customer_phone: '+255698170989', service_id: 1, total: 5000 };
test('accepts bounded customer order data', () => {
  assert.equal(validateOrderInput(valid).status, 'pending');
});
test('rejects forged status and invalid money', () => {
  assert.throws(() => validateOrderInput({ ...valid, status: 'completed' }));
  assert.throws(() => validateOrderInput({ ...valid, total: -1 }));
  assert.throws(() => validateOrderInput({ ...valid, total: 1.5 }));
});
test('rejects malformed names and numbers', () => {
  assert.throws(() => validateOrderInput({ ...valid, customer_name: '' }));
  assert.throws(() => validateOrderInput({ ...valid, customer_phone: 'abc' }));
});

test('rejects service ID zero', () => {
  assert.throws(() => validateOrderInput({ ...valid, service_id: 0 }));
});

test('rejects negative numeric service ID', () => {
  assert.throws(() => validateOrderInput({ ...valid, service_id: -2 }));
});

test('rejects empty slug service ID', () => {
  assert.throws(() => validateOrderInput({ ...valid, service_id: '' }));
});

test('rejects service slug with whitespace', () => {
  assert.throws(() => validateOrderInput({ ...valid, service_id: 'print job' }));
});

test('rejects service slug with URL delimiters', () => {
  assert.throws(() => validateOrderInput({ ...valid, service_id: 'print/../../admin' }));
});
