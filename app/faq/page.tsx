"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Hotel,
  Search,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Phone,
  Mail,
  ArrowRight,
  HelpCircle,
  Truck,
  CreditCard,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const faqCategories = [
  { name: "All Questions", count: 24, active: true },
  { name: "Products & Pricing", count: 8, active: false },
  { name: "Orders & Delivery", count: 6, active: false },
  { name: "Account & Billing", count: 4, active: false },
  { name: "Support & Services", count: 6, active: false },
]

const faqs = [
  {
    category: "Products & Pricing",
    icon: CreditCard,
    question: "What types of hotel supplies do you offer?",
    answer:
      "We offer a comprehensive range of premium hotel supplies including bedroom essentials (linens, pillows, duvets), bathroom amenities (towels, toiletries, fixtures), kitchen equipment, general supplies, and custom-branded items. All products are sourced from industry-leading manufacturers and meet the highest hospitality standards.",
    popular: true,
  },
  {
    category: "Products & Pricing",
    icon: CreditCard,
    question: "How does your pricing work for bulk orders?",
    answer:
      "We offer tiered pricing based on order volume, with significant discounts for bulk purchases. Our pricing structure includes: 5-10% discount for orders over $5,000, 10-15% for orders over $15,000, and custom pricing for orders over $50,000. Contact our team for a personalized quote based on your specific needs.",
    popular: true,
  },
  {
    category: "Orders & Delivery",
    icon: Truck,
    question: "What are your delivery timeframes?",
    answer:
      "Standard delivery is 3-5 business days for in-stock items. We offer express delivery (1-2 business days) for urgent orders in major metropolitan areas. For large bulk orders or custom items, delivery typically takes 7-14 business days. Emergency same-day delivery is available in select cities for critical needs.",
    popular: true,
  },
  {
    category: "Orders & Delivery",
    icon: Truck,
    question: "Do you deliver internationally?",
    answer:
      "Yes, we provide international shipping to over 50 countries. International delivery typically takes 7-21 business days depending on the destination. Additional customs fees and import duties may apply. Contact our international team for specific shipping rates and requirements for your location.",
    popular: false,
  },
  {
    category: "Account & Billing",
    icon: Shield,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), bank transfers, ACH payments, and purchase orders from established businesses. For large orders, we offer flexible payment terms including Net 30, Net 60, and custom payment schedules for qualified accounts.",
    popular: false,
  },
  {
    category: "Account & Billing",
    icon: Shield,
    question: "How do I set up a business account?",
    answer:
      "Setting up a business account is simple. Contact our team with your business information, tax ID, and initial requirements. We'll verify your business credentials and set up your account with appropriate credit terms and volume discounts. The process typically takes 1-2 business days.",
    popular: false,
  },
  {
    category: "Support & Services",
    icon: MessageSquare,
    question: "Do you offer design consultation services?",
    answer:
      "Yes, our expert design team provides comprehensive consultation services including space planning, color coordination, brand alignment, and custom design solutions. This service is complimentary for orders over $25,000 and available at competitive rates for smaller projects.",
    popular: true,
  },
  {
    category: "Support & Services",
    icon: MessageSquare,
    question: "What kind of customer support do you provide?",
    answer:
      "We provide 24/7 customer support through multiple channels: phone, email, and live chat. Our dedicated account managers work closely with each client to ensure seamless service. We also offer emergency support for urgent supply needs and technical assistance for product installation.",
    popular: false,
  },
  {
    category: "Products & Pricing",
    icon: CreditCard,
    question: "Can you provide custom-branded products?",
    answer:
      "We specialize in custom-branded hotel supplies including linens, amenities, uniforms, and promotional items. Our design team works with you to create products that perfectly match your brand identity. Minimum order quantities apply for custom items.",
    popular: false,
  },
  {
    category: "Orders & Delivery",
    icon: Truck,
    question: "What is your return and exchange policy?",
    answer:
      "We offer a 30-day return policy for unused items in original packaging. Custom or personalized items are non-returnable unless defective. We provide free return shipping for defective products and exchanges. Contact our support team to initiate a return or exchange.",
    popular: false,
  },
  {
    category: "Support & Services",
    icon: MessageSquare,
    question: "Do you offer installation services?",
    answer:
      "Yes, we provide professional installation services for complex items like kitchen equipment, bathroom fixtures, and custom furniture. Our certified technicians ensure proper installation and provide training on equipment operation. Installation services are available in major metropolitan areas.",
    popular: false,
  },
  {
    category: "Products & Pricing",
    icon: CreditCard,
    question: "How do I get a quote for my hotel project?",
    answer:
      "Getting a quote is easy! Contact us through our website, phone, or email with your project details including property size, room count, and specific requirements. Our team will provide a detailed quote within 24 hours, including product recommendations and pricing options.",
    popular: true,
  },
]

const quickActions = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with an expert",
    action: "+998 22 123-4567",
    primary: true,
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed help",
    action: "hello@safihotelcollection.com",
    primary: false,
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant assistance",
    action: "Start Chat",
    primary: false,
  },
]

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const popularFAQs = faqs.filter((faq) => faq.popular)

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
              <Link href="/contact">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-8 bg-accent/20 text-accent-foreground border-accent/30">Help Center</Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 text-balance">
            Frequently Asked
            <span className="block text-primary">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Find quick answers to common questions about our products, services, and processes. Can't find what you're
            looking for? Our support team is here to help.
          </p>

          {/* Search Bar */}
          <div className="mt-12 max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card/50 border-border/50 focus:border-primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Need Immediate Help?</h2>
            <p className="text-muted-foreground">Get in touch with our support team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className={`p-6 text-center border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  action.primary ? "ring-2 ring-primary/20 bg-primary/5" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    action.primary ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <action.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{action.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{action.description}</p>
                <p className="text-sm font-medium text-primary">{action.action}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Popular Questions</h2>
            <p className="text-muted-foreground">The most frequently asked questions by our clients</p>
          </div>

          <div className="space-y-4">
            {popularFAQs.map((faq, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <faq.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-left">{faq.question}</h3>
                      <Badge className="mt-2 bg-accent/20 text-accent-foreground border-accent/30 text-xs">
                        {faq.category}
                      </Badge>
                    </div>
                  </div>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <p className="text-muted-foreground leading-relaxed text-pretty">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All FAQs */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">Categories</h3>
                <div className="space-y-2">
                  {faqCategories.map((category, index) => (
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
                    <HelpCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h4 className="font-serif font-bold text-foreground mb-2">Still Have Questions?</h4>
                    <p className="text-sm text-muted-foreground mb-4">Our support team is ready to help you.</p>
                    <Link href="/contact">
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </div>

            {/* FAQ List */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-serif font-bold text-foreground">All Questions</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>
                    Showing {filteredFAQs.length} of {faqs.length} questions
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                    <button
                      onClick={() => toggleFAQ(index + 100)} // Offset to avoid conflicts with popular FAQs
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/5 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <faq.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-left">{faq.question}</h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 text-xs">
                              {faq.category}
                            </Badge>
                            {faq.popular && (
                              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">Popular</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      {openFAQ === index + 100 ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index + 100 && (
                      <div className="px-6 pb-6">
                        <div className="pl-14">
                          <p className="text-muted-foreground leading-relaxed text-pretty">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>

              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No questions found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search terms or browse our categories.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-primary hover:bg-primary/90">
                      Ask Our Team
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
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
