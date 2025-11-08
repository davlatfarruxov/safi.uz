#!/bin/bash

# Admin Panel ni To'liq Tozalash va Qayta Build Qilish
# Safi Hotel Collection

echo "🧹 Admin Panel ni to'liq tozalayman va qayta build qilyapman..."
echo "=============================================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# PM2 to'xtatish
echo -e "${YELLOW}1. PM2 processlarni to'xtatyapman...${NC}"
pm2 stop safi-admin || true

# Backend restart
echo -e "${YELLOW}2. Backend restart...${NC}"
cd /var/www/safi.uz/admin-backend
pm2 restart safi-backend

# Admin Panel tozalash
echo -e "${YELLOW}3. Admin Panel cache va build fayllarini o'chiryapman...${NC}"
cd /var/www/safi.uz/admin-panel
rm -rf node_modules/.vite
rm -rf dist
rm -rf .cache

# Dependencies qayta o'rnatish
echo -e "${YELLOW}4. Dependencies qayta o'rnatyapman...${NC}"
npm install

# Build
echo -e "${YELLOW}5. Build qilyapman...${NC}"
npm run build

# PM2 restart
echo -e "${YELLOW}6. PM2 restart...${NC}"
pm2 restart safi-admin || pm2 start npm --name safi-admin -- run preview

pm2 save

echo -e "${GREEN}✅ Tayyor!${NC}"
echo ""
echo -e "${YELLOW}Endi quyidagilarni bajaring:${NC}"
echo "1. Browser ochib admin panelga kiring"
echo "2. Ctrl+Shift+R bosing (hard refresh)"
echo "3. Yoki Ctrl+Shift+Delete bosib cache tozalang"
echo ""
pm2 status
