"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Tag, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TopBanner } from "@/components/top-banner"
import { useLanguage } from "@/lib/language-context"

export default function BlogPage() {
  const { t } = useLanguage()
  
  const blogPosts = [
    {
      id: 1,
      title: "Mehmonxona sanoatida 2024 yilgi tendensiyalar",
      excerpt: "Zamonaviy mehmonxonalar qanday qilib mijozlar tajribasini yaxshilayotgani va yangi texnologiyalardan foydalanayotgani haqida.",
      image: "manuel-moreno-DGa0LQ0yDPc-unsplash.jpg",
      author: "Safi Team",
      date: "2024-01-15",
      category: "Tendensiyalar",
      readTime: "5 daqiqa",
      featured: true
    },
    {
      id: 2,
      title: "Ekologik toza mahsulotlarning ahamiyati",
      excerpt: "Nima uchun mehmonxonalar ekologik toza mahsulotlarga o'tayotgani va bu qanday afzalliklarga ega ekanligi.",
      image: "white-luxury-bath-towels.jpg",
      author: "Green Team",
      date: "2024-01-10",
      category: "Ekologiya",
      readTime: "4 daqiqa",
      featured: false
    },
    {
      id: 3,
      title: "Premium sifatli sochiq va mahramlik buyumlari",
      excerpt: "Mehmonlar uchun yuqori sifatli sochiq va mahramlik buyumlarini tanlashning muhim jihatlari.",
      image: "luxury-hotel-bedding-white-linens.jpg",
      author: "Quality Team",
      date: "2024-01-05",
      category: "Mahsulotlar",
      readTime: "6 daqiqa",
      featured: false
    },
    {
      id: 4,
      title: "Hammom jihozlarini to'g'ri tanlash",
      excerpt: "Mehmonxona hammomlarini jihozlashda e'tibor berish kerak bo'lgan asosiy omillar va maslahatlar.",
      image: "safi-banner2.jpg",
      author: "Design Team",
      date: "2023-12-28",
      category: "Dizayn",
      readTime: "7 daqiqa",
      featured: false
    },
    {
      id: 5,
      title: "Mijozlar ehtiyojlarini qondirish yo'llari",
      excerpt: "Zamonaviy mehmonxonalar mijozlar ehtiyojlarini qanday qilib oldindan bashorat qilish va qondirish mumkin.",
      image: "white-microfibre-bathrobe.jpg",
      author: "Service Team",
      date: "2023-12-20",
      category: "Xizmat",
      readTime: "5 daqiqa",
      featured: false
    },
    {
      id: 6,
      title: "Yangi yil uchun mehmonxonani tayyorlash",
      excerpt: "Bayram mavsumida mehmonxonangizni qanday qilib eng yaxshi holatga keltirish bo'yicha maslahatlar.",
      image: "premium4.jpg",
      author: "Event Team",
      date: "2023-12-15",
      category: "Tadbirlar",
      readTime: "4 daqiqa",
      featured: false
    }
  ]

  const categories = [
    { key: "all", label: t("blog.categories.all") },
    { key: "trends", label: t("blog.categories.trends") },
    { key: "ecology", label: t("blog.categories.ecology") },
    { key: "products", label: t("blog.categories.products") },
    { key: "design", label: t("blog.categories.design") },
    { key: "service", label: t("blog.categories.service") },
    { key: "events", label: t("blog.categories.events") }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
        <TopBanner />
      <Header showMainNavigation={false} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#084b25] to-[#0a5c2e] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("blog.title")}
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant="outline"
              className={`${
                category.key === "all" 
                  ? "bg-[#084b25] text-white border-[#084b25] hover:bg-[#06391d] hover:border-[#06391d]" 
                  : "border-gray-300 text-gray-700 hover:border-[#084b25] hover:text-[#084b25] hover:bg-[#084b25]/5"
              } px-6 py-2 font-medium transition-all duration-200`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#084b25] mb-8">{t("blog.featured.title")}</h2>
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-80 md:h-full">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-[#084b25] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {t("blog.featured.badge")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                      <Tag className="h-4 w-4 text-[#084b25]" />
                      <span className="font-medium">{featuredPost.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#084b25]" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('uz-UZ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#084b25]" />
                      <span>{featuredPost.readTime.replace('daqiqa', t("blog.read.time"))}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#084b25] rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{featuredPost.author}</span>
                    </div>
                    <Button className="bg-[#084b25] hover:bg-[#06391d] text-white px-6 py-3 font-semibold">
                      {t("blog.read")} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#084b25] mb-8">{t("blog.all.articles")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border-0 bg-white">
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-[#084b25] px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-[#084b25]" />
                      <span className="font-medium">{new Date(post.date).toLocaleDateString('uz-UZ')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-[#084b25]" />
                      <span className="font-medium">{post.readTime.replace('daqiqa', t("blog.read.time"))}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-gray-600" />
                      </div>
                      <span className="text-xs text-gray-600 font-medium">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#084b25] hover:text-white hover:bg-[#084b25] px-3 py-1 font-medium">
                      {t("blog.read")} <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mb-16">
          <Button variant="outline" className="border-2 border-[#084b25] text-[#084b25] hover:bg-[#084b25] hover:text-white px-8 py-3 font-semibold transition-all duration-300">
            {t("blog.load.more")}
          </Button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-[#084b25] to-[#0a5c2e] text-white border-0 shadow-2xl">
            <CardContent className="p-10 text-center">
              <h3 className="text-3xl font-bold mb-4">{t("blog.newsletter.title")}</h3>
              <p className="mb-8 opacity-90 text-lg max-w-2xl mx-auto">
                {t("blog.newsletter.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder={t("blog.newsletter.placeholder")}
                  className="flex-1 px-6 py-4 rounded-lg text-gray-800 bg-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 border-0 text-base shadow-sm"
                />
                <Button className="bg-white text-[#084b25] hover:bg-gray-50 hover:text-[#06391d] px-8 py-4 font-semibold text-base rounded-lg shadow-sm transition-all duration-300">
                  {t("blog.newsletter.subscribe")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}