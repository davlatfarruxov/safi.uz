"use client"

import { Button } from "@/components/ui/button"
import { ShoppingBag, Heart } from "lucide-react"
import Link from "next/link"
import { useWishlist } from "@/lib/wishlist-context"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import type { Product } from "@/lib/api"
import toast from "react-hot-toast"

interface ProductCardProps {
  product?: Product
  // Legacy props for backward compatibility
  id?: string | number
  name?: string
  nameUz?: string
  nameRu?: string
  price?: number
  originalPrice?: number
  image?: string
  badge?: string
  isNew?: boolean
  rating?: number
  reviews?: number
  showPrice?: boolean
}

export function ProductCard({ 
  product,
  id, 
  name, 
  nameUz, 
  nameRu, 
  price, 
  originalPrice, 
  image, 
  badge, 
  isNew, 
  rating, 
  reviews,
  showPrice = true
}: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { language, t } = useLanguage()

  // Agar product obyekti berilgan bo'lsa, undan ma'lumotlarni olish
  const productId = product?._id || String(id) || (name || "").toLowerCase().replace(/\s+/g, "-")
  const productSlug = product?.slug || productId
  const productName = product ? (product.name[language as keyof typeof product.name] || product.name.uz) : (name || "")
  const productPrice = product?.price || price || 0
  const productImage = product?.images?.[0]?.url || image || "/placeholder.svg"
  const productBadge = badge || (product?.isNewProduct || isNew ? "NEW" : "")
  const productRating = product?.rating?.average || rating
  const productReviews = product?.rating?.count || reviews

  const isLiked = isInWishlist(productId)

  const getLocalizedName = () => {
    if (product) {
      return product.name[language as keyof typeof product.name] || product.name.uz
    }
    if (language === "uz" && nameUz) return nameUz
    if (language === "ru" && nameRu) return nameRu
    return name || ""
  }

  // Rasm URL ni to'g'rilash
  const getImageUrl = (url: string) => {
    if (!url) return "/placeholder.svg"
    if (url.startsWith('http')) return url
    if (url.startsWith('/uploads')) {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000'
      return `${API_BASE}${url}`
    }
    return url
  }

  const handleWishlistToggle = () => {
    if (isLiked) {
      removeFromWishlist(productId)
    } else {
      addToWishlist({
        id: productId,
        name: productName,
        price: productPrice,
        originalPrice,
        image: productImage,
        badge: productBadge,
        fullProduct: product, // To'liq product ma'lumotlarini saqlash
      })
    }
  }

  return (
    <Link href={`/product/${productSlug}`} className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow block">
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        {productBadge && (
          <span className="absolute top-2 md:top-3 left-2 md:left-3 bg-red-500 text-white px-2 md:px-3 py-1 text-xs font-medium rounded shadow-sm z-10">
            {productBadge}
          </span>
        )}
        <img
          src={getImageUrl(productImage)}
          alt={productName}
          className="w-full h-full object-contain p-3 md:p-4 transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            handleWishlistToggle()
          }}
          className="absolute top-2 md:top-3 right-2 md:right-3 p-1.5 md:p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors z-10"
        >
          <Heart className={`w-3 h-3 md:w-4 md:h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
        </button>
      </div>

      <div className="p-3 md:p-4">
        <h3 className="text-xs md:text-sm font-normal text-gray-900 mb-3 md:mb-4 line-clamp-2 min-h-[2rem] md:min-h-[2.5rem] leading-tight">
          {getLocalizedName()}
        </h3>

        <Button 
          onClick={(e) => {
            e.preventDefault()
            if (product) {
              addToCart(product, 1)
              toast.success(`${productName} ${t("toast.added.to.cart")}`)
            } else {
              // Legacy mode: create a minimal product object from props
              const legacyProduct: Product = {
                _id: productId,
                slug: productSlug,
                name: {
                  uz: nameUz || name || productName,
                  ru: nameRu || name || productName,
                  en: name || productName
                },
                description: { uz: "", ru: "", en: "" },
                price: productPrice,
                images: [{ url: productImage, alt: productName }],
                category: "",
                isNewProduct: isNew || false,
                isFeatured: false,
                inStock: true,
                rating: { average: 0, count: 0 },
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
              }
              addToCart(legacyProduct, 1)
              toast.success(`${productName} ${t("toast.added.to.cart")}`)
            }
          }}
          className="w-full bg-[#084b25] hover:bg-[#06391d] text-white font-medium text-xs md:text-sm py-2 md:py-2.5" 
          size="sm"
        >
          <ShoppingBag className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
          {t("add.to.basket")}
        </Button>
      </div>
    </Link>
  )
}
