import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SidebarFilters } from "@/components/sidebar-filters"
import { ProductCard } from "@/components/product-card"
import { PageHeader } from "@/components/page-header"

export default function HotelGuestAmenitiesPage() {
  const products = [
    {
      id: 1,
      name: "Welcome Kit - Premium Collection",
      nameUz: "Xush kelibsiz to'plami - Premium kolleksiya",
      nameRu: "Приветственный набор - Премиум коллекция",
      price: 89.99,
      originalPrice: 119.99,
      image: "white-luxury-bath-towels.jpg",
      badge: "Premium",
      isNew: true,
      rating: 4.9,
      reviews: 187
    },
    {
      id: 2,
      name: "Mini Bar Essentials Kit",
      nameUz: "Mini bar zaruriyatlari to'plami",
      nameRu: "Набор принадлежностей мини-бара",
      price: 124.99,
      originalPrice: 159.99,
      image: "white-microfibre-bathrobe.jpg",
      badge: "Complete Set",
      isNew: false,
      rating: 4.8,
      reviews: 143
    },
    {
      id: 3,
      name: "Coffee Station Deluxe Set",
      nameUz: "Kofe stantsiyasi deluxe to'plami",
      nameRu: "Делюкс набор кофейной станции",
      price: 199.99,
      originalPrice: 249.99,
      image: "white-striped-velour-bathrobe.jpg",
      badge: "Deluxe",
      isNew: true,
      rating: 4.9,
      reviews: 176
    },
    {
      id: 4,
      name: "Guest Room Comfort Package",
      nameUz: "Mehmon xonasi qulaylik paketi",
      nameRu: "Пакет комфорта гостевой комнаты",
      price: 67.99,
      originalPrice: 89.99,
      image: "white-terry-towelling-bathrobe.jpg",
      badge: "Comfort",
      isNew: false,
      rating: 4.7,
      reviews: 134
    },
    {
      id: 5,
      name: "Business Traveler Amenities",
      nameUz: "Biznes sayohatchi qulayliklari",
      nameRu: "Удобства для бизнес-путешественников",
      price: 45.99,
      originalPrice: 64.99,
      image: "white-velour-bathrobe.jpg",
      badge: "Business",
      isNew: true,
      rating: 4.6,
      reviews: 98
    },
    {
      id: 6,
      name: "Spa & Wellness Collection",
      nameUz: "Spa va sog'liqni saqlash kolleksiyasi",
      nameRu: "Коллекция спа и велнеса",
      price: 156.99,
      originalPrice: 199.99,
      image: "white-velour-bathrobe-grey-piping.jpg",
      badge: "Wellness",
      isNew: false,
      rating: 4.8,
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
              titleKey="hotel.guest.amenities.title"
              descriptionKey="hotel.guest.amenities.description"
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