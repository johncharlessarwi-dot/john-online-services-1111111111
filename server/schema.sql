-- Simple schema for John Online Services
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT,
  name TEXT,
  role TEXT DEFAULT 'customer',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE,
  title TEXT,
  description TEXT,
  price INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  customer_name TEXT,
  customer_phone TEXT,
  service_id INTEGER,
  total INTEGER,
  status TEXT DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS uploads (
  id TEXT PRIMARY KEY,
  order_id TEXT,
  filename TEXT,
  url TEXT,
  mime TEXT,
  size INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
