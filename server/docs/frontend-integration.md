# Frontend integration notes

1) Cloudinary signed upload (preferred)

- Client requests signature from server:

  POST /api/sign-cloudinary

  Server response: `{ signature, api_key, timestamp, cloud_name }`

- Client builds `FormData` with file + `api_key`, `timestamp`, `signature`, and posts to `https://api.cloudinary.com/v1_1/{cloud_name}/auto/upload`.

2) Order submission

- After uploads complete, send order metadata to server:

  POST /api/orders
  Body example:

  {
    "id": "ord_123",
    "customer_name": "John Doe",
    "customer_phone": "2556...",
    "service_id": 1,
    "total": 1200,
    "items": [ { "id":"upl_1", "filename":"doc.pdf", "url": "https://res.cloudinary.com/...", "mime":"application/pdf", "size": 12345 } ]
  }

3) WhatsApp flow

- Build the message client-side with the returned URLs and open `https://wa.me/<number>?text=${encodeURIComponent(message)}` as the existing front-end does.
