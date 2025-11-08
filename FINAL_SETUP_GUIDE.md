# 🎉 Safi Hotel Collection - To'liq Loyiha Setup

Bu loyiha 3 qismdan iborat:
1. **Asosiy sayt** (Next.js) - `http://localhost:3000`
2. **Admin panel** (React) - `http://localhost:3001` 
3. **Backend API** (Node.js) - `http://localhost:5000`

## 📋 Tizim Talablari

- **Node.js** 18+
- **MongoDB** 6+
- **npm** yoki **yarn**

## 🚀 Tezkor Ishga Tushirish

### 1️⃣ MongoDB O'rnatish

```bash
# MongoDB Community Server yuklab oling:
# https://www.mongodb.com/try/download/community

# O'rnatgandan keyin service ishga tushiring:
net start MongoDB
```

📖 **Batafsil**: `MONGODB_INSTALL.md` faylini o'qing

### 2️⃣ Loyihani Klonlash

```bash
# Loyihani yuklab oling (yoki mavjud papkada ishlang)
cd your-project-folder
```

### 3️⃣ Backend Ishga Tushirish

```bash
# Terminal 1: Backend
cd admin-backend
npm install

# Demo ma'lumotlar qo'shish (kategoriyalar, mahsulotlar, bloglar)
npm run seed

# Backend serverni ishga tushirish
npm run dev
```

Backend `http://localhost:5000` da ishga tushadi.

**Seed script avtomatik yaratadi:**
- ✅ 5 ta kategoriya
- ✅ 8 ta mahsulot  
- ✅ 3 ta blog post
- ✅ Admin user (email: admin@safihotel.uz, password: admin123456)

### 5️⃣ Admin Panel Ishga Tushirish

```bash
# Terminal 2: Admin Panel
cd admin-panel
npm install
npm run dev
```

Admin panel `http://localhost:3001` da ochiladi.

### 6️⃣ Asosiy Sayt Ishga Tushirish

```bash
# Terminal 3: Asosiy sayt
npm install
npm run dev
```

Asosiy sayt `http://localhost:3000` da ochiladi.

## 🌐 URL'lar

| Servis | URL | Tavsif |
|--------|-----|--------|
| **Asosiy Sayt** | http://localhost:3000 | Mijozlar uchun sayt |
| **Admin Panel** | http://localhost:3001 | Mahsulotlar boshqaruvi |
| **Backend API** | http://localhost:5000 | API server |

## 🔐 Login Ma'lumotlari

**Admin Panel** uchun:
- **Email**: admin@safihotel.uz
- **Password**: admin123456

## ✅ Xususiyatlar

### 🏪 Asosiy Sayt
- ✅ 3 tilda (O'zbek, Русский, English)
- ✅ Real mahsulotlar ko'rsatish
- ✅ Kategoriyalar
- ✅ Blog maqolalar
- ✅ Responsive dizayn
- ✅ Admin paneldan ma'lumot olish

### 🛠️ Admin Panel
- ✅ **Dashboard** - Statistika
- ✅ **Mahsulotlar** - CRUD, 3 til, rasmlar
- ✅ **Kategoriyalar** - CRUD, 3 til
- ✅ **Buyurtmalar** - Ko'rish, status yangilash
- ✅ **Blog** - CRUD, 3 til, teglar
- ✅ **File Upload** - Local storage
- ✅ **JWT Auth** - Xavfsiz kirish

### 🔧 Backend API
- ✅ **MongoDB** - Database
- ✅ **JWT** - Authentication
- ✅ **File Upload** - Multer
- ✅ **CORS** - Cross-origin
- ✅ **Validation** - Express validator

## 📁 Loyiha Strukturasi

```
📦 Loyiha
├── 🌐 app/                    # Next.js asosiy sayt
├── 🎨 components/             # React komponentlar
├── 🔧 lib/                    # API va utilities
├── 🎣 hooks/                  # Custom hooks
├── 🖼️ public/                 # Static fayllar
├── 📱 admin-panel/            # Admin panel (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── config/
├── 🔙 admin-backend/          # Backend API (Node.js)
│   ├── src/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── middleware/
├── 📚 ADMIN_SETUP.md          # Admin setup qo'llanma
├── 🗄️ MONGODB_INSTALL.md      # MongoDB o'rnatish
└── 📖 FINAL_SETUP_GUIDE.md   # Bu fayl
```

## 🔄 Ishlatish Jarayoni

### 1. Mahsulot Qo'shish
1. Admin panelga kiring (`http://localhost:3001`)
2. **Mahsulotlar** → **Yangi Mahsulot**
3. 3 tilda ma'lumot kiriting
4. Rasmlar yuklang
5. Kategoriya tanlang
6. Saqlang

### 2. Kategoriya Yaratish
1. **Kategoriyalar** sahifasiga o'ting
2. **Yangi Kategoriya** tugmasini bosing
3. 3 tilda nom va tavsif kiriting
4. Saqlang

### 3. Blog Post Yozish
1. **Blog** → **Yangi Post**
2. 3 tilda sarlavha va kontent yozing
3. Kategoriya va teglar qo'shing
4. Asosiy rasm yuklang
5. Nashr qiling

### 4. Asosiy Saytda Ko'rish
1. `http://localhost:3000` ga o'ting
2. Yangi mahsulotlar avtomatik ko'rinadi
3. Kategoriyalar menyusida paydo bo'ladi
4. Blog sahifasida maqolalar chiqadi

## 🛠️ Development

### Environment Variables

**Asosiy sayt** (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_ADMIN_URL=http://localhost:3001
```

**Backend** (`admin-backend/.env`):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/safi-hotel
JWT_SECRET=safi-hotel-super-secret-key-2024
JWT_EXPIRE=7d
NODE_ENV=development
```

### Scripts

```bash
# Asosiy sayt
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server

# Admin panel
cd admin-panel
npm run dev          # Development server
npm run build        # Production build

# Backend
cd admin-backend
npm run dev          # Development server (nodemon)
npm start            # Production server
```

## 🐛 Muammolarni Hal Qilish

### MongoDB ulanmayapti
```bash
# Service tekshirish
sc query MongoDB

# Qayta ishga tushirish
net stop MongoDB
net start MongoDB
```

### Port band
```bash
# Portlarni tekshirish
netstat -ano | findstr :3000
netstat -ano | findstr :3001
netstat -ano | findstr :5000
```

### CORS xatoligi
Backend `server.js` da CORS sozlangan. Agar muammo bo'lsa, origin qo'shing:
```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001']
}))
```

### Ma'lumotlar ko'rinmayapti
1. Backend ishlab turganini tekshiring
2. MongoDB ulanganini tekshiring
3. Admin panelda ma'lumot borligini tekshiring
4. Browser console da xatoliklarni ko'ring

## 📦 Production Deploy

### Backend
```bash
cd admin-backend
npm install --production
npm start
```

### Admin Panel
```bash
cd admin-panel
npm run build
# dist/ papkasini serverga yuklang
```

### Asosiy Sayt
```bash
npm run build
npm start
# Yoki Vercel/Netlify ga deploy qiling
```

## 🎯 Keyingi Qadamlar

1. **Payment Integration** - To'lov tizimi
2. **Email Service** - Xabar yuborish
3. **Search Optimization** - Qidiruv yaxshilash
4. **Analytics** - Google Analytics
5. **SEO** - Meta taglar
6. **PWA** - Progressive Web App
7. **Multi-language URLs** - `/uz/`, `/ru/`, `/en/`

## 📞 Yordam

Agar savollar bo'lsa:
1. **ADMIN_SETUP.md** - Admin panel setup
2. **MONGODB_INSTALL.md** - MongoDB o'rnatish
3. Console loglarni tekshiring
4. Network tab da API so'rovlarni ko'ring

## 🎉 Muvaffaqiyat!

Loyiha to'liq tayyor va ishga tushirildi! 

- ✅ Admin panel orqali mahsulot qo'shing
- ✅ Asosiy saytda real ma'lumotlar ko'ring  
- ✅ Blog yozing va nashr qiling
- ✅ Buyurtmalarni boshqaring

**Happy Coding!** 🚀