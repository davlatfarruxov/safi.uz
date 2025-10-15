import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SidebarFilters } from "@/components/sidebar-filters"
import { ProductCard } from "@/components/product-card"
import { PageHeader } from "@/components/page-header"

export default function ChildrensAmenitiesPage() {
  const products = [
    {
      id: 1,
      name: "Kids Welcome Kit - Fun Collection",
      nameUz: "Bolalar xush kelibsiz to'plami - Qiziqarli kolleksiya",
      nameRu: "Детский приветственный набор - Веселая коллекция",
      price: 34.99,
      originalPrice: 49.99,
      image: "white-luxury-bath-towels.jpg",
      badge: "Kid-Friendly",
      isNew: true,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      name: "Children's Bathrobe Set",
      nameUz: "Bolalar xalatlari to'plami",
      nameRu: "Набор детских халатов",
      price: 45.99,
      originalPrice: 64.99,
      image: "white-microfibre-bathrobe.jpg",
      badge: "Soft & Cozy",
      isNew: false,
      rating: 4.9,
      reviews: 134
    },
    {
      id: 3,
      name: "Mini Toiletries for Kids",
      nameUz: "Bolalar uchun mini gigiyena vositalari",
      nameRu: "Мини туалетные принадлежности для детей",
      price: 18.99,
      originalPrice: 26.99,
      image: "white-striped-velour-bathrobe.jpg",
      badge: "Gentle Formula",
      isNew: true,
      rating: 4.7,
      reviews: 98
    },
    {
      id: 4,
      name: "Colorful Kids Slippers",
      nameUz: "Rangli bolalar shippaklar",
      nameRu: "Красочные детские тапочки",
      price: 12.99,
      originalPrice: 18.99,
      image: "white-terry-towelling-bathrobe.jpg",
      badge: "Colorful",
      isNew: false,
      rating: 4.6,
      reviews: 187
    },
    {
      id: 5,
      name: "Baby Care Essentials Kit",
      nameUz: "Chaqaloq parvarishi zaruriyatlari to'plami",
      nameRu: "Набор основных средств по уходу за ребенком",
      price: 67.99,
      originalPrice: 89.99,
      image: "white-velour-bathrobe.jpg",
      badge: "Baby Safe",
      isNew: true,
      rating: 4.9,
      reviews: 143
    },
    {
      id: 6,
      name: "Children's Activity Pack",
      nameUz: "Bolalar faoliyat paketi",
      nameRu: "Пакет детских развлечений",
      price: 24.99,
      originalPrice: 34.99,
      image: "white-velour-bathrobe-grey-piping.jpg",
      badge: "Educational",
      isNew: false,
      rating: 4.8,
      reviews: 176
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
              titleKey="childrens.amenities.title"
              descriptionKey="childrens.amenities.description"
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