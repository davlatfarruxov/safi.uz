# 📸 Kategoriya Rasmlari Qo'llanmasi

## ✅ Yangi Xususiyat: Kategoriya Rasmlari

Endi admin panelda kategoriyalarga rasm qo'shish mumkin!

## 🎯 Qanday Ishlaydi:

### 1. Admin Panelda Kategoriya Qo'shish

1. **Admin panelga kiring**: http://localhost:3001
2. **Kategoriyalar** sahifasiga o'ting
3. **Yangi Kategoriya** tugmasini bosing

### 2. Ma'lumotlarni To'ldirish

**Asosiy Ma'lumotlar:**
- Nomi (O'zbek, Русский, English)
- Slug (masalan: `bedroom-zone`)
- Tavsif (O'zbek, Русский, English) - 3 tilda

**Rasm Yuklash:**
1. **"Rasm yuklash"** tugmasini bosing
2. Kompyuterdan rasm tanlang
3. Rasm avtomatik yuklanadi
4. Preview ko'rinadi
5. Agar o'chirmoqchi bo'lsangiz, X tugmasini bosing

**Sozlamalar:**
- ✅ Faol - Kategoriya saytda ko'rinadi

### 3. Saqlash

**"Qo'shish"** yoki **"Yangilash"** tugmasini bosing.

## 📋 Kategoriyalar Jadvalida

Endi jadvalda:
- ✅ **Rasm ustuni** - Kategoriya rasmi ko'rinadi
- ✅ Agar rasm yo'q bo'lsa - Placeholder icon
- ✅ Rasm 64x64 px o'lchamda

## 🖼️ Rasm Talablari

### Tavsiya Etiladigan:
- **Format**: JPG, PNG, WebP
- **O'lcham**: 800x600 px yoki kattaroq
- **Fayl hajmi**: 5MB gacha
- **Aspect ratio**: 4:3 yoki 16:9

### Qayerda Ko'rinadi:
1. **Admin panelda** - Kategoriyalar jadvalida
2. **Asosiy saytda** - Kategoriyalar sahifasida
3. **Categories page** - Har bir kategoriya kartochkasida

## 🎨 Misol

### Admin Panelda:
```
Nomi (uz): Yotoq Zonasi
Nomi (ru): Спальная Зона
Nomi (en): Bedroom Zone
Slug: bedroom-zone
Tavsif (uz): Yuqori sifatli to'shak-ko'rpa...
Rasm: [bedroom-image.jpg] ✅
Faol: ✓
```

### Asosiy Saytda:
- Kategoriya kartochkasida rasm ko'rinadi
- Hover qilganda scale effekt
- Responsive dizayn

## 🔄 Rasmni O'zgartirish

1. Kategoriyani tahrirlang (Edit tugmasi)
2. Yangi rasm yuklang
3. Eski rasm avtomatik almashadi
4. Saqlang

## ❌ Rasmni O'chirish

1. Kategoriyani tahrirlang
2. Rasm preview da X tugmasini bosing
3. Rasm o'chiriladi
4. Saqlang

## 🐛 Muammolar

### Rasm yuklanmayapti
1. Backend ishlab turganini tekshiring
2. File hajmi 5MB dan kichik ekanligini tekshiring
3. Format to'g'ri ekanligini tekshiring (JPG, PNG, WebP)

### Rasm ko'rinmayapti
1. Backend `uploads/` papkasi mavjudligini tekshiring
2. Rasm URL to'g'ri ekanligini tekshiring
3. Browser cache ni tozalang (Ctrl+Shift+R)

### Rasm juda katta
- Rasm hajmini kamaytiring (optimize qiling)
- Online tools: TinyPNG, Squoosh

## 📝 Seed Data

Demo kategoriyalar allaqachon rasmlar bilan:
```bash
cd admin-backend
npm run seed
```

Bu 5 ta kategoriya yaratadi, har biri placeholder rasm bilan.

## ✅ Test

### 1. Kategoriya Qo'shing
1. Admin panel → Kategoriyalar
2. Yangi kategoriya
3. Rasm yuklang
4. Saqlang

### 2. Jadvalda Ko'ring
- Kategoriyalar jadvalida rasm ko'rinadi

### 3. Asosiy Saytda Ko'ring
1. http://localhost:3000/categories
2. Kategoriya kartochkasida rasm ko'rinadi

### 4. Kategoriya Sahifasida
1. http://localhost:3000/categories/[slug]
2. Kategoriya rasmi ko'rinadi

---

**Kategoriyalar endi rasmlar bilan!** 📸✨
