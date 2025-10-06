"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export function CTABanner() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <h2 className="mb-8 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">{t.cta.title}</h2>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          {t.cta.button}
        </Button>
      </div>
    </section>
  )
}
