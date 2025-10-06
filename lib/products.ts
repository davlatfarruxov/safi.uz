export interface Product {
  id: string
  sku: string
  name: {
    ru: string
    uz: string
    en: string
  }
  category: "bedroom" | "bathroom" | "kitchen" | "general"
  description: {
    ru: string
    uz: string
    en: string
  }
  brand: string
  material: {
    ru: string
    uz: string
    en: string
  }
  dimensions: string
  weight: string
  colors: string[]
  features: {
    ru: string[]
    uz: string[]
    en: string[]
  }
  countryOfOrigin: {
    ru: string
    uz: string
    en: string
  }
  warranty: {
    ru: string
    uz: string
    en: string
  }
  moq: number
  stockStatus: "in-stock" | "low-stock" | "pre-order"
  image: string
  pricing: {
    1: number
    2: number
    3: number
    4: number
    5: number
  }
}

export const categories = [{ id: "all" }, { id: "bedroom" }, { id: "bathroom" }, { id: "kitchen" }, { id: "general" }]

export const products: Product[] = [
  // Bedroom Products
  {
    id: "bed-sheet-1",
    sku: "SHC-BS-001",
    name: {
      ru: "Премиум комплект постельного белья",
      uz: "Premium choyshablar to'plami",
      en: "Premium Bed Sheet Set",
    },
    category: "bedroom",
    description: {
      ru: "Высококачественный комплект постельного белья из египетского хлопка 600 нитей",
      uz: "600 ip zichligi bo'lgan Misr paxtasidan tayyorlangan yuqori sifatli choyshablar to'plami",
      en: "High-quality bed sheet set made from 600 thread count Egyptian cotton",
    },
    brand: "Safi Premium",
    material: {
      ru: "100% египетский хлопок",
      uz: "100% Misr paxtasi",
      en: "100% Egyptian Cotton",
    },
    dimensions: "King Size: 240x260cm",
    weight: "1.8 kg",
    colors: ["White", "Ivory", "Light Gray"],
    features: {
      ru: ["600 нитей", "Гипоаллергенный", "Легко стирается", "Устойчив к выцветанию"],
      uz: ["600 ip zichligi", "Gipoallergen", "Oson yuviladi", "Rangga chidamli"],
      en: ["600 Thread Count", "Hypoallergenic", "Easy Care", "Fade Resistant"],
    },
    countryOfOrigin: {
      ru: "Турция",
      uz: "Turkiya",
      en: "Turkey",
    },
    warranty: {
      ru: "12 месяцев",
      uz: "12 oy",
      en: "12 months",
    },
    moq: 50,
    stockStatus: "in-stock",
    image: "/luxury-white-bed-sheets.jpg",
    pricing: { 1: 50000, 2: 75000, 3: 120000, 4: 180000, 5: 250000 },
  },
  {
    id: "pillow-1",
    sku: "SHC-PL-002",
    name: {
      ru: "Подушка с эффектом памяти",
      uz: "Memory Foam yostiq",
      en: "Memory Foam Pillow",
    },
    category: "bedroom",
    description: {
      ru: "Ортопедическая подушка с эффектом памяти для максимального комфорта",
      uz: "Maksimal qulaylik uchun ortopedik memory foam yostiq",
      en: "Orthopedic memory foam pillow for maximum comfort",
    },
    brand: "ComfortRest",
    material: {
      ru: "Пена с эффектом памяти, хлопковый чехол",
      uz: "Memory foam, paxta qoplama",
      en: "Memory Foam, Cotton Cover",
    },
    dimensions: "50x70cm",
    weight: "1.2 kg",
    colors: ["White"],
    features: {
      ru: ["Ортопедическая поддержка", "Дышащий материал", "Съемный чехол", "Гипоаллергенный"],
      uz: ["Ortopedik qo'llab-quvvatlash", "Nafas oluvchi material", "Olinadigan qoplama", "Gipoallergen"],
      en: ["Orthopedic Support", "Breathable", "Removable Cover", "Hypoallergenic"],
    },
    countryOfOrigin: {
      ru: "Китай",
      uz: "Xitoy",
      en: "China",
    },
    warranty: {
      ru: "24 месяца",
      uz: "24 oy",
      en: "24 months",
    },
    moq: 100,
    stockStatus: "in-stock",
    image: "/white-hotel-pillow.jpg",
    pricing: { 1: 30000, 2: 45000, 3: 70000, 4: 100000, 5: 150000 },
  },
  {
    id: "duvet-1",
    sku: "SHC-DV-003",
    name: {
      ru: "Роскошное одеяло",
      uz: "Hashamatli ko'rpa",
      en: "Luxury Duvet",
    },
    category: "bedroom",
    description: {
      ru: "Премиальное пуховое одеяло с наполнителем из гусиного пуха",
      uz: "G'oz pati bilan to'ldirilgan premium sifatli ko'rpa",
      en: "Premium quality duvet filled with goose down",
    },
    brand: "Safi Luxury",
    material: {
      ru: "90% гусиный пух, 10% перо, хлопковый чехол",
      uz: "90% g'oz pati, 10% pat, paxta qoplama",
      en: "90% Goose Down, 10% Feather, Cotton Cover",
    },
    dimensions: "220x240cm",
    weight: "2.5 kg",
    colors: ["White", "Cream"],
    features: {
      ru: ["Терморегуляция", "Легкий вес", "Дышащий", "Машинная стирка"],
      uz: ["Termoregulyatsiya", "Yengil vazn", "Nafas oluvchi", "Mashinada yuviladi"],
      en: ["Temperature Regulation", "Lightweight", "Breathable", "Machine Washable"],
    },
    countryOfOrigin: {
      ru: "Германия",
      uz: "Germaniya",
      en: "Germany",
    },
    warranty: {
      ru: "36 месяцев",
      uz: "36 oy",
      en: "36 months",
    },
    moq: 30,
    stockStatus: "in-stock",
    image: "/white-luxury-duvet.jpg",
    pricing: { 1: 80000, 2: 120000, 3: 180000, 4: 250000, 5: 350000 },
  },
  {
    id: "mattress-protector-1",
    sku: "SHC-MP-004",
    name: {
      ru: "Водонепроницаемый наматрасник",
      uz: "Suv o'tkazmaydigan matras himoyasi",
      en: "Waterproof Mattress Protector",
    },
    category: "bedroom",
    description: {
      ru: "Прочный водонепроницаемый наматрасник с дышащей мембраной",
      uz: "Nafas oluvchi membranali chidamli suv o'tkazmaydigan matras himoyasi",
      en: "Durable waterproof mattress protector with breathable membrane",
    },
    brand: "ProtectPlus",
    material: {
      ru: "Полиуретановая мембрана, хлопковый верх",
      uz: "Poliuretan membrana, paxta yuza",
      en: "Polyurethane Membrane, Cotton Top",
    },
    dimensions: "180x200cm",
    weight: "0.8 kg",
    colors: ["White"],
    features: {
      ru: ["100% водонепроницаемый", "Дышащий", "Защита от клещей", "Эластичные углы"],
      uz: ["100% suv o'tkazmaydi", "Nafas oluvchi", "Kana himoyasi", "Elastik burchaklar"],
      en: ["100% Waterproof", "Breathable", "Dust Mite Protection", "Elastic Corners"],
    },
    countryOfOrigin: {
      ru: "Турция",
      uz: "Turkiya",
      en: "Turkey",
    },
    warranty: {
      ru: "18 месяцев",
      uz: "18 oy",
      en: "18 months",
    },
    moq: 80,
    stockStatus: "in-stock",
    image: "/white-mattress-protector.jpg",
    pricing: { 1: 40000, 2: 60000, 3: 90000, 4: 130000, 5: 180000 },
  },

  // Bathroom Products
  {
    id: "towel-1",
    sku: "SHC-TW-005",
    name: {
      ru: "Набор банных полотенец",
      uz: "Sochiq to'plami",
      en: "Bath Towel Set",
    },
    category: "bathroom",
    description: {
      ru: "Мягкие и впитывающие банные полотенца из турецкого хлопка",
      uz: "Turk paxtasidan tayyorlangan yumshoq va shimuvchi sochiqlar",
      en: "Soft and absorbent bath towels made from Turkish cotton",
    },
    brand: "Safi Comfort",
    material: {
      ru: "100% турецкий хлопок",
      uz: "100% Turk paxtasi",
      en: "100% Turkish Cotton",
    },
    dimensions: "70x140cm",
    weight: "600g per towel",
    colors: ["White", "Beige", "Gray"],
    features: {
      ru: ["Высокая впитываемость", "Быстросохнущий", "Мягкий", "Долговечный"],
      uz: ["Yuqori shimuvchi", "Tez quriydigan", "Yumshoq", "Uzoq xizmat qiladi"],
      en: ["High Absorbency", "Quick Dry", "Soft Touch", "Long Lasting"],
    },
    countryOfOrigin: {
      ru: "Турция",
      uz: "Turkiya",
      en: "Turkey",
    },
    warranty: {
      ru: "12 месяцев",
      uz: "12 oy",
      en: "12 months",
    },
    moq: 200,
    stockStatus: "in-stock",
    image: "/white-hotel-bath-towels.jpg",
    pricing: { 1: 25000, 2: 40000, 3: 65000, 4: 95000, 5: 140000 },
  },
  {
    id: "shampoo-1",
    sku: "SHC-SH-006",
    name: {
      ru: "Шампунь и кондиционер для отелей",
      uz: "Mehmonxona shampuni va konditsioneri",
      en: "Hotel Shampoo & Conditioner",
    },
    category: "bathroom",
    description: {
      ru: "Премиальные средства по уходу за волосами с натуральными экстрактами",
      uz: "Tabiiy ekstraktlar bilan premium sifatli soch parvarishi mahsulotlari",
      en: "Premium hair care products with natural extracts",
    },
    brand: "LuxeCare",
    material: {
      ru: "Натуральные экстракты, без парабенов",
      uz: "Tabiiy ekstraktlar, parabensiz",
      en: "Natural Extracts, Paraben-Free",
    },
    dimensions: "30ml bottles",
    weight: "35g per bottle",
    colors: ["Clear"],
    features: {
      ru: ["Без парабенов", "Натуральные ингредиенты", "pH-сбалансированный", "Приятный аромат"],
      uz: ["Parabensiz", "Tabiiy tarkib", "pH muvozanatlangan", "Yoqimli hid"],
      en: ["Paraben-Free", "Natural Ingredients", "pH Balanced", "Pleasant Fragrance"],
    },
    countryOfOrigin: {
      ru: "Италия",
      uz: "Italiya",
      en: "Italy",
    },
    warranty: {
      ru: "6 месяцев",
      uz: "6 oy",
      en: "6 months",
    },
    moq: 500,
    stockStatus: "in-stock",
    image: "/hotel-shampoo-bottles.jpg",
    pricing: { 1: 5000, 2: 8000, 3: 12000, 4: 18000, 5: 25000 },
  },
  {
    id: "soap-1",
    sku: "SHC-SP-007",
    name: {
      ru: "Роскошное мыло",
      uz: "Hashamatli sovun",
      en: "Luxury Soap Bar",
    },
    category: "bathroom",
    description: {
      ru: "Нежное и ароматное мыло ручной работы с натуральными маслами",
      uz: "Tabiiy moylar bilan qo'lda tayyorlangan yumshoq va xushbo'y sovun",
      en: "Gentle handcrafted soap with natural oils",
    },
    brand: "Artisan Soap Co.",
    material: {
      ru: "Натуральные масла, глицерин",
      uz: "Tabiiy moylar, glitserin",
      en: "Natural Oils, Glycerin",
    },
    dimensions: "100g bar",
    weight: "100g",
    colors: ["White", "Cream"],
    features: {
      ru: ["Ручная работа", "Натуральные ингредиенты", "Увлажняющее", "Долго держится"],
      uz: ["Qo'lda tayyorlangan", "Tabiiy tarkib", "Namlovchi", "Uzoq davom etadi"],
      en: ["Handcrafted", "Natural Ingredients", "Moisturizing", "Long Lasting"],
    },
    countryOfOrigin: {
      ru: "Франция",
      uz: "Fransiya",
      en: "France",
    },
    warranty: {
      ru: "6 месяцев",
      uz: "6 oy",
      en: "6 months",
    },
    moq: 1000,
    stockStatus: "in-stock",
    image: "/luxury-hotel-soap-bar.jpg",
    pricing: { 1: 3000, 2: 5000, 3: 8000, 4: 12000, 5: 18000 },
  },
  {
    id: "bathrobe-1",
    sku: "SHC-BR-008",
    name: {
      ru: "Плюшевый халат",
      uz: "Yumshoq xalat",
      en: "Plush Bathrobe",
    },
    category: "bathroom",
    description: {
      ru: "Удобный и роскошный махровый халат премиум класса",
      uz: "Qulay va hashamatli premium sifatli mahroviy xalat",
      en: "Comfortable and luxurious premium terry bathrobe",
    },
    brand: "Safi Luxury",
    material: {
      ru: "100% хлопковая махра",
      uz: "100% paxta mahro",
      en: "100% Cotton Terry",
    },
    dimensions: "One Size (L/XL)",
    weight: "1.5 kg",
    colors: ["White", "Navy", "Gray"],
    features: {
      ru: ["Мягкая махра", "Два кармана", "Пояс в комплекте", "Впитывающий"],
      uz: ["Yumshoq mahro", "Ikki cho'ntak", "Kamar bilan", "Shimuvchi"],
      en: ["Soft Terry", "Two Pockets", "Belt Included", "Absorbent"],
    },
    countryOfOrigin: {
      ru: "Португалия",
      uz: "Portugaliya",
      en: "Portugal",
    },
    warranty: {
      ru: "24 месяца",
      uz: "24 oy",
      en: "24 months",
    },
    moq: 50,
    stockStatus: "in-stock",
    image: "/white-hotel-bathrobe.jpg",
    pricing: { 1: 60000, 2: 90000, 3: 140000, 4: 200000, 5: 280000 },
  },

  // Kitchen Products
  {
    id: "cutlery-1",
    sku: "SHC-CT-009",
    name: {
      ru: "Набор столовых приборов из нержавеющей стали",
      uz: "Zanglamaydigan po'lat pichoq-vilka to'plami",
      en: "Stainless Steel Cutlery Set",
    },
    category: "kitchen",
    description: {
      ru: "Прочные столовые приборы из нержавеющей стали 18/10 ресторанного качества",
      uz: "Restoran sifatidagi 18/10 zanglamaydigan po'latdan chidamli pichoq-vilka",
      en: "Durable restaurant-grade 18/10 stainless steel cutlery",
    },
    brand: "ProChef",
    material: {
      ru: "Нержавеющая сталь 18/10",
      uz: "18/10 zanglamaydigan po'lat",
      en: "18/10 Stainless Steel",
    },
    dimensions: "24-piece set",
    weight: "2.5 kg per set",
    colors: ["Silver"],
    features: {
      ru: ["Ресторанное качество", "Посудомоечная машина", "Устойчив к коррозии", "Сбалансированный вес"],
      uz: ["Restoran sifati", "Idish yuvish mashinasida yuviladi", "Korroziyaga chidamli", "Muvozanatli vazn"],
      en: ["Restaurant Grade", "Dishwasher Safe", "Corrosion Resistant", "Balanced Weight"],
    },
    countryOfOrigin: {
      ru: "Германия",
      uz: "Germaniya",
      en: "Germany",
    },
    warranty: {
      ru: "60 месяцев",
      uz: "60 oy",
      en: "60 months",
    },
    moq: 100,
    stockStatus: "in-stock",
    image: "/hotel-cutlery-set.jpg",
    pricing: { 1: 35000, 2: 55000, 3: 85000, 4: 125000, 5: 180000 },
  },
  {
    id: "plates-1",
    sku: "SHC-PL-010",
    name: {
      ru: "Фарфоровые тарелки",
      uz: "Chinni tarelkalar",
      en: "Porcelain Dinner Plates",
    },
    category: "kitchen",
    description: {
      ru: "Элегантные фарфоровые тарелки профессионального качества",
      uz: "Professional sifatdagi nafis chinni tarelkalar",
      en: "Elegant professional-grade porcelain dinner plates",
    },
    brand: "Royal Porcelain",
    material: {
      ru: "Высококачественный фарфор",
      uz: "Yuqori sifatli chinni",
      en: "High-Quality Porcelain",
    },
    dimensions: "27cm diameter",
    weight: "400g per plate",
    colors: ["White", "Ivory"],
    features: {
      ru: ["Устойчив к сколам", "Микроволновая печь", "Посудомоечная машина", "Штабелируемый"],
      uz: [
        "Sinishga chidamli",
        "Mikroto'lqinli pechda ishlatiladi",
        "Idish yuvish mashinasida yuviladi",
        "Ustma-ust qo'yiladi",
      ],
      en: ["Chip Resistant", "Microwave Safe", "Dishwasher Safe", "Stackable"],
    },
    countryOfOrigin: {
      ru: "Япония",
      uz: "Yaponiya",
      en: "Japan",
    },
    warranty: {
      ru: "24 месяца",
      uz: "24 oy",
      en: "24 months",
    },
    moq: 200,
    stockStatus: "in-stock",
    image: "/white-porcelain-dinner-plates.jpg",
    pricing: { 1: 20000, 2: 35000, 3: 55000, 4: 80000, 5: 120000 },
  },
  {
    id: "glasses-1",
    sku: "SHC-GL-011",
    name: {
      ru: "Набор хрустальных бокалов",
      uz: "Kristall stakanlar to'plami",
      en: "Crystal Glassware Set",
    },
    category: "kitchen",
    description: {
      ru: "Премиальные хрустальные бокалы ручной работы",
      uz: "Qo'lda tayyorlangan premium kristall stakanlar",
      en: "Premium handcrafted crystal glasses",
    },
    brand: "Crystal Elite",
    material: {
      ru: "Свинцовый хрусталь",
      uz: "Qo'rg'oshinli kristall",
      en: "Lead Crystal",
    },
    dimensions: "350ml capacity",
    weight: "250g per glass",
    colors: ["Clear"],
    features: {
      ru: ["Ручная работа", "Блестящая отделка", "Элегантный дизайн", "Посудомоечная машина"],
      uz: ["Qo'lda tayyorlangan", "Yaltiroq qoplama", "Nafis dizayn", "Idish yuvish mashinasida yuviladi"],
      en: ["Handcrafted", "Brilliant Finish", "Elegant Design", "Dishwasher Safe"],
    },
    countryOfOrigin: {
      ru: "Чехия",
      uz: "Chexiya",
      en: "Czech Republic",
    },
    warranty: {
      ru: "12 месяцев",
      uz: "12 oy",
      en: "12 months",
    },
    moq: 150,
    stockStatus: "in-stock",
    image: "/crystal-wine-glasses.png",
    pricing: { 1: 30000, 2: 50000, 3: 80000, 4: 120000, 5: 170000 },
  },
  {
    id: "coffee-maker-1",
    sku: "SHC-CM-012",
    name: {
      ru: "Профессиональная кофемашина",
      uz: "Professional kofe mashinasi",
      en: "Professional Coffee Maker",
    },
    category: "kitchen",
    description: {
      ru: "Высококачественная автоматическая кофемашина для отелей с программируемыми настройками",
      uz: "Dasturlashtiriladigan sozlamalar bilan mehmonxonalar uchun yuqori sifatli avtomatik kofe mashinasi",
      en: "High-quality automatic coffee maker for hotels with programmable settings",
    },
    brand: "BrewMaster Pro",
    material: {
      ru: "Нержавеющая сталь, пластик",
      uz: "Zanglamaydigan po'lat, plastik",
      en: "Stainless Steel, Plastic",
    },
    dimensions: "35x40x45cm",
    weight: "8 kg",
    colors: ["Black", "Silver"],
    features: {
      ru: ["Программируемый таймер", "12 чашек", "Автоотключение", "Фильтр для воды"],
      uz: ["Dasturlashtiriladigan taymer", "12 chashka", "Avtomatik o'chirish", "Suv filtri"],
      en: ["Programmable Timer", "12 Cup Capacity", "Auto Shut-off", "Water Filter"],
    },
    countryOfOrigin: {
      ru: "Италия",
      uz: "Italiya",
      en: "Italy",
    },
    warranty: {
      ru: "24 месяца",
      uz: "24 oy",
      en: "24 months",
    },
    moq: 10,
    stockStatus: "in-stock",
    image: "/hotel-coffee-maker-machine.jpg",
    pricing: { 1: 500000, 2: 750000, 3: 1200000, 4: 1800000, 5: 2500000 },
  },

  // General Supplies
  {
    id: "carpet-1",
    sku: "SHC-CP-013",
    name: {
      ru: "Роскошный ковер",
      uz: "Hashamatli gilam",
      en: "Luxury Carpet",
    },
    category: "general",
    description: {
      ru: "Премиальный ковер ручной работы для гостиничных номеров",
      uz: "Mehmonxona xonalari uchun qo'lda to'qilgan premium sifatli gilam",
      en: "Premium handwoven carpet for hotel rooms",
    },
    brand: "Oriental Carpets",
    material: {
      ru: "100% шерсть",
      uz: "100% jun",
      en: "100% Wool",
    },
    dimensions: "200x300cm",
    weight: "15 kg",
    colors: ["Beige", "Gray", "Navy"],
    features: {
      ru: ["Ручная работа", "Огнестойкий", "Легко чистится", "Звукоизоляция"],
      uz: ["Qo'lda to'qilgan", "Yong'inga chidamli", "Oson tozalanadi", "Tovush izolyatsiyasi"],
      en: ["Handwoven", "Fire Resistant", "Easy to Clean", "Sound Insulation"],
    },
    countryOfOrigin: {
      ru: "Иран",
      uz: "Eron",
      en: "Iran",
    },
    warranty: {
      ru: "60 месяцев",
      uz: "60 oy",
      en: "60 months",
    },
    moq: 20,
    stockStatus: "in-stock",
    image: "/luxury-hotel-carpet.jpg",
    pricing: { 1: 150000, 2: 250000, 3: 400000, 4: 600000, 5: 850000 },
  },
  {
    id: "hanger-1",
    sku: "SHC-HG-014",
    name: {
      ru: "Набор деревянных вешалок",
      uz: "Yog'och ilgichlar to'plami",
      en: "Wooden Hangers Set",
    },
    category: "general",
    description: {
      ru: "Элегантные деревянные вешалки премиум класса с нескользящим покрытием",
      uz: "Sirg'alib ketmaydigan qoplama bilan premium sifatli nafis yog'och ilgichlar",
      en: "Elegant premium wooden hangers with non-slip coating",
    },
    brand: "WoodCraft",
    material: {
      ru: "Натуральное дерево, бархатное покрытие",
      uz: "Tabiiy yog'och, baxmal qoplama",
      en: "Natural Wood, Velvet Coating",
    },
    dimensions: "45cm wide",
    weight: "150g per hanger",
    colors: ["Natural Wood", "Dark Walnut"],
    features: {
      ru: ["Нескользящее покрытие", "Прочная конструкция", "Вращающийся крючок", "Экологичный"],
      uz: ["Sirg'amaydigan qoplama", "Mustahkam konstruksiya", "Aylanadigan ilgak", "Ekologik toza"],
      en: ["Non-Slip Coating", "Sturdy Construction", "Rotating Hook", "Eco-Friendly"],
    },
    countryOfOrigin: {
      ru: "Вьетнам",
      uz: "Vyetnam",
      en: "Vietnam",
    },
    warranty: {
      ru: "12 месяцев",
      uz: "12 oy",
      en: "12 months",
    },
    moq: 500,
    stockStatus: "in-stock",
    image: "/wooden-hotel-hangers.jpg",
    pricing: { 1: 15000, 2: 25000, 3: 40000, 4: 60000, 5: 85000 },
  },
  {
    id: "safe-1",
    sku: "SHC-SF-015",
    name: {
      ru: "Электронный сейф",
      uz: "Elektron seyf",
      en: "Electronic Safe",
    },
    category: "general",
    description: {
      ru: "Безопасный электронный сейф для гостевых номеров с цифровым замком",
      uz: "Raqamli qulf bilan mehmon xonalari uchun xavfsiz elektron seyf",
      en: "Secure electronic safe for guest rooms with digital lock",
    },
    brand: "SecureVault",
    material: {
      ru: "Сталь, электронный замок",
      uz: "Po'lat, elektron qulf",
      en: "Steel, Electronic Lock",
    },
    dimensions: "35x25x25cm",
    weight: "12 kg",
    colors: ["Black", "Gray"],
    features: {
      ru: ["Цифровой замок", "Аварийный ключ", "Светодиодный дисплей", "Болтовое крепление"],
      uz: ["Raqamli qulf", "Favqulodda kalit", "LED displey", "Murvatli mahkamlash"],
      en: ["Digital Lock", "Emergency Key", "LED Display", "Bolt-Down Mounting"],
    },
    countryOfOrigin: {
      ru: "Южная Корея",
      uz: "Janubiy Koreya",
      en: "South Korea",
    },
    warranty: {
      ru: "36 месяцев",
      uz: "36 oy",
      en: "36 months",
    },
    moq: 30,
    stockStatus: "in-stock",
    image: "/hotel-room-electronic-safe.jpg",
    pricing: { 1: 300000, 2: 450000, 3: 700000, 4: 1000000, 5: 1400000 },
  },
  {
    id: "minibar-1",
    sku: "SHC-MB-016",
    name: {
      ru: "Мини-холодильник",
      uz: "Mini muzlatgich",
      en: "Mini Refrigerator",
    },
    category: "general",
    description: {
      ru: "Компактный энергоэффективный холодильник для минибара с бесшумной работой",
      uz: "Shovqinsiz ishlaydigan ixcham energiya tejovchi minibar muzlatgichi",
      en: "Compact energy-efficient minibar refrigerator with silent operation",
    },
    brand: "CoolTech",
    material: {
      ru: "Металл, пластик, стекло",
      uz: "Metall, plastik, shisha",
      en: "Metal, Plastic, Glass",
    },
    dimensions: "50x45x48cm",
    weight: "18 kg",
    colors: ["Black", "White"],
    features: {
      ru: ["Бесшумная работа", "Энергоэффективный", "Регулируемая температура", "Стеклянная дверь"],
      uz: ["Shovqinsiz ishlash", "Energiya tejovchi", "Sozlanuvchi harorat", "Shisha eshik"],
      en: ["Silent Operation", "Energy Efficient", "Adjustable Temperature", "Glass Door"],
    },
    countryOfOrigin: {
      ru: "Китай",
      uz: "Xitoy",
      en: "China",
    },
    warranty: {
      ru: "24 месяца",
      uz: "24 oy",
      en: "24 months",
    },
    moq: 20,
    stockStatus: "in-stock",
    image: "/hotel-minibar-refrigerator.jpg",
    pricing: { 1: 400000, 2: 600000, 3: 950000, 4: 1400000, 5: 2000000 },
  },
]
