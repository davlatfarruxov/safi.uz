import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { ProductNavbar } from "@/components/product-navbar"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"

export default function BedroomPage() {
  const bedroomProducts = [
    {
      id: 1,
      name: "Luxury Hotel Bedding Set",
      price: 89.99,
      image: "/luxury-hotel-bedding-white-linens.jpg",
      category: "Bedding",
    },
    {
      id: 2,
      name: "White Microfibre Bathrobe",
      price: 24.99,
      image: "/white-microfibre-bathrobe.jpg",
      category: "Bathrobes",
    },
    {
      id: 3,
      name: "Hotel Bedroom Furniture",
      price: 299.99,
      image: "/luxury-hotel-bedroom-with-white-linens.jpg",
      category: "Furniture",
    },
    {
      id: 4,
      name: "Wooden Baby Cot",
      price: 149.99,
      image: "/wooden-baby-cot-hotel.jpg",
      category: "Children",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />
      <ProductNavbar category="Bedroom" />
      <main className="container mx-auto px-4 py-6 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Bedroom Products</h1>
        <ProductGrid products={bedroomProducts} />
      </main>
      <Footer />
    </div>
  )
}
