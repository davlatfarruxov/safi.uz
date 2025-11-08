import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { WishlistProvider } from "@/lib/wishlist-context"
import { CartProvider } from "@/lib/cart-context"



export const metadata: Metadata = {
  title: "Safi Hotel Collection | Premium B2B Hotel Supplies & Hospitality Solutions",
  description:
    "Industry-leading hotel supplies, furniture, textiles, and hospitality solutions. Trusted by 10,000+ hotels worldwide. Premium quality, expert consulting, express delivery.",
  keywords:
    "hotel supplies, B2B hospitality, premium hotel furniture, hotel textiles, hospitalitsted by 10,000+ hotels worldwide. Premium quality, expert consulting, express delivery.",
  generator: "v0.app",
  icons: {
    icon: "favicon.png", // yoki .svg ham bo‘ladi
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LanguageProvider>
          <WishlistProvider>
            <CartProvider>
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
              <Toaster position="top-right" />
            </CartProvider>
          </WishlistProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
