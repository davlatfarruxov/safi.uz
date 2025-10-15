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

    // Star Rating Cards
    "star.rating.title": "Выберите категорию вашего отеля",
    "star.rating.subtitle": "Найдите идеальные удобства для звездности вашего отеля",
    "star.rating.explore": "Изучить коллекцию",
    "star.rating.budget.title": "Бюджетные отели",
    "star.rating.budget.description": "Основные удобства для экономных путешественников",
    "star.rating.budget.feature1": "Базовые туалетные принадлежности",
    "star.rating.budget.feature2": "Стандартные полотенца",
    "star.rating.budget.feature3": "Простые удобства",
    "star.rating.economy.title": "Эконом отели",
    "star.rating.economy.description": "Комфортные удобства с хорошим соотношением цены и качества",
    "star.rating.economy.feature1": "Качественные туалетные принадлежности",
    "star.rating.economy.feature2": "Мягкие полотенца",
    "star.rating.economy.feature3": "Базовые удобства номера",
    "star.rating.midrange.title": "Отели среднего класса",
    "star.rating.midrange.description": "Повышенный комфорт и качественные удобства",
    "star.rating.midrange.feature1": "Премиум туалетные принадлежности",
    "star.rating.midrange.feature2": "Плюшевые полотенца",
    "star.rating.midrange.feature3": "Приветственные удобства",
    "star.rating.upscale.title": "Высококлассные отели",
    "star.rating.upscale.description": "Превосходные удобства и роскошные штрихи",
    "star.rating.upscale.feature1": "Роскошные туалетные принадлежности",
    "star.rating.upscale.feature2": "Полотенца из египетского хлопка",
    "star.rating.upscale.feature3": "Премиум удобства",
    "star.rating.luxury.title": "Роскошные отели",
    "star.rating.luxury.description": "Исключительная роскошь и персонализированный сервис",
    "star.rating.luxury.feature1": "Индивидуальные туалетные принадлежности",
    "star.rating.luxury.feature2": "Премиум постельное белье",
    "star.rating.luxury.feature3": "Эксклюзивные удобства",

    // Premium Amenities Section
    "premium.amenities.title": "Премиум удобства",
    "premium.amenities.hero.title": "Роскошный отельный опыт",
    "premium.amenities.hero.subtitle": "Исключительные удобства для взыскательных гостей",
    "discover.collection": "Открыть коллекцию",

    // About Page
    "about.hero.title": "О нас",
    "about.hero.subtitle": "Поставляем высококачественные товары по доступным ценам для отелей и курортов",
    "about.hero.cta": "Наши услуги",
    "about.story.title": "Наша история",
    "about.story.p1": "Safi Hotel Collection - новый, но очень перспективный поставщик гостиничного оборудования в Узбекистане и Центральной Азии. Мы специализируемся на предоставлении товаров высочайшего качества по самым доступным ценам для отелей, санаториев и курортов.",
    "about.story.p2": "Наша цель - обеспечить каждому клиенту превосходное обслуживание и помочь создать незабываемые впечатления для их гостей. Мы сотрудничаем только с лучшими брендами и надежными поставщиками.",
    "about.story.p3": "Наша цель - предоставить каждому клиенту товары высочайшего качества по самым выгодным ценам. Благодаря современным технологиям и прямому сотрудничеству с поставщиками, мы предлагаем нашим клиентам экономию до 30%.",
    "about.experience": "Лет опыта",
    "about.stats.title": "Наши достижения",
    "about.stats.subtitle": "Наш успех в цифрах",
    "about.stats.quality": "Премиум качество",
    "about.stats.savings": "Экономия средств",
    "about.stats.support": "Поддержка клиентов",
    "about.stats.clients": "Довольных клиентов",
    "about.stats.cities": "Обслуживаемых городов",
    "about.stats.satisfaction": "Гарантия качества",
    "about.services.title": "Наши услуги",
    "about.services.subtitle": "Предоставляем комплексные решения для отелей и курортов",
    "about.services.bedding": "Премиум постельное белье",
    "about.services.bedding.desc": "Высококачественное постельное белье, подушки и защитные чехлы для матрасов",
    "about.services.toiletries": "Гигиенические товары",
    "about.services.toiletries.desc": "Полный ассортимент туалетных принадлежностей и средств личной гигиены",
    "about.services.furniture": "Гостиничная мебель",
    "about.services.furniture.desc": "Элегантные и долговечные мебельные решения для гостиничного бизнеса",
    "about.services.tableware": "Посуда и столовые приборы",
    "about.services.tableware.desc": "Профессиональная посуда, стеклянная посуда и столовые приборы",
    "about.services.cleaning": "Чистящие средства",
    "about.services.cleaning.desc": "Экологически чистые чистящие средства для гостиничной индустрии",
    "about.services.amenities": "Гостевые удобства",
    "about.services.amenities.desc": "Полные пакеты удобств для исключительного гостевого опыта",
    "about.mission.title": "Наша миссия",
    "about.mission.text": "Мы способствуем успеху предприятий гостиничной и туристической отрасли, предоставляя товары высочайшего качества и профессиональные услуги. Наша цель - помочь каждому клиенту создать незабываемый и комфортный опыт проживания для своих гостей.",
    "about.values.quality": "Гарантия высокого качества",
    "about.values.service": "Профессиональное обслуживание",
    "about.values.innovation": "Инновационные решения",
    "about.values.partnership": "Долгосрочное партнерство",
    "about.cta.title": "Познакомьтесь с нашей командой",
    "about.cta.subtitle": "Поможем найти лучшие решения для вашего проекта",
    "about.cta.catalog": "Посмотреть каталог",

    // Mega Dropdown
    "towels.comfort": "Полотенца и комфорт",
    "bathroom.equipment": "Оборудование для ванной",
    "guest.toiletries": "Туалетные принадлежности для гостей",
    "dispensers": "Дозаторы",
    "packaging": "Упаковка",
    "welcome.kits": "Приветственные наборы",
    "room.amenities": "Удобства номера",
    "spa.wellness": "Спа и велнес",
    "shampoo": "Шампунь",
    "conditioner": "Кондиционер",
    "body.wash": "Гель для душа",
    "soap": "Мыло",
    "wall.dispensers": "Настенные дозаторы",
    "refills": "Заправки",
    "bottles": "Бутылки",
    "tubes": "Тубы",
    "premium.welcome": "Премиум приветственные наборы",
    "budget.welcome": "Бюджетные приветственные наборы",
    "custom.welcome": "Индивидуальные приветственные наборы",
    "coffee.station": "Кофейная станция",
    "mini.bar": "Принадлежности мини-бара",
    "room.service": "Обслуживание номеров",
    "spa.amenities": "Спа удобства",
    "wellness.kits": "Велнес наборы",
    "shop.all.toiletries": "Купить все туалетные принадлежности",
    "shop.all.amenities": "Купить все удобства",
    "premium.toiletries.guests": "Премиум туалетные принадлежности для гостей",
    "complete.amenity.solutions": "Полные решения удобств для исключительного гостевого опыта",
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

    // Star Rating Cards
    "star.rating.title": "Mehmonxonangiz kategoriyasini tanlang",
    "star.rating.subtitle": "Mehmonxonangizning yulduz reytingi uchun mukammal qulayliklarni toping",
    "star.rating.explore": "Kolleksiyani o'rganish",
    "star.rating.budget.title": "Byudjet mehmonxonalar",
    "star.rating.budget.description": "Tejamkor sayohatchilar uchun asosiy qulayliklar",
    "star.rating.budget.feature1": "Asosiy gigiyena vositalari",
    "star.rating.budget.feature2": "Standart sochiqlar",
    "star.rating.budget.feature3": "Oddiy qulayliklar",
    "star.rating.economy.title": "Iqtisodiy mehmonxonalar",
    "star.rating.economy.description": "Yaxshi narx-sifat nisbati bilan qulay qulayliklar",
    "star.rating.economy.feature1": "Sifatli gigiyena vositalari",
    "star.rating.economy.feature2": "Yumshoq sochiqlar",
    "star.rating.economy.feature3": "Asosiy xona qulayliklari",
    "star.rating.midrange.title": "O'rta sinf mehmonxonalar",
    "star.rating.midrange.description": "Yaxshilangan qulaylik va sifatli qulayliklar",
    "star.rating.midrange.feature1": "Premium gigiyena vositalari",
    "star.rating.midrange.feature2": "Yumshoq sochiqlar",
    "star.rating.midrange.feature3": "Xush kelibsiz qulayliklari",
    "star.rating.upscale.title": "Yuqori sinf mehmonxonalar",
    "star.rating.upscale.description": "Ajoyib qulayliklar va hashamatli detallar",
    "star.rating.upscale.feature1": "Hashamatli gigiyena vositalari",
    "star.rating.upscale.feature2": "Misr paxtasi sochiqlar",
    "star.rating.upscale.feature3": "Premium qulayliklar",
    "star.rating.luxury.title": "Hashamatli mehmonxonalar",
    "star.rating.luxury.description": "Ajoyib hashamat va shaxsiy xizmat",
    "star.rating.luxury.feature1": "Maxsus gigiyena vositalari",
    "star.rating.luxury.feature2": "Premium choyshablar",
    "star.rating.luxury.feature3": "Eksklyuziv qulayliklar",

    // Premium Amenities Section
    "premium.amenities.title": "Premium qulayliklar",
    "premium.amenities.hero.title": "Hashamatli mehmonxona tajribasi",
    "premium.amenities.hero.subtitle": "Talabchan mehmonlar uchun ajoyib qulayliklar",
    "discover.collection": "Kolleksiyani kashf etish",

    // About Page
    "about.hero.title": "Biz Haqimizda",
    "about.hero.subtitle": "Mehmonxonalar va dam olish maskanlari uchun yuqori sifatli va arzon narxdagi mahsulotlar yetkazib beramiz",
    "about.hero.cta": "Bizning Xizmatlar",
    "about.story.title": "Bizning Hikoyamiz",
    "about.story.p1": "Safi Hotel Collection - O'zbekiston va Markaziy Osiyoda yangi tashkil etilgan, ammo juda istiqbolli mehmonxona jihozlari yetkazib beruvchisi. Biz mehmonxonalar, sanatoriyalar va dam olish maskanlariga eng yuqori sifatli mahsulotlarni eng arzon narxlarda taqdim etishga ixtisoslashganmiz.",
    "about.story.p2": "Bizning maqsadimiz - har bir mijozga mukammal xizmat ko'rsatish va ularning mehmonlariga unutilmas tajriba yaratishda yordam berish. Biz faqat eng yaxshi brendlar va ishonchli yetkazib beruvchilar bilan hamkorlik qilamiz.",
    "about.story.p3": "Bizning maqsadimiz - har bir mijozga eng sifatli mahsulotlarni eng qulay narxlarda taqdim etish. Zamonaviy texnologiyalar va to'g'ridan-to'g'ri yetkazib beruvchilar bilan hamkorlik qilish orqali biz mijozlarimizga 30% gacha tejash imkoniyatini taqdim etamiz.",
    "about.experience": "Yillik Tajriba",
    "about.stats.title": "Bizning Yutuqlarimiz",
    "about.stats.subtitle": "Raqamlar orqali bizning muvaffaqiyatimiz",
    "about.stats.quality": "Premium Sifat",
    "about.stats.savings": "Pul Tejash",
    "about.stats.support": "Mijozlar Yordami",
    "about.stats.clients": "Mamnun Mijozlar",
    "about.stats.cities": "Xizmat Ko'rsatilgan Shaharlar",
    "about.stats.satisfaction": "Sifat Kafolati",
    "about.services.title": "Bizning Xizmatlarimiz",
    "about.services.subtitle": "Mehmonxonalar va dam olish maskanlari uchun to'liq yechimlar taqdim etamiz",
    "about.services.bedding": "Premium To'shak-Ko'rpa",
    "about.services.bedding.desc": "Yuqori sifatli choyshablar, yostiqlar va matras himoyachilari",
    "about.services.toiletries": "Gigiyena Vositalari",
    "about.services.toiletries.desc": "Shaxsiy gigiyena vositalari va parvarish mahsulotlarining to'liq assortimenti",
    "about.services.furniture": "Mehmonxona Mebellari",
    "about.services.furniture.desc": "Mehmonxona biznesi uchun nafis va bardoshli mebel yechimlari",
    "about.services.tableware": "Idish-Tovoq va Stolga Buyumlar",
    "about.services.tableware.desc": "Professional darajadagi idishlar, shisha buyumlar va pichoq-vilkalar",
    "about.services.cleaning": "Tozalash Mahsulotlari",
    "about.services.cleaning.desc": "Mehmonxona sanoati uchun ekologik toza tozalash yechimlari",
    "about.services.amenities": "Mehmon Qulayliklari",
    "about.services.amenities.desc": "Ajoyib mehmon tajribasi uchun to'liq qulaylik paketlari",
    "about.mission.title": "Bizning Maqsadimiz",
    "about.mission.text": "Biz mehmonxona va turizm sohasida faoliyat yurituvchi korxonalarga eng yuqori sifatli mahsulotlar va professional xizmatlar taqdim etish orqali ularning muvaffaqiyatiga hissa qo'shamiz. Bizning maqsadimiz - har bir mijozning mehmonlariga unutilmas va qulay yashash tajribasini yaratishda yordam berish.",
    "about.values.quality": "Yuqori sifat kafolati",
    "about.values.service": "Professional xizmat",
    "about.values.innovation": "Innovatsion yechimlar",
    "about.values.partnership": "Uzoq muddatli hamkorlik",
    "about.cta.title": "Bizning Jamoamiz Bilan Tanishing",
    "about.cta.subtitle": "Sizning loyihangiz uchun eng yaxshi yechimlarni topishda yordam beramiz",
    "about.cta.catalog": "Katalog Ko'rish",

    // Mega Dropdown
    "towels.comfort": "Sochiqlar va qulaylik",
    "bathroom.equipment": "Hammom jihozlari",
    "guest.toiletries": "Mehmon gigiyena vositalari",
    "dispensers": "Dozatorlar",
    "packaging": "Qadoqlash",
    "welcome.kits": "Xush kelibsiz to'plamlari",
    "room.amenities": "Xona qulayliklari",
    "spa.wellness": "Spa va salomatlik",
    "shampoo": "Shampun",
    "conditioner": "Konditsioner",
    "body.wash": "Tana yuvish geli",
    "soap": "Sovun",
    "wall.dispensers": "Devorga o'rnatiladigan dozatorlar",
    "refills": "Qo'shimcha to'ldirish",
    "bottles": "Shishalar",
    "tubes": "Tubalar",
    "premium.welcome": "Premium xush kelibsiz to'plamlari",
    "budget.welcome": "Byudjet xush kelibsiz to'plamlari",
    "custom.welcome": "Maxsus xush kelibsiz to'plamlari",
    "coffee.station": "Kofe stantsiyasi",
    "mini.bar": "Mini bar jihozlari",
    "room.service": "Xona xizmati",
    "spa.amenities": "Spa qulayliklari",
    "wellness.kits": "Salomatlik to'plamlari",
    "shop.all.toiletries": "Barcha gigiyena vositalarini sotib olish",
    "shop.all.amenities": "Barcha qulayliklarni sotib olish",
    "premium.toiletries.guests": "Mehmonlar uchun premium gigiyena vositalari",
    "complete.amenity.solutions": "Ajoyib mehmon tajribasi uchun to'liq qulaylik yechimlari",
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

    // Star Rating Cards
    "star.rating.title": "Choose Your Hotel Category",
    "star.rating.subtitle": "Find the perfect amenities for your hotel's star rating",
    "star.rating.explore": "Explore Collection",
    "star.rating.budget.title": "Budget Hotels",
    "star.rating.budget.description": "Essential amenities for budget-conscious travelers",
    "star.rating.budget.feature1": "Basic toiletries",
    "star.rating.budget.feature2": "Standard towels",
    "star.rating.budget.feature3": "Simple amenities",
    "star.rating.economy.title": "Economy Hotels",
    "star.rating.economy.description": "Comfortable amenities with good value",
    "star.rating.economy.feature1": "Quality toiletries",
    "star.rating.economy.feature2": "Soft towels",
    "star.rating.economy.feature3": "Basic room amenities",
    "star.rating.midrange.title": "Mid-Range Hotels",
    "star.rating.midrange.description": "Enhanced comfort and quality amenities",
    "star.rating.midrange.feature1": "Premium toiletries",
    "star.rating.midrange.feature2": "Plush towels",
    "star.rating.midrange.feature3": "Welcome amenities",
    "star.rating.upscale.title": "Upscale Hotels",
    "star.rating.upscale.description": "Superior amenities and luxury touches",
    "star.rating.upscale.feature1": "Luxury toiletries",
    "star.rating.upscale.feature2": "Egyptian cotton towels",
    "star.rating.upscale.feature3": "Premium amenities",
    "star.rating.luxury.title": "Luxury Hotels",
    "star.rating.luxury.description": "Exceptional luxury and personalized service",
    "star.rating.luxury.feature1": "Bespoke toiletries",
    "star.rating.luxury.feature2": "Premium linens",
    "star.rating.luxury.feature3": "Exclusive amenities",

    // Premium Amenities Section
    "premium.amenities.title": "Premium Amenities",
    "premium.amenities.hero.title": "Luxury Hotel Experience",
    "premium.amenities.hero.subtitle": "Exceptional amenities for discerning guests",
    "discover.collection": "Discover Collection",

    // About Page
    "about.hero.title": "About Us",
    "about.hero.subtitle": "Delivering high-quality products at affordable prices to hotels and resorts",
    "about.hero.cta": "Our Services",
    "about.story.title": "Our Story",
    "about.story.p1": "Safi Hotel Collection is a newly established but highly promising hotel equipment supplier in Uzbekistan and Central Asia. We specialize in providing the highest quality products at the most affordable prices to hotels, sanatoriums, and resorts.",
    "about.story.p2": "Our goal is to provide excellent service to every client and help create unforgettable experiences for their guests. We only work with the best brands and reliable suppliers.",
    "about.story.p3": "Our goal is to provide every client with the highest quality products at the most competitive prices. Through modern technology and direct partnerships with suppliers, we offer our clients savings of up to 30%.",
    "about.experience": "Years of Experience",
    "about.stats.title": "Our Achievements",
    "about.stats.subtitle": "Our success in numbers",
    "about.stats.quality": "Premium Quality",
    "about.stats.savings": "Cost Savings",
    "about.stats.support": "Customer Support",
    "about.stats.clients": "Satisfied Clients",
    "about.stats.cities": "Cities Served",
    "about.stats.satisfaction": "Quality Guarantee",
    "about.services.title": "Our Services",
    "about.services.subtitle": "We provide comprehensive solutions for hotels and resorts",
    "about.services.bedding": "Premium Bedding",
    "about.services.bedding.desc": "High-quality bed linens, pillows, and mattress protectors",
    "about.services.toiletries": "Hygiene Products",
    "about.services.toiletries.desc": "Complete range of toiletries and personal care items",
    "about.services.furniture": "Hotel Furniture",
    "about.services.furniture.desc": "Elegant and durable furniture solutions for hospitality",
    "about.services.tableware": "Tableware & Dinnerware",
    "about.services.tableware.desc": "Professional-grade dishes, glassware, and cutlery",
    "about.services.cleaning": "Cleaning Products",
    "about.services.cleaning.desc": "Eco-friendly cleaning solutions for hospitality industry",
    "about.services.amenities": "Guest Amenities",
    "about.services.amenities.desc": "Complete amenity packages for exceptional guest experience",
    "about.mission.title": "Our Mission",
    "about.mission.text": "We contribute to the success of hospitality and tourism enterprises by providing the highest quality products and professional services. Our goal is to help every client create unforgettable and comfortable living experiences for their guests.",
    "about.values.quality": "High quality guarantee",
    "about.values.service": "Professional service",
    "about.values.innovation": "Innovative solutions",
    "about.values.partnership": "Long-term partnership",
    "about.cta.title": "Meet Our Team",
    "about.cta.subtitle": "We'll help you find the best solutions for your project",
    "about.cta.catalog": "View Catalog",

    // Mega Dropdown
    "towels.comfort": "Towels & Comfort",
    "bathroom.equipment": "Bathroom Equipment",
    "guest.toiletries": "Guest Toiletries",
    "dispensers": "Dispensers",
    "packaging": "Packaging",
    "welcome.kits": "Welcome Kits",
    "room.amenities": "Room Amenities",
    "spa.wellness": "Spa & Wellness",
    "shampoo": "Shampoo",
    "conditioner": "Conditioner",
    "body.wash": "Body Wash",
    "soap": "Soap",
    "wall.dispensers": "Wall Mounted Dispensers",
    "refills": "Refills",
    "bottles": "Bottles",
    "tubes": "Tubes",
    "premium.welcome": "Premium Welcome Kits",
    "budget.welcome": "Budget Welcome Kits",
    "custom.welcome": "Custom Welcome Kits",
    "coffee.station": "Coffee Station",
    "mini.bar": "Mini Bar Supplies",
    "room.service": "Room Service",
    "spa.amenities": "Spa Amenities",
    "wellness.kits": "Wellness Kits",
    "shop.all.toiletries": "Shop All Toiletries",
    "shop.all.amenities": "Shop All Amenities",
    "premium.toiletries.guests": "Premium toiletries for your guests",
    "complete.amenity.solutions": "Complete amenity solutions for exceptional guest experiences",
  },
}
