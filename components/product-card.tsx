"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ShoppingBag, Heart } from "lucide-react"
import Image from "next/image"
import { useWishlist } from "@/lib/wishlist-context"

interface ProductCardProps {
  id?: string
  name: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
}

export function ProductCard({ id, name, price, originalPrice, image, badge }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const productId = id || name.toLowerCase().replace(/\s+/g, "-")
  const isLiked = isInWishlist(productId)

  const handleWishlistToggle = () => {
    if (isLiked) {
      removeFromWishlist(productId)
    } else {
      addToWishlist({
        id: productId,
        name,
        price,
        originalPrice,
        image,
        badge,
      })
    }
  }

  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        {badge && (
          <span className="absolute top-2 md:top-3 left-2 md:left-3 bg-white px-2 md:px-3 py-1 text-xs font-medium text-gray-900 rounded shadow-sm z-10">
            {badge}
          </span>
        )}
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-contain p-3 md:p-4 transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={handleWishlistToggle}
          className="absolute top-2 md:top-3 right-2 md:right-3 p-1.5 md:p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors z-10"
        >
          <Heart className={`w-3 h-3 md:w-4 md:h-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
        </button>
      </div>

      <div className="p-3 md:p-4">
        <h3 className="text-xs md:text-sm font-normal text-gray-900 mb-2 md:mb-3 line-clamp-2 min-h-[2rem] md:min-h-[2.5rem] leading-tight">
          {name}
        </h3>

        <div className="mb-3 md:mb-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
            <span className="text-base md:text-lg font-semibold text-gray-900">${price?.toFixed(2) ?? "0.00"}</span>
            {originalPrice && (
              <span className="text-xs md:text-sm text-gray-500 line-through">${originalPrice.toFixed(2)} Inc. VAT</span>
            )}
          </div>
        </div>

        <Button className="w-full bg-[#084b25] hover:bg-[#06391d] text-white font-medium mb-2 md:mb-3 text-xs md:text-sm py-2 md:py-2.5" size="sm">
          <ShoppingBag className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
          Add to Basket
        </Button>
{/* 
        <div className="flex items-center gap-2">
          <Checkbox id={`compare-${productId}`} className="border-gray-300 h-3 w-3 md:h-4 md:w-4" />
          <Label htmlFor={`compare-${productId}`} className="text-xs md:text-sm text-gray-600 cursor-pointer font-normal">
            Add to compare
          </Label>
        </div> */}
      </div>
    </div>
  )
}
