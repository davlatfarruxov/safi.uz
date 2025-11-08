"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { Product } from "./api"

interface CartItem {
  product: Product
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("safi-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error loading cart:", error)
      }
    }
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("safi-cart", JSON.stringify(items))
  }, [items])

  const addToCart = (product: Product, quantity: number = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product._id === product._id)
      
      if (existingItem) {
        // Update quantity if product already in cart
        return prevItems.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        // Add new product to cart
        return [...prevItems, { product, quantity }]
      }
    })
  }

  const removeFromCart = (productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.product._id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product._id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
