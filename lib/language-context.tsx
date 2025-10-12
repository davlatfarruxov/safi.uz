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
    main: "Главная",
    about: "О нас",
    factory: "Фабрика",
    products: "Продукты",
    "for.partners": "Для партнеров",
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
    "new.here": "Зарегистрироваться",
    "luxury.accessories": "Роскошные аксессуары",
    "shop.room.accessories": "Купить аксессуары",

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
    "bestsellers": "Бестселлеры",
    "popular.brands": "Популярные бренды",
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
    shopRoomAccessories: "Купить аксессуары",
    loginOrRegister: "Войти или зарегистрироваться",
    loginDescription: "Войдите в свою учетную запись для управления и отслеживания заказов, счетов и многого другого.",
    alreadyCustomer: "Уже клиент? Войти",
    newHereRegister: "Зарегистрироваться",

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
    "verified.customer": "Проверенный покупатель",

    // Welcome Section
    "welcome.title": "Добро пожаловать в Safi Hotel Collection",
    "welcome.description.1": "Safi Hotel Collection - это семейный бизнес с страстью к предоставлению высококачественных принадлежностей для гостиничных номеров. Имея более 25 лет специализированного опыта, мы гордимся тем, что являемся одним из ведущих поставщиков гостиничных принадлежностей в Узбекистане.",
    "welcome.description.2": "Независимо от того, являетесь ли вы престижным отелем в центре Ташкента, интимным бутик-отелем или независимым гостевым домом, мы здесь, чтобы поддержать вас на каждом этапе пути.",
    "welcome.signature": "Команда Safi",
    "discover.our.story": "Узнать нашу историю",

    // Wishlist
    wishlist: "Избранное",
    "wishlist.empty": "Ваш список желаний пуст",
    "wishlist.empty.desc": "Начните добавлять товары в избранное, нажав на значок сердца на любом товаре.",
    "continue.shopping": "Продолжить покупки",
    item: "товар",
    items: "товаров",

    // Products Page
    "all.products": "Все товары",
    "load.more": "Загрузить еще",

    // Category Pages
    "bathroom.title": "Ванная",
    "bathroom.description": "Премиум полотенца, халаты и аксессуары для ванной комнаты",
    "toiletries.title": "Туалетные принадлежности",
    "toiletries.description": "Премиум туалетные принадлежности и дозаторы для отелей и гостиниц",
    "hotel.guest.amenities.title": "Гостевые удобства",
    "hotel.guest.amenities.description": "Полные решения удобств для исключительного гостевого опыта",
    "childrens.amenities.title": "Детские удобства",
    "childrens.amenities.description": "Специальные удобства, разработанные для юных гостей и семей",
    "pet.friendly.title": "Для животных",
    "pet.friendly.description": "Премиум удобства для гостей, путешествующих со своими любимыми питомцами",
    "eco.friendly.products.title": "Экологичные продукты",
    "eco.friendly.products.description": "Устойчивые и экологически ответственные решения для гостиничного бизнеса",

    // Contact Page
    "contact.title": "Свяжитесь с нами",
    "contact.subtitle": "Мы здесь, чтобы помочь вам создать исключительные впечатления для гостей",
    "contact.ways.title": "Несколько способов связи",
    "contact.ways.subtitle": "Выберите удобный для вас способ",
    "contact.phone.title": "Телефонная поддержка",
    "contact.phone.description": "Говорите напрямую с нашими экспертами по гостеприимству",
    "contact.email.title": "Поддержка по электронной почте",
    "contact.email.description": "Отправьте нам подробные запросы и заявки",
    "contact.chat.title": "Онлайн чат",
    "contact.chat.description": "Получите мгновенные ответы на ваши вопросы",
    "contact.form.title": "Отправьте нам сообщение",
    "contact.form.subtitle": "Заполните форму ниже, и мы свяжемся с вами в ближайшее время",
    "contact.form.firstName": "Имя",
    "contact.form.lastName": "Фамилия",
    "contact.form.email": "Электронная почта",
    "contact.form.company": "Название отеля/компании",
    "contact.form.phone": "Номер телефона",
    "contact.form.message": "Как мы можем вам помочь?",
    "contact.form.messagePlaceholder": "Расскажите нам о потребностях вашего отеля, количестве номеров или конкретных требованиях...",
    "contact.form.consent": "Я согласен получать сообщения от Safi Hotel Collection и понимаю, что могу отписаться в любое время.",
    "contact.form.submit": "Отправить сообщение",
    "contact.form.thankYou": "Спасибо!",
    "contact.form.response": "Мы свяжемся с вами в течение 2 часов",
    "contact.locations.title": "Наши офисы",
    "contact.locations.subtitle": "Посетите нас в наших офисах по всему Узбекистану",
    "contact.locations.samarkand": "Самарканд",
    "contact.locations.tashkent": "Ташкент",
    "contact.locations.mainOffice": "Главный офис",
    "contact.locations.salesOffice": "Офис продаж",
    "contact.offer.title": "Что мы предлагаем",
    "contact.offer.consultation": "Экспертная консультация",
    "contact.offer.consultationDesc": "Получите персональные советы по лучшим решениям для гостеприимства для вашей собственности",
    "contact.offer.delivery": "Быстрая доставка",
    "contact.offer.deliveryDesc": "Быстрая и надежная доставка по Узбекистану и Центральной Азии",
    "contact.offer.quality": "Гарантия качества",
    "contact.offer.qualityDesc": "Премиум продукты, подкрепленные нашей приверженностью к совершенству",
    "contact.faq.title": "Есть вопросы?",
    "contact.faq.subtitle": "Ознакомьтесь с часто задаваемыми вопросами или свяжитесь с нами напрямую",
    "contact.faq.button": "Посмотреть FAQ",
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
    main: "Asosiy",
    about: "Biz haqimizda",
    factory: "Zavod",
    products: "Mahsulotlar",
    "for.partners": "Hamkorlar uchun",
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
    "bestsellers": "Eng ko'p sotilganlar",
    "popular.brands": "Mashhur brendlar",
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
    newHereRegister: " Ro'yxatdan o'tish",

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
    "verified.customer": "Tasdiqlangan mijoz",

    // Welcome Section
    "welcome.title": "Safi Hotel Collection ga xush kelibsiz",
    "welcome.description.1": "Safi Hotel Collection - bu mehmonxona xonalari uchun yuqori sifatli jihozlar taqdim etishga ishtiyoqli oilaviy biznes. 25 yildan ortiq ixtisoslashgan tajribaga ega bo'lib, biz O'zbekistonning yetakchi mehmonxona jihozlari yetkazib beruvchilaridan biri ekanligimizdan faxrlanamiz.",
    "welcome.description.2": "Siz Toshkent markazidagi nufuzli mehmonxona, samimiy butik mehmonxona yoki mustaqil mehmon uyi bo'lasizmi, biz yo'lning har bir bosqichida sizni qo'llab-quvvatlash uchun shu yerdamiz.",
    "welcome.signature": "Safi jamoasi",
    "discover.our.story": "Bizning hikoyamizni bilib oling",

    // Wishlist
    wishlist: "Sevimlilar",
    "wishlist.empty": "Sevimlilar ro'yxatingiz bo'sh",
    "wishlist.empty.desc":
      "Har qanday mahsulotdagi yurak belgisini bosish orqali sevimlilar ro'yxatiga mahsulot qo'shishni boshlang.",
    "continue.shopping": "Xarid qilishni davom ettirish",
    item: "mahsulot",
    items: "mahsulotlar",

    // Products Page
    "all.products": "Barcha mahsulotlar",
    "load.more": "Ko'proq yuklash",

    // Category Pages
    "bathroom.title": "Hammom",
    "bathroom.description": "Premium sochiqlar, xalatlar va hammom aksessuarlari",
    "toiletries.title": "Shaxsiy gigiyena vositalari",
    "toiletries.description": "Mehmonxonalar uchun premium gigiyena vositalari va dozatorlar",
    "hotel.guest.amenities.title": "Mehmon qulayliklari",
    "hotel.guest.amenities.description": "Ajoyib mehmon tajribasi uchun to'liq qulaylik yechimlari",
    "childrens.amenities.title": "Bolalar qulayliklari",
    "childrens.amenities.description": "Yosh mehmonlar va oilalar uchun maxsus ishlab chiqilgan qulayliklar",
    "pet.friendly.title": "Uy hayvonlari uchun",
    "pet.friendly.description": "Sevimli uy hayvonlari bilan sayohat qiluvchi mehmonlar uchun premium qulayliklar",
    "eco.friendly.products.title": "Ekologik mahsulotlar",
    "eco.friendly.products.description": "Mehmonxona biznesi uchun barqaror va ekologik mas'ul yechimlar",

    // Contact Page
    "contact.title": "Biz bilan bog'laning",
    "contact.subtitle": "Biz sizga ajoyib mehmon tajribasini yaratishda yordam berish uchun shu yerdamiz",
    "contact.ways.title": "Bog'lanishning bir necha usuli",
    "contact.ways.subtitle": "Siz uchun qulay bo'lgan usulni tanlang",
    "contact.phone.title": "Telefon orqali yordam",
    "contact.phone.description": "Mehmonxona mutaxassislarimiz bilan bevosita gaplashing",
    "contact.email.title": "Elektron pochta orqali yordam",
    "contact.email.description": "Bizga batafsil so'rovlar va talablaringizni yuboring",
    "contact.chat.title": "Jonli chat",
    "contact.chat.description": "Savollaringizga zudlik bilan javob oling",
    "contact.form.title": "Bizga xabar yuboring",
    "contact.form.subtitle": "Quyidagi formani to'ldiring va biz tez orada siz bilan bog'lanamiz",
    "contact.form.firstName": "Ism",
    "contact.form.lastName": "Familiya",
    "contact.form.email": "Elektron pochta",
    "contact.form.company": "Mehmonxona/Kompaniya nomi",
    "contact.form.phone": "Telefon raqami",
    "contact.form.message": "Sizga qanday yordam bera olamiz?",
    "contact.form.messagePlaceholder": "Mehmonxonangizning ehtiyojlari, xonalar soni yoki maxsus talablar haqida bizga ayting...",
    "contact.form.consent": "Men Safi Hotel Collection dan xabarlar olishga roziman va istalgan vaqtda obunani bekor qila olishimni tushunaman.",
    "contact.form.submit": "Xabar yuborish",
    "contact.form.thankYou": "Rahmat!",
    "contact.form.response": "Biz 2 soat ichida siz bilan bog'lanamiz",
    "contact.locations.title": "Bizning ofislarimiz",
    "contact.locations.subtitle": "O'zbekiston bo'ylab joylashgan ofislarimizga tashrif buyuring",
    "contact.locations.samarkand": "Samarqand",
    "contact.locations.tashkent": "Toshkent",
    "contact.locations.mainOffice": "Bosh ofis",
    "contact.locations.salesOffice": "Sotuv ofisi",
    "contact.offer.title": "Biz nima taklif qilamiz",
    "contact.offer.consultation": "Mutaxassis maslahati",
    "contact.offer.consultationDesc": "Mulkingiz uchun eng yaxshi mehmonxona yechimlari bo'yicha shaxsiy maslahat oling",
    "contact.offer.delivery": "Tez yetkazib berish",
    "contact.offer.deliveryDesc": "O'zbekiston va Markaziy Osiyo bo'ylab tez va ishonchli yetkazib berish",
    "contact.offer.quality": "Sifat kafolati",
    "contact.offer.qualityDesc": "Mukammallikka bo'lgan majburiyatimiz bilan qo'llab-quvvatlanadigan premium mahsulotlar",
    "contact.faq.title": "Savollaringiz bormi?",
    "contact.faq.subtitle": "Tez-tez so'raladigan savollarni ko'ring yoki biz bilan bevosita bog'laning",
    "contact.faq.button": "FAQ ni ko'rish",
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
    main: "Main",
    about: "About",
    factory: "Factory",
    products: "Products",
    "for.partners": "For Partners",
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
    "bestsellers": "Bestsellers",
    "popular.brands": "Popular Brands",
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
    "verified.customer": "Verified Customer",

    // Welcome Section
    "welcome.title": "Welcome to Safi Hotel Collection",
    "welcome.description.1": "Safi Hotel Collection is a family-run business with a passion for providing top-quality hotel room supplies. With over 25 years of dedicated expertise, we take pride in being one of Uzbekistan's foremost hospitality suppliers.",
    "welcome.description.2": "Whether you're a prestigious hotel in central Tashkent, an intimate boutique retreat or an independent guest house, we're here to support you every step of the way.",
    "welcome.signature": "The Safi Team",
    "discover.our.story": "Discover Our Story",

    // Wishlist
    wishlist: "My Wishlist",
    "wishlist.empty": "Your wishlist is empty",
    "wishlist.empty.desc": "Start adding products to your wishlist by clicking the heart icon on any product.",
    "continue.shopping": "Continue Shopping",
    item: "item",
    items: "items",

    // Products Page
    "all.products": "All Products",
    "load.more": "Load More",

    // Category Pages
    "bathroom.title": "Bathroom",
    "bathroom.description": "Premium towels, bathrobes and bathroom accessories",
    "toiletries.title": "Toiletries",
    "toiletries.description": "Premium toiletries and dispensers for hotels and hospitality",
    "hotel.guest.amenities.title": "Hotel Guest Amenities",
    "hotel.guest.amenities.description": "Complete amenity solutions for exceptional guest experiences",
    "childrens.amenities.title": "Children's Amenities",
    "childrens.amenities.description": "Special amenities designed for young guests and families",
    "pet.friendly.title": "Pet Friendly",
    "pet.friendly.description": "Premium amenities for guests traveling with their beloved pets",
    "eco.friendly.products.title": "Eco-Friendly Products",
    "eco.friendly.products.description": "Sustainable and environmentally responsible hospitality solutions",

    // Contact Page
    "contact.title": "Get in Touch",
    "contact.subtitle": "We're here to help you create exceptional guest experiences",
    "contact.ways.title": "Multiple Ways to Connect",
    "contact.ways.subtitle": "Choose the method that works best for you",
    "contact.phone.title": "Phone Support",
    "contact.phone.description": "Speak directly with our hospitality experts",
    "contact.email.title": "Email Support",
    "contact.email.description": "Send us detailed inquiries and requests",
    "contact.chat.title": "Live Chat",
    "contact.chat.description": "Get instant answers to your questions",
    "contact.form.title": "Send us a Message",
    "contact.form.subtitle": "Fill out the form below and we'll get back to you shortly",
    "contact.form.firstName": "First Name",
    "contact.form.lastName": "Last Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Hotel/Company Name",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "How can we help you?",
    "contact.form.messagePlaceholder": "Tell us about your hotel's needs, room count, or specific requirements...",
    "contact.form.consent": "I agree to receive communications from Safi Hotel Collection and understand that I can unsubscribe at any time.",
    "contact.form.submit": "Send Message",
    "contact.form.thankYou": "Thank You!",
    "contact.form.response": "We'll get back to you within 2 hours",
    "contact.locations.title": "Our Locations",
    "contact.locations.subtitle": "Visit us at our offices across Uzbekistan",
    "contact.locations.samarkand": "Samarkand",
    "contact.locations.tashkent": "Tashkent",
    "contact.locations.mainOffice": "Main Office",
    "contact.locations.salesOffice": "Sales Office",
    "contact.offer.title": "What We Offer",
    "contact.offer.consultation": "Expert Consultation",
    "contact.offer.consultationDesc": "Get personalized advice on the best hospitality solutions for your property",
    "contact.offer.delivery": "Fast Delivery",
    "contact.offer.deliveryDesc": "Quick and reliable delivery across Uzbekistan and Central Asia",
    "contact.offer.quality": "Quality Guarantee",
    "contact.offer.qualityDesc": "Premium products backed by our commitment to excellence",
    "contact.faq.title": "Have Questions?",
    "contact.faq.subtitle": "Check out our frequently asked questions or contact us directly",
    "contact.faq.button": "View FAQ",
  },
}
