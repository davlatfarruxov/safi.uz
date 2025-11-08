#!/bin/bash

# Loyihani Qayta Build Qilish
# Safi Hotel Collection

set -e

echo "🔨 Loyihani Qayta Build Qilyapman..."
echo "===================================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Frontend
echo -e "${YELLOW}1. Frontend build...${NC}"
cd /var/www/safi.uz
rm -rf node_modules .next package-lock.json
npm install
npm run build

# Backend
echo -e "${YELLOW}2. Backend dependencies...${NC}"
cd /var/www/safi.uz/admin-backend
rm -rf node_modules package-lock.json
npm install

# Admin Panel
echo -e "${YELLOW}3. Admin Panel build...${NC}"
cd /var/www/safi.uz/admin-panel
rm -rf node_modules dist package-lock.json
npm install
npm run build

# PM2 bilan ishga tushirish
echo -e "${YELLOW}4. PM2 bilan ishga tushiryapman...${NC}"

# Backend
cd /var/www/safi.uz/admin-backend
pm2 start src/server.js --name safi-backend

# Frontend
cd /var/www/safi.uz
pm2 start npm --name safi-frontend -- start

# PM2 saqlash
pm2 save

# Status
echo -e "${GREEN}✅ Tayyor!${NC}"
echo ""
pm2 status
echo ""
echo -e "${YELLOW}Loglarni ko'rish:${NC}"
echo "pm2 logs safi-frontend"
echo "pm2 logs safi-backend"
