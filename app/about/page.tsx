"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Users, Award, TrendingUp, Package } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold text-foreground lg:text-5xl">{t.aboutPage.title}</h1>
            <p className="text-pretty text-lg text-muted-foreground">{t.aboutPage.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-primary/5 p-8 lg:p-12">
              <h2 className="mb-4 text-3xl font-bold text-foreground">{t.aboutPage.mission.title}</h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {t.aboutPage.mission.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">9+</div>
              <div className="text-primary-foreground/80">{t.aboutPage.stats.experience}</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">5000+</div>
              <div className="text-primary-foreground/80">{t.aboutPage.stats.products}</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">200+</div>
              <div className="text-primary-foreground/80">{t.aboutPage.stats.clients}</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">15+</div>
              <div className="text-primary-foreground/80">{t.aboutPage.stats.cities}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">{t.aboutPage.values.title}</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <Award className="mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-2 text-xl font-semibold text-foreground">{t.aboutPage.values.quality.title}</h3>
              <p className="text-pretty text-muted-foreground">{t.aboutPage.values.quality.description}</p>
            </Card>
            <Card className="p-6">
              <CheckCircle2 className="mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-2 text-xl font-semibold text-foreground">{t.aboutPage.values.reliability.title}</h3>
              <p className="text-pretty text-muted-foreground">{t.aboutPage.values.reliability.description}</p>
            </Card>
            <Card className="p-6">
              <Users className="mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-2 text-xl font-semibold text-foreground">{t.aboutPage.values.partnership.title}</h3>
              <p className="text-pretty text-muted-foreground">{t.aboutPage.values.partnership.description}</p>
            </Card>
            <Card className="p-6">
              <TrendingUp className="mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-2 text-xl font-semibold text-foreground">{t.aboutPage.values.innovation.title}</h3>
              <p className="text-pretty text-muted-foreground">{t.aboutPage.values.innovation.description}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">{t.aboutPage.why.title}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Package className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{t.aboutPage.why.reason1.title}</h3>
                <p className="text-pretty text-muted-foreground">{t.aboutPage.why.reason1.description}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{t.aboutPage.why.reason2.title}</h3>
                <p className="text-pretty text-muted-foreground">{t.aboutPage.why.reason2.description}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{t.aboutPage.why.reason3.title}</h3>
                <p className="text-pretty text-muted-foreground">{t.aboutPage.why.reason3.description}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{t.aboutPage.why.reason4.title}</h3>
                <p className="text-pretty text-muted-foreground">{t.aboutPage.why.reason4.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-8 text-center text-primary-foreground lg:p-12">
            <h2 className="mb-4 text-balance text-3xl font-bold">{t.cta.title}</h2>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="mt-4">
                {t.nav.contact}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
