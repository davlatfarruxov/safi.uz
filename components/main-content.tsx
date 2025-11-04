"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { NewProductsModal } from "./new-products-modal"

export function MainContent() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentEcoImage, setCurrentEcoImage] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  
  const ecoImages = ['/eko1.jpg', '/eko2.jpg', '/eko3.jpg']

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // EKO rasmlarini har 5 soniyada o'zgartirish
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEcoImage((prev) => (prev + 1) % ecoImages.length)
    }, 5000) // 5 soniya

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="pt-15 bg-gray-50">
      <div className="with-full mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left side - Bedding image */}
          <div className="relative h-[400px] md:h-[525px] rounded-lg overflow-hidden">
            <Image
              src="/safi-banner1.JPG"
              alt="Luxury hotel bedding"
              fill
              className={`object-cover brightness-50 transition-transform duration-1000 ease-out ${
                isVisible ? 'scale-100' : 'scale-110'
              }`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0  bg-opacity-30 flex items-center justify-start p-6 md:p-8 lg:p-12">
              <div className="max-w-xs md:max-w-md text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 md:mb-4">
                  {t("createFiveStar")}
                </h2>
                <p className="text-white text-sm md:text-base lg:text-lg mb-4 md:mb-6 leading-relaxed">
                  {t("luxuriousGuestAmenities")}
                </p>
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#084b25] hover:bg-[#06391d] text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium"
                >
                  {t("new.button")}
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - ECO (left full height) and 2 cards (right stacked) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Left column - ECO Concept full height with rotating images */}
            <div className="relative h-[400px] md:h-[525px] rounded-lg overflow-hidden">
              {ecoImages.map((imageSrc, index) => (
                <Image
                  key={imageSrc}
                  src={imageSrc}
                  alt={`ECO Concept ${index + 1}`}
                  fill
                  className={`object-cover brightness-50 transition-all duration-1000 ease-out ${
                    currentEcoImage === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority={index === 0}
                />
              ))}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 text-center">
                  {t("nav.eco.concept")}
                </h2>
                <Link href="/eco-concept">
                  <Button className="bg-[#084b25] hover:bg-[#06391d] text-white px-4 md:px-6 py-2 text-sm md:text-base font-medium">
                    {t("view.products") || "Посмотреть"}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right column - 2 cards stacked */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* 360° Virtual Tour - Top */}
              <div className="relative h-[190px] md:h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/safi-banner3.JPG"
                  alt="360° Virtual Tour"
                  fill
                  className={`object-cover brightness-50 transition-transform duration-1000 ease-out delay-300 ${
                    isVisible ? 'scale-100' : 'scale-110'
                  }`}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4">
                  <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 text-center">
                    360° Virtual Tour
                  </h2>
                  <a 
                    href="http://tour.safi-h.uz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium border border-white/30">
                      {t("open.tour") || "Открыть тур"}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Bedroom Zone - Bottom */}
              <div className="relative h-[190px] md:h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/safi-banner1.JPG"
                  alt="Bedroom Zone"
                  fill
                  className={`object-cover brightness-50 transition-transform duration-1000 ease-out delay-400 ${
                    isVisible ? 'scale-100' : 'scale-110'
                  }`}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4">
                  <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 text-center">
                    {t("nav.bedroom.zone")}
                  </h2>
                  <Link href="/guest-zone">
                    <Button className="bg-[#084b25] hover:bg-[#06391d] text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium">
                      {t("view")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Products Modal */}
      <NewProductsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}
