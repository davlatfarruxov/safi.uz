"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Package, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCart()

  const [formData, setFormData] = useState({
    hotelName: "",
    contactPerson: "",
    email: "",
    phone: "",
    deliveryAddress: "",
    deliveryCity: "Toshkent",
    deliveryDate: "",
    specialInstructions: "",
  })
  const [submitting, setSubmitting] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const getImageUrl = (product: any) => {
    if (product.image) return product.image
    return `/placeholder.svg?height=200&width=200&query=${encodeURIComponent(product.nameUz + " hotel supply")}`
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Generate order number
      const orderNumber = `ORD-${Date.now()}`

      // Store order in localStorage for confirmation page
      const orderData = {
        orderNumber,
        ...formData,
        items: items.map((item) => ({
          productName: item.product.nameUz,
          quantity: item.quantity,
          price: item.priceAtAdd,
          total: item.priceAtAdd * item.quantity,
        })),
        totalAmount: totalPrice,
        orderDate: new Date().toISOString(),
      }

      localStorage.setItem("lastOrder", JSON.stringify(orderData))

      // Clear cart
      clearCart()

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to confirmation
      router.push(`/checkout/confirmation?order=${orderNumber}`)
    } catch (err) {
      console.error("[v0] Checkout error:", err)
    } finally {
      setSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-serif font-bold mb-2">Savat bo'sh</h1>
          <p className="text-muted-foreground mb-6">Buyurtma berish uchun mahsulotlar qo'shing</p>
          <Button asChild>
            <Link href="/products">Mahsulotlarni ko'rish</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Mahsulotlarga qaytish
        </Link>

        <h1 className="text-4xl font-serif font-bold text-primary mb-8">To'lov</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mehmonxona ma'lumotlari</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hotelName">Mehmonxona nomi *</Label>
                      <Input
                        id="hotelName"
                        value={formData.hotelName}
                        onChange={(e) => handleChange("hotelName", e.target.value)}
                        placeholder="Masalan: Grand Hotel"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Aloqa shaxsi *</Label>
                      <Input
                        id="contactPerson"
                        value={formData.contactPerson}
                        onChange={(e) => handleChange("contactPerson", e.target.value)}
                        placeholder="Ism va familiya"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="info@hotel.uz"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+998 90 123 45 67"
                        required
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Yetkazib berish ma'lumotlari
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="deliveryCity">Shahar *</Label>
                      <Input
                        id="deliveryCity"
                        value={formData.deliveryCity}
                        onChange={(e) => handleChange("deliveryCity", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deliveryDate" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Yetkazib berish sanasi
                      </Label>
                      <Input
                        id="deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => handleChange("deliveryDate", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deliveryAddress">Manzil *</Label>
                    <Textarea
                      id="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={(e) => handleChange("deliveryAddress", e.target.value)}
                      placeholder="To'liq manzilni kiriting"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialInstructions">Maxsus ko'rsatmalar</Label>
                    <Textarea
                      id="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={(e) => handleChange("specialInstructions", e.target.value)}
                      placeholder="Qo'shimcha izohlar yoki talablar"
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                    disabled={submitting}
                  >
                    {submitting ? "Yuklanmoqda..." : "Buyurtmani tasdiqlash"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Buyurtma xulosasi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                        <img
                          src={getImageUrl(item.product) || "/placeholder.svg"}
                          alt={item.product.nameUz}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.product.nameUz}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.quantity} x {formatPrice(item.priceAtAdd)} so'm
                        </p>
                        <p className="text-sm font-semibold text-primary">
                          {formatPrice(item.priceAtAdd * item.quantity)} so'm
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Mahsulotlar:</span>
                    <span>{formatPrice(totalPrice)} so'm</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Yetkazib berish:</span>
                    <span className="text-green-600">Bepul</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Jami:</span>
                  <span className="text-primary">{formatPrice(totalPrice)} so'm</span>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">B2B buyurtma</p>
                  <p>Buyurtmangiz qabul qilingandan so'ng, bizning menejerimiz siz bilan bog'lanadi.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
