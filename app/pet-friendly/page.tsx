import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SidebarFilters } from "@/components/sidebar-filters"
import { ProductCard } from "@/components/product-card"
import { PageHeader } from "@/components/page-header"

export default function PetFriendlyPage() {
  const products = [
    {
      id: 1,
      name: "Pet Welcome Kit - Complete Set",
      nameUz: "Uy hayvonlari xush kelibsiz to'plami - To'liq to'plam",
      nameRu: "Приветственный набор для питомцев - Полный комплект",
      price: 42.99,
      originalPrice: 59.99,
      image: "luxury-hotel-bathroom-with-towels.jpg",
      badge: "Pet-Safe",
      isNew: true,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Dog Bed & Blanket Set",
      nameUz: "It to'shagi va adyol to'plami",
      nameRu: "Набор лежанки и одеяла для собак",
      price: 67.99,
      originalPrice: 89.99,
      image: "luxury-hotel-bedding-white-linens.jpg",
      badge: "Comfort",
      isNew: false,
      rating: 4.9,
      reviews: 156
    },
    {
      id: 3,
      name: "Pet Food & Water Bowls",
      nameUz: "Uy hayvonlari ovqat va suv idishlari",
      nameRu: "Миски для корма и воды для питомцев",
      price: 24.99,
      originalPrice: 34.99,
      image: "luxury-hotel-bedroom-with-white-linens.jpg",
      badge: "Stainless Steel",
      isNew: true,
      rating: 4.7,
      reviews: 98
    },
    {
      id: 4,
      name: "Pet Grooming Kit",
      nameUz: "Uy hayvonlari parvarishi to'plami",
      nameRu: "Набор для ухода за питомцами",
      price: 35.99,
      originalPrice: 49.99,
      image: "luxury-hotel-room-accessories.jpg",
      badge: "Professional",
      isNew: false,
      rating: 4.6,
      reviews: 87
    },
    {
      id: 5,
      name: "Pet Waste Disposal Kit",
      nameUz: "Uy hayvonlari chiqindilari utilizatsiya to'plami",
      nameRu: "Набор для утилизации отходов питомцев",
      price: 18.99,
      originalPrice: 26.99,
      image: "luxury-hotel-toiletries-and-amenities.jpg",
      badge: "Eco-Friendly",
      isNew: true,
      rating: 4.5,
      reviews: 134
    },
    {
      id: 6,
      name: "Pet Toy Collection",
      nameUz: "Uy hayvonlari o'yinchoqlari kolleksiyasi",
      nameRu: "Коллекция игрушек для питомцев",
      price: 29.99,
      originalPrice: 39.99,
      image: "luxury-hotel-bedroom-with-white-linens.jpg",
      badge: "Interactive",
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
              titleKey="pet.friendly.title"
              descriptionKey="pet.friendly.description"
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