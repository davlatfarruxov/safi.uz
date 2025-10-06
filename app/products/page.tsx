"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { products, categories } from "@/lib/products"
import { useStarRating } from "@/contexts/star-rating-context"
import { useLanguage } from "@/contexts/language-context"

export default function ProductsPage() {
  const { starRating } = useStarRating()
  const { t, language } = useLanguage()
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesSearch =
        product.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description[language].toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery, language])

  const getCategoryName = (categoryId: string) => {
    switch (categoryId) {
      case "all":
        return t.products.allProducts
      case "bedroom":
        return t.products.bedroomSupplies
      case "bathroom":
        return t.products.bathroomSupplies
      case "kitchen":
        return t.products.kitchenSupplies
      case "general":
        return t.products.generalSupplies
      default:
        return categoryId
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold text-primary md:text-5xl">{t.products.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {starRating
              ? `${t.products.subtitle} ${starRating} ${t.products.subtitleWithRating}`
              : t.productPreview.subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t.products.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "border-border hover:bg-primary/10"
              }
            >
              {getCategoryName(category.id)}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">{t.products.noProducts}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
