import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hotel, Users, Award, Globe, ArrowRight, Target, Heart, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Hotel className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-foreground tracking-tight">Safí Hotel Collection</h1>
                <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                  Premium B2B Supplies
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/catalog">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  Products
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  Services
                </Button>
              </Link>
              <Button variant="ghost" className="text-primary font-medium">
                About
              </Button>
              <Link href="/partners">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  Partners
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  Contact
                </Button>
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Link href="/contact">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-8 bg-accent/20 text-accent-foreground border-accent/30">
            Established 2010 • 14+ Years of Excellence
          </Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 text-balance">
            Redefining Hospitality
            <span className="block text-primary">Standards Worldwide</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            From our humble beginnings as a local supplier to becoming the trusted partner of over 10,000 hotels
            globally, Safí Hotel Collection has consistently elevated the hospitality industry through premium quality
            and innovative solutions.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Guided by unwavering principles that drive every decision and partnership we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Excellence</h3>
              <p className="text-muted-foreground text-pretty">
                We pursue perfection in every product, service, and interaction, setting the gold standard for
                hospitality supplies.
              </p>
            </Card>

            <Card className="text-center p-8 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Partnership</h3>
              <p className="text-muted-foreground text-pretty">
                We build lasting relationships with our clients, understanding their unique needs and growing together
                as trusted partners.
              </p>
            </Card>

            <Card className="text-center p-8 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground text-pretty">
                We continuously evolve our offerings, embracing new technologies and trends to keep our partners ahead
                of the curve.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-8">Our Story</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-pretty">
                  Founded in 2010 by hospitality veterans Maria Safí and Ahmed Collection, our company began with a
                  simple yet powerful vision: to provide hotels with supplies that match their commitment to guest
                  satisfaction.
                </p>
                <p className="text-pretty">
                  Starting with just five local hotels in Uzbekistan, we quickly gained recognition for our attention to
                  detail, premium quality products, and personalized service approach. Word spread throughout the
                  hospitality community, and demand for our services grew exponentially.
                </p>
                <p className="text-pretty">
                  Today, we serve over 10,000 properties across 45 countries, from boutique bed-and-breakfasts to
                  international luxury chains. Our success stems from never losing sight of our core principle: every
                  hotel deserves supplies that reflect their commitment to excellence.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Partner With Us
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center bg-card/50 border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Hotels Served</div>
              </Card>
              <Card className="p-6 text-center bg-card/50 border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">45</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </Card>
              <Card className="p-6 text-center bg-card/50 border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">14+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center bg-card/50 border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Meet the visionaries driving innovation and excellence in hospitality supplies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">Maria Safí</h3>
              <p className="text-accent font-medium mb-4">Co-Founder & CEO</p>
              <p className="text-sm text-muted-foreground text-pretty">
                20+ years in hospitality management, former GM of luxury hotel chains. Passionate about elevating guest
                experiences through quality supplies.
              </p>
            </Card>

            <Card className="text-center p-8 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">Ahmed Collection</h3>
              <p className="text-accent font-medium mb-4">Co-Founder & COO</p>
              <p className="text-sm text-muted-foreground text-pretty">
                Supply chain expert with 18+ years optimizing operations for hospitality. Ensures every delivery meets
                our premium standards.
              </p>
            </Card>

            <Card className="text-center p-8 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Globe className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">Sarah Johnson</h3>
              <p className="text-accent font-medium mb-4">Global Sales Director</p>
              <p className="text-sm text-muted-foreground text-pretty">
                International business development specialist. Leads our expansion into new markets while maintaining
                service excellence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Elevate Your Hotel?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of hotels worldwide who trust Safí Hotel Collection for their premium supply needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/catalog">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Browse Catalog
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center">
                  <Hotel className="h-6 w-6 text-background" />
                </div>
                <div>
                  <span className="text-xl font-serif font-bold text-background">Safí Hotel Collection</span>
                  <p className="text-xs text-background/70 font-medium tracking-wide uppercase">Premium B2B Supplies</p>
                </div>
              </div>
              <p className="text-background/80 text-pretty max-w-md leading-relaxed">
                Elevating hospitality standards through premium supplies, expert consulting, and innovative design
                solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-background">Products</h4>
              <ul className="space-y-3 text-sm text-background/80">
                <li className="hover:text-background cursor-pointer transition-colors">Bedroom Supplies</li>
                <li className="hover:text-background cursor-pointer transition-colors">Bathroom Amenities</li>
                <li className="hover:text-background cursor-pointer transition-colors">Kitchen Equipment</li>
                <li className="hover:text-background cursor-pointer transition-colors">General Supplies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-background">Services</h4>
              <ul className="space-y-3 text-sm text-background/80">
                <li className="hover:text-background cursor-pointer transition-colors">Design Consulting</li>
                <li className="hover:text-background cursor-pointer transition-colors">Bulk Orders</li>
                <li className="hover:text-background cursor-pointer transition-colors">Express Delivery</li>
                <li className="hover:text-background cursor-pointer transition-colors">24/7 Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-background">Company</h4>
              <ul className="space-y-3 text-sm text-background/80">
                <li className="hover:text-background cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-background cursor-pointer transition-colors">Our Partners</li>
                <li className="hover:text-background cursor-pointer transition-colors">Case Studies</li>
                <li className="hover:text-background cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-sm text-background/60">© 2024 Safí Hotel Collection. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
