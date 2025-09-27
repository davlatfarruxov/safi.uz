"use client"

import { useState, useMemo } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Hotel, Search, Filter, ShoppingCart, ArrowLeft, Plus, LogIn, Package } from "lucide-react"
import { categories, getProductsForStarRating, getProductPrice } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"

export default function CatalogPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { addToCart, getTotalItems, getCartItem } = useCart()
  const starRating = Number.parseInt(searchParams.get("stars") || "3")

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const availableProducts = useMemo(() => {
    return getProductsForStarRating(starRating)
  }, [starRating])

  const filteredProducts = useMemo(() => {
    let filtered = availableProducts

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    return filtered
  }, [availableProducts, selectedCategory, searchQuery])

  const handleAddToCart = (productId: string) => {
    addToCart(productId, starRating)
  }

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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => router.push("/")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-2">
                <Hotel className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-serif font-bold text-foreground">Safi Hotel Collection</h1>
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
              {/* <Button variant="outline" size="sm" onClick={() => router.push(`/packages?stars=${starRating}`)}>
                <Package className="h-4 w-4 mr-2" />
                Packages
              </Button>
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
              </Button> */}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* <Card className="mb-6 bg-blue-50 border-blue-200">
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
        </Card> */}

        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
            {getStarRatingTitle(starRating)} Catalog
          </h2>
          <p className="text-muted-foreground">Premium supplies tailored for your {starRating}-star establishment</p>
        </div>

        {/* Package CTA */}
        {/* <Card className="mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Save with Hotel Packages</h3>
                <p className="text-muted-foreground">
                  Get up to 25% off when you bundle products together. Perfect for room setups and renovations.
                </p>
              </div>
              <Button onClick={() => router.push(`/packages?stars=${starRating}`)}>
                <Package className="h-4 w-4 mr-2" />
                View Packages
              </Button>
            </div>
          </CardContent>
        </Card> */}

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
          >
            All Products ({availableProducts.length})
          </Button>
          {categories.map((category) => {
            const categoryCount = availableProducts.filter((p) => p.category === category.id).length
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name} ({categoryCount})
              </Button>
            )
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const price = getProductPrice(product, starRating)
            const cartItem = getCartItem(product.id)
            const cartQuantity = cartItem?.quantity || 0

            return (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs mb-2">
                      {categories.find((c) => c.id === product.category)?.name}
                    </Badge>
                    <CardTitle className="text-lg font-semibold mb-1">{product.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </CardDescription>
                  </div>

                  <div className="mb-3">
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-foreground">${price}</div>
                    <Button size="sm" onClick={() => handleAddToCart(product.id)} className="relative">
                      <Plus className="h-4 w-4 mr-1" />
                      Add to Cart
                      {cartQuantity > 0 && (
                        <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                          {cartQuantity}
                        </Badge>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">No products found matching your criteria.</div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
