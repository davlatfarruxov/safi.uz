import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { ProductNavbar } from "@/components/product-navbar"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"

export default function ToiletriesPage() {
  const toiletriesProducts = [
    {
      id: 1,
      name: "Green Pump Dispenser - Body Wash",
      price: 8.99,
      image: "/green-pump-dispenser-bottle-body-wash.jpg",
      category: "Dispensers",
    },
    {
      id: 2,
      name: "Green Pump Dispenser - Body Lotion",
      price: 8.99,
      image: "/green-pump-dispenser-bottle-body-lotion.jpg",
      category: "Dispensers",
    },
    {
      id: 3,
      name: "Green Pump Dispenser - Hair & Body Wash",
      price: 8.99,
      image: "/green-pump-dispenser-bottle-hair-body-wash.jpg",
      category: "Dispensers",
    },
    {
      id: 4,
      name: "Hotel Guest Amenities Display",
      price: 34.99,
      image: "/hotel-guest-amenities-display.jpg",
      category: "Amenities",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />
      <ProductNavbar category="Toiletries" />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Toiletries</h1>
        <ProductGrid products={toiletriesProducts} />
      </main>
      <Footer />
    </div>
  )
}
