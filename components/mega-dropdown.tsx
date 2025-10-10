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
    <div className="absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-5 gap-8">
          {/* Menu columns */}
          {menuData.columns.map((column, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-[#7B6B8F]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Promotional section */}
          <div className="col-span-1">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={menuData.image || "/placeholder.svg"}
                alt={menuData.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{menuData.title}</h3>
                <p className="text-sm text-gray-600">{menuData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
