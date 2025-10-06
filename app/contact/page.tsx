"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MessageSquare, MapPin, Clock, Lightbulb, Truck, Award, ArrowRight } from "lucide-react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b bg-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-block rounded-full bg-[#f5e6d3] px-4 py-1.5 text-sm font-medium text-[#084b25]">
              {t.contactPage.badge}
            </div>
            <h1 className="mb-6 text-balance font-serif text-4xl font-bold text-foreground lg:text-5xl">
              {t.contactPage.title}
            </h1>
            <p className="text-pretty text-lg text-muted-foreground">{t.contactPage.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Multiple Ways to Connect */}
      <section className="border-b bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-serif text-3xl font-bold text-foreground">{t.contactPage.multipleWays.title}</h2>
            <p className="text-muted-foreground">{t.contactPage.multipleWays.subtitle}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Phone Support */}
            <Card className="relative overflow-hidden p-8 text-center transition-shadow hover:shadow-lg">
              {t.contactPage.multipleWays.phone.badge && (
                <div className="absolute right-4 top-4 rounded-full bg-[#084b25] px-3 py-1 text-xs font-medium text-white">
                  {t.contactPage.multipleWays.phone.badge}
                </div>
              )}
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#084b25]">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {t.contactPage.multipleWays.phone.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">{t.contactPage.multipleWays.phone.description}</p>
              <a
                href={`tel:${t.contactPage.multipleWays.phone.number}`}
                className="mb-2 block font-semibold text-[#084b25] hover:underline"
              >
                {t.contactPage.multipleWays.phone.number}
              </a>
              <p className="text-xs text-muted-foreground">{t.contactPage.multipleWays.phone.support}</p>
            </Card>

            {/* Email Support */}
            <Card className="p-8 text-center transition-shadow hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#084b25]">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {t.contactPage.multipleWays.email.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">{t.contactPage.multipleWays.email.description}</p>
              <a
                href={`mailto:${t.contactPage.multipleWays.email.address}`}
                className="mb-2 block font-semibold text-[#084b25] hover:underline"
              >
                {t.contactPage.multipleWays.email.address}
              </a>
              <p className="text-xs text-muted-foreground">{t.contactPage.multipleWays.email.response}</p>
            </Card>

            {/* Live Chat */}
            <Card className="p-8 text-center transition-shadow hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#084b25]">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {t.contactPage.multipleWays.chat.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">{t.contactPage.multipleWays.chat.description}</p>
              <p className="mb-2 font-semibold text-[#084b25]">{t.contactPage.multipleWays.chat.availability}</p>
              <p className="text-xs text-muted-foreground">{t.contactPage.multipleWays.chat.hours}</p>
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
              <h2 className="mb-3 font-serif text-3xl font-bold text-foreground">{t.contactPage.form.title}</h2>
              <p className="mb-8 text-muted-foreground">{t.contactPage.form.subtitle}</p>

              {submitted ? (
                <Card className="p-8">
                  <div className="text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{t.confirmation.thankYou}</h3>
                    <p className="text-muted-foreground">We'll get back to you within 2 hours</p>
                  </div>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName" className="text-foreground">
                        {t.contactPage.form.firstName} *
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
                      <Label htmlFor="lastName" className="text-foreground">
                        {t.contactPage.form.lastName} *
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
                    <Label htmlFor="email" className="text-foreground">
                      {t.contactPage.form.email} *
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
                    <Label htmlFor="hotelCompany" className="text-foreground">
                      {t.contactPage.form.hotelCompany} *
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
                    <Label htmlFor="phone" className="text-foreground">
                      {t.contactPage.form.phone} *
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
                    <Label htmlFor="message" className="text-foreground">
                      {t.contactPage.form.help} *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={t.contactPage.form.helpPlaceholder}
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
                    <Label htmlFor="consent" className="text-sm leading-relaxed text-muted-foreground">
                      {t.contactPage.form.consent}
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-[#084b25] text-white hover:bg-[#084b25]/90">
                    {t.contactPage.form.submit}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </div>

            {/* Our Locations */}
            <div>
              <h2 className="mb-3 font-serif text-3xl font-bold text-foreground">{t.contactPage.locations.title}</h2>
              <p className="mb-8 text-muted-foreground">{t.contactPage.locations.subtitle}</p>

              <div className="space-y-6">
                {/* Samarkand */}
                <Card className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      {t.contactPage.locations.samarkand.city}
                    </h3>
                    <span className="rounded-full bg-[#f5e6d3] px-3 py-1 text-xs font-medium text-[#084b25]">
                      {t.contactPage.locations.samarkand.badge}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#084b25]" />
                      <p className="text-sm text-muted-foreground">{t.contactPage.locations.samarkand.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 flex-shrink-0 text-[#084b25]" />
                      <a href="tel:+998221234567" className="text-sm text-muted-foreground hover:text-[#084b25]">
                        +998 22 123 4567
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 flex-shrink-0 text-[#084b25]" />
                      <a
                        href={`mailto:${t.contactPage.locations.samarkand.email}`}
                        className="text-sm text-muted-foreground hover:text-[#084b25]"
                      >
                        {t.contactPage.locations.samarkand.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 flex-shrink-0 text-[#084b25]" />
                      <p className="text-sm text-muted-foreground">{t.contactPage.locations.samarkand.timezone}</p>
                    </div>
                  </div>
                </Card>

                {/* Tashkent */}
                <Card className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      {t.contactPage.locations.tashkent.city}
                    </h3>
                    <span className="rounded-full bg-[#f5e6d3] px-3 py-1 text-xs font-medium text-[#084b25]">
                      {t.contactPage.locations.tashkent.badge}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#084b25]" />
                      <p className="text-sm text-muted-foreground">{t.contactPage.locations.tashkent.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 flex-shrink-0 text-[#084b25]" />
                      <a href="tel:+998221234567" className="text-sm text-muted-foreground hover:text-[#084b25]">
                        +998 22 123 4567
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 flex-shrink-0 text-[#084b25]" />
                      <a
                        href={`mailto:${t.contactPage.locations.tashkent.email}`}
                        className="text-sm text-muted-foreground hover:text-[#084b25]"
                      >
                        {t.contactPage.locations.tashkent.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 flex-shrink-0 text-[#084b25]" />
                      <p className="text-sm text-muted-foreground">{t.contactPage.locations.tashkent.timezone}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="border-y bg-muted/30 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">
            {t.contactPage.offer.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#084b25]">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">{t.contactPage.offer.consultation.title}</h3>
                <p className="text-sm text-muted-foreground">{t.contactPage.offer.consultation.description}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#084b25]">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">{t.contactPage.offer.delivery.title}</h3>
                <p className="text-sm text-muted-foreground">{t.contactPage.offer.delivery.description}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#084b25]">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">{t.contactPage.offer.quality.title}</h3>
                <p className="text-sm text-muted-foreground">{t.contactPage.offer.quality.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Have Questions */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-3 font-serif text-3xl font-bold text-foreground">{t.contactPage.faq.title}</h2>
          <p className="mb-8 text-muted-foreground">{t.contactPage.faq.subtitle}</p>
          <Button
            variant="outline"
            size="lg"
            className="border-[#084b25] text-[#084b25] hover:bg-[#084b25]/10 bg-transparent"
          >
            {t.contactPage.faq.button}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
