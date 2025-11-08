#!/bin/bash

# Node.js Versiyasini Yangilash va Loyihani Qayta Ishga Tushirish
# Safi Hotel Collection

set -e

echo "🔧 Node.js Versiyasini Yangilayman..."
echo "======================================"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Hozirgi versiyani ko'rsatish
echo -e "${YELLOW}Hozirgi Node.js versiyasi:${NC}"
node --version

# PM2 to'xtatish
echo -e "${YELLOW}PM2 processlarni to'xtatyapman...${NC}"
pm2 stop all || true
pm2 delete all || true

# Node.js 18 o'rnatish
echo -e "${YELLOW}Node.js 18.x o'rnatyapman...${NC}"
sudo rm -f /etc/apt/sources.list.d/nodesource.list
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# npm va PM2 yangilash
echo -e "${YELLOW}npm va PM2 ni yangilayman...${NC}"
sudo npm install -g npm@latest
sudo npm install -g pm2@latest

# Yangi versiyani ko'rsatish
echo -e "${GREEN}Yangi Node.js versiyasi:${NC}"
node --version
npm --version

# Loyihani qayta build qilish
echo -e "${YELLOW}Loyihani qayta build qilyapman...${NC}"

# Frontend
echo "📦 Frontend..."
cd /var/www/safi.uz
rm -rf node_modules .next
npm install
npm run build

# Backend
echo "📦 Backend..."
cd /var/www/safi.uz/admin-backend
rm -rf node_modules
npm install

# Admin Panel
echo "📦 Admin Panel..."
cd /var/www/safi.uz/admin-panel
rm -rf node_modules dist
npm install
npm run build

# PM2 bilan ishga tushirish
echo -e "${YELLOW}Ilovalarni ishga tushiryapman...${NC}"
cd /var/www/safi.uz/admin-backend
pm2 start src/server.js --name safi-backend

cd /var/www/safi.uz
pm2 start npm --name safi-frontend -- start

pm2 save

# Status
echo -e "${GREEN}✅ Tayyor!${NC}"
echo ""
pm2 status
echo ""
echo -e "${GREEN}Versiyalar:${NC}"
echo "Node.js: $(node --version)"
echo "npm: $(npm --version)"
echo "PM2: $(pm2 --version)"
echo ""
echo -e "${YELLOW}Loglarni ko'rish:${NC}"
echo "pm2 logs safi-frontend"
echo "pm2 logs safi-backend"
