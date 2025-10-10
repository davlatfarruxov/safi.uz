"use client"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import image1 from "../public/green-pump-dispenser-bottle-hair-body-wash.jpg"
import image2 from "../public/green-pump-dispenser-bottle-body-wash.jpg"
import image3 from "../public/green-pump-dispenser-bottle-body-lotion.jpg"

export function GenevaDispensersSection() {
  const { t } = useLanguage()

  const genevaProducts = [
    {
      id: "geneva-hair-body-wash",
      name: "Geneva Green Hair & Body Wash, 370ml Refillable Pump Dispenser (Case of 18)",
      price: 61.65,
      originalPrice: 73.98,
      image: image2,
    },
    {
      id: "geneva-body-wash",
      name: "Geneva Green Body Wash, 370ml Refillable Pump Dispenser (Case of 18)",
      price: 63.16,
      originalPrice: 75.79,
      image: image3,
    },
    {
      id: "geneva-body-lotion",
      name: "Geneva Green Body Lotion, 370ml Refillable Pump Dispenser (Case of 18)",
      price: 75.20,
      originalPrice: 90.24,
      image: image1,
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("geneva.green.dispensers")}
          </h2>
          <Button variant="outline" size="sm" className="hidden md:flex">
            {t("view.all")}
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left side - Large product image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={image1}
              alt="Geneva Green Dispenser"
              fill
              className="object-cover brightness-50"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {t("premium.eco.friendly")}
                </h3>
                <p className="text-lg mb-6">
                  {t("sustainable.dispensing")}
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Product cards */}
          <div className="space-y-4 md:space-y-6">
            {genevaProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden relative">
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
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)} Inc. VAT
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" className="bg-[#084b25] hover:bg-[#6A5A7E] text-white text-xs">
                        {t("add.to.basket")}
                      </Button>
                      {/* <Button variant="ghost" size="sm" className="text-xs text-gray-600">
                        {t("add.to.compare")}
                      </Button> */}
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
        </div>
      </div>
    </section>
  )
}