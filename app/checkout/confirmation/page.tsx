"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Package, ArrowRight } from "lucide-react"
import Link from "next/link"

function ConfirmationContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const orderNumber = searchParams.get("order")
  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!orderNumber) {
      router.push("/products")
      return
    }

    try {
      const lastOrder = localStorage.getItem("lastOrder")
      if (lastOrder) {
        const orderData = JSON.parse(lastOrder)
        if (orderData.orderNumber === orderNumber) {
          setOrder(orderData)
        }
      }
    } catch (err) {
      console.error("[v0] Failed to fetch order:", err)
    } finally {
      setLoading(false)
    }
  }, [orderNumber, router])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Yuklanmoqda...</p>
        </div>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-serif font-bold mb-2">Buyurtma topilmadi</h1>
          <Button asChild>
            <Link href="/products">Mahsulotlarni ko'rish</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">Buyurtma qabul qilindi!</h1>
          <p className="text-lg text-muted-foreground">
            Buyurtma raqami: <span className="font-semibold text-foreground">{order.orderNumber}</span>
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Buyurtma tafsilotlari</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {order.items?.map((item: any, index: number) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.productName}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.quantity} x {formatPrice(item.price)} so'm
                    </p>
                  </div>
                  <p className="font-semibold text-primary">{formatPrice(item.total)} so'm</p>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Jami:</span>
                <span className="text-primary">{formatPrice(order.totalAmount)} so'm</span>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
              <div>
                <span className="font-medium">Mehmonxona:</span>
                <p className="text-muted-foreground">{order.hotelName}</p>
              </div>
              <div>
                <span className="font-medium">Aloqa shaxsi:</span>
                <p className="text-muted-foreground">{order.contactPerson}</p>
              </div>
              <div>
                <span className="font-medium">Email:</span>
                <p className="text-muted-foreground">{order.email}</p>
              </div>
              <div>
                <span className="font-medium">Telefon:</span>
                <p className="text-muted-foreground">{order.phone}</p>
              </div>
              <div>
                <span className="font-medium">Yetkazib berish manzili:</span>
                <p className="text-muted-foreground">
                  {order.deliveryCity}, {order.deliveryAddress}
                </p>
              </div>
              {order.deliveryDate && (
                <div>
                  <span className="font-medium">Yetkazib berish sanasi:</span>
                  <p className="text-muted-foreground">{new Date(order.deliveryDate).toLocaleDateString("uz-UZ")}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
          <h2 className="font-semibold text-lg mb-2">Keyingi qadamlar</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
              <span>Bizning menejerimiz 24 soat ichida siz bilan bog'lanadi</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
              <span>Buyurtma tafsilotlari va to'lov ma'lumotlari tasdiqlanadi</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
              <span>Mahsulotlar tayyor bo'lgach, yetkazib berish rejalashtiriladi</span>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link href="/products">Xaridni davom ettirish</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/">Bosh sahifaga qaytish</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function ConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      }
    >
      <ConfirmationContent />
    </Suspense>
  )
}
