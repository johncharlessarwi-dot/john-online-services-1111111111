const crypto = require('node:crypto');

function publicRegistrationRole() {
  return 'customer';
}

function requireServerSecret(value, name = 'JWT_SECRET') {
  if (typeof value !== 'string' || value.length < 32 || /^(dev_|your_|change_me)/i.test(value)) {
    throw new Error(name + ' must be configured with a strong unique secret');
  }
  if (value.trim() !== value) throw new Error(name + ' cannot contain leading or trailing whitespace');
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
  if (/[\x00-\x1f\x7f]/.test(email)) throw new Error('Invalid admin email');
  if (!/[A-Za-z]/.test(password) || !/[0-9\W_]/.test(password)) throw new Error('Admin password must use mixed characters');
  return { email, password, id: 'admin_' + crypto.randomBytes(8).toString('hex') };
}

function allowedCorsOrigins(value) {
  if (typeof value !== 'string' || !value.trim()) return [];
  return value.split(',').map(origin => origin.trim()).filter(origin => {
    try {
      const parsed = new URL(origin);
      return (parsed.protocol === 'https:' || (parsed.protocol === 'http:' && ['localhost','127.0.0.1'].includes(parsed.hostname))) &&
        parsed.origin === origin && !parsed.username && !parsed.password;
    } catch { return false; }
  });
}
module.exports = { publicRegistrationRole, requireServerSecret, adminSeedCredentials, allowedCorsOrigins };
