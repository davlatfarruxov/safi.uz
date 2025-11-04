import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load env from root
dotenv.config({ path: join(__dirname, '../../.env') });

import Admin from '../models/Admin.js';
import Category from '../models/Category.js';
import Product from '../models/Product.js';
import Blog from '../models/Blog.js';

// Categories data
const categories = [
  {
    name: {
      uz: "Yotoq Zonasi",
      ru: "Спальная Зона",
      en: "Bedroom Zone"
    },
    slug: "bedroom-zone",
    description: {
      uz: "Yuqori sifatli to'shak-ko'rpa, yostiqlar va boshqa yotoq xonasi uchun mahsulotlar",
      ru: "Высококачественное постельное белье, подушки и другие товары для спальни",
      en: "High-quality bedding, pillows and other bedroom products"
    },
    image: '/placeholder-bedroom.jpg',
    isActive: true,
    order: 1
  },
  {
    name: {
      uz: "Hammom Zonasi",
      ru: "Ванная Зона",
      en: "Bathroom Zone"
    },
    slug: "bathroom-zone",
    description: {
      uz: "Sochiqlar, xalatlar, shampunlar va hammom aksessuarlari",
      ru: "Полотенца, халаты, шампуни и аксессуары для ванной",
      en: "Towels, bathrobes, shampoos and bathroom accessories"
    },
    image: '/placeholder-bathroom.jpg',
    isActive: true,
    order: 2
  },
  {
    name: {
      uz: "Mehmon Zonasi",
      ru: "Гостевая Зона",
      en: "Guest Zone"
    },
    slug: "guest-zone",
    description: {
      uz: "Mehmonlar uchun maxsus qulayliklar va xizmatlar",
      ru: "Специальные удобства и услуги для гостей",
      en: "Special amenities and services for guests"
    },
    image: '/placeholder-guest.jpg',
    isActive: true,
    order: 3
  },
  {
    name: {
      uz: "EKO Mahsulotlar",
      ru: "ЭКО Продукты",
      en: "ECO Products"
    },
    slug: "eco-products",
    description: {
      uz: "Ekologik toza va tabiatga zarar bermaydigan mahsulotlar",
      ru: "Экологически чистые и безопасные для природы продукты",
      en: "Environmentally friendly and nature-safe products"
    },
    image: '/placeholder-eco.jpg',
    isActive: true,
    order: 4
  },
  {
    name: {
      uz: "Mehmonxona Komponentlari",
      ru: "Компоненты Отеля",
      en: "Hotel Components"
    },
    slug: "hotel-components",
    description: {
      uz: "Mehmonxona xonalari uchun zarur jihozlar va aksessuarlar",
      ru: "Необходимое оборудование и аксессуары для гостиничных номеров",
      en: "Essential equipment and accessories for hotel rooms"
    },
    image: '/placeholder-components.jpg',
    isActive: true,
    order: 5
  }
];

// Products data (will be created after categories)
const getProducts = (categoryIds) => [
  {
    name: {
      uz: "Oq Velur Xalat",
      ru: "Белый Велюровый Халат",
      en: "White Velour Bathrobe"
    },
    slug: "white-velour-bathrobe",
    description: {
      uz: "Yumshoq va hashamatli velur xalat, mehmonlar uchun maksimal qulaylik",
      ru: "Мягкий и роскошный велюровый халат для максимального комфорта гостей",
      en: "Soft and luxurious velour bathrobe for maximum guest comfort"
    },
    shortDescription: {
      uz: "Premium velur xalat",
      ru: "Премиум велюровый халат",
      en: "Premium velour bathrobe"
    },
    price: 89.99,
    comparePrice: 119.99,
    stock: 150,
    category: categoryIds.bathroom,
    images: [
      { url: '/placeholder-bathrobe.jpg', alt: 'White Velour Bathrobe', isPrimary: true }
    ],
    brand: "Safi Premium",
    tags: ["bathrobe", "velour", "luxury", "white"],
    isActive: true,
    isFeatured: true,
    isNewProduct: true,
    rating: { average: 4.8, count: 24 },
    sku: "SFI-BR-001"
  },
  {
    name: {
      uz: "Hashamatli Hammom Sochiqlar To'plami",
      ru: "Роскошный Набор Банных Полотенец",
      en: "Luxury Bath Towels Set"
    },
    slug: "luxury-bath-towels-set",
    description: {
      uz: "100% paxta, yuqori sifatli sochiqlar to'plami. To'plamda: 2 ta katta sochiq, 2 ta o'rta sochiq, 2 ta qo'l sochiq",
      ru: "100% хлопок, высококачественный набор полотенец. В комплекте: 2 больших полотенца, 2 средних полотенца, 2 полотенца для рук",
      en: "100% cotton, high-quality towel set. Includes: 2 bath towels, 2 hand towels, 2 face towels"
    },
    shortDescription: {
      uz: "6 dona sochiq to'plami",
      ru: "Набор из 6 полотенец",
      en: "Set of 6 towels"
    },
    price: 129.99,
    comparePrice: 159.99,
    stock: 200,
    category: categoryIds.bathroom,
    images: [
      { url: '/placeholder-towels.jpg', alt: 'Luxury Bath Towels', isPrimary: true }
    ],
    brand: "Safi Premium",
    tags: ["towels", "cotton", "luxury", "set"],
    isActive: true,
    isFeatured: true,
    isNewProduct: true,
    rating: { average: 4.9, count: 18 },
    sku: "SFI-TW-001"
  },
  {
    name: {
      uz: "Yashil Ekologik Dozator",
      ru: "Зеленый Экологический Дозатор",
      en: "Green Eco Dispenser"
    },
    slug: "green-eco-dispenser",
    description: {
      uz: "Qayta ishlanadigan materialdan yasalgan ekologik dozator. Shampun, balzam va sovun uchun ideal",
      ru: "Экологический дозатор из переработанных материалов. Идеален для шампуня, бальзама и мыла",
      en: "Eco-friendly dispenser made from recycled materials. Perfect for shampoo, conditioner and soap"
    },
    shortDescription: {
      uz: "Ekologik dozator",
      ru: "Экологический дозатор",
      en: "Eco dispenser"
    },
    price: 24.99,
    stock: 500,
    category: categoryIds.eco,
    images: [
      { url: '/placeholder-dispenser.jpg', alt: 'Green Eco Dispenser', isPrimary: true }
    ],
    brand: "Geneva Green",
    tags: ["dispenser", "eco", "green", "recyclable"],
    isActive: true,
    isFeatured: true,
    isNewProduct: false,
    rating: { average: 4.7, count: 32 },
    sku: "SFI-DS-001"
  },
  {
    name: {
      uz: "Oq Mehmonxona Shippak",
      ru: "Белые Гостиничные Тапочки",
      en: "White Hotel Slippers"
    },
    slug: "white-hotel-slippers",
    description: {
      uz: "Yumshoq va qulay bir martalik shippaklar. Mehmonlar uchun gigienik va shinam",
      ru: "Мягкие и удобные одноразовые тапочки. Гигиеничные и комфортные для гостей",
      en: "Soft and comfortable disposable slippers. Hygienic and cozy for guests"
    },
    shortDescription: {
      uz: "Bir martalik shippaklar",
      ru: "Одноразовые тапочки",
      en: "Disposable slippers"
    },
    price: 3.99,
    stock: 1000,
    category: categoryIds.guest,
    images: [
      { url: '/placeholder-slippers.jpg', alt: 'White Hotel Slippers', isPrimary: true }
    ],
    brand: "Safi Comfort",
    tags: ["slippers", "disposable", "white", "comfort"],
    isActive: true,
    isFeatured: false,
    isNewProduct: true,
    rating: { average: 4.6, count: 45 },
    sku: "SFI-SL-001"
  },
  {
    name: {
      uz: "Premium To'shak-Ko'rpa To'plami",
      ru: "Премиум Комплект Постельного Белья",
      en: "Premium Bedding Set"
    },
    slug: "premium-bedding-set",
    description: {
      uz: "Yuqori sifatli paxta to'shak-ko'rpa to'plami. 300 thread count, juda yumshoq va bardoshli",
      ru: "Высококачественный хлопковый комплект постельного белья. 300 нитей, очень мягкий и прочный",
      en: "High-quality cotton bedding set. 300 thread count, very soft and durable"
    },
    shortDescription: {
      uz: "To'liq to'shak to'plami",
      ru: "Полный комплект постельного белья",
      en: "Complete bedding set"
    },
    price: 149.99,
    comparePrice: 199.99,
    stock: 100,
    category: categoryIds.bedroom,
    images: [
      { url: '/placeholder-bedding.jpg', alt: 'Premium Bedding Set', isPrimary: true }
    ],
    brand: "Safi Premium",
    tags: ["bedding", "cotton", "premium", "set"],
    isActive: true,
    isFeatured: true,
    isNewProduct: false,
    rating: { average: 4.9, count: 67 },
    sku: "SFI-BD-001"
  },
  {
    name: {
      uz: "Mini Muzlatgich",
      ru: "Мини Холодильник",
      en: "Mini Refrigerator"
    },
    slug: "mini-refrigerator",
    description: {
      uz: "Kompakt mini muzlatgich mehmonxona xonalari uchun. 40L hajm, energiya tejovchi",
      ru: "Компактный мини-холодильник для гостиничных номеров. Объем 40л, энергосберегающий",
      en: "Compact mini refrigerator for hotel rooms. 40L capacity, energy efficient"
    },
    shortDescription: {
      uz: "40L mini muzlatgich",
      ru: "Мини холодильник 40л",
      en: "40L mini fridge"
    },
    price: 299.99,
    stock: 50,
    category: categoryIds.components,
    images: [
      { url: '/placeholder-fridge.jpg', alt: 'Mini Refrigerator', isPrimary: true }
    ],
    brand: "CoolTech",
    tags: ["refrigerator", "mini", "hotel", "appliance"],
    isActive: true,
    isFeatured: false,
    isNewProduct: true,
    rating: { average: 4.5, count: 23 },
    sku: "SFI-FR-001"
  },
  {
    name: {
      uz: "Soch Quritgich",
      ru: "Фен для Волос",
      en: "Hair Dryer"
    },
    slug: "hair-dryer",
    description: {
      uz: "Professional soch quritgich, 2000W quvvat. Devorga o'rnatiladigan, xavfsiz",
      ru: "Профессиональный фен, мощность 2000Вт. Настенный, безопасный",
      en: "Professional hair dryer, 2000W power. Wall-mounted, safe"
    },
    shortDescription: {
      uz: "2000W soch quritgich",
      ru: "Фен 2000Вт",
      en: "2000W hair dryer"
    },
    price: 79.99,
    stock: 150,
    category: categoryIds.bathroom,
    images: [
      { url: '/placeholder-hairdryer.jpg', alt: 'Hair Dryer', isPrimary: true }
    ],
    brand: "Corby",
    tags: ["hairdryer", "professional", "wall-mounted"],
    isActive: true,
    isFeatured: false,
    isNewProduct: false,
    rating: { average: 4.6, count: 89 },
    sku: "SFI-HD-001"
  },
  {
    name: {
      uz: "Ekologik Shampun va Balzam To'plami",
      ru: "Экологический Набор Шампунь и Бальзам",
      en: "Eco Shampoo and Conditioner Set"
    },
    slug: "eco-shampoo-conditioner-set",
    description: {
      uz: "Tabiiy ingredientlardan tayyorlangan shampun va balzam. Parabensiz, sulfatsiz",
      ru: "Шампунь и бальзам из натуральных ингредиентов. Без парабенов, без сульфатов",
      en: "Shampoo and conditioner made from natural ingredients. Paraben-free, sulfate-free"
    },
    shortDescription: {
      uz: "Tabiiy shampun to'plami",
      ru: "Натуральный набор шампуня",
      en: "Natural shampoo set"
    },
    price: 34.99,
    stock: 300,
    category: categoryIds.eco,
    images: [
      { url: '/placeholder-shampoo.jpg', alt: 'Eco Shampoo Set', isPrimary: true }
    ],
    brand: "EcoNature",
    tags: ["shampoo", "conditioner", "eco", "natural"],
    isActive: true,
    isFeatured: true,
    isNewProduct: true,
    rating: { average: 4.8, count: 156 },
    sku: "SFI-SH-001"
  }
];

// Blog posts data
const getBlogPosts = (adminId) => [
  {
    title: {
      uz: "2024 Yilda Mehmonxona Sanoatida Trendlar",
      ru: "Тренды в Гостиничной Индустрии 2024",
      en: "Hotel Industry Trends in 2024"
    },
    slug: "hotel-industry-trends-2024",
    content: {
      uz: "Mehmonxona sanoati tez rivojlanmoqda. 2024 yilda eng muhim trendlar: ekologik mahsulotlar, smart texnologiyalar, va shaxsiylashtirilgan xizmatlar. Mehmonlar endi faqat qulay yotoq emas, balki unutilmas tajriba kutishmoqda...",
      ru: "Гостиничная индустрия быстро развивается. Самые важные тренды 2024 года: экологические продукты, умные технологии и персонализированные услуги. Гости теперь ожидают не просто удобную кровать, а незабываемый опыт...",
      en: "The hotel industry is rapidly evolving. The most important trends of 2024: eco-friendly products, smart technologies, and personalized services. Guests now expect not just a comfortable bed, but an unforgettable experience..."
    },
    excerpt: {
      uz: "Mehmonxona sanoatidagi eng so'nggi trendlar va yangiliklar",
      ru: "Последние тренды и новости в гостиничной индустрии",
      en: "Latest trends and news in the hotel industry"
    },
    category: "trends",
    author: adminId,
    tags: ["trends", "2024", "hotel", "industry"],
    isFeatured: true,
    isPublished: true,
    publishedAt: new Date(),
    readTime: 5
  },
  {
    title: {
      uz: "Ekologik Mahsulotlar: Kelajak yoki Hozir?",
      ru: "Экологические Продукты: Будущее или Настоящее?",
      en: "Eco Products: Future or Present?"
    },
    slug: "eco-products-future-or-present",
    content: {
      uz: "Ekologik mahsulotlar mehmonxonalar uchun nafaqat trend, balki zarurat. Mehmonlar tobora ko'proq ekologik toza mahsulotlarni qidirishmoqda. Bizning tajribamiz shuni ko'rsatadiki, ekologik mahsulotlar mehmonlar tomonidan yuqori baholanadi...",
      ru: "Экологические продукты для отелей - это не просто тренд, а необходимость. Гости все чаще ищут экологически чистые продукты. Наш опыт показывает, что экологические продукты высоко ценятся гостями...",
      en: "Eco-friendly products for hotels are not just a trend, but a necessity. Guests are increasingly looking for environmentally friendly products. Our experience shows that eco products are highly valued by guests..."
    },
    excerpt: {
      uz: "Nima uchun ekologik mahsulotlar muhim",
      ru: "Почему экологические продукты важны",
      en: "Why eco products are important"
    },
    category: "ecology",
    author: adminId,
    tags: ["ecology", "eco", "sustainable", "green"],
    isFeatured: false,
    isPublished: true,
    publishedAt: new Date(),
    readTime: 7
  },
  {
    title: {
      uz: "To'g'ri Mahsulotlarni Tanlash: Mehmonxona Uchun Qo'llanma",
      ru: "Выбор Правильных Продуктов: Руководство для Отеля",
      en: "Choosing the Right Products: A Guide for Hotels"
    },
    slug: "choosing-right-products-guide",
    content: {
      uz: "Mehmonxona uchun to'g'ri mahsulotlarni tanlash muhim qaror. Bu maqolada biz sizga qanday qilib sifatli, arzon va mehmonlar uchun yoqimli mahsulotlarni tanlashni ko'rsatamiz. Birinchi qadam - mehmonlaringizni tushunish...",
      ru: "Выбор правильных продуктов для отеля - важное решение. В этой статье мы покажем вам, как выбрать качественные, доступные и приятные для гостей продукты. Первый шаг - понимание ваших гостей...",
      en: "Choosing the right products for your hotel is an important decision. In this article, we'll show you how to select quality, affordable, and guest-pleasing products. The first step is understanding your guests..."
    },
    excerpt: {
      uz: "Mehmonxona uchun mahsulot tanlash bo'yicha maslahatlar",
      ru: "Советы по выбору продуктов для отеля",
      en: "Tips for choosing hotel products"
    },
    category: "products",
    author: adminId,
    tags: ["guide", "products", "selection", "tips"],
    isFeatured: true,
    isPublished: true,
    publishedAt: new Date(),
    readTime: 10
  }
];

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await Category.deleteMany({});
    await Product.deleteMany({});
    await Blog.deleteMany({});
    console.log('✅ Existing data cleared');

    // Create categories
    console.log('📁 Creating categories...');
    const createdCategories = await Category.insertMany(categories);
    console.log(`✅ Created ${createdCategories.length} categories`);

    // Map category IDs
    const categoryIds = {
      bedroom: createdCategories.find(c => c.slug === 'bedroom-zone')?._id,
      bathroom: createdCategories.find(c => c.slug === 'bathroom-zone')?._id,
      guest: createdCategories.find(c => c.slug === 'guest-zone')?._id,
      eco: createdCategories.find(c => c.slug === 'eco-products')?._id,
      components: createdCategories.find(c => c.slug === 'hotel-components')?._id
    };

    // Create products
    console.log('📦 Creating products...');
    const products = getProducts(categoryIds);
    const createdProducts = await Product.insertMany(products);
    console.log(`✅ Created ${createdProducts.length} products`);

    // Get or create admin for blog posts
    let admin = await Admin.findOne({ email: 'admin@safihotel.uz' });
    if (!admin) {
      console.log('👤 Creating admin user...');
      admin = await Admin.create({
        username: 'admin',
        email: 'admin@safihotel.uz',
        password: 'admin123456',
        role: 'super-admin'
      });
      console.log('✅ Admin user created');
    }

    // Create blog posts
    console.log('📝 Creating blog posts...');
    const blogPosts = getBlogPosts(admin._id);
    const createdBlogs = await Blog.insertMany(blogPosts);
    console.log(`✅ Created ${createdBlogs.length} blog posts`);

    console.log('\n🎉 Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   Categories: ${createdCategories.length}`);
    console.log(`   Products: ${createdProducts.length}`);
    console.log(`   Blog Posts: ${createdBlogs.length}`);
    console.log(`   Admin User: ${admin.email}`);
    console.log('\n🔐 Login credentials:');
    console.log(`   Email: admin@safihotel.uz`);
    console.log(`   Password: admin123456`);
    console.log('\n✨ You can now start the admin panel and see the data!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();