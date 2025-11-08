# Postman API Guide - Safi Hotel Collection

## Base URL
```
http://localhost:5000/api
```

Yoki production:
```
http://your-domain.com/api
```

---

## 1. Authentication (Login)

### Login
**Endpoint:** `POST /api/auth/login`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "email": "admin@safihotel.uz",
  "password": "admin123456"
}
```

**Response (Success - 200):**
```json
{
  "_id": "65abc123...",
  "username": "admin",
  "email": "admin@safihotel.uz",
  "role": "super-admin",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response (Error - 401):**
```json
{
  "message": "Invalid email or password"
}
```

---

## 2. Register New Admin

### Register
**Endpoint:** `POST /api/auth/register`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "username": "newadmin",
  "email": "newadmin@safihotel.uz",
  "password": "password123",
  "role": "admin"
}
```

**Response (Success - 201):**
```json
{
  "_id": "65abc456...",
  "username": "newadmin",
  "email": "newadmin@safihotel.uz",
  "role": "admin",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 3. Get Profile (Protected)

### Get Profile
**Endpoint:** `GET /api/auth/profile`

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Response (Success - 200):**
```json
{
  "_id": "65abc123...",
  "username": "admin",
  "email": "admin@safihotel.uz",
  "role": "super-admin",
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

---

## 4. Products API

### Get All Products
**Endpoint:** `GET /api/products`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `category` (optional): Filter by category ID
- `search` (optional): Search by name
- `isActive` (optional): Filter by active status
- `isFeatured` (optional): Filter featured products
- `isNewProduct` (optional): Filter new products

**Example:**
```
GET /api/products?page=1&limit=10&isActive=true
```

### Get Single Product
**Endpoint:** `GET /api/products/:id`

### Create Product (Protected)
**Endpoint:** `POST /api/products`

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Body (JSON):**
```json
{
  "name": {
    "uz": "Mahsulot nomi",
    "ru": "Название продукта",
    "en": "Product name"
  },
  "description": {
    "uz": "Tavsif",
    "ru": "Описание",
    "en": "Description"
  },
  "category": "category_id_here",
  "price": 0,
  "stock": 100,
  "images": [],
  "isActive": true,
  "isFeatured": false,
  "isNewProduct": true
}
```

### Update Product (Protected)
**Endpoint:** `PUT /api/products/:id`

### Delete Product (Protected)
**Endpoint:** `DELETE /api/products/:id`

---

## 5. Categories API

### Get All Categories
**Endpoint:** `GET /api/categories`

### Get Single Category
**Endpoint:** `GET /api/categories/:id`

### Create Category (Protected)
**Endpoint:** `POST /api/categories`

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Body (JSON):**
```json
{
  "name": {
    "uz": "Kategoriya nomi",
    "ru": "Название категории",
    "en": "Category name"
  },
  "slug": "category-slug",
  "description": {
    "uz": "Tavsif",
    "ru": "Описание",
    "en": "Description"
  },
  "isActive": true,
  "order": 1
}
```

---

## 6. Orders API

### Get All Orders (Protected)
**Endpoint:** `GET /api/orders`

**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Create Order (Public)
**Endpoint:** `POST /api/orders/public`

**Body (JSON):**
```json
{
  "customer": {
    "name": "Mijoz",
    "email": "customer@example.com",
    "phone": "+998901234567"
  },
  "items": [
    {
      "product": "product_id",
      "name": "Mahsulot nomi",
      "quantity": 2,
      "price": 0,
      "total": 0
    }
  ],
  "shippingAddress": {
    "address": "Manzil",
    "city": "Toshkent",
    "region": "Toshkent",
    "postalCode": "100000",
    "country": "Uzbekistan"
  },
  "notes": "Qo'shimcha izoh",
  "paymentMethod": "cash"
}
```

### Get Orders by Phone (Public)
**Endpoint:** `GET /api/orders/public/by-phone?phone=+998901234567`

---

## 7. Blogs API

### Get All Blogs
**Endpoint:** `GET /api/blogs`

**Query Parameters:**
- `page` (optional)
- `limit` (optional)
- `category` (optional)
- `isPublished` (optional)

### Get Single Blog
**Endpoint:** `GET /api/blogs/:id`

### Create Blog (Protected)
**Endpoint:** `POST /api/blogs`

---

## 8. File Upload (Protected)

### Upload Single File
**Endpoint:** `POST /api/upload/single`

**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: multipart/form-data
```

**Body (form-data):**
- Key: `file`
- Value: [Select File]

**Response:**
```json
{
  "url": "/uploads/1234567890-filename.jpg",
  "filename": "1234567890-filename.jpg"
}
```

### Upload Multiple Files
**Endpoint:** `POST /api/upload/multiple`

**Body (form-data):**
- Key: `files`
- Value: [Select Multiple Files]

---

## Postman Collection Setup

### 1. Create Environment

**Variables:**
- `base_url`: `http://localhost:5000/api`
- `token`: (will be set automatically after login)

### 2. Login Request

1. Create new request: `POST {{base_url}}/auth/login`
2. Body:
```json
{
  "email": "admin@safihotel.uz",
  "password": "admin123456"
}
```
3. Tests tab (to save token):
```javascript
if (pm.response.code === 200) {
    var jsonData = pm.response.json();
    pm.environment.set("token", jsonData.token);
}
```

### 3. Protected Requests

For all protected endpoints, add header:
```
Authorization: Bearer {{token}}
```

---

## Default Credentials

**Email:** `admin@safihotel.uz`  
**Password:** `admin123456`

**MUHIM:** Production da parolni o'zgartiring!

---

## Error Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

---

## Testing Workflow

1. **Login** → Get token
2. **Get Profile** → Verify token works
3. **Get Products** → Test public endpoint
4. **Create Product** → Test protected endpoint
5. **Upload Image** → Test file upload
6. **Create Order** → Test public order creation

---

## cURL Examples

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@safihotel.uz","password":"admin123456"}'
```

### Get Products
```bash
curl -X GET http://localhost:5000/api/products
```

### Get Profile (with token)
```bash
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## Troubleshooting

### "Invalid email or password"
- Email to'g'ri: `admin@safihotel.uz`
- Password to'g'ri: `admin123456`
- Seed data ishga tushganligini tekshiring

### "Not authorized"
- Token to'g'ri formatda: `Bearer YOUR_TOKEN`
- Token muddati tugamaganligini tekshiring
- Header to'g'ri: `Authorization: Bearer ...`

### "Server error"
- Backend ishlaganligini tekshiring: `pm2 status`
- MongoDB ishlaganligini tekshiring: `sudo systemctl status mongod`
- Loglarni ko'ring: `pm2 logs safi-backend`
