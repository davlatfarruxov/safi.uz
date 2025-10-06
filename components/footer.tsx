"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/safi-logo-ALzEZlSMWKFbRVKjJT8fDSuUQ2HgXh.png"
              alt="Safi Hotel Collection"
              width={160}
              height={53}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{t.productPreview.title}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t.productPreview.bedroom.title}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t.productPreview.kitchen.title}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t.productPreview.hygiene.title}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {t.productPreview.electronics.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">+998 90 123 45 67</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">info@safihotel.uz</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">{t.footer.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2025 Safi Hotel Collection. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
