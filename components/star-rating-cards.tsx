"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/lib/language-context"

export function StarRatingCards() {
  const router = useRouter()
  const { t } = useLanguage()

  const starCategories = [
    {
      stars: 1,
      title: t("star.rating.budget.title"),
      description: t("star.rating.budget.description"),
      features: [
        t("star.rating.budget.feature1"),
        t("star.rating.budget.feature2"),
        t("star.rating.budget.feature3")
      ],
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
    },
    {
      stars: 2,
      title: t("star.rating.economy.title"),
      description: t("star.rating.economy.description"),
      features: [
        t("star.rating.economy.feature1"),
        t("star.rating.economy.feature2"),
        t("star.rating.economy.feature3")
      ],
      bgColor: "bg-gray-100",
      borderColor: "border-gray-300",
    },
    {
      stars: 3,
      title: t("star.rating.midrange.title"),
      description: t("star.rating.midrange.description"),
      features: [
        t("star.rating.midrange.feature1"),
        t("star.rating.midrange.feature2"),
        t("star.rating.midrange.feature3")
      ],
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      stars: 4,
      title: t("star.rating.upscale.title"),
      description: t("star.rating.upscale.description"),
      features: [
        t("star.rating.upscale.feature1"),
        t("star.rating.upscale.feature2"),
        t("star.rating.upscale.feature3")
      ],
      bgColor: "bg-amber-100",
      borderColor: "border-amber-300",
    },
    {
      stars: 5,
      title: t("star.rating.luxury.title"),
      description: t("star.rating.luxury.description"),
      features: [
        t("star.rating.luxury.feature1"),
        t("star.rating.luxury.feature2"),
        t("star.rating.luxury.feature3")
      ],
      bgColor: "bg-amber-200",
      borderColor: "border-amber-400",
    },
  ]

  const handleSelectRating = (stars: number) => {
    // Navigate to products page with star filter
    router.push(`/products?stars=${stars}`)
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 lg:text-5xl">
            {t("star.rating.title")}
          </h2>
          <p className="text-pretty text-lg text-gray-600">
            {t("star.rating.subtitle")}
          </p>
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
                      star <= category.stars ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-center font-serif text-xl font-bold text-gray-900">{category.title}</h3>

              {/* Description */}
              <p className="mb-6 text-pretty text-center text-sm text-gray-600">{category.description}</p>

              {/* Features */}
              <ul className="mb-6 flex-1 space-y-2">
                {category.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-900">
                    <span className="mt-0.5 text-[#084b25]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                onClick={() => handleSelectRating(category.stars)}
                variant="outline"
                className="w-full border-gray-300 hover:bg-[#084b25] hover:text-white transition-colors"
              >
                {t("star.rating.explore")}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}