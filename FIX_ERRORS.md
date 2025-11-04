# 🔧 Xatolarni Tuzatish

## ❌ Xatolik: Module not found: Can't resolve 'axios'

### Yechim:

Asosiy papkada (Next.js sayt) quyidagi buyruqni bajaring:

```bash
npm install
```

Yoki faqat axios:
```bash
npm install axios
```

## ✅ To'liq O'rnatish Qo'llanmasi

### 1. Asosiy Sayt Dependencies
```bash
# Asosiy papkada
npm install
```

### 2. Backend Dependencies
```bash
cd admin-backend
npm install
```

### 3. Admin Panel Dependencies
```bash
cd admin-panel
npm install
```

## 🚀 Ishga Tushirish Tartibi

### 1. MongoDB
```bash
net start MongoDB
```

### 2. Backend
```bash
cd admin-backend
npm install          # Agar o'rnatilmagan bo'lsa
npm run seed         # Ma'lumotlar qo'shish
npm run dev          # Backend ishga tushirish
```

### 3. Admin Panel
```bash
cd admin-panel
npm install          # Agar o'rnatilmagan bo'lsa
npm run dev
```

### 4. Asosiy Sayt
```bash
# Asosiy papkada
npm install          # Agar o'rnatilmagan bo'lsa
npm run dev
```

## 🎯 Tekshirish

### Backend Test:
```
http://localhost:5000/api/test/check
```

### Admin Panel:
```
http://localhost:3001
```
Login: admin@safihotel.uz / admin123456

### Asosiy Sayt:
```
http://localhost:3000
```

## 🐛 Boshqa Xatoliklar

### Port band
```bash
# Portni tekshirish
netstat -ano | findstr :3000
netstat -ano | findstr :3001
netstat -ano | findstr :5000
```

### MongoDB ulanmayapti
```bash
net start MongoDB
```

### Ma'lumotlar yo'q
```bash
cd admin-backend
npm run seed
```

---

**Birinchi `npm install` ni bajaring!** 📦
