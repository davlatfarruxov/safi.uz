"use client"

import { useMainCategories } from "@/hooks/useCategories"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function RealCategoryGrid() {
  const { categories, loading } = useMainCategories()
  const { t, language } = useLanguage()

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kategoriyalar
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-6 animate-pulse">
                <div className="bg-gray-200 h-6 rounded mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bizning Kategoriyalar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mehmonxonangiz uchun kerakli barcha mahsulotlarni topishingiz mumkin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/categories/${category.slug}`}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#084b25]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#084b25] transition-colors">
                    {category.name[language]}
                  </h3>
                  
                  {category.description && category.description[language] && (
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {category.description[language]}
                    </p>
                  )}
                </div>
                
                <ArrowRight 
                  size={20} 
                  className="text-gray-400 group-hover:text-[#084b25] group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" 
                />
              </div>

              {category.image && (
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={category.image}
                    alt={category.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Mahsulotlarni ko'rish
                </span>
                <span className="text-xs bg-[#084b25] text-white px-2 py-1 rounded">
                  Kategoriya
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 bg-[#084b25] text-white px-6 py-3 rounded-lg hover:bg-[#0a5c2e] transition-colors"
          >
            Barcha Kategoriyalar
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}