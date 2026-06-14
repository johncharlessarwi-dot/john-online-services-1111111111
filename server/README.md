# John Online Services - Server scaffold

This lightweight Node/Express scaffold provides:

- Supabase optional integration (use `SUPABASE_SERVICE_ROLE_KEY` to persist orders/services)
- Cloudinary signing endpoint for secure client uploads
- SQLite fallback when Supabase is not configured

Quick start

1. Copy `.env.example` to `.env` and fill values.
2. Install dependencies:

```bash
cd server
npm install
```

3. Run:

```bash
npm run dev
```

API Endpoints

- `GET /api/health` - basic health check
- `GET /api/services` - list services (Supabase or local fallback)
- `POST /api/sign-cloudinary` - returns `signature`, `api_key`, `timestamp`, `cloud_name` for client-side signed uploads
- `POST /api/orders` - accepts order payload and persists (Supabase or local DB)
- `GET /api/orders` - lists recent orders (for admin/debug)
 - `POST /api/services` - create a new service (admin)
 - `PUT /api/services/:id` - update a service (admin)
 - `DELETE /api/services/:id` - delete a service (admin)
 - `DELETE /api/orders/:id` - delete an order and associated uploads (admin)

Auth
- `POST /api/auth/register` - create user (dev)
- `POST /api/auth/login` - login, returns JWT

Admin UI
- Open `/admin` to access a minimal admin panel. A seeded admin user is created on first run: email `admin@local` / password `Admin@123` unless overridden via env vars.

Notes

- This scaffold is a starting point. For production, prefer storing secrets in a secure vault and restricting the Supabase service role usage.
- Admin portal options: use Supabase Studio (recommended), or install an admin UI such as AdminJS connected to the same database.
