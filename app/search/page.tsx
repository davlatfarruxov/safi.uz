"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { searchProducts } from "@/lib/api"
import type { Product } from "@/lib/api"
import { useLanguage } from "@/lib/language-context"
import { Search } from "lucide-react"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const { t } = useLanguage()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query.trim()) {
        setProducts([])
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const data = await searchProducts(query)
        setProducts(data.products || [])
      } catch (error) {
        console.error("Error searching products:", error)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchSearchResults()
  }, [query])

  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t("search.results")}
            </h1>
            {query && (
              <p className="text-gray-600">
                {t("search.query")}: <span className="font-semibold">"{query}"</span>
              </p>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#084b25]"></div>
            </div>
          ) : products.length > 0 ? (
            <>
              <p className="text-gray-600 mb-6">
                {t("search.found")}: {products.length} {t("search.products")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <Search size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("search.no.results")}
              </h3>
              <p className="text-gray-600">
                {t("search.try.different")}
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
