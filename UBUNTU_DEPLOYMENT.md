# Ubuntu Server Deployment Guide

Bu qo'llanma Safi Hotel Collection veb-saytini Ubuntu serverda ishga tushirish uchun.

## 1. Server Talablari

- Ubuntu 20.04 yoki yuqori
- Node.js 18.x yoki yuqori
- MongoDB 6.0 yoki yuqori
- Nginx (reverse proxy uchun)
- PM2 (process manager)
- 2GB+ RAM
- 20GB+ disk space

## 2. Serverga Ulanish

```bash
ssh username@your-server-ip
```

## 3. Kerakli Dasturlarni O'rnatish

### Node.js va npm o'rnatish
```bash
# NodeSource repository qo'shish
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Node.js o'rnatish
sudo apt-get install -y nodejs

# Versiyani tekshirish
node --version
npm --version
```

### MongoDB o'rnatish
```bash
# MongoDB GPG key import qilish
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# MongoDB repository qo'shish
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Package list yangilash
sudo apt-get update

# MongoDB o'rnatish
sudo apt-get install -y mongodb-org

# MongoDB ishga tushirish
sudo systemctl start mongod
sudo systemctl enable mongod

# Status tekshirish
sudo systemctl status mongod
```

### PM2 o'rnatish
```bash
sudo npm install -g pm2
```

### Nginx o'rnatish
```bash
sudo apt-get install -y nginx
```

## 4. Loyihani Serverga Ko'chirish

### Git orqali (tavsiya etiladi)
```bash
# Git o'rnatish
sudo apt-get install -y git

# Loyihani clone qilish
cd /var/www
sudo git clone https://github.com/your-username/safi.uz.git
cd safi.uz

# Yoki loyihani zip fayl sifatida yuklash
# scp -r /path/to/safi.uz username@server-ip:/var/www/
```

## 5. Environment Variables Sozlash

### Backend .env fayli
```bash
cd /var/www/safi.uz/admin-backend
sudo nano .env
```

Quyidagi ma'lumotlarni kiriting:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/safi-hotel
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=production
```

### Frontend .env.local fayli
```bash
cd /var/www/safi.uz
sudo nano .env.local
```

Quyidagi ma'lumotlarni kiriting:
```env
NEXT_PUBLIC_API_URL=http://your-domain.com/api
```

### Admin Panel .env fayli
```bash
cd /var/www/safi.uz/admin-panel
sudo nano .env
```

Quyidagi ma'lumotlarni kiriting:
```env
VITE_API_URL=http://your-domain.com/api
```

## 6. Dependencies O'rnatish va Build Qilish

### Backend
```bash
cd /var/www/safi.uz/admin-backend
sudo npm install
```

### Frontend
```bash
cd /var/www/safi.uz
sudo npm install
sudo npm run build
```

### Admin Panel
```bash
cd /var/www/safi.uz/admin-panel
sudo npm install
sudo npm run build
```

## 7. MongoDB Ma'lumotlar Bazasini Sozlash

```bash
# MongoDB shell ga kirish
mongosh

# Database yaratish
use safi-hotel

# Admin user yaratish
db.admins.insertOne({
  username: "admin2",
  email: "muinjon@safi-h.uz",
  password: "$2a$10$.sasa", // bcrypt hash
  role: "super-admin",
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date()
})

# Chiqish
exit
```

Yoki seed script ishlatish:
```bash
cd /var/www/safi.uz/admin-backend
node src/seed/seedData.js
```

## 8. PM2 bilan Ishga Tushirish

### Backend ishga tushirish
```bash
cd /var/www/safi.uz/admin-backend
pm2 start src/server.js --name safi-backend
```

### Frontend ishga tushirish (Next.js)
```bash
cd /var/www/safi.uz
pm2 start npm --name safi-frontend -- start
```

### Admin Panel (Vite + React - Static Files)
Admin panel Vite bilan build qilinadi va static files sifatida Nginx orqali serve qilinadi.
PM2 bilan ishga tushirish KERAK EMAS.

```bash
cd /var/www/safi.uz/admin-panel
npm run build
# Build qilingan fayllar: /var/www/safi.uz/admin-panel/dist
```

### PM2 ni avtomatik ishga tushirish
```bash
pm2 startup
pm2 save
```

### PM2 statusni ko'rish
```bash
pm2 status
pm2 logs
```

## 9. Nginx Konfiguratsiyasi

```bash
sudo nano /etc/nginx/sites-available/safi
```

Quyidagi konfiguratsiyani kiriting:

```nginx
# Backend API
server {
    listen 80;
    server_name api.safi-h.uz;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # Upload fayllar uchun
    location /uploads {
        alias /var/www/safi.uz/admin-backend/uploads;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}

# Frontend
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

# Admin Panel
server {
    listen 80;
    server_name admin.safi-h.uz;

    root /var/www/safi.uz/admin-panel/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Static files caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Nginx konfiguratsiyasini faollashtirish
```bash
sudo ln -s /etc/nginx/sites-available/safi /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 10. SSL Sertifikat O'rnatish (Let's Encrypt)

```bash
# Certbot o'rnatish
sudo apt-get install -y certbot python3-certbot-nginx

# SSL sertifikat olish
sudo certbot --nginx -d safi-h.uz -d www.safi-h.uz
sudo certbot --nginx -d api.safi-h.uz
sudo certbot --nginx -d admin.safi-h.uz

# Avtomatik yangilanish
sudo certbot renew --dry-run
```

## 11. Firewall Sozlash

```bash
# UFW firewall yoqish
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

## 12. Monitoring va Logs

### PM2 logs
```bash
pm2 logs safi-backend
pm2 logs safi-frontend
```

### Nginx logs
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### MongoDB logs
```bash
sudo tail -f /var/log/mongodb/mongod.log
```

## 13. Backup Strategiyasi

### MongoDB backup
```bash
# Backup script yaratish
sudo nano /usr/local/bin/mongodb-backup.sh
```

```bash
#!/bin/bash
BACKUP_DIR="/var/backups/mongodb"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR
mongodump --out $BACKUP_DIR/backup_$DATE

# 7 kundan eski backuplarni o'chirish
find $BACKUP_DIR -type d -mtime +7 -exec rm -rf {} \;
```

```bash
sudo chmod +x /usr/local/bin/mongodb-backup.sh

# Cron job qo'shish (har kuni soat 2:00 da)
sudo crontab -e
0 2 * * * /usr/local/bin/mongodb-backup.sh
```

### Uploads backup
```bash
# Rsync bilan backup
rsync -avz /var/www/safi.uz/admin-backend/uploads /var/backups/uploads/
```

## 14. Yangilanishlar

### Git orqali yangilash
```bash
cd /var/www/safi.uz
sudo git pull origin main

# Backend yangilash
cd admin-backend
sudo npm install
pm2 restart safi-backend

# Frontend yangilash
cd ..
sudo npm install
sudo npm run build
pm2 restart safi-frontend

# Admin panel yangilash
cd admin-panel
sudo npm install
sudo npm run build
```

## 15. Troubleshooting

### Port band bo'lsa
```bash
# Portni tekshirish
sudo lsof -i :3000
sudo lsof -i :5000

# Process o'chirish
sudo kill -9 <PID>
```

### MongoDB ulanish muammosi
```bash
# MongoDB statusni tekshirish
sudo systemctl status mongod

# MongoDB qayta ishga tushirish
sudo systemctl restart mongod

# MongoDB loglarni ko'rish
sudo tail -f /var/log/mongodb/mongod.log
```

### Nginx muammolari
```bash
# Nginx konfiguratsiyasini tekshirish
sudo nginx -t

# Nginx qayta ishga tushirish
sudo systemctl restart nginx

# Nginx loglarni ko'rish
sudo tail -f /var/log/nginx/error.log
```

### PM2 muammolari
```bash
# PM2 statusni ko'rish
pm2 status

# Process qayta ishga tushirish
pm2 restart all

# Loglarni ko'rish
pm2 logs

# PM2 tozalash
pm2 delete all
pm2 flush
```

## 16. Performance Optimization

### Nginx caching
```nginx
# /etc/nginx/nginx.conf ga qo'shish
http {
    proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;
}
```

### PM2 cluster mode
```bash
# Frontend uchun cluster mode
pm2 start npm --name safi-frontend -i max -- start
```

### MongoDB indexlar
```javascript
// MongoDB shell da
use safi-hotel
db.products.createIndex({ name: "text", description: "text" })
db.products.createIndex({ category: 1 })
db.products.createIndex({ isActive: 1, isFeatured: 1 })
```

## 17. Security Checklist

- ✅ Firewall yoqilgan
- ✅ SSL sertifikat o'rnatilgan
- ✅ MongoDB authentication yoqilgan
- ✅ Strong JWT secret ishlatilgan
- ✅ Environment variables xavfsiz saqlangan
- ✅ Regular backuplar sozlangan
- ✅ Nginx security headers qo'shilgan
- ✅ Rate limiting sozlangan

## 18. Foydali Komandalar

```bash
# Serverning resurslarini ko'rish
htop

# Disk space
df -h

# Memory usage
free -m

# PM2 monitoring
pm2 monit

# Nginx reload (downtime siz)
sudo nginx -s reload

# MongoDB backup
mongodump --out /backup/$(date +%Y%m%d)

# MongoDB restore
mongorestore /backup/20240101
```

## Qo'shimcha Resurslar

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)

## Yordam

Muammolar yuzaga kelsa:
1. Loglarni tekshiring
2. Service statuslarini tekshiring
3. Port va firewall sozlamalarini tekshiring
4. Environment variables to'g'riligini tekshiring
