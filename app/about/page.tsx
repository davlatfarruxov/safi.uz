import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header showMainNavigation={false} />
      <AboutSection />
      <Footer />
    </div>
  )
}