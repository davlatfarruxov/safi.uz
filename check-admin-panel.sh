#!/bin/bash

# Admin Panel Diagnostika
# Safi Hotel Collection

echo "🔍 Admin Panel Diagnostika"
echo "=========================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 1. Build papkasini tekshirish
echo -e "${YELLOW}1. Build papkasini tekshiryapman...${NC}"
if [ -d "/var/www/safi.uz/admin-panel/dist" ]; then
    echo -e "${GREEN}✓ dist papkasi mavjud${NC}"
    echo "   Fayllar soni: $(find /var/www/safi.uz/admin-panel/dist -type f | wc -l)"
    echo "   O'lchami: $(du -sh /var/www/safi.uz/admin-panel/dist | cut -f1)"
    
    # index.html borligini tekshirish
    if [ -f "/var/www/safi.uz/admin-panel/dist/index.html" ]; then
        echo -e "${GREEN}✓ index.html mavjud${NC}"
    else
        echo -e "${RED}✗ index.html topilmadi!${NC}"
    fi
else
    echo -e "${RED}✗ dist papkasi topilmadi!${NC}"
    echo -e "${YELLOW}   Build qilish kerak: cd /var/www/safi.uz/admin-panel && npm run build${NC}"
fi
echo ""

# 2. Nginx konfiguratsiyasini tekshirish
echo -e "${YELLOW}2. Nginx konfiguratsiyasini tekshiryapman...${NC}"
if [ -f "/etc/nginx/sites-available/safi" ]; then
    echo -e "${GREEN}✓ Nginx config mavjud${NC}"
    
    # Admin panel konfiguratsiyasi borligini tekshirish
    if grep -q "admin.safi-h.uz" /etc/nginx/sites-available/safi; then
        echo -e "${GREEN}✓ Admin panel konfiguratsiyasi topildi${NC}"
    else
        echo -e "${RED}✗ Admin panel konfiguratsiyasi topilmadi!${NC}"
    fi
    
    # Enabled linkni tekshirish
    if [ -L "/etc/nginx/sites-enabled/safi" ]; then
        echo -e "${GREEN}✓ Nginx config enabled${NC}"
    else
        echo -e "${RED}✗ Nginx config enabled emas!${NC}"
        echo -e "${YELLOW}   Faollashtirish: sudo ln -s /etc/nginx/sites-available/safi /etc/nginx/sites-enabled/${NC}"
    fi
else
    echo -e "${RED}✗ Nginx config topilmadi!${NC}"
fi
echo ""

# 3. Nginx syntax tekshirish
echo -e "${YELLOW}3. Nginx syntax tekshiryapman...${NC}"
sudo nginx -t 2>&1 | grep -q "successful"
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Nginx syntax to'g'ri${NC}"
else
    echo -e "${RED}✗ Nginx syntax xatosi!${NC}"
    sudo nginx -t
fi
echo ""

# 4. Nginx statusni tekshirish
echo -e "${YELLOW}4. Nginx statusni tekshiryapman...${NC}"
if systemctl is-active --quiet nginx; then
    echo -e "${GREEN}✓ Nginx ishlamoqda${NC}"
else
    echo -e "${RED}✗ Nginx ishlamayapti!${NC}"
    echo -e "${YELLOW}   Ishga tushirish: sudo systemctl start nginx${NC}"
fi
echo ""

# 5. Port 80 tekshirish
echo -e "${YELLOW}5. Port 80 ni tekshiryapman...${NC}"
if sudo lsof -i :80 > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Port 80 ochiq${NC}"
    sudo lsof -i :80 | grep LISTEN
else
    echo -e "${RED}✗ Port 80 yopiq!${NC}"
fi
echo ""

# 6. Nginx loglarni ko'rsatish
echo -e "${YELLOW}6. Nginx error loglarini ko'rsatyapman...${NC}"
if [ -f "/var/log/nginx/error.log" ]; then
    echo "Oxirgi 10 ta xato:"
    sudo tail -n 10 /var/log/nginx/error.log
else
    echo "Error log topilmadi"
fi
echo ""

# 7. DNS/Hosts tekshirish
echo -e "${YELLOW}7. Domain tekshiryapman...${NC}"
echo "Server IP: $(hostname -I | awk '{print $1}')"
echo ""
echo "Hosts file (/etc/hosts):"
grep "admin.safi-h.uz" /etc/hosts || echo "admin.safi-h.uz topilmadi"
echo ""

# 8. Firewall tekshirish
echo -e "${YELLOW}8. Firewall tekshiryapman...${NC}"
if command -v ufw &> /dev/null; then
    sudo ufw status | grep -E "80|443"
else
    echo "UFW o'rnatilmagan"
fi
echo ""

# 9. Tavsiyalar
echo -e "${YELLOW}=== TAVSIYALAR ===${NC}"
echo ""
echo "Admin panel build qilish:"
echo "  cd /var/www/safi.uz/admin-panel"
echo "  npm install"
echo "  npm run build"
echo ""
echo "Nginx konfiguratsiyasi yaratish:"
echo "  sudo nano /etc/nginx/sites-available/safi"
echo ""
echo "Nginx restart:"
echo "  sudo systemctl restart nginx"
echo ""
echo "Loglarni kuzatish:"
echo "  sudo tail -f /var/log/nginx/error.log"
echo "  sudo tail -f /var/log/nginx/access.log"
