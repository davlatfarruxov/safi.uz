"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { products, getProductPrice, type Product } from "@/lib/products"
import { useAuth } from "@/contexts/auth-context"

export interface CartItem {
  productId: string
  product: Product
  quantity: number
  price: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: string, starRating: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  getCartItem: (productId: string) => CartItem | undefined
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const { user } = useAuth()

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined" && user) {
      const savedCart = localStorage.getItem(`cart-${user.id}`)
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart)
          setItems(parsedCart)
        } catch (error) {
          console.error("Error loading cart from localStorage:", error)
        }
      }
    }
  }, [user])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    if (typeof window !== "undefined" && user) {
      localStorage.setItem(`cart-${user.id}`, JSON.stringify(items))
    }
  }, [items, user])

  // Clear cart when user logs out
  useEffect(() => {
    if (!user) {
      setItems([])
    }
  }, [user])

  const addToCart = (productId: string, starRating: number) => {
    const product = products.find((p) => p.id === productId)
    if (!product) return

    const price = getProductPrice(product, starRating)

    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.productId === productId)

      if (existingItem) {
        return prevItems.map((item) => (item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        return [
          ...prevItems,
          {
            productId,
            product,
            quantity: 1,
            price,
          },
        ]
      }
    })
  }

  const removeFromCart = (productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.productId !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.productId === productId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartItem = (productId: string) => {
    return items.find((item) => item.productId === productId)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        getCartItem,
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
