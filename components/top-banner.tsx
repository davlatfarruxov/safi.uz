"use client"

import { Package } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"

export function TopBanner() {
  const { t } = useLanguage()

  return (
    <div className="bg-[#084b25] text-white py-2 md:py-2.5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs md:text-sm">
          <div className="flex items-center gap-2 order-2 sm:order-1">
            <Package className="h-3 w-3 md:h-4 md:w-4" />
            <p className="text-center sm:text-left">{t("free.delivery")}</p>
          </div>
          <div className="flex items-center gap-3 md:gap-6 order-1 sm:order-2">
            {/* <LanguageSwitcher /> */}
            <a href="tel:+998918888080"><span className="hidden sm:inline">+998 918888080</span></a>
            <span className="hidden lg:inline">info@safihotelcollection.uz</span>
          </div>
        </div>
      </div>
    </div>
  )
}
