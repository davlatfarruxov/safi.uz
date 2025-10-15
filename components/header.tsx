"use client"

import { useState } from "react"
import { Search, Heart, Bell, ShoppingCart, ChevronDown, Menu, X, Instagram, Youtube, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { MegaDropdown } from "./mega-dropdown"
import { useLanguage } from "@/lib/language-context"
import { useWishlist } from "@/lib/wishlist-context"
import { LanguageSwitcher } from "./language-switcher"
import Image from "next/image"

interface HeaderProps {
  showMainNavigation?: boolean
}

export function Header({ showMainNavigation = true }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { t } = useLanguage()
  const { wishlistCount } = useWishlist()

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 scrollbar-hide" style={{overflow: 'visible', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
      {/* Top section with logo, search, and actions */}
      <div className="max-w-full mx-auto px-6">
        <div className="flex items-center justify-between py-3 md:py-4 gap-2 md:gap-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 md:gap-2">
                <div>
                  <Image
                    className="h-20 w-30"
                    src="/safi-logo.png"
                    alt="Safi Hotel Collection"
                    width={120}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Mobile search button */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Search className="h-5 w-5" />
          </Button>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Search bar - moved before login button and made even longer */}
            <div className="hidden lg:flex flex-1 max-w-2xl">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder={t("search")}
                  className="w-full h-12 pr-12 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:border-gray-400 transition-colors min-w-[500px]"
                />
                <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full w-12 hover:bg-transparent">
                  <Search className="h-5 w-5 text-gray-500" />
                </Button>
              </div>
            </div>

            {/* User dropdown - hidden on mobile */}
            <Button
              variant="ghost"
              className="hidden xl:flex items-center gap-2 text-sm h-12 px-4 border border-gray-300 rounded-md bg-gray-50 hover:bg-white hover:border-gray-400 transition-colors min-w-[120px]"
            >
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500">{t("hello")}</span>
                <span className="font-medium text-gray-700">{t("log.in")}</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </Button>

            {/* Wishlist - hidden on small screens */}
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="hidden sm:flex relative hover:bg-green-50 hover:text-[#084b25] transition-all duration-300 hover:scale-110">
                <Heart className="h-20 w-20" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center text-[10px]">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative hidden sm:flex hover:bg-green-50 hover:text-[#084b25] transition-all duration-300 hover:scale-110">
              <Bell className="w-[200px] h-[200px]" />
              <span className="absolute top-0 right-0 bg-[#084b25] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[8px]">
                0
              </span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="hover:bg-green-50 hover:text-[#084b25] transition-all duration-300 hover:scale-110">
              <ShoppingCart className="h-20 w-20" />
            </Button>
          </div>
        </div>

        {/* Top navigation links */}
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 pb-3 text-base font-bold scrollbar-hide px-4" style={{overflow: 'visible', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          <Link href="/" className="text-gray-800 hover:text-[#084b25] transition-all duration-300 hover:scale-105 px-2 py-1">
            {t("main")}
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-[#084b25] transition-all duration-300 hover:scale-105 px-2 py-1">
            {t("about.us")}
          </Link>

          <Link href="/products" className="text-gray-800 hover:text-[#084b25] transition-all duration-300 hover:scale-105 px-2 py-1">
            {t("products")}
          </Link>
          <Link href="/for-partners" className="text-gray-800 hover:text-[#084b25] transition-all duration-300 hover:scale-105 px-2 py-1">
            {t("for.partners")}
          </Link>
          <Link href="/blog" className="text-gray-800 hover:text-[#084b25] transition-all duration-300 hover:scale-105 px-2 py-1">
            {t("blog")}
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-[#084b25] transition-all duration-300 hover:scale-105 px-2 py-1">
            {t("contact")}
          </Link>
          <LanguageSwitcher />
          {/* Social Media Icons */}
          <div className="flex items-center gap-4 ml-6">
            <a href="https://instagram.com/safihotelcollection" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#084b25] transition-all duration-300 hover:scale-110">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://t.me/safihotelcollection" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#084b25] transition-all duration-300 hover:scale-110">
              <Send className="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@safihotelcollection" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#084b25] transition-all duration-300 hover:scale-110">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="lg:hidden mt-3 pb-3">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder={t("search")}
              className="w-full h-12 pr-12 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:border-gray-400 transition-colors"
            />
            <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full w-12 hover:bg-transparent">
              <Search className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      {showMainNavigation && (
        <div className="border-t border-gray-200 relative">
          <div className="max-w-full mx-auto px-6">
            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 py-4 text-base font-bold scrollbar-hide px-4" style={{overflow: 'visible', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("bathroom")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/bathroom" className="text-gray-800 hover:text-[#084b25] flex items-center gap-1 whitespace-nowrap transition-all duration-300 hover:scale-105 font-bold px-2 py-1">
                  {t("bathroom")} <ChevronDown className="h-4 w-4" />
                </Link>
                {activeDropdown === "bathroom" && <MegaDropdown category="bathroom" />}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("toiletries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/toiletries" className="text-gray-800 hover:text-[#084b25] flex items-center gap-1 whitespace-nowrap transition-all duration-300 hover:scale-105 font-bold px-2 py-1">
                  {t("toiletries")} <ChevronDown className="h-4 w-4" />
                </Link>
                {activeDropdown === "toiletries" && <MegaDropdown category="toiletries" />}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("amenities")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/hotel-guest-amenities" className="text-gray-800 hover:text-[#084b25] flex items-center gap-1 whitespace-nowrap transition-all duration-300 hover:scale-105 font-bold px-2 py-1">
                  {t("hotel.guest.amenities")} <ChevronDown className="h-4 w-4" />
                </Link>
                {activeDropdown === "amenities" && <MegaDropdown category="amenities" />}
              </div>
              <Link href="/childrens-amenities" className="text-gray-800 hover:text-[#084b25] whitespace-nowrap transition-all duration-300 hover:scale-105 font-bold px-2 py-1">
                {t("childrens.amenities")}
              </Link>
              <Link href="/pet-friendly" className="text-gray-800 hover:text-[#084b25] whitespace-nowrap transition-all duration-300 hover:scale-105 font-bold px-2 py-1">
                {t("pet.friendly")}
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("eco")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/eco-friendly" className="text-gray-800 hover:text-[#084b25] flex items-center gap-1 whitespace-nowrap transition-all duration-300 hover:scale-105 font-bold px-2 py-1">
                  {t("eco.friendly.products")} <ChevronDown className="h-4 w-4" />
                </Link>
                {activeDropdown === "eco" && <MegaDropdown category="eco" />}
              </div>
            </nav>

            {/* Mobile navigation menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
                <nav className="max-w-7xl mx-auto px-4 py-4">
                  <div className="flex flex-col space-y-4">
                    <Link href="/bathroom" className="text-gray-700 hover:text-[#7B6B8F] py-2">
                      {t("bathroom")}
                    </Link>
                    <Link href="/toiletries" className="text-gray-700 hover:text-[#7B6B8F] py-2">
                      {t("toiletries")}
                    </Link>
                    <Link href="/hotel-guest-amenities" className="text-gray-700 hover:text-[#7B6B8F] py-2">
                      {t("hotel.guest.amenities")}
                    </Link>
                    <Link href="/childrens-amenities" className="text-gray-700 hover:text-[#7B6B8F] py-2">
                      {t("childrens.amenities")}
                    </Link>
                    <Link href="/pet-friendly" className="text-gray-700 hover:text-[#7B6B8F] py-2">
                      {t("pet.friendly")}
                    </Link>
                    <Link href="/eco-friendly" className="text-gray-700 hover:text-[#7B6B8F] py-2">
                      {t("eco.friendly.products")}
                    </Link>

                    {/* Mobile-only links */}
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <Link href="/" className="text-gray-700 hover:text-[#7B6B8F] py-2 block">
                        {t("main")}
                      </Link>
                      <Link href="/about" className="text-gray-700 hover:text-[#7B6B8F] py-2 block">
                        {t("about.us")}
                      </Link>
                      <Link href="/factory" className="text-gray-700 hover:text-[#7B6B8F] py-2 block">
                        {t("factory")}
                      </Link>
                      <Link href="/products" className="text-gray-700 hover:text-[#7B6B8F] py-2 block">
                        {t("products")}
                      </Link>
                      <Link href="/for-partners" className="text-gray-700 hover:text-[#7B6B8F] py-2 block">
                        {t("for.partners")}
                      </Link>
                      <Link href="/blog" className="text-gray-700 hover:text-[#7B6B8F] py-2 block">
                        {t("blog")}
                      </Link>
                      <Link href="/contact" className="text-gray-700 hover:text-[#7B6B8F] py-2 block">
                        {t("contact")}
                      </Link>
                      <Link href="/wishlist" className="text-gray-700 hover:text-[#7B6B8F] py-2 block">
                        Wishlist
                      </Link>

                      {/* Language Switcher for Mobile */}
                      <div className="mt-4">
                        <LanguageSwitcher />
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}