"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function WelcomeSection() {
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

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <div className={`relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden transition-transform duration-1000 ease-out ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}>
            <Image
              src="/safi-banner1.JPG"
              alt="Safi Hotel Collection - Luxury Hotel Experience"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right side - Content */}
          <div className={`transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t("welcome.title")}
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed">
              <p className="text-base md:text-lg">
                {t("welcome.description.1")}
              </p>
              
              <p className="text-base md:text-lg">
                {t("welcome.description.2")}
              </p>
              
              <div className="pt-4">
                <p className="text-sm md:text-base font-medium text-gray-700 mb-6">
                  {t("welcome.signature")}
                </p>
                
                <Button className="bg-[#084b25] hover:bg-[#553C9A] text-white px-6 md:px-8 py-3 text-sm md:text-base font-semibold">
                  {t("discover.our.story")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}