"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { useFeaturedProducts } from "@/hooks/useProducts"
import Image from "next/image"
import Link from "next/link"
import toast from "react-hot-toast"

export function ProductsWeLoveSection() {
  const { t, language } = useLanguage()
  const { addToCart } = useCart()
  const { products, loading } = useFeaturedProducts(3)

  // Rasm URL ni to'g'rilash
  const getImageUrl = (url?: string) => {
    if (!url) return "/placeholder-product.jpg"
    if (url.startsWith('http')) return url
    if (url.startsWith('/uploads')) {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000'
      return `${API_BASE}${url}`
    }
    return url
  }

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
            {loading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 animate-pulse">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-lg"></div>
                    <div className="flex-1 space-y-2">
                      <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                      <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                      <div className="bg-gray-200 h-8 rounded w-1/3"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : products.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Mahsulotlar topilmadi
              </div>
            ) : (
              products.map((product) => {
                const productName = product.name[language as keyof typeof product.name] || product.name.uz
                const imageUrl = getImageUrl(product.images?.[0]?.url)

                return (
                  <Link 
                    key={product._id} 
                    href={`/product/${product.slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow block"
                  >
                    <div className="flex gap-4">
                      <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden relative">
                        {product.isNewProduct && (
                          <Badge className="absolute top-1 left-1 z-10 text-xs bg-red-500 text-white">
                            NEW
                          </Badge>
                        )}
                        <img
                          src={imageUrl}
                          alt={productName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-medium text-gray-900 mb-3 line-clamp-2">
                          {productName}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Button 
                            size="sm" 
                            onClick={(e) => {
                              e.preventDefault()
                              addToCart(product, 1)
                              toast.success(`${productName} ${t("toast.added.to.cart")}`)
                            }}
                            className="bg-[#084b25] hover:bg-[#06391d] text-white text-xs"
                          >
                            {t("add.to.basket")}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })
            )}
            
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