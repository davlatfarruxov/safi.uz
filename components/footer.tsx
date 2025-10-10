"use client"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    [t("shop")]: [
      t("bedroom"),
      t("bathroom"), 
      t("toiletries"),
      t("guest.amenities"),
      t("room.accessories")
    ],
    [t("company")]: [
      t("about.us"),
      t("bespoke.solutions"),
      t("eco.friendly.products"),
      t("contact"),
      t("blog")
    ],
    [t("support")]: [
      t("faqs"),
      t("shipping.delivery"),
      t("returns.policy"),
      t("terms.conditions"),
      t("privacy.policy")
    ],
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-bold text-[#084b25] mb-3 md:mb-4">Safi Hotel Collection</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3 md:gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-3 md:mb-4">{title}</h4>
              <ul className="space-y-1.5 md:space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors block py-0.5">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 md:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Safi Hotel Collection. {t("all.rights.reserved")}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground text-center md:text-right">
              {t("free.delivery")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
