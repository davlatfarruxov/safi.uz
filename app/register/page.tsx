"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Hotel, ArrowLeft, AlertCircle, Star, Building2 } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    hotelName: "",
    starRating: 0,
    contactPerson: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.starRating === 0) {
      setError("Please select your hotel's star rating")
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long")
      return
    }

    setLoading(true)

    try {
      const success = await register({
        hotelName: formData.hotelName,
        starRating: formData.starRating,
        contactPerson: formData.contactPerson,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        address: formData.address,
      })

      if (success) {
        router.push(`/catalog?stars=${formData.starRating}`)
      } else {
        setError("Registration failed. Please try again.")
      }
    } catch (err) {
      setError("An error occurred during registration. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const updateFormData = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Hotel className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-serif font-bold text-foreground">HotelSupply Pro</h1>
          </div>
          <p className="text-muted-foreground">B2B Hotel Supplies Platform</p>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif">Register Your Hotel</CardTitle>
            <CardDescription>
              Join our exclusive B2B platform for professional hotel supplies tailored to your establishment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Hotel Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Hotel Information</h3>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hotelName">Hotel Name *</Label>
                  <Input
                    id="hotelName"
                    placeholder="Grand Plaza Hotel"
                    value={formData.hotelName}
                    onChange={(e) => updateFormData("hotelName", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="starRating">Hotel Star Rating *</Label>
                  <Select
                    value={formData.starRating.toString()}
                    onValueChange={(value) => updateFormData("starRating", Number.parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your hotel's star rating" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((stars) => (
                        <SelectItem key={stars} value={stars.toString()}>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < stars ? "text-primary fill-primary" : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <span>
                              {stars === 1 && "Budget Hotel"}
                              {stars === 2 && "Economy Hotel"}
                              {stars === 3 && "Mid-Range Hotel"}
                              {stars === 4 && "Upscale Hotel"}
                              {stars === 5 && "Luxury Hotel"}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>

                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Contact Person *</Label>
                  <Input
                    id="contactPerson"
                    placeholder="John Smith"
                    value={formData.contactPerson}
                    onChange={(e) => updateFormData("contactPerson", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Business Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contact@yourhotel.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Hotel Address</Label>
                  <Textarea
                    id="address"
                    placeholder="123 Hotel Street, City, State 12345"
                    value={formData.address}
                    onChange={(e) => updateFormData("address", e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              {/* Account Security */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Account Security</h3>

                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Minimum 6 characters"
                    value={formData.password}
                    onChange={(e) => updateFormData("password", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating Account..." : "Register Hotel Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            By registering, you confirm that you represent a legitimate hotel business.
            <br />
            This platform is exclusively for B2B hotel supply purchases.
          </p>
        </div>
      </div>
    </div>
  )
}
