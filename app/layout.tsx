import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { StarRatingProvider } from "@/contexts/star-rating-context"
import { CartProvider } from "@/contexts/cart-context"
import { LanguageProvider } from "@/contexts/language-context"

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Safi Hotel Collection - Mehmonxonalar uchun to'liq ta'minot",
  description: "Xalqaro darajadagi mehmonxona jihozlari va ta'minot",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <LanguageProvider>
          <StarRatingProvider>
            <CartProvider>{children}</CartProvider>
          </StarRatingProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
