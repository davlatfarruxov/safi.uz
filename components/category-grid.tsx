"use client"

import { useLanguage } from "@/lib/language-context"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function CategoryGrid() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const categories = [
    {
      title: t("nav.bathroom.zone"),
      image: "/safi-banner1.JPG",
      href: "/new",
    },
    {
      title: t("nav.guest.zone"),
      image: "/safi-banner2.JPG",
      href: "/eco-concept",
    },
    {
      title: t("nav.hotel.components"),
      image: "/safi-banner3.JPG",
      href: "/bathroom-zone",
    },
    {
      title: t("nav.cleaning.equipment"),
      image: "/safi-banner1.JPG",
      href: "/cleaning-equipment",
    },
  ]

  return (
    <section ref={sectionRef} className="py-6 bg-gray-50">
      <div className="with-full mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.title} 
              href={category.href}
              className="group relative overflow-hidden rounded-lg aspect-square bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className={`w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 ${
                  isVisible ? 'scale-100' : 'scale-110'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center p-3">
                <h3 className="text-xs md:text-sm lg:text-base font-bold text-white text-center leading-tight">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
