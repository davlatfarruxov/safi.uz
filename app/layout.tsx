import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/hooks/use-language"
import { CartProvider } from "@/contexts/cart-context"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Safí Hotel Collection - Premium B2B Hotel Supplies & Hospitality Solutions",
  description:
    "Industry-leading hotel supplies, furniture, textiles, and hospitality solutions. Trusted by 10,000+ hotels worldwide. Premium quality, expert consulting, express delivery.",
  keywords:
    "hotel supplies, B2B hospitality, premium hotel furniture, hotel textiles, hospitality equipment, hotel amenities, luxury hotel supplies",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans">
        <AuthProvider>
          <LanguageProvider>
            <CartProvider>{children}</CartProvider>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
