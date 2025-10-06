"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StarRatingCards } from "@/components/star-rating-cards"
import { USPSection } from "@/components/usp-section"
import { ProductPreview } from "@/components/product-preview"
import { AboutSection } from "@/components/about-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StarRatingCards />
        <USPSection />
        <ProductPreview />
        <AboutSection />
        <TestimonialSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
