"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Hotel, ArrowLeft, CreditCard, Truck, CheckCircle, AlertCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"

export default function CheckoutPage() {
  const router = useRouter()
  const { user } = useAuth()
  const { items, getTotalPrice, clearCart } = useCart()

  const [orderData, setOrderData] = useState({
    billingAddress: user?.hotel.address || "",
    shippingAddress: user?.hotel.address || "",
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    specialInstructions: "",
  })

  const [loading, setLoading] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState("")

  if (!user || items.length === 0) {
    router.push("/cart")
    return null
  }

  const subtotal = getTotalPrice()
  const tax = subtotal * 0.08
  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + tax + shipping

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate order processing
    setTimeout(() => {
      const newOrderId = `HO-${Date.now()}`
      setOrderId(newOrderId)
      setOrderComplete(true)
      clearCart()
      setLoading(false)
    }, 2000)
  }

  const updateOrderData = (field: string, value: string) => {
    setOrderData((prev) => ({ ...prev, [field]: value }))
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-2">
              <Hotel className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-serif font-bold text-foreground">HotelSupply Pro</h1>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Order Confirmed!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for your order. We'll process it within 24 hours.
            </p>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Order ID:</span>
                    <span className="font-mono">{orderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Hotel:</span>
                    <span>{user.hotel.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Total Amount:</span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Estimated Delivery:</span>
                    <span>3-5 business days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => router.push("/catalog")}>Continue Shopping</Button>
              <Button variant="outline" onClick={() => router.push("/")}>
                Back to Home
              </Button>
            </div>
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
              <Button variant="ghost" size="sm" onClick={() => router.push("/cart")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Cart
              </Button>
              <div className="flex items-center space-x-2">
                <Hotel className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-serif font-bold text-foreground">HotelSupply Pro</h1>
              </div>
            </div>
            <div className="text-sm">
              <div className="font-medium">{user.hotel.name}</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Checkout</h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Shipping Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Truck className="h-5 w-5 mr-2" />
                      Shipping Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="shippingAddress">Shipping Address</Label>
                      <Textarea
                        id="shippingAddress"
                        value={orderData.shippingAddress}
                        onChange={(e) => updateOrderData("shippingAddress", e.target.value)}
                        placeholder="Enter your hotel's shipping address"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialInstructions">Special Delivery Instructions (Optional)</Label>
                      <Textarea
                        id="specialInstructions"
                        value={orderData.specialInstructions}
                        onChange={(e) => updateOrderData("specialInstructions", e.target.value)}
                        placeholder="Any special instructions for delivery"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Payment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="paymentMethod">Payment Method</Label>
                      <Select
                        value={orderData.paymentMethod}
                        onValueChange={(value) => updateOrderData("paymentMethod", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="credit">Credit Card</SelectItem>
                          <SelectItem value="purchase-order">Purchase Order</SelectItem>
                          <SelectItem value="net-30">Net 30 Terms</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {orderData.paymentMethod === "credit" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Cardholder Name</Label>
                          <Input
                            id="cardName"
                            value={orderData.cardName}
                            onChange={(e) => updateOrderData("cardName", e.target.value)}
                            placeholder="Name on card"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            value={orderData.cardNumber}
                            onChange={(e) => updateOrderData("cardNumber", e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input
                              id="expiryDate"
                              value={orderData.expiryDate}
                              onChange={(e) => updateOrderData("expiryDate", e.target.value)}
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              value={orderData.cvv}
                              onChange={(e) => updateOrderData("cvv", e.target.value)}
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {orderData.paymentMethod === "purchase-order" && (
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          Purchase order details will be collected after order confirmation. Our sales team will contact
                          you within 24 hours.
                        </AlertDescription>
                      </Alert>
                    )}

                    {orderData.paymentMethod === "net-30" && (
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          Net 30 payment terms are subject to credit approval. Your order will be processed after
                          approval.
                        </AlertDescription>
                      </Alert>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="font-serif">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div key={item.productId} className="flex justify-between text-sm">
                          <span className="truncate mr-2">
                            {item.product.name} × {item.quantity}
                          </span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    <div className="flex justify-between">
                      <span>Subtotal</span>
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

                    <Separator />

                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={loading}>
                      {loading ? "Processing..." : "Place Order"}
                    </Button>

                    <div className="text-xs text-muted-foreground text-center">
                      By placing this order, you agree to our terms and conditions
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
