import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SidebarFilters } from "@/components/sidebar-filters"
import { ProductCard } from "@/components/product-card"
import { PageHeader } from "@/components/page-header"

export default function ToiletriesPage() {
  const products = [
    {
      id: 1,
      name: "Geneva Green Dispensers - Natural Shampoo",
      nameUz: "Geneva Green dozatorlar - Tabiiy shampun",
      nameRu: "Дозаторы Geneva Green - Натуральный шампунь",
      price: 24.99,
      originalPrice: 34.99,
      image: "best-sellers-1.png",
      badge: "Eco-Friendly",
      isNew: true,
      rating: 4.8,
      reviews: 134
    },
    {
      id: 2,
      name: "Luxury Soap Dispensers Set",
      nameUz: "Hashamatli sovun dozatorlari to'plami",
      nameRu: "Набор роскошных дозаторов мыла",
      price: 45.99,
      originalPrice: 59.99,
      image: "best-sellers-2.png",
      badge: "Premium",
      isNew: false,
      rating: 4.7,
      reviews: 89
    },
    {
      id: 3,
      name: "Natural Body Wash Collection",
      nameUz: "Tabiiy tana yuvish kolleksiyasi",
      nameRu: "Коллекция натурального геля для душа",
      price: 18.99,
      originalPrice: 26.99,
      image: "best-sellers-3.png",
      badge: "Organic",
      isNew: true,
      rating: 4.9,
      reviews: 156
    },
    {
      id: 4,
      name: "Hotel Shampoo & Conditioner Set",
      nameUz: "Mehmonxona shampun va konditsioner to'plami",
      nameRu: "Набор шампуня и кондиционера для отелей",
      price: 32.99,
      originalPrice: 44.99,
      image: "best-sellers-4.png",
      badge: "Bestseller",
      isNew: false,
      rating: 4.6,
      reviews: 203
    },
    {
      id: 5,
      name: "Bamboo Toothbrush Holders",
      nameUz: "Bambuk tish cho'tkasi ushlagichlar",
      nameRu: "Держатели зубных щеток из бамбука",
      price: 15.99,
      originalPrice: 22.99,
      image: "best-sellers-3.png",
      badge: "Sustainable",
      isNew: true,
      rating: 4.5,
      reviews: 78
    },
    {
      id: 6,
      name: "Premium Toilet Paper Dispensers",
      nameUz: "Premium hojatxona qog'ozi dozatorlari",
      nameRu: "Премиум дозаторы туалетной бумаги",
      price: 67.99,
      originalPrice: 89.99,
      image: "best-sellers-4.png",
      badge: "Luxury",
      isNew: false,
      rating: 4.8,
      reviews: 124
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />

      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="lg:w-64 xl:w-72">
            <SidebarFilters />
          </div>

          <div className="flex-1">
            <PageHeader 
              titleKey="toiletries.title"
              descriptionKey="toiletries.description"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  nameUz={product.nameUz}
                  nameRu={product.nameRu}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  badge={product.badge}
                  isNew={product.isNew}
                  rating={product.rating}
                  reviews={product.reviews}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}