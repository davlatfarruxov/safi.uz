"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, Users, Clock, Globe, ArrowRight, CheckCircle, Bed, Droplets, Armchair, UtensilsCrossed, Sparkles, Gift } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  const { t } = useLanguage()
  const parallaxRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${rate}px)`
      }

      if (heroRef.current) {
        const heroRate = scrolled * 0.3
        heroRef.current.style.transform = `translateY(${heroRate}px)`
      }

      if (statsRef.current) {
        const statsRate = scrolled * -0.2
        statsRef.current.style.transform = `translateY(${statsRate}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stats = [
    {
      number: "A+",
      label: t("about.stats.quality") || "Premium Quality",
      icon: Award
    },
    {
      number: "30%",
      label: t("about.stats.savings") || "Cost Savings",
      icon: Clock
    },
    {
      number: "24/7",
      label: t("about.stats.support") || "Customer Support",
      icon: Users
    },
    {
      number: "100%",
      label: t("about.stats.satisfaction") || "Quality Guarantee",
      icon: Globe
    }
  ]

  const services = [
    {
      title: t("about.services.bedding") || "Premium Bedding",
      description: t("about.services.bedding.desc") || "High-quality bed linens, pillows, and mattress protectors",
      icon: Bed
    },
    {
      title: t("about.services.toiletries") || "Hygiene Products",
      description: t("about.services.toiletries.desc") || "Complete range of toiletries and personal care items",
      icon: Droplets
    },
    {
      title: t("about.services.furniture") || "Hotel Furniture",
      description: t("about.services.furniture.desc") || "Elegant and durable furniture solutions for hospitality",
      icon: Armchair
    },
    {
      title: t("about.services.tableware") || "Tableware & Dinnerware",
      description: t("about.services.tableware.desc") || "Professional-grade dishes, glassware, and cutlery",
      icon: UtensilsCrossed
    },
    {
      title: t("about.services.cleaning") || "Cleaning Products",
      description: t("about.services.cleaning.desc") || "Eco-friendly cleaning solutions for hospitality industry",
      icon: Sparkles
    },
    {
      title: t("about.services.amenities") || "Guest Amenities",
      description: t("about.services.amenities.desc") || "Complete amenity packages for exceptional guest experience",
      icon: Gift
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 z-0"
        >
          <Image
            src="vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg"
            alt="Safi Hotel Collection - About Us"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div
          ref={heroRef}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t("about.hero.title") || "Biz Haqimizda"}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {t("about.hero.subtitle") || "Mehmonxonalar va dam olish maskanlari uchun yuqori sifatli va arzon narxdagi mahsulotlar yetkazib beramiz"}
          </p>
          {/* <Button 
            size="lg" 
            className="bg-[#084b25] hover:bg-[#06391d] text-white px-8 py-4 text-lg"
          >
            {t("about.hero.cta") || "Bizning Xizmatlar"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button> */}
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t("about.story.title") || "Bizning Hikoyamiz"}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t("about.story.p1") || "Safi Hotel Collection - O'zbekiston va Markaziy Osiyoda yangi tashkil etilgan, ammo juda istiqbolli mehmonxona jihozlari yetkazib beruvchisi. Biz mehmonxonalar, sanatoriyalar va dam olish maskanlariga eng yuqori sifatli mahsulotlarni eng arzon narxlarda taqdim etishga ixtisoslashganmiz."}
                </p>
                <p>
                  {t("about.story.p2") || "Bizning maqsadimiz - har bir mijozga mukammal xizmat ko'rsatish va ularning mehmonlariga unutilmas tajriba yaratishda yordam berish. Biz faqat eng yaxshi brendlar va ishonchli yetkazib beruvchilar bilan hamkorlik qilamiz."}
                </p>
                <p>
                  {t("about.story.p3") || "Bizning maqsadimiz - har bir mijozga eng sifatli mahsulotlarni eng qulay narxlarda taqdim etish. Zamonaviy texnologiyalar va to'g'ridan-to'g'ri yetkazib beruvchilar bilan hamkorlik qilish orqali biz mijozlarimizga 30% gacha tejash imkoniyatini taqdim etamiz."}
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="safi-banner1.JPG"
                alt="Safi Hotel Collection Office"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-[#084b25] text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">{t("about.experience") || "Yillik Tajriba"}</div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics with Parallax */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div
          ref={statsRef}
          className="absolute inset-0 opacity-10"
        >
          <Image
            src="sas"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("about.stats.title") || "Bizning Yutuqlarimiz"}
            </h2>
            <p className="text-xl text-gray-600">
              {t("about.stats.subtitle") || "Raqamlar orqali bizning muvaffaqiyatimiz"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow bg-white">
                <stat.icon className="h-12 w-12 text-[#084b25] mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("about.services.title") || "Bizning Xizmatlarimiz"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.services.subtitle") || "Mehmonxonalar va dam olish maskanlari uchun to'liq yechimlar taqdim etamiz"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-105 bg-white border border-gray-200">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-[#084b25] rounded-full">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* Mission & Values */}
      <section className="py-20 bg-[#084b25] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="visualsofdana-T5pL6ciEn-I-unsplash.jpg"
            alt="Mission Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                {t("about.mission.title") || "Bizning Missiyamiz"}
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                {t("about.mission.text") || "Biz mehmonxona va turizm sohasida faoliyat yurituvchi korxonalarga eng yuqori sifatli mahsulotlar va professional xizmatlar taqdim etish orqali ularning muvaffaqiyatiga hissa qo'shamiz. Bizning maqsadimiz - har bir mijozning mehmonlariga unutilmas va qulay yashash tajribasini yaratishda yordam berish."}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-lg">{t("about.values.quality") || "Yuqori sifat kafolati"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-lg">{t("about.values.service") || "Professional xizmat"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-lg">{t("about.values.innovation") || "Innovatsion yechimlar"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-lg">{t("about.values.partnership") || "Uzoq muddatli hamkorlik"}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="campaign-creators-gMsnXqILjp4-unsplash.jpg"
                alt="Our Team"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t("about.cta.title") || "Bizning Jamoamiz Bilan Tanishing"}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("about.cta.subtitle") || "Sizning loyihangiz uchun eng yaxshi yechimlarni topishda yordam beramiz"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#084b25] hover:bg-[#06391d] text-white px-8 py-4 w-full sm:w-auto"
              >
                {t("contact") || "Bog'lanish"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/bathroom">
              <Button
                size="lg"
                variant="outline"
                className="border-[#084b25] text-[#084b25] hover:bg-[#084b25] hover:text-white px-8 py-4 w-full sm:w-auto"
              >
                {t("about.cta.catalog") || "Katalog Ko'rish"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}