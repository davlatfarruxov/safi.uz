"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-hotel-lobby-interior-with-modern-furniture-.jpg"
          alt="Premium hotel interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[90vh] items-center px-4 lg:px-8">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-balance font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="text-pretty text-xl text-white/90 md:text-2xl">{t.hero.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/products">{t.hero.viewCatalog}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <Link href="#contact">{t.hero.getOffer}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
