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

    // New Main Navigation (7 sections)
    "nav.new": "Новинки",
    "nav.eco.concept": "ЭКО-концепция",
    "nav.bedroom.zone": "Спальная зона",
    "nav.bathroom.zone": "Ванная зона",
    "nav.guest.zone": "Гостевая зона",
    "nav.hotel.components": "Комплектующие отеля",
    "nav.cleaning.equipment": "Проф оборудования для уборки",

    // Old navigation (keeping for compatibility)
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
    "hero.description": "Мы предоставляем роскошные гостевые удобства и качественные аксессуары для гостиничного и гостиничного бизнеса.",
    login: "Войти",
    register: "Регистрация",

    // Sections
    "shop.bedding": "Купить постельное белье",
    "mini.fridges": "Мини-холодильники",
    "shop.minibars": "Купить мини-бары",
    "login.or.register": "Войти или зарегистрироваться",
    "login.description": "Войдите в свою учетную запись для управления и отслеживания заказов, счетов и многого другого.",
    "already.customer": "Уже клиент? Войти",
    "new.here": "Зарегистрироваться",
    "luxury.accessories": "Роскошные аксессуары",
    "shop.room.accessories": "Купить аксессуары",

    // Categories - Updated for new navbar
    "shop.new": "Новинки",
    "shop.eco.concept": "ЭКО-концепция",
    "shop.bedroom.zone": "Спальная зона",
    "shop.bathroom.zone": "Ванная зона",
    "shop.guest.zone": "Гостевая зона",
    "shop.hotel.components": "Комплектующие отеля",
    "shop.cleaning.equipment": "Проф оборудование",

    // Old categories (keeping for compatibility)
    "shop.bedroom": "Купить спальню",
    "shop.bathroom": "Купить ванную",
    "shop.toiletries": "Купить туалетные принадлежности",
    "shop.guest.amenities": "Купить гостевые удобства",
    "explore.collection": "Исследовать коллекцию",

    // Coffee Station
    "coffee.station.title": "Создайте идеальную кофейную станцию в номере",
    "coffee.station.desc": "Улучшите впечатления ваших гостей с помощью нашего ассортимента кофейных принадлежностей премиум-класса.",
    "shop.coffee": "Купить кофе",

    // Product Showcases
    "discover.bathrobes": "Откройте для себя наши халаты",
    "bestsellers": "Xит продаж",
    "popular.brands": "Популярные бренды",
    "geneva.green.dispensers": "Дозаторы Geneva Green",
    "products.we.love": "Продукты, которые мы любим",

    // Footer
    "footer.description": "Специализируемся на поставке качественной мебели, текстиля и решений для гостиничного бизнеса. Развиваемся вместе с нашими клиентами и стремимся к долгосрочному партнерству.",
    "quick.links": "Быстрые ссылки",
    "customer.service": "Служба поддержки",
    "follow.us": "Подписывайтесь на нас",
    "all.rights.reserved": "Все права защищены",

    // Main Content Section
    createFiveStar: "Создайте пятизвездочный опыт",
    luxuriousGuestAmenities: "Мы предоставляем роскошные гостевые удобства и качественные аксессуары для гостиничного и гостиничного бизнеса.",
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
    "view.all": "Посмотреть все",
    "view": "Посмотреть",
    "new.button": "Новинки",

    // Footer Links
    shop: "Магазин",
    company: "Компания",
    support: "Поддержка",
    "room.accessories": "Аксессуары для номеров",
    faqs: "Часто задаваемые вопросы",
    "shipping.delivery": "Доставка",
    "returns.policy": "Политика возврата",
    "terms.conditions": "Условия использования",
    "privacy.policy": "Политика конфиденциальности",

    // Geneva Dispensers Section
    "premium.eco.friendly": "Премиум экологичный",
    "sustainable.dispensing": "Устойчивые решения для дозирования",
    "add.to.basket": "Добавить в корзину",
    "add.to.compare": "Добавить к сравнению",

    // Product Page
    "products.title": "Все продукты",
    "products.filter.category": "Категория",
    "products.filter.price": "Цена",
    "products.filter.brand": "Бренд",
    "products.filter.rating": "Рейтинг",
    "products.sort.name": "По названию",
    "products.sort.price.low": "Цена: по возрастанию",
    "products.sort.price.high": "Цена: по убыванию",
    "products.sort.rating": "По рейтингу",
    "products.no.results": "Товары не найдены",
    "products.no.results.desc": "Попробуйте изменить фильтры или поисковый запрос",
    "products.showing": "Показано",
    "products.of": "из",
    "products.results": "результатов",

    // Mega Dropdown
    "ranges": "Диапазоны",
    "budget.range": "Бюджетный диапазон",
    "mid.range": "Средний диапазон", 
    "luxury.range": "Люкс диапазон",
    "eco.range": "Эко диапазон",
    "display.accessories": "Дисплей и аксессуары",
    "amenity.trays": "Подносы для удобств",
    "welcome.cards": "Приветственные карты",
    "room.folders": "Папки для номеров",
    "signage": "Вывески",
    "product.type": "Тип продукта",
    "toiletries.kits": "Наборы туалетных принадлежностей",
    "dental.kits": "Стоматологические наборы",
    "sewing.kits": "Швейные наборы",
    "shoe.care": "Уход за обувью",
    "shop.guest.amenities": "Покупать гостевые удобства",
    "explore.guest.amenities": "Изучите наш ассортимент удобных гостевых удобств",

    // Category Pages
    "category.new.title": "Новинки",
    "category.new.subtitle": "Самые новые и инновационные продукты для отелей",
    "category.eco.title": "ЭКО-концепция",
    "category.eco.subtitle": "Экологически чистые продукты, безопасные для окружающей среды",
    "category.bedroom.title": "Спальная зона",
    "category.bedroom.subtitle": "Высококачественные продукты для комфортного сна и отдыха",
    "category.bathroom.title": "Ванная зона",
    "category.bathroom.subtitle": "Премиум продукты для роскошного банного опыта",
    "category.guest.title": "Гостевая зона",
    "category.guest.subtitle": "Специальные удобства и услуги для гостей",
    "category.components.title": "Компоненты отеля",
    "category.components.subtitle": "Необходимое оборудование и аксессуары для гостиничных номеров",
    "category.cleaning.title": "Профессиональное оборудование для уборки",
    "category.cleaning.subtitle": "Профессиональные средства и оборудование для уборки отелей",

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
    "welcome.description.1": "Safi Hotel Collection — это сервисная сеть, выводящая туризм Узбекистана на новый уровень. Основана в 2025 году. Мы работаем в гостиницах с устойчивым качеством и надёжным обслуживанием.",
    "welcome.description.2": "Наша цель — предоставлять комфортные, современные и профессиональные услуги по всему Узбекистану. Обеспечение спокойствия, чистоты и удобства для каждого гостя — наш главный приоритет. Safi — новый этап туризма Узбекистана и стандарт безупречного сервиса.",
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

    // For Partners Page
    "partners.hero.title": "Партнерство",
    "partners.hero.subtitle": "Премиум качественные продукты и профессиональные услуги для вашего отеля",
    "partners.form.title": "Анкета для партнерства",
    "partners.form.subtitle": "Заполните ваши данные и мы свяжемся с вами",
    "partners.form.firstName": "Ваше имя",
    "partners.form.lastName": "Ваша фамилия",
    "partners.form.phone": "Номер телефона",
    "partners.form.address": "Ваш адрес",
    "partners.form.companyName": "Название компании",
    "partners.form.hotelType": "Тип отеля",
    "partners.form.roomCount": "Количество номеров",
    "partners.form.message": "Дополнительная информация",
    "partners.form.messagePlaceholder": "Подробно напишите о ваших потребностях...",
    "partners.form.submit": "Отправить анкету",
    "partners.form.select": "Выберите",
    "partners.form.1star": "1 звезда",
    "partners.form.2star": "2 звезды",
    "partners.form.3star": "3 звезды",
    "partners.form.4star": "4 звезды",
    "partners.form.5star": "5 звезд",
    "partners.form.boutique": "Бутик отель",
    "partners.form.resort": "Курорт",
    "partners.advantages.title": "Наши преимущества",
    "partners.advantages.quality": "Премиум качество",
    "partners.advantages.quality.desc": "Продукты, соответствующие международным стандартам",
    "partners.advantages.range": "Широкий ассортимент",
    "partners.advantages.range.desc": "Все необходимые продукты для отеля",
    "partners.advantages.approach": "Индивидуальный подход",
    "partners.advantages.approach.desc": "Специальные предложения для каждого клиента",
    "partners.contact.title": "Контактная информация",
    "partners.contact.phone": "Телефон",
    "partners.contact.email": "Email",
    "partners.contact.address": "Адрес",
    "partners.support.title": "Поддержка 24/7",
    "partners.support.desc": "Наши специалисты всегда готовы помочь вам",
    "partners.premium.quality": "Премиум качество",
    "partners.international.standards": "Международные стандарты",
    "partners.reliable.partnership": "Надежное партнерство",

    // Star Rating Section
    "star.rating.title": "Выберите категорию отеля",
    "star.rating.subtitle": "Найдите идеальные продукты для вашего типа размещения",
    "star.rating.explore": "Исследовать продукты",

    // Budget (1 star)
    "star.rating.xorika.title": "Хорика",
    "star.rating.xorika.description": "Специализированные учреждения и объекты",
    "star.rating.xorika.feature1": "Хостелы и общежития",
    "star.rating.xorika.feature2": "СПА салоны и больницы",
    "star.rating.xorika.feature3": "Дачи и загородные дома",



    // Mid-range (3 stars)
    "star.rating.midrange.title": "Отели среднего класса",
    "star.rating.midrange.description": "Сбалансированное качество и комфорт",
    "star.rating.midrange.feature1": "Премиум туалетные принадлежности",
    "star.rating.midrange.feature2": "Качественный текстиль",
    "star.rating.midrange.feature3": "Расширенные удобства для гостей",

    // Upscale (4 stars)
    "star.rating.upscale.title": "Высококлассные отели",
    "star.rating.upscale.description": "Роскошные удобства для взыскательных гостей",
    "star.rating.upscale.feature1": "Роскошные туалетные принадлежности",
    "star.rating.upscale.feature2": "Премиум текстиль и халаты",
    "star.rating.upscale.feature3": "Эксклюзивные гостевые удобства",

    // Luxury (5 stars)
    "star.rating.luxury.title": "Роскошные отели",
    "star.rating.luxury.description": "Исключительные удобства высочайшего качества",
    "star.rating.luxury.feature1": "Эксклюзивные дизайнерские принадлежности",
    "star.rating.luxury.feature2": "Роскошный текстиль и аксессуары",
    "star.rating.luxury.feature3": "Персонализированные гостевые услуги",

    // Blog Page
    "blog.title": "Блог",
    "blog.subtitle": "Полезные статьи о гостиничной индустрии, продуктах и услугах",
    "blog.categories.all": "Все",
    "blog.categories.trends": "Тенденции",
    "blog.categories.ecology": "Экология",
    "blog.categories.products": "Продукты",
    "blog.categories.design": "Дизайн",
    "blog.categories.service": "Сервис",
    "blog.categories.events": "События",
    "blog.featured.title": "Главная статья",
    "blog.featured.badge": "⭐ Главная",
    "blog.all.articles": "Все статьи",
    "blog.read": "Читать",
    "blog.load.more": "Загрузить еще",
    "blog.newsletter.title": "Подпишитесь на новости",
    "blog.newsletter.subtitle": "Получайте последние новости и советы по гостиничной индустрии первыми",
    "blog.newsletter.placeholder": "Ваш email адрес",
    "blog.newsletter.subscribe": "Подписаться",
    "blog.read.time": "мин",

    // Contact Page
    "contactPage.badge": "Связаться с нами",
    "contactPage.title": "Готовы начать сотрудничество?",
    "contactPage.subtitle": "Свяжитесь с нашей командой экспертов, чтобы обсудить потребности вашего отеля и найти идеальные решения для ваших гостей.",

    // Multiple Ways to Connect
    "contactPage.multipleWays.title": "Несколько способов связи",
    "contactPage.multipleWays.subtitle": "Выберите наиболее удобный для вас способ связи",

    "contactPage.multipleWays.phone.badge": "Быстрый ответ",
    "contactPage.multipleWays.phone.title": "Телефонная поддержка",
    "contactPage.multipleWays.phone.description": "Поговорите с нашими экспертами напрямую",
    "contactPage.multipleWays.phone.number": "+998 22 123 4567",
    "contactPage.multipleWays.phone.support": "Поддержка 24/7",

    "contactPage.multipleWays.email.title": "Поддержка по email",
    "contactPage.multipleWays.email.description": "Отправьте нам подробный запрос",
    "contactPage.multipleWays.email.address": "info@safihotel.uz",
    "contactPage.multipleWays.email.response": "Ответ в течение 2 часов",

    "contactPage.multipleWays.chat.title": "Онлайн чат",
    "contactPage.multipleWays.chat.description": "Мгновенная помощь от наших специалистов",
    "contactPage.multipleWays.chat.availability": "Сейчас онлайн",
    "contactPage.multipleWays.chat.hours": "Пн-Пт: 9:00-18:00",

    // Contact Form
    "contactPage.form.title": "Отправить запрос",
    "contactPage.form.subtitle": "Заполните форму ниже, и мы свяжемся с вами в ближайшее время",
    "contactPage.form.firstName": "Имя",
    "contactPage.form.lastName": "Фамилия",
    "contactPage.form.email": "Email адрес",
    "contactPage.form.hotelCompany": "Отель/Компания",
    "contactPage.form.phone": "Номер телефона",
    "contactPage.form.help": "Как мы можем помочь?",
    "contactPage.form.helpPlaceholder": "Расскажите нам о ваших потребностях, количестве номеров, типе отеля и любых специальных требованиях...",
    "contactPage.form.consent": "Я согласен на обработку моих персональных данных в соответствии с политикой конфиденциальности",
    "contactPage.form.submit": "Отправить запрос",

    // Locations
    "contact.locations.title": "Наши офисы",
    "contact.locations.subtitle": "Посетите нас в одном из наших офисов или свяжитесь с нами удаленно",
    "contactPage.locations.title": "Наши офисы",
    "contactPage.locations.subtitle": "Посетите нас в одном из наших офисов или свяжитесь с нами удаленно",
    "contact.locations.tashkent": "Ташкент",
    "contact.locations.salesOffice": "Отдел продаж",

    "contactPage.locations.samarkand.city": "Самарканд",
    "contactPage.locations.samarkand.badge": "Главный офис",
    "contactPage.locations.samarkand.address": "ул. Регистан, 15, Самарканд, Узбекистан 140100",
    "contactPage.locations.samarkand.email": "samarkand@safihotel.uz",
    "contactPage.locations.samarkand.timezone": "UTC+5 (Ташкентское время)",

    "contactPage.locations.tashkent.city": "Ташкент",
    "contactPage.locations.tashkent.badge": "Филиал",
    "contactPage.locations.tashkent.address": "ул. Амира Темура, 108, Ташкент, Узбекистан 100000",
    "contactPage.locations.tashkent.email": "tashkent@safihotel.uz",
    "contactPage.locations.tashkent.timezone": "UTC+5 (Ташкентское время)",

    // What We Offer
    "contactPage.offer.title": "Что мы предлагаем",
    "contactPage.offer.consultation.title": "Бесплатная консультация",
    "contactPage.offer.consultation.description": "Персональные рекомендации для вашего отеля от наших экспертов",
    "contactPage.offer.delivery.title": "Быстрая доставка",
    "contactPage.offer.delivery.description": "Надежная доставка по всему Узбекистану в кратчайшие сроки",
    "contactPage.offer.quality.title": "Гарантия качества",
    "contactPage.offer.quality.description": "Все наши продукты соответствуют международным стандартам качества",

    // FAQ Section
    "contactPage.faq.title": "Есть вопросы?",
    "contactPage.faq.subtitle": "Ознакомьтесь с нашими часто задаваемыми вопросами или свяжитесь с нами напрямую",
    "contactPage.faq.button": "Посмотреть FAQ",

    // Confirmation
    "confirmation.thankYou": "Спасибо за ваш запрос!",

    // New Products Modal
    "modal.new.title": "Новые продукты",
    "modal.new.subtitle": "Получите доступ к новинкам",
    "modal.new.name": "Ваше имя",
    "modal.new.namePlaceholder": "Введите ваше имя",
    "modal.new.phone": "Номер телефона",
    "modal.new.phonePlaceholder": "+998 XX XXX XX XX",
    "modal.new.submit": "Посмотреть новинки",
    "modal.new.submitting": "Загрузка...",
    "modal.new.note": "Мы используем эту информацию для персонализации вашего опыта",

    // About Page
    "about.hero.title": "О нас",
    "about.hero.subtitle": "Поставляем высококачественные и доступные продукты для отелей и мест отдыха",
    "about.hero.cta": "Наши услуги",
    
    "about.story.title": "Наша история",
    "about.story.p1": "Safi Hotel Collection - недавно созданный, но очень перспективный поставщик гостиничного оборудования в Узбекистане и Центральной Азии. Мы специализируемся на предоставлении высококачественных продуктов по самым доступным ценам для отелей, санаториев и мест отдыха.",
    "about.story.p2": "Наша цель - обеспечить превосходное обслуживание каждого клиента и помочь создать незабываемые впечатления для их гостей. Мы сотрудничаем только с лучшими брендами и надежными поставщиками.",
    "about.story.p3": "Наша цель - предоставить каждому клиенту самые качественные продукты по самым доступным ценам. Благодаря современным технологиям и прямому сотрудничеству с поставщиками мы предлагаем нашим клиентам экономию до 30%.",
    
    "about.stats.title": "Наши достижения",
    "about.stats.subtitle": "Наш успех в цифрах",
    "about.stats.quality": "Премиум качество",
    "about.stats.savings": "Экономия затрат",
    "about.stats.support": "Поддержка клиентов",
    "about.stats.satisfaction": "Гарантия качества",
    
    "about.services.title": "Наши услуги",
    "about.services.subtitle": "Предоставляем комплексные решения для отелей и мест отдыха",
    "about.services.bedding": "Премиум постельное белье",
    "about.services.bedding.desc": "Высококачественное постельное белье, подушки и защитные чехлы для матрасов",
    "about.services.toiletries": "Гигиенические продукты",
    "about.services.toiletries.desc": "Полный ассортимент туалетных принадлежностей и средств личной гигиены",
    "about.services.furniture": "Гостиничная мебель",
    "about.services.furniture.desc": "Элегантные и долговечные мебельные решения для гостиничного бизнеса",
    "about.services.tableware": "Посуда и столовые приборы",
    "about.services.tableware.desc": "Профессиональная посуда, стеклянная посуда и столовые приборы",
    "about.services.cleaning": "Чистящие средства",
    "about.services.cleaning.desc": "Экологически чистые решения для уборки в гостиничной индустрии",
    "about.services.amenities": "Гостевые удобства",
    "about.services.amenities.desc": "Полные пакеты удобств для исключительного гостевого опыта",
    
    "about.mission.title": "Наша миссия",
    "about.mission.text": "Safi Hotel Collection — это сервисная сеть, выводящая туризм Узбекистана на новый уровень. Основана в 2025 году. Мы работаем в гостиницах с устойчивым качеством и надёжным обслуживанием. Наша цель — предоставлять комфортные, современные и профессиональные услуги по всему Узбекистану. Обеспечение спокойствия, чистоты и удобства для каждого гостя — наш главный приоритет. Safi — новый этап туризма Узбекистана и стандарт безупречного сервиса.",
    
    "about.values.quality": "Гарантия высокого качества",
    "about.values.service": "Профессиональное обслуживание",
    "about.values.innovation": "Инновационные решения",
    "about.values.partnership": "Долгосрочное партнерство",
    
    "about.cta.title": "Познакомьтесь с нашей командой",
    "about.cta.subtitle": "Поможем найти лучшие решения для вашего проекта",
    "about.cta.catalog": "Посмотреть каталог",
  },
  uz: {
    // Top Banner
    "free.delivery": "Buyurtma $150 dan yuqori bo'lsa, Toshkent shahri bo'ylab bepul yetkazib berish",

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

    // New Main Navigation (7 sections)
    "nav.new": "Yangiliklar",
    "nav.eco.concept": "EKO-kontseptsiya",
    "nav.bedroom.zone": "Yotoq zonasi",
    "nav.bathroom.zone": "Hammom zonasi",
    "nav.guest.zone": "Mehmon zonasi",
    "nav.hotel.components": "Mehmonxona komponentlari",
    "nav.cleaning.equipment": "Professional tozalash uskunalari",

    // Old navigation (keeping for compatibility)
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
    "hero.description": "Biz mehmonxona va mehmondo'stlik savdosi uchun hashamatli mehmon qulayliklari va sifatli aksessuarlarni taqdim etamiz.",
    login: "Kirish",
    register: "Ro'yxatdan o'tish",

    // Sections
    "shop.bedding": "To'shak-ko'rpa sotib olish",
    "mini.fridges": "Mini muzlatgichlar",
    "shop.minibars": "Mini-barlar sotib olish",
    "login.or.register": "Kirish yoki ro'yxatdan o'tish",
    "login.description": "Buyurtmalar, hisob-fakturalar va boshqalarni boshqarish va kuzatish uchun hisobingizga kiring.",
    "already.customer": "Allaqachon mijoz? Kirish",
    "new.here": "Yangi foydalanuvchi? Ro'yxatdan o'tish",
    "luxury.accessories": "Hashamatli aksessuarlar",
    "shop.room.accessories": "Xona aksessuarlari sotib olish",

    // Categories - Updated for new navbar
    "shop.new": "Yangiliklar",
    "shop.eco.concept": "EKO-kontseptsiya",
    "shop.bedroom.zone": "Yotoq zonasi",
    "shop.bathroom.zone": "Hammom zonasi",
    "shop.guest.zone": "Mehmon zonasi",
    "shop.hotel.components": "Mehmonxona komponentlari",
    "shop.cleaning.equipment": "Professional tozalash",

    // Old categories (keeping for compatibility)
    "shop.bedroom": "Yotoq xonasi uchun",
    "shop.bathroom": "Hammom uchun",
    "shop.toiletries": "Shaxsiy gigiyena",
    "shop.guest.amenities": "Mehmon qulayliklari",
    "explore.collection": "Kolleksiyani o'rganish",

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
    "footer.description": "Mehmonxona sanoati uchun sifatli mebel, to'qimachilik va yechimlar bilan ta'minlashga ixtisoslashtirmiz. Mijozlarimiz bilan birga rivojlanib, uzoq muddatli hamkorlikka intilamiz.",
    "quick.links": "Tezkor havolalar",
    "customer.service": "Mijozlarga xizmat",
    "follow.us": "Bizni kuzatib boring",
    "all.rights.reserved": "Barcha huquqlar himoyalangan",

    // Main Content Section
    createFiveStar: "Besh yulduzli tajriba yarating",
    luxuriousGuestAmenities: "Biz mehmonxona va mehmondo'stlik savdosi uchun hashamatli mehmon qulayliklari va sifatli aksessuarlarni taqdim etamiz.",
    shopBedding: "To'shak-ko'rpa sotib olish",
    miniFridges: "Mini muzlatgichlar",
    shopMinibars: "Mini-barlar sotib olish",
    luxuryAccessories: "Hashamatli aksessuarlar",
    shopRoomAccessories: "Xona aksessuarlari sotib olish",
    loginOrRegister: "Kirish yoki ro'yxatdan o'tish",
    loginDescription: "Buyurtmalar, hisob-fakturalar va boshqalarni boshqarish va kuzatish uchun hisobingizga kiring.",
    alreadyCustomer: "Allaqachon mijoz? Kirish",
    newHereRegister: "Yangi foydalanuvchi? Ro'yxatdan o'tish",

    // Product Showcase
    "view.all": "Barchasini ko'rish",
    "view": "Ko'rish",
    "new.button": "Yangiliklar",

    // Footer Links
    shop: "Do'kon",
    company: "Kompaniya",
    support: "Yordam",
    "room.accessories": "Xona aksessuarlari",
    faqs: "Tez-tez so'raladigan savollar",
    "shipping.delivery": "Yetkazib berish",
    "returns.policy": "Qaytarish siyosati",
    "terms.conditions": "Shartlar va qoidalar",
    "privacy.policy": "Maxfiylik siyosati",

    // Geneva Dispensers Section
    "premium.eco.friendly": "Premium ekologik",
    "sustainable.dispensing": "Barqaror dozator yechimlari",
    "add.to.basket": "Savatga qo'shish",
    "add.to.compare": "Solishtirishga qo'shish",

    // Product Page
    "products.title": "Barcha mahsulotlar",
    "products.filter.category": "Kategoriya",
    "products.filter.price": "Narx",
    "products.filter.brand": "Brend",
    "products.filter.rating": "Reyting",
    "products.sort.name": "Nom bo'yicha",
    "products.sort.price.low": "Narx: arzondan qimmatge",
    "products.sort.price.high": "Narx: qimmatdan arzonga",
    "products.sort.rating": "Reyting bo'yicha",
    "products.no.results": "Mahsulotlar topilmadi",
    "products.no.results.desc": "Filtrlar yoki qidiruv so'rovini o'zgartirib ko'ring",
    "products.showing": "Ko'rsatilmoqda",
    "products.of": "dan",
    "products.results": "natija",

    // Mega Dropdown
    "ranges": "Diapazonlar",
    "budget.range": "Byudjet diapazoni",
    "mid.range": "O'rta diapazoni",
    "luxury.range": "Hashamatli diapazoni", 
    "eco.range": "Eko diapazoni",
    "display.accessories": "Displey va aksessuarlar",
    "amenity.trays": "Qulaylik patnislari",
    "welcome.cards": "Xush kelibsiz kartalar",
    "room.folders": "Xona jildlari",
    "signage": "Belgilar",
    "product.type": "Mahsulot turi",
    "toiletries.kits": "Gigiyena vositalari to'plamlari",
    "dental.kits": "Stomatologik to'plamlar",
    "sewing.kits": "Tikuv to'plamlari",
    "shoe.care": "Poyafzal parvarishi",
    "shop.guest.amenities": "Mehmon qulayliklarini sotib olish",
    "explore.guest.amenities": "Qulay mehmon qulayliklarimiz assortimentini o'rganing",

    // Category Pages
    "category.new.title": "Yangiliklar",
    "category.new.subtitle": "Mehmonxonalar uchun eng yangi va innovatsion mahsulotlar",
    "category.eco.title": "EKO-kontseptsiya",
    "category.eco.subtitle": "Atrof-muhitga zarar bermaydigan ekologik toza mahsulotlar",
    "category.bedroom.title": "Yotoq zonasi",
    "category.bedroom.subtitle": "Qulay uyqu va dam olish uchun yuqori sifatli mahsulotlar",
    "category.bathroom.title": "Hammom zonasi",
    "category.bathroom.subtitle": "Hashamatli hammom tajribasi uchun premium mahsulotlar",
    "category.guest.title": "Mehmon zonasi",
    "category.guest.subtitle": "Mehmonlar uchun maxsus qulayliklar va xizmatlar",
    "category.components.title": "Mehmonxona komponentlari",
    "category.components.subtitle": "Mehmonxona xonalari uchun zaruriy jihozlar va aksessuarlar",
    "category.cleaning.title": "Professional tozalash uskunalari",
    "category.cleaning.subtitle": "Mehmonxonalar uchun professional tozalash vositalari va uskunalari",

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
    "welcome.description.1": "Safi Hotel Collection — O'zbekiston turizmini yangi bosqichga olib chiquvchi xizmat tarmog'i. 2025-yilda tashkil etilgan. Biz barqaror sifat va ishonchli xizmat ko'rsatuvchi mehmonxonalarda ishlaymiz.",
    "welcome.description.2": "Bizning maqsadimiz — butun O'zbekiston bo'ylab qulay, zamonaviy va professional xizmatlar taqdim etish. Har bir mehmon uchun tinchlik, tozalik va qulaylikni ta'minlash — bizning asosiy ustuvorligimiz. Safi — O'zbekiston turizmining yangi bosqichi va mukammal xizmat standartlari.",
    "welcome.signature": "Safi jamoasi",
    "discover.our.story": "Bizning hikoyamizni bilib oling",

    // Wishlist
    wishlist: "Sevimlilar",
    "wishlist.empty": "Sevimlilar ro'yxatingiz bo'sh",
    "wishlist.empty.desc": "Har qanday mahsulotdagi yurak belgisini bosish orqali sevimlilar ro'yxatiga mahsulot qo'shishni boshlang.",
    "continue.shopping": "Xarid qilishni davom ettirish",
    item: "mahsulot",
    items: "mahsulotlar",

    // Products Page
    "all.products": "Barcha mahsulotlar",
    "load.more": "Ko'proq yuklash",

    // For Partners Page
    "partners.hero.title": "Hamkorlik uchun",
    "partners.hero.subtitle": "Mehmonxonangiz uchun premium sifatli mahsulotlar va professional xizmatlar",
    "partners.form.title": "Hamkor bo'lish uchun anketa",
    "partners.form.subtitle": "Ma'lumotlaringizni to'ldiring va biz siz bilan bog'lanamiz",
    "partners.form.firstName": "Ismingiz",
    "partners.form.lastName": "Familiyangiz",
    "partners.form.phone": "Telefon raqami",
    "partners.form.address": "Manzilingiz",
    "partners.form.companyName": "Kompaniya nomi",
    "partners.form.hotelType": "Mehmonxona turi",
    "partners.form.roomCount": "Xonalar soni",
    "partners.form.message": "Qo'shimcha ma'lumot",
    "partners.form.messagePlaceholder": "Sizning ehtiyojlaringiz haqida batafsil yozing...",
    "partners.form.submit": "Anketani yuborish",
    "partners.form.select": "Tanlang",
    "partners.form.1star": "1 yulduzli",
    "partners.form.2star": "2 yulduzli",
    "partners.form.3star": "3 yulduzli",
    "partners.form.4star": "4 yulduzli",
    "partners.form.5star": "5 yulduzli",
    "partners.form.boutique": "Boutique hotel",
    "partners.form.resort": "Resort",
    "partners.advantages.title": "Bizning afzalliklarimiz",
    "partners.advantages.quality": "Premium sifat",
    "partners.advantages.quality.desc": "Xalqaro standartlarga mos mahsulotlar",
    "partners.advantages.range": "Keng assortiment",
    "partners.advantages.range.desc": "Mehmonxona uchun barcha kerakli mahsulotlar",
    "partners.advantages.approach": "Individual yondashuv",
    "partners.advantages.approach.desc": "Har bir mijoz uchun maxsus takliflar",
    "partners.contact.title": "Bog'lanish ma'lumotlari",
    "partners.contact.phone": "Telefon",
    "partners.contact.email": "Email",
    "partners.contact.address": "Manzil",
    "partners.support.title": "24/7 qo'llab-quvvatlash",
    "partners.support.desc": "Bizning mutaxassislarimiz har doim sizga yordam berishga tayyor",
    "partners.premium.quality": "Premium sifat",
    "partners.international.standards": "Xalqaro standartlar",
    "partners.reliable.partnership": "Ishonchli hamkorlik",

    // Star Rating Section
    "star.rating.title": "Mehmonxona toifasini tanlang",
    "star.rating.subtitle": "Sizning turar joy turingiz uchun ideal mahsulotlarni toping",
    "star.rating.explore": "Mahsulotlarni o'rganish",

    // Budget (1 star)
    "star.rating.xorika.title": "Xorika",
    "star.rating.xorika.description": "Maxsus muassasalar va obyektlar",
    "star.rating.xorika.feature1": "Xostellar va yotoqxonalar",
    "star.rating.xorika.feature2": "SPA salonlar va kasalxonalar",
    "star.rating.xorika.feature3": "Dachalar va qishloq uylari",



    // Mid-range (3 stars)
    "star.rating.midrange.title": "O'rta sinf mehmonxonalar",
    "star.rating.midrange.description": "Muvozanatli sifat va qulaylik",
    "star.rating.midrange.feature1": "Premium gigiyena vositalari",
    "star.rating.midrange.feature2": "Sifatli to'qimachilik",
    "star.rating.midrange.feature3": "Kengaytirilgan mehmon qulayliklari",

    // Upscale (4 stars)
    "star.rating.upscale.title": "Yuqori sinf mehmonxonalar",
    "star.rating.upscale.description": "Talabchan mehmonlar uchun hashamatli qulayliklar",
    "star.rating.upscale.feature1": "Hashamatli gigiyena vositalari",
    "star.rating.upscale.feature2": "Premium to'qimachilik va xalatlar",
    "star.rating.upscale.feature3": "Eksklyuziv mehmon qulayliklari",

    // Luxury (5 stars)
    "star.rating.luxury.title": "Hashamatli mehmonxonalar",
    "star.rating.luxury.description": "Eng yuqori sifatdagi istisno qulayliklar",
    "star.rating.luxury.feature1": "Eksklyuziv dizayner vositalari",
    "star.rating.luxury.feature2": "Hashamatli to'qimachilik va aksessuarlar",
    "star.rating.luxury.feature3": "Shaxsiylashtirilgan mehmon xizmatlari",

    // Blog Page
    "blog.title": "Blog",
    "blog.subtitle": "Mehmonxona sanoati, mahsulotlar va xizmatlar haqida foydali maqolalar",
    "blog.categories.all": "Barchasi",
    "blog.categories.trends": "Tendensiyalar",
    "blog.categories.ecology": "Ekologiya",
    "blog.categories.products": "Mahsulotlar",
    "blog.categories.design": "Dizayn",
    "blog.categories.service": "Xizmat",
    "blog.categories.events": "Tadbirlar",
    "blog.featured.title": "Asosiy maqola",
    "blog.featured.badge": "⭐ Asosiy",
    "blog.all.articles": "Barcha maqolalar",
    "blog.read": "O'qish",
    "blog.load.more": "Ko'proq yuklash",
    "blog.newsletter.title": "Yangiliklar uchun obuna bo'ling",
    "blog.newsletter.subtitle": "Mehmonxona sanoati bo'yicha eng so'nggi yangiliklar va maslahatlarni birinchi bo'lib oling",
    "blog.newsletter.placeholder": "Email manzilingiz",
    "blog.newsletter.subscribe": "Obuna bo'lish",
    "blog.read.time": "daqiqa",

    // Contact Page
    "contactPage.badge": "Biz bilan bog'laning",
    "contactPage.title": "Hamkorlikni boshlashga tayyormisiz?",
    "contactPage.subtitle": "Mehmonxonangizning ehtiyojlarini muhokama qilish va mehmonlaringiz uchun ideal yechimlarni topish uchun mutaxassislar jamoamiz bilan bog'laning.",

    // Multiple Ways to Connect
    "contactPage.multipleWays.title": "Bog'lanishning bir necha usuli",
    "contactPage.multipleWays.subtitle": "O'zingiz uchun eng qulay bo'lgan aloqa usulini tanlang",

    "contactPage.multipleWays.phone.badge": "Tez javob",
    "contactPage.multipleWays.phone.title": "Telefon qo'llab-quvvatlash",
    "contactPage.multipleWays.phone.description": "Mutaxassislarimiz bilan bevosita gaplashing",
    "contactPage.multipleWays.phone.number": "+998 22 123 4567",
    "contactPage.multipleWays.phone.support": "24/7 qo'llab-quvvatlash",

    "contactPage.multipleWays.email.title": "Email qo'llab-quvvatlash",
    "contactPage.multipleWays.email.description": "Bizga batafsil so'rov yuboring",
    "contactPage.multipleWays.email.address": "info@safihotel.uz",
    "contactPage.multipleWays.email.response": "2 soat ichida javob",

    "contactPage.multipleWays.chat.title": "Onlayn chat",
    "contactPage.multipleWays.chat.description": "Mutaxassislarimizdan zudlik bilan yordam",
    "contactPage.multipleWays.chat.availability": "Hozir onlayn",
    "contactPage.multipleWays.chat.hours": "Du-Ju: 9:00-18:00",

    // Contact Form
    "contactPage.form.title": "So'rov yuborish",
    "contactPage.form.subtitle": "Quyidagi formani to'ldiring va biz tez orada siz bilan bog'lanamiz",
    "contactPage.form.firstName": "Ism",
    "contactPage.form.lastName": "Familiya",
    "contactPage.form.email": "Email manzil",
    "contactPage.form.hotelCompany": "Mehmonxona/Kompaniya",
    "contactPage.form.phone": "Telefon raqami",
    "contactPage.form.help": "Qanday yordam bera olamiz?",
    "contactPage.form.helpPlaceholder": "Bizga ehtiyojlaringiz, xonalar soni, mehmonxona turi va har qanday maxsus talablar haqida gapirib bering...",
    "contactPage.form.consent": "Men shaxsiy ma'lumotlarimni maxfiylik siyosatiga muvofiq qayta ishlashga roziman",
    "contactPage.form.submit": "So'rov yuborish",

    // Locations
    "contact.locations.title": "Bizning ofislarimiz",
    "contact.locations.subtitle": "Ofislarimizdan birini tashrif buyuring yoki biz bilan masofadan bog'laning",
    "contactPage.locations.title": "Bizning ofislarimiz",
    "contactPage.locations.subtitle": "Ofislarimizdan birini tashrif buyuring yoki biz bilan masofadan bog'laning",
    "contact.locations.tashkent": "Toshkent",
    "contact.locations.salesOffice": "Sotuv bo'limi",

    "contactPage.locations.samarkand.city": "Samarqand",
    "contactPage.locations.samarkand.badge": "Bosh ofis",
    "contactPage.locations.samarkand.address": "Registon ko'chasi, 15, Samarqand, O'zbekiston 140100",
    "contactPage.locations.samarkand.email": "samarkand@safihotel.uz",
    "contactPage.locations.samarkand.timezone": "UTC+5 (Toshkent vaqti)",

    "contactPage.locations.tashkent.city": "Toshkent",
    "contactPage.locations.tashkent.badge": "Filial",
    "contactPage.locations.tashkent.address": "Amir Temur ko'chasi, 108, Toshkent, O'zbekiston 100000",
    "contactPage.locations.tashkent.email": "tashkent@safihotel.uz",
    "contactPage.locations.tashkent.timezone": "UTC+5 (Toshkent vaqti)",

    // What We Offer
    "contactPage.offer.title": "Biz nima taklif qilamiz",
    "contactPage.offer.consultation.title": "Bepul maslahat",
    "contactPage.offer.consultation.description": "Mutaxassislarimizdan mehmonxonangiz uchun shaxsiy tavsiyalar",
    "contactPage.offer.delivery.title": "Tez yetkazib berish",
    "contactPage.offer.delivery.description": "O'zbekiston bo'ylab ishonchli va tez yetkazib berish",
    "contactPage.offer.quality.title": "Sifat kafolati",
    "contactPage.offer.quality.description": "Barcha mahsulotlarimiz xalqaro sifat standartlariga javob beradi",

    // FAQ Section
    "contactPage.faq.title": "Savollaringiz bormi?",
    "contactPage.faq.subtitle": "Tez-tez so'raladigan savollar bilan tanishing yoki biz bilan bevosita bog'laning",
    "contactPage.faq.button": "FAQ ko'rish",

    // Confirmation
    "confirmation.thankYou": "So'rovingiz uchun rahmat!",

    // New Products Modal
    "modal.new.title": "Yangi mahsulotlar",
    "modal.new.subtitle": "Yangiliklar bo'limiga kirish",
    "modal.new.name": "Ismingiz",
    "modal.new.namePlaceholder": "Ismingizni kiriting",
    "modal.new.phone": "Telefon raqami",
    "modal.new.phonePlaceholder": "+998 XX XXX XX XX",
    "modal.new.submit": "Yangiliklar ko'rish",
    "modal.new.submitting": "Yuklanmoqda...",
    "modal.new.note": "Biz bu ma'lumotni sizning tajribangizni shaxsiylashtirish uchun ishlatamiz",

    // About Page
    "about.hero.title": "Biz haqimizda",
    "about.hero.subtitle": "Mehmonxonalar va dam olish maskanlari uchun yuqori sifatli va arzon narxdagi mahsulotlar yetkazib beramiz",
    "about.hero.cta": "Bizning xizmatlar",
    
    "about.story.title": "Bizning hikoyamiz",
    "about.story.p1": "Safi Hotel Collection - O'zbekiston va Markaziy Osiyoda yangi tashkil etilgan, ammo juda istiqbolli mehmonxona jihozlari yetkazib beruvchisi. Biz mehmonxonalar, sanatoriyalar va dam olish maskanlariga eng yuqori sifatli mahsulotlarni eng arzon narxlarda taqdim etishga ixtisoslashganmiz.",
    "about.story.p2": "Bizning maqsadimiz - har bir mijozga mukammal xizmat ko'rsatish va ularning mehmonlariga unutilmas tajriba yaratishda yordam berish. Biz faqat eng yaxshi brendlar va ishonchli yetkazib beruvchilar bilan hamkorlik qilamiz.",
    "about.story.p3": "Bizning maqsadimiz - har bir mijozga eng sifatli mahsulotlarni eng qulay narxlarda taqdim etish. Zamonaviy texnologiyalar va to'g'ridan-to'g'ri yetkazib beruvchilar bilan hamkorlik qilish orqali biz mijozlarimizga 30% gacha tejash imkoniyatini taqdim etamiz.",
    
    "about.stats.title": "Bizning yutuqlarimiz",
    "about.stats.subtitle": "Raqamlar orqali bizning muvaffaqiyatimiz",
    "about.stats.quality": "Premium sifat",
    "about.stats.savings": "Xarajatlarni tejash",
    "about.stats.support": "Mijozlarga qo'llab-quvvatlash",
    "about.stats.satisfaction": "Sifat kafolati",
    
    "about.services.title": "Bizning xizmatlarimiz",
    "about.services.subtitle": "Mehmonxonalar va dam olish maskanlari uchun to'liq yechimlar taqdim etamiz",
    "about.services.bedding": "Premium choyshablar",
    "about.services.bedding.desc": "Yuqori sifatli choyshablar, yostiqlar va matras himoya qoplamalari",
    "about.services.toiletries": "Gigiyena mahsulotlari",
    "about.services.toiletries.desc": "Shaxsiy gigiyena vositalari va parvarish buyumlarining to'liq assortimenti",
    "about.services.furniture": "Mehmonxona mebellari",
    "about.services.furniture.desc": "Mehmonxona sanoati uchun nafis va bardoshli mebel yechimlari",
    "about.services.tableware": "Idish-tovoq va stolga buyumlar",
    "about.services.tableware.desc": "Professional darajadagi idishlar, shisha idishlar va pichoq-vilkalar",
    "about.services.cleaning": "Tozalash vositalari",
    "about.services.cleaning.desc": "Mehmonxona sanoati uchun ekologik toza tozalash yechimlari",
    "about.services.amenities": "Mehmon qulayliklari",
    "about.services.amenities.desc": "Ajoyib mehmon tajribasi uchun to'liq qulaylik paketlari",
    
    "about.mission.title": "Bizning missiyamiz",
    "about.mission.text": "Safi Hotel Collection — O'zbekiston turizmini yangi bosqichga olib chiquvchi xizmat tarmog'i. 2025-yilda tashkil etilgan. Biz barqaror sifat va ishonchli xizmat ko'rsatuvchi mehmonxonalarda ishlaymiz. Bizning maqsadimiz — butun O'zbekiston bo'ylab qulay, zamonaviy va professional xizmatlar taqdim etish. Har bir mehmon uchun tinchlik, tozalik va qulaylikni ta'minlash — bizning asosiy ustuvorligimiz. Safi — O'zbekiston turizmining yangi bosqichi va mukammal xizmat standartlari.",
    
    "about.values.quality": "Yuqori sifat kafolati",
    "about.values.service": "Professional xizmat",
    "about.values.innovation": "Innovatsion yechimlar",
    "about.values.partnership": "Uzoq muddatli hamkorlik",
    
    "about.cta.title": "Bizning jamoamiz bilan tanishing",
    "about.cta.subtitle": "Sizning loyihangiz uchun eng yaxshi yechimlarni topishda yordam beramiz",
    "about.cta.catalog": "Katalog ko'rish",
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

    // New Main Navigation (7 sections)
    "nav.new": "New",
    "nav.eco.concept": "ECO-concept",
    "nav.bedroom.zone": "Bedroom Zone",
    "nav.bathroom.zone": "Bathroom Zone",
    "nav.guest.zone": "Guest Zone",
    "nav.hotel.components": "Hotel Components",
    "nav.cleaning.equipment": "Professional Cleaning Equipment",

    // Old navigation (keeping for compatibility)
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
    "hero.description": "We provide luxurious guest amenities and quality accessories to the hotel and hospitality trade.",
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

    // Categories - Updated for new navbar
    "shop.new": "New Products",
    "shop.eco.concept": "ECO-concept",
    "shop.bedroom.zone": "Bedroom Zone",
    "shop.bathroom.zone": "Bathroom Zone",
    "shop.guest.zone": "Guest Zone",
    "shop.hotel.components": "Hotel Components",
    "shop.cleaning.equipment": "Professional Cleaning",

    // Old categories (keeping for compatibility)
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
    "footer.description": "Specializing in quality hotel supplies, furniture, textiles, and hospitality solutions. Growing together with our clients and building long-term partnerships.",
    "quick.links": "Quick Links",
    "customer.service": "Customer Service",
    "follow.us": "Follow Us",
    "all.rights.reserved": "All rights reserved",

    // Main Content Section
    createFiveStar: "Create a Five Star Experience",
    luxuriousGuestAmenities: "We provide luxurious guest amenities and quality accessories to the hotel and hospitality trade.",
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
    "view.all": "View all",
    "view": "View",
    "new.button": "New",

    // Footer Links
    shop: "Shop",
    company: "Company",
    support: "Support",
    "room.accessories": "Room Accessories",
    faqs: "FAQs",
    "shipping.delivery": "Shipping & Delivery",
    "returns.policy": "Returns Policy",
    "terms.conditions": "Terms & Conditions",
    "privacy.policy": "Privacy Policy",

    // Geneva Dispensers Section
    "premium.eco.friendly": "Premium Eco-Friendly",
    "sustainable.dispensing": "Sustainable dispensing solutions",
    "add.to.basket": "Add to Basket",
    "add.to.compare": "Add to compare",

    // Product Page
    "products.title": "All Products",
    "products.filter.category": "Category",
    "products.filter.price": "Price",
    "products.filter.brand": "Brand",
    "products.filter.rating": "Rating",
    "products.sort.name": "By Name",
    "products.sort.price.low": "Price: Low to High",
    "products.sort.price.high": "Price: High to Low",
    "products.sort.rating": "By Rating",
    "products.no.results": "No products found",
    "products.no.results.desc": "Try adjusting your filters or search query",
    "products.showing": "Showing",
    "products.of": "of",
    "products.results": "results",

    // Mega Dropdown
    "ranges": "Ranges",
    "budget.range": "Budget Range",
    "mid.range": "Mid Range",
    "luxury.range": "Luxury Range",
    "eco.range": "Eco Range", 
    "display.accessories": "Display & Accessories",
    "amenity.trays": "Amenity Trays",
    "welcome.cards": "Welcome Cards",
    "room.folders": "Room Folders",
    "signage": "Signage",
    "product.type": "Product Type",
    "toiletries.kits": "Toiletries Kits",
    "dental.kits": "Dental Kits",
    "sewing.kits": "Sewing Kits",
    "shoe.care": "Shoe Care",
    "shop.guest.amenities": "Shop Guest Amenities",
    "explore.guest.amenities": "Explore our range of convenient guest amenities",

    // Category Pages
    "category.new.title": "New Products",
    "category.new.subtitle": "Latest and most innovative products for hotels",
    "category.eco.title": "ECO-Concept",
    "category.eco.subtitle": "Environmentally friendly products that are safe for the environment",
    "category.bedroom.title": "Bedroom Zone",
    "category.bedroom.subtitle": "High-quality products for comfortable sleep and rest",
    "category.bathroom.title": "Bathroom Zone",
    "category.bathroom.subtitle": "Premium products for luxurious bathroom experience",
    "category.guest.title": "Guest Zone",
    "category.guest.subtitle": "Special amenities and services for guests",
    "category.components.title": "Hotel Components",
    "category.components.subtitle": "Essential equipment and accessories for hotel rooms",
    "category.cleaning.title": "Professional Cleaning Equipment",
    "category.cleaning.subtitle": "Professional cleaning supplies and equipment for hotels",

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
    "welcome.description.1": "Safi Hotel Collection is a service network that takes Uzbekistan's tourism to a new level. Founded in 2025. We work in hotels with sustainable quality and reliable service.",
    "welcome.description.2": "Our goal is to provide comfortable, modern and professional services throughout Uzbekistan. Ensuring peace, cleanliness and comfort for every guest is our main priority. Safi is a new stage of Uzbekistan's tourism and the standard of impeccable service.",
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

    // For Partners Page
    "partners.hero.title": "Partnership",
    "partners.hero.subtitle": "Premium quality products and professional services for your hotel",
    "partners.form.title": "Partnership Application Form",
    "partners.form.subtitle": "Fill in your details and we will contact you",
    "partners.form.firstName": "Your Name",
    "partners.form.lastName": "Your Surname",
    "partners.form.phone": "Phone Number",
    "partners.form.address": "Your Address",
    "partners.form.companyName": "Company Name",
    "partners.form.hotelType": "Hotel Type",
    "partners.form.roomCount": "Number of Rooms",
    "partners.form.message": "Additional Information",
    "partners.form.messagePlaceholder": "Write in detail about your needs...",
    "partners.form.submit": "Submit Application",
    "partners.form.select": "Select",
    "partners.form.1star": "1 star",
    "partners.form.2star": "2 stars",
    "partners.form.3star": "3 stars",
    "partners.form.4star": "4 stars",
    "partners.form.5star": "5 stars",
    "partners.form.boutique": "Boutique hotel",
    "partners.form.resort": "Resort",
    "partners.advantages.title": "Our Advantages",
    "partners.advantages.quality": "Premium Quality",
    "partners.advantages.quality.desc": "Products meeting international standards",
    "partners.advantages.range": "Wide Range",
    "partners.advantages.range.desc": "All necessary products for hotels",
    "partners.advantages.approach": "Individual Approach",
    "partners.advantages.approach.desc": "Special offers for each client",
    "partners.contact.title": "Contact Information",
    "partners.contact.phone": "Phone",
    "partners.contact.email": "Email",
    "partners.contact.address": "Address",
    "partners.support.title": "24/7 Support",
    "partners.support.desc": "Our specialists are always ready to help you",
    "partners.premium.quality": "Premium Quality",
    "partners.international.standards": "International Standards",
    "partners.reliable.partnership": "Reliable Partnership",

    // Star Rating Section
    "star.rating.title": "Choose Your Hotel Category",
    "star.rating.subtitle": "Find the perfect products for your accommodation type",
    "star.rating.explore": "Explore Products",

    // Budget (1 star)
    "star.rating.xorika.title": "Xorika",
    "star.rating.xorika.description": "Specialized institutions and facilities",
    "star.rating.xorika.feature1": "Hostels and dormitories",
    "star.rating.xorika.feature2": "SPA salons and hospitals",
    "star.rating.xorika.feature3": "Dachas and country houses",



    // Mid-range (3 stars)
    "star.rating.midrange.title": "Mid-Range Hotels",
    "star.rating.midrange.description": "Balanced quality and comfort",
    "star.rating.midrange.feature1": "Premium toiletry brands",
    "star.rating.midrange.feature2": "Quality textiles and linens",
    "star.rating.midrange.feature3": "Extended guest amenities",

    // Upscale (4 stars)
    "star.rating.upscale.title": "Upscale Hotels",
    "star.rating.upscale.description": "Luxurious amenities for discerning guests",
    "star.rating.upscale.feature1": "Luxury toiletry collections",
    "star.rating.upscale.feature2": "Premium textiles and bathrobes",
    "star.rating.upscale.feature3": "Exclusive guest amenities",

    // Luxury (5 stars)
    "star.rating.luxury.title": "Luxury Hotels",
    "star.rating.luxury.description": "Exceptional amenities of the highest quality",
    "star.rating.luxury.feature1": "Exclusive designer toiletries",
    "star.rating.luxury.feature2": "Luxury textiles and accessories",
    "star.rating.luxury.feature3": "Personalized guest services",

    // Blog Page
    "blog.title": "Blog",
    "blog.subtitle": "Useful articles about hospitality industry, products and services",
    "blog.categories.all": "All",
    "blog.categories.trends": "Trends",
    "blog.categories.ecology": "Ecology",
    "blog.categories.products": "Products",
    "blog.categories.design": "Design",
    "blog.categories.service": "Service",
    "blog.categories.events": "Events",
    "blog.featured.title": "Featured Article",
    "blog.featured.badge": "⭐ Featured",
    "blog.all.articles": "All Articles",
    "blog.read": "Read",
    "blog.load.more": "Load More",
    "blog.newsletter.title": "Subscribe to Newsletter",
    "blog.newsletter.subtitle": "Get the latest news and tips about hospitality industry first",
    "blog.newsletter.placeholder": "Your email address",
    "blog.newsletter.subscribe": "Subscribe",
    "blog.read.time": "min",

    // Contact Page
    "contactPage.badge": "Get in Touch",
    "contactPage.title": "Ready to Start Partnership?",
    "contactPage.subtitle": "Connect with our team of experts to discuss your hotel's needs and find the perfect solutions for your guests.",

    // Multiple Ways to Connect
    "contactPage.multipleWays.title": "Multiple Ways to Connect",
    "contactPage.multipleWays.subtitle": "Choose the most convenient way to reach us",

    "contactPage.multipleWays.phone.badge": "Quick Response",
    "contactPage.multipleWays.phone.title": "Phone Support",
    "contactPage.multipleWays.phone.description": "Speak directly with our experts",
    "contactPage.multipleWays.phone.number": "+998 22 123 4567",
    "contactPage.multipleWays.phone.support": "24/7 Support",

    "contactPage.multipleWays.email.title": "Email Support",
    "contactPage.multipleWays.email.description": "Send us a detailed inquiry",
    "contactPage.multipleWays.email.address": "info@safihotel.uz",
    "contactPage.multipleWays.email.response": "Response within 2 hours",

    "contactPage.multipleWays.chat.title": "Live Chat",
    "contactPage.multipleWays.chat.description": "Instant help from our specialists",
    "contactPage.multipleWays.chat.availability": "Currently online",
    "contactPage.multipleWays.chat.hours": "Mon-Fri: 9:00-18:00",

    // Contact Form
    "contactPage.form.title": "Send Inquiry",
    "contactPage.form.subtitle": "Fill out the form below and we'll get back to you shortly",
    "contactPage.form.firstName": "First Name",
    "contactPage.form.lastName": "Last Name",
    "contactPage.form.email": "Email Address",
    "contactPage.form.hotelCompany": "Hotel/Company",
    "contactPage.form.phone": "Phone Number",
    "contactPage.form.help": "How can we help?",
    "contactPage.form.helpPlaceholder": "Tell us about your needs, number of rooms, hotel type, and any special requirements...",
    "contactPage.form.consent": "I agree to the processing of my personal data in accordance with the privacy policy",
    "contactPage.form.submit": "Send Inquiry",

    // Locations
    "contact.locations.title": "Our Locations",
    "contact.locations.subtitle": "Visit us at one of our offices or connect with us remotely",
    "contactPage.locations.title": "Our Locations",
    "contactPage.locations.subtitle": "Visit us at one of our offices or connect with us remotely",
    "contact.locations.tashkent": "Tashkent",
    "contact.locations.salesOffice": "Sales Office",

    "contactPage.locations.samarkand.city": "Samarkand",
    "contactPage.locations.samarkand.badge": "Head Office",
    "contactPage.locations.samarkand.address": "15 Registan Street, Samarkand, Uzbekistan 140100",
    "contactPage.locations.samarkand.email": "samarkand@safihotel.uz",
    "contactPage.locations.samarkand.timezone": "UTC+5 (Tashkent Time)",

    "contactPage.locations.tashkent.city": "Tashkent",
    "contactPage.locations.tashkent.badge": "Branch Office",
    "contactPage.locations.tashkent.address": "108 Amir Temur Street, Tashkent, Uzbekistan 100000",
    "contactPage.locations.tashkent.email": "tashkent@safihotel.uz",
    "contactPage.locations.tashkent.timezone": "UTC+5 (Tashkent Time)",

    // What We Offer
    "contactPage.offer.title": "What We Offer",
    "contactPage.offer.consultation.title": "Free Consultation",
    "contactPage.offer.consultation.description": "Personalized recommendations for your hotel from our experts",
    "contactPage.offer.delivery.title": "Fast Delivery",
    "contactPage.offer.delivery.description": "Reliable delivery across Uzbekistan in the shortest time",
    "contactPage.offer.quality.title": "Quality Guarantee",
    "contactPage.offer.quality.description": "All our products meet international quality standards",

    // FAQ Section
    "contactPage.faq.title": "Have Questions?",
    "contactPage.faq.subtitle": "Check out our frequently asked questions or contact us directly",
    "contactPage.faq.button": "View FAQ",

    // Confirmation
    "confirmation.thankYou": "Thank you for your inquiry!",

    // New Products Modal
    "modal.new.title": "New Products",
    "modal.new.subtitle": "Access latest arrivals",
    "modal.new.name": "Your Name",
    "modal.new.namePlaceholder": "Enter your name",
    "modal.new.phone": "Phone Number",
    "modal.new.phonePlaceholder": "+998 XX XXX XX XX",
    "modal.new.submit": "View New Products",
    "modal.new.submitting": "Loading...",
    "modal.new.note": "We use this information to personalize your experience",

    // About Page
    "about.hero.title": "About Us",
    "about.hero.subtitle": "We deliver high-quality and affordable products for hotels and resorts",
    "about.hero.cta": "Our Services",
    
    "about.story.title": "Our Story",
    "about.story.p1": "Safi Hotel Collection is a newly established but very promising hotel equipment supplier in Uzbekistan and Central Asia. We specialize in providing the highest quality products at the most affordable prices to hotels, sanatoriums and resorts.",
    "about.story.p2": "Our goal is to provide excellent service to every client and help create unforgettable experiences for their guests. We only partner with the best brands and reliable suppliers.",
    "about.story.p3": "Our goal is to provide each client with the highest quality products at the most affordable prices. Through modern technologies and direct partnerships with suppliers, we offer our clients savings of up to 30%.",
    
    "about.stats.title": "Our Achievements",
    "about.stats.subtitle": "Our success in numbers",
    "about.stats.quality": "Premium Quality",
    "about.stats.savings": "Cost Savings",
    "about.stats.support": "Customer Support",
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
    "about.mission.text": "Safi Hotel Collection is a service network that takes Uzbekistan's tourism to a new level. Founded in 2025. We work in hotels with sustainable quality and reliable service. Our goal is to provide comfortable, modern and professional services throughout Uzbekistan. Ensuring peace, cleanliness and comfort for every guest is our main priority. Safi is a new stage of Uzbekistan's tourism and the standard of impeccable service.",
    
    "about.values.quality": "High Quality Guarantee",
    "about.values.service": "Professional Service",
    "about.values.innovation": "Innovative Solutions",
    "about.values.partnership": "Long-term Partnership",
    
    "about.cta.title": "Meet Our Team",
    "about.cta.subtitle": "We'll help you find the best solutions for your project",
    "about.cta.catalog": "View Catalog",
  },
}