"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages = [
    { code: "ru" as const, name: "Русский", flag: "🇷🇺" },
    { code: "uz" as const, name: "O'zbek", flag: "🇺🇿" },
    { code: "en" as const, name: "English", flag: "en" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1 md:gap-2 text-xs md:text-sm px-2 md:px-3">
          <Globe className="h-3 w-3 md:h-4 md:w-4" />
          <span className="hidden sm:inline text-xs md:text-sm">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-gray-100" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
