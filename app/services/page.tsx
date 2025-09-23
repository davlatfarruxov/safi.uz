import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Hotel,
  Truck,
  Users,
  Palette,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Package,
  Headphones,
  Globe,
  Award,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Package,
    title: "Premium Product Supply",
    description: "Comprehensive inventory of hotel supplies tailored to your star rating and brand standards.",
    features: [
      "Curated product collections by hotel category",
      "Quality-assured premium materials",
      "Competitive bulk pricing",
      "Regular inventory updates",
    ],
    highlight: "Core Service",
  },
  {
    icon: Truck,
    title: "Express Delivery & Logistics",
    description: "Reliable, fast delivery services ensuring your supplies arrive when and where you need them.",
    features: [
      "24-48 hour express delivery",
      "Global shipping network",
      "Real-time tracking",
      "Flexible scheduling options",
    ],
    highlight: "Fast & Reliable",
  },
  {
    icon: Palette,
    title: "Design Consulting",
    description: "Expert interior design guidance to create cohesive, memorable guest experiences.",
    features: [
      "Professional design consultation",
      "Custom color scheme development",
      "Space optimization strategies",
      "Brand alignment guidance",
    ],
    highlight: "Expert Guidance",
  },
  {
    icon: Users,
    title: "Account Management",
    description: "Dedicated support teams providing personalized service and ongoing partnership.",
    features: [
      "Dedicated account managers",
      "Personalized service approach",
      "Regular check-ins and reviews",
      "Custom solution development",
    ],
    highlight: "Personal Touch",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensuring every product meets premium standards.",
    features: [
      "Multi-point quality inspections",
      "Certified supplier network",
      "Quality guarantee programs",
      "Defect replacement policy",
    ],
    highlight: "Guaranteed Quality",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance for urgent needs, questions, and ongoing support.",
    features: [
      "24/7 multilingual support",
      "Emergency order processing",
      "Technical assistance",
      "Order status updates",
    ],
    highlight: "Always Available",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We assess your hotel's needs, standards, and brand requirements through detailed consultation.",
  },
  {
    step: "02",
    title: "Custom Solution",
    description:
      "Our experts develop a tailored supply strategy that aligns with your budget and quality expectations.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We execute the solution with precision, ensuring seamless integration with your operations.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "Continuous partnership with regular reviews, updates, and optimization of your supply chain.",
  },
]

export default function ServicesPage() {
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
              <Button variant="ghost" className="text-primary font-medium">
                Services
              </Button>
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
          <Badge className="mb-8 bg-accent/20 text-accent-foreground border-accent/30">Comprehensive Solutions</Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 text-balance">
            Beyond Products,
            <span className="block text-primary">Complete Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            From premium supplies to expert consulting, we provide comprehensive hospitality solutions that elevate your
            establishment and exceed guest expectations at every touchpoint.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive solutions designed to support every aspect of your hospitality operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30 text-xs">
                      {service.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A proven methodology that ensures successful partnerships and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-primary/30 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-8">Why Choose Safí Hotel Collection?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Global Expertise, Local Service</h3>
                    <p className="text-muted-foreground text-pretty">
                      International experience with personalized, local support in multiple languages and time zones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Industry Recognition</h3>
                    <p className="text-muted-foreground text-pretty">
                      Award-winning service quality and industry certifications that validate our commitment to
                      excellence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Proven Track Record</h3>
                    <p className="text-muted-foreground text-pretty">
                      14+ years of consistent service delivery with 99.8% client satisfaction and retention rates.
                    </p>
                  </div>
                </div>
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
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </Card>
              <Card className="p-6 text-center bg-card/50 border-border/50">
                <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Transform Your Hotel?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Let our experts create a custom solution that elevates your guest experience and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/catalog">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Browse Products
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
