"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function CustomerReviews() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const reviews = [
    {
      name: "Beatrice",
      rating: 4,
      location: "London, GB",
      timeAgo: "1 month ago",
      review: "The spa is comfortable and comes with a soft towelling bathrobe.",
      verified: true
    },
    {
      name: "Magda",
      rating: 5,
      location: "Palmer Green, United Kingdom",
      timeAgo: "1 month ago",
      review: "Beautiful quality and a great price. They really do add a bit of luxury to the mundane task of drying your hands.",
      verified: true
    },
    {
      name: "Peter",
      rating: 5,
      location: "Manchester, GB",
      timeAgo: "1 month ago",
      review: "Amazing Range of Products",
      verified: true
    },
    {
      name: "Ian",
      rating: 5,
      location: "Leeds, GB",
      timeAgo: "2 months ago",
      review: "Great based products used them for years now",
      verified: true
    }
  ]

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [reviews.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const overallRating = 4.84
  const totalReviews = 170

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Overall Rating */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t("excellent")}</h3>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">{overallRating}</span> average
              </p>
              <p className="text-xs text-gray-500">
                {totalReviews} reviews
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-50"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-50"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Review Cards */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 max-w-2xl mx-auto">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 font-semibold text-lg">
                          {review.name.charAt(0)}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, starIndex) => (
                              <Star
                                key={starIndex}
                                className={`w-4 h-4 ${
                                  starIndex < review.rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {review.verified && (
                          <div className="flex items-center gap-1 mb-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-green-600 font-medium">Verified Customer</span>
                          </div>
                        )}

                        <p className="text-gray-700 mb-3 leading-relaxed">{review.review}</p>

                        <div className="text-xs text-gray-500">
                          {review.location} • {review.timeAgo}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-gray-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}