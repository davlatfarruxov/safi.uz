#!/bin/bash

# Admin Panel .env ni To'g'rilash
# Safi Hotel Collection

echo "🔧 Admin Panel .env ni to'g'rilayman..."
echo "========================================"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Server IP yoki domain so'rash
read -p "Server IP yoki domain kiriting (masalan: 185.196.214.47 yoki safi-h.uz): " SERVER

echo -e "${YELLOW}Admin Panel .env faylini yangilayman...${NC}"

# Admin Panel .env
cd /var/www/safi.uz/admin-panel
cat > .env << EOF
VITE_API_URL=http://${SERVER}:5000/api
EOF

echo -e "${GREEN}✓ Admin Panel .env yangilandi${NC}"
cat .env

# Rebuild
echo -e "${YELLOW}Admin Panel ni qayta build qilyapman...${NC}"
npm run build

# PM2 restart
echo -e "${YELLOW}PM2 restart qilyapman...${NC}"
pm2 restart safi-admin

echo -e "${GREEN}✅ Tayyor!${NC}"
echo ""
echo "Admin Panel URL: http://${SERVER}:3001"
echo "Backend API URL: http://${SERVER}:5000/api"
