export interface Product {
  id: string
  name: string
  description: string
  category: string
  image: string
  pricing: {
    [key: number]: number // star rating -> price
  }
  features: string[]
  minStars: number
  maxStars: number
}

export const categories = [
  { id: "bedroom", name: "Bedroom Supplies", icon: "🛏️" },
  { id: "bathroom", name: "Bathroom Amenities", icon: "🚿" },
  { id: "kitchen", name: "Kitchen Equipment", icon: "🍽️" },
  { id: "general", name: "General Supplies", icon: "🏨" },
]

export const products: Product[] = [
  // Bedroom Supplies
  {
    id: "bed-sheets-basic",
    name: "Cotton Bed Sheets",
    description: "Comfortable cotton bed sheets for guest rooms",
    category: "bedroom",
    image: "/white-cotton-bed-sheets-hotel.png",
    pricing: {
      1: 25,
      2: 35,
      3: 45,
      4: 65,
      5: 95,
    },
    features: ["100% Cotton", "Machine Washable", "Fade Resistant"],
    minStars: 1,
    maxStars: 5,
  },
  {
    id: "pillows-premium",
    name: "Memory Foam Pillows",
    description: "Premium memory foam pillows for superior comfort",
    category: "bedroom",
    image: "/white-memory-foam-pillows-hotel.png",
    pricing: {
      2: 45,
      3: 65,
      4: 85,
      5: 120,
    },
    features: ["Memory Foam", "Hypoallergenic", "Breathable Cover"],
    minStars: 2,
    maxStars: 5,
  },
  {
    id: "luxury-duvet",
    name: "Egyptian Cotton Duvet",
    description: "Ultra-luxury Egyptian cotton duvet for 5-star comfort",
    category: "bedroom",
    image: "/luxury-white-duvet.png",
    pricing: {
      4: 180,
      5: 250,
    },
    features: ["Egyptian Cotton", "1000 Thread Count", "Down Alternative Fill"],
    minStars: 4,
    maxStars: 5,
  },

  // Bathroom Amenities
  {
    id: "towels-basic",
    name: "Bath Towels Set",
    description: "Soft and absorbent bath towels for guest bathrooms",
    category: "bathroom",
    image: "/white-cotton-bed-sheets-hotel.png",
    pricing: {
      1: 15,
      2: 25,
      3: 35,
      4: 50,
      5: 75,
    },
    features: ["100% Cotton", "Quick Dry", "Durable"],
    minStars: 1,
    maxStars: 5,
  },
  {
    id: "toiletries-luxury",
    name: "Luxury Toiletry Set",
    description: "Premium toiletries including shampoo, conditioner, and body wash",
    category: "bathroom",
    image: "/white-cotton-bed-sheets-hotel.png",
    pricing: {
      3: 35,
      4: 55,
      5: 85,
    },
    features: ["Organic Ingredients", "Eco-Friendly", "Custom Branding Available"],
    minStars: 3,
    maxStars: 5,
  },

  // Kitchen Equipment
  {
    id: "minibar-basic",
    name: "Compact Minibar",
    description: "Energy-efficient minibar for guest rooms",
    category: "kitchen",
    image: "/white-cotton-bed-sheets-hotel.png",
    pricing: {
      2: 180,
      3: 250,
      4: 350,
      5: 480,
    },
    features: ["Energy Star Rated", "Quiet Operation", "Digital Temperature Control"],
    minStars: 2,
    maxStars: 5,
  },
  {
    id: "coffee-machine",
    name: "In-Room Coffee Machine",
    description: "Premium coffee machine for guest room convenience",
    category: "kitchen",
    image: "/white-cotton-bed-sheets-hotel.png",
    pricing: {
      3: 120,
      4: 180,
      5: 280,
    },
    features: ["Single Serve", "Multiple Brew Sizes", "Auto Shut-off"],
    minStars: 3,
    maxStars: 5,
  },

  // General Supplies
  {
    id: "carpet-standard",
    name: "Hotel Carpet",
    description: "Durable and stain-resistant carpet for high-traffic areas",
    category: "general",
    image: "/white-cotton-bed-sheets-hotel.png",
    pricing: {
      1: 25,
      2: 35,
      3: 50,
      4: 75,
      5: 110,
    },
    features: ["Stain Resistant", "Commercial Grade", "Easy Maintenance"],
    minStars: 1,
    maxStars: 5,
  },
  {
    id: "safe-digital",
    name: "Digital Room Safe",
    description: "Secure digital safe for guest valuables",
    category: "general",
    image: "/white-cotton-bed-sheets-hotel.png",
    pricing: {
      2: 85,
      3: 120,
      4: 160,
      5: 220,
    },
    features: ["Digital Lock", "Audit Trail", "Master Override"],
    minStars: 2,
    maxStars: 5,
  },
]

export function getProductsForStarRating(starRating: number): Product[] {
  return products.filter((product) => product.minStars <= starRating && product.maxStars >= starRating)
}

export function getProductPrice(product: Product, starRating: number): number {
  return product.pricing[starRating] || 0
}
