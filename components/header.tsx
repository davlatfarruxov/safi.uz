"use client"

import { useState } from "react"
import { Search, Heart, Bell, ShoppingCart, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { MegaDropdown } from "./mega-dropdown"
import { useLanguage } from "@/lib/language-context"
import { useWishlist } from "@/lib/wishlist-context"
import { LanguageSwitcher } from "./language-switcher"
import mainLogo from "../public/safi-logo.png"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { t } = useLanguage()
  const { wishlistCount } = useWishlist()

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top section with logo, search, and actions */}
      <div className="container mx-auto px-4">
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
                {/* Leaf icon placeholder */}
                
                <div>
                  <Image className="h-20 w-30" src={mainLogo} alt="logo" />
                </div>
              </div>
            </div>
          </Link>

          {/* Search bar */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-4 xl:mx-8">
            <div className="relative w-full">
              <Input type="search" placeholder={t("search")} className="w-full pr-10 border-gray-300" />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                <Search className="h-5 w-5 text-gray-400" />
              </Button>
            </div>
          </div>

          {/* Mobile search button */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Search className="h-5 w-5" />
          </Button>

          {/* Right actions */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* User dropdown - hidden on mobile */}
            <Button variant="ghost" className="hidden xl:flex items-center gap-1 text-sm">
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500">{t("hello")}</span>
                <span className="font-medium">{t("log.in")}</span>
              </div>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>

            {/* Wishlist - hidden on small screens */}
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="hidden sm:flex relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative hidden sm:flex">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 bg-[#7B6B8F] text-white text-xs rounded-full h-3 w-3 flex items-center justify-center text-[8px]">
                0
              </span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Top navigation links */}
        <div className="hidden lg:flex items-center justify-end gap-4 xl:gap-6 pb-3 text-sm">
          <LanguageSwitcher />
          <Link href="/about" className="text-gray-700 hover:text-[#7B6B8F] transition-colors">
            {t("about.us")}
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-[#7B6B8F] transition-colors">
            {t("blog")}
          </Link>
          {/* <Link href="/delivery" className="text-gray-700 hover:text-[#7B6B8F] transition-colors">
            {t("delivery")}
          </Link> */}
          <Link href="/contact" className="text-gray-700 hover:text-[#7B6B8F] transition-colors">
            {t("contact")}
          </Link>
        </div>

        {/* Mobile search bar */}
        <div className="lg:hidden mt-3 pb-3">
          <div className="relative w-full">
            <Input type="search" placeholder={t("search")} className="w-full pr-10 border-gray-300" />
            <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
              <Search className="h-5 w-5 text-gray-400" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-t border-gray-200 relative">
        <div className="container mx-auto px-4">
          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 py-3 text-sm overflow-x-auto">
            <Link href="/new" className="text-gray-700 hover:text-[#7B6B8F] font-medium whitespace-nowrap transition-colors">
              {t("new")}
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("bathroom")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/bathroom" className="text-gray-700 hover:text-[#7B6B8F] flex items-center gap-1 whitespace-nowrap transition-colors">
                {t("bathroom")} <ChevronDown className="h-3 w-3" />
              </Link>
              {activeDropdown === "bathroom" && <MegaDropdown category="bathroom" />}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("bedroom")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/bedroom" className="text-gray-700 hover:text-[#7B6B8F] flex items-center gap-1 whitespace-nowrap transition-colors">
                {t("bedroom")} <ChevronDown className="h-3 w-3" />
              </Link>
              {activeDropdown === "bedroom" && <MegaDropdown category="bedroom" />}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("toiletries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/toiletries" className="text-gray-700 hover:text-[#7B6B8F] flex items-center gap-1 whitespace-nowrap transition-colors">
                {t("toiletries")} <ChevronDown className="h-3 w-3" />
              </Link>
              {activeDropdown === "toiletries" && <MegaDropdown category="toiletries" />}
            </div>
            <Link href="/hotel-guest-amenities" className="text-gray-700 hover:text-[#7B6B8F] flex items-center gap-1 whitespace-nowrap transition-colors">
              {t("hotel.guest.amenities")} <ChevronDown className="h-3 w-3" />
            </Link>
            <Link href="/childrens-amenities" className="text-gray-700 hover:text-[#7B6B8F] whitespace-nowrap transition-colors">
              {t("childrens.amenities")}
            </Link>
            <Link href="/pet-friendly" className="text-gray-700 hover:text-[#7B6B8F] whitespace-nowrap transition-colors">
              {t("pet.friendly")}
            </Link>
            <Link href="/eco-friendly" className="text-gray-700 hover:text-[#7B6B8F] flex items-center gap-1 whitespace-nowrap transition-colors">
              {t("eco.friendly.products")} <ChevronDown className="h-3 w-3" />
            </Link>
            <Link href="/brands" className="text-gray-700 hover:text-[#7B6B8F] flex items-center gap-1 whitespace-nowrap transition-colors">
              {t("brands")} <ChevronDown className="h-3 w-3" />
            </Link>
            <Link href="/clearance" className="text-gray-700 hover:text-[#7B6B8F] whitespace-nowrap transition-colors">
              {t("clearance")}
            </Link>
          </nav>

          {/* Mobile navigation menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
              <nav className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  <Link href="/new" className="text-gray-700 hover:text-[#7B6B8F] font-medium py-2">
                    {t("new")}
                  </Link>
                  <Link href="/bathroom" className="text-gray-700 hover:text-[#7B6B8F] py-2">
                    {t("bathroom")}
                  </Link>
                  <Link href="/bedroom" className="text-gray-700 hover:text-[#7B6B8F] py-2">
                    {t("bedroom")}
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
                  <Link href="/brands" className="text-gray-700 hover:text-[#7B6B8F] py-2">
                    {t("brands")}
                  </Link>
                  <Link href="/clearance" className="text-gray-700 hover:text-[#7B6B8F] py-2">
                    {t("clearance")}
                  </Link>
                  
                  {/* Mobile-only links */}
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <LanguageSwitcher />
                    <Link href="/about" className="text-gray-700 hover:text-[#7B6B8F] py-2 block mt-2">
                      {t("about.us")}
                    </Link>
                    <Link href="/blog" className="text-gray-700 hover:text-[#7B6B8F] py-2 block">
                      {t("blog")}
                    </Link>
                    {/* <Link href="/delivery" className="text-gray-700 hover:text-[#7B6B8F] py-2 block">
                      {t("delivery")}
                    </Link> */}
                    <Link href="/contact" className="text-gray-700 hover:text-[#7B6B8F] py-2 block">
                      {t("contact")}
                    </Link>
                    <Link href="/wishlist" className="text-gray-700 hover:text-[#7B6B8F] py-2 block">
                      Wishlist
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
