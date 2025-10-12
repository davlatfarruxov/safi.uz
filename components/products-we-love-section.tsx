"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function ProductsWeLoveSection() {
  const { t } = useLanguage()

  const products = [
    {
      id: "bentley-limea-cot",
      name: "Bentley Limea Safe Foldable Wooden Baby Cot, Natural",
      price: 343.40,
      originalPrice: 412.08,
      image: "/wooden-baby-cot-hotel.jpg",
      badge: null,
    },
    {
      id: "corby-hairdryer",
      name: "Corby Milton 2000W Hairdryerr, Black",
      price: 24.50,
      originalPrice: 29.40,
      image: "/corby-hairdryer-black.jpg",
      badge: "New",
    },
    {
      id: "bentley-coffee-tray",
      name: "Bentley Xanthic Coffee & Tea Wooden Welcome Tray, Matt Black",
      price: 69.35,
      originalPrice: 83.22,
      image: "/bentley-coffee-tea-tray.jpg",
      badge: null,
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("products.we.love")}
          </h2>
          <Button variant="outline" size="sm" className="hidden md:flex">
            {t("view.all")}
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left side - Product cards */}
          <div className="space-y-4 md:space-y-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden relative">
                    {product.badge && (
                      <Badge className="absolute top-1 left-1 z-10 text-xs bg-[#7B6B8F] text-white">
                        {product.badge}
                      </Badge>
                    )}
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-gray-900">
                        £{product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        £{product.originalPrice.toFixed(2)} Inc. VAT
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" className="bg-[#7B6B8F] hover:bg-[#6A5A7E] text-white text-xs">
                        {t("add.to.basket")}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs text-gray-600">
                        {t("add.to.compare")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* View all button for mobile */}
            <div className="flex justify-center md:hidden mt-6">
              <Button variant="outline" size="sm">
                {t("view.all")}
              </Button>
            </div>
          </div>

          {/* Right side - Large lifestyle image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="/hotel-room-coffee-station.jpg"
              alt="Hotel room coffee station"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end">
              <div className="p-6 md:p-8 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {t("perfect.guest.experience")}
                </h3>
                <p className="text-sm md:text-base opacity-90">
                  {t("curated.hotel.essentials")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}