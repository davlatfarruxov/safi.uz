# MongoDB O'rnatish Qo'llanmasi

Admin panel ishlashi uchun MongoDB kerak. Bu qo'llanma Windows uchun MongoDB o'rnatishni ko'rsatadi.

## Windows uchun MongoDB O'rnatish

### 1. MongoDB Community Server Yuklab Olish

1. [MongoDB rasmiy saytiga](https://www.mongodb.com/try/download/community) o'ting
2. **Version**: Latest stable version tanlang
3. **Platform**: Windows x64 tanlang  
4. **Package**: MSI tanlang
5. **Download** tugmasini bosing

### 2. MongoDB O'rnatish

1. Yuklab olingan `.msi` faylni ishga tushiring
2. **Next** tugmasini bosing
3. License kelishuvini qabul qiling (**I accept**)
4. **Complete** setup type ni tanlang
5. **Install MongoDB as a Service** ni belgilang:
   - ✅ **Install MongoDB as a Service**
   - Service Name: `MongoDB`
   - Data Directory: `C:\Program Files\MongoDB\Server\7.0\data\`
   - Log Directory: `C:\Program Files\MongoDB\Server\7.0\log\`
6. **Install MongoDB Compass** ni belgilang (GUI tool)
7. **Install** tugmasini bosing
8. O'rnatish tugaguncha kuting

### 3. MongoDB Service Tekshirish

#### Windows Services orqali:
1. `Win + R` bosing
2. `services.msc` yozing va Enter bosing
3. **MongoDB** service ni toping
4. Status **Running** bo'lishi kerak

#### Command Line orqali:
```cmd
# Service statusini tekshirish
sc query MongoDB

# Service ishga tushirish (agar to'xtagan bo'lsa)
net start MongoDB

# Service to'xtatish
net stop MongoDB
```

### 4. MongoDB Compass (GUI) Ishlatish

1. **MongoDB Compass** ni oching
2. Connection string: `mongodb://localhost:27017`
3. **Connect** tugmasini bosing
4. Muvaffaqiyatli ulanish bo'lishi kerak

### 5. Command Line (mongosh) Ishlatish

```cmd
# MongoDB shell ochish
mongosh

# Yoki to'liq yo'l bilan
"C:\Program Files\MongoDB\Server\7.0\bin\mongosh.exe"
```

MongoDB shell ochilgandan keyin:
```javascript
// Mavjud database'larni ko'rish
show dbs

// Yangi database yaratish
use safi-hotel

// Collection yaratish
db.test.insertOne({name: "test"})

// Ma'lumotlarni ko'rish
db.test.find()
```

## Muammolarni Hal Qilish

### MongoDB ishga tushmayapti

1. **Windows Services** da MongoDB service ni tekshiring
2. Agar **Stopped** bo'lsa:
   ```cmd
   net start MongoDB
   ```

3. Agar xatolik bo'lsa, log faylni tekshiring:
   ```
   C:\Program Files\MongoDB\Server\7.0\log\mongod.log
   ```

### Port 27017 band

1. Qaysi dastur portni ishlatayotganini tekshiring:
   ```cmd
   netstat -ano | findstr :27017
   ```

2. Boshqa portda ishga tushirish:
   ```cmd
   mongod --port 27018
   ```

### Permission xatoliklari

1. **Command Prompt** ni **Administrator** sifatida oching
2. MongoDB service ni qayta ishga tushiring:
   ```cmd
   net stop MongoDB
   net start MongoDB
   ```

### Data directory mavjud emas

1. Qo'lda yaratish:
   ```cmd
   mkdir "C:\Program Files\MongoDB\Server\7.0\data"
   mkdir "C:\Program Files\MongoDB\Server\7.0\log"
   ```

2. Permissions berish:
   - Papkaga o'ng tugma bosing
   - **Properties** → **Security** → **Edit**
   - **Users** ga **Full Control** bering

## Environment Variables (Ixtiyoriy)

MongoDB ni har yerdan ishlatish uchun PATH ga qo'shing:

1. **System Properties** → **Environment Variables**
2. **System Variables** da **Path** ni tanlang
3. **Edit** → **New**
4. Qo'shing: `C:\Program Files\MongoDB\Server\7.0\bin`
5. **OK** tugmalarini bosing
6. Command Prompt ni qayta oching

Endi `mongosh` ni har yerdan ishlatish mumkin.

## MongoDB Compass Ishlatish

### Database Yaratish:
1. **CREATE DATABASE** tugmasini bosing
2. Database Name: `safi-hotel`
3. Collection Name: `products`
4. **CREATE DATABASE**

### Ma'lumot Qo'shish:
1. Collection ni tanlang
2. **ADD DATA** → **Insert Document**
3. JSON formatda ma'lumot kiriting
4. **INSERT**

### Ma'lumotlarni Ko'rish:
1. Collection ni tanlang
2. **Documents** tab da barcha ma'lumotlar ko'rinadi
3. Filter, Sort, Limit ishlatish mumkin

## Admin Panel uchun Sozlash

Admin panel `.env` faylida:
```env
MONGODB_URI=mongodb://localhost:27017/safi-hotel
```

Agar boshqa port ishlatayotgan bo'lsangiz:
```env
MONGODB_URI=mongodb://localhost:27018/safi-hotel
```

## Backup va Restore

### Backup:
```cmd
mongodump --db safi-hotel --out C:\backup\
```

### Restore:
```cmd
mongorestore --db safi-hotel C:\backup\safi-hotel\
```

## Xavfsizlik (Production uchun)

### Authentication yoqish:
1. `mongod.conf` faylini tahrirlang
2. Qo'shing:
   ```yaml
   security:
     authorization: enabled
   ```

### Admin user yaratish:
```javascript
use admin
db.createUser({
  user: "admin",
  pwd: "strong-password",
  roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase"]
})
```

## Foydali Buyruqlar

```cmd
# MongoDB version
mongod --version

# Service restart
net stop MongoDB && net start MongoDB

# Database size
mongosh --eval "db.stats()"

# Collections ro'yxati
mongosh safi-hotel --eval "show collections"
```

## Qo'shimcha Resurslar

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB Compass Guide](https://docs.mongodb.com/compass/)
- [MongoDB Shell (mongosh)](https://docs.mongodb.com/mongodb-shell/)

## Yordam

Agar muammolar bo'lsa:
1. MongoDB log fayllarini tekshiring
2. Windows Event Viewer ni ko'ring
3. MongoDB Community Forum ga murojaat qiling

MongoDB muvaffaqiyatli o'rnatildi! ✅