"use client"

import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useWishlist } from "@/lib/wishlist-context"
import { useLanguage } from "@/lib/language-context"
import { ProductCard } from "@/components/product-card"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WishlistPage() {
  const { wishlist } = useWishlist()
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopBanner />
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{t("wishlist")}</h1>
            <p className="text-gray-600">
              {wishlist.length} {wishlist.length === 1 ? t("item") : t("items")}
            </p>
          </div>

          {wishlist.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <div className="max-w-md mx-auto">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{t("wishlist.empty")}</h2>
                <p className="text-gray-600 mb-6">{t("wishlist.empty.desc")}</p>
                <Link href="/">
                  <Button className="bg-[#7B6B8F] hover:bg-[#6A5A7E] text-white">{t("continue.shopping")}</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  badge={product.badge}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
