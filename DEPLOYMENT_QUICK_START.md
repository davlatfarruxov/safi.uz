# Quick Deployment Guide

Ubuntu serverda tez deploy qilish uchun qisqa qo'llanma.

## Tezkor Boshlash (5 daqiqa)

### 1. Serverga Ulanish
```bash
ssh username@your-server-ip
```

### 2. Kerakli Dasturlarni O'rnatish
```bash
# Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod

# PM2 va Nginx
sudo npm install -g pm2
sudo apt-get install -y nginx
```

### 3. Loyihani Ko'chirish
```bash
cd /var/www
sudo git clone https://github.com/your-repo/safi.uz.git
cd safi.uz
```

### 4. Environment Variables
```bash
# Backend
cd admin-backend
sudo cp .env.production.example .env
sudo nano .env  # Qiymatlarni o'zgartiring

# Frontend
cd ..
sudo cp .env.production.example .env.local
sudo nano .env.local  # API URL ni o'zgartiring

# Admin Panel
cd admin-panel
sudo cp .env.production.example .env
sudo nano .env  # API URL ni o'zgartiring
```

### 5. Build va Ishga Tushirish
```bash
# Backend
cd /var/www/safi.uz/admin-backend
sudo npm install
pm2 start src/server.js --name safi-backend

# Frontend
cd /var/www/safi.uz
sudo npm install
sudo npm run build
pm2 start npm --name safi-frontend -- start

# Admin Panel
cd /var/www/safi.uz/admin-panel
sudo npm install
sudo npm run build

# PM2 ni saqlash
pm2 save
pm2 startup
```

### 6. Nginx Sozlash
```bash
sudo nano /etc/nginx/sites-available/safi
```

Minimal konfiguratsiya:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    # Frontend
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Uploads
    location /uploads {
        alias /var/www/safi.uz/admin-backend/uploads;
    }
}

# Admin Panel
server {
    listen 80;
    server_name admin.your-domain.com;

    root /var/www/safi.uz/admin-panel/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/safi /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 7. SSL (Ixtiyoriy lekin tavsiya etiladi)
```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d admin.your-domain.com
```

### 8. Firewall
```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

## Tekshirish

```bash
# PM2 status
pm2 status

# Logs
pm2 logs

# Nginx status
sudo systemctl status nginx

# MongoDB status
sudo systemctl status mongod
```

## Yangilash

```bash
cd /var/www/safi.uz
sudo git pull
sudo npm install
sudo npm run build
pm2 restart all
```

## Muammolar

### Port band
```bash
sudo lsof -i :3000
sudo lsof -i :5000
sudo kill -9 <PID>
```

### MongoDB ishlamayapti
```bash
sudo systemctl restart mongod
sudo tail -f /var/log/mongodb/mongod.log
```

### Nginx xatolari
```bash
sudo nginx -t
sudo tail -f /var/log/nginx/error.log
```

## Foydali Komandalar

```bash
# PM2
pm2 list
pm2 logs safi-backend
pm2 restart safi-frontend
pm2 stop all
pm2 delete all

# Nginx
sudo systemctl restart nginx
sudo nginx -s reload

# MongoDB
mongosh
sudo systemctl restart mongod

# Disk space
df -h

# Memory
free -m

# Processes
htop
```

## Yordam Kerakmi?

To'liq qo'llanma: `UBUNTU_DEPLOYMENT.md`
