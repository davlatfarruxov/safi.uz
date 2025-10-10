"use client"

import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface ProductShowcaseProps {
  titleKey: string
  category: string
}

export function ProductShowcase({ titleKey, category }: ProductShowcaseProps) {
  const { t } = useLanguage()
  const bathrobe_products = [
    {
      name: "Microfibre Bathrobe - White",
      price: 19.0,
      priceVat: 22.8,
      image: "/white-microfibre-bathrobe.jpg",
    },
    {
      name: "Waffle Bathrobe - White",
      price: 16.0,
      priceVat: 19.2,
      image: "/white-waffle-bathrobe.jpg",
    },
    {
      name: "Terry Towelling Bathrobe - White",
      price: 17.8,
      priceVat: 21.36,
      image: "/white-terry-towelling-bathrobe.jpg",
    },
    {
      name: "Velour Bathrobe - White",
      price: 24.0,
      priceVat: 28.8,
      image: "/white-velour-bathrobe.jpg",
    },
    // {
    //   name: "Striped Velour Bathrobe - White",
    //   price: 26.8,
    //   priceVat: 32.16,
    //   image: "/white-striped-velour-bathrobe.jpg",
    // },
    // {
    //   name: "Velour Bathrobe with Grey Piping - White",
    //   price: 28.2,
    //   priceVat: 33.84,
    //   image: "/white-velour-bathrobe-grey-piping.jpg",
    // },
    // {
    //   name: "Children's Microfibre Bathrobe - White",
    //   price: 14.6,
    //   priceVat: 17.52,
    //   image: "/childrens-white-microfibre-bathrobe.jpg",
    // },
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
    category === "bathrobes" ? bathrobe_products : category === "dispensers" ? geneva_products : products_we_love

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 md:mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">{t(titleKey)}</h2>
          <Button variant="outline" size="sm" className="self-start sm:self-auto">
            {t("view.all")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              originalPrice={product.priceVat}
              image={product.image}
            />
          ))}
        </div>
        
        {/* Show more products on larger screens */}
        <div className="hidden xl:grid xl:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
          {products.slice(4).map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              originalPrice={product.priceVat}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
