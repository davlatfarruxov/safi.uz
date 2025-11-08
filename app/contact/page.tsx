import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section-fixed"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header showMainNavigation={false} />
      <ContactSection />
      <Footer />
    </div>
  )
}