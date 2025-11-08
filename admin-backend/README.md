# Safi Hotel Collection - Admin Backend

Node.js + Express + MongoDB backend for Safi Hotel Collection admin panel.

## O'rnatish (Installation)

### 1. Dependencies o'rnatish
```bash
cd admin-backend
npm install
```

### 2. Environment variables sozlash
`.env.example` faylini `.env` ga nusxalang va o'zgartirishlar kiriting:
```bash
cp .env.example .env
```

`.env` faylida quyidagilarni sozlang:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/safi-hotel
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
NODE_ENV=development
```

### 3. MongoDB ishga tushirish
MongoDB serveringiz ishlab turganiga ishonch hosil qiling:
```bash
# Windows uchun (MongoDB service sifatida o'rnatilgan bo'lsa)
net start MongoDB

# Yoki MongoDB Compass orqali ulanish
```

### 4. Database ga demo ma'lumotlar qo'shish
```bash
# Demo mahsulotlar, kategoriyalar va bloglarni qo'shish
npm run seed
```

Bu script avtomatik ravishda:
- ✅ 5 ta kategoriya
- ✅ 8 ta mahsulot
- ✅ 3 ta blog post
- ✅ 1 ta admin user (agar yo'q bo'lsa)

yaratadi.

### 5. Serverni ishga tushirish
```bash
# Development mode
npm run dev

# Production mode
npm start
```

Server `http://localhost:5000` da ishga tushadi.

## Birinchi Admin Yaratish

Serverni ishga tushirgandan keyin, birinchi admin yaratish uchun:

### Postman yoki Thunder Client orqali:
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "username": "admin",
  "email": "admin@safihotel.uz",
  "password": "admin123456",
  "role": "super-admin"
}
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Yangi admin ro'yxatdan o'tkazish
- `POST /api/auth/login` - Login
- `GET /api/auth/profile` - Admin profili (protected)
- `PUT /api/auth/profile` - Profilni yangilash (protected)

### Products
- `GET /api/products` - Barcha mahsulotlar
- `GET /api/products/:id` - Bitta mahsulot
- `POST /api/products` - Yangi mahsulot (protected)
- `PUT /api/products/:id` - Mahsulotni yangilash (protected)
- `DELETE /api/products/:id` - Mahsulotni o'chirish (protected)
- `POST /api/products/bulk-update` - Ko'p mahsulotlarni yangilash (protected)

### Categories
- `GET /api/categories` - Barcha kategoriyalar
- `GET /api/categories/:id` - Bitta kategoriya
- `POST /api/categories` - Yangi kategoriya (protected)
- `PUT /api/categories/:id` - Kategoriyani yangilash (protected)
- `DELETE /api/categories/:id` - Kategoriyani o'chirish (protected)

### Orders
- `GET /api/orders` - Barcha buyurtmalar (protected)
- `GET /api/orders/stats` - Buyurtmalar statistikasi (protected)
- `GET /api/orders/:id` - Bitta buyurtma (protected)
- `POST /api/orders` - Yangi buyurtma (protected)
- `PUT /api/orders/:id` - Buyurtma statusini yangilash (protected)
- `DELETE /api/orders/:id` - Buyurtmani o'chirish (protected)

### Blogs
- `GET /api/blogs` - Barcha bloglar
- `GET /api/blogs/:id` - Bitta blog
- `POST /api/blogs` - Yangi blog (protected)
- `PUT /api/blogs/:id` - Blogni yangilash (protected)
- `DELETE /api/blogs/:id` - Blogni o'chirish (protected)

### Upload
- `POST /api/upload/single` - Bitta rasm yuklash (protected)
- `POST /api/upload/multiple` - Ko'p rasmlar yuklash (protected)

## Folder Structure
```
admin-backend/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── models/
│   │   ├── Admin.js             # Admin model
│   │   ├── Product.js           # Product model
│   │   ├── Category.js          # Category model
│   │   ├── Order.js             # Order model
│   │   └── Blog.js              # Blog model
│   ├── controllers/
│   │   ├── authController.js    # Auth logic
│   │   ├── productController.js # Product logic
│   │   ├── categoryController.js# Category logic
│   │   ├── orderController.js   # Order logic
│   │   ├── blogController.js    # Blog logic
│   │   └── uploadController.js  # Upload logic
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── blogRoutes.js
│   │   └── uploadRoutes.js
│   ├── middleware/
│   │   ├── auth.js              # JWT authentication
│   │   └── upload.js            # Multer file upload
│   └── server.js                # Main server file
├── uploads/                     # Uploaded files
├── .env                         # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## Technologies
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Multer** - File upload
- **bcryptjs** - Password hashing
