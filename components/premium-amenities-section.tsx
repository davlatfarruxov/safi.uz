"use client"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function PremiumAmenitiesSection() {
  const { t } = useLanguage()

  const premiumProducts = [
    {
      id: "luxury-towel-set",
      name: "Premium Hotel Towel Set - Egyptian Cotton (Case of 24)",
      nameUz: "Premium mehmonxona sochiqlar to'plami - Misr paxtasi (24 dona)",
      nameRu: "Премиум набор полотенец для отелей - Египетский хлопок (24 шт)",
      price: 89.99,
      originalPrice: 119.99,
      image: "premium1.png",
      isNew: true,
      rating: 4.9,
      reviews: 156
    },
    {
      id: "luxury-bathrobes",
      name: "Luxury Spa Bathrobes - Premium Cotton (Case of 12)",
      nameUz: "Hashamatli spa xalatlari - Premium paxta (12 dona)",
      nameRu: "Роскошные спа халаты - Премиум хлопок (12 шт)",
      price: 124.99,
      originalPrice: 159.99,
      image: "premium2.png",
      isNew: false,
      rating: 4.8,
      reviews: 203
    },
    {
      id: "welcome-amenity-kit",
      name: "Welcome Amenity Kit - Luxury Collection (Case of 50)",
      nameUz: "Xush kelibsiz qulayliklar to'plami - Hashamatli kolleksiya (50 dona)",
      nameRu: "Приветственный набор удобств - Люкс коллекция (50 шт)",
      price: 67.99,
      originalPrice: 89.99,
      image: "premium3.png",
      isNew: true,
      rating: 4.7,
      reviews: 134
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Products with Header */}
          <div className="flex flex-col">
            {/* Header above products */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {t("premium.amenities.title") || "Premium Amenities"}
              </h2>
              <Button variant="outline" size="sm" className="text-xs">
                {t("view.all")}
              </Button>
            </div>
            
            {/* 3 Products Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 flex-1">
              {premiumProducts.map((product, index) => (
                <div key={product.id} className="bg-white rounded-lg p-2 hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="flex flex-col items-center text-center flex-1">
                    {/* Product Image - Large and Tall */}
                    <div className="w-28 h-70 md:w-42 md:h-90 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden relative mb-2">
                      <Image
                        src={product.image || "/api/placeholder/300/400"}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 112px, 128px"
                      />
                      {product.isNew && (
                        <span className="absolute top-1 left-1 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          NEW
                        </span>
                      )}
                    </div>
                    
                    {/* Product Name - Compact */}
                    <h3 className="text-xs font-medium text-gray-900 mb-1 leading-tight line-clamp-2 flex-1">
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    {product.rating && (
                      <div className="flex items-center gap-1 mb-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-xs ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                      </div>
                    )}
                    
                    {/* Price - Compact */}
                    <div className="mb-2">
                      <div className="text-sm font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </div>
                      <div className="text-xs text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)} Inc. VAT
                      </div>
                    </div>
                    
                    {/* Buttons - Compact */}
                    <div className="flex flex-col gap-1 w-full mt-auto">
                      <Button className="bg-[#084b25] hover:bg-[#06391d] text-white text-xs py-1.5 w-full">
                        <span className="mr-1">🛒</span>
                        {t("add.to.basket")}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Large product image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="premium4.png"
              alt="Premium Hotel Amenities"
              fill
              className="object-cover brightness-50"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  {t("premium.amenities.hero.title") || "Luxury Hotel Experience"}
                </h3>
                <p className="text-lg md:text-xl mb-6">
                  {t("premium.amenities.hero.subtitle") || "Exceptional amenities for discerning guests"}
                </p>
                {/* <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
                >
                  {t("discover.collection") || "Discover Collection"}
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}