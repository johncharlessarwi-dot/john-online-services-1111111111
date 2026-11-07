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

test('rejects name with newline control character', () => {
  assert.throws(() => validateOrderInput({ ...valid, customer_name: 'John\nDoe' }));
});

test('rejects arrays as order payloads', () => {
  assert.throws(() => validateOrderInput([valid]));
});

test('rejects Date object as order payload', () => {
  assert.throws(() => validateOrderInput(new Date()));
});

test('rejects unsolicited attachment metadata', () => {
  assert.throws(() => validateOrderInput({ ...valid, items: [] }));
});

test('rejects client-supplied order ID', () => {
  assert.throws(() => validateOrderInput({ ...valid, id: 'ord_fake' }));
});

test('rejects client-supplied creation time', () => {
  assert.throws(() => validateOrderInput({ ...valid, created_at: '2026-01-01' }));
});

test('rejects surprise order fields', () => {
  assert.throws(() => validateOrderInput({ ...valid, role: 'admin' }));
});

test('rejects out-of-range order totals', () => {
  assert.throws(() => validateOrderInput({ ...valid, total: 100_000_001 }));
});

test('rejects fractional service IDs', () => {
  assert.throws(() => validateOrderInput({ ...valid, service_id: 1.2 }));
});

test('rejects short customer phone numbers', () => {
  assert.throws(() => validateOrderInput({ ...valid, customer_phone: '+25512' }));
});

test('rejects excessively long customer phone numbers', () => {
  assert.throws(() => validateOrderInput({ ...valid, customer_phone: '1234567890123456' }));
});

test('rejects excessive customer name length', () => {
  assert.throws(() => validateOrderInput({ ...valid, customer_name: 'A'.repeat(121) }));
});

test('accepts canonical service slugs', () => {
  assert.equal(validateOrderInput({ ...valid, service_id: 'printing_2026' }).service_id, 'printing_2026');
});
