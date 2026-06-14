# Admin Portal Options

Recommended approaches (ordered by speed-to-value):

1) Supabase Studio
- Pros: built-in, instant, no code, users & table management, Storage browser
- Cons: requires Supabase project (recommended)

2) AdminJS (Node)
- Pros: self-hosted admin UI, customizable, connects to SQLite/Postgres
- Cons: requires wiring and auth, more dev effort

3) Next.js + Clerk/Auth + custom components
- Pros: full control, UI parity with frontend
- Cons: largest engineering effort

Minimum admin features to implement:
- View orders, filter by status
- View uploaded files & download
- Update order status and add notes
- Manage services (CRUD)
- Manage users and assign admin role

Authentication
- For Supabase use built-in auth with admin role checks.
- For AdminJS protect the panel behind JWT or OAuth and restrict to admin users.
