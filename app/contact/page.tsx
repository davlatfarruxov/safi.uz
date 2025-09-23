import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Hotel, Phone, Mail, MapPin, Clock, MessageSquare, Users, Truck, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our hospitality experts",
    contact: "+998 22 123-4567",
    availability: "24/7 Emergency Support",
    primary: true,
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed responses within 2 hours",
    contact: "hello@safihotelcollection.com",
    availability: "Response within 2 hours",
    primary: false,
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant support for urgent inquiries",
    contact: "Available on website",
    availability: "Mon-Fri, 8AM-8PM EST",
    primary: false,
  },
]

const offices = [
  {
    city: "Samarkand",
    address: "123 Hospitality Ave, Suite 500 Samarkand",
    phone: "+998 22 123-4567",
    email: "sam@safihotelcollection.com",
    timezone: "EST",
    primary: true,
  },
  {
    city: "Tashkent",
    address: "456 Hotel Blvd, Floor 12 tashkent,  90210",
    phone: "+998 22 123-4567",
    email: "tash@safihotelcollection.com",
    timezone: "PST",
    primary: false,
  },
  
]

const services = [
  { icon: Users, title: "Consultation", description: "Expert design and operational advice" },
  { icon: Truck, title: "Express Delivery", description: "Same-day delivery in major cities" },
  { icon: Award, title: "Premium Quality", description: "Industry-leading supply standards" },
]

export default function ContactPage() {
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
              <Link href="/case-studies">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
                  Case Studies
                </Button>
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Link href="/faq">
                <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5 bg-transparent">
                  FAQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-8 bg-accent/20 text-accent-foreground border-accent/30">Get In Touch</Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 text-balance">
            Let's Transform
            <span className="block text-primary">Your Hotel Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Ready to elevate your hospitality experience? Our team of experts is here to provide personalized solutions,
            answer your questions, and help you achieve operational excellence.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Multiple Ways to Connect</h2>
            <p className="text-muted-foreground">Choose the communication method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`p-8 text-center border-border/50 hover:shadow-lg transition-all duration-300 ${
                  method.primary ? "ring-2 ring-primary/20 bg-primary/5" : ""
                }`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    method.primary ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <method.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{method.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{method.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">{method.contact}</p>
                  <p className="text-sm text-muted-foreground">{method.availability}</p>
                </div>
                {method.primary && (
                  <Badge className="mt-4 bg-primary/10 text-primary border-primary/20">Recommended</Badge>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </p>
              </div>

              <Card className="p-8 border-border/50">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                      <Input placeholder="John" className="bg-background border-border/50 focus:border-primary/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                      <Input placeholder="Smith" className="bg-background border-border/50 focus:border-primary/50" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="john@hotel.com"
                      className="bg-background border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Hotel/Company Name *</label>
                    <Input
                      placeholder="Grand Hotel & Resort"
                      className="bg-background border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+998 22 123-4567"
                      className="bg-background border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">How can we help you? *</label>
                    <Textarea
                      placeholder="Tell us about your hotel's needs, current challenges, or specific products you're interested in..."
                      rows={5}
                      className="bg-background border-border/50 focus:border-primary/50 resize-none"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input type="checkbox" className="mt-1" />
                    <label className="text-sm text-muted-foreground">
                      I agree to receive communications from Safí Hotel Collection about products, services, and
                      industry insights.
                    </label>
                  </div>

                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Office Locations */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Our Locations</h2>
                <p className="text-muted-foreground">
                  Visit us at one of our offices or connect with your regional team.
                </p>
              </div>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card
                    key={index}
                    className={`p-6 border-border/50 hover:shadow-lg transition-all duration-300 ${
                      office.primary ? "ring-2 ring-primary/20 bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-foreground mb-2">{office.city}</h3>
                        {office.primary && (
                          <Badge className="bg-primary/10 text-primary border-primary/20 mb-2">Headquarters</Badge>
                        )}
                      </div>
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-foreground whitespace-pre-line">{office.address}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <p className="text-foreground">{office.phone}</p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <p className="text-foreground">{office.email}</p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <p className="text-muted-foreground">Timezone: {office.timezone}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Services Overview */}
              <Card className="mt-8 p-6 bg-card/50 border-border/50">
                <h3 className="text-lg font-serif font-bold text-foreground mb-4">What We Offer</h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-8">
            Check out our comprehensive FAQ section for quick answers to common questions.
          </p>
          <Link href="/faq">
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 bg-transparent">
              View All FAQs
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
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
