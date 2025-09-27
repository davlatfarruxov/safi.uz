"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Hotel, ArrowLeft, AlertCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const success = await login(email, password)
      if (success) {
        router.push("/catalog?stars=3") // Default to 3-star catalog
      } else {
        setError("Invalid email or password. Please try again.")
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Hotel className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-serif font-bold text-foreground">Safi hotel collection</h1>
          </div>
          <p className="text-muted-foreground">B2B Hotel Supplies Platform</p>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif">Welcome Back</CardTitle>
            <CardDescription>Sign in to your hotel account to access your personalized catalog</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Hotel Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contact@yourhotel.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                New hotel partner?{" "}
                <Link href="/register" className="text-primary hover:underline font-medium">
                  Register your hotel
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            This platform is exclusively for registered hotel businesses.
            <br />
            Individual purchases are not permitted.
          </p>
        </div>
      </div>
    </div>
  )
}
