"use client"

import { useFeaturedProducts, useNewProducts } from "@/hooks/useProducts"
import { useLanguage } from "@/lib/language-context"
import { ProductCard } from "./product-card"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface RealProductShowcaseProps {
  type: 'featured' | 'new'
  titleKey: string
  limit?: number
}

export function RealProductShowcase({ type, titleKey, limit = 8 }: RealProductShowcaseProps) {
  const { t, language } = useLanguage()
  
  const { products: featuredProducts, loading: featuredLoading } = useFeaturedProducts(limit)
  const { products: newProducts, loading: newLoading } = useNewProducts(limit)
  
  const products = type === 'featured' ? featuredProducts : newProducts
  const loading = type === 'featured' ? featuredLoading : newLoading

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t(titleKey)}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-4 animate-pulse">
                <div className="bg-gray-200 h-48 rounded mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (!products || products.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t(titleKey)}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {type === 'featured' 
              ? "Eng mashhur va sifatli mahsulotlarimiz" 
              : "Yangi kelgan mahsulotlar bilan tanishing"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden">
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[0].url}
                    alt={product.name[language]}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
                {product.isNewProduct && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                    Yangi
                  </span>
                )}
                {product.isFeatured && (
                  <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 text-xs rounded">
                    ⭐
                  </span>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name[language]}
                </h3>
                
                {product.description && product.description[language] && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description[language]}
                  </p>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {product.comparePrice && product.comparePrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.comparePrice}
                      </span>
                    )}
                  </div>
                  
                  {product.rating && product.rating.count > 0 && (
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600">
                        {product.rating.average.toFixed(1)} ({product.rating.count})
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="mt-3 flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded ${
                    product.stock > 0 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.stock > 0 ? `Stock: ${product.stock}` : 'Tugagan'}
                  </span>
                  
                  <Button size="sm" className="text-xs">
                    Ko'rish
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button size="lg" className="inline-flex items-center gap-2">
              {t("view.all")}
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}