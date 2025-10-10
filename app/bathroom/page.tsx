import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SidebarFilters } from "@/components/sidebar-filters"
import { ProductCard } from "@/components/product-card"

export default function BathroomPage() {
  const products = [
    {
      id: 1,
      name: "Bentley Melville Coat Hangers, Black Wood (Case of 50)",
      price: 96.2,
      originalPrice: 115.44,
      image: "/wooden-hanger-black.jpg",
      badge: "New",
    },
    {
      id: 2,
      name: "Bentley Melville Coat Hangers, Walnut (Case of 50)",
      price: 96.2,
      originalPrice: 115.44,
      image: "/wooden-hanger-dark.jpg",
      badge: "New",
    },
    {
      id: 3,
      name: "Bentley Melville Coat Hangers, Natural Wood (Case of 50)",
      price: 96.2,
      originalPrice: 115.44,
      image: "/wooden-hanger-light.jpg",
      badge: "New",
    },
    {
      id: 4,
      name: "Bentley Melville Security Coat Hangers, Black Wood (Case of 50)",
      price: 107.6,
      originalPrice: 129.12,
      image: "/wooden-hanger-natural.jpg",
      badge: "New",
    },
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  badge={product.badge}
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
