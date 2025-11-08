#!/bin/bash

# Admin Panel ni PM2 bilan Ishga Tushirish
# Safi Hotel Collection

set -e

echo "🚀 Admin Panel ni PM2 bilan ishga tushiryapman..."
echo "=================================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Admin Panel build
echo -e "${YELLOW}1. Admin Panel build qilyapman...${NC}"
cd /var/www/safi.uz/admin-panel
npm install
npm run build

# PM2 bilan ishga tushirish
echo -e "${YELLOW}2. PM2 bilan ishga tushiryapman...${NC}"
pm2 start npm --name safi-admin -- run preview

# PM2 saqlash
pm2 save

# Status
echo -e "${GREEN}✅ Admin Panel ishga tushdi!${NC}"
echo ""
pm2 status
echo ""
echo -e "${YELLOW}URL: http://localhost:3001${NC}"
echo -e "${YELLOW}Logs: pm2 logs safi-admin${NC}"
