"use client"

import { useLanguage } from "@/lib/language-context"

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
      title: t("extensive.product.range"),
      description: t("extensive.product.range.desc"),
    },
    {
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="3" />
          <path d="M12 11c-3 0-5 2-5 4v2h10v-2c0-2-2-4-5-4z" />
          <path d="M8 8c0-2 1-3 2-3s2 1 2 3" />
        </svg>
      ),
      title: t("bespoke.solutions"),
      description: t("bespoke.solutions.desc"),
    },
    {
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
          <path d="M12 12v4" />
        </svg>
      ),
      title: t("luxury.and.quality"),
      description: t("luxury.and.quality.desc"),
    },
    {
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 8l4 4-4 4" />
          <path d="M3 12h18" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: t("environmental.responsibility"),
      description: t("environmental.responsibility.desc"),
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-3 md:gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0 text-gray-400">{feature.icon}</div>
              <div className="min-w-0">
                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1 leading-tight">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
