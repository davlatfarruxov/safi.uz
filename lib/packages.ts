import { products, getProductPrice, type Product } from "./products"

export interface PackageTemplate {
  id: string
  name: string
  description: string
  starRating: number
  productIds: string[]
  discount: number // percentage discount (0-100)
  image: string
  category: "starter" | "complete" | "luxury"
}

export interface CustomPackage {
  id: string
  name: string
  description: string
  productIds: string[]
  starRating: number
  discount: number
}

export const packageTemplates: PackageTemplate[] = [
  // Budget Hotel Packages (1-2 stars)
  {
    id: "budget-starter",
    name: "Budget Starter Package",
    description: "Essential supplies for budget-conscious hotels",
    starRating: 1,
    productIds: ["bed-sheets-basic", "towels-basic", "carpet-standard"],
    discount: 10,
    image: "/placeholder-x19tk.png",
    category: "starter",
  },
  {
    id: "economy-complete",
    name: "Economy Complete Package",
    description: "Comprehensive supplies for economy hotels",
    starRating: 2,
    productIds: ["bed-sheets-basic", "pillows-premium", "towels-basic", "minibar-basic", "safe-digital"],
    discount: 15,
    image: "/economy-hotel-room.png",
    category: "complete",
  },

  // Mid-Range Hotel Packages (3 stars)
  {
    id: "midrange-starter",
    name: "Mid-Range Starter Package",
    description: "Quality supplies for mid-range establishments",
    starRating: 3,
    productIds: ["bed-sheets-basic", "pillows-premium", "towels-basic", "toiletries-luxury"],
    discount: 12,
    image: "/mid-range-hotel-room.png",
    category: "starter",
  },
  {
    id: "midrange-complete",
    name: "Mid-Range Complete Package",
    description: "Full room setup for 3-star hotels",
    starRating: 3,
    productIds: [
      "bed-sheets-basic",
      "pillows-premium",
      "towels-basic",
      "toiletries-luxury",
      "minibar-basic",
      "coffee-machine",
      "safe-digital",
      "carpet-standard",
    ],
    discount: 18,
    image: "/placeholder-8be17.png",
    category: "complete",
  },

  // Upscale Hotel Packages (4 stars)
  {
    id: "upscale-starter",
    name: "Upscale Starter Package",
    description: "Premium supplies for upscale hotels",
    starRating: 4,
    productIds: ["bed-sheets-basic", "pillows-premium", "luxury-duvet", "towels-basic", "toiletries-luxury"],
    discount: 15,
    image: "/upscale-hotel-bedding.png",
    category: "starter",
  },
  {
    id: "upscale-luxury",
    name: "Upscale Luxury Package",
    description: "Complete luxury setup for 4-star establishments",
    starRating: 4,
    productIds: [
      "bed-sheets-basic",
      "pillows-premium",
      "luxury-duvet",
      "towels-basic",
      "toiletries-luxury",
      "minibar-basic",
      "coffee-machine",
      "safe-digital",
      "carpet-standard",
    ],
    discount: 20,
    image: "/placeholder-avtlk.png",
    category: "luxury",
  },

  // Luxury Hotel Packages (5 stars)
  {
    id: "luxury-complete",
    name: "Luxury Complete Package",
    description: "Ultra-premium supplies for 5-star hotels",
    starRating: 5,
    productIds: [
      "bed-sheets-basic",
      "pillows-premium",
      "luxury-duvet",
      "towels-basic",
      "toiletries-luxury",
      "minibar-basic",
      "coffee-machine",
      "safe-digital",
      "carpet-standard",
    ],
    discount: 25,
    image: "/placeholder-pt5he.png",
    category: "luxury",
  },
]

export function getPackagesForStarRating(starRating: number): PackageTemplate[] {
  return packageTemplates.filter((pkg) => pkg.starRating <= starRating)
}

export function calculatePackagePrice(productIds: string[], starRating: number, discount = 0): number {
  const totalPrice = productIds.reduce((sum, productId) => {
    const product = products.find((p) => p.id === productId)
    if (product) {
      return sum + getProductPrice(product, starRating)
    }
    return sum
  }, 0)

  return totalPrice * (1 - discount / 100)
}

export function getPackageProducts(productIds: string[]): Product[] {
  return productIds.map((id) => products.find((p) => p.id === id)).filter(Boolean) as Product[]
}

export function calculatePackageSavings(productIds: string[], starRating: number, discount: number): number {
  const originalPrice = productIds.reduce((sum, productId) => {
    const product = products.find((p) => p.id === productId)
    if (product) {
      return sum + getProductPrice(product, starRating)
    }
    return sum
  }, 0)

  const discountedPrice = calculatePackagePrice(productIds, starRating, discount)
  return originalPrice - discountedPrice
}
