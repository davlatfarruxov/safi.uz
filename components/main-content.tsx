"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function MainContent() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
                <Button className="bg-[#084b25] hover:bg-[#06391d] text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium">
                  {t("shopBedding")}
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Mini Fridges, Luxury Accessories, and Login */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Bottom row - Luxury Accessories and Login */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Luxury Accessories section */}
              <div className="relative h-[180px] md:h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/safi-banner2.JPG"
                  alt="Luxury Accessories"
                  fill
                  className={`object-cover brightness-50 transition-transform duration-1000 ease-out delay-200 ${
                    isVisible ? 'scale-100' : 'scale-110'
                  }`}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0  bg-opacity-30 flex flex-col items-center justify-center p-4">
                  <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 text-center">
                    {t("luxuryAccessories")}
                  </h2>
                  <Button className="bg-[#084b25] hover:bg-[#06391d] text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium">
                    {t("shopRoomAccessories")}
                  </Button>
                </div>
              </div>

              {/* Login or Register section */}
              <div className="bg-gradient-to-br from-[#084b25] to-[#06391d] rounded-lg flex flex-col justify-center h-[200px] md:h-[250px] p-4 shadow-lg border-2 border-[#084b25]">
                <h2 className="text-lg md:text-xl font-bold text-white mb-2 text-center">
                  {t("loginOrRegister")}
                </h2>
                <p className="text-green-100 text-center mb-4 text-xs md:text-sm leading-tight">
                  {t("loginDescription")}
                </p>
                <div className="flex flex-col gap-2">
                  <Button className="bg-white text-[#084b25] hover:bg-green-50 hover:text-[#06391d] w-full text-xs md:text-sm py-2 font-semibold border-2 border-white">
                    {t("alreadyCustomer")}
                  </Button>
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#084b25] w-full text-xs md:text-sm py-2 font-semibold">
                    {t("newHereRegister")}
                  </Button>
                </div>
              </div>
            </div>
            {/* Mini Fridges section */}
            <div className="relative h-[180px] md:h-[250px] rounded-lg overflow-hidden">
              <Image
                src="/safi-banner3.JPG"
                alt="Mini Fridges"
                fill
                className={`object-cover brightness-50 transition-transform duration-1000 ease-out delay-400 ${
                  isVisible ? 'scale-100' : 'scale-110'
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0  bg-opacity-30 flex flex-col items-center justify-center p-4 md:p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 text-center">
                  {t("miniFridges")}
                </h2>
                <Button className="bg-[#084b25] hover:bg-[#06391d] text-white px-4 md:px-6 py-2 text-xs md:text-sm font-medium">
                  {t("shopMinibars")}
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
