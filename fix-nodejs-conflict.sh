#!/bin/bash

# Node.js Konfliktini Hal Qilish va Yangilash
# Safi Hotel Collection

set -e

echo "🔧 Node.js Konfliktini Hal Qilyapman..."
echo "========================================"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# PM2 to'xtatish
echo -e "${YELLOW}1. PM2 processlarni to'xtatyapman...${NC}"
pm2 stop all || true
pm2 delete all || true

# Eski Node.js paketlarini to'liq o'chirish
echo -e "${YELLOW}2. Eski Node.js paketlarini o'chiryapman...${NC}"
sudo apt-get remove -y nodejs libnode-dev libnode72 || true
sudo apt-get purge -y nodejs libnode-dev libnode72 || true
sudo apt-get autoremove -y

# Qolgan fayllarni o'chirish
echo -e "${YELLOW}3. Qolgan fayllarni tozalayapman...${NC}"
sudo rm -rf /usr/local/bin/npm
sudo rm -rf /usr/local/share/man/man1/node*
sudo rm -rf /usr/local/lib/dtrace/node.d
sudo rm -rf ~/.npm
sudo rm -rf ~/.node-gyp
sudo rm -rf /opt/local/bin/node
sudo rm -rf /opt/local/include/node
sudo rm -rf /opt/local/lib/node_modules
sudo rm -rf /usr/local/lib/node*
sudo rm -rf /usr/local/include/node*
sudo rm -rf /usr/local/bin/node*

# NodeSource repository tozalash
echo -e "${YELLOW}4. Repository tozalayapman...${NC}"
sudo rm -f /etc/apt/sources.list.d/nodesource.list
sudo rm -f /etc/apt/sources.list.d/nodesource.list.save

# Cache tozalash
echo -e "${YELLOW}5. APT cache tozalayapman...${NC}"
sudo apt-get clean
sudo apt-get update

# Node.js 18 o'rnatish
echo -e "${YELLOW}6. Node.js 18.x o'rnatyapman...${NC}"
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Versiyani tekshirish
echo -e "${GREEN}7. Yangi versiya:${NC}"
node --version
npm --version

# npm va PM2 o'rnatish
echo -e "${YELLOW}8. npm va PM2 ni yangilayman...${NC}"
sudo npm install -g npm@latest
sudo npm install -g pm2@latest

echo -e "${GREEN}✅ Node.js muvaffaqiyatli yangilandi!${NC}"
echo ""
echo "Node.js: $(node --version)"
echo "npm: $(npm --version)"
echo "PM2: $(pm2 --version)"
echo ""
echo -e "${YELLOW}Keyingi qadam: Loyihani qayta build qiling${NC}"
echo "cd /var/www/safi.uz && ./rebuild.sh"
