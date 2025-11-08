#!/bin/bash

# Safi Hotel Collection - Ubuntu Deployment Script
# Bu script loyihani Ubuntu serverda avtomatik deploy qiladi

set -e

echo "🚀 Safi Hotel Collection Deployment Script"
echo "=========================================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Serverning IP manzili yoki domain
read -p "Server IP yoki domain kiriting: " SERVER
read -p "SSH username kiriting: " USERNAME

echo -e "${YELLOW}📦 Loyihani serverga ko'chiryapman...${NC}"
rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.next' --exclude 'dist' \
  ./ ${USERNAME}@${SERVER}:/var/www/safi.uz/

echo -e "${YELLOW}🔧 Serverda sozlamalar...${NC}"
ssh ${USERNAME}@${SERVER} << 'ENDSSH'
cd /var/www/safi.uz

# Backend
echo "📦 Backend dependencies o'rnatyapman..."
cd admin-backend
npm install

# Frontend
echo "📦 Frontend dependencies o'rnatyapman..."
cd ..
npm install
npm run build

# Admin Panel
echo "📦 Admin Panel dependencies o'rnatyapman..."
cd admin-panel
npm install
npm run build

# PM2 bilan ishga tushirish
echo "🚀 Ilovalarni ishga tushiryapman..."
cd /var/www/safi.uz/admin-backend
pm2 restart safi-backend || pm2 start src/server.js --name safi-backend

cd /var/www/safi.uz
pm2 restart safi-frontend || pm2 start npm --name safi-frontend -- start

pm2 save

echo "✅ Deployment muvaffaqiyatli yakunlandi!"
ENDSSH

echo -e "${GREEN}✅ Deployment yakunlandi!${NC}"
echo -e "${GREEN}🌐 Saytingiz tayyor: http://${SERVER}${NC}"
echo -e "${YELLOW}📝 Keyingi qadamlar:${NC}"
echo "1. SSL sertifikat o'rnating: sudo certbot --nginx -d ${SERVER}"
echo "2. Loglarni tekshiring: pm2 logs"
echo "3. Status: pm2 status"
