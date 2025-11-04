"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getProductBySlug, getProductsByCategory } from "@/lib/api"
import type { Product } from "@/lib/api"
import { ProductImageGallery } from "@/components/product-image-gallery"
import { ProductCard } from "@/components/product-card"
import { ChevronRight, Package, ShoppingCart, Minus, Plus } from "lucide-react"
import Link from "next/link"
import toast from "react-hot-toast"

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const { language, t } = useLanguage()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const data = await getProductBySlug(slug)
        setProduct(data)
        
        // Fetch related products
        if (data && data.category) {
          const categoryId = typeof data.category === 'string' ? data.category : data.category._id
          const related = await getProductsByCategory(categoryId, 4)
          // Filter out current product
          setRelatedProducts(related.products.filter((p: Product) => p._id !== data._id))
        }
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchProduct()
    }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen">
        <TopBanner />
        <Header />
        <main className="py-8">
          <div className="container mx-auto px-4">
            <div className="animate-pulse">
              <div className="bg-gray-200 h-8 w-64 rounded mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-200 h-96 rounded"></div>
                <div className="space-y-4">
                  <div className="bg-gray-200 h-8 rounded"></div>
                  <div className="bg-gray-200 h-32 rounded"></div>
                  <div className="bg-gray-200 h-48 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <TopBanner />
        <Header />
        <main className="py-8">
          <div className="container mx-auto px-4 text-center py-16">
            <Package size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("product.not.found")}
            </h3>
            <Link href="/categories" className="text-[#084b25] hover:underline">
              {t("product.back.to.categories")}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const productName = product.name[language as keyof typeof product.name] || product.name.uz
  const productDescription = product.description?.[language as keyof typeof product.description] || product.description?.uz || ""
  const productSpecs = product.specifications?.[language as keyof typeof product.specifications]
  const categoryName = product.category && typeof product.category !== 'string' 
    ? product.category.name[language as keyof typeof product.category.name] 
    : ""

  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-[#084b25]">{t("product.home")}</Link>
            <ChevronRight size={16} />
            <Link href="/categories" className="hover:text-[#084b25]">{t("product.categories")}</Link>
            {categoryName && (
              <>
                <ChevronRight size={16} />
                <span className="text-gray-900">{categoryName}</span>
              </>
            )}
          </nav>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Image Gallery */}
            <ProductImageGallery images={product.images} productName={productName} />

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {productName}
              </h1>

              {product.shortDescription && (
                <p className="text-lg text-gray-600 mb-6">
                  {product.shortDescription[language as keyof typeof product.shortDescription]}
                </p>
              )}

              {/* Quantity and Add to Cart */}
              <div className="mb-8 border-t border-b border-gray-200 py-6">
                <div className="flex items-center gap-4 mb-4">
                  <label className="text-sm font-medium text-gray-700">{t("product.quantity")}:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-6 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    addToCart(product, quantity)
                    toast.success(`${quantity} ${t("toast.products.added")}`)
                  }}
                  className="w-full bg-[#084b25] hover:bg-[#06391d] text-white py-6 text-lg font-semibold"
                  size="lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {t("product.add.to.cart")}
                </Button>
              </div>

              {/* Description */}
              {productDescription && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("product.description")}</h2>
                  <div className="prose prose-sm max-w-none text-gray-700">
                    {productDescription}
                  </div>
                </div>
              )}

              {/* Specifications */}
              {productSpecs && Object.keys(productSpecs).length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{t("product.specifications")}</h2>
                  <dl className="space-y-3">
                    {Object.entries(productSpecs).map(([key, value]) => (
                      <div key={key} className="flex border-b border-gray-200 pb-2">
                        <dt className="font-medium text-gray-700 w-1/3">{key}:</dt>
                        <dd className="text-gray-900 w-2/3">{String(value)}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("product.related")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct._id} product={relatedProduct} />
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
