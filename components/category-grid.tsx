"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function CategoryGrid() {
  const { t } = useLanguage()

  const categories = [
    {
      title: t("shop.bedroom"),
      image: "/luxury-hotel-bedroom-with-white-linens.jpg",
      href: "#",
    },
    {
      title: t("shop.bathroom"),
      image: "/luxury-hotel-bathroom-with-towels.jpg",
      href: "#",
    },
    {
      title: t("shop.toiletries"),
      image: "/luxury-hotel-toiletries-and-amenities.jpg",
      href: "#",
    },
    {
      title: t("shop.guest.amenities"),
      image: "/hotel-guest-amenities-display.jpg",
      href: "#",
    },
  ]

  return (
    <section className="py-6 md:py-8 lg:py-10 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {categories.map((category) => (
            <div key={category.title} className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-muted">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">{category.title}</h3>
                <Button variant="secondary" size="sm" className="md:size-lg text-xs md:text-sm">
                  {t("explore.collection")}
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
