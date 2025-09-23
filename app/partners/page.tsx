import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hotel, Star, Users, TrendingUp, Award, Globe, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"

const partnerTiers = [
  {
    tier: "Luxury Partners",
    description: "5-star hotels and luxury resorts worldwide",
    count: "2,500+",
    icon: Star,
    color: "bg-accent/20 text-accent-foreground border-accent/30",
  },
  {
    tier: "Premium Partners",
    description: "4-star upscale hotels and boutique properties",
    count: "3,200+",
    icon: Award,
    color: "bg-primary/20 text-primary border-primary/30",
  },
  {
    tier: "Select Partners",
    description: "3-star mid-range and business hotels",
    count: "4,300+",
    icon: Users,
    color: "bg-secondary/40 text-secondary-foreground border-secondary/60",
  },
]

const featuredPartners = [
  {
    name: "Grand Palace Hotels",
    type: "Luxury Chain",
    locations: "25 Properties",
    region: "Europe & Asia",
    logo: "/grand-palace-hotels-logo.png",
    description: "Premium 5-star hotel chain known for exceptional service and elegant accommodations.",
    partnership: "Since 2018",
    testimonial:
      "Safí Hotel Collection has been instrumental in maintaining our luxury standards across all properties. Their attention to detail and quality consistency is unmatched.",
    author: "Elena Rodriguez, VP of Operations",
  },
  {
    name: "Urban Boutique Collection",
    type: "Boutique Hotels",
    locations: "18 Properties",
    region: "North America",
    logo: "/urban-boutique-collection-logo.png",
    description: "Curated collection of design-forward boutique hotels in major metropolitan areas.",
    partnership: "Since 2019",
    testimonial:
      "The design consultation and custom supply solutions have helped us create unique experiences that our guests remember and share.",
    author: "Michael Chen, Creative Director",
  },
  {
    name: "Heritage Resort Group",
    type: "Resort Chain",
    locations: "12 Properties",
    region: "Caribbean & Pacific",
    logo: "/heritage-resort-group-logo.png",
    description: "Luxury resort destinations offering world-class hospitality and unforgettable experiences.",
    partnership: "Since 2017",
    testimonial:
      "Their sustainable supply options align perfectly with our environmental commitments while maintaining the luxury our guests expect.",
    author: "Sarah Thompson, Sustainability Director",
  },
  {
    name: "Business Elite Hotels",
    type: "Business Hotels",
    locations: "45 Properties",
    region: "Global",
    logo: "/business-elite-hotels-logo.png",
    description: "International business hotel network serving corporate travelers and events.",
    partnership: "Since 2020",
    testimonial:
      "Reliable delivery and consistent quality across all our locations. Their 24/7 support has been crucial for our operations.",
    author: "David Park, Global Procurement Manager",
  },
]

const partnershipBenefits = [
  {
    title: "Exclusive Pricing",
    description: "Volume-based pricing tiers with additional discounts for long-term partnerships",
    icon: TrendingUp,
  },
  {
    title: "Priority Support",
    description: "Dedicated account management and 24/7 priority customer service",
    icon: Users,
  },
  {
    title: "Custom Solutions",
    description: "Tailored product development and branding options for your unique needs",
    icon: Award,
  },
  {
    title: "Global Reach",
    description: "Consistent supply and service across all your properties worldwide",
    icon: Globe,
  },
]

const stats = [
  { number: "10,000+", label: "Hotel Partners" },
  { number: "45", label: "Countries" },
  { number: "99.8%", label: "Satisfaction Rate" },
  { number: "14+", label: "Years Experience" },
]

export default function PartnersPage() {
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
              <Link href="/about">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  About
                </Button>
              </Link>
              <Button variant="ghost" className="text-primary font-medium">
                Partners
              </Button>
              <Link href="/blog">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  Blog
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
                  Become a Partner
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
            Trusted by Industry Leaders
          </Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 text-balance">
            Our Valued
            <span className="block text-primary">Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            From boutique properties to international chains, we're proud to partner with hospitality leaders who share
            our commitment to excellence and guest satisfaction.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Partnership Tiers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We serve hotels across all categories, providing tailored solutions for every level of service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTiers.map((tier, index) => (
              <Card
                key={index}
                className="text-center p-8 border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <tier.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{tier.tier}</h3>
                <p className="text-muted-foreground mb-6 text-pretty">{tier.description}</p>
                <Badge className={`text-lg px-4 py-2 ${tier.color}`}>{tier.count} Properties</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Featured Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Meet some of the exceptional hospitality brands we're proud to call partners.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPartners.map((partner, index) => (
              <Card
                key={index}
                className="p-8 border-border/50 hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Hotel className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{partner.type}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30 text-xs">
                    {partner.partnership}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 text-pretty">{partner.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-secondary/20 rounded-lg">
                    <div className="font-semibold text-foreground">{partner.locations}</div>
                    <div className="text-xs text-muted-foreground">Properties</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/20 rounded-lg">
                    <div className="font-semibold text-foreground">{partner.region}</div>
                    <div className="text-xs text-muted-foreground">Region</div>
                  </div>
                </div>

                <div className="bg-card/50 p-4 rounded-lg border border-border/30">
                  <Quote className="h-5 w-5 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground italic mb-3 text-pretty">"{partner.testimonial}"</p>
                  <p className="text-xs font-medium text-foreground">— {partner.author}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Partnership Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Exclusive advantages designed to support your success and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-6 border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover how our partnerships have transformed hospitality experiences worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/luxury-hotel-transformation-case-study.jpg"
                  alt="Luxury Hotel Transformation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Case Study</Badge>
                <h4 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Luxury Resort Transformation
                </h4>
                <p className="text-muted-foreground mb-4 text-pretty text-sm">
                  How we helped a 5-star resort increase guest satisfaction by 35% through premium supply upgrades.
                </p>
                <Link href="/case-studies/luxury-resort-transformation">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                    Read Case Study
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/boutique-hotel-branding-case-study.jpg"
                  alt="Boutique Hotel Branding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Case Study</Badge>
                <h4 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Boutique Hotel Branding
                </h4>
                <p className="text-muted-foreground mb-4 text-pretty text-sm">
                  Custom supply solutions that helped establish a unique brand identity and increase bookings by 28%.
                </p>
                <Link href="/case-studies/boutique-hotel-branding">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                    Read Case Study
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/hotel-chain-efficiency-case-study.jpg"
                  alt="Hotel Chain Efficiency"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Case Study</Badge>
                <h4 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Chain-wide Efficiency
                </h4>
                <p className="text-muted-foreground mb-4 text-pretty text-sm">
                  Streamlined supply management across 45 properties, reducing costs by 22% while improving quality.
                </p>
                <Link href="/case-studies/hotel-chain-efficiency">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                    Read Case Study
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/5 bg-transparent">
                View All Case Studies
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Join Our Partner Network?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Discover how our partnership can elevate your hotel's standards and guest satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Become a Partner
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                View Success Stories
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
