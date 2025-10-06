"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type StarRating = 1 | 2 | 3 | 4 | 5 | null

interface StarRatingContextType {
  starRating: StarRating
  setStarRating: (rating: StarRating) => void
}

const StarRatingContext = createContext<StarRatingContextType | undefined>(undefined)

export function StarRatingProvider({ children }: { children: ReactNode }) {
  const [starRating, setStarRatingState] = useState<StarRating>(null)

  // Load star rating from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("hotelStarRating")
    if (saved) {
      setStarRatingState(Number(saved) as StarRating)
    }
  }, [])

  const setStarRating = (rating: StarRating) => {
    setStarRatingState(rating)
    if (rating) {
      localStorage.setItem("hotelStarRating", rating.toString())
    }
  }

  return <StarRatingContext.Provider value={{ starRating, setStarRating }}>{children}</StarRatingContext.Provider>
}

export function useStarRating() {
  const context = useContext(StarRatingContext)
  if (context === undefined) {
    throw new Error("useStarRating must be used within a StarRatingProvider")
  }
  return context
}
