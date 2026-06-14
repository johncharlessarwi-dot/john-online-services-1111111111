const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { createClient } = require('@supabase/supabase-js');
const cloudinary = require('cloudinary').v2;
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json({ limit: '20mb' }));

const PORT = process.env.PORT || 4000;

// Supabase client (optional)
let supabase = null;
if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
  supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
}

// Cloudinary config (for signed uploads)
if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

// Local SQLite fallback
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
const DB_PATH = process.env.DATABASE_PATH || path.join(DATA_DIR, 'db.sqlite');
const db = new Database(DB_PATH);

// Initialize schema from file if present
const schemaPath = path.join(__dirname, 'schema.sql');
if (fs.existsSync(schemaPath)) {
  const sql = fs.readFileSync(schemaPath, 'utf8');
  db.exec(sql);
}

// Ensure admin user table has at least one user (optional seed)
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';
function findUserByEmail(email) {
  return db.prepare('SELECT id, email, name, role, password FROM users WHERE email = ?').get(email);
}
function createUser({ id, email, name, role, password }) {
  const hashed = bcrypt.hashSync(password, 10);
  const stmt = db.prepare('INSERT OR IGNORE INTO users (id, email, name, role) VALUES (?, ?, ?, ?)');
  stmt.run(id, email, name, role);
  // store password in a separate simple table if needed
  try {
    db.prepare('ALTER TABLE IF NOT EXISTS user_passwords (id TEXT PRIMARY KEY, user_id TEXT, password TEXT)').run();
  } catch (e) {}
  try {
    db.prepare('CREATE TABLE IF NOT EXISTS user_passwords (id TEXT PRIMARY KEY, user_id TEXT, password TEXT)').run();
  } catch (e) {}
  db.prepare('INSERT OR REPLACE INTO user_passwords (id, user_id, password) VALUES (?, ?, ?)').run(id + '_pwd', id, hashed);
  return { id, email, name, role };
}
function verifyPasswordForUser(user, password) {
  if (!user) return false;
  const row = db.prepare('SELECT password FROM user_passwords WHERE user_id = ?').get(user.id);
  if (!row) return false;
  return bcrypt.compareSync(password, row.password);
}

// Seed an admin user for convenience if none exists (dev-only)
(function seedAdmin(){
  try{
    const admin = db.prepare("SELECT id FROM users WHERE role = 'admin' LIMIT 1").get();
    if (!admin) {
      const id = 'admin_1';
      const email = process.env.ADMIN_EMAIL || 'admin@local';
      const name = process.env.ADMIN_NAME || 'Administrator';
      const password = process.env.ADMIN_PASSWORD || 'Admin@123';
      db.prepare('INSERT OR IGNORE INTO users (id, email, name, role) VALUES (?, ?, ?, ?)').run(id, email, name, 'admin');
      try{ db.prepare('CREATE TABLE IF NOT EXISTS user_passwords (id TEXT PRIMARY KEY, user_id TEXT, password TEXT)').run(); }catch(e){}
      const hashed = bcrypt.hashSync(password, 10);
      db.prepare('INSERT OR REPLACE INTO user_passwords (id, user_id, password) VALUES (?, ?, ?)').run(id+'_pwd', id, hashed);
      console.log('Seeded admin user:', email, 'password:', password);
    }
  }catch(e){console.warn('seedAdmin failed',e)}
})();

// Serve static admin UI
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
app.use('/admin-static', express.static(publicDir));

// Simple helper to persist an order (Supabase if configured, otherwise SQLite)
async function saveOrder(payload) {
  if (supabase) {
    const { data, error } = await supabase.from('orders').insert(payload).select();
    if (error) throw error;
    return data[0];
  } else {
    const id = payload.id || (`ord_${Date.now()}`);
    const stmt = db.prepare(`INSERT INTO orders (id, customer_name, customer_phone, service_id, total, status, created_at) VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`);
    stmt.run(id, payload.customer_name || null, payload.customer_phone || null, payload.service_id || null, payload.total || 0, payload.status || 'pending');
    if (Array.isArray(payload.items)) {
      const up = db.prepare(`INSERT INTO uploads (id, order_id, filename, url, mime, size, created_at) VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`);
      const insert = db.transaction((items) => {
        for (const it of items) up.run(it.id || `upl_${Date.now()}`, id, it.filename, it.url, it.mime, it.size || 0);
      });
      insert(payload.items);
    }
    return { id };
  }
}

app.get('/api/health', (req, res) => res.json({ ok: true }));

// Get services (from Supabase if available, otherwise a small static list / SQLite)
app.get('/api/services', async (req, res) => {
  try {
    if (supabase) {
      const { data, error } = await supabase.from('services').select('*').order('id', { ascending: true });
      if (error) throw error;
      return res.json(data);
    }
    const rows = db.prepare('SELECT id, slug, title, description, price FROM services ORDER BY id ASC').all();
    if (rows.length) return res.json(rows);
    // fallback static
    return res.json([
      { id: 1, slug: 'printing', title: 'Printing & Copying', description: 'Color and B/W printing', price: 1000 },
      { id: 2, slug: 'typing', title: 'Document Typing', description: 'Professional typing & formatting', price: 500 },
    ]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'server error' });
  }
});

// Services CRUD (admin)
app.post('/api/services', requireAdmin, (req, res) => {
  try {
    const { slug, title, description, price } = req.body;
    if (!title) return res.status(400).json({ error: 'title required' });
    if (supabase) {
      supabase.from('services').insert({ slug, title, description, price }).then(r => res.json({ ok: true, data: r.data }));
      return;
    }
    const stmt = db.prepare('INSERT INTO services (slug, title, description, price) VALUES (?, ?, ?, ?)');
    const info = stmt.run(slug || null, title, description || null, price || 0);
    res.json({ ok: true, id: info.lastInsertRowid });
  } catch (err) { console.error(err); res.status(500).json({ error: err.message }); }
});

app.put('/api/services/:id', requireAdmin, (req, res) => {
  try {
    const id = req.params.id; const { slug, title, description, price } = req.body;
    if (supabase) { supabase.from('services').update({ slug, title, description, price }).eq('id', id).then(r=>res.json({ok:true,data:r.data})); return }
    db.prepare('UPDATE services SET slug = ?, title = ?, description = ?, price = ? WHERE id = ?').run(slug || null, title, description || null, price || 0, id);
    res.json({ ok: true });
  } catch (err) { console.error(err); res.status(500).json({ error: err.message }); }
});

app.delete('/api/services/:id', requireAdmin, (req, res) => {
  try {
    const id = req.params.id;
    if (supabase) { supabase.from('services').delete().eq('id', id).then(r=>res.json({ok:true})); return }
    db.prepare('DELETE FROM services WHERE id = ?').run(id);
    res.json({ ok: true });
  } catch (err) { console.error(err); res.status(500).json({ error: err.message }); }
});

// Delete order (admin)
app.delete('/api/orders/:id', requireAdmin, (req, res) => {
  try {
    const id = req.params.id;
    if (supabase) { supabase.from('orders').delete().eq('id', id).then(r=>res.json({ok:true})); return }
    db.prepare('DELETE FROM uploads WHERE order_id = ?').run(id);
    db.prepare('DELETE FROM orders WHERE id = ?').run(id);
    res.json({ ok: true });
  } catch (err) { console.error(err); res.status(500).json({ error: err.message }); }
});


// Auth endpoints
app.post('/api/auth/register', (req, res) => {
  try {
    const { email, name, password, role } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'email+password required' });
    const existing = findUserByEmail(email);
    if (existing) return res.status(400).json({ error: 'user exists' });
    const id = `user_${Date.now()}`;
    createUser({ id, email, name: name || null, role: role || 'customer', password });
    res.json({ ok: true, id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;
    const user = findUserByEmail(email);
    if (!user) return res.status(401).json({ error: 'invalid credentials' });
    if (!verifyPasswordForUser(user, password)) return res.status(401).json({ error: 'invalid credentials' });
    const token = jwt.sign({ sub: user.id, role: user.role, email: user.email }, JWT_SECRET, { expiresIn: '12h' });
    res.json({ ok: true, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

function requireAdmin(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'missing token' });
  const token = auth.slice(7);
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    if (payload.role !== 'admin') return res.status(403).json({ error: 'admin required' });
    req.user = payload;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'invalid token' });
  }
}

// Create an order
app.post('/api/orders', async (req, res) => {
  try {
    const payload = req.body;
    const order = await saveOrder(payload);
    res.json({ ok: true, order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'failed to save order' });
  }
});

// Admin: update order status
app.put('/api/orders/:id/status', requireAdmin, (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;
    if (!status) return res.status(400).json({ error: 'status required' });
    if (supabase) {
      supabase.from('orders').update({ status }).eq('id', id).then(r => res.json({ ok: true, data: r.data }));
      return;
    }
    db.prepare('UPDATE orders SET status = ? WHERE id = ?').run(status, id);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Serve simple admin app
app.get('/admin', (req, res) => {
  res.sendFile(path.join(publicDir, 'admin.html'));
});


// Cloudinary signing endpoint (server signs timestamp for secure uploads)
app.post('/api/sign-cloudinary', (req, res) => {
  try {
    if (!cloudinary.config().api_secret) return res.status(400).json({ error: 'Cloudinary not configured on server' });
    const timestamp = Math.floor(Date.now() / 1000);
    // sign minimal params (timestamp)
    const signature = cloudinary.utils.api_sign_request({ timestamp }, cloudinary.config().api_secret);
    res.json({ signature, api_key: cloudinary.config().api_key, timestamp, cloud_name: cloudinary.config().cloud_name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'signing error' });
  }
});

// Lightweight file for debugging: list recent orders
app.get('/api/orders', (req, res) => {
  try {
    if (supabase) return supabase.from('orders').select('*').then(r => res.json(r.data || []));
    const rows = db.prepare('SELECT id, customer_name, customer_phone, total, status, created_at FROM orders ORDER BY created_at DESC LIMIT 100').all();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
