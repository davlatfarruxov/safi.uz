"use client"

import { useLanguage } from "@/lib/language-context"

interface PageHeaderProps {
  titleKey: string
  descriptionKey: string
}

export function PageHeader({ titleKey, descriptionKey }: PageHeaderProps) {
  const { t } = useLanguage()

  return (
    <div className="mb-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {t(titleKey)}
      </h1>
      <p className="text-gray-600">
        {t(descriptionKey)}
      </p>
    </div>
  )
}