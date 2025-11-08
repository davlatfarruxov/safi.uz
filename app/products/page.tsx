"use client"

import { useState, useEffect } from "react"
import { useProducts } from "@/hooks/useProducts"
import { useCategories } from "@/hooks/useCategories"
import { useLanguage } from "@/lib/language-context"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Search, Filter, Grid, List } from "lucide-react"

export default function ProductsPage() {
  const { t, language } = useLanguage()
  const { categories } = useCategories()
  
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('newest')
  
  const { products, loading, pagination } = useProducts({
    page: currentPage,
    limit: 20,
    category: selectedCategory,
    search: search
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentPage(1)
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("all.products")}
            </h1>
            <p className="text-lg text-gray-600">
              Mehmonxonangiz uchun kerakli barcha mahsulotlar
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Mahsulot qidirish..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#084b25]"
                  />
                </div>
              </form>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#084b25]"
              >
                <option value="">Barcha kategoriyalar</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name[language]}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#084b25]"
              >
                <option value="newest">Eng yangi</option>
                <option value="price-low">Narx: past → yuqori</option>
                <option value="price-high">Narx: yuqori → past</option>
                <option value="name">Nomi bo'yicha</option>
                <option value="popular">Mashhur</option>
              </select>
            </div>

            {/* View Mode & Results Count */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="text-sm text-gray-600">
                {loading ? (
                  "Yuklanmoqda..."
                ) : (
                  `${pagination.totalProducts} ta mahsulot topildi`
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#084b25] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#084b25] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                  <div className="bg-gray-200 h-48"></div>
                  <div className="p-4">
                    <div className="bg-gray-200 h-4 rounded mb-2"></div>
                    <div className="bg-gray-200 h-4 rounded w-2/3 mb-2"></div>
                    <div className="bg-gray-200 h-6 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mahsulotlar topilmadi
              </h3>
              <p className="text-gray-600 mb-4">
                Qidiruv shartlarini o'zgartirib ko'ring
              </p>
              <Button onClick={() => {
                setSearch("")
                setSelectedCategory("")
                setCurrentPage(1)
              }}>
                Filterni tozalash
              </Button>
            </div>
          ) : (
            <>
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" 
                : "space-y-4"
              }>
                {products.map((product) => (
                  <div key={product._id} className={viewMode === 'grid' 
                    ? "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    : "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex"
                  }>
                    <div className={viewMode === 'grid' ? "aspect-square relative overflow-hidden" : "w-48 h-32 relative overflow-hidden flex-shrink-0"}>
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
                      {product.isNew && (
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
                    
                    <div className="p-4 flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.name[language]}
                      </h3>
                      
                      {product.description && product.description[language] && (
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {product.description[language]}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between mb-3">
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
                      
                      <div className="flex items-center justify-between">
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

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Oldingi
                  </Button>
                  
                  {[...Array(pagination.totalPages)].map((_, i) => {
                    const page = i + 1
                    if (
                      page === 1 ||
                      page === pagination.totalPages ||
                      (page >= currentPage - 2 && page <= currentPage + 2)
                    ) {
                      return (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          onClick={() => handlePageChange(page)}
                          className="w-10"
                        >
                          {page}
                        </Button>
                      )
                    } else if (page === currentPage - 3 || page === currentPage + 3) {
                      return <span key={page} className="px-2">...</span>
                    }
                    return null
                  })}
                  
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === pagination.totalPages}
                  >
                    Keyingi
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}