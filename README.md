# John Online Services — Full Project

This repository contains a static frontend and a lightweight Node/Express backend with a minimal admin UI.

Structure
- `index.html` — frontend single-file app with uploader and WhatsApp flow
- `styles.css` — frontend styles
- `server/` — Express backend, SQLite fallback, Cloudinary signing, admin UI

Quick start (dev)

1. Start the server

```powershell
cd "c:\Users\HP PROBOOK\OneDrive\Desktop\john online services 1111111111\server"
npm install
node index.js
```

2. Seed services (optional)

```powershell
npm run seed
```

3. Open the frontend

Open `index.html` in the browser (or serve via a static server). Access admin at `http://localhost:4000/admin` (default admin seeded: `admin@local` / `Admin@123`).

Docker

Build and run the server image:

```powershell
cd server
docker build -t john-online-server .
docker run -p 4000:4000 --env-file .env -d john-online-server
```

Next steps (recommended)
- Add Cloudinary credentials in `server/.env` and remove unsigned preset from the frontend.
- Move from SQLite to Supabase/Postgres for production and enable RLS + Supabase Studio.
- Add HTTPS and secrets management (Vault, GitHub Secrets).
