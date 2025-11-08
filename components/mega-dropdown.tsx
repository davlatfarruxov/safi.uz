"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useCategories } from "@/hooks/useCategories"
import { useProducts } from "@/hooks/useProducts"
import { useEffect, useState } from "react"
import type { Category, Product } from "@/lib/api"

interface MegaDropdownProps {
  categoryId: string
}

export function MegaDropdown({ categoryId }: MegaDropdownProps) {
  const { t, language } = useLanguage()
  const { categories, loading: categoriesLoading } = useCategories()
  const { products, loading: productsLoading } = useProducts()
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null)
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([])
  const [productColumns, setProductColumns] = useState<Array<{ title: string; products: Product[] }>>([])

  useEffect(() => {
    if (!categoriesLoading && categories && categories.length > 0) {
      // Hozirgi kategoriyani topish
      const category = categories.find((cat: Category) => cat._id === categoryId)
      setCurrentCategory(category || null)
    }
  }, [categories, categoriesLoading, categoryId])

  useEffect(() => {
    if (!productsLoading && products && products.length > 0) {
      let filtered: Product[] = []
      let title = ""
      
      // Agar "new" kategoriyasi bo'lsa, yangi mahsulotlarni ko'rsatamiz
      if (categoryId === "new") {
        filtered = products.filter((prod: Product) => prod.isNewProduct === true)
        title = t("nav.new") || "Yangi mahsulotlar"
      } else if (currentCategory) {
        // Oddiy kategoriya uchun o'sha kategoriyaga tegishli mahsulotlarni filtrlash
        filtered = products.filter((prod: Product) => {
          if (prod.category) {
            const prodCategoryId = typeof prod.category === 'string' ? prod.category : prod.category._id
            return prodCategoryId === currentCategory._id
          }
          return false
        })
        title = currentCategory.name[language as keyof typeof currentCategory.name] || currentCategory.name.uz
      }
      
      setCategoryProducts(filtered)
      
      // Mahsulotlarni 3 ustunга bo'lish
      const columns: Array<{ title: string; products: Product[] }> = []
      const itemsPerColumn = Math.ceil(filtered.length / 3)
      
      for (let i = 0; i < 3; i++) {
        const startIdx = i * itemsPerColumn
        const endIdx = startIdx + itemsPerColumn
        const columnProducts = filtered.slice(startIdx, endIdx)
        
        if (columnProducts.length > 0) {
          columns.push({
            title: i === 0 ? title : "",
            products: columnProducts
          })
        }
      }
      
      setProductColumns(columns)
    }
  }, [products, productsLoading, currentCategory, categoryId, language, t])

  const loading = categoriesLoading || productsLoading
  const hasProducts = productColumns.length > 0

  // Rasm URL ni tekshirish va to'g'ri formatga keltirish
  let categoryImage: string | undefined
  let categoryName = ""
  let categorySlug = ""
  let hasValidImage = false
  let imageUrl = "/luxury-hotel-bathroom-with-towels.jpg"
  
  if (categoryId === "new") {
    // "New" kategoriyasi uchun
    categoryName = t("nav.new") || "Yangi mahsulotlar"
    categorySlug = "new"
    imageUrl = "/safi-banner1.JPG"
    hasValidImage = true
  } else if (currentCategory) {
    // Oddiy kategoriya uchun
    categoryImage = currentCategory.image
    hasValidImage = categoryImage ? categoryImage.trim() !== '' : false
    categoryName = currentCategory.name[language as keyof typeof currentCategory.name] || currentCategory.name.uz
    categorySlug = currentCategory.slug
    
    if (hasValidImage && categoryImage) {
      if (categoryImage.startsWith('http')) {
        imageUrl = categoryImage
      } else if (categoryImage.startsWith('/uploads')) {
        const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000'
        imageUrl = `${API_BASE}${categoryImage}`
      } else {
        imageUrl = categoryImage
      }
    }
  }
  
  console.log('Category:', categoryName, 'Image URL:', imageUrl, 'ID:', categoryId)

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-full bg-white border border-gray-200 shadow-xl z-[9999] rounded-lg overflow-hidden transition-all duration-300 ease-out opacity-100 scale-100 w-[95vw] max-w-6xl mt-0">
      <div className="flex w-full">
        {/* Left side - 3 columns */}
        <div className="flex-1 p-4 md:p-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-gray-500">Yuklanmoqda...</div>
            </div>
          ) : hasProducts ? (
            // Dinamik mahsulotlar
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {productColumns.map((column, idx) => (
                <div key={idx} className="space-y-3">
                  {column.title && (
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide border-b border-gray-100 pb-2">
                      {column.title}
                    </h3>
                  )}
                  <ul className="space-y-2">
                    {column.products.map((product) => (
                      <li key={product._id}>
                        <Link 
                          href={`/categories?category=${categorySlug}`}
                          className="text-sm text-gray-600 hover:text-[#084b25] hover:bg-gray-50 transition-all duration-200 block py-2 px-3 rounded-md hover:translate-x-1"
                        >
                          {product.name[language as keyof typeof product.name] || product.name.uz}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            // Mahsulot yo'q
            <div className="flex items-center justify-center py-12">
              <div className="text-gray-500">
                {currentCategory ? `${categoryName} kategoriyasida mahsulot yo'q` : "Kategoriya topilmadi"}
              </div>
            </div>
          )}
          
          {/* View All link */}
          {currentCategory && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link 
                href={`/categories?category=${categorySlug}`}
                className="inline-flex items-center bg-[#084b25] text-white py-3 px-6 rounded-lg text-sm font-medium hover:bg-[#06391d] transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                {t("view.all") || "Barchasini ko'rish"} {categoryName}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Right side - Image box */}
        <div className="hidden lg:flex w-80 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex-col justify-center">
          <div className="text-center">
            <div className="mb-4 relative h-32 lg:h-48 w-full rounded-lg overflow-hidden shadow-md bg-gray-200 flex items-center justify-center">
              {hasValidImage ? (
                <img
                  src={imageUrl}
                  alt={categoryName || "Category"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    console.error('Image load error:', imageUrl)
                    e.currentTarget.style.display = 'none'
                  }}
                />
              ) : (
                <Image
                  src={imageUrl}
                  alt={categoryName || "Category"}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">
              {categoryName}
            </h4>
            {currentCategory?.description && (
              <p className="text-sm text-gray-600 leading-relaxed">
                {currentCategory.description[language as keyof typeof currentCategory.description] || currentCategory.description.uz}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
