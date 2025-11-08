# ⚡ Tezkor Ishga Tushirish

## 1️⃣ MongoDB Ishga Tushiring
```bash
net start MongoDB
```

## 2️⃣ Backend + Demo Ma'lumotlar
```bash
cd admin-backend
npm install
npm run seed    # Demo ma'lumotlar qo'shish
npm run dev     # Backend ishga tushirish
```

## 3️⃣ Admin Panel
```bash
cd admin-panel
npm install
npm run dev
```

## 4️⃣ Asosiy Sayt
```bash
# Asosiy papkada
npm install
npm run dev
```

## 🌐 URLs
- **Asosiy Sayt**: http://localhost:3000
- **Admin Panel**: http://localhost:3001
- **Backend API**: http://localhost:5000

## 🔐 Login
- **Email**: admin@safihotel.uz
- **Password**: admin123456

## ✅ Demo Ma'lumotlar

`npm run seed` buyrug'i avtomatik yaratadi:

### Kategoriyalar (5 ta):
1. Yotoq Zonasi / Спальная Зона / Bedroom Zone
2. Hammom Zonasi / Ванная Зона / Bathroom Zone
3. Mehmon Zonasi / Гостевая Зона / Guest Zone
4. EKO Mahsulotlar / ЭКО Продукты / ECO Products
5. Mehmonxona Komponentlari / Компоненты Отеля / Hotel Components

### Mahsulotlar (8 ta):
1. Oq Velur Xalat - $89.99 ⭐ Yangi
2. Hashamatli Hammom Sochiqlar - $129.99 ⭐ Yangi
3. Yashil Ekologik Dozator - $24.99
4. Oq Mehmonxona Shippak - $3.99 ⭐ Yangi
5. Premium To'shak-Ko'rpa - $149.99
6. Mini Muzlatgich - $299.99 ⭐ Yangi
7. Soch Quritgich - $79.99
8. Ekologik Shampun To'plami - $34.99 ⭐ Yangi

### Blog Postlar (3 ta):
1. 2024 Yilda Mehmonxona Sanoatida Trendlar
2. Ekologik Mahsulotlar: Kelajak yoki Hozir?
3. To'g'ri Mahsulotlarni Tanlash: Qo'llanma

## 🎯 Keyingi Qadamlar

1. Admin panelga kiring: http://localhost:3001
2. Demo mahsulotlarni ko'ring
3. Yangi mahsulot qo'shing
4. Asosiy saytda ko'ring: http://localhost:3000

## 🔄 Ma'lumotlarni Qayta Yuklash

Agar ma'lumotlarni qayta yuklash kerak bo'lsa:

```bash
cd admin-backend
npm run seed
```

Bu barcha mavjud ma'lumotlarni o'chiradi va yangi demo ma'lumotlarni qo'shadi.

## ❓ Muammolar

### MongoDB ulanmayapti
```bash
net start MongoDB
```

### Port band
Boshqa terminal oynalarini yoping va qayta urinib ko'ring.

### Ma'lumotlar ko'rinmayapti
1. Backend ishlab turganini tekshiring
2. `npm run seed` ni qayta ishga tushiring
3. Browser cache ni tozalang (Ctrl+Shift+R)

## 📚 Batafsil Qo'llanmalar

- **FINAL_SETUP_GUIDE.md** - To'liq setup qo'llanma
- **MONGODB_INSTALL.md** - MongoDB o'rnatish
- **ADMIN_SETUP.md** - Admin panel tafsilotlari

---

**Muvaffaqiyat!** 🎉