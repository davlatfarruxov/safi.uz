"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

interface MegaDropdownProps {
  category: "bathroom" | "bedroom" | "toiletries" | "amenities" | "eco"
}

export function MegaDropdown({ category }: MegaDropdownProps) {
  const { t } = useLanguage()

  const bathroomMenu = {
    columns: [
      {
        title: t("towels.comfort") || "Towels & Comfort",
        links: [
          { name: t("towels") || "Towels", href: "/bathroom" },
          { name: t("hand.towels") || "Hand Towels & Face Cloths", href: "/bathroom" },
          { name: t("bathrobes") || "Bathrobes", href: "/bathroom" },
          { name: t("slippers") || "Slippers", href: "/bathroom" },
        ],
      },
      {
        title: t("bathroom.equipment") || "Bathroom Equipment",
        links: [
          { name: t("bath.shower.mats") || "Bath & Shower Mats", href: "/bathroom" },
          { name: t("mirrors") || "Mirrors", href: "/bathroom" },
          { name: t("scales") || "Scales", href: "/bathroom" },
          { name: t("bins") || "Bins", href: "/bathroom" },
          { name: t("hygiene.bag.dispensers") || "Hygiene Bag Dispensers", href: "/bathroom" },
          { name: t("tissue.box.covers") || "Tissue Box Covers", href: "/bathroom" },
          { name: t("toilet.brushes") || "Toilet Brushes", href: "/bathroom" },
        ],
      },
      {
        title: t("consumables") || "Consumables",
        links: [
          { name: t("guest.amenities") || "Guest Amenities", href: "/bathroom" },
          { name: t("toiletries") || "Toiletries", href: "/bathroom" },
        ],
      },
      {
        title: t("accessories") || "Accessories",
        links: [
          { name: t("bathroom.accessories") || "Bathroom Accessories", href: "/bathroom" },
          { name: t("display.trays") || "Display Trays", href: "/bathroom" },
        ],
      },
    ],
    featuredProducts: [
      {
        name: "Premium Hotel Towels",
        price: "$45.99",
        image: "/api/placeholder/120/120",
        href: "/bathroom/towels/premium"
      },
      {
        name: "Luxury Bathrobes",
        price: "$89.99", 
        image: "/api/placeholder/120/120",
        href: "/bathroom/bathrobes/luxury"
      },
      {
        name: "Spa Slippers",
        price: "$12.99",
        image: "/api/placeholder/120/120", 
        href: "/bathroom/slippers/spa"
      }
    ],
    heroImage: "/api/placeholder/400/300",
    title: t("shop.all.bathroom") || "Shop All Bathroom",
    description: t("discover.bathroom.products") || "Discover all our products to service your guest bathrooms",
  }

  const toiletriesMenu = {
    columns: [
      {
        title: t("guest.toiletries") || "Guest Toiletries",
        links: [
          { name: t("shampoo") || "Shampoo", href: "/toiletries" },
          { name: t("conditioner") || "Conditioner", href: "/toiletries" },
          { name: t("body.wash") || "Body Wash", href: "/toiletries" },
          { name: t("soap") || "Soap", href: "/toiletries" },
        ],
      },
      {
        title: t("dispensers") || "Dispensers", 
        links: [
          { name: t("wall.dispensers") || "Wall Mounted Dispensers", href: "/toiletries" },
          { name: t("refills") || "Refills", href: "/toiletries" },
        ],
      },
      {
        title: t("packaging") || "Packaging",
        links: [
          { name: t("bottles") || "Bottles", href: "/toiletries" },
          { name: t("tubes") || "Tubes", href: "/toiletries" },
        ],
      },
    ],
    featuredProducts: [
      {
        name: "Geneva Green Dispensers",
        price: "$24.99",
        image: "/api/placeholder/120/120",
        href: "/toiletries/dispensers/geneva"
      },
      {
        name: "Natural Shampoo Set",
        price: "$18.99",
        image: "/api/placeholder/120/120",
        href: "/toiletries/shampoo/natural"
      },
      {
        name: "Eco Body Wash",
        price: "$15.99",
        image: "/api/placeholder/120/120",
        href: "/toiletries/body-wash/eco"
      }
    ],
    heroImage: "/api/placeholder/400/300",
    title: t("shop.all.toiletries") || "Shop All Toiletries",
    description: t("premium.toiletries.guests") || "Premium toiletries for your guests",
  }

  const amenitiesMenu = {
    columns: [
      {
        title: t("welcome.kits") || "Welcome Kits",
        links: [
          { name: t("premium.welcome") || "Premium Welcome Kits", href: "/" },
          { name: t("budget.welcome") || "Budget Welcome Kits", href: "" },
          { name: t("custom.welcome") || "Custom Welcome Kits", href: "" },
        ],
      },
      {
        title: t("room.amenities") || "Room Amenities",
        links: [
          { name: t("coffee.station") || "Coffee Station", href: "" },
          { name: t("mini.bar") || "Mini Bar Supplies", href: "" },
          { name: t("room.service") || "Room Service", href: "" },
        ],
      },
      {
        title: t("spa.wellness") || "Spa & Wellness",
        links: [
          { name: t("spa.amenities") || "Spa Amenities", href: "" },
          { name: t("wellness.kits") || "Wellness Kits", href: "" },
        ],
      },
    ],
    featuredProducts: [
      {
        name: "Premium Welcome Kit",
        price: "$89.99",
        image: "/api/placeholder/120/120",
        href: "/amenities/welcome-kits/premium"
      },
      {
        name: "Coffee Station Set",
        price: "$124.99",
        image: "/api/placeholder/120/120",
        href: "/amenities/coffee-station/deluxe"
      },
      {
        name: "Spa Wellness Kit",
        price: "$156.99",
        image: "/api/placeholder/120/120",
        href: "/amenities/spa/wellness"
      }
    ],
    heroImage: "/api/placeholder/400/300",
    title: t("shop.all.amenities") || "Shop All Amenities",
    description: t("complete.amenity.solutions") || "Complete amenity solutions for exceptional guest experiences",
  }

  const getMenuData = () => {
    switch(category) {
      case "bathroom": return bathroomMenu
      case "toiletries": return toiletriesMenu  
      case "amenities": return amenitiesMenu
      default: return bathroomMenu
    }
  }

  const menuData = getMenuData()

  return (
    <div className="absolute left-0 top-full bg-white border border-gray-200 shadow-lg z-[9999] min-w-[280px] rounded-md">
      <div className="p-4">
        {/* Single column with all links */}
        <div className="space-y-4">
          {menuData.columns.map((column, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm border-b border-gray-100 pb-1">
                {column.title}
              </h3>
              <ul className="space-y-1 mb-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-gray-600 hover:text-[#084b25] hover:bg-gray-50 transition-colors block py-1 px-2 rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* View All link */}
          <div className="border-t border-gray-200 pt-3">
            <Link 
              href={`/${category}`}
              className="block text-center bg-[#084b25] text-white py-2 px-4 rounded text-sm font-medium hover:bg-[#06391d] transition-colors"
            >
              View All {menuData.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
