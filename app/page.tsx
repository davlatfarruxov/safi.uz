"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Hotel, ShoppingBag, Award, Users, CheckCircle, LogIn, UserPlus, Package } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

const starRatings = [
  {
    stars: 1,
    title: "Budget Hotels",
    description: "Essential supplies for budget-conscious accommodations",
    features: ["Basic linens", "Standard amenities", "Cost-effective solutions"],
    color: "bg-slate-100 hover:bg-slate-200",
  },
  {
    stars: 2,
    title: "Economy Hotels",
    description: "Quality supplies for comfortable stays",
    features: ["Comfortable bedding", "Essential toiletries", "Reliable equipment"],
    color: "bg-blue-50 hover:bg-blue-100",
  },
  {
    stars: 3,
    title: "Mid-Range Hotels",
    description: "Enhanced supplies for quality service",
    features: ["Premium linens", "Quality amenities", "Professional equipment"],
    color: "bg-amber-50 hover:bg-amber-100",
  },
  {
    stars: 4,
    title: "Upscale Hotels",
    description: "Luxury supplies for exceptional experiences",
    features: ["High-thread count linens", "Premium toiletries", "Advanced equipment"],
    color: "bg-yellow-50 hover:bg-yellow-100",
  },
  {
    stars: 5,
    title: "Luxury Hotels",
    description: "Ultra-premium supplies for world-class hospitality",
    features: ["Egyptian cotton linens", "Luxury spa amenities", "State-of-the-art equipment"],
    color: "bg-gradient-to-br from-yellow-50 to-amber-100 hover:from-yellow-100 hover:to-amber-200",
  },
]

export default function LandingPage() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const router = useRouter()
  const { user, logout } = useAuth()

  const handleRatingSelect = (stars: number) => {
    setSelectedRating(stars)
    router.push(`/catalog?stars=${stars}`)
  }

  const handleLogout = async () => {
    await logout()
    setSelectedRating(null)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Hotel className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-serif font-bold text-foreground">Safi Hotel Collection </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="hidden md:flex">
                <Award className="h-4 w-4 mr-1" />
                B2B Certified
              </Badge>
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="text-sm">
                    <div className="font-medium">{user.hotel.name}</div>
                    <div className="text-muted-foreground flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < user.hotel.starRating ? "text-primary fill-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push(`/packages?stars=${user.hotel.starRating}`)}
                  >
                    <Package className="h-4 w-4 mr-2" />
                    Packages
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={() => router.push("/login")}>
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                  <Button size="sm" onClick={() => router.push("/register")}>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Register
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Premium Hotel Supplies
              <span className="block text-primary">Tailored to Your Standards</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Professional-grade linens, amenities, and equipment designed specifically for your hotel's star rating and
              guest expectations.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-12">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">10,000+ Hotels Served</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Quality Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Bulk Pricing</span>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Custom Packages</span>
            </div>
          </div>
        </div>
      </section>

      {/* Star Rating Selection */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
              {user ? `Welcome back, ${user.hotel.name}` : "Select Your Hotel Category"}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {user
                ? "Browse products tailored to your hotel's standards or explore other categories"
                : "Choose your hotel's star rating to view products and pricing tailored specifically to your establishment's standards and guest expectations."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {starRatings.map((rating) => (
              <Card
                key={rating.stars}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                  selectedRating === rating.stars || (user && user.hotel.starRating === rating.stars)
                    ? "border-primary shadow-lg scale-105"
                    : "border-border hover:border-primary/50"
                } ${rating.color}`}
                onClick={() => handleRatingSelect(rating.stars)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < rating.stars ? "text-primary fill-primary" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-serif">{rating.title}</CardTitle>
                  <CardDescription className="text-sm">{rating.description}</CardDescription>
                  {user && user.hotel.starRating === rating.stars && (
                    <Badge className="mt-2">Your Hotel Category</Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {rating.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-4"
                    variant={
                      selectedRating === rating.stars || (user && user.hotel.starRating === rating.stars)
                        ? "default"
                        : "outline"
                    }
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRatingSelect(rating.stars)
                    }}
                  >
                    View Catalog
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedRating && !user && (
            <div className="text-center mt-8">
              <Card className="max-w-md mx-auto">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    You can browse as a guest or sign in for personalized pricing and order history
                  </p>
                  <div className="flex space-x-2">
                    <Button className="flex-1" onClick={() => router.push(`/catalog?stars=${selectedRating}`)}>
                      Browse as Guest
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent" onClick={() => router.push("/login")}>
                      Sign In
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Trusted by Leading Hotels Worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-muted rounded flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">Hotel Brand {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Hotel className="h-6 w-6 text-accent-foreground" />
                <span className="text-lg font-serif font-bold">Safi Hotel Collection</span>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                Premium B2B hotel supplies tailored to your establishment's standards.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Bedroom Supplies</li>
                <li>Bathroom Amenities</li>
                <li>Kitchen Equipment</li>
                <li>General Supplies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Contact Us</li>
                <li>Bulk Orders</li>
                <li>Custom Solutions</li>
                <li>Quality Guarantee</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>About Us</li>
                <li>Certifications</li>
                <li>Sustainability</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-secondary-foreground/60">
              © 2025 Safi Hotel Collection. All rights reserved. B2B Hotel Supplies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
