"use client"

import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useEffect, useRef, useState } from "react"

interface ProductShowcaseProps {
  titleKey: string
  category: string
}

export function ProductShowcase({ titleKey, category }: ProductShowcaseProps) {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])
  const bestseller_products = [
    {
      name: "Sakura Reed Diffuser",
      price: 45.0,
      priceVat: 54.0,
      image: "/best-sellers-1.png",
    },
    {
      name: "Diffusol",
      price: 89.0,
      priceVat: 106.8,
      image: "/best-sellers-4.png",
    },
    {
      name: "Bonbori",
      price: 125.0,
      priceVat: 150.0,
      image: "/best-sellers-3.png",
    },
    {
      name: "Bonbori Room Spray",
      price: 199.0,
      priceVat: 238.8,
      image: "/best-sellers-2.png",
    },

  ]

  const geneva_products = [
    {
      name: "Geneva Green Hair & Body Wash, 370ml Refillable Pump Dispenser (Case of 18)",
      price: 61.65,
      priceVat: 73.98,
      image: "/green-pump-dispenser-bottle-hair-body-wash.jpg",
    },
    {
      name: "Geneva Green Body Wash, 370ml Refillable Pump Dispenser (Case of 18)",
      price: 63.16,
      priceVat: 75.79,
      image: "/green-pump-dispenser-bottle-body-wash.jpg",
    },
    {
      name: "Geneva Green Body Lotion, 370ml Refillable Pump Dispenser (Case of 18)",
      price: 75.2,
      priceVat: 90.24,
      image: "/green-pump-dispenser-bottle-body-lotion.jpg",
    },
  ]

  const products_we_love = [
    {
      name: "Bentley Limea Safe Foldable Wooden Baby Cot",
      price: 189.0,
      priceVat: 226.8,
      image: "/wooden-baby-cot-hotel.jpg",
    },
    {
      name: "Premium Hotel Slippers",
      price: 3.5,
      priceVat: 4.2,
      image: "/white-hotel-slippers.jpg",
    },
    {
      name: "Luxury Bath Towel Set",
      price: 24.99,
      priceVat: 29.99,
      image: "/white-luxury-bath-towels.jpg",
    },
  ]

  const products =
    category === "bestsellers" ? bestseller_products : category === "dispensers" ? geneva_products : products_we_love

  return (
    <section ref={elementRef} className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 md:mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">{t(titleKey)}</h2>
          <Button variant="outline" size="sm" className="self-start sm:self-auto">
            {t("view.all")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 4).map((product, index) => (
            <div
              key={product.name}
              className={`transition-all duration-1000 ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProductCard
                name={product.name}
                price={product.price}
                originalPrice={product.priceVat}
                image={product.image}
                showPrice={false}
              />
            </div>
          ))}
        </div>

        {/* Show more products on larger screens */}
        <div className="hidden xl:grid xl:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
          {products.slice(4).map((product, index) => (
            <div
              key={product.name}
              className={`transition-all duration-1000 ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                }`}
              style={{ transitionDelay: `${(index + 4) * 150}ms` }}
            >
              <ProductCard
                name={product.name}
                price={product.price}
                originalPrice={product.priceVat}
                image={product.image}
                showPrice={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
