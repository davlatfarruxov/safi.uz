"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { createNewProductRequest } from "@/lib/api"
import toast from "react-hot-toast"

interface NewProductsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewProductsModal({ isOpen, onClose }: NewProductsModalProps) {
  const router = useRouter()
  const { t } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  })

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error(t("modal.new.fill.all"))
      return
    }

    setLoading(true)

    try {
      await createNewProductRequest(formData)
      toast.success(t("modal.new.success"))
      onClose()
      router.push("/new")
    } catch (error: any) {
      console.error("Error submitting request:", error)
      toast.error(error.response?.data?.message || t("modal.new.error"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t("modal.new.title")}
        </h2>
        <p className="text-gray-600 mb-6">
          {t("modal.new.subtitle")}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("modal.new.name")}
            </label>
            <Input
              type="text"
              placeholder={t("modal.new.namePlaceholder")}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("modal.new.phone")}
            </label>
            <Input
              type="tel"
              placeholder={t("modal.new.phonePlaceholder")}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="w-full"
            />
          </div>

          <p className="text-xs text-gray-500">
            {t("modal.new.note")}
          </p>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#084b25] hover:bg-[#06391d] text-white py-6 text-lg font-semibold"
          >
            {loading ? t("modal.new.submitting") : t("modal.new.submit")}
          </Button>
        </form>
      </div>
    </div>
  )
}
