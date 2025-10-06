"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/products"
import { useStarRating } from "@/contexts/star-rating-context"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { starRating } = useStarRating()
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const price = starRating ? product.pricing[starRating] : product.pricing[3]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product, price)
    setTimeout(() => setIsAdding(false), 500)
  }

  const getImageUrl = () => {
    if (product.image) return product.image
    return `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(product.nameUz + " hotel supply product")}`
  }

  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={getImageUrl() || "/placeholder.svg"}
          alt={product.nameUz}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground">{product.nameUz}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.descriptionUz}</p>
        <p className="mt-3 text-2xl font-bold text-primary">{formatPrice(price)} so'm</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {isAdding ? "Qo'shildi!" : "Savatga qo'shish"}
        </Button>
      </CardFooter>
    </Card>
  )
}
