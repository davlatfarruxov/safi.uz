"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

interface MegaDropdownProps {
  category: "new" | "eco" | "bedroom" | "bathroom" | "guest" | "components" | "cleaning"
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
        image: "/white-luxury-bath-towels.jpg",
        href: "/bathroom/towels/premium"
      },
      {
        name: "Luxury Bathrobes",
        price: "$89.99", 
        image: "/white-velour-bathrobe.jpg",
        href: "/bathroom/bathrobes/luxury"
      },
      {
        name: "Spa Slippers",
        price: "$12.99",
        image: "/white-hotel-slippers.jpg", 
        href: "/bathroom/slippers/spa"
      }
    ],
    heroImage: "/luxury-hotel-bathroom-with-towels.jpg",
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
        image: "/green-pump-dispenser-bottle-body-wash.jpg",
        href: "/toiletries/dispensers/geneva"
      },
      {
        name: "Natural Shampoo Set",
        price: "$18.99",
        image: "/green-pump-dispenser-bottle-hair-body-wash.jpg",
        href: "/toiletries/shampoo/natural"
      },
      {
        name: "Eco Body Wash",
        price: "$15.99",
        image: "/green-pump-dispenser-bottle-body-lotion.jpg",
        href: "/toiletries/body-wash/eco"
      }
    ],
    heroImage: "/luxury-hotel-toiletries-and-amenities.jpg",
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
        image: "/hotel-guest-amenities-display.jpg",
        href: "/amenities/welcome-kits/premium"
      },
      {
        name: "Coffee Station Set",
        price: "$124.99",
        image: "/luxury-hotel-room-accessories.jpg",
        href: "/amenities/coffee-station/deluxe"
      },
      {
        name: "Spa Wellness Kit",
        price: "$156.99",
        image: "/white-luxury-bath-towels.jpg",
        href: "/amenities/spa/wellness"
      }
    ],
    heroImage: "/hotel-guest-amenities-display.jpg",
    title: t("shop.all.amenities") || "Shop All Amenities",
    description: t("complete.amenity.solutions") || "Complete amenity solutions for exceptional guest experiences",
  }

  const newMenu = {
    columns: [
      {
        title: "Новые поступления",
        links: [
          { name: "Последние новинки", href: "/new" },
          { name: "Популярные товары", href: "/new/popular" },
          { name: "Рекомендуемые", href: "/new/recommended" },
        ],
      },
    ],
    featuredProducts: [],
    heroImage: "/safi-banner1.JPG",
    title: "Все новинки",
    description: "Откройте для себя наши последние поступления",
  }

  const ecoMenu = {
    columns: [
      {
        title: "ЭКО продукты",
        links: [
          { name: "Биоразлагаемые товары", href: "/eco-concept" },
          { name: "Переработанные материалы", href: "/eco-concept/recycled" },
          { name: "Экологичная упаковка", href: "/eco-concept/packaging" },
        ],
      },
    ],
    featuredProducts: [],
    heroImage: "/safi-banner2.JPG",
    title: "ЭКО-концепция",
    description: "Экологически чистые решения для отелей",
  }

  const bedroomMenu = {
    columns: [
      {
        title: "Постельное белье",
        links: [
          { name: "Простыни", href: "/bedroom-zone" },
          { name: "Подушки", href: "/bedroom-zone/pillows" },
          { name: "Одеяла", href: "/bedroom-zone/blankets" },
        ],
      },
    ],
    featuredProducts: [],
    heroImage: "/luxury-hotel-bedroom-with-white-linens.jpg",
    title: "Спальная зона",
    description: "Комфорт и качество для спальной зоны",
  }

  const guestMenu = {
    columns: [
      {
        title: t("ranges") || "Ranges",
        links: [
          { name: t("budget.range") || "Budget Range", href: "/guest-zone/budget" },
          { name: t("mid.range") || "Mid Range", href: "/guest-zone/mid" },
          { name: t("luxury.range") || "Luxury Range", href: "/guest-zone/luxury" },
          { name: t("eco.range") || "Eco Range", href: "/guest-zone/eco" },
        ],
      },
      {
        title: t("display.accessories") || "Display & Accessories",
        links: [
          { name: t("amenity.trays") || "Amenity Trays", href: "/guest-zone/trays" },
          { name: t("welcome.cards") || "Welcome Cards", href: "/guest-zone/cards" },
          { name: t("room.folders") || "Room Folders", href: "/guest-zone/folders" },
          { name: t("signage") || "Signage", href: "/guest-zone/signage" },
        ],
      },
      {
        title: t("product.type") || "Product Type",
        links: [
          { name: t("toiletries.kits") || "Toiletries Kits", href: "/guest-zone/toiletries" },
          { name: t("dental.kits") || "Dental Kits", href: "/guest-zone/dental" },
          { name: t("sewing.kits") || "Sewing Kits", href: "/guest-zone/sewing" },
          { name: t("shoe.care") || "Shoe Care", href: "/guest-zone/shoe-care" },
        ],
      },
    ],
    featuredProducts: [],
    heroImage: "/hotel-guest-amenities-display.jpg",
    title: t("shop.guest.amenities") || "Shop Guest Amenities",
    description: t("explore.guest.amenities") || "Explore our range of convenient guest amenities",
  }

  const componentsMenu = {
    columns: [
      {
        title: "Комплектующие",
        links: [
          { name: "Мебель", href: "/hotel-components" },
          { name: "Освещение", href: "/hotel-components/lighting" },
          { name: "Декор", href: "/hotel-components/decor" },
        ],
      },
    ],
    featuredProducts: [],
    heroImage: "/luxury-hotel-room-accessories.jpg",
    title: "Комплектующие отеля",
    description: "Все необходимое для оснащения отеля",
  }

  const cleaningMenu = {
    columns: [
      {
        title: "Уборочное оборудование",
        links: [
          { name: "Пылесосы", href: "/cleaning-equipment" },
          { name: "Моющие средства", href: "/cleaning-equipment/chemicals" },
          { name: "Инвентарь", href: "/cleaning-equipment/tools" },
        ],
      },
    ],
    featuredProducts: [],
    heroImage: "/bathroom-products-display.jpg",
    title: "Проф оборудование для уборки",
    description: "Профессиональное оборудование для уборки",
  }

  const getMenuData = () => {
    switch(category) {
      case "new": return newMenu
      case "eco": return ecoMenu
      case "bedroom": return bedroomMenu
      case "bathroom": return bathroomMenu
      case "guest": return guestMenu
      case "components": return componentsMenu
      case "cleaning": return cleaningMenu
      default: return bathroomMenu
    }
  }

  const menuData = getMenuData()

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-full bg-white border border-gray-200 shadow-xl z-[9999] rounded-lg overflow-hidden transition-all duration-300 ease-out opacity-100 scale-100 w-[95vw] max-w-6xl mt-0">
      <div className="flex w-full">
        {/* Left side - 3 columns */}
        <div className="flex-1 p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {menuData.columns.map((column, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide border-b border-gray-100 pb-2">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link 
                        href={link.href} 
                        className="text-sm text-gray-600 hover:text-[#084b25] hover:bg-gray-50 transition-all duration-200 block py-2 px-3 rounded-md hover:translate-x-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* View All link */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link 
              href={`/${category}`}
              className="inline-flex items-center bg-[#084b25] text-white py-3 px-6 rounded-lg text-sm font-medium hover:bg-[#06391d] transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              View All {menuData.title}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right side - Image box */}
        <div className="hidden lg:flex w-80 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex-col justify-center">
          <div className="text-center">
            <div className="mb-4 relative h-32 lg:h-48 w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src={menuData.heroImage}
                alt={menuData.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">
              {menuData.title}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {menuData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
