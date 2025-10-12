import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { MainContent } from "@/components/main-content"
import { CustomerReviews } from "@/components/customer-reviews"
import { CategoryGrid } from "@/components/category-grid"

import { ProductShowcase } from "@/components/product-showcase"
import { GenevaDispensersSection } from "@/components/geneva-dispensers-section"
import { ProductsWeLoveSection } from "@/components/products-we-love-section"
import { PopularBrands } from "@/components/popular-brands"
import { WelcomeSection } from "@/components/welcome-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header showMainNavigation={true} />
      <main>

        <MainContent />
        <CategoryGrid />
        <CustomerReviews />
        {/* <CoffeeStationSection /> */}
        <ProductShowcase titleKey="bestsellers" category="bestsellers" />
        <GenevaDispensersSection />
        <PopularBrands />
        <WelcomeSection />
        <ProductsWeLoveSection />

      </main>
      <Footer />
    </div>
  )
}
