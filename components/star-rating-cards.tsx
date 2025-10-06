"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useStarRating } from "@/contexts/star-rating-context"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export function StarRatingCards() {
  const { setStarRating } = useStarRating()
  const router = useRouter()
  const { language } = useLanguage()
  const t = translations[language]

  const starCategories = [
    {
      stars: 1,
      title: t.starRating.budget.title,
      description: t.starRating.budget.description,
      features: t.starRating.budget.features,
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
    },
    {
      stars: 2,
      title: t.starRating.economy.title,
      description: t.starRating.economy.description,
      features: t.starRating.economy.features,
      bgColor: "bg-gray-100",
      borderColor: "border-gray-300",
    },
    {
      stars: 3,
      title: t.starRating.midRange.title,
      description: t.starRating.midRange.description,
      features: t.starRating.midRange.features,
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      stars: 4,
      title: t.starRating.upscale.title,
      description: t.starRating.upscale.description,
      features: t.starRating.upscale.features,
      bgColor: "bg-amber-100",
      borderColor: "border-amber-300",
    },
    {
      stars: 5,
      title: t.starRating.luxury.title,
      description: t.starRating.luxury.description,
      features: t.starRating.luxury.features,
      bgColor: "bg-amber-200",
      borderColor: "border-amber-400",
    },
  ]

  const handleSelectRating = (stars: number) => {
    setStarRating(stars)
    router.push("/products")
  }

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground lg:text-5xl">{t.starRating.title}</h2>
          <p className="text-pretty text-lg text-muted-foreground">{t.starRating.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {starCategories.map((category) => (
            <div
              key={category.stars}
              className={`flex flex-col rounded-lg border-2 ${category.borderColor} ${category.bgColor} p-6 transition-all hover:scale-105 hover:shadow-lg`}
            >
              {/* Stars */}
              <div className="mb-4 flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= category.stars ? "fill-accent text-accent" : "fill-gray-300 text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-center font-serif text-xl font-bold text-foreground">{category.title}</h3>

              {/* Description */}
              <p className="mb-6 text-pretty text-center text-sm text-muted-foreground">{category.description}</p>

              {/* Features */}
              <ul className="mb-6 flex-1 space-y-2">
                {category.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-0.5 text-accent">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                onClick={() => handleSelectRating(category.stars)}
                variant="outline"
                className="w-full border-foreground/20 hover:bg-primary hover:text-primary-foreground"
              >
                {t.starRating.exploreCollection}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
