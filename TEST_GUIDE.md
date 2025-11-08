# 🔍 Test va Diagnostika Qo'llanmasi

## 1️⃣ Backend API Tekshirish

### Backend ishga tushiring:
```bash
cd admin-backend
npm run dev
```

### Test endpoint ni tekshiring:
Browser yoki Postman da oching:
```
http://localhost:5000/api/test/check
```

**Kutilgan natija:**
```json
{
  "status": "OK",
  "database": "Connected",
  "counts": {
    "products": 8,
    "categories": 5,
    "blogs": 3
  },
  "samples": {
    "product": {...},
    "category": {...}
  }
}
```

Agar `counts` da 0 bo'lsa:
```bash
npm run seed
```

## 2️⃣ Products API Tekshirish

```
http://localhost:5000/api/products
```

**Kutilgan natija:**
```json
{
  "products": [...],
  "currentPage": 1,
  "totalPages": 1,
  "totalProducts": 8
}
```

## 3️⃣ Categories API Tekshirish

```
http://localhost:5000/api/categories
```

**Kutilgan natija:**
```json
[
  {
    "_id": "...",
    "name": {
      "uz": "Yotoq Zonasi",
      "ru": "Спальная Зона",
      "en": "Bedroom Zone"
    },
    ...
  }
]
```

## 4️⃣ Admin Panel Tekshirish

### Admin panel ishga tushiring:
```bash
cd admin-panel
npm run dev
```

### Browser Console (F12) ni oching

1. **Network** tabga o'ting
2. **Mahsulotlar** sahifasiga o'ting
3. API so'rovlarni ko'ring

**Qidirilayotgan so'rovlar:**
- `GET http://localhost:5000/api/products`
- `GET http://localhost:5000/api/categories`

**Xatoliklar:**
- ❌ `ERR_CONNECTION_REFUSED` - Backend ishlamayapti
- ❌ `401 Unauthorized` - Token muammosi
- ❌ `404 Not Found` - Route xato
- ❌ `CORS Error` - CORS sozlanmagan

## 5️⃣ Asosiy Sayt Tekshirish

### Sayt ishga tushiring:
```bash
npm run dev
```

### Browser Console (F12) ni oching

1. Asosiy sahifaga o'ting: `http://localhost:3000`
2. **Console** tabda xatoliklarni ko'ring
3. **Network** tabda API so'rovlarni ko'ring

**Qidirilayotgan so'rovlar:**
- `GET http://localhost:5000/api/products?isFeatured=true`
- `GET http://localhost:5000/api/products?isNewProduct=true`
- `GET http://localhost:5000/api/categories`

## 🐛 Umumiy Muammolar va Yechimlar

### 1. Ma'lumotlar yo'q
```bash
cd admin-backend
npm run seed
```

### 2. Backend ulanmayapti
- Backend ishlab turganini tekshiring
- Port 5000 band emasligini tekshiring
- `.env` faylda `MONGODB_URI` to'g'riligini tekshiring

### 3. CORS xatoligi
Backend `server.js` da CORS sozlangan. Agar muammo bo'lsa:
```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
```

### 4. Admin panel ma'lumot ko'rsatmayapti
1. Login qiling
2. Browser console da xatoliklarni ko'ring
3. Network tabda API so'rovlar statusini tekshiring
4. Token localStorage da borligini tekshiring:
   ```javascript
   localStorage.getItem('adminToken')
   ```

### 5. Asosiy sayt ma'lumot ko'rsatmayapti
1. Backend ishlab turganini tekshiring
2. Browser console da xatoliklarni ko'ring
3. `.env.local` faylda `NEXT_PUBLIC_API_URL` to'g'riligini tekshiring

## 📝 Debug Buyruqlari

### MongoDB ma'lumotlarni ko'rish:
```bash
mongosh
use safi-hotel
db.products.countDocuments()
db.categories.countDocuments()
db.products.find().limit(1).pretty()
```

### Backend loglarni ko'rish:
Backend terminal oynasida barcha so'rovlar ko'rinadi:
```
GET /api/products 200 45ms
GET /api/categories 200 23ms
```

### Admin panel Redux state ni ko'rish:
Browser console da:
```javascript
// Redux DevTools o'rnatilgan bo'lsa
window.__REDUX_DEVTOOLS_EXTENSION__
```

## ✅ Muvaffaqiyatli Test

Agar hammasi ishlasa:

1. ✅ `http://localhost:5000/api/test/check` - OK
2. ✅ `http://localhost:5000/api/products` - 8 ta mahsulot
3. ✅ `http://localhost:5000/api/categories` - 5 ta kategoriya
4. ✅ Admin panel - Mahsulotlar ko'rinadi
5. ✅ Asosiy sayt - Mahsulotlar va kategoriyalar ko'rinadi

## 🆘 Yordam

Agar muammo hal bo'lmasa:

1. Backend terminal loglarini ko'ring
2. Browser console xatoliklarini ko'ring
3. Network tab da API so'rovlar statusini tekshiring
4. MongoDB da ma'lumot borligini tekshiring

---

**Omad!** 🚀
