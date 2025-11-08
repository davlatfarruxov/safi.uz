# Node.js Versiyasini Yangilash

## Muammo
```
You are using Node.js 16.14.0. For Next.js, Node.js version "^18.18.0 || ^19.8.0 || >= 20.0.0" is required.
```

## Yechim: Node.js 18.x ga Yangilash

### 1. Hozirgi versiyani tekshirish
```bash
node --version
# v16.14.0
```

### 2. PM2 processlarni to'xtatish
```bash
pm2 stop all
pm2 delete all
```

### 3. Node.js 18.x o'rnatish

#### Usul 1: NodeSource Repository (Tavsiya etiladi)
```bash
# Eski NodeSource repository ni o'chirish
sudo rm -f /etc/apt/sources.list.d/nodesource.list

# Yangi NodeSource repository qo'shish
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Node.js o'rnatish
sudo apt-get install -y nodejs

# Versiyani tekshirish
node --version
# v18.x.x bo'lishi kerak
```

#### Usul 2: NVM (Node Version Manager) orqali
```bash
# NVM o'rnatish
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Terminal ni qayta yuklash yoki
source ~/.bashrc

# Node.js 18 o'rnatish
nvm install 18
nvm use 18
nvm alias default 18

# Versiyani tekshirish
node --version
```

### 4. npm ni yangilash
```bash
sudo npm install -g npm@latest
npm --version
```

### 5. PM2 ni yangilash
```bash
sudo npm install -g pm2@latest
pm2 update
```

### 6. Loyihani qayta build qilish

#### Frontend
```bash
cd /var/www/safi.uz

# node_modules va .next ni o'chirish
rm -rf node_modules .next

# Dependencies qayta o'rnatish
npm install

# Build qilish
npm run build
```

#### Backend
```bash
cd /var/www/safi.uz/admin-backend

# node_modules ni o'chirish
rm -rf node_modules

# Dependencies qayta o'rnatish
npm install
```

#### Admin Panel
```bash
cd /var/www/safi.uz/admin-panel

# node_modules va dist ni o'chirish
rm -rf node_modules dist

# Dependencies qayta o'rnatish
npm install

# Build qilish
npm run build
```

### 7. PM2 bilan qayta ishga tushirish

```bash
# Backend
cd /var/www/safi.uz/admin-backend
pm2 start src/server.js --name safi-backend

# Frontend
cd /var/www/safi.uz
pm2 start npm --name safi-frontend -- start

# PM2 ni saqlash
pm2 save
```

### 8. Tekshirish

```bash
# Node.js versiyasi
node --version

# PM2 status
pm2 status

# Logs
pm2 logs safi-frontend --lines 50

# Agar xato bo'lsa
pm2 logs safi-frontend --err --lines 50
```

## Tezkor Yechim (Bir komanda)

```bash
# Node.js yangilash va loyihani qayta ishga tushirish
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && \
sudo apt-get install -y nodejs && \
sudo npm install -g npm@latest pm2@latest && \
pm2 stop all && \
pm2 delete all && \
cd /var/www/safi.uz && \
rm -rf node_modules .next && \
npm install && \
npm run build && \
cd admin-backend && \
rm -rf node_modules && \
npm install && \
cd .. && \
pm2 start admin-backend/src/server.js --name safi-backend && \
pm2 start npm --name safi-frontend -- start && \
pm2 save && \
pm2 status
```

## Muammolar va Yechimlar

### Muammo: "permission denied"
```bash
# sudo bilan o'rnatish
sudo npm install -g npm@latest
```

### Muammo: Port band
```bash
# Portni tekshirish
sudo lsof -i :3000
sudo lsof -i :5000

# Process o'chirish
sudo kill -9 <PID>
```

### Muammo: Build xatosi
```bash
# Cache tozalash
npm cache clean --force

# node_modules va lock fayllarni o'chirish
rm -rf node_modules package-lock.json

# Qayta o'rnatish
npm install
```

### Muammo: PM2 ishlamayapti
```bash
# PM2 ni to'liq qayta o'rnatish
pm2 kill
sudo npm uninstall -g pm2
sudo npm install -g pm2@latest

# PM2 startup
pm2 startup
# Ko'rsatilgan komandani ishga tushiring
```

## Versiyalarni Tekshirish

```bash
# Node.js
node --version
# v18.x.x yoki yuqori

# npm
npm --version
# 9.x.x yoki yuqori

# PM2
pm2 --version
# 5.x.x yoki yuqori
```

## Qo'shimcha Ma'lumot

- Node.js 18 LTS (Long Term Support) versiyasi
- Next.js 14 uchun minimal Node.js 18.17.0 kerak
- Production uchun LTS versiyalarni ishlatish tavsiya etiladi

## Yordam

Agar muammolar davom etsa:
```bash
# Barcha loglarni ko'rish
pm2 logs

# Bitta process logini ko'rish
pm2 logs safi-frontend

# PM2 monit
pm2 monit

# System info
pm2 info safi-frontend
```
