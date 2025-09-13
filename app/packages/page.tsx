"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Star, Hotel, ArrowLeft, Package, ShoppingCart, Plus, Sparkles, LogIn } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"
import { categories, getProductsForStarRating, getProductPrice } from "@/lib/products"
import {
  getPackagesForStarRating,
  calculatePackagePrice,
  getPackageProducts,
  calculatePackageSavings,
  type PackageTemplate,
  type CustomPackage,
} from "@/lib/packages"

export default function PackagesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user } = useAuth()
  const { addToCart, getTotalItems } = useCart()

  const starRating = Number.parseInt(searchParams.get("stars") || user?.hotel.starRating.toString() || "3")
  const [selectedTemplate, setSelectedTemplate] = useState<PackageTemplate | null>(null)
  const [customPackage, setCustomPackage] = useState<CustomPackage>({
    id: "",
    name: "",
    description: "",
    productIds: [],
    starRating,
    discount: 0,
  })
  const [isCustomizing, setIsCustomizing] = useState(false)

  // Redirect to login if not authenticated
  // useEffect(() => {
  //   if (!user) {
  //     router.push(`/login?redirect=/packages?stars=${starRating}`)
  //   }
  // }, [user, router, starRating])

  const availablePackages = getPackagesForStarRating(starRating)
  const availableProducts = getProductsForStarRating(starRating)

  const handleSelectTemplate = (template: PackageTemplate) => {
    setSelectedTemplate(template)
    setCustomPackage({
      id: `custom-${Date.now()}`,
      name: template.name,
      description: template.description,
      productIds: [...template.productIds],
      starRating,
      discount: template.discount,
    })
    setIsCustomizing(true)
  }

  const handleProductToggle = (productId: string, checked: boolean) => {
    setCustomPackage((prev) => ({
      ...prev,
      productIds: checked ? [...prev.productIds, productId] : prev.productIds.filter((id) => id !== productId),
    }))
  }

  const handleAddPackageToCart = (packageData: PackageTemplate | CustomPackage) => {
    // Add each product in the package to cart
    packageData.productIds.forEach((productId) => {
      addToCart(productId, starRating)
    })

    // Show success message or redirect
    router.push("/cart")
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

  // Show loading or login prompt if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <LogIn className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Authentication Required</h3>
            <p className="text-muted-foreground mb-4">Please sign in to access the package builder</p>
            <Button onClick={() => router.push("/login")}>Sign In</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => router.push("/catalog")}>
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
                <div className="font-medium">{user.hotel.name}</div>
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
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!isCustomizing ? (
          // Package Templates View
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Hotel Package Builder</h2>
              <p className="text-muted-foreground">
                Choose from our curated packages or create your own custom bundle for your {starRating}-star
                establishment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {availablePackages.map((pkg) => {
                const packageProducts = getPackageProducts(pkg.productIds)
                const originalPrice = pkg.productIds.reduce((sum, id) => {
                  const product = packageProducts.find((p) => p.id === id)
                  return sum + (product ? getProductPrice(product, starRating) : 0)
                }, 0)
                const discountedPrice = calculatePackagePrice(pkg.productIds, starRating, pkg.discount)
                const savings = calculatePackageSavings(pkg.productIds, starRating, pkg.discount)

                return (
                  <Card key={pkg.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="p-0">
                      <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                        <img
                          src={pkg.image || "/placeholder.svg"}
                          alt={pkg.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)} Package
                          </Badge>
                          <Badge className="text-xs">
                            <Sparkles className="h-3 w-3 mr-1" />
                            {pkg.discount}% OFF
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-semibold mb-1">{pkg.name}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">{pkg.description}</CardDescription>
                      </div>

                      <div className="mb-4">
                        <div className="text-xs text-muted-foreground mb-2">
                          Includes {pkg.productIds.length} items:
                        </div>
                        <div className="space-y-1">
                          {packageProducts.slice(0, 3).map((product) => (
                            <div key={product.id} className="text-xs flex items-center">
                              <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                              {product.name}
                            </div>
                          ))}
                          {packageProducts.length > 3 && (
                            <div className="text-xs text-muted-foreground">
                              +{packageProducts.length - 3} more items
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-muted-foreground line-through">
                              ${originalPrice.toFixed(2)}
                            </div>
                            <div className="text-lg font-bold text-foreground">${discountedPrice.toFixed(2)}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-primary font-medium">Save ${savings.toFixed(2)}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button className="flex-1" onClick={() => handleAddPackageToCart(pkg)}>
                          <Plus className="h-4 w-4 mr-1" />
                          Add Package
                        </Button>
                        <Button variant="outline" onClick={() => handleSelectTemplate(pkg)}>
                          Customize
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Create Custom Package */}
            <Card>
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Create Custom Package</h3>
                <p className="text-muted-foreground mb-4">Build your own package by selecting individual products</p>
                <Button
                  onClick={() => {
                    setIsCustomizing(true)
                    setSelectedTemplate(null)
                    setCustomPackage({
                      id: `custom-${Date.now()}`,
                      name: "Custom Package",
                      description: "My custom hotel package",
                      productIds: [],
                      starRating,
                      discount: 5, // Small discount for custom packages
                    })
                  }}
                >
                  Start Building
                </Button>
              </CardContent>
            </Card>
          </>
        ) : (
          // Package Customization View
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Selection */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground">Customize Your Package</h2>
                <Button variant="outline" onClick={() => setIsCustomizing(false)}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Templates
                </Button>
              </div>

              {/* Package Details */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Package Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="packageName">Package Name</Label>
                    <Input
                      id="packageName"
                      value={customPackage.name}
                      onChange={(e) => setCustomPackage((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter package name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="packageDescription">Description</Label>
                    <Textarea
                      id="packageDescription"
                      value={customPackage.description}
                      onChange={(e) => setCustomPackage((prev) => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your package"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Product Categories */}
              {categories.map((category) => {
                const categoryProducts = availableProducts.filter((p) => p.category === category.id)

                if (categoryProducts.length === 0) return null

                return (
                  <Card key={category.id} className="mb-6">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {categoryProducts.map((product) => {
                          const isSelected = customPackage.productIds.includes(product.id)
                          const price = getProductPrice(product, starRating)

                          return (
                            <div key={product.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                              <Checkbox
                                checked={isSelected}
                                onCheckedChange={(checked) => handleProductToggle(product.id, checked as boolean)}
                              />
                              <div className="w-16 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
                                <img
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-foreground">{product.name}</h4>
                                <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>
                                <div className="flex items-center space-x-2 mt-1">
                                  {product.features.slice(0, 2).map((feature, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold text-foreground">${price}</div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Package Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="font-serif">Package Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">{customPackage.name}</h4>
                    <p className="text-sm text-muted-foreground">{customPackage.description}</p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Selected Items ({customPackage.productIds.length})</div>
                    {customPackage.productIds.length === 0 ? (
                      <div className="text-sm text-muted-foreground">No items selected</div>
                    ) : (
                      <div className="space-y-1 max-h-40 overflow-y-auto">
                        {customPackage.productIds.map((productId) => {
                          const product = availableProducts.find((p) => p.id === productId)
                          if (!product) return null
                          const price = getProductPrice(product, starRating)

                          return (
                            <div key={productId} className="flex justify-between text-sm">
                              <span className="truncate mr-2">{product.name}</span>
                              <span>${price}</span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>

                  {customPackage.productIds.length > 0 && (
                    <>
                      <Separator />

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>${calculatePackagePrice(customPackage.productIds, starRating, 0).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-primary">
                          <span>Package Discount ({customPackage.discount}%)</span>
                          <span>
                            -$
                            {calculatePackageSavings(
                              customPackage.productIds,
                              starRating,
                              customPackage.discount,
                            ).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total</span>
                          <span>
                            $
                            {calculatePackagePrice(
                              customPackage.productIds,
                              starRating,
                              customPackage.discount,
                            ).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <Button className="w-full" size="lg" onClick={() => handleAddPackageToCart(customPackage)}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Package to Cart
                      </Button>
                    </>
                  )}

                  <div className="text-xs text-muted-foreground text-center">
                    Package discounts are automatically applied
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
