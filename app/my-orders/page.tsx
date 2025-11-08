"use client"

import { useState } from "react"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"
import { getOrdersByPhone } from "@/lib/api"
import type { Order } from "@/lib/api"
import { Phone, Package, Clock, CheckCircle, XCircle } from "lucide-react"
import toast from "react-hot-toast"

export default function MyOrdersPage() {
  const { language } = useLanguage()
  const [phone, setPhone] = useState("")
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!phone.trim()) {
      toast.error(t("toast.enter.phone"))
      return
    }

    setLoading(true)
    setSearched(true)

    try {
      const result = await getOrdersByPhone(phone)
      setOrders(result || [])
      
      if (!result || result.length === 0) {
        toast.info(t("toast.no.orders"))
      }
    } catch (error) {
      console.error("Error fetching orders:", error)
      toast.error(t("toast.error.loading"))
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'confirmed': return 'bg-blue-100 text-blue-800'
      case 'processing': return 'bg-purple-100 text-purple-800'
      case 'shipped': return 'bg-indigo-100 text-indigo-800'
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Kutilmoqda'
      case 'confirmed': return 'Tasdiqlandi'
      case 'processing': return 'Tayyorlanmoqda'
      case 'shipped': return 'Yetkazilmoqda'
      case 'delivered': return 'Yetkazildi'
      case 'cancelled': return 'Bekor qilindi'
      default: return status
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-5 h-5" />
      case 'cancelled': return <XCircle className="w-5 h-5" />
      default: return <Clock className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mening buyurtmalarim</h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-md p-6 mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="inline w-4 h-4 mr-1" />
              Telefon raqamingizni kiriting
            </label>
            <div className="flex gap-3">
              <Input
                type="tel"
                placeholder="+998 90 123 45 67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#084b25] hover:bg-[#06391d]"
              >
                {loading ? "Qidirilmoqda..." : "Qidirish"}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Buyurtma berganingizda ko'rsatgan telefon raqamni kiriting
            </p>
          </form>

          {/* Orders List */}
          {searched && (
            <div className="space-y-4">
              {orders.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <Package size={64} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Buyurtmalar topilmadi
                  </h3>
                  <p className="text-gray-600">
                    Bu telefon raqamga tegishli buyurtmalar yo'q
                  </p>
                </div>
              ) : (
                orders.map((order) => (
                  <div key={order._id} className="bg-white rounded-lg shadow-md p-6">
                    {/* Order Header */}
                    <div className="flex justify-between items-start mb-4 pb-4 border-b">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Buyurtma #{order.orderNumber}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {new Date(order.createdAt).toLocaleDateString('uz-UZ', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="text-sm font-medium">{getStatusText(order.status)}</span>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="space-y-3 mb-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-gray-700">
                            {item.name} × {item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Order Notes */}
                    {order.notes && (
                      <div className="bg-gray-50 rounded p-3 mt-4">
                        <p className="text-sm text-gray-600">
                          <strong>Izoh:</strong> {order.notes}
                        </p>
                      </div>
                    )}

                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        <strong>Telefon:</strong> {order.customer.phone}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
