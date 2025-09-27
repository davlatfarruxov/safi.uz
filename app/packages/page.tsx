"use client"

import { useState, useMemo } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Hotel, ArrowLeft, ShoppingCart, LogIn, Package, Check } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

const packages = [
  {
    id: "deluxe-room",
    name: "Deluxe Room Package",
    description: "Complete room setup with premium linens, towels, and amenities",
    price: { 1: 299, 2: 399, 3: 499, 4: 699, 5: 999 },
    originalPrice: { 1: 399, 2: 519, 3: 649, 4: 899, 5: 1299 },
    items: [
      "Premium bed linens set",
      "Luxury towel collection",
      "Room amenities kit",
      "Decorative pillows",
      "Blackout curtains"
    ],
    image: "/placeholder.svg",
    popular: true
  },
  {
    id: "bathroom-essentials",
    name: "Bathroom Essentials",
    description: "Everything needed for a complete bathroom experience",
    price: { 1: 199, 2: 249, 3: 299, 4: 399, 5: 549 },
    originalPrice: { 1: 259, 2: 324, 3: 389, 4: 519, 5: 714 },
    items: [
      "Bath towel set",
      "Shower amenities",
      "Bathroom accessories",
      "Hair dryer",
      "Bathrobes"
    ],
    image: "/placeholder.svg"
  },
  {
    id: "dining-setup",
    name: "Dining Setup Package",
    description: "Professional dining room furniture and accessories",
    price: { 1: 599, 2: 799, 3: 999, 4: 1299, 5: 1799 },
    originalPrice: { 1: 779, 2: 1039, 3: 1299, 4: 1689, 5: 2339 },
    items: [
      "Dining table and chairs",
      "Table linens",
      "Dinnerware set",
      "Glassware collection",
      "Serving accessories"
    ],
    image: "/placeholder.svg"
  }
]

export default function PackagesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { addToCart, getTotalItems } = useCart()
  const starRating = Number.parseInt(searchParams.get("stars") || "3")

  const getStarRatingTitle = (stars: number) => {
    const titles = {
      1: "Budget Hotels",
      2: "Economy Hotels", 
      3: "Mid-Range Hotels",
      4: "Upscale Hotels",
      5: "Luxury Hotels",
    }
    return titles[stars as keyof typeof titles] || "Hotels"
  }

  const handleAddPackageToCart = (packageId: string) => {
    // Add package logic here
    console.log(`Adding package ${packageId} to cart`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => router.push(`/catalog?stars=${starRating}`)}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Catalog
              </Button>
              <div className="flex items-center space-x-2">
                <Hotel className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-serif font-bold text-foreground">HotelSupply Pro</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <div className="font-medium">Guest Browsing</div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < starRating ? "text-primary fill-primary" : "text-muted-foreground"}`}
                    />
                  ))}
                  <span className="ml-1 text-xs text-muted-foreground">{getStarRatingTitle(starRating)}</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="relative bg-transparent"
                onClick={() => router.push("/cart")}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
              <Button size="sm" onClick={() => router.push("/login")}>
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Card className="mb-6 bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Browsing as Guest</h3>
                <p className="text-sm text-blue-700">
                  Sign in to access personalized pricing, order history, and exclusive hotel packages.
                </p>
              </div>
              <Button size="sm" onClick={() => router.push("/login")}>
                Sign In
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
            Hotel Packages for {getStarRatingTitle(starRating)}
          </h2>
          <p className="text-muted-foreground">
            Save up to 25% with our curated packages designed for {starRating}-star establishments
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => {
            const price = pkg.price[starRating as keyof typeof pkg.price]
            const originalPrice = pkg.originalPrice[starRating as keyof typeof pkg.originalPrice]
            const savings = originalPrice - price
            const savingsPercent = Math.round((savings / originalPrice) * 100)

            return (
              <Card key={pkg.id} className="group hover:shadow-lg transition-all duration-300 relative">
                {pkg.popular && (
                  <Badge className="absolute -top-2 left-4 z-10 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <CardTitle className="text-xl font-semibold mb-2">{pkg.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {pkg.description}
                    </CardDescription>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-foreground">${price}</span>
                      <span className="text-lg text-muted-foreground line-through">${originalPrice}</span>
                      <Badge variant="secondary" className="text-xs">
                        Save {savingsPercent}%
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You save ${savings} with this package
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-1">
                      {pkg.items.map((item, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full" 
                    onClick={() => handleAddPackageToCart(pkg.id)}
                  >
                    <Package className="h-4 w-4 mr-2" />
                    Add Package to Cart
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Need a Custom Package?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our team can create personalized packages tailored to your hotel's specific needs. 
                Contact us for bulk pricing and custom solutions.
              </p>
              <Button size="lg" onClick={() => router.push("/login")}>
                Contact Sales Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}