# ⚡ Tezkor Test

## 1. Backend Test
```bash
# Terminal 1
cd admin-backend
npm run dev
```

Browser da oching:
```
http://localhost:5000/api/test/check
```

Natija ko'rsatishi kerak:
- products: 8
- categories: 5  
- blogs: 3

Agar 0 bo'lsa:
```bash
npm run seed
```

## 2. Admin Panel Test
```bash
# Terminal 2
cd admin-panel
npm run dev
```

1. Login: http://localhost:3001
   - Email: admin@safihotel.uz
   - Password: admin123456

2. **F12** bosing (Developer Tools)
3. **Console** tabni oching
4. **Network** tabni oching
5. **Mahsulotlar** sahifasiga o'ting

**Console da xatolik bormi?**
**Network da API so'rovlar muvaffaqiyatlimi?**

## 3. Asosiy Sayt Test
```bash
# Terminal 3 (asosiy papkada)
npm run dev
```

1. Oching: http://localhost:3000
2. **F12** bosing
3. **Console** va **Network** tablarni tekshiring

## ❌ Agar Xatolik Bo'lsa

### Backend ishlamayapti
```bash
cd admin-backend
npm run dev
```

### Ma'lumot yo'q
```bash
cd admin-backend
npm run seed
```

### Admin panel ulanmayapti
1. `.env` fayl bor ekanligini tekshiring: `admin-panel/.env`
2. Ichida: `VITE_API_URL=http://localhost:5000/api`
3. Admin panelni qayta ishga tushiring

### CORS xatoligi
Backend `server.js` da CORS yoqilgan. Agar muammo bo'lsa, backend ni qayta ishga tushiring.

---

**Qaysi qadamda xatolik bor?** Menga ayting!
