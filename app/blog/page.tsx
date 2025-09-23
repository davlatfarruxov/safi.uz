import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Hotel, Calendar, User, ArrowRight, Search, TrendingUp, Lightbulb } from "lucide-react"
import Link from "next/link"

const featuredPost = {
  id: "hospitality-trends-2024",
  title: "10 Hospitality Trends Transforming Guest Experiences in 2024",
  excerpt:
    "Discover the latest trends shaping the hospitality industry and how premium suppliers are adapting to meet evolving guest expectations.",
  author: "Davlat Farruxov",
  date: "December 15, 2024",
  readTime: "8 min read",
  category: "Industry Trends",
  image: "/modern-hotel-lobby-with-premium-furnishings.jpg",
  featured: true,
}

const blogPosts = [
  {
    id: "sustainable-hotel-supplies",
    title: "The Complete Guide to Sustainable Hotel Supplies",
    excerpt:
      "How eco-friendly supplies can reduce costs while enhancing your hotel's reputation and guest satisfaction.",
    author: "Davlat Farruxov",
    date: "December 12, 2024",
    readTime: "6 min read",
    category: "Sustainability",
    image: "/eco-friendly-hotel-amenities-and-supplies.jpg",
  },
  {
    id: "luxury-bedding-guide",
    title: "Thread Count vs. Quality: What Luxury Hotels Really Need",
    excerpt: "Expert insights on selecting premium bedding that delivers comfort, durability, and guest satisfaction.",
    author: "Davlat Farruxov",
    date: "December 10, 2024",
    readTime: "5 min read",
    category: "Product Guide",
    image: "/luxury-hotel-bed-with-premium-white-linens.jpg",
  },
  {
    id: "cost-optimization-strategies",
    title: "5 Cost Optimization Strategies for Hotel Supply Management",
    excerpt: "Proven methods to reduce supply costs without compromising quality or guest experience.",
    author: "Davlat Farruxov",
    date: "December 8, 2024",
    readTime: "7 min read",
    category: "Business Strategy",
    image: "/hotel-manager-reviewing-supply-inventory.jpg",
  },
  {
    id: "guest-experience-design",
    title: "Designing Memorable Guest Experiences Through Premium Supplies",
    excerpt: "How thoughtful supply choices create lasting impressions and drive positive reviews.",
    author: "Design Team",
    date: "December 5, 2024",
    readTime: "4 min read",
    category: "Design",
    image: "/elegant-hotel-room-with-premium-amenities.jpg",
  },
  {
    id: "technology-hospitality",
    title: "Smart Hotel Supplies: Technology Integration in Modern Hospitality",
    excerpt: "Exploring how technology-enhanced supplies are revolutionizing hotel operations and guest satisfaction.",
    author: "Tech Team",
    date: "December 3, 2024",
    readTime: "6 min read",
    category: "Technology",
    image: "/smart-hotel-room-with-modern-technology.jpg",
  },
  {
    id: "seasonal-supply-planning",
    title: "Seasonal Supply Planning: Maximizing Efficiency Year-Round",
    excerpt: "Strategic approaches to inventory management that adapt to seasonal demand fluctuations.",
    author: "Operations Team",
    date: "December 1, 2024",
    readTime: "5 min read",
    category: "Operations",
    image: "/hotel-supply-warehouse-with-organized-inventory.jpg",
  },
]

const categories = [
  { name: "All Posts", count: 25, active: true },
  { name: "Industry Trends", count: 8, active: false },
  { name: "Product Guide", count: 6, active: false },
  { name: "Business Strategy", count: 5, active: false },
  { name: "Design", count: 4, active: false },
  { name: "Technology", count: 2, active: false },
]

export default function BlogPage() {
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
              <Button variant="ghost" className="text-primary font-medium">
                Blog
              </Button>
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
            Industry Insights & Expert Guidance
          </Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 text-balance">
            Hospitality
            <span className="block text-primary">Intelligence Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Stay ahead of industry trends, discover best practices, and gain expert insights that drive success in the
            competitive hospitality landscape.
          </p>

          {/* Search Bar */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-card/50 border-border/50 focus:border-primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Featured Article</h2>
            <p className="text-muted-foreground">Our latest insights on hospitality excellence</p>
          </div>

          <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <Badge className="bg-primary/10 text-primary border-primary/20">{featuredPost.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{featuredPost.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="bg-primary hover:bg-primary/90">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="py-20 px-4 bg-secondary/5">
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

                {/* Newsletter Signup */}
                <Card className="mt-12 p-6 bg-card/50 border-border/50">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h4 className="font-serif font-bold text-foreground mb-2">Stay Updated</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest hospitality insights delivered to your inbox.
                    </p>
                    <Input placeholder="Your email" className="mb-3" />
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                      Subscribe
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-serif font-bold text-foreground">Latest Articles</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>Showing 6 of 25 articles</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-accent/20 text-accent-foreground border-accent/30 text-xs"
                        >
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>

                      <h4 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 text-sm text-pretty line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground space-x-3">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <Link href={`/blog/${post.id}`}>
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
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <Lightbulb className="h-12 w-12 mx-auto mb-6 text-primary-foreground/80" />
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Implement These Insights?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Transform your hotel with premium supplies and expert guidance from industry leaders.
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
            <p className="text-sm text-background/60">© 2025 Safí Hotel Collection. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
