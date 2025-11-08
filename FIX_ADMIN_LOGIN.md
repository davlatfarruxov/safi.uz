# Admin Panel Login Muammosini Hal Qilish

## Muammo
Postman orqali login ishlayapti, lekin admin panel orqali login qilolmayapman.

## Sabab
Admin panel `.env` faylidagi API URL `localhost` ga ko'rsatilgan, lekin server production da.

## Yechim

### Usul 1: Script bilan (Tezkor)

```bash
chmod +x fix-admin-panel-env.sh
./fix-admin-panel-env.sh
```

### Usul 2: Qo'lda

#### 1. Admin Panel .env faylini o'zgartirish

```bash
cd /var/www/safi.uz/admin-panel
nano .env
```

**O'zgartirish:**

Eski:
```env
VITE_API_URL=http://localhost:5000/api
```

Yangi (Server IP bilan):
```env
VITE_API_URL=http://185.196.214.47:5000/api
```

Yoki domain bilan:
```env
VITE_API_URL=http://safi-h.uz:5000/api
```

Yoki subdomain bilan (tavsiya etiladi):
```env
VITE_API_URL=http://api.safi-h.uz/api
```

#### 2. Admin Panel ni qayta build qilish

```bash
cd /var/www/safi.uz/admin-panel
npm run build
```

#### 3. PM2 restart

```bash
pm2 restart safi-admin
```

#### 4. Tekshirish

```bash
# PM2 status
pm2 status

# Logs
pm2 logs safi-admin --lines 20

# Browser console
# Admin panel ochib, F12 bosing va Network tabni ko'ring
```

---

## Nginx orqali (Tavsiya etiladi)

Agar Nginx orqali proxy qilsangiz, admin panel va backend bir xil domain ostida bo'ladi:

### Backend Nginx Config

```nginx
# Backend API
server {
    listen 80;
    server_name api.safi-h.uz;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Admin Panel .env

```env
VITE_API_URL=http://api.safi-h.uz/api
```

Yoki relative URL (agar bir xil domain bo'lsa):

```env
VITE_API_URL=/api
```

---

## CORS Muammosi

Agar CORS xatosi bo'lsa, backend .env ga qo'shing:

```bash
cd /var/www/safi.uz/admin-backend
nano .env
```

Qo'shish:
```env
CORS_ORIGINS=http://admin.safi-h.uz,http://185.196.214.47:3001
```

Backend restart:
```bash
pm2 restart safi-backend
```

---

## Browser Console Tekshirish

Admin panel ochib, F12 bosing va Console tabda xatolarni ko'ring:

### Agar ko'rsangiz:
```
Failed to fetch
net::ERR_CONNECTION_REFUSED
```

**Yechim:** Backend ishlamayapti yoki URL noto'g'ri
```bash
pm2 status
pm2 logs safi-backend
```

### Agar ko'rsangiz:
```
CORS policy error
```

**Yechim:** Backend CORS sozlamalarini tekshiring

### Agar ko'rsangiz:
```
401 Unauthorized
```

**Yechim:** Email yoki parol noto'g'ri

---

## To'liq Tekshirish

```bash
# 1. Backend ishlayaptimi?
pm2 status
curl http://localhost:5000/api/test

# 2. Admin panel ishlayaptimi?
pm2 status
curl http://localhost:3001

# 3. .env to'g'rimi?
cat /var/www/safi.uz/admin-panel/.env

# 4. Build yangilanganmi?
ls -la /var/www/safi.uz/admin-panel/dist

# 5. PM2 logs
pm2 logs safi-admin --lines 50
pm2 logs safi-backend --lines 50
```

---

## Tezkor Fix

```bash
# Admin panel .env ni to'g'rilash
cd /var/www/safi.uz/admin-panel
echo "VITE_API_URL=http://$(hostname -I | awk '{print $1}'):5000/api" > .env

# Rebuild va restart
npm run build
pm2 restart safi-admin

# Tekshirish
pm2 logs safi-admin
```

---

## Production Tavsiyalar

1. **Subdomain ishlatish:**
   - Frontend: `safi-h.uz`
   - Backend: `api.safi-h.uz`
   - Admin: `admin.safi-h.uz`

2. **SSL o'rnatish:**
   ```bash
   sudo certbot --nginx -d api.safi-h.uz -d admin.safi-h.uz
   ```

3. **Environment variables:**
   ```env
   # Production
   VITE_API_URL=https://api.safi-h.uz/api
   
   # Development
   VITE_API_URL=http://localhost:5000/api
   ```

---

## Yordam

Agar muammo hal bo'lmasa:

1. Browser console loglarini ko'ring (F12)
2. PM2 loglarni ko'ring: `pm2 logs`
3. Nginx loglarni ko'ring: `sudo tail -f /var/log/nginx/error.log`
4. Network tabda request URL ni tekshiring
