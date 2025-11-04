"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductImage {
  url: string
  alt?: string
  isPrimary?: boolean
}

interface ProductImageGalleryProps {
  images: ProductImage[]
  productName: string
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Agar rasmlar bo'lmasa, default rasm
  const displayImages = images && images.length > 0 
    ? images 
    : [{ url: "/placeholder-product.jpg", alt: productName }]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1))
  }

  // Rasm URL ni to'g'rilash
  const getImageUrl = (url: string) => {
    if (!url) return "/placeholder-product.jpg"
    if (url.startsWith('http')) return url
    if (url.startsWith('/uploads')) {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000'
      return `${API_BASE}${url}`
    }
    return url
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
        <img
          src={getImageUrl(displayImages[currentIndex].url)}
          alt={displayImages[currentIndex].alt || productName}
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {displayImages.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {displayImages.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex 
                  ? 'border-[#084b25] ring-2 ring-[#084b25]/20' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={getImageUrl(image.url)}
                alt={image.alt || `${productName} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
