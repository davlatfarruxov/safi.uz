"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

export function DetailedReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { language, t } = useLanguage()

  const rating = 4.84
  const totalReviews = 170
  const maxStars = 5

  const reviewsData = {
    en: [
      {
        name: "Aziza K.",
        rating: 5,
        text: "Premium Hotel Slippers - 28cm (Case of 100)",
        subtitle: "Perfect for our boutique hotel in Tashkent. Guests love the quality!",
        verified: true,
        location: "Tashkent, UZ",
        timeAgo: "2 weeks ago"
      },
      {
        name: "Bobur M.",
        rating: 5,
        text: "Luxury Bathrobes Collection - Premium Cotton",
        subtitle: "Outstanding quality! Our 5-star hotel guests are very satisfied.",
        verified: true,
        location: "Samarkand, UZ",
        timeAgo: "3 weeks ago"
      },
      {
        name: "Dilnoza S.",
        rating: 5,
        text: "Natural Shampoo & Conditioner Dispensers (Set of 16)",
        subtitle: "Excellent eco-friendly solution for our spa resort in Bukhara.",
        verified: true,
        location: "Bukhara, UZ",
        timeAgo: "1 month ago"
      },
      {
        name: "Farrux T.",
        rating: 5,
        text: "Hotel Towel Set - Premium Egyptian Cotton",
        subtitle: "Fast delivery to Fergana. Quality exceeds expectations!",
        verified: true,
        location: "Fergana, UZ",
        timeAgo: "1 month ago"
      },
      {
        name: "Malika A.",
        rating: 5,
        text: "Geneva Green Dispensers - Sustainable Collection",
        subtitle: "Perfect for our eco-hotel concept. Guests appreciate the green approach.",
        verified: true,
        location: "Nukus, UZ",
        timeAgo: "2 months ago"
      },
      {
        name: "Jasur R.",
        rating: 5,
        text: "Complete Bathroom Amenities Package",
        subtitle: "Everything we needed for our new hotel opening. Professional service!",
        verified: true,
        location: "Andijan, UZ",
        timeAgo: "2 months ago"
      }
    ],
    uz: [
      {
        name: "Aziza K.",
        rating: 5,
        text: "Premium mehmonxona shippaklar - 28sm (100 dona)",
        subtitle: "Toshdagi butik mehmonxonamiz uchun mukammal. Mehmonlar sifatni yaxshi ko'radilar!",
        verified: true,
        location: "Toshkent, O'zbekiston",
        timeAgo: "2 hafta oldin"
      },
      {
        name: "Bobur M.",
        rating: 5,
        text: "Hashamatli xalatlar kolleksiyasi - Premium paxta",
        subtitle: "Ajoyib sifat! 5 yulduzli mehmonxonamiz mehmonlari juda mamnun.",
        verified: true,
        location: "Samarqand, O'zbekiston",
        timeAgo: "3 hafta oldin"
      },
      {
        name: "Dilnoza S.",
        rating: 5,
        text: "Tabiiy shampun va konditsioner dozatorlari (16 dona to'plam)",
        subtitle: "Buxorodagi spa kurortimiz uchun ajoyib ekologik yechim.",
        verified: true,
        location: "Buxoro, O'zbekiston",
        timeAgo: "1 oy oldin"
      },
      {
        name: "Farrux T.",
        rating: 5,
        text: "Mehmonxona sochiqlar to'plami - Premium Misr paxtasi",
        subtitle: "Farg'onaga tez yetkazib berish. Sifat kutganimizdan ham yaxshi!",
        verified: true,
        location: "Farg'ona, O'zbekiston",
        timeAgo: "1 oy oldin"
      },
      {
        name: "Malika A.",
        rating: 5,
        text: "Geneva Green dozatorlar - Barqaror kolleksiya",
        subtitle: "Eko-mehmonxona kontseptsiyamiz uchun mukammal. Mehmonlar yashil yondashuvni qadrlaydilar.",
        verified: true,
        location: "Nukus, O'zbekiston",
        timeAgo: "2 oy oldin"
      },
      {
        name: "Jasur R.",
        rating: 5,
        text: "To'liq hammom jihozlari paketi",
        subtitle: "Yangi mehmonxona ochish uchun kerak bo'lgan hamma narsa. Professional xizmat!",
        verified: true,
        location: "Andijon, O'zbekiston",
        timeAgo: "2 oy oldin"
      }
    ],
    ru: [
      {
        name: "Азиза К.",
        rating: 5,
        text: "Премиум тапочки для отеля - 28см (упаковка 100 шт)",
        subtitle: "Идеально для нашего бутик-отеля в Ташкенте. Гости в восторге от качества!",
        verified: true,
        location: "Ташкент, Узбекистан",
        timeAgo: "2 недели назад"
      },
      {
        name: "Бобур М.",
        rating: 5,
        text: "Коллекция роскошных халатов - Премиум хлопок",
        subtitle: "Превосходное качество! Гости нашего 5-звездочного отеля очень довольны.",
        verified: true,
        location: "Самарканд, Узбекистан",
        timeAgo: "3 недели назад"
      },
      {
        name: "Дильноза С.",
        rating: 5,
        text: "Натуральные дозаторы шампуня и кондиционера (набор 16 шт)",
        subtitle: "Отличное экологичное решение для нашего спа-курорта в Бухаре.",
        verified: true,
        location: "Бухара, Узбекистан",
        timeAgo: "1 месяц назад"
      },
      {
        name: "Фаррух Т.",
        rating: 5,
        text: "Набор полотенец для отеля - Премиум египетский хлопок",
        subtitle: "Быстрая доставка в Фергану. Качество превосходит ожидания!",
        verified: true,
        location: "Фергана, Узбекистан",
        timeAgo: "1 месяц назад"
      },
      {
        name: "Малика А.",
        rating: 5,
        text: "Дозаторы Geneva Green - Устойчивая коллекция",
        subtitle: "Идеально для концепции нашего эко-отеля. Гости ценят зеленый подход.",
        verified: true,
        location: "Нукус, Узбекистан",
        timeAgo: "2 месяца назад"
      },
      {
        name: "Жасур Р.",
        rating: 5,
        text: "Полный комплект принадлежностей для ванной",
        subtitle: "Все, что нужно для открытия нашего нового отеля. Профессиональный сервис!",
        verified: true,
        location: "Андижан, Узбекистан",
        timeAgo: "2 месяца назад"
      }
    ]
  }

  const reviews = reviewsData[language] || reviewsData.en

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [reviews.length])

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  const getVisibleReviews = () => {
    const visibleCount = 4
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % reviews.length
      result.push(reviews[index])
    }
    return result
  }

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left side - Rating summary */}
          <div className="flex-shrink-0 text-center lg:text-left lg:w-64">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("excellent")}</h2>
            <div className="flex items-center justify-center lg:justify-start gap-1 mb-2">
              {[...Array(maxStars)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5 ${index < Math.floor(rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                    }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 font-medium">{rating} average</p>
            <p className="text-sm text-gray-500">{totalReviews} reviews</p>
          </div>

          {/* Right side - Reviews grid */}
          <div className="flex-1 relative">
            <div className="flex items-center gap-4">
              <button
                onClick={prevReview}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex-shrink-0 z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex-1 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {getVisibleReviews().map((review, index) => (
                    <div key={`${currentIndex}-${index}`} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-900">{review.name}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      {review.verified && (
                        <div className="flex items-center gap-1 mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                          <span className="text-xs text-green-600 font-medium">{t("verified.customer")}</span>
                        </div>
                      )}
                      <p className="text-sm text-gray-800 font-medium mb-1">{review.text}</p>
                      <p className="text-sm text-gray-600 mb-3">{review.subtitle}</p>
                      <p className="text-xs text-gray-500">{review.location}, {review.timeAgo}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={nextReview}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex-shrink-0 z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-gray-600" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}