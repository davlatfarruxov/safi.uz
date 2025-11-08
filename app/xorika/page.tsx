import { ProductPageLayout } from "@/components/product-page-layout"

// Xorika uchun fake products
const xorikaProducts = [
  {
    id: "xorika-1",
    name: "Hostel Basic Amenity Kit",
    nameUz: "Xostel asosiy qulayliklar to'plami",
    nameRu: "Базовый набор удобств для хостела",
    price: 15.99,
    originalPrice: 22.00,
    image: "/hotel-guest-amenities-display.jpg",
    badge: "HOSTEL",
    rating: 4.2,
    reviews: 89,
    category: "xorika"
  },
  {
    id: "xorika-2", 
    name: "SPA Salon Towel Set",
    nameUz: "SPA salon sochiqlar to'plami",
    nameRu: "Набор полотенец для SPA салона",
    price: 45.50,
    originalPrice: 60.00,
    image: "/white-luxury-bath-towels.jpg",
    badge: "SPA",
    rating: 4.7,
    reviews: 156,
    category: "xorika"
  },
  {
    id: "xorika-3",
    name: "Hospital Grade Dispensers",
    nameUz: "Kasalxona darajasidagi dozatorlar", 
    nameRu: "Дозаторы больничного класса",
    price: 89.99,
    originalPrice: 110.00,
    image: "/green-pump-dispenser-bottle-body-wash.jpg",
    badge: "MEDICAL",
    rating: 4.9,
    reviews: 234,
    category: "xorika"
  },
  {
    id: "xorika-4",
    name: "Dacha Comfort Package",
    nameUz: "Dacha qulaylik paketi",
    nameRu: "Пакет комфорта для дачи",
    price: 125.00,
    originalPrice: 150.00,
    image: "/luxury-hotel-room-accessories.jpg",
    badge: "DACHA",
    rating: 4.5,
    reviews: 67,
    category: "xorika"
  },
  {
    id: "xorika-5",
    name: "Dormitory Bedding Set",
    nameUz: "Yotoqxona choyshablar to'plami",
    nameRu: "Набор постельного белья для общежития",
    price: 35.99,
    originalPrice: 45.00,
    image: "/luxury-hotel-bedding-white-linens.jpg",
    badge: "DORM",
    rating: 4.3,
    reviews: 123,
    category: "xorika"
  },
  {
    id: "xorika-6",
    name: "Country House Essentials",
    nameUz: "Qishloq uyi zaruriyatlari",
    nameRu: "Основные принадлежности для загородного дома",
    price: 75.50,
    originalPrice: 95.00,
    image: "/wooden-baby-cot-hotel.jpg",
    badge: "COUNTRY",
    rating: 4.6,
    reviews: 89,
    category: "xorika"
  }
]

export default function XorikaPage() {
  return (
    <ProductPageLayout
      titleKey="star.rating.xorika.title"
      subtitleKey="star.rating.xorika.description"
      heroImage="/hotel-guest-amenities-display.jpg"
      products={xorikaProducts}
      categoryKey="xorika"
    />
  )
}