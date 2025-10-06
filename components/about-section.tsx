"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export function AboutSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="/professional-business-team-in-modern-office-discus.jpg"
              alt="Safi Hotel Collection team"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">{t.about.title}</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{t.about.description}</p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              {t.nav.about}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
