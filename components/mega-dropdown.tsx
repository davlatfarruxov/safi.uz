"use client"

import Link from "next/link"
import Image from "next/image"

interface MegaDropdownProps {
  category: "bathroom" | "bedroom" | "toiletries" | "hotel-guest-amenities" | "eco-friendly" | "brands"
}

export function MegaDropdown({ category }: MegaDropdownProps) {
  const bathroomMenu = {
    columns: [
      {
        title: "Towels & Comfort",
        links: [
          { name: "Towels", href: "/bathroom/towels" },
          { name: "Hand Towels & Face Cloths", href: "/bathroom/hand-towels" },
          { name: "Bathrobes", href: "/bathroom/bathrobes" },
          { name: "Slippers", href: "/bathroom/slippers" },
        ],
      },
      {
        title: "Bathroom Equipment",
        links: [
          { name: "Bath & Shower Mats", href: "/bathroom/bath-mats" },
          { name: "Mirrors", href: "/bathroom/mirrors" },
          { name: "Scales", href: "/bathroom/scales" },
          { name: "Bins", href: "/bathroom/bins" },
          { name: "Hygiene Bag Dispensers", href: "/bathroom/hygiene-dispensers" },
          { name: "Tissue Box Covers", href: "/bathroom/tissue-covers" },
          { name: "Toilet Brushes", href: "/bathroom/toilet-brushes" },
        ],
      },
      {
        title: "Consumables",
        links: [
          { name: "Guest Amenities", href: "/bathroom/guest-amenities" },
          { name: "Toiletries", href: "/bathroom/toiletries" },
        ],
      },
      {
        title: "Accessories",
        links: [
          { name: "Bathroom Accessories", href: "/bathroom/accessories" },
          { name: "Display Trays", href: "/bathroom/display-trays" },
        ],
      },
    ],
    image: "/bathroom-products-display.jpg",
    title: "Shop All Bathroom",
    description: "Discover all our products to service your guest bathrooms",
  }

  const bedroomMenu = {
    columns: [
      {
        title: "Bedding",
        links: [
          { name: "Bed Linen", href: "/bedroom/bed-linen" },
          { name: "Pillows", href: "/bedroom/pillows" },
          { name: "Duvets", href: "/bedroom/duvets" },
          { name: "Mattress Protectors", href: "/bedroom/mattress-protectors" },
        ],
      },
      {
        title: "Furniture",
        links: [
          { name: "Wardrobes", href: "/bedroom/wardrobes" },
          { name: "Hangers", href: "/bedroom/hangers" },
          { name: "Luggage Racks", href: "/bedroom/luggage-racks" },
        ],
      },
      {
        title: "Accessories",
        links: [
          { name: "Bedroom Accessories", href: "/bedroom/accessories" },
          { name: "Lighting", href: "/bedroom/lighting" },
        ],
      },
    ],
    image: "/luxury-hotel-bedding-white-linens.jpg",
    title: "Shop All Bedroom",
    description: "Create the perfect sleeping experience for your guests",
  }

  const toiletriesMenu = {
    columns: [
      {
        title: "Guest Toiletries",
        links: [
          { name: "Shampoo", href: "/toiletries/shampoo" },
          { name: "Conditioner", href: "/toiletries/conditioner" },
          { name: "Body Wash", href: "/toiletries/body-wash" },
          { name: "Soap", href: "/toiletries/soap" },
        ],
      },
      {
        title: "Dispensers",
        links: [
          { name: "Wall Mounted Dispensers", href: "/toiletries/wall-dispensers" },
          { name: "Refills", href: "/toiletries/refills" },
        ],
      },
      {
        title: "Packaging",
        links: [
          { name: "Bottles", href: "/toiletries/bottles" },
          { name: "Tubes", href: "/toiletries/tubes" },
        ],
      },
    ],
    image: "/luxury-hotel-toiletries-and-amenities.jpg",
    title: "Shop All Toiletries",
    description: "Premium toiletries for your guests",
  }

  const menuData = category === "bathroom" ? bathroomMenu : category === "bedroom" ? bedroomMenu : toiletriesMenu

  return (
    <div className="absolute left-0 right-0 top-full bg-white border border-gray-200 shadow-xl z-[9999] min-h-[400px]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Menu columns - 8 columns */}
          <div className="col-span-8">
            <div className="grid grid-cols-4 gap-6">
              {menuData.columns.map((column, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link 
                          href={link.href} 
                          className="text-sm text-gray-600 hover:text-[#084b25] transition-colors duration-200 block py-1 hover:pl-2"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Promotional section - 4 columns */}
          <div className="col-span-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 h-full">
              <div className="relative h-52">
                <Image
                  src={menuData.image || "/api/placeholder/400/300"}
                  alt={menuData.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-xl mb-2">{menuData.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{menuData.description}</p>
                <Link 
                  href={`/${category}`}
                  className="inline-flex items-center bg-[#084b25] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#06391d] transition-colors text-sm"
                >
                  View All Products
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
