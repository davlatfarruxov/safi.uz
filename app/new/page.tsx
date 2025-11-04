"use client"

import { useEffect, useState } from "react"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/lib/language-context"
import { useProducts } from "@/hooks/useProducts"
import { Package } from "lucide-react"
import Image from "next/image"
import type { Product } from "@/lib/api"

export default function NewPage() {
  const { t } = useLanguage()
  const { products, loading } = useProducts()
  const [newProducts, setNewProducts] = useState<Product[]>([])

  useEffect(() => {
    if (!loading && products.length > 0) {
      // Faqat yangi va aktiv mahsulotlarni filtrlash
      const filtered = products.filter((prod: Product) => 
        prod.isNewProduct === true && prod.isActive === true
      )
      setNewProducts(filtered)
    }
  }, [products, loading])

  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header showMainNavigation={true} />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/safi-banner1.JPG"
            alt={t("nav.new") || "Yangi mahsulotlar"}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {t("nav.new") || "Yangi mahsulotlar"}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Eng so'nggi va yangi mahsulotlarimiz bilan tanishing
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                  <div className="bg-gray-200 h-48 rounded mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : newProducts.length === 0 ? (
            <div className="text-center py-16">
              <Package size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Yangi mahsulotlar topilmadi
              </h3>
              <p className="text-gray-600">
                Hozircha yangi mahsulotlar yo'q
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-6">
              {newProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}