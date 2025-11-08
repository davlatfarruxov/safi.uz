# Loyiha Strukturasi

Safi Hotel Collection 3 ta asosiy qismdan iborat:

## 1. Frontend (Next.js 14)
**Texnologiya:** Next.js 14 + React + TypeScript + Tailwind CSS

**Joylashuvi:** `/var/www/safi.uz/`

**Ishga tushirish:**
```bash
npm run build
pm2 start npm --name safi-frontend -- start
```

**Port:** 3000

**URL:** http://safi-h.uz

**Xususiyatlari:**
- Server-side rendering (SSR)
- Static generation
- API routes
- Image optimization
- PM2 bilan ishga tushiriladi

---

## 2. Backend (Express.js + MongoDB)
**Texnologiya:** Node.js + Express.js + MongoDB + JWT

**Joylashuvi:** `/var/www/safi.uz/admin-backend/`

**Ishga tushirish:**
```bash
pm2 start src/server.js --name safi-backend
```

**Port:** 5000

**URL:** http://api.safi-h.uz yoki http://safi-h.uz/api

**Xususiyatlari:**
- RESTful API
- JWT authentication
- File upload
- MongoDB database
- PM2 bilan ishga tushiriladi

---

## 3. Admin Panel (Vite + React)
**Texnologiya:** Vite + React + Redux + Tailwind CSS

**Joylashuvi:** `/var/www/safi.uz/admin-panel/`

**Build qilish:**
```bash
npm run build
# Output: /var/www/safi.uz/admin-panel/dist
```

**Serve:** Nginx orqali static files sifatida

**URL:** http://admin.safi-h.uz

**Xususiyatlari:**
- Single Page Application (SPA)
- Static files
- Redux state management
- Build qilingan fayllar Nginx orqali serve qilinadi
- PM2 KERAK EMAS

---

## PM2 Processes

Faqat 2 ta process PM2 da bo'lishi kerak:

```bash
pm2 status
```

```
┌─────┬──────────────────┬─────────┬─────────┬──────────┐
│ id  │ name             │ status  │ restart │ uptime   │
├─────┼──────────────────┼─────────┼─────────┼──────────┤
│ 0   │ safi-backend     │ online  │ 0       │ 2h       │
│ 1   │ safi-frontend    │ online  │ 0       │ 2h       │
└─────┴──────────────────┴─────────┴─────────┴──────────┘
```

**MUHIM:** Admin panel PM2 da bo'lmasligi kerak!

---

## Nginx Konfiguratsiyasi

### Frontend (Next.js)
```nginx
server {
    listen 80;
    server_name safi-h.uz www.safi-h.uz;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Backend API
```nginx
server {
    listen 80;
    server_name api.safi-h.uz;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /uploads {
        alias /var/www/safi.uz/admin-backend/uploads;
        expires 30d;
    }
}
```

### Admin Panel (Static Files)
```nginx
server {
    listen 80;
    server_name admin.safi-h.uz;

    root /var/www/safi.uz/admin-panel/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## Build va Deploy Jarayoni

### 1. Frontend (Next.js)
```bash
cd /var/www/safi.uz
npm install
npm run build          # .next papkasi yaratiladi
pm2 restart safi-frontend
```

### 2. Backend (Express.js)
```bash
cd /var/www/safi.uz/admin-backend
npm install
pm2 restart safi-backend
```

### 3. Admin Panel (Vite + React)
```bash
cd /var/www/safi.uz/admin-panel
npm install
npm run build          # dist papkasi yaratiladi
sudo nginx -s reload   # Nginx reload
```

---

## Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://api.safi-h.uz/api
```

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/safi-hotel
JWT_SECRET=your-secret-key
NODE_ENV=production
```

### Admin Panel (.env)
```env
VITE_API_URL=http://api.safi-h.uz/api
```

---

## Xotira va Resurslar

| Komponent      | RAM    | CPU  | Disk  | Port |
|----------------|--------|------|-------|------|
| Frontend       | ~200MB | Low  | ~100MB| 3000 |
| Backend        | ~100MB | Low  | ~50MB | 5000 |
| Admin Panel    | -      | -    | ~10MB | -    |
| MongoDB        | ~200MB | Med  | ~1GB  | 27017|
| Nginx          | ~10MB  | Low  | ~10MB | 80   |

**Jami:** ~500MB RAM, ~1.2GB Disk

---

## Troubleshooting

### Frontend ishlamayapti
```bash
pm2 logs safi-frontend
pm2 restart safi-frontend
```

### Backend ishlamayapti
```bash
pm2 logs safi-backend
pm2 restart safi-backend
```

### Admin Panel ko'rinmayapti
```bash
# Build qilinganligini tekshirish
ls -la /var/www/safi.uz/admin-panel/dist

# Nginx konfiguratsiyasini tekshirish
sudo nginx -t

# Nginx reload
sudo systemctl reload nginx
```

### MongoDB ishlamayapti
```bash
sudo systemctl status mongod
sudo systemctl restart mongod
```

---

## Yangilash

```bash
# Git orqali yangilash
cd /var/www/safi.uz
git pull

# Frontend
npm install
npm run build
pm2 restart safi-frontend

# Backend
cd admin-backend
npm install
pm2 restart safi-backend

# Admin Panel
cd ../admin-panel
npm install
npm run build
sudo nginx -s reload
```
