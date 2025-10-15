"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Building2, Users, Handshake, Star, Globe } from "lucide-react"
import { TopBanner } from "@/components/top-banner"

export default function ForPartnersPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    companyName: "",
    hotelType: "",
    roomCount: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Partner form submitted:", formData)
    alert("Anketa muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Header showMainNavigation={false} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#084b25] to-[#0a5c2e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Hamkorlik uchun
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Mehmonxonangiz uchun premium sifatli mahsulotlar va professional xizmatlar
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-base">
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full">
              <Star className="h-6 w-6 text-yellow-300" />
              <span className="text-white font-medium">Premium sifat</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full">
              <Globe className="h-6 w-6 text-blue-300" />
              <span className="text-white font-medium">Xalqaro standartlar</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full">
              <Handshake className="h-6 w-6 text-green-300" />
              <span className="text-white font-medium">Ishonchli hamkorlik</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Partner Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-[#084b25] flex items-center gap-3 font-bold">
                  <Building2 className="h-7 w-7" />
                  Hamkor bo'lish uchun anketa
                </CardTitle>
                <CardDescription className="text-gray-600 text-base mt-2">
                  Ma'lumotlaringizni to'ldiring va biz siz bilan bog'lanamiz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Ismingiz *
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#084b25]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Familiyangiz *
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#084b25]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Telefon raqami *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#084b25]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Manzilingiz
                      </label>
                      <Input
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#084b25]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Kompaniya nomi *
                      </label>
                      <Input
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-[#084b25]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Mehmonxona turi *
                      </label>
                      <select
                        name="hotelType"
                        value={formData.hotelType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#084b25]"
                      >
                        <option value="">Tanlang</option>
                        <option value="1-star">1 yulduzli</option>
                        <option value="2-star">2 yulduzli</option>
                        <option value="3-star">3 yulduzli</option>
                        <option value="4-star">4 yulduzli</option>
                        <option value="5-star">5 yulduzli</option>
                        <option value="boutique">Boutique hotel</option>
                        <option value="resort">Resort</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Xonalar soni
                    </label>
                    <Input
                      name="roomCount"
                      type="number"
                      value={formData.roomCount}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#084b25]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Qo'shimcha ma'lumot
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#084b25]"
                      placeholder="Sizning ehtiyojlaringiz haqida batafsil yozing..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#084b25] hover:bg-[#06391d] text-white py-3 text-lg"
                  >
                    Anketani yuborish
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-[#084b25] flex items-center gap-3 font-bold">
                  <Users className="h-7 w-7" />
                  Bizning afzalliklarimiz
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#084b25] text-white p-2 rounded-full">
                    <Star className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Premium sifat</h3>
                    <p className="text-gray-700 text-sm mt-1">Xalqaro standartlarga mos mahsulotlar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#084b25] text-white p-2 rounded-full">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Keng assortiment</h3>
                    <p className="text-gray-700 text-sm mt-1">Mehmonxona uchun barcha kerakli mahsulotlar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#084b25] text-white p-2 rounded-full">
                    <Handshake className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Individual yondashuv</h3>
                    <p className="text-gray-700 text-sm mt-1">Har bir mijoz uchun maxsus takliflar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-[#084b25] font-bold">
                  Bog'lanish ma'lumotlari
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#084b25]" />
                  <div>
                    <p className="font-bold text-gray-900">Telefon</p>
                    <p className="text-gray-700 text-base">+998 (71) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#084b25]" />
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <p className="text-gray-700 text-base">partners@safihotelcollection.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#084b25]" />
                  <div>
                    <p className="font-bold text-gray-900">Manzil</p>
                    <p className="text-gray-700 text-base">Toshkent sh., Chilonzor tumani</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-[#084b25] to-[#0a5c2e] text-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">24/7 qo'llab-quvvatlash</h3>
                <p className="text-sm opacity-90">
                  Bizning mutaxassislarimiz har doim sizga yordam berishga tayyor
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}