# API Documentation

## Authentication

### Register User

**Endpoint:** `POST /api/auth/register`

**Request:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Account created successfully",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user-id",
      "email": "user@example.com"
    }
  }
}
```

### Login User

**Endpoint:** `POST /api/auth/login`

**Request:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user-id",
      "email": "user@example.com"
    }
  }
}
```

---

## Orders

### Get All Orders

**Endpoint:** `GET /api/orders`

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "orders": [
      {
        "id": "order-id",
        "orderNumber": "JOSA-2024-0001",
        "serviceId": "service-id",
        "status": "IN_PROGRESS",
        "amount": 500000,
        "currency": "TZS",
        "createdAt": "2024-01-15T10:30:00Z"
      }
    ],
    "total": 1
  }
}
```

### Create Order

**Endpoint:** `POST /api/orders`

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request:**
```json
{
  "serviceId": "service-id",
  "notes": "Please prioritize this order"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Order created successfully",
  "data": {
    "id": "order-id",
    "orderNumber": "JOSA-2024-0001",
    "status": "PENDING",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

### Get Order Details

**Endpoint:** `GET /api/orders/:orderId`

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "order-id",
    "orderNumber": "JOSA-2024-0001",
    "service": {
      "id": "service-id",
      "name": "Website Development",
      "price": 500000
    },
    "status": "IN_PROGRESS",
    "amount": 500000,
    "files": [],
    "payment": null
  }
}
```

---

## Payments

### Create Payment

**Endpoint:** `POST /api/payments/create`

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request:**
```json
{
  "orderId": "order-id",
  "amount": 500000,
  "phone": "+255712345678"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Payment initiated",
  "data": {
    "status": "PENDING",
    "peterpayId": "peterpay-transaction-id"
  }
}
```

### Check Payment Status

**Endpoint:** `GET /api/payments/:paymentId`

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "payment-id",
    "status": "COMPLETED",
    "amount": 500000,
    "transactionId": "peterpay-transaction-id",
    "paidAt": "2024-01-15T10:45:00Z"
  }
}
```

---

## Error Handling

All errors follow this format:

```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

### Common Error Codes

- `VALIDATION_ERROR` - Input validation failed
- `UNAUTHORIZED` - Missing or invalid token
- `FORBIDDEN` - User lacks permission
- `NOT_FOUND` - Resource not found
- `CONFLICT` - Resource already exists
- `INTERNAL_ERROR` - Server error

### Example Error Response

```json
{
  "success": false,
  "error": "Invalid email format",
  "code": "VALIDATION_ERROR",
  "errors": {
    "email": ["Invalid email format"]
  }
}
```

---

## Rate Limiting

- Default: 100 requests per minute per IP
- Authenticated: 500 requests per minute per user

---

## Pagination

Paginated endpoints support:

```
GET /api/endpoint?page=1&pageSize=10
```

Response includes:
```json
{
  "data": [],
  "total": 100,
  "page": 1,
  "pageSize": 10,
  "totalPages": 10
}
```

---

## Webhooks

### PeterPay Payment Webhook

**Endpoint:** `POST /api/webhooks/peterpay`

**Payload:**
```json
{
  "transactionId": "peterpay-id",
  "status": "COMPLETED",
  "amount": 500000,
  "orderId": "order-id"
}
```

---

## Testing API with cURL

```bash
# Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPass123!"
  }'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPass123!"
  }'

# Get Orders (with token)
curl -X GET http://localhost:3000/api/orders \
  -H "Authorization: Bearer <token>"

# Create Order
curl -X POST http://localhost:3000/api/orders \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "serviceId": "service-id",
    "notes": "Please complete this quickly"
  }'
```

---

## Rate Limits

- Login attempts: 5 per minute per IP
- Payment creation: 10 per hour per user
- File upload: 100MB per file

---

For more information, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)
