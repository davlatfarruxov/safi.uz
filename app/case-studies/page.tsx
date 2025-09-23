import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Hotel, Search, TrendingUp, Award, ArrowRight, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    id: "luxury-resort-transformation",
    title: "Luxury Resort Transformation: 35% Increase in Guest Satisfaction",
    client: "Paradise Bay Resort",
    industry: "Luxury Resort",
    location: "Maldives",
    duration: "6 months",
    image: "/luxury-hotel-transformation-case-study.jpg",
    excerpt:
      "How premium supply upgrades and design consultation transformed a 5-star resort's guest experience and operational efficiency.",
    results: [
      { metric: "Guest Satisfaction", improvement: "+35%" },
      { metric: "Operational Efficiency", improvement: "+28%" },
      { metric: "Cost Savings", improvement: "22%" },
    ],
    category: "Luxury Hotels",
    featured: true,
  },
  {
    id: "boutique-hotel-branding",
    title: "Boutique Hotel Branding: Creating Unique Identity Through Custom Supplies",
    client: "The Artisan Collection",
    industry: "Boutique Hotels",
    location: "New York, USA",
    duration: "4 months",
    image: "/boutique-hotel-branding-case-study.jpg",
    excerpt:
      "Custom supply solutions that helped establish a distinctive brand identity and increase direct bookings by 28%.",
    results: [
      { metric: "Direct Bookings", improvement: "+28%" },
      { metric: "Brand Recognition", improvement: "+45%" },
      { metric: "Guest Reviews", improvement: "+32%" },
    ],
    category: "Boutique Hotels",
    featured: false,
  },
  {
    id: "hotel-chain-efficiency",
    title: "Chain-wide Efficiency: Streamlining Operations Across 45 Properties",
    client: "Global Business Hotels",
    industry: "Business Hotels",
    location: "International",
    duration: "12 months",
    image: "/hotel-chain-efficiency-case-study.jpg",
    excerpt:
      "Comprehensive supply management solution that reduced costs by 22% while improving quality standards across all locations.",
    results: [
      { metric: "Cost Reduction", improvement: "22%" },
      { metric: "Quality Consistency", improvement: "+40%" },
      { metric: "Delivery Efficiency", improvement: "+55%" },
    ],
    category: "Hotel Chains",
    featured: false,
  },
  {
    id: "sustainable-hospitality",
    title: "Sustainable Hospitality: Eco-Friendly Transformation Without Compromise",
    client: "Green Valley Resorts",
    industry: "Eco-Resort",
    location: "Costa Rica",
    duration: "8 months",
    image: "/sustainable-hospitality-case-study.jpg",
    excerpt:
      "Complete transition to sustainable supplies while maintaining luxury standards, resulting in industry recognition and increased bookings.",
    results: [
      { metric: "Sustainability Score", improvement: "+60%" },
      { metric: "Eco-Conscious Bookings", improvement: "+42%" },
      { metric: "Industry Awards", improvement: "3 Awards" },
    ],
    category: "Sustainability",
    featured: false,
  },
  {
    id: "heritage-hotel-restoration",
    title: "Heritage Hotel Restoration: Preserving History with Modern Comfort",
    client: "The Grand Heritage",
    industry: "Heritage Hotel",
    location: "Prague, Czech Republic",
    duration: "10 months",
    image: "/heritage-hotel-restoration-case-study.jpg",
    excerpt:
      "Careful balance of historical preservation and modern amenities through specialized supply solutions and design expertise.",
    results: [
      { metric: "Historical Authenticity", improvement: "Preserved" },
      { metric: "Modern Comfort", improvement: "+50%" },
      { metric: "Cultural Tourism", improvement: "+38%" },
    ],
    category: "Heritage Hotels",
    featured: false,
  },
  {
    id: "startup-hotel-success",
    title: "Startup Hotel Success: From Concept to Award-Winning Property",
    client: "Urban Nest Hotels",
    industry: "Startup Hotel",
    location: "London, UK",
    duration: "14 months",
    image: "/startup-hotel-success-case-study.jpg",
    excerpt:
      "Complete supply strategy and design consultation that helped a new hotel brand achieve industry recognition within its first year.",
    results: [
      { metric: "Market Entry", improvement: "6 months early" },
      { metric: "Industry Awards", improvement: "2 Awards" },
      { metric: "Occupancy Rate", improvement: "85%" },
    ],
    category: "New Hotels",
    featured: false,
  },
]

const categories = [
  { name: "All Case Studies", count: 15, active: true },
  { name: "Luxury Hotels", count: 5, active: false },
  { name: "Boutique Hotels", count: 4, active: false },
  { name: "Hotel Chains", count: 3, active: false },
  { name: "Sustainability", count: 2, active: false },
  { name: "Heritage Hotels", count: 1, active: false },
]

const impactStats = [
  { number: "150+", label: "Successful Projects" },
  { number: "35%", label: "Average Satisfaction Increase" },
  { number: "25%", label: "Average Cost Savings" },
  { number: "99%", label: "Project Success Rate" },
]

export default function CaseStudiesPage() {
  const featuredStudy = caseStudies.find((study) => study.featured)
  const otherStudies = caseStudies.filter((study) => !study.featured)

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
              <Link href="/partners">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  Partners
                </Button>
              </Link>
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
          <Badge className="mb-8 bg-accent/20 text-accent-foreground border-accent/30">Proven Success Stories</Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 text-balance">
            Real Results,
            <span className="block text-primary">Real Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Discover how our partnerships have transformed hospitality experiences, improved operational efficiency, and
            driven measurable business results across diverse property types.
          </p>

          {/* Search Bar */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search case studies..."
                className="pl-10 bg-card/50 border-border/50 focus:border-primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-muted-foreground">Measurable results across all our partnerships</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredStudy && (
        <section className="py-20 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Featured Case Study</h2>
              <p className="text-muted-foreground">Our most impactful transformation story</p>
            </div>

            <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img
                    src={featuredStudy.image || "/placeholder.svg"}
                    alt={featuredStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <Badge className="bg-primary/10 text-primary border-primary/20">{featuredStudy.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{featuredStudy.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredStudy.duration}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredStudy.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{featuredStudy.excerpt}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {featuredStudy.results.map((result, index) => (
                      <div key={index} className="text-center p-3 bg-card/50 rounded-lg">
                        <div className="font-bold text-primary text-lg">{result.improvement}</div>
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <Link href={`/case-studies/${featuredStudy.id}`}>
                    <Button className="bg-primary hover:bg-primary/90">
                      Read Full Case Study
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant={category.active ? "default" : "ghost"}
                      className={`w-full justify-between ${
                        category.active
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="bg-muted text-muted-foreground">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </div>

                {/* Contact CTA */}
                <Card className="mt-12 p-6 bg-card/50 border-border/50">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h4 className="font-serif font-bold text-foreground mb-2">Ready for Your Success Story?</h4>
                    <p className="text-sm text-muted-foreground mb-4">Let's discuss how we can transform your hotel.</p>
                    <Link href="/contact">
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                        Start Your Project
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-serif font-bold text-foreground">All Case Studies</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>
                    Showing {otherStudies.length} of {caseStudies.length} studies
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherStudies.map((study, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-accent/20 text-accent-foreground border-accent/30 text-xs"
                        >
                          {study.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{study.duration}</span>
                      </div>

                      <h4 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {study.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 text-sm text-pretty line-clamp-3">{study.excerpt}</p>

                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {study.results.slice(0, 3).map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center p-2 bg-secondary/20 rounded text-xs">
                            <div className="font-semibold text-primary">{result.improvement}</div>
                            <div className="text-muted-foreground text-xs">{result.metric}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground space-x-3">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{study.location}</span>
                          </div>
                        </div>
                        <Link href={`/case-studies/${study.id}`}>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                            Read More
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5 bg-transparent">
                  Load More Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <Award className="h-12 w-12 mx-auto mb-6 text-primary-foreground/80" />
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Join the ranks of successful hotels who have transformed their operations and guest experiences with our
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Start Your Project
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Explore Services
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
