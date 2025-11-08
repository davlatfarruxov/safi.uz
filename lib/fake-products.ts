export interface Product {
  id: string
  name: string
  nameUz?: string
  nameRu?: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
  isNew?: boolean
  rating?: number
  reviews?: number
  category: string
}

export const newProducts: Product[] = [
  {
    id: "new-1",
    name: "Premium Hotel Bathrobe Collection",
    nameUz: "Premium mehmonxona xalatlari kolleksiyasi",
    nameRu: "Коллекция премиум халатов для отелей",
    price: 89.99,
    originalPrice: 119.99,
    image: "/white-velour-bathrobe.jpg",
    badge: "NEW",
    isNew: true,
    rating: 4.8,
    reviews: 24,
    category: "new"
  },
  {
    id: "new-2",
    name: "Luxury Bath Towel Set",
    nameUz: "Hashamatli hammom sochiq to'plami",
    nameRu: "Набор роскошных банных полотенец",
    price: 45.50,
    originalPrice: 65.00,
    image: "/white-luxury-bath-towels.jpg",
    badge: "NEW",
    isNew: true,
    rating: 4.9,
    reviews: 18,
    category: "new"
  },
  {
    id: "new-3",
    name: "Eco-Friendly Dispensers",
    nameUz: "Ekologik dozatorlar",
    nameRu: "Экологичные дозаторы",
    price: 125.00,
    originalPrice: 150.00,
    image: "/green-pump-dispenser-bottle-body-wash.jpg",
    badge: "ECO",
    isNew: true,
    rating: 4.7,
    reviews: 32,
    category: "new"
  },
  {
    id: "new-4",
    name: "Premium Hotel Slippers",
    nameUz: "Premium mehmonxona shippaklar",
    nameRu: "Премиум тапочки для отелей",
    price: 12.99,
    originalPrice: 18.99,
    image: "/white-hotel-slippers.jpg",
    badge: "NEW",
    isNew: true,
    rating: 4.6,
    reviews: 45,
    category: "new"
  },
  {
    id: "new-5",
    name: "Striped Velour Bathrobe",
    nameUz: "Chiziqli velur xalat",
    nameRu: "Велюровый халат в полоску",
    price: 75.99,
    originalPrice: 95.00,
    image: "/white-striped-velour-bathrobe.jpg",
    badge: "NEW",
    isNew: true,
    rating: 4.7,
    reviews: 31,
    category: "new"
  },
  {
    id: "new-6",
    name: "Waffle Texture Bathrobe",
    nameUz: "Vafli teksturali xalat",
    nameRu: "Вафельный халат",
    price: 65.50,
    originalPrice: 80.00,
    image: "/white-waffle-bathrobe.jpg",
    badge: "NEW",
    isNew: true,
    rating: 4.5,
    reviews: 28,
    category: "new"
  },
  {
    id: "new-7",
    name: "Children's Microfibre Bathrobe",
    nameUz: "Bolalar mikrofibr xalati",
    nameRu: "Детский халат из микрофибры",
    price: 35.99,
    originalPrice: 45.00,
    image: "/childrens-white-microfibre-bathrobe.jpg",
    badge: "NEW",
    isNew: true,
    rating: 4.8,
    reviews: 42,
    category: "new"
  },
  {
    id: "new-8",
    name: "Wooden Baby Cot",
    nameUz: "Yog'och chaqaloq kravati",
    nameRu: "Деревянная детская кроватка",
    price: 189.00,
    originalPrice: 220.00,
    image: "/wooden-baby-cot-hotel.jpg",
    badge: "NEW",
    isNew: true,
    rating: 4.9,
    reviews: 15,
    category: "new"
  },
  {
    id: "new-9",
    name: "Professional Hair Dryer",
    nameUz: "Professional soch quritgichi",
    nameRu: "Профессиональный фен",
    price: 89.99,
    originalPrice: 120.00,
    image: "/corby-hairdryer-black.jpg.png",
    badge: "NEW",
    isNew: true,
    rating: 4.6,
    reviews: 67,
    category: "new"
  },
  {
    id: "new-10",
    name: "Natural Wood Hangers Set",
    nameUz: "Tabiiy yog'och ilgichlar to'plami",
    nameRu: "Набор вешалок из натурального дерева",
    price: 24.99,
    originalPrice: 35.00,
    image: "/wooden-hanger-natural.jpg",
    badge: "NEW",
    isNew: true,
    rating: 4.4,
    reviews: 89,
    category: "new"
  },
  {
    id: "new-11",
    name: "Premium Hotel Amenities Kit",
    nameUz: "Premium mehmonxona qulayliklari to'plami",
    nameRu: "Набор премиум удобств для отеля",
    price: 55.99,
    originalPrice: 75.00,
    image: "/hotel-guest-amenities-display.jpg",
    badge: "NEW",
    isNew: true,
    rating: 4.7,
    reviews: 123,
    category: "new"
  },
  {
    id: "new-12",
    name: "Luxury Hotel Room Accessories",
    nameUz: "Hashamatli mehmonxona xonasi aksessuarlari",
    nameRu: "Роскошные аксессуары для гостиничных номеров",
    price: 149.99,
    originalPrice: 180.00,
    image: "/luxury-hotel-room-accessories.jpg",
    badge: "NEW",
    isNew: true,
    rating: 4.8,
    reviews: 56,
    category: "new"
  }
]

export const ecoProducts: Product[] = [
  {
    id: "eco-1",
    name: "Geneva Green Body Wash Dispenser",
    nameUz: "Geneva Green tana yuvish dozatori",
    nameRu: "Дозатор Geneva Green для мытья тела",
    price: 63.16,
    originalPrice: 75.79,
    image: "/green-pump-dispenser-bottle-body-wash.jpg",
    badge: "ECO",
    rating: 4.8,
    reviews: 67,
    category: "eco"
  },
  {
    id: "eco-2",
    name: "Geneva Green Hair & Body Wash",
    nameUz: "Geneva Green soch va tana yuvish vositasi",
    nameRu: "Geneva Green средство для мытья волос и тела",
    price: 61.65,
    originalPrice: 73.98,
    image: "/green-pump-dispenser-bottle-hair-body-wash.jpg",
    badge: "ECO",
    rating: 4.9,
    reviews: 89,
    category: "eco"
  },
  {
    id: "eco-3",
    name: "Geneva Green Body Lotion",
    nameUz: "Geneva Green tana losyoni",
    nameRu: "Лосьон для тела Geneva Green",
    price: 75.20,
    originalPrice: 90.24,
    image: "/green-pump-dispenser-bottle-body-lotion.jpg",
    badge: "ECO",
    rating: 4.7,
    reviews: 54,
    category: "eco"
  }
]

export const bedroomProducts: Product[] = [
  {
    id: "bedroom-1",
    name: "Luxury Hotel Bedding Set",
    nameUz: "Hashamatli mehmonxona choyshablar to'plami",
    nameRu: "Набор роскошного постельного белья для отелей",
    price: 199.99,
    originalPrice: 249.99,
    image: "/luxury-hotel-bedding-white-linens.jpg",
    rating: 4.9,
    reviews: 156,
    category: "bedroom"
  },
  {
    id: "bedroom-2",
    name: "Premium Pillows Set",
    nameUz: "Premium yostiqlar to'plami",
    nameRu: "Набор премиум подушек",
    price: 89.50,
    originalPrice: 120.00,
    image: "/luxury-hotel-bedroom-with-white-linens.jpg",
    rating: 4.8,
    reviews: 98,
    category: "bedroom"
  },
  {
    id: "bedroom-3",
    name: "Wooden Hangers Set",
    nameUz: "Yog'och ilgichlar to'plami",
    nameRu: "Набор деревянных вешалок",
    price: 24.99,
    originalPrice: 35.00,
    image: "/wooden-hanger-natural.jpg",
    rating: 4.6,
    reviews: 234,
    category: "bedroom"
  },
  {
    id: "bedroom-4",
    name: "Baby Cot for Hotels",
    nameUz: "Mehmonxonalar uchun chaqaloq kravati",
    nameRu: "Детская кроватка для отелей",
    price: 189.00,
    originalPrice: 220.00,
    image: "/wooden-baby-cot-hotel.jpg",
    rating: 4.7,
    reviews: 67,
    category: "bedroom"
  }
]

export const bathroomProducts: Product[] = [
  {
    id: "bathroom-1",
    name: "White Terry Bathrobe",
    nameUz: "Oq terry xalat",
    nameRu: "Белый махровый халат",
    price: 65.99,
    originalPrice: 85.00,
    image: "/white-terry-towelling-bathrobe.jpg",
    rating: 4.8,
    reviews: 145,
    category: "bathroom"
  },
  {
    id: "bathroom-2",
    name: "Microfibre Bathrobe",
    nameUz: "Mikrofibr xalat",
    nameRu: "Халат из микрофибры",
    price: 55.50,
    originalPrice: 75.00,
    image: "/white-microfibre-bathrobe.jpg",
    rating: 4.7,
    reviews: 89,
    category: "bathroom"
  },
  {
    id: "bathroom-3",
    name: "Waffle Bathrobe",
    nameUz: "Vafli xalat",
    nameRu: "Вафельный халат",
    price: 49.99,
    originalPrice: 65.00,
    image: "/white-waffle-bathrobe.jpg",
    rating: 4.6,
    reviews: 123,
    category: "bathroom"
  },
  {
    id: "bathroom-4",
    name: "Children's Bathrobe",
    nameUz: "Bolalar xalati",
    nameRu: "Детский халат",
    price: 35.99,
    originalPrice: 45.00,
    image: "/childrens-white-microfibre-bathrobe.jpg",
    rating: 4.9,
    reviews: 78,
    category: "bathroom"
  }
]

export const guestProducts: Product[] = [
  {
    id: "guest-1",
    name: "Hotel Guest Amenities Kit",
    nameUz: "Mehmonxona mehmon qulayliklari to'plami",
    nameRu: "Набор удобств для гостей отеля",
    price: 25.99,
    originalPrice: 35.00,
    image: "/hotel-guest-amenities-display.jpg",
    rating: 4.8,
    reviews: 234,
    category: "guest"
  },
  {
    id: "guest-2",
    name: "Luxury Toiletries Set",
    nameUz: "Hashamatli gigiyena vositalari to'plami",
    nameRu: "Набор роскошных туалетных принадлежностей",
    price: 45.50,
    originalPrice: 60.00,
    image: "/luxury-hotel-toiletries-and-amenities.jpg",
    rating: 4.9,
    reviews: 167,
    category: "guest"
  },
  {
    id: "guest-3",
    name: "Premium Hotel Slippers",
    nameUz: "Premium mehmonxona shippaklar",
    nameRu: "Премиум тапочки для отелей",
    price: 12.99,
    originalPrice: 18.00,
    image: "/white-hotel-slippers.jpg",
    rating: 4.7,
    reviews: 345,
    category: "guest"
  }
]

export const hotelComponents: Product[] = [
  {
    id: "components-1",
    name: "Hotel Mini Fridge",
    nameUz: "Mehmonxona mini muzlatgichi",
    nameRu: "Мини-холодильник для отеля",
    price: 299.99,
    originalPrice: 350.00,
    image: "/hotel-mini-fridge-minibar.jpg",
    rating: 4.6,
    reviews: 89,
    category: "components"
  },
  {
    id: "components-2",
    name: "Hotel Hair Dryer",
    nameUz: "Mehmonxona soch quritgichi",
    nameRu: "Фен для отеля",
    price: 89.99,
    originalPrice: 120.00,
    image: "/corby-hairdryer-black.jpg.png",
    rating: 4.7,
    reviews: 156,
    category: "components"
  },
  {
    id: "components-3",
    name: "Hotel Room Accessories",
    nameUz: "Mehmonxona xonasi aksessuarlari",
    nameRu: "Аксессуары для гостиничных номеров",
    price: 149.99,
    originalPrice: 180.00,
    image: "/luxury-hotel-room-accessories.jpg",
    rating: 4.8,
    reviews: 234,
    category: "components"
  }
]

export const cleaningProducts: Product[] = [
  {
    id: "cleaning-1",
    name: "Professional Cleaning Kit",
    nameUz: "Professional tozalash to'plami",
    nameRu: "Профессиональный набор для уборки",
    price: 199.99,
    originalPrice: 250.00,
    image: "/bathroom-products-display.jpg",
    rating: 4.8,
    reviews: 123,
    category: "cleaning"
  },
  {
    id: "cleaning-2",
    name: "Eco Cleaning Solutions",
    nameUz: "Eko tozalash yechimlari",
    nameRu: "Экологичные средства для уборки",
    price: 89.50,
    originalPrice: 110.00,
    image: "/green-pump-dispenser-bottle-body-wash.jpg",
    badge: "ECO",
    rating: 4.9,
    reviews: 89,
    category: "cleaning"
  }
]