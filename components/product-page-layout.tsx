"use client"

import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

interface Product {
  id: string
  name: string
  nameUz?: string
  nameRu?: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
  isNew?: boolean
  rating?: number
  reviews?: number
  category: string
}

interface ProductPageLayoutProps {
  titleKey: string
  subtitleKey: string
  heroImage: string
  products: Product[]
  categoryKey: string
}

export function ProductPageLayout({
  titleKey,
  subtitleKey,
  heroImage,
  products,
  categoryKey
}: ProductPageLayoutProps) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <TopBanner />
      <Header showMainNavigation={true} />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={t(titleKey)}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {t(titleKey)}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            {t(subtitleKey)}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                nameUz={product.nameUz}
                nameRu={product.nameRu}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                badge={product.badge}
                isNew={product.isNew}
                rating={product.rating}
                reviews={product.reviews}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}