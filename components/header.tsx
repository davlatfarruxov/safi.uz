"use client"

import { useState, useEffect } from "react"
import { useSearchParams, usePathname } from "next/navigation"
import { Search, Heart, Bell, ShoppingCart, ChevronDown, Menu, X, Instagram, Youtube, MessageCircle, Send, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { MegaDropdown } from "./mega-dropdown"
import { useLanguage } from "@/lib/language-context"
import { useWishlist } from "@/lib/wishlist-context"
import { useCart } from "@/lib/cart-context"
import { LanguageSwitcher } from "./language-switcher"
import { DynamicHeaderNav } from "./dynamic-header-nav"
import Image from "next/image"
import { useCategories } from "@/hooks/useCategories"

interface HeaderProps {
  showMainNavigation?: boolean
}

export function Header({ showMainNavigation = true }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const { t, language } = useLanguage()
  const { wishlistCount } = useWishlist()
  const { cartCount } = useCart()
  const { categories, loading: categoriesLoading } = useCategories()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  // Update search query from URL when on search page
  useEffect(() => {
    if (pathname === "/search") {
      const query = searchParams.get("q")
      if (query) {
        setSearchQuery(query)
      }
    }
  }, [pathname, searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 scrollbar-hide" style={{ overflow: 'visible', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Top section with logo, search, and actions */}
      <div className="max-w-full mx-auto px-2 sm:px-4 md:px-6">
        <div className="flex items-center justify-between py-2 md:py-3 gap-1 sm:gap-2 md:gap-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-8 w-8 p-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 md:gap-2">
                <div>
                  <Image
                    className="h-10 w-auto sm:h-12 md:h-16 lg:h-20"
                    src="/navbar-logo.jpg"
                    alt="Safi Hotel Collection"
                    width={120}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            {/* Search bar - moved before login button and made even longer */}
            <div className="hidden lg:flex flex-1 max-w-2xl">
              <form onSubmit={handleSearch} className="relative w-full">
                <Input
                  type="search"
                  placeholder={t("search")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pr-12 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:border-gray-400 transition-colors min-w-[500px]"
                />
                <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full w-12 hover:bg-transparent">
                  <Search className="h-5 w-5 text-gray-500" />
                </Button>
              </form>
            </div>

            {/* User dropdown - hidden on mobile
            <Button
              variant="ghost"
              className="hidden xl:flex items-center gap-2 text-sm h-12 px-4 border border-gray-300 rounded-md bg-gray-50 hover:bg-white hover:border-gray-400 transition-colors min-w-[120px]"
            >
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500">{t("hello")}</span>
                <span className="font-medium text-gray-700">{t("log.in")}</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </Button> */}

            {/* Wishlist - visible on all screens */}
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="relative hover:bg-green-50 hover:text-[#084b25] transition-all duration-300 hover:scale-110 h-8 w-8 sm:h-10 sm:w-10 p-0">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-red-500 text-white rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 flex items-center justify-center text-[7px] sm:text-[8px] md:text-[10px]">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Notifications - visible on all screens */}
            <Button variant="ghost" size="icon" className="relative hover:bg-green-50 hover:text-[#084b25] transition-all duration-300 hover:scale-110 h-8 w-8 sm:h-10 sm:w-10 p-0">
              <Bell className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-[#084b25] text-white rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 flex items-center justify-center text-[7px] sm:text-[8px]">
                0
              </span>
            </Button>

            {/* Cart - visible on all screens */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative hover:bg-green-50 hover:text-[#084b25] transition-all duration-300 hover:scale-110 h-8 w-8 sm:h-10 sm:w-10 p-0">
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-[#084b25] text-white rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 flex items-center justify-center text-[7px] sm:text-[8px] md:text-[10px]">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Top navigation links */}
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 pb-3 text-base font-bold scrollbar-hide px-4" style={{ overflow: 'visible', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <Link href="/" className="text-gray-800 hover:text-[#084b25] transition-all duration-300 hover:scale-105 px-2 py-1">
            {t("main")}
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-[#084b25] transition-all duration-300 hover:scale-105 px-2 py-1">
            {t("about.us")}
          </Link>

          <Link href="/new" className="text-gray-800 hover:text-[#084b25] transition-all duration-300 hover:scale-105 px-2 py-1">
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
            <a href="https://www.instagram.com/safi_hotel_collection/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#084b25] transition-all duration-300 hover:scale-110">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://t.me/safi_hotel_collection" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#084b25] transition-all duration-300 hover:scale-110">
              <Send className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#084b25] transition-all duration-300 hover:scale-110">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="lg:hidden mt-2 pb-2">
          <form onSubmit={handleSearch} className="relative w-full">
            <Input
              type="search"
              placeholder={t("search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pr-10 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:border-gray-400 transition-colors text-sm"
            />
            <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full w-10 hover:bg-transparent">
              <Search className="h-4 w-4 text-gray-500" />
            </Button>
          </form>
        </div>
      </div>

      {/* Mobile navigation menu - outside main navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 max-h-[80vh] overflow-y-auto">
          <nav className="px-4 py-4">
            <div className="flex flex-col space-y-3">
              {/* Main pages */}
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#084b25] py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("main")}
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-[#084b25] py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("about.us")}
              </Link>
              <Link 
                href="/new" 
                className="text-gray-700 hover:text-[#084b25] py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("products")}
              </Link>
              <Link 
                href="/for-partners" 
                className="text-gray-700 hover:text-[#084b25] py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("for.partners")}
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-[#084b25] py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("blog")}
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-[#084b25] py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("contact")}
              </Link>

              {/* Categories */}
              {showMainNavigation && categories && categories.length > 0 && (
                <>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="text-xs font-semibold text-gray-500 uppercase px-3 py-1">
                    {t("products")}
                  </div>
                  <Link 
                    href="/new" 
                    className="text-gray-700 hover:text-[#084b25] py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("nav.new")}
                  </Link>
                  {categories
                    .filter((cat) => !cat.parentCategory)
                    .map((cat) => (
                      <Link 
                        key={cat._id}
                        href={`/categories?category=${cat.slug}`} 
                        className="text-gray-700 hover:text-[#084b25] py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {cat.name[language as keyof typeof cat.name] || cat.name.uz}
                      </Link>
                    ))}
                </>
              )}

              {/* Language Switcher */}
              <div className="border-t border-gray-200 my-2"></div>
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Main navigation */}
      {showMainNavigation && (
        <div 
          className="border-t border-gray-200 relative"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-full mx-auto px-6">
            {/* Desktop navigation - Statik "New" + Dinamik kategoriyalar */}
            <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 py-4 text-sm font-bold scrollbar-hide px-4" style={{ overflow: 'visible', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {/* Statik "New" kategoriyasi */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("new")}
              >
                <Link href="/new" className="text-gray-800 hover:text-[#084b25] flex items-center gap-1 whitespace-nowrap transition-all duration-300 hover:scale-105 font-bold px-2 py-1">
                  {t("nav.new") || "Yangi"} <ChevronDown className="h-4 w-4" />
                </Link>
              </div>

              {/* Dinamik kategoriyalar */}
              {categoriesLoading ? (
                <div className="text-gray-500 py-2">Yuklanmoqda...</div>
              ) : categories && categories.length > 0 ? (
                categories
                  .filter((cat) => !cat.parentCategory)
                  .slice(0, 7)
                  .map((cat) => (
                    <div
                      key={cat._id}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(cat._id)}
                    >
                      <Link 
                        href={`/categories?category=${cat.slug}`} 
                        className="text-gray-800 hover:text-[#084b25] flex items-center gap-1 whitespace-nowrap transition-all duration-300 hover:scale-105 font-bold px-2 py-1"
                      >
                        {cat.name[language as keyof typeof cat.name] || cat.name.uz} <ChevronDown className="h-4 w-4" />
                      </Link>
                    </div>
                  ))
              ) : null}
            </nav>

            {/* Dropdown - positioned at navbar container level */}
            {activeDropdown && (
              <MegaDropdown categoryId={activeDropdown} />
            )}
          </div>
        </div>
      )}
    </header>
  )
}