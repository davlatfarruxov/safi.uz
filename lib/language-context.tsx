"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ru" | "uz" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && ["ru", "uz", "en"].includes(savedLang)) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Top Banner
    "free.delivery": "Бесплатная доставка по материковой части Ташкент при заказе от $150 (без НДС)",

    // Header
    hello: "Привет",
    "log.in": "Войти",
    search: "Поиск",
    "about.us": "О нас",
    blog: "Блог",
    delivery: "Доставка",
    contact: "Контакты",

    // Navigation
    new: "Новинки",
    bathroom: "Ванная",
    bedroom: "Спальня",
    toiletries: "Туалетные принадлежности",
    "hotel.guest.amenities": "Гостевые удобства",
    "childrens.amenities": "Детские удобства",
    "pet.friendly": "Для животных",
    "eco.friendly.products": "Эко-продукты",
    brands: "Бренды",
    clearance: "Распродажа",

    // Features
    "extensive.product.range": "Широкий ассортимент",
    "extensive.product.range.desc": "Обширный выбор гостевых удобств и аксессуаров",
    "bespoke.solutions": "Индивидуальные решения",
    "bespoke.solutions.desc": "Продукты на заказ для ваших уникальных потребностей",
    "luxury.and.quality": "Роскошь и качество",
    "luxury.and.quality.desc": "Широкий выбор гостевых удобств для роскошных и бутик-отелей",
    "environmental.responsibility": "Экологическая ответственность",
    "environmental.responsibility.desc": "Устойчивые, экологически чистые и перерабатываемые продукты",

    // Hero
    "create.five.star": "Создайте пятизвездочный опыт",
    "hero.description":
      "Мы предоставляем роскошные гостевые удобства и качественные аксессуары для гостиничного и гостиничного бизнеса.",
    login: "Войти",
    register: "Регистрация",

    // Sections
    "shop.bedding": "Купить постельное белье",
    "mini.fridges": "Мини-холодильники",
    "shop.minibars": "Купить мини-бары",
    "login.or.register": "Войти или зарегистрироваться",
    "login.description":
      "Войдите в свою учетную запись для управления и отслеживания заказов, счетов и многого другого.",
    "already.customer": "Уже клиент? Войти",
    "new.here": "Новый пользователь? Зарегистрироваться",
    "luxury.accessories": "Роскошные аксессуары",
    "shop.room.accessories": "Купить аксессуары для номеров",

    // Categories
    "shop.bedroom": "Купить спальню",
    "shop.bathroom": "Купить ванную",
    "shop.toiletries": "Купить туалетные принадлежности",
    "shop.guest.amenities": "Купить гостевые удобства",
    "explore.collection": "Исследовать коллекцию",

    // Coffee Station
    "coffee.station.title": "Создайте идеальную кофейную станцию в номере",
    "coffee.station.desc":
      "Улучшите впечатления ваших гостей с помощью нашего ассортимента кофейных принадлежностей премиум-класса.",
    "shop.coffee": "Купить кофе",

    // Product Showcases
    "discover.bathrobes": "Откройте для себя наши халаты",
    "geneva.green.dispensers": "Дозаторы Geneva Green",
    "products.we.love": "Продукты, которые мы любим",

    // Footer
    "footer.description": "Ведущий поставщик мебели, текстиля и решений для гостиничного бизнеса. Нам доверяют 10,000+ отелей по всему миру.",
    "quick.links": "Быстрые ссылки",
    "customer.service": "Служба поддержки",
    "follow.us": "Подписывайтесь на нас",
    "all.rights.reserved": "Все права защищены",

    // Mega Dropdown - Bathroom
    "towels.comfort": "Полотенца и комфорт",
    towels: "Полотенца",
    "hand.towels": "Полотенца для рук и лица",
    bathrobes: "Халаты",
    slippers: "Тапочки",
    "bathroom.equipment": "Оборудование для ванной",
    "bath.shower.mats": "Коврики для ванны и душа",
    mirrors: "Зеркала",
    scales: "Весы",
    bins: "Мусорные корзины",
    "hygiene.bag.dispensers": "Дозаторы гигиенических пакетов",
    "tissue.box.covers": "Чехлы для салфеток",
    "toilet.brushes": "Туалетные щетки",
    consumables: "Расходные материалы",
    "guest.amenities": "Гостевые удобства",
    accessories: "Аксессуары",
    "bathroom.accessories": "Аксессуары для ванной",
    "display.trays": "Подносы для демонстрации",
    "shop.all.bathroom": "Купить все для ванной",
    "discover.bathroom.products": "Откройте для себя все наши продукты для обслуживания ванных комнат ваших гостей",

    // Main Content Section
    createFiveStar: "Создайте пятизвездочный опыт",
    luxuriousGuestAmenities:
      "Мы предоставляем роскошные гостевые удобства и качественные аксессуары для гостиничного и гостиничного бизнеса.",
    shopBedding: "Купить постельное белье",
    miniFridges: "Мини-холодильники",
    shopMinibars: "Купить мини-бары",
    luxuryAccessories: "Роскошные аксессуары",
    shopRoomAccessories: "Купить аксессуары для номеров",
    loginOrRegister: "Войти или зарегистрироваться",
    loginDescription: "Войдите в свою учетную запись для управления и отслеживания заказов, счетов и многого другого.",
    alreadyCustomer: "Уже клиент? Войти",
    newHereRegister: "Новый пользователь? Зарегистрироваться",

    // Product Showcase
    "discover.bathrobes": "Откройте для себя наши халаты",
    "geneva.green.dispensers": "Дозаторы Geneva Green",
    "products.we.love": "Продукты, которые мы любим",
    "view.all": "Посмотреть все",

    // Footer Links
    shop: "Магазин",
    company: "Компания",
    support: "Поддержка",
    "room.accessories": "Аксессуары для номеров",
    "bespoke.solutions": "Индивидуальные решения",
    "eco.friendly.products": "Экологичные продукты",
    faqs: "Часто задаваемые вопросы",
    "shipping.delivery": "Доставка",
    "returns.policy": "Политика возврата",
    "terms.conditions": "Условия использования",
    "privacy.policy": "Политика конфиденциальности",
    "all.rights.reserved": "Все права защищены.",

    // Geneva Dispensers Section
    "premium.eco.friendly": "Премиум экологичный",
    "sustainable.dispensing": "Устойчивые решения для дозирования",
    "add.to.basket": "Добавить в корзину",
    "add.to.compare": "Добавить к сравнению",

    // Products We Love Section
    "perfect.guest.experience": "Идеальный гостевой опыт",
    "curated.hotel.essentials": "Отобранные гостиничные принадлежности",

    // Customer Reviews
    "customers.say": "Наши клиенты говорят",
    excellent: "Отлично",
    "out.of": "из",
    "based.on": "на основе",
    reviews: "отзывов",

    // Wishlist
    wishlist: "Избранное",
    "wishlist.empty": "Ваш список желаний пуст",
    "wishlist.empty.desc": "Начните добавлять товары в избранное, нажав на значок сердца на любом товаре.",
    "continue.shopping": "Продолжить покупки",
    item: "товар",
    items: "товаров",
  },
  uz: {
    // Top Banner
    "free.delivery":
      "Buyurtma $150 dan yuqori bo'lsa, Toshkent shahri bo'ylab bepul yetkazib berish",

    // Header
    hello: "Salom",
    "log.in": "Kirish",
    search: "Qidirish",
    "about.us": "Biz haqimizda",
    blog: "Blog",
    delivery: "Yetkazib berish",
    contact: "Aloqa",

    // Navigation
    new: "Yangiliklar",
    bathroom: "Hammom",
    bedroom: "Yotoq xonasi",
    toiletries: "Shaxsiy gigiyena",
    "hotel.guest.amenities": "Mehmon qulayliklari",
    "childrens.amenities": "Bolalar uchun",
    "pet.friendly": "Hayvonlar uchun",
    "eco.friendly.products": "Eko-mahsulotlar",
    brands: "Brendlar",
    clearance: "Chegirma",

    // Features
    "extensive.product.range": "Keng mahsulot assortimenti",
    "extensive.product.range.desc": "Mehmon qulayliklari va aksessuarlarning keng tanlovi",
    "bespoke.solutions": "Maxsus yechimlar",
    "bespoke.solutions.desc": "Sizning noyob ehtiyojlaringiz uchun maxsus mahsulotlar",
    "luxury.and.quality": "Hashamat va sifat",
    "luxury.and.quality.desc": "Hashamatli va butik mehmonxonalar uchun mehmon qulayliklarining keng assortimenti",
    "environmental.responsibility": "Ekologik mas'uliyat",
    "environmental.responsibility.desc": "Barqaror, ekologik toza va qayta ishlanadigan mahsulotlar",

    // Hero
    "create.five.star": "Besh yulduzli tajriba yarating",
    "hero.description":
      "Biz mehmonxona va mehmondo'stlik savdosi uchun hashamatli mehmon qulayliklari va sifatli aksessuarlarni taqdim etamiz.",
    login: "Kirish",
    register: "Ro'yxatdan o'tish",

    // Sections
    "shop.bedding": "To'shak-ko'rpa sotib olish",
    "mini.fridges": "Mini muzlatgichlar",
    "shop.minibars": "Mini-barlar sotib olish",
    "login.or.register": "Kirish yoki ro'yxatdan o'tish",
    "login.description":
      "Buyurtmalar, hisob-fakturalar va boshqalarni boshqarish va kuzatish uchun hisobingizga kiring.",
    "already.customer": "Allaqachon mijoz? Kirish",
    "new.here": "Yangi foydalanuvchi? Ro'yxatdan o'tish",
    "luxury.accessories": "Hashamatli aksessuarlar",
    "shop.room.accessories": "Xona aksessuarlari sotib olish",

    // Categories
    "shop.bedroom": "Yotoq xonasi uchun",
    "shop.bathroom": "Hammom uchun",
    "shop.toiletries": "Shaxsiy gigiyena",
    "shop.guest.amenities": "Mehmon qulayliklari",

    // Coffee Station
    "coffee.station.title": "Xonada mukammal kofe stantsiyasini yarating",
    "coffee.station.desc": "Premium kofe jihozlari assortimenti bilan mehmonlaringiz tajribasini yaxshilang.",
    "shop.coffee": "Kofe sotib olish",

    // Product Showcases
    "discover.bathrobes": "Bizning xalatlarimizni kashf eting",
    "geneva.green.dispensers": "Geneva Green dozatorlar",
    "products.we.love": "Biz yaxshi ko'radigan mahsulotlar",

    // Footer
    "footer.description":
      "Mehmonxona sanoati uchun mebel, to'qimachilik va yechimlarning yetakchi yetkazib beruvchisi. Butun dunyo bo'ylab 10,000+ mehmonxonalar tomonidan ishonilgan.",
    "quick.links": "Tezkor havolalar",
    "customer.service": "Mijozlarga xizmat",
    "follow.us": "Bizni kuzatib boring",
    "all.rights.reserved": "Barcha huquqlar himoyalangan",

    // Mega Dropdown - Bathroom
    "towels.comfort": "Sochiqlar va qulaylik",
    towels: "Sochiqlar",
    "hand.towels": "Qo'l va yuz sochiqlar",
    bathrobes: "Xalatlar",
    slippers: "Shippaklar",
    "bathroom.equipment": "Hammom jihozlari",
    "bath.shower.mats": "Vanna va dush gilamlari",
    mirrors: "Oynalar",
    scales: "Tarozilar",
    bins: "Axlat qutilari",
    "hygiene.bag.dispensers": "Gigiena sumkalar dozatorlari",
    "tissue.box.covers": "Salfetkalar qutisi qoplamalari",
    "toilet.brushes": "Hojatxona cho'tkalari",
    consumables: "Sarflanadigan materiallar",
    "guest.amenities": "Mehmon qulayliklari",
    accessories: "Aksessuarlar",
    "bathroom.accessories": "Hammom aksessuarlari",
    "display.trays": "Ko'rgazma patnislari",
    "shop.all.bathroom": "Barcha hammom mahsulotlari",
    "discover.bathroom.products":
      "Mehmonlaringizning hammomlariga xizmat ko'rsatish uchun barcha mahsulotlarimizni kashf eting",

    // Main Content Section
    createFiveStar: "Besh yulduzli tajriba yarating",
    luxuriousGuestAmenities:
      "Biz mehmonxona va mehmondo'stlik savdosi uchun hashamatli mehmon qulayliklari va sifatli aksessuarlarni taqdim etamiz.",
    shopBedding: "To'shak-ko'rpa sotib olish",
    miniFridges: "Mini muzlatgichlar",
    shopMinibars: "Mini-barlar sotib olish",
    luxuryAccessories: "Hashamatli aksessuarlar",
    shopRoomAccessories: "Xona aksessuarlari sotib olish",
    loginOrRegister: "Kirish yoki ro'yxatdan o'tish",
    loginDescription: "Buyurtmalar, hisob-fakturalar va boshqalarni boshqarish va kuzatish uchun hisobingizga kiring.",
    alreadyCustomer: "Allaqachon mijoz? Kirish",
    newHereRegister: "Yangi foydalanuvchi? Ro'yxatdan o'tish",

    // Features
    "extensive.product.range": "Keng mahsulot assortimenti",
    "extensive.product.range.desc": "Mehmon qulayliklari va aksessuarlarning keng tanlovi",
    "bespoke.solutions": "Maxsus yechimlar",
    "bespoke.solutions.desc": "Sizning noyob ehtiyojlaringiz uchun maxsus mahsulotlar",
    "luxury.and.quality": "Hashamat va sifat",
    "luxury.and.quality.desc": "Hashamatli va butik mehmonxonalar uchun mehmon qulayliklarining keng assortimenti",
    "environmental.responsibility": "Ekologik mas'uliyat",
    "environmental.responsibility.desc": "Barqaror, ekologik toza va qayta ishlanadigan mahsulotlar",

    // Main Content
    createFiveStar: "Besh yulduzli tajriba yarating",
    luxuriousGuestAmenities: "Biz mehmonxona va mehmondo'stlik savdosi uchun hashamatli mehmon qulayliklari va sifatli aksessuarlarni taqdim etamiz",
    shopBedding: "To'shak-ko'rpa sotib olish",
    miniFridges: "Mini muzlatgichlar",
    shopMinibars: "Mini-barlar sotib olish",
    luxuryAccessories: "Hashamatli aksessuarlar",
    shopRoomAccessories: "Xona aksessuarlari sotib olish",
    loginOrRegister: "Kirish yoki ro'yxatdan o'tish",
    loginDescription: "Buyurtmalar, hisob-fakturalar va boshqalarni boshqarish va kuzatish uchun hisobingizga kiring",
    alreadyCustomer: "Allaqachon mijoz? Kirish",
    newHereRegister: "Yangi foydalanuvchi? Ro'yxatdan o'tish",

    // Category Grid
    "shop.bedroom": "Yotoq xonasi uchun",
    "shop.bathroom": "Hammom uchun",
    "shop.toiletries": "Shaxsiy gigiyena",
    "shop.guest.amenities": "Mehmon qulayliklari",
    "explore.collection": "Kolleksiyani o'rganish",

    // Product Showcase
    "discover.bathrobes": "Bizning xalatlarimizni kashf eting",
    "geneva.green.dispensers": "Geneva Green dozatorlar",
    "products.we.love": "Biz yaxshi ko'radigan mahsulotlar",
    "view.all": "Barchasini ko'rish",

    // Footer Links
    shop: "Do'kon",
    company: "Kompaniya",
    support: "Yordam",
    "room.accessories": "Xona aksessuarlari",
    "bespoke.solutions": "Maxsus yechimlar",
    "eco.friendly.products": "Ekologik mahsulotlar",
    faqs: "Tez-tez so'raladigan savollar",
    "shipping.delivery": "Yetkazib berish",
    "returns.policy": "Qaytarish siyosati",
    "terms.conditions": "Shartlar va qoidalar",
    "privacy.policy": "Maxfiylik siyosati",
    "all.rights.reserved": "Barcha huquqlar himoyalangan.",

    // Geneva Dispensers Section
    "premium.eco.friendly": "Premium ekologik",
    "sustainable.dispensing": "Barqaror dozator yechimlari",
    "add.to.basket": "Savatga qo'shish",
    "add.to.compare": "Solishtirishga qo'shish",

    // Products We Love Section
    "perfect.guest.experience": "Mukammal mehmon tajribasi",
    "curated.hotel.essentials": "Tanlangan mehmonxona zaruriyatlari",

    // Customer Reviews
    "customers.say": "Mijozlarimiz",
    excellent: "A'lo",
    "out.of": "dan",
    "based.on": "asosida",
    reviews: "sharh",

    // Wishlist
    wishlist: "Sevimlilar",
    "wishlist.empty": "Sevimlilar ro'yxatingiz bo'sh",
    "wishlist.empty.desc":
      "Har qanday mahsulotdagi yurak belgisini bosish orqali sevimlilar ro'yxatiga mahsulot qo'shishni boshlang.",
    "continue.shopping": "Xarid qilishni davom ettirish",
    item: "mahsulot",
    items: "mahsulotlar",
  },
  en: {
    // Top Banner
    "free.delivery": "Free delivery on UK mainland orders over £250 (excl. VAT)",

    // Header
    hello: "Hello",
    "log.in": "Log In",
    search: "Search",
    "about.us": "About Us",
    blog: "Blog",
    delivery: "Delivery",
    contact: "Contact",

    // Navigation
    new: "New",
    bathroom: "Bathroom",
    bedroom: "Bedroom",
    toiletries: "Toiletries",
    "hotel.guest.amenities": "Hotel Guest Amenities",
    "childrens.amenities": "Children's Amenities",
    "pet.friendly": "Pet Friendly",
    "eco.friendly.products": "Eco Friendly Products",
    brands: "Brands",
    clearance: "Clearance",

    // Features
    "extensive.product.range": "Extensive Product Range",
    "extensive.product.range.desc": "Extensive selection of guest amenities and accessories",
    "bespoke.solutions": "Bespoke Solutions",
    "bespoke.solutions.desc": "Tailor-made products to meet your unique needs",
    "luxury.and.quality": "Luxury and Quality",
    "luxury.and.quality.desc": "A wide range of guest amenities for luxury and boutique hotels",
    "environmental.responsibility": "Environmental Responsibility",
    "environmental.responsibility.desc": "Sustainable, eco-friendly and recyclable products",

    // Hero
    "create.five.star": "Create a Five Star Experience",
    "hero.description":
      "We provide luxurious guest amenities and quality accessories to the hotel and hospitality trade.",
    login: "Login",
    register: "Register",

    // Sections
    "shop.bedding": "Shop Bedding",
    "mini.fridges": "Mini Fridges",
    "shop.minibars": "Shop Minibars",
    "login.or.register": "Login or Register",
    "login.description": "Login to your account to manage and track orders, invoices and more.",
    "already.customer": "Already a customer? Log in",
    "new.here": "New here? Register now",
    "luxury.accessories": "Luxury Accessories",
    "shop.room.accessories": "Shop Room Accessories",

    // Categories
    "shop.bedroom": "Shop Bedroom",
    "shop.bathroom": "Shop Bathroom",
    "shop.toiletries": "Shop Toiletries",
    "shop.guest.amenities": "Shop Guest Amenities",
    "explore.collection": "Explore Collection",

    // Coffee Station
    "coffee.station.title": "Create the Perfect In-Room Coffee Station",
    "coffee.station.desc": "Enhance your guests' experience with our range of premium coffee supplies.",
    "shop.coffee": "Shop Coffee",

    // Product Showcases
    "discover.bathrobes": "Discover our Bathrobes",
    "geneva.green.dispensers": "Geneva Green Dispensers",
    "products.we.love": "Products We Love",

    // Footer
    "footer.description": "Industry-leading hotel supplies, furniture, textiles, and hospitality solutions. Trusted by 10,000+ hotels worldwide.",
    "quick.links": "Quick Links",
    "customer.service": "Customer Service",
    "follow.us": "Follow Us",
    "all.rights.reserved": "All rights reserved",

    // Mega Dropdown - Bathroom
    "towels.comfort": "Towels & Comfort",
    towels: "Towels",
    "hand.towels": "Hand Towels & Face Cloths",
    bathrobes: "Bathrobes",
    slippers: "Slippers",
    "bathroom.equipment": "Bathroom Equipment",
    "bath.shower.mats": "Bath & Shower Mats",
    mirrors: "Mirrors",
    scales: "Scales",
    bins: "Bins",
    "hygiene.bag.dispensers": "Hygiene Bag Dispensers",
    "tissue.box.covers": "Tissue Box Covers",
    "toilet.brushes": "Toilet Brushes",
    consumables: "Consumables",
    "guest.amenities": "Guest Amenities",
    accessories: "Accessories",
    "bathroom.accessories": "Bathroom Accessories",
    "display.trays": "Display Trays",
    "shop.all.bathroom": "Shop All Bathroom",
    "discover.bathroom.products": "Discover all our products to service your guest bathrooms",

    // Main Content Section
    createFiveStar: "Create a Five Star Experience",
    luxuriousGuestAmenities:
      "We provide luxurious guest amenities and quality accessories to the hotel and hospitality trade.",
    shopBedding: "Shop Bedding",
    miniFridges: "Mini Fridges",
    shopMinibars: "Shop Minibars",
    luxuryAccessories: "Luxury Accessories",
    shopRoomAccessories: "Shop Room Accessories",
    loginOrRegister: "Login or Register",
    loginDescription: "Login to your account to manage and track orders, invoices and more.",
    alreadyCustomer: "Already a customer? Log in",
    newHereRegister: "New here? Register now",

    // Product Showcase
    "discover.bathrobes": "Discover our Bathrobes",
    "geneva.green.dispensers": "Geneva Green Dispensers",
    "products.we.love": "Products We Love",
    "view.all": "View all",

    // Footer Links
    shop: "Shop",
    company: "Company",
    support: "Support",
    "room.accessories": "Room Accessories",
    "bespoke.solutions": "Bespoke Solutions",
    "eco.friendly.products": "Eco-Friendly Products",
    faqs: "FAQs",
    "shipping.delivery": "Shipping & Delivery",
    "returns.policy": "Returns Policy",
    "terms.conditions": "Terms & Conditions",
    "privacy.policy": "Privacy Policy",
    "all.rights.reserved": "All rights reserved.",

    // Geneva Dispensers Section
    "premium.eco.friendly": "Premium Eco-Friendly",
    "sustainable.dispensing": "Sustainable dispensing solutions",
    "add.to.basket": "Add to Basket",
    "add.to.compare": "Add to compare",

    // Products We Love Section
    "perfect.guest.experience": "Perfect Guest Experience",
    "curated.hotel.essentials": "Curated hotel essentials",

    // Customer Reviews
    "customers.say": "Our customers say",
    excellent: "Excellent",
    "out.of": "out of",
    "based.on": "based on",
    reviews: "reviews",

    // Wishlist
    wishlist: "My Wishlist",
    "wishlist.empty": "Your wishlist is empty",
    "wishlist.empty.desc": "Start adding products to your wishlist by clicking the heart icon on any product.",
    "continue.shopping": "Continue Shopping",
    item: "item",
    items: "items",
  },
}
