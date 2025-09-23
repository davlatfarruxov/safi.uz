"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"
import Link from "next/link"
import LanguageSwitcher from "@/components/language-switcher"

const StarIcon = ({ filled }: { filled: boolean }) => (
  <span className={`inline-block text-lg ${filled ? "text-accent" : "text-muted-foreground/40"}`}>
    {filled ? "★" : "☆"}
  </span>
)

const CheckIcon = () => <span className="text-primary mr-3">✓</span>
const TruckIcon = () => <span className="text-primary mr-2">🚚</span>
const ShieldIcon = () => <span className="text-primary mr-2">🛡️</span>
const ClockIcon = () => <span className="text-primary mr-2">🕐</span>
const GlobeIcon = () => <span className="text-primary mr-2">🌍</span>
const AwardIcon = () => <span className="text-primary mr-1">🏆</span>
const LoginIcon = () => <span className="mr-2">👤</span>
const UserPlusIcon = () => <span className="mr-2">➕</span>

export default function LandingPage() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const router = useRouter()
  const { t } = useLanguage()

  const starRatings = [
    {
      stars: 1,
      title: t("homepage.budget"),
      description: "Essential supplies for budget-conscious accommodations",
      features: ["Basic linens", "Standard amenities", "Cost-effective solutions"],
      color: "bg-muted hover:bg-muted/80",
    },
    {
      stars: 2,
      title: t("homepage.economy"),
      description: "Quality supplies for comfortable stays",
      features: ["Comfortable bedding", "Essential toiletries", "Reliable equipment"],
      color: "bg-secondary/30 hover:bg-secondary/50",
    },
    {
      stars: 3,
      title: t("homepage.midRange"),
      description: "Enhanced supplies for quality service",
      features: ["Premium linens", "Quality amenities", "Professional equipment"],
      color: "bg-accent/20 hover:bg-accent/30",
    },
    {
      stars: 4,
      title: t("homepage.upscale"),
      description: "Luxury supplies for exceptional experiences",
      features: ["High-thread count linens", "Premium toiletries", "Advanced equipment"],
      color: "bg-accent/30 hover:bg-accent/40",
    },
    {
      stars: 5,
      title: t("homepage.luxury"),
      description: "Ultra-premium supplies for world-class hospitality",
      features: ["Egyptian cotton linens", "Luxury spa amenities", "State-of-the-art equipment"],
      color: "bg-gradient-to-br from-accent/40 to-accent/60 hover:from-accent/50 hover:to-accent/70",
    },
  ]

  const handleRatingSelect = (stars: number) => {
    setSelectedRating(stars)
    router.push(`/catalog?stars=${stars}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/safi-logo.png"
                alt="Safí Hotel Collection"
                width={180}
                height={90}
                className="h-18 w-auto"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/catalog">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  {t("nav.products")}
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  {t("nav.services")}
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  {t("nav.about")}
                </Button>
              </Link>
              <Link href="/partners">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  {t("nav.partners")}
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  {t("nav.blog")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  {t("nav.contact")}
                </Button>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <Badge
                variant="secondary"
                className="hidden md:flex bg-accent/20 text-accent-foreground border-accent/30"
              >
                <AwardIcon />
                Industry Leader
              </Badge>
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push("/login")}
                  className="text-foreground hover:text-primary"
                >
                  <LoginIcon />
                  {t("nav.signIn")}
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => router.push("/register")}>
                  <UserPlusIcon />
                  {t("common.getStarted")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-24 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="text-sm font-medium text-accent-foreground">{t("homepage.trustedBy")}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 leading-tight text-balance">
              {t("hero.title")}
              <span className="block text-primary">{t("hero.subtitle")}</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              {t("hero.description")}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
            <div className="flex items-center space-x-3 bg-card/50 px-6 py-3 rounded-full border border-border/50">
              <TruckIcon />
              <span className="text-sm font-medium text-foreground">{t("features.delivery.title")}</span>
            </div>
            <div className="flex items-center space-x-3 bg-card/50 px-6 py-3 rounded-full border border-border/50">
              <ShieldIcon />
              <span className="text-sm font-medium text-foreground">{t("features.quality.title")}</span>
            </div>
            <div className="flex items-center space-x-3 bg-card/50 px-6 py-3 rounded-full border border-border/50">
              <ClockIcon />
              <span className="text-sm font-medium text-foreground">{t("features.support.title")}</span>
            </div>
            <div className="flex items-center space-x-3 bg-card/50 px-6 py-3 rounded-full border border-border/50">
              <GlobeIcon />
              <span className="text-sm font-medium text-foreground">Global Reach</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/catalog">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium"
              >
                {t("hero.cta")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:bg-primary/5 px-8 py-4 text-lg font-medium bg-transparent"
              >
                {t("hero.contact")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-foreground mb-6">{t("homepage.selectRating")}</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">{t("homepage.whyChooseUs")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {starRatings.map((rating) => (
              <Card
                key={rating.stars}
                className={`cursor-pointer transition-all duration-500 hover:shadow-xl border-2 group ${
                  selectedRating === rating.stars
                    ? "border-primary shadow-xl scale-105 bg-primary/5"
                    : "border-border/50 hover:border-primary/30"
                } ${rating.color} backdrop-blur-sm`}
                onClick={() => handleRatingSelect(rating.stars)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < rating.stars} />
                    ))}
                  </div>
                  <CardTitle className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {rating.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground text-pretty">
                    {rating.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {rating.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-foreground">
                        <CheckIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full transition-all ${
                      selectedRating === rating.stars
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-transparent border border-primary/20 hover:bg-primary hover:text-primary-foreground text-primary"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRatingSelect(rating.stars)
                    }}
                  >
                    Explore Collection
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedRating && (
            <div className="text-center mt-12">
              <Card className="max-w-lg mx-auto bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="pt-8 pb-8">
                  <p className="text-muted-foreground mb-6 text-pretty">
                    Continue as a guest to explore our collections, or create an account for personalized pricing, order
                    history, and exclusive benefits.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => router.push(`/catalog?stars=${selectedRating}`)}
                    >
                      Continue as Guest
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-primary/20 hover:bg-primary/5 bg-transparent"
                      onClick={() => router.push("/login")}
                    >
                      Create Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Trusted by Industry Leaders</h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            From boutique properties to international chains, we're the preferred partner for hospitality excellence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-16 bg-card/80 rounded-xl border border-border/30 flex items-center justify-center backdrop-blur-sm hover:bg-card transition-colors"
              >
                <span className="text-sm font-medium text-muted-foreground">Premium Hotel {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <Image
                  src="/safi-logo-white.png"
                  alt="Safí Hotel Collection"
                  width={300}
                  height={150}
                  className="h-20 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-primary-foreground/80 text-pretty max-w-md leading-relaxed">
                {t("about.description")}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-primary-foreground">{t("nav.products")}</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li>
                  <Link href="/catalog" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    Bedroom Supplies
                  </Link>
                </li>
                <li>
                  <Link href="/catalog" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    Bathroom Amenities
                  </Link>
                </li>
                <li>
                  <Link href="/catalog" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    Kitchen Equipment
                  </Link>
                </li>
                <li>
                  <Link href="/catalog" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    General Supplies
                  </Link>
                </li>
                <li>
                  <Link href="/catalog" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-primary-foreground">{t("nav.services")}</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li>
                  <Link href="/services" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    Design Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    Bulk Orders
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    Express Delivery
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    Quality Assurance
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    24/7 Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-primary-foreground">Company</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li>
                  <Link href="/about" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    {t("nav.partners")}
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    {t("nav.blog")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary-foreground cursor-pointer transition-colors">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
              © 2025 Safí Hotel Collection. All rights reserved. Premium B2B Hotel Supplies.
            </p>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <span className="hover:text-primary-foreground cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-primary-foreground cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-primary-foreground cursor-pointer transition-colors">Certifications</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
