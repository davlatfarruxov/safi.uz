"use client"

import { useEffect } from "react"
import { useCategories } from "@/hooks/useCategories"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function DynamicHeaderNav() {
  const { categories, loading } = useCategories()
  const { t, language } = useLanguage()

  // Get main categories (without parent)
  const mainCategories = categories.filter(cat => !cat.parentCategory)

  if (loading) {
    return (
      <nav className="hidden lg:flex items-center gap-6">
        <div className="h-6 w-20 bg-gray-200 animate-pulse rounded"></div>
        <div className="h-6 w-24 bg-gray-200 animate-pulse rounded"></div>
        <div className="h-6 w-28 bg-gray-200 animate-pulse rounded"></div>
      </nav>
    )
  }

  return (
    <nav className="hidden lg:flex items-center gap-6">
      {/* Yangiliklar */}
      <Link
        href="/products?new=true"
        className="text-sm font-medium text-gray-700 hover:text-[#084b25] transition-colors"
      >
        {t("nav.new")}
      </Link>

      {/* Dinamik kategoriyalar */}
      {mainCategories.slice(0, 6).map((category) => (
        <div key={category._id} className="relative group">
          <Link
            href={`/categories/${category.slug}`}
            className="text-sm font-medium text-gray-700 hover:text-[#084b25] transition-colors flex items-center gap-1"
          >
            {category.name[language]}
            <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
          </Link>
          
          {/* Dropdown - Sub kategoriyalar */}
          <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="p-4">
              <Link
                href={`/categories/${category.slug}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#084b25] rounded transition-colors font-medium"
              >
                {t("view.all")} {category.name[language]}
              </Link>
              
              {category.description && category.description[language] && (
                <p className="px-4 py-2 text-xs text-gray-500">
                  {category.description[language]}
                </p>
              )}
              
              <div className="mt-2 pt-2 border-t">
                <Link
                  href={`/products?category=${category._id}`}
                  className="block px-4 py-2 text-sm text-[#084b25] hover:bg-gray-50 rounded transition-colors"
                >
                  Mahsulotlarni ko'rish →
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Barcha kategoriyalar */}
      <Link
        href="/categories"
        className="text-sm font-medium text-gray-700 hover:text-[#084b25] transition-colors"
      >
        {t("all.categories") || "Barcha kategoriyalar"}
      </Link>
    </nav>
  )
}
