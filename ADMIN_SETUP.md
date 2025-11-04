# Safi Hotel Collection - Admin Panel Setup Guide

To'liq funksional admin panel - mahsulotlarni kiritish va saytni nazorat qilish uchun.

## Texnologiyalar

### Backend
- **Node.js** + **Express** - Server
- **MongoDB** - Database
- **JWT** - Authentication
- **Multer** - File upload

### Frontend
- **React 18** - UI
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Tizim Talablari

- Node.js 18+ 
- MongoDB 6+
- npm yoki yarn

## O'rnatish Qo'llanmasi

### 1. MongoDB O'rnatish

#### Windows uchun:
1. [MongoDB Community Server](https://www.mongodb.com/try/download/community) yuklab oling
2. O'rnatish jarayonida "Install MongoDB as a Service" ni tanlang
3. MongoDB Compass ham o'rnatiladi (GUI)

#### MongoDB ishga tushirish:
```bash
# Service sifatida
net start MongoDB

# Yoki MongoDB Compass orqali ulanish
```

### 2. Backend O'rnatish

```bash
# Backend papkasiga o'tish
cd admin-backend

# Dependencies o'rnatish
npm install

# Environment variables sozlash
cp .env.example .env
```

`.env` faylini tahrirlang:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/safi-hotel
JWT_SECRET=safi-hotel-super-secret-key-2024
JWT_EXPIRE=7d
NODE_ENV=development
```

```bash
# Serverni ishga tushirish
npm run dev
```

Backend `http://localhost:5000` da ishga tushadi.

### 3. Birinchi Admin Yaratish

Backend ishga tushgandan keyin, Postman, Thunder Client yoki curl orqali:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@safihotel.uz",
    "password": "admin123456",
    "role": "super-admin"
  }'
```

Yoki Postman orqali:
- Method: POST
- URL: `http://localhost:5000/api/auth/register`
- Body (JSON):
```json
{
  "username": "admin",
  "email": "admin@safihotel.uz",
  "password": "admin123456",
  "role": "super-admin"
}
```

### 4. Frontend O'rnatish

Yangi terminal oching:

```bash
# Frontend papkasiga o'tish
cd admin-panel

# Dependencies o'rnatish
npm install

# Serverni ishga tushirish
npm run dev
```

Frontend `http://localhost:3001` da ochiladi.

### 5. Asosiy Sayt Ishga Tushirish

Asosiy Next.js saytni ishga tushiring:

```bash
# Asosiy papkada
npm install
npm run dev
```

Asosiy sayt `http://localhost:3000` da ochiladi.

### 6. Login

Admin panel: `http://localhost:3001` ga o'ting va login qiling:
- **Email**: admin@safihotel.uz
- **Password**: admin123456

## URLs

- **Asosiy sayt**: http://localhost:3000
- **Admin panel**: http://localhost:3001  
- **Backend API**: http://localhost:5000

## Xususiyatlar

### ✅ Dashboard
- Umumiy statistika
- Buyurtmalar soni
- Daromad hisobi
- Grafik va diagrammalar

### ✅ Mahsulotlar Boshqaruvi
- Mahsulot qo'shish/tahrirlash/o'chirish
- 3 tilda (O'zbek, Русский, English)
- Ko'p rasmlar yuklash
- Kategoriya tanlash
- Stock boshqaruvi
- Narx, SKU, Barcode
- Faol/Nofaol status
- Yangi/Tanlangan belgilash
- Qidirish va filtrlash

### ✅ Kategoriyalar Boshqaruvi
- Kategoriya qo'shish/tahrirlash/o'chirish
- 3 tilda
- Slug avtomatik generatsiya
- Parent kategoriya (sub-kategoriyalar)
- Tartib raqami

### ✅ Buyurtmalar Boshqaruvi
- Buyurtmalar ro'yxati
- Buyurtma tafsilotlari
- Status yangilash (pending, confirmed, processing, shipped, delivered, cancelled)
- Mijoz ma'lumotlari
- Yetkazib berish manzili
- Status tarixi
- To'lov holati
- Statistika

### ✅ Blog Boshqaruvi
- Blog post qo'shish/tahrirlash/o'chirish
- 3 tilda kontent
- Kategoriyalar (trends, ecology, products, design, service, events)
- Teglar
- Asosiy rasm yuklash
- Nashr qilish/Qoralama
- O'qish vaqti
- Featured post

### ✅ File Upload
- Rasmlar local serverga yuklanadi
- Ko'p rasmlar yuklash
- Image preview
- Rasm o'chirish

### ✅ Authentication
- JWT token
- Secure password hashing (bcrypt)
- Protected routes
- Auto logout on token expire
- Role-based access (admin, super-admin)

## API Endpoints

### Auth
- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login
- `GET /api/auth/profile` - Get profile
- `PUT /api/auth/profile` - Update profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `POST /api/products/bulk-update` - Bulk update

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category
- `POST /api/categories` - Create category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/stats` - Get stats
- `GET /api/orders/:id` - Get order
- `POST /api/orders` - Create order
- `PUT /api/orders/:id` - Update order status
- `DELETE /api/orders/:id` - Delete order

### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get blog
- `POST /api/blogs` - Create blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog

### Upload
- `POST /api/upload/single` - Upload single image
- `POST /api/upload/multiple` - Upload multiple images

## Folder Structure

```
.
├── admin-backend/              # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/            # Database config
│   │   ├── models/            # Mongoose models
│   │   ├── controllers/       # Business logic
│   │   ├── routes/            # API routes
│   │   ├── middleware/        # Auth & upload middleware
│   │   └── server.js          # Main server file
│   ├── uploads/               # Uploaded files
│   ├── .env                   # Environment variables
│   └── package.json
│
├── admin-panel/               # Frontend (React + Redux)
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── pages/             # Page components
│   │   ├── redux/             # Redux store & slices
│   │   ├── config/            # API config
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── ADMIN_SETUP.md             # Bu fayl
```

## Muammolarni Hal Qilish

### MongoDB ulanmayapti
```bash
# MongoDB service ishga tushiring
net start MongoDB

# Yoki MongoDB Compass orqali ulanishni tekshiring
```

### Port band
Agar 5000 yoki 3001 portlar band bo'lsa:
- Backend: `.env` da `PORT` ni o'zgartiring
- Frontend: `vite.config.js` da `server.port` ni o'zgartiring

### CORS xatoligi
Backend `cors` middleware sozlangan. Agar muammo bo'lsa, `server.js` da CORS sozlamalarini tekshiring.

### Rasm yuklanmayapti
- `admin-backend/uploads/` papkasi mavjudligini tekshiring
- File permissions to'g'riligini tekshiring

## Production Deploy

### Backend
```bash
cd admin-backend
npm run build  # Agar TypeScript ishlatilsa
npm start
```

### Frontend
```bash
cd admin-panel
npm run build
# dist/ papkasini serverga yuklang
```

## Qo'shimcha Ma'lumot

- Backend README: `admin-backend/README.md`
- Frontend README: `admin-panel/README.md`

## Yordam

Agar savollar bo'lsa:
1. README fayllarni o'qing
2. API dokumentatsiyasini tekshiring
3. Console loglarni ko'ring

## Muvaffaqiyatli Ishlatish! 🎉
