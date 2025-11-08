"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useProducts } from "@/hooks/useProducts"
import { useCategories } from "@/hooks/useCategories"
import { useLanguage } from "@/lib/language-context"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Package } from "lucide-react"
import Image from "next/image"
import type { Category } from "@/lib/api"

export default function CategoryProductsPage({ params }: { params: { slug: string } }) {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category') || params.slug
  const { products, loading: productsLoading } = useProducts()
  const { categories, loading: categoriesLoading } = useCategories()
  const { language } = useLanguage()
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null)
  const [filteredProducts, setFilteredProducts] = useState<any[]>([])

  useEffect(() => {
    if (!categoriesLoading && categories.length > 0) {
      const category = categories.find(cat => cat.slug === categoryParam)
      setCurrentCategory(category || null)
    }
  }, [categories, categoriesLoading, categoryParam])

  useEffect(() => {
    if (!productsLoading && products.length > 0 && currentCategory) {
      const filtered = products.filter((prod: any) => {
        if (prod.category) {
          const prodCategoryId = typeof prod.category === 'string' ? prod.category : prod.category._id
          return prodCategoryId === currentCategory._id
        }
        return false
      })
      setFilteredProducts(filtered)
    }
  }, [products, productsLoading, currentCategory])

  const loading = productsLoading || categoriesLoading

  // Rasm URL ni to'g'rilash
  const getImageUrl = (url?: string) => {
    if (!url) return "/luxury-hotel-bathroom-with-towels.jpg"
    if (url.startsWith('http')) return url
    if (url.startsWith('/uploads')) {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000'
      return `${API_BASE}${url}`
    }
    return url
  }

  const categoryName = currentCategory 
    ? (currentCategory.name[language as keyof typeof currentCategory.name] || currentCategory.name.uz)
    : ""
  
  const categoryDescription = currentCategory?.description
    ? (currentCategory.description[language as keyof typeof currentCategory.description] || currentCategory.description.uz)
    : ""

  const heroImage = getImageUrl(currentCategory?.image)

  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header showMainNavigation={true} />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={categoryName}
            fill
            className="object-cover brightness-50"
            priority
            unoptimized={heroImage.startsWith('http')}
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {categoryName}
          </h1>
          {categoryDescription && (
            <p className="text-lg md:text-xl leading-relaxed">
              {categoryDescription}
            </p>
          )}
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
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <Package size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mahsulotlar topilmadi
              </h3>
              <p className="text-gray-600">
                Bu kategoriyada hozircha mahsulotlar yo'q
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
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
