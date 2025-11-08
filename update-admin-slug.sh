#!/bin/bash

# Admin Panel Slug O'zgarishlarini Qo'llash
# Safi Hotel Collection

echo "🔄 Admin Panel ni yangilayman..."
echo "================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Backend restart
echo -e "${YELLOW}1. Backend restart...${NC}"
cd /var/www/safi.uz/admin-backend
pm2 restart safi-backend

# Admin Panel rebuild
echo -e "${YELLOW}2. Admin Panel rebuild...${NC}"
cd /var/www/safi.uz/admin-panel
npm run build

# PM2 restart
echo -e "${YELLOW}3. PM2 restart...${NC}"
pm2 restart safi-admin

echo -e "${GREEN}✅ Tayyor!${NC}"
echo ""
echo "Endi mahsulot yaratishda slug avtomatik generatsiya qilinadi."
echo ""
pm2 status
