const crypto = require('node:crypto');

function publicRegistrationRole() {
  return 'customer';
}

function requireServerSecret(value, name = 'JWT_SECRET') {
  if (typeof value !== 'string' || value.length < 32 || /^(dev_|your_|change_me)/i.test(value)) {
    throw new Error(name + ' must be configured with a strong unique secret');
  }
  if (/^(.)\1+$/.test(value)) throw new Error(name + ' cannot contain repeated characters only');
  return value;
}

function adminSeedCredentials(env) {
  if (env.SEED_ADMIN !== 'true') return null;
  const email = env.ADMIN_EMAIL;
  const password = env.ADMIN_PASSWORD;
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof password !== 'string' || password.length < 16) {
    throw new Error('Admin seeding requires explicit email and 16+ character password');
  }
  return { email, password, id: 'admin_' + crypto.randomBytes(8).toString('hex') };
}

module.exports = { publicRegistrationRole, requireServerSecret, adminSeedCredentials };
