"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Hotel, ArrowLeft, ShoppingCart, Plus, Minus, Trash2, CreditCard } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"
import { categories } from "@/lib/products"

export default function CartPage() {
  const router = useRouter()
  const { user } = useAuth()
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart()

  if (!user) {
    router.push("/login")
    return null
  }

  const subtotal = getTotalPrice()
  const tax = subtotal * 0.08 // 8% tax
  const shipping = subtotal > 500 ? 0 : 50 // Free shipping over $500
  const total = subtotal + tax + shipping

  const handleQuantityChange = (productId: string, newQuantity: string) => {
    const quantity = Number.parseInt(newQuantity)
    if (!isNaN(quantity) && quantity >= 0) {
      updateQuantity(productId, quantity)
    }
  }

  const handleCheckout = () => {
    router.push("/checkout")
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" onClick={() => router.push("/catalog")}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Catalog
                </Button>
                <div className="flex items-center space-x-2">
                  <Hotel className="h-6 w-6 text-primary" />
                  <h1 className="text-xl font-serif font-bold text-foreground">Safi Hotel Collection</h1>
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium">{user.hotel.name}</div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Your Cart is Empty</h2>
            <p className="text-muted-foreground mb-6">Start shopping to add items to your cart</p>
            <Button onClick={() => router.push("/catalog")}>Browse Products</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => router.push("/catalog")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Catalog
              </Button>
              <div className="flex items-center space-x-2">
                <Hotel className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-serif font-bold text-foreground">Safi Hotel Collection</h1>
              </div>
            </div>
            <div className="text-sm">
              <div className="font-medium">{user.hotel.name}</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-serif font-bold text-foreground">Shopping Cart</h2>
              <Button variant="outline" size="sm" onClick={clearCart}>
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.productId}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <Badge variant="secondary" className="text-xs mb-1">
                              {categories.find((c) => c.id === item.product.category)?.name}
                            </Badge>
                            <h3 className="font-semibold text-foreground">{item.product.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{item.product.description}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.productId)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.productId, e.target.value)}
                              className="w-16 text-center"
                              min="1"
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">${item.price} each</div>
                            <div className="font-semibold text-foreground">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-serif">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({items.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>

                {shipping === 0 && <div className="text-sm text-primary">🎉 Free shipping on orders over $500!</div>}

                <Separator />

                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <Button className="w-full" size="lg" onClick={handleCheckout}>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Proceed to Checkout
                </Button>

                <div className="text-xs text-muted-foreground text-center">
                  Secure checkout with 256-bit SSL encryption
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
