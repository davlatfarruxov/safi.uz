"use client"

import type React from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MessageSquare, MapPin, Clock, Lightbulb, Truck, Award, ArrowRight } from "lucide-react"
import { useState } from "react"
import { GoogleMap } from "@/components/google-map"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    hotelCompany: "",
    phone: "",
    message: "",
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        hotelCompany: "",
        phone: "",
        message: "",
        consent: false,
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-block rounded-full bg-[#f5e6d3] px-4 py-1.5 text-sm font-medium text-[#084b25]">
              {t("contact")}
            </div>
            <h1 className="mb-6 text-balance font-serif text-4xl font-bold text-gray-900 lg:text-5xl">
              {t("contact.title")}
            </h1>
            <p className="text-pretty text-lg text-gray-600">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Multiple Ways to Connect */}
      <section className="border-b bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-serif text-3xl font-bold text-gray-900">
              {t("contact.ways.title")}
            </h2>
            <p className="text-gray-600">
              {t("contact.ways.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Phone Support */}
            <Card className="relative overflow-hidden p-8 text-center transition-shadow hover:shadow-lg">
              <div className="absolute right-4 top-4 rounded-full bg-[#084b25] px-3 py-1 text-xs font-medium text-white">
                24/7
              </div>
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#084b25]">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">
                {t("contact.phone.title")}
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                {t("contact.phone.description")}
              </p>
              <a
                href="tel:+998221234567"
                className="mb-2 block font-semibold text-[#084b25] hover:underline"
              >
                +998 22 123 4567
              </a>
              <p className="text-xs text-gray-500">24/7 Support Available</p>
            </Card>

            {/* Email Support */}
            <Card className="p-8 text-center transition-shadow hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#084b25]">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-900">
                {t("contact.email.title")}
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                {t("contact.email.description")}
              </p>
              <a
                href="mailto:info@safihotelcollection.com"
                className="mb-2 block font-semibold text-[#084b25] hover:underline"
              >
                info@safihotelcollection.com
              </a>
              <p className="text-xs text-gray-500">Response within 2 hours</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Form and Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-3 font-serif text-3xl font-bold text-gray-900">
                {t("contact.form.title")}
              </h2>
              <p className="mb-8 text-gray-600">
                {t("contact.form.subtitle")}
              </p>

              {submitted ? (
                <Card className="p-8">
                  <div className="text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{t("contact.form.thankYou")}</h3>
                    <p className="text-gray-600">{t("contact.form.response")}</p>
                  </div>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-900">
                        {t("contact.form.firstName")} *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-900">
                        {t("contact.form.lastName")} *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-900">
                      {t("contact.form.email")} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@hotel.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hotelCompany" className="text-gray-900">
                      {t("contact.form.company")} *
                    </Label>
                    <Input
                      id="hotelCompany"
                      placeholder="Grand Hotel & Resort"
                      value={formData.hotelCompany}
                      onChange={(e) => setFormData({ ...formData, hotelCompany: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-900">
                      {t("contact.form.phone")} *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+998 22 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-900">
                      {t("contact.form.message")} *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.form.messagePlaceholder")}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="mt-2"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                    />
                    <Label htmlFor="consent" className="text-sm leading-relaxed text-gray-600">
                      {t("contact.form.consent")}
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-[#084b25] text-white hover:bg-[#084b25]/90">
                    {t("contact.form.submit")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </div>

            {/* Google Map and Locations */}
            <div>
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="border-y bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
            {t("contact.offer.title")}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#084b25]">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">{t("contact.offer.consultation")}</h3>
                <p className="text-sm text-gray-600">
                  {t("contact.offer.consultationDesc")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#084b25]">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">{t("contact.offer.delivery")}</h3>
                <p className="text-sm text-gray-600">
                  {t("contact.offer.deliveryDesc")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#084b25]">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">{t("contact.offer.quality")}</h3>
                <p className="text-sm text-gray-600">
                  {t("contact.offer.qualityDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Have Questions */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-3 font-serif text-3xl font-bold text-gray-900">{t("contact.faq.title")}</h2>
          <p className="mb-8 text-gray-600">
            {t("contact.faq.subtitle")}
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-[#084b25] text-[#084b25] hover:bg-[#084b25]/10 bg-transparent"
          >
            {t("contact.faq.button")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}