# Auto Slug Generation Guide

Product modelida slug avtomatik generatsiya qilinadi.

## Qanday Ishlaydi

### 1. Slug Generatsiya
Product yaratilganda yoki yangilanganda, slug avtomatik generatsiya qilinadi:

**Misol:**
- Product name (EN): "Luxury Bathrobe White"
- Generated slug: `luxury-bathrobe-white`

### 2. Transliteratsiya
Kirill va O'zbek harflari lotin harflariga o'giriladi:

**Rus tilidan:**
- "Халат Белый" → `halat-belyy`
- "Полотенце Махровое" → `polotentse-mahrovoe`

**O'zbek tilidan:**
- "Oq Xalat" → `oq-xalat`
- "Yumshoq Sochiq" → `yumshoq-sochiq`

### 3. Unikal Slug
Agar slug allaqachon mavjud bo'lsa, raqam qo'shiladi:

**Misol:**
1. Birinchi mahsulot: `luxury-bathrobe` 
2. Ikkinchi mahsulot: `luxury-bathrobe-2`
3. Uchinchi mahsulot: `luxury-bathrobe-3`

## Slug Generatsiya Qoidalari

1. **Kichik harflar:** Barcha harflar kichik harfga o'giriladi
2. **Bo'shliqlar:** Bo'shliqlar `-` (dash) ga almashtiriladi
3. **Maxsus belgilar:** Maxsus belgilar o'chiriladi
4. **Ko'p dashlar:** Ko'p dashlar bitta dashga almashtiriladi
5. **Boshi/oxiri:** Boshi va oxiridagi dashlar o'chiriladi

## Til Prioriteti

Slug generatsiya qilishda quyidagi tartibda tillar ishlatiladi:

1. **English** (en) - birinchi tanlov
2. **Uzbek** (uz) - ikkinchi tanlov
3. **Russian** (ru) - uchinchi tanlov

**Sabab:** Ingliz tili URL uchun eng mos va SEO uchun yaxshi.

## Misollar

### Misol 1: Oddiy Nom
```json
{
  "name": {
    "uz": "Oq Sochiq",
    "ru": "Белое Полотенце",
    "en": "White Towel"
  }
}
```
**Generated slug:** `white-towel`

### Misol 2: Murakkab Nom
```json
{
  "name": {
    "uz": "Premium Xalat (Katta o'lcham)",
    "ru": "Премиум Халат (Большой размер)",
    "en": "Premium Bathrobe (Large Size)"
  }
}
```
**Generated slug:** `premium-bathrobe-large-size`

### Misol 3: Faqat Kirill
```json
{
  "name": {
    "uz": "Махровый Халат",
    "ru": "Махровый Халат",
    "en": ""
  }
}
```
**Generated slug:** `mahrovyy-halat`

### Misol 4: Takrorlanuvchi Nom
```json
// Birinchi mahsulot
{
  "name": { "en": "Hotel Bathrobe" }
}
// Slug: hotel-bathrobe

// Ikkinchi mahsulot (bir xil nom)
{
  "name": { "en": "Hotel Bathrobe" }
}
// Slug: hotel-bathrobe-2

// Uchinchi mahsulot (bir xil nom)
{
  "name": { "en": "Hotel Bathrobe" }
}
// Slug: hotel-bathrobe-3
```

## API Orqali Test

### Postman yoki cURL bilan

```bash
# Product yaratish (slug avtomatik)
curl -X POST http://localhost:5000/api/products \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": {
      "uz": "Yangi Mahsulot",
      "ru": "Новый Продукт",
      "en": "New Product"
    },
    "description": {
      "uz": "Tavsif",
      "ru": "Описание",
      "en": "Description"
    },
    "category": "category_id",
    "price": 100,
    "stock": 50
  }'
```

**Response:**
```json
{
  "_id": "...",
  "name": {
    "uz": "Yangi Mahsulot",
    "ru": "Новый Продукт",
    "en": "New Product"
  },
  "slug": "new-product",
  ...
}
```

## Admin Panel

Admin panelda mahsulot yaratishda:

1. **Slug maydonini to'ldirish SHART EMAS**
2. Faqat mahsulot nomini kiriting
3. Slug avtomatik yaratiladi
4. Slug unique bo'lishi kafolatlanadi

## Slug Yangilash

Mahsulot nomini o'zgartirsangiz:

**Eski holat:**
- Name: "White Towel"
- Slug: `white-towel`

**Yangilash:**
- Name: "Premium White Towel"
- Slug: `premium-white-towel` (avtomatik yangilanadi)

**MUHIM:** Agar slug qo'lda o'rnatilgan bo'lsa, u o'zgarmaydi.

## Qo'lda Slug O'rnatish

Agar kerak bo'lsa, slug ni qo'lda ham o'rnatish mumkin:

```json
{
  "name": {
    "en": "Luxury Bathrobe"
  },
  "slug": "my-custom-slug"
}
```

Bu holda avtomatik generatsiya ishlamaydi.

## Xatoliklar

### "Slug already exists"
Agar qo'lda slug kiritilsa va u allaqachon mavjud bo'lsa:

```json
{
  "message": "E11000 duplicate key error collection: safi-hotel.products index: slug_1 dup key: { slug: \"existing-slug\" }"
}
```

**Yechim:** Slug ni o'zgartiring yoki bo'sh qoldiring (avtomatik generatsiya uchun).

## Kod Tushuntirish

### Transliteratsiya Funksiyasi
```javascript
function generateSlug(text) {
  return text
    .toLowerCase()
    .trim()
    // Kirill → Lotin
    .replace(/а/g, 'a').replace(/б/g, 'b')...
    // O'zbek → Lotin
    .replace(/ў/g, 'o').replace(/ғ/g, 'g')...
    // Maxsus belgilar → bo'shliq
    .replace(/[^\w\s-]/g, ' ')
    // Ko'p bo'shliqlar → bitta dash
    .replace(/\s+/g, '-')
    // Ko'p dashlar → bitta dash
    .replace(/-+/g, '-')
    // Boshi/oxiri dashlarni o'chirish
    .replace(/^-+|-+$/g, '');
}
```

### Pre-save Hook
```javascript
productSchema.pre('save', async function(next) {
  if (!this.slug || this.isModified('name')) {
    const baseName = this.name.en || this.name.uz || this.name.ru;
    let slug = generateSlug(baseName);
    
    // Unique slug yaratish
    const existingProduct = await Product.findOne({ 
      slug: slug,
      _id: { $ne: this._id }
    });
    
    if (existingProduct) {
      let counter = 1;
      let uniqueSlug = `${slug}-${counter}`;
      
      while (await Product.findOne({ 
        slug: uniqueSlug,
        _id: { $ne: this._id }
      })) {
        counter++;
        uniqueSlug = `${slug}-${counter}`;
      }
      
      slug = uniqueSlug;
    }
    
    this.slug = slug;
  }
  
  next();
});
```

## Test Qilish

```bash
# 1. Backend restart
pm2 restart safi-backend

# 2. Admin panelda mahsulot yaratish
# - Slug maydonini bo'sh qoldiring
# - Faqat nomni kiriting
# - Save bosing

# 3. Slug avtomatik yaratilganligini tekshiring
# - Products listda slug ko'rinadi
# - URL: /product/generated-slug
```

## Foydalar

✅ **Avtomatik:** Qo'lda slug kiritish shart emas
✅ **Unique:** Takrorlanish bo'lmaydi
✅ **SEO:** URL uchun mos format
✅ **Transliteratsiya:** Kirill va O'zbek harflari qo'llab-quvvatlanadi
✅ **Xavfsiz:** Maxsus belgilar tozalanadi
✅ **Flexible:** Qo'lda ham o'rnatish mumkin

## Qo'shimcha

Agar slug generatsiya ishlamasa:

1. Backend restart qiling: `pm2 restart safi-backend`
2. MongoDB connection tekshiring
3. Product model to'g'ri import qilinganligini tekshiring
4. Loglarni ko'ring: `pm2 logs safi-backend`
