"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import { createOrder } from "@/lib/api"
import { ShoppingBag, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"
import toast from "react-hot-toast"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clearCart, cartCount } = useCart()
  const { language, t } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    phone: "",
    notes: ""
  })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.phone.trim()) {
      toast.error(t("toast.enter.phone"))
      return
    }

    if (items.length === 0) {
      toast.error(t("toast.cart.empty"))
      return
    }

    setLoading(true)

    try {
      // Buyurtma ma'lumotlarini tayyorlash
      const orderData = {
        customer: {
          phone: formData.phone,
          name: "Mijoz",
          email: "customer@example.com"
        },
        items: items.map(item => ({
          product: item.product._id,
          name: item.product.name.uz,
          quantity: item.quantity,
          price: 0,
          total: 0
        })),
        shippingAddress: {
          address: "",
          city: "",
          region: "",
          postalCode: "",
          country: "Uzbekistan"
        },
        subtotal: 0,
        shippingCost: 0,
        tax: 0,
        discount: 0,
        total: 0,
        notes: formData.notes,
        paymentMethod: "cash"
      }

      console.log("Sending order data:", orderData)

      // Buyurtmani yuborish
      const result = await createOrder(orderData)
      console.log("Order created:", result)
      
      // Savatni tozalash
      clearCart()
      
      // Success sahifasiga o'tish
      toast.success(t("toast.order.success"))
      router.push("/order-success")
    } catch (error: any) {
      console.error("Order error:", error)
      console.error("Error response:", error.response?.data)
      const errorMessage = error.response?.data?.message || error.message || t("toast.order.error")
      toast.error(errorMessage)
    } finally {
      setLoading(false)
    }
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{t("checkout.title")}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline w-4 h-4 mr-1" />
                    {t("checkout.phone")} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder={t("checkout.phone.placeholder")}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-1" />
                    {t("checkout.notes")}
                  </label>
                  <Textarea
                    placeholder={t("checkout.notes.placeholder")}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={4}
                    className="w-full"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#084b25] hover:bg-[#06391d] text-white py-6 text-lg font-semibold"
                >
                  {loading ? t("checkout.processing") : t("checkout.place.order")}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{t("checkout.your.order")}</h2>
                
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {items.map((item) => {
                    const productName = item.product.name[language as keyof typeof item.product.name] || item.product.name.uz
                    const imageUrl = getImageUrl(item.product.images?.[0]?.url)

                    return (
                      <div key={item.product._id} className="flex gap-3 pb-4 border-b border-gray-200">
                        <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                          <img
                            src={imageUrl}
                            alt={productName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                            {productName}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {t("checkout.quantity")}: {item.quantity} {t("checkout.pcs")}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>{t("checkout.total")}:</span>
                    <span>{cartCount} {t("checkout.products")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
