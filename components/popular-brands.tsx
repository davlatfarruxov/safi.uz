"use client"

import { useLanguage } from "@/lib/language-context"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function PopularBrands() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const brands = [
    { name: "NORTHMACE", logo: "NORTHMACE" },
    { name: "Bentley", logo: "Bentley" },
    { name: "ANYAH", logo: "ANYAH" },
    { name: "PRIJA", logo: "PRIJA" },
    { name: "Valera", logo: "Valera" },
    { name: "SAFI", logo: "SAFI" },
  ]

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with navigation arrows */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("popular.brands")}
          </h2>
          
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`bg-white rounded-lg p-6 md:p-8 flex items-center justify-center hover:shadow-md transition-all duration-300 border border-gray-200 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-lg md:text-xl font-semibold text-gray-700 tracking-wide">
                  {brand.logo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}