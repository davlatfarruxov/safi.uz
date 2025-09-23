export const translations = {
  uz: {
    // Navigation
    nav: {
      home: "Bosh sahifa",
      products: "Mahsulotlar",
      services: "Xizmatlar",
      about: "Biz haqimizda",
      partners: "Hamkorlar",
      blog: "Blog",
      contact: "Aloqa",
    },
    // Homepage
    hero: {
      title: "Mehmonxona sanoati uchun premium yetkazib beruvchi",
      subtitle: "10,000+ mehmonxonalar ishongan yuqori sifatli mebel, to'qimachilik va jihozlar",
      cta: "Katalogni ko'rish",
      contact: "Aloqa",
    },
    features: {
      quality: {
        title: "Premium sifat",
        description: "Faqat eng yaxshi materiallar va ishlab chiqaruvchilar",
      },
      delivery: {
        title: "Tez yetkazib berish",
        description: "Butun dunyo bo'ylab 24-48 soat ichida yetkazib berish",
      },
      support: {
        title: "Mutaxassis maslahat",
        description: "20+ yillik tajribaga ega bo'lgan mutaxassislar",
      },
    },
    // About page
    about: {
      title: "Biz haqimizda",
      subtitle: "Mehmonxona sanoatida 20+ yillik tajriba",
      description:
        "Safí Hotel Collection - mehmonxona sanoati uchun premium mahsulotlar va xizmatlar yetkazib beruvchisi. Biz 10,000+ mehmonxonalarga yuqori sifatli mebel, to'qimachilik va jihozlar bilan xizmat ko'rsatamiz.",
    },
    // Contact
    contact: {
      title: "Biz bilan bog'laning",
      subtitle: "Bizning mutaxassislarimiz sizga yordam berishga tayyor",
      phone: "Telefon",
      email: "Email",
      address: "Manzil",
      form: {
        name: "Ism",
        email: "Email",
        message: "Xabar",
        send: "Yuborish",
      },
    },
    common: {
      learnMore: "Batafsil",
      getStarted: "Boshlash",
      viewAll: "Barchasini ko'rish",
    },
  },
  ru: {
    // Navigation
    nav: {
      home: "Главная",
      products: "Продукты",
      services: "Услуги",
      about: "О нас",
      partners: "Партнеры",
      blog: "Блог",
      contact: "Контакты",
    },
    // Homepage
    hero: {
      title: "Премиум поставщик для гостиничной индустрии",
      subtitle: "Высококачественная мебель, текстиль и оборудование, которому доверяют 10,000+ отелей",
      cta: "Посмотреть каталог",
      contact: "Связаться",
    },
    features: {
      quality: {
        title: "Премиум качество",
        description: "Только лучшие материалы и производители",
      },
      delivery: {
        title: "Быстрая доставка",
        description: "Доставка по всему миру за 24-48 часов",
      },
      support: {
        title: "Экспертные консультации",
        description: "Специалисты с опытом работы 20+ лет",
      },
    },
    // About page
    about: {
      title: "О нас",
      subtitle: "20+ лет опыта в гостиничной индустрии",
      description:
        "Safí Hotel Collection - поставщик премиальных продуктов и услуг для гостиничной индустрии. Мы обслуживаем 10,000+ отелей высококачественной мебелью, текстилем и оборудованием.",
    },
    // Contact
    contact: {
      title: "Свяжитесь с нами",
      subtitle: "Наши специалисты готовы помочь вам",
      phone: "Телефон",
      email: "Email",
      address: "Адрес",
      form: {
        name: "Имя",
        email: "Email",
        message: "Сообщение",
        send: "Отправить",
      },
    },
    common: {
      learnMore: "Подробнее",
      getStarted: "Начать",
      viewAll: "Посмотреть все",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      products: "Products",
      services: "Services",
      about: "About",
      partners: "Partners",
      blog: "Blog",
      contact: "Contact",
    },
    // Homepage
    hero: {
      title: "Premium Supplier for Hotel Industry",
      subtitle: "High-quality furniture, textiles, and equipment trusted by 10,000+ hotels",
      cta: "View Catalog",
      contact: "Contact Us",
    },
    features: {
      quality: {
        title: "Premium Quality",
        description: "Only the finest materials and manufacturers",
      },
      delivery: {
        title: "Fast Delivery",
        description: "Worldwide delivery within 24-48 hours",
      },
      support: {
        title: "Expert Consultation",
        description: "Specialists with 20+ years of experience",
      },
    },
    // About page
    about: {
      title: "About Us",
      subtitle: "20+ years of experience in hotel industry",
      description:
        "Safí Hotel Collection is a premium supplier of products and services for the hotel industry. We serve 10,000+ hotels with high-quality furniture, textiles, and equipment.",
    },
    // Contact
    contact: {
      title: "Contact Us",
      subtitle: "Our specialists are ready to help you",
      phone: "Phone",
      email: "Email",
      address: "Address",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
      },
    },
    common: {
      learnMore: "Learn More",
      getStarted: "Get Started",
      viewAll: "View All",
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.uz
