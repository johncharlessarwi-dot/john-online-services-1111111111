const { randomBytes } = require('node:crypto');
function createId(prefix) {
  if (typeof prefix !== 'string' || !/^[a-z]{2,8}$/.test(prefix)) throw new TypeError('Invalid ID prefix');
  return prefix + '_' + randomBytes(12).toString('hex');
}
module.exports = { createId };
