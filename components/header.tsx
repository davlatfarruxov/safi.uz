"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { CartSheet } from "@/components/cart-sheet"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/safi-logo-ALzEZlSMWKFbRVKjJT8fDSuUQ2HgXh.png"
            alt="Safi Hotel Collection"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
            {t.nav.home}
          </Link>
          <Link href="/products" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
            {t.nav.products}
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
            {t.nav.about}
          </Link>
          <Link href="/blog" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
            {t.nav.blog}
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
            {t.nav.contact}
          </Link>
        </nav>

        {/* CTA Section */}
        <div className="flex items-center gap-4">
          <a href="tel:+998901234567" className="hidden items-center gap-2 text-sm font-medium text-foreground lg:flex">
            <Phone className="h-4 w-4" />
            <span>+998 90 123 45 67</span>
          </a>
          <LanguageSwitcher />
          <CartSheet />
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">{t.nav.getQuote}</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
