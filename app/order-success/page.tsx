"use client"

import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <CheckCircle size={80} className="mx-auto text-green-500 mb-6" />
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Buyurtma qabul qilindi!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Sizning buyurtmangiz muvaffaqiyatli qabul qilindi. Tez orada operatorlarimiz siz bilan bog'lanishadi.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <p className="text-green-800">
              📞 Agar savollaringiz bo'lsa, biz bilan bog'laning: +998 90 123 45 67
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categories">
              <Button className="bg-[#084b25] hover:bg-[#06391d]">
                Xaridni davom ettirish
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline">
                Bosh sahifaga qaytish
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
