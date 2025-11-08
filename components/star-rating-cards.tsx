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
      stars: 0,
      title: t("star.rating.xorika.title"),
      description: t("star.rating.xorika.description"),
      features: [
        t("star.rating.xorika.feature1"),
        t("star.rating.xorika.feature2"),
        t("star.rating.xorika.feature3")
      ],
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      accentColor: "text-teal-700",
      isSpecial: true,
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
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      accentColor: "text-blue-700",
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
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      accentColor: "text-purple-700",
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
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      borderColor: "border-amber-300",
      accentColor: "text-amber-800",
    },
  ]

  const handleSelectRating = (category: any) => {
    if (category.isSpecial) {
      // Navigate to xorika page
      router.push(`/xorika`)
    } else {
      // Navigate to products page with star filter
      router.push(`/products?stars=${category.stars}`)
    }
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-[#084b25] lg:text-5xl">
            {t("star.rating.title")}
          </h2>
          <p className="text-pretty text-lg text-gray-700 max-w-2xl mx-auto">
            {t("star.rating.subtitle")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {starCategories.map((category) => (
            <div
              key={category.stars}
              className={`flex flex-col rounded-xl border-2 ${category.borderColor} ${category.bgColor} p-6 transition-all hover:scale-105 hover:shadow-xl hover:border-[#084b25] relative overflow-hidden`}
            >
              {/* Stars or Special Icon */}
              <div className="mb-4 flex justify-center gap-1">
                {category.isSpecial ? (
                  <div className="text-3xl font-bold text-teal-600">🏢</div>
                ) : (
                  [1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 ${
                        star <= category.stars ? "fill-amber-400 text-amber-400 drop-shadow-sm" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))
                )}
              </div>

              {/* Title */}
              <h3 className={`mb-2 text-center font-serif text-xl font-bold ${category.accentColor}`}>{category.title}</h3>

              {/* Description */}
              <p className="mb-6 text-pretty text-center text-sm text-gray-700">{category.description}</p>

              {/* Features */}
              <ul className="mb-6 flex-1 space-y-3">
                {category.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-800">
                    <span className="mt-0.5 text-[#084b25] font-bold text-base">✓</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                onClick={() => handleSelectRating(category)}
                variant="outline"
                className={`w-full border-2 ${category.borderColor} ${category.accentColor} hover:bg-[#084b25] hover:text-white hover:border-[#084b25] transition-all duration-300 font-semibold`}
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