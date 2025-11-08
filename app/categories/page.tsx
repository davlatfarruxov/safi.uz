"use client"

import { useCategories } from "@/hooks/useCategories"
import { useProducts } from "@/hooks/useProducts"
import { useLanguage } from "@/lib/language-context"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Package } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import type { Category, Product } from "@/lib/api"

export default function CategoriesPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  const { categories, loading: categoriesLoading } = useCategories()
  const { products, loading: productsLoading } = useProducts()
  const { language, t } = useLanguage()
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  // Agar category parametri bo'lsa, o'sha kategoriyani topish
  useEffect(() => {
    if (categoryParam && !categoriesLoading && categories.length > 0) {
      const category = categories.find(cat => cat.slug === categoryParam)
      setCurrentCategory(category || null)
    } else {
      setCurrentCategory(null)
    }
  }, [categoryParam, categories, categoriesLoading])

  // Kategoriya mahsulotlarini filtrlash
  useEffect(() => {
    if (currentCategory && !productsLoading && products.length > 0) {
      console.log('Current Category:', currentCategory.name.uz, 'ID:', currentCategory._id)
      console.log('Total Products:', products.length)
      
      const filtered = products.filter((prod: Product) => {
        if (prod.category) {
          const prodCategoryId = typeof prod.category === 'string' ? prod.category : prod.category._id
          const matches = prodCategoryId === currentCategory._id
          
          if (matches) {
            console.log('Matched Product:', prod.name.uz, 'Category ID:', prodCategoryId)
          }
          
          return matches
        }
        return false
      })
      
      console.log('Filtered Products:', filtered.length)
      setFilteredProducts(filtered)
    }
  }, [currentCategory, products, productsLoading])

  // Agar category parametri bo'lsa, mahsulotlar sahifasini ko'rsatish
  if (categoryParam) {
    const loading = categoriesLoading || productsLoading

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
                  {t("categories.no.products")}
                </h3>
                <p className="text-gray-600">
                  {t("categories.no.products.desc")}
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

  // Agar category parametri yo'q bo'lsa, kategoriyalar ro'yxatini ko'rsatish
  const loading = categoriesLoading

  // Group categories by parent
  const mainCategories = categories.filter(cat => !cat.parentCategory)
  const getSubCategories = (parentId: string) => 
    categories.filter(cat => cat.parentCategory === parentId)

  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("categories.all")}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("categories.subtitle")}
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                  <div className="bg-gray-200 h-6 rounded mb-4"></div>
                  <div className="bg-gray-200 h-32 rounded mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : categories.length === 0 ? (
            <div className="text-center py-16">
              <Package size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("categories.not.found")}
              </h3>
              <p className="text-gray-600">
                {t("categories.not.found.desc")}
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {mainCategories.map((category) => {
                const subCategories = getSubCategories(category._id)
                
                return (
                  <div key={category._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Main Category Header */}
                    <div className="bg-gradient-to-r from-[#084b25] to-[#0a5c2e] text-white p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-2xl font-bold mb-2">
                            {category.name[language]}
                          </h2>
                          {category.description && category.description[language] && (
                            <p className="text-green-100">
                              {category.description[language]}
                            </p>
                          )}
                        </div>
                        <Link
                          href={`/categories/${category.slug}`}
                          className="bg-white text-[#084b25] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                        >
                          {t("categories.view")}
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>

                    {/* Category Image */}
                    {category.image && (
                      <div className="aspect-video md:aspect-[3/1] overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name[language]}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Sub Categories */}
                    {subCategories.length > 0 && (
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          {t("categories.subcategories")}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {subCategories.map((subCategory) => (
                            <Link
                              key={subCategory._id}
                              href={`/categories/${subCategory.slug}`}
                              className="group border border-gray-200 rounded-lg p-4 hover:border-[#084b25] hover:shadow-md transition-all"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-gray-900 group-hover:text-[#084b25] transition-colors">
                                  {subCategory.name[language]}
                                </h4>
                                <ArrowRight 
                                  size={16} 
                                  className="text-gray-400 group-hover:text-[#084b25] group-hover:translate-x-1 transition-all" 
                                />
                              </div>
                              {subCategory.description && subCategory.description[language] && (
                                <p className="text-sm text-gray-600 line-clamp-2">
                                  {subCategory.description[language]}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Direct Link to Category */}
                    <div className="px-6 pb-6">
                      <Link
                        href={`/categories/${category.slug}`}
                        className="inline-flex items-center gap-2 text-[#084b25] hover:text-[#0a5c2e] font-medium"
                      >
                        {t("categories.view.all.products")}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Categories without parent (if any standalone categories exist) */}
          {categories.filter(cat => !cat.parentCategory && !mainCategories.includes(cat)).length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("categories.other")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories
                  .filter(cat => !cat.parentCategory && !mainCategories.includes(cat))
                  .map((category) => (
                    <Link
                      key={category._id}
                      href={`/categories/${category.slug}`}
                      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      {category.image && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={category.image}
                            alt={category.name[language]}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#084b25] transition-colors">
                          {category.name[language]}
                        </h3>
                        
                        {category.description && category.description[language] && (
                          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                            {category.description[language]}
                          </p>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {t("categories.view.products")}
                          </span>
                          <ArrowRight 
                            size={16} 
                            className="text-gray-400 group-hover:text-[#084b25] group-hover:translate-x-1 transition-all" 
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}