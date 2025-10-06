"use client"

import { Truck, Package, DollarSign } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export function USPSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const usps = [
    {
      icon: Truck,
      title: t.usp.fastDelivery.title,
      description: t.usp.fastDelivery.description,
    },
    {
      icon: Package,
      title: t.usp.completeSupply.title,
      description: t.usp.completeSupply.description,
    },
    {
      icon: DollarSign,
      title: t.usp.qualityPrice.title,
      description: t.usp.qualityPrice.description,
    },
  ]

  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {usps.map((usp, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <usp.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{usp.title}</h3>
              <p className="text-muted-foreground">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
