import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SidebarFilters } from "@/components/sidebar-filters"
import { ProductCard } from "@/components/product-card"
import { PageHeader } from "@/components/page-header"

export default function EcoFriendlyPage() {
  const products = [
    {
      id: 1,
      name: "Bamboo Towel Collection",
      nameUz: "Bambuk sochiqlar kolleksiyasi",
      nameRu: "Коллекция бамбуковых полотенец",
      price: 89.99,
      originalPrice: 119.99,
      image: "green-pump-dispenser-bottle-body-lotion.jpg",
      badge: "100% Bamboo",
      isNew: true,
      rating: 4.9,
      reviews: 187
    },
    {
      id: 2,
      name: "Organic Cotton Bed Sheets",
      nameUz: "Organik paxta choyshablar",
      nameRu: "Простыни из органического хлопка",
      price: 156.99,
      originalPrice: 199.99,
      image: "green-pump-dispenser-bottle-body-wash.jpg",
      badge: "Organic",
      isNew: false,
      rating: 4.8,
      reviews: 143
    },
    {
      id: 3,
      name: "Recycled Amenities Kit",
      nameUz: "Qayta ishlangan jihozlar to'plami",
      nameRu: "Набор из переработанных материалов",
      price: 67.99,
      originalPrice: 89.99,
      image: "green-pump-dispenser-bottle-hair-body-wash.jpg",
      badge: "Recycled",
      isNew: true,
      rating: 4.7,
      reviews: 134
    },
    {
      id: 4,
      name: "Biodegradable Toiletries Set",
      nameUz: "Biologik parchalanuvchi gigiyena vositalari to'plami",
      nameRu: "Набор биоразлагаемых туалетных принадлежностей",
      price: 45.99,
      originalPrice: 64.99,
      image: "premium1.png",
      badge: "Biodegradable",
      isNew: false,
      rating: 4.6,
      reviews: 98
    },
    {
      id: 5,
      name: "Solar-Powered Amenities",
      nameUz: "Quyosh energiyasi bilan ishlaydigan jihozlar",
      nameRu: "Принадлежности на солнечной энергии",
      price: 124.99,
      originalPrice: 159.99,
      image: "premium2.png",
      badge: "Solar Powered",
      isNew: true,
      rating: 4.8,
      reviews: 176
    },
    {
      id: 6,
      name: "Sustainable Packaging Collection",
      nameUz: "Barqaror qadoqlash kolleksiyasi",
      nameRu: "Коллекция устойчивой упаковки",
      price: 34.99,
      originalPrice: 49.99,
      image: "premium3.png",
      badge: "Zero Waste",
      isNew: false,
      rating: 4.9,
      reviews: 167
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
              titleKey="eco.friendly.products.title"
              descriptionKey="eco.friendly.products.description"
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