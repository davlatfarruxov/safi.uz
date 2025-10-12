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
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Large product image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={image1}
              alt="Geneva Green Dispenser"
              fill
              className="object-cover brightness-50"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  {t("premium.eco.friendly")}
                </h3>
                <p className="text-lg md:text-xl mb-6">
                  {t("sustainable.dispensing")}
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Products with Header */}
          <div className="flex flex-col">
            {/* Header above products */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {t("geneva.green.dispensers")}
              </h2>
              <Button variant="outline" size="sm" className="text-xs">
                {t("view.all")}
              </Button>
            </div>
            
            {/* 3 Products Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 flex-1">
              {genevaProducts.map((product, index) => (
                <div key={product.id} className="bg-white rounded-lg p-2 hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="flex flex-col items-center text-center flex-1">
                    {/* Product Image - Large and Tall */}
                    <div className="w-28 h-70 md:w-42 md:h-90 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden relative mb-2">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 112px, 128px"
                      />
                    </div>
                    
                    {/* Product Name - Compact */}
                    <h3 className="text-xs font-medium text-gray-900 mb-1 leading-tight line-clamp-2 flex-1">
                      {product.name}
                    </h3>
                    
                    {/* Price - Compact */}
                    <div className="mb-2">
                      <div className="text-sm font-bold text-gray-900">
                        £{product.price.toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-500 line-through">
                        £{product.originalPrice.toFixed(2)} Inc. VAT
                      </div>
                    </div>
                    
                    {/* Buttons - Compact */}
                    <div className="flex flex-col gap-1 w-full mt-auto">
                      <Button className="bg-[#6B46C1] hover:bg-[#553C9A] text-white text-xs py-1.5 w-full">
                        <span className="mr-1">🛒</span>
                        {t("add.to.basket")}
                      </Button>
                      <div className="flex items-center justify-center gap-1 text-gray-400">
                        <input type="checkbox" className="w-3 h-3" />
                        <span className="text-xs">{t("add.to.compare")}</span>
                        <span className="text-sm">♡</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}