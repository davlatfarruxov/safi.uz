"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { getProductsByCategory, getSubCategories, Category } from "@/lib/api"

interface DynamicMegaDropdownProps {
  category: Category
}

export function DynamicMegaDropdown({ category }: DynamicMegaDropdownProps) {
  const { t, language } = useLanguage()
  const [products, setProducts] = useState<any[]>([])
  const [subCategories, setSubCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        
        // Sub-kategoriyalarni olish
        const subs = await getSubCategories(category._id)
        setSubCategories(subs || [])
        
        // Kategoriya mahsulotlarini olish (featured)
        const productsData = await getProductsByCategory(category._id, 3)
        setProducts(productsData.products || [])
      } catch (error) {
        console.error('Error fetching dropdown data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [category._id])

  return (
    <div className="absolute left-0 right-0 top-full bg-white shadow-2xl border-t border-gray-200 z-40">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left side - Sub kategoriyalar yoki fake data */}
          <div className="col-span-8">
            <div className="grid grid-cols-3 gap-6">
              {/* Sub-kategoriyalar */}
              {subCategories.length > 0 ? (
                subCategories.slice(0, 3).map((subCat) => (
                  <div key={subCat._id}>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {subCat.name[language]}
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href={`/categories/${subCat.slug}`}
                          className="text-sm text-gray-600 hover:text-[#084b25] transition-colors"
                        >
                          {t("view.all")} {subCat.name[language]}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/products?category=${subCat._id}`}
                          className="text-sm text-gray-600 hover:text-[#084b25] transition-colors"
                        >
                          Mahsulotlar
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))
              ) : (
                // Fake data - agar sub-kategoriya bo'lmasa
                <>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {category.name[language]} - Premium
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href={`/categories/${category.slug}`} className="text-sm text-gray-600 hover:text-[#084b25]">
                          Premium Collection
                        </Link>
                      </li>
                      <li>
                        <Link href={`/categories/${category.slug}`} className="text-sm text-gray-600 hover:text-[#084b25]">
                          Luxury Items
                        </Link>
                      </li>
                      <li>
                        <Link href={`/categories/${category.slug}`} className="text-sm text-gray-600 hover:text-[#084b25]">
                          Best Sellers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {category.name[language]} - Standard
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href={`/categories/${category.slug}`} className="text-sm text-gray-600 hover:text-[#084b25]">
                          Standard Collection
                        </Link>
                      </li>
                      <li>
                        <Link href={`/categories/${category.slug}`} className="text-sm text-gray-600 hover:text-[#084b25]">
                          Budget Friendly
                        </Link>
                      </li>
                      <li>
                        <Link href={`/categories/${category.slug}`} className="text-sm text-gray-600 hover:text-[#084b25]">
                          Value Packs
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Aksessuarlar
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href={`/categories/${category.slug}`} className="text-sm text-gray-600 hover:text-[#084b25]">
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link href={`/categories/${category.slug}`} className="text-sm text-gray-600 hover:text-[#084b25]">
                          Display Items
                        </Link>
                      </li>
                      <li>
                        <Link href={`/categories/${category.slug}`} className="text-sm text-gray-600 hover:text-[#084b25]">
                          Consumables
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right side - Featured mahsulotlar */}
          <div className="col-span-4">
            <h3 className="font-semibold text-gray-900 mb-4">
              Mashhur Mahsulotlar
            </h3>
            
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-3 animate-pulse">
                    <div className="w-20 h-20 bg-gray-200 rounded"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="space-y-4">
                {products.map((product) => (
                  <Link
                    key={product._id}
                    href={`/products/${product.slug}`}
                    className="flex gap-3 group"
                  >
                    <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      {product.images && product.images[0] ? (
                        <img
                          src={product.images[0].url}
                          alt={product.name[language]}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#084b25] transition-colors line-clamp-2">
                        {product.name[language]}
                      </h4>
                      <p className="text-sm font-semibold text-[#084b25] mt-1">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              // Fake products agar real mahsulot bo'lmasa
              <div className="space-y-4">
                <Link href={`/categories/${category.slug}`} className="flex gap-3 group">
                  <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#084b25]">
                      Premium {category.name[language]}
                    </h4>
                    <p className="text-sm font-semibold text-[#084b25] mt-1">$99.99</p>
                  </div>
                </Link>
                <Link href={`/categories/${category.slug}`} className="flex gap-3 group">
                  <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#084b25]">
                      Luxury {category.name[language]}
                    </h4>
                    <p className="text-sm font-semibold text-[#084b25] mt-1">$149.99</p>
                  </div>
                </Link>
                <Link href={`/categories/${category.slug}`} className="flex gap-3 group">
                  <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#084b25]">
                      Standard {category.name[language]}
                    </h4>
                    <p className="text-sm font-semibold text-[#084b25] mt-1">$59.99</p>
                  </div>
                </Link>
              </div>
            )}

            {/* CTA Button */}
            <Link
              href={`/categories/${category.slug}`}
              className="mt-6 block w-full bg-[#084b25] text-white text-center py-3 rounded-lg hover:bg-[#0a5c2e] transition-colors font-medium"
            >
              {t("view.all")} {category.name[language]}
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <Link
            href={`/products?category=${category._id}`}
            className="text-[#084b25] hover:text-[#0a5c2e] font-medium inline-flex items-center gap-2"
          >
            {t("explore.collection")} →
          </Link>
        </div>
      </div>
    </div>
  )
}
