const MAX_TZS = 100_000_000;
function validateOrderInput(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new TypeError('Order payload must be an object');
  if (Object.getPrototypeOf(input) !== Object.prototype && Object.getPrototypeOf(input) !== null) throw new TypeError('Order payload must be a plain object');
  const customerName = typeof input.customer_name === 'string' ? input.customer_name.trim() : '';
  const customerPhone = typeof input.customer_phone === 'string' ? input.customer_phone.trim() : '';
  if (customerName.length < 2 || customerName.length > 120) throw new RangeError('Invalid customer name');
  if (/[\x00-\x1f\x7f]/.test(customerName)) throw new RangeError('Invalid customer name');
  if (!/^\+?[0-9]{9,15}$/.test(customerPhone)) throw new RangeError('Invalid phone number');
  if (!Number.isSafeInteger(input.service_id) && typeof input.service_id !== 'string') throw new RangeError('Invalid service');
  if (Number.isSafeInteger(input.service_id) && input.service_id <= 0) throw new RangeError('Invalid service');
  if (typeof input.service_id === 'string' && !/^[a-z0-9_-]{1,60}$/i.test(input.service_id)) throw new RangeError('Invalid service');
  if (typeof input.service_id === 'string' && input.service_id.length === 0) throw new RangeError('Invalid service');
  if (!Number.isSafeInteger(input.total) || input.total < 0 || input.total > MAX_TZS) throw new RangeError('Invalid total');
  if (input.status !== undefined && input.status !== 'pending') throw new RangeError('Customer cannot choose order status');
  if (input.items !== undefined) throw new RangeError('Attachments require a separate authorized flow');
  return { customer_name: customerName, customer_phone: customerPhone, service_id: input.service_id, total: input.total, status: 'pending' };
}
module.exports = { validateOrderInput };
