"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const categories = [
  {
    categoryId: "bedroom",
    image: "/luxury-hotel-bedroom-with-white-linens-and-pillows.jpg",
  },
  {
    categoryId: "kitchen",
    image: "/professional-hotel-kitchen-equipment-and-utensils.jpg",
  },
  {
    categoryId: "bathroom",
    image: "/luxury-hotel-bathroom-amenities-and-toiletries.jpg",
  },
  {
    categoryId: "general",
    image: "/modern-hotel-room-electronics-and-technology.jpg",
  },
]

export function ProductPreview() {
  const { t } = useLanguage()

  return (
    <section id="products" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">{t.productPreview.title}</h2>
          <p className="text-lg text-muted-foreground">{t.productPreview.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const categoryKey = category.categoryId as "bedroom" | "kitchen" | "hygiene" | "electronics"
            const translatedCategory =
              categoryKey === "general"
                ? t.productPreview.electronics
                : categoryKey === "bathroom"
                  ? t.productPreview.hygiene
                  : t.productPreview[categoryKey]

            return (
              <Card key={index} className="group overflow-hidden transition-shadow hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={translatedCategory.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="text-xl font-semibold text-foreground">{translatedCategory.title}</h3>
                    <p className="text-sm text-muted-foreground">{translatedCategory.description}</p>
                    <Button
                      variant="ghost"
                      className="group/btn p-0 text-accent hover:bg-transparent hover:text-accent/80"
                      asChild
                    >
                      <Link href={`/products?category=${category.categoryId}`}>
                        {t.productPreview.viewButton}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
