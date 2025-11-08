"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface ProductNavbarProps {
  category: string
  subcategory?: string
}

export function ProductNavbar({ category, subcategory }: ProductNavbarProps) {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 md:gap-2 py-2 md:py-3 text-xs md:text-sm">
          <Link href="/" className="text-gray-600 hover:text-[#7B6B8F] transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
          <span className="text-gray-900 font-medium">{category}</span>
          {subcategory && (
            <>
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
              <span className="text-gray-900 font-medium">{subcategory}</span>
            </>
          )}
        </div>

        {/* Category navigation */}
        <div className="flex items-center gap-4 md:gap-6 pb-3 md:pb-4 overflow-x-auto scrollbar-hide">
          <Link
            href={`/${category.toLowerCase()}/all`}
            className="text-xs md:text-sm text-gray-700 hover:text-[#7B6B8F] whitespace-nowrap font-medium transition-colors"
          >
            All {category}
          </Link>
          <Link
            href={`/${category.toLowerCase()}/featured`}
            className="text-xs md:text-sm text-gray-700 hover:text-[#7B6B8F] whitespace-nowrap transition-colors"
          >
            Featured
          </Link>
          <Link
            href={`/${category.toLowerCase()}/new-arrivals`}
            className="text-xs md:text-sm text-gray-700 hover:text-[#7B6B8F] whitespace-nowrap transition-colors"
          >
            New Arrivals
          </Link>
          <Link
            href={`/${category.toLowerCase()}/best-sellers`}
            className="text-xs md:text-sm text-gray-700 hover:text-[#7B6B8F] whitespace-nowrap transition-colors"
          >
            Best Sellers
          </Link>
          <Link
            href={`/${category.toLowerCase()}/sale`}
            className="text-xs md:text-sm text-[#7B6B8F] hover:text-[#6A5B7F] whitespace-nowrap font-medium transition-colors"
          >
            Sale
          </Link>
        </div>
      </div>
    </div>
  )
}
