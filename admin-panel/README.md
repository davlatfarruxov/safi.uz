# Safi Hotel Collection - Admin Panel

React + Redux Toolkit frontend for Safi Hotel Collection admin panel.

## O'rnatish (Installation)

### 1. Dependencies o'rnatish
```bash
cd admin-panel
npm install
```

### 2. Environment variables (ixtiyoriy)
Agar backend boshqa portda ishlab tursa, `.env` fayl yarating:
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Serverni ishga tushirish
```bash
npm run dev
```

Admin panel `http://localhost:3001` da ochiladi.

## Login Ma'lumotlari

Backend orqali yaratilgan admin ma'lumotlari bilan kirish:
- **Email**: admin@safihotel.uz
- **Password**: admin123456

## Xususiyatlar (Features)

### Dashboard
- Umumiy statistika
- Buyurtmalar soni
- Daromad
- Grafik va diagrammalar

### Mahsulotlar (Products)
- Mahsulotlar ro'yxati
- Mahsulot qo'shish/tahrirlash/o'chirish
- 3 tilda (O'zbek, Русский, English)
- Rasm yuklash (ko'p rasmlar)
- Kategoriya tanlash
- Stock boshqaruvi
- Narx va SKU
- Faol/Nofaol status

### Kategoriyalar (Categories)
- Kategoriyalar ro'yxati
- Kategoriya qo'shish/tahrirlash/o'chirish
- 3 tilda
- Slug avtomatik generatsiya

### Buyurtmalar (Orders)
- Buyurtmalar ro'yxati
- Buyurtma tafsilotlari
- Status yangilash
- Mijoz ma'lumotlari
- Yetkazib berish manzili
- Status tarixi

### Blog
- Blog postlar ro'yxati
- Post qo'shish/tahrirlash/o'chirish
- 3 tilda
- Kategoriyalar
- Teglar
- Asosiy rasm
- Nashr qilish/Qoralama

## Folder Structure
```
admin-panel/
├── src/
│   ├── components/
│   │   └── Layout.jsx           # Main layout with sidebar
│   ├── pages/
│   │   ├── Login.jsx            # Login page
│   │   ├── Dashboard.jsx        # Dashboard
│   │   ├── Products.jsx         # Products list
│   │   ├── ProductForm.jsx      # Add/Edit product
│   │   ├── Categories.jsx       # Categories management
│   │   ├── Orders.jsx           # Orders list
│   │   ├── OrderDetail.jsx      # Order details
│   │   ├── Blogs.jsx            # Blog posts list
│   │   └── BlogForm.jsx         # Add/Edit blog
│   ├── redux/
│   │   ├── store.js             # Redux store
│   │   └── slices/
│   │       ├── authSlice.js     # Auth state
│   │       ├── productSlice.js  # Products state
│   │       ├── categorySlice.js # Categories state
│   │       ├── orderSlice.js    # Orders state
│   │       └── blogSlice.js     # Blogs state
│   ├── config/
│   │   └── api.js               # Axios configuration
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## Technologies
- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router** - Routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Hook Form** - Form handling
- **React Hot Toast** - Notifications
- **Lucide React** - Icons
- **date-fns** - Date formatting

## Sahifalar (Pages)

### 1. Login (`/login`)
- Email va parol bilan kirish
- JWT token saqlash
- Avtomatik redirect

### 2. Dashboard (`/`)
- Statistika kartochkalari
- Grafik va diagrammalar
- So'nggi buyurtmalar

### 3. Mahsulotlar (`/products`)
- Mahsulotlar jadvali
- Qidirish va filtrlash
- Tahrirlash va o'chirish

### 4. Mahsulot Qo'shish/Tahrirlash (`/products/new`, `/products/edit/:id`)
- 3 tilda ma'lumot kiritish
- Ko'p rasmlar yuklash
- Kategoriya tanlash
- Sozlamalar

### 5. Kategoriyalar (`/categories`)
- Kategoriyalar jadvali
- Modal oyna orqali qo'shish/tahrirlash

### 6. Buyurtmalar (`/orders`)
- Buyurtmalar jadvali
- Status filtri
- Tafsilotlarni ko'rish

### 7. Buyurtma Tafsilotlari (`/orders/:id`)
- Mahsulotlar ro'yxati
- Mijoz ma'lumotlari
- Status yangilash
- Status tarixi

### 8. Blog (`/blogs`)
- Blog postlar jadvali
- Kategoriya filtri
- Tahrirlash va o'chirish

### 9. Blog Qo'shish/Tahrirlash (`/blogs/new`, `/blogs/edit/:id`)
- 3 tilda kontent
- Asosiy rasm yuklash
- Teglar qo'shish
- Nashr qilish

## Ishlatish (Usage)

1. Backend serverni ishga tushiring
2. Admin panel serverni ishga tushiring
3. Login sahifasiga o'ting
4. Admin ma'lumotlari bilan kiring
5. Dashboard ochiladi

## Build

Production uchun build:
```bash
npm run build
```

Build fayllari `dist/` papkasida bo'ladi.

Preview:
```bash
npm run preview
```
