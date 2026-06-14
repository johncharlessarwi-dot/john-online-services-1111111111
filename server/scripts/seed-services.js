const path = require('path');
const Database = require('better-sqlite3');
const fs = require('fs');

const DATA_DIR = path.join(__dirname, '..', 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
const DB_PATH = process.env.DATABASE_PATH || path.join(DATA_DIR, 'db.sqlite');
const db = new Database(DB_PATH);

const services = [
  { slug: 'printing', title: 'Printing & Copying', description: 'Color and B/W printing', price: 1000 },
  { slug: 'heslb', title: 'HESLB Application', description: 'Assistance with HESLB applications', price: 15000 },
  { slug: 'brela', title: 'Business Registration (BRELA)', description: 'Register your business', price: 20000 },
  { slug: 'logo', title: 'Logo Design', description: 'Professional logo design', price: 15000 }
];

db.prepare('CREATE TABLE IF NOT EXISTS services (id INTEGER PRIMARY KEY AUTOINCREMENT, slug TEXT UNIQUE, title TEXT, description TEXT, price INTEGER, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)').run();
const insert = db.prepare('INSERT OR IGNORE INTO services (slug, title, description, price) VALUES (?, ?, ?, ?)');
for (const s of services) insert.run(s.slug, s.title, s.description, s.price);
console.log('Seeded services.');
process.exit(0);
