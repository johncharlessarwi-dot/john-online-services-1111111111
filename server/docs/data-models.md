# Data Models

This document describes the primary data models used by the system.

Users
- `id` (text uuid) — primary key
- `email`, `name`, `role` ('customer'|'admin')

Services
- `id` (int) — primary key
- `slug`, `title`, `description`, `price`

Orders
- `id` (text uuid) — primary key
- `customer_name`, `customer_phone`
- `service_id` (FK to services.id)
- `total`, `status` ('pending','paid','processing','done')

Uploads
- `id` (text uuid) — primary key
- `order_id` (FK to orders.id)
- `filename`, `url`, `mime`, `size`

Notes
- If using Supabase, enable Row Level Security and create policies for admin vs customer rows.
- Use Supabase Storage or Cloudinary for object storage; keep only metadata (URLs) in the DB.
