"use client"

import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function CustomerReviews() {
  const { t } = useLanguage()

  const rating = 4.8
  const totalReviews = 169
  const maxStars = 5

  return (
    <section className="py-4 md:py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <p className="text-sm md:text-base text-gray-700">
            {t("customers.say")} <span className="font-semibold">{t("excellent")}</span>
          </p>
          
          <div className="flex items-center gap-1">
            {[...Array(maxStars)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 md:w-5 md:h-5 ${
                  index < Math.floor(rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : index < rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          
          <p className="text-xs md:text-sm text-gray-600">
            <span className="font-semibold">{rating}</span> {t("out.of")} <span className="font-semibold">{maxStars}</span> {t("based.on")}{" "}
            <span className="font-semibold">{totalReviews}</span> {t("reviews")}
          </p>
        </div>
      </div>
    </section>
  )
}