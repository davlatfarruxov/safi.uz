"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useRouter } from "next/navigation"

interface NewProductsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewProductsModal({ isOpen, onClose }: NewProductsModalProps) {
  const { t } = useLanguage()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.phone.trim()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Close modal and redirect
    onClose()
    router.push("/products?category=new")
    
    // Reset form
    setFormData({ name: "", phone: "" })
    setIsSubmitting(false)
  }

  const handleClose = () => {
    setFormData({ name: "", phone: "" })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6 animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header with close button */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#084b25] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">✨</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#084b25] font-serif">
                {t("modal.new.title")}
              </h2>
              <p className="text-sm text-gray-600">
                {t("modal.new.subtitle")}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              {t("modal.new.name")} *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t("modal.new.namePlaceholder")}
              required
              className="mt-1 border-gray-300 focus:border-[#084b25] focus:ring-[#084b25]"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              {t("modal.new.phone")} *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t("modal.new.phonePlaceholder")}
              required
              className="mt-1 border-gray-300 focus:border-[#084b25] focus:ring-[#084b25]"
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting || !formData.name.trim() || !formData.phone.trim()}
              className="w-full bg-[#084b25] hover:bg-[#06391d] text-white py-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {t("modal.new.submitting")}
                </div>
              ) : (
                t("modal.new.submit")
              )}
            </Button>
          </div>
        </form>

        {/* Footer note */}
        <p className="text-xs text-gray-500 text-center mt-4">
          {t("modal.new.note")}
        </p>
      </div>
    </div>
  )
}