"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import mainSection1 from "/safi-banner1.jpg"
import mainSection2 from "safi-banner2.jpg"
import mainSection3 from "safi-banner3.jpg"
import Image from "next/image"


export function MainContent() {
  const { t } = useLanguage()

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left side - Bedding image */}
          <div className="relative h-[400px] md:h-[425px] rounded-lg overflow-hidden">
            <Image
              src={mainSection1}
              alt="Luxury hotel bedding"
              className="w-full h-full object-cover brightness-50"
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
              <div className="relative h-[180px] md:h-[200px] rounded-lg overflow-hidden">
                <Image
                  src={mainSection2}
                  alt="Luxury Accessories"
                  className="w-full h-full object-cover brightness-50"
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
              <div className="bg-white rounded-lg flex flex-col justify-center  h-[180px] md:h-[200px]">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 text-center">
                  {t("loginOrRegister")}
                </h2>
                <p className="text-gray-600 text-center mb-4 text-xs md:text-sm leading-tight">
                  {t("loginDescription")}
                </p>
                <div className="flex flex-col gap-2">
                  <Button className="bg-[#084b25] hover:bg-[#06391d] text-white w-full text-xs md:text-sm py-2">
                    {t("alreadyCustomer")}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#084b25] text-[#06391d] hover:bg-[#06391d] hover:text-white w-full text-xs md:text-sm py-2"
                  >
                    {t("newHereRegister")}
                  </Button>
                </div>
              </div>
            </div>
            {/* Mini Fridges section */}
            <div className="relative h-[180px] md:h-[200px] rounded-lg overflow-hidden">
              <Image src={mainSection3} alt="Mini Fridges" className="w-full h-full object-cover brightness-50" />
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
