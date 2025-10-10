"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FilterOption {
  id: string
  label: string
  count: number
}

interface FilterSection {
  title: string
  options: FilterOption[]
  defaultExpanded?: boolean
}

export function SidebarFilters() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    category: true,
    brand: false,
  })

  const [showMoreCategories, setShowMoreCategories] = useState(false)

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const categoryFilters: FilterOption[] = [
    { id: "audio-clocks", label: "Audio Clocks", count: 1 },
    { id: "bathroom-scales", label: "Bathroom Scales", count: 1 },
    { id: "bins", label: "Bins", count: 1 },
    { id: "condiment-boxes", label: "Condiment Boxes & Trays", count: 2 },
    { id: "dispenser-brackets", label: "Dispenser Brackets", count: 1 },
    { id: "hairdryers", label: "Hairdryers", count: 2 },
    { id: "hangers", label: "Hangers", count: 21 },
    { id: "ironing-boards", label: "Ironing Boards", count: 3 },
    { id: "ironing-accessories", label: "Ironing Accessories", count: 4 },
    { id: "kettles", label: "Kettles", count: 1 },
  ]

  const brandFilters: FilterOption[] = [
    { id: "bentley", label: "Bentley", count: 17 },
    { id: "corby", label: "Corby Of Windsor", count: 20 },
  ]

  const visibleCategories = showMoreCategories ? categoryFilters : categoryFilters.slice(0, 10)

  return (
    <aside className="w-full lg:w-auto">
      <div className="bg-white lg:bg-transparent border lg:border-0 rounded-lg lg:rounded-none p-4 lg:p-0">
        <h2 className="font-semibold text-gray-900 mb-4 lg:hidden">Filters</h2>
        
        <div className="space-y-4 lg:space-y-6">
          <div className="border-b border-gray-200 pb-4 lg:pb-6">
            <h3 className="font-semibold text-gray-900 mb-3 hidden lg:block">Categories</h3>
            <div className="space-y-2 lg:space-y-3 max-h-60 lg:max-h-none overflow-y-auto lg:overflow-visible">
              {visibleCategories.map((option) => (
                <div key={option.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id={option.id} className="border-gray-300 h-3 w-3 lg:h-4 lg:w-4" />
                    <Label htmlFor={option.id} className="text-xs lg:text-sm text-gray-700 cursor-pointer font-normal">
                      {option.label}
                    </Label>
                  </div>
                  <span className="text-xs text-gray-500">{option.count}</span>
                </div>
              ))}
              {categoryFilters.length > 10 && (
                <button
                  onClick={() => setShowMoreCategories(!showMoreCategories)}
                  className="text-xs lg:text-sm text-[#7B6B8F] hover:underline font-medium flex items-center gap-1"
                >
                  {showMoreCategories ? "- Show less" : "+ Show more"}
                </button>
              )}
            </div>
          </div>

          <div className="border-b border-gray-200 pb-4 lg:pb-6">
            <button onClick={() => toggleSection("brand")} className="flex items-center justify-between w-full mb-3">
              <h3 className="font-semibold text-gray-900 text-sm lg:text-base">Brand</h3>
              {expandedSections.brand ? (
                <ChevronUp className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600" />
              ) : (
                <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600" />
              )}
            </button>

            {expandedSections.brand && (
              <div className="space-y-2 lg:space-y-3">
                {brandFilters.map((option) => (
                  <div key={option.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id={option.id} className="border-gray-300 h-3 w-3 lg:h-4 lg:w-4" />
                      <Label htmlFor={option.id} className="text-xs lg:text-sm text-gray-700 cursor-pointer font-normal">
                        {option.label}
                      </Label>
                    </div>
                    <span className="text-xs text-gray-500">{option.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}
