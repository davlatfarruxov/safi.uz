# ✅ Status Tekshirish

## Quyidagi buyruqlarni ketma-ket bajaring:

### 1. MongoDB Tekshirish
```bash
sc query MongoDB
```
**Status: RUNNING** bo'lishi kerak

Agar yo'q bo'lsa:
```bash
net start MongoDB
```

### 2. Backend Tekshirish
Browser da oching:
```
http://localhost:5000/api/health
```

**Natija:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

Agar ochilmasa - backend ishlamayapti:
```bash
cd admin-backend
npm run dev
```

### 3. Ma'lumotlar Tekshirish
Browser da oching:
```
http://localhost:5000/api/test/check
```

**Natija:**
```json
{
  "status": "OK",
  "counts": {
    "products": 8,
    "categories": 5,
    "blogs": 3
  }
}
```

Agar counts 0 bo'lsa:
```bash
cd admin-backend
npm run seed
```

### 4. Products API Tekshirish
```
http://localhost:5000/api/products
```

**Natija:** JSON array with products

### 5. Categories API Tekshirish
```
http://localhost:5000/api/categories
```

**Natija:** JSON array with categories

## Agar Hammasi OK Bo'lsa

### Admin Panel
```bash
cd admin-panel
npm run dev
```

Login: http://localhost:3001
- Email: admin@safihotel.uz
- Password: admin123456

### Asosiy Sayt
```bash
npm run dev
```

Sayt: http://localhost:3000

## Xatoliklar

### ERR_CONNECTION_REFUSED
Backend ishlamayapti. Ishga tushiring:
```bash
cd admin-backend
npm run dev
```

### 404 Not Found
Route xato. Backend to'g'ri ishga tushganini tekshiring.

### Empty Response
Ma'lumot yo'q. Seed qiling:
```bash
cd admin-backend
npm run seed
```

### CORS Error
Backend qayta ishga tushiring.

---

**Qaysi qadamda muammo bor? Menga ayting!**
