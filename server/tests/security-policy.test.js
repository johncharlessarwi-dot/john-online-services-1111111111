const test = require('node:test');
const assert = require('node:assert/strict');
const { publicRegistrationRole, requireServerSecret, adminSeedCredentials } = require('../lib/security-policy');

test('public signups never select administrator roles', () => {
  assert.equal(publicRegistrationRole('admin'), 'customer');
});
test('JWT secrets must be sufficiently strong', () => {
  assert.throws(() => requireServerSecret('dev_secret_change_me'));
  assert.throws(() => requireServerSecret('short'));
  assert.equal(requireServerSecret('StrongUniqueSecretAlpha0123456789!'), 'StrongUniqueSecretAlpha0123456789!');
});
test('admin seed is opt-in with secure credentials', () => {
  assert.equal(adminSeedCredentials({}), null);
  assert.throws(() => adminSeedCredentials({ SEED_ADMIN: 'true', ADMIN_EMAIL: 'admin@local', ADMIN_PASSWORD: 'Admin@123' }));
  assert.match(adminSeedCredentials({ SEED_ADMIN: 'true', ADMIN_EMAIL: 'admin@example.com', ADMIN_PASSWORD: 'SufficientlyLongPassphrase1' }).id, /^admin_[0-9a-f]{16}$/);
});
