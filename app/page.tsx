import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { MainContent } from "@/components/main-content"
import { CustomerReviews } from "@/components/customer-reviews"
import { CategoryGrid } from "@/components/category-grid"
import { CoffeeStationSection } from "@/components/coffee-station-section"
import { ProductShowcase } from "@/components/product-showcase"
import { GenevaDispensersSection } from "@/components/geneva-dispensers-section"
import { ProductsWeLoveSection } from "@/components/products-we-love-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header />
      <main>
        <Features />
        <MainContent />
        <CategoryGrid />
        <CustomerReviews />
        {/* <CoffeeStationSection /> */}
        <ProductShowcase titleKey="discover.bathrobes" category="bathrobes" />
        <GenevaDispensersSection />
        <ProductsWeLoveSection />
      </main>
      <Footer />
    </div>
  )
}
