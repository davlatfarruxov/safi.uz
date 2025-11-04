"use client"

import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartCount } = useCart()
  const { language, t } = useLanguage()

  // Rasm URL ni to'g'rilash
  const getImageUrl = (url?: string) => {
    if (!url) return "/placeholder-product.jpg"
    if (url.startsWith('http')) return url
    if (url.startsWith('/uploads')) {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000'
      return `${API_BASE}${url}`
    }
    return url
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <TopBanner />
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("cart.empty")}</h2>
            <p className="text-gray-600 mb-6">{t("cart.empty.desc")}</p>
            <Link href="/categories">
              <Button className="bg-[#084b25] hover:bg-[#06391d]">
                {t("cart.start.shopping")}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{t("cart.title")} ({cartCount} {t("cart.products")})</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => {
                const productName = item.product.name[language as keyof typeof item.product.name] || item.product.name.uz
                const imageUrl = getImageUrl(item.product.images?.[0]?.url)

                return (
                  <div key={item.product._id} className="bg-white rounded-lg shadow-md p-4 flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={productName}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <Link href={`/product/${item.product.slug}`}>
                        <h3 className="font-semibold text-gray-900 hover:text-[#084b25] mb-2">
                          {productName}
                        </h3>
                      </Link>
                      
                      {item.product.shortDescription && (
                        <p className="text-sm text-gray-600 mb-3">
                          {item.product.shortDescription[language as keyof typeof item.product.shortDescription]}
                        </p>
                      )}

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 py-2 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product._id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{t("cart.order.info")}</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>{t("cart.total.products")}</span>
                    <span className="font-medium">{cartCount} {t("cart.products")}</span>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button className="w-full bg-[#084b25] hover:bg-[#06391d] text-white py-6 text-lg font-semibold">
                    {t("cart.place.order")}
                  </Button>
                </Link>

                <Link href="/categories">
                  <Button variant="outline" className="w-full mt-3">
                    {t("cart.continue.shopping")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
