import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hotel, Calendar, User, ArrowLeft, Share2, BookOpen, Clock, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

// This would typically come from a CMS or database
const blogPost = {
  id: "hospitality-trends-2024",
  title: "10 Hospitality Trends Transforming Guest Experiences in 2024",
  excerpt:
    "Discover the latest trends shaping the hospitality industry and how premium suppliers are adapting to meet evolving guest expectations.",
  author: "Davlat Farruxov",
  authorRole: "Co-Founder & CEO",
  date: "December 15, 2024",
  readTime: "8 min read",
  category: "Industry Trends",
  image: "/modern-hotel-lobby-with-premium-furnishings-and-gu.jpg",
  content: `
    <p>The hospitality industry continues to evolve at an unprecedented pace, driven by changing guest expectations, technological advances, and a renewed focus on sustainability. As we navigate through 2024, hotels worldwide are adapting their strategies to stay competitive and deliver exceptional experiences.</p>

    <p>At Safí Hotel Collection, we've observed these transformations firsthand through our partnerships with over 10,000 hotels globally. Here are the ten most significant trends reshaping the industry this year.</p>

    <h2>1. Sustainable Luxury Takes Center Stage</h2>
    <p>Today's guests expect luxury without compromise—including environmental responsibility. Hotels are investing in eco-friendly supplies that maintain premium quality while reducing environmental impact. From organic cotton linens to biodegradable amenities, sustainability has become a key differentiator.</p>

    <h2>2. Personalization Through Technology</h2>
    <p>Smart room technology is enabling unprecedented levels of personalization. Hotels are using IoT devices and AI to customize everything from room temperature to pillow firmness based on guest preferences. This trend requires suppliers to offer technology-integrated products that enhance rather than complicate the guest experience.</p>

    <h2>3. Wellness-Focused Amenities</h2>
    <p>The wellness trend has evolved beyond spa services to encompass every aspect of the hotel experience. From air-purifying plants in rooms to aromatherapy-infused linens, hotels are creating environments that promote physical and mental well-being.</p>

    <h2>4. Local Sourcing and Cultural Authenticity</h2>
    <p>Guests increasingly seek authentic local experiences. Hotels are partnering with local artisans and suppliers to offer unique, culturally relevant amenities and furnishings that tell the story of their destination.</p>

    <h2>5. Flexible Spaces for Hybrid Work</h2>
    <p>The rise of remote work has transformed hotel spaces. Properties are redesigning lobbies, rooms, and common areas to accommodate business travelers who need flexible workspaces with reliable connectivity and ergonomic furnishings.</p>

    <h2>Key Takeaways for Hotel Operators</h2>
    <ul>
      <li>Invest in sustainable, high-quality supplies that align with guest values</li>
      <li>Embrace technology that enhances rather than complicates the guest experience</li>
      <li>Focus on wellness-oriented amenities and room features</li>
      <li>Partner with local suppliers to create authentic experiences</li>
      <li>Adapt spaces to meet the needs of modern business travelers</li>
    </ul>

    <p>These trends represent more than passing fads—they're fundamental shifts in how guests experience hospitality. Hotels that adapt their supply strategies to embrace these changes will be best positioned for success in the evolving landscape.</p>
  `,
}

const relatedPosts = [
  {
    id: "sustainable-hotel-supplies",
    title: "The Complete Guide to Sustainable Hotel Supplies",
    category: "Sustainability",
    readTime: "6 min read",
  },
  {
    id: "guest-experience-design",
    title: "Designing Memorable Guest Experiences Through Premium Supplies",
    category: "Design",
    readTime: "4 min read",
  },
  {
    id: "technology-hospitality",
    title: "Smart Hotel Supplies: Technology Integration in Modern Hospitality",
    category: "Technology",
    readTime: "6 min read",
  },
]

export default function BlogPostPage() {
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
                <Button variant="ghost" className="text-primary font-medium">
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

      {/* Article Header */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">{blogPost.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              {blogPost.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{blogPost.author}</div>
                  <div className="text-sm text-muted-foreground">{blogPost.authorRole}</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5 bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] rounded-xl overflow-hidden mb-12">
            <img
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div
                className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Article Footer */}
              <div className="mt-16 pt-8 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">Was this helpful?</span>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/20 hover:bg-primary/5 bg-transparent"
                      >
                        <Star className="h-4 w-4 mr-1" />
                        Yes
                      </Button>
                      <Button variant="outline" size="sm" className="border-border/50 hover:bg-muted/50 bg-transparent">
                        No
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5 bg-transparent">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Article
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Table of Contents */}
                <Card className="p-6 bg-card/50 border-border/50">
                  <h4 className="font-serif font-bold text-foreground mb-4 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    In This Article
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="#sustainable-luxury"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Sustainable Luxury
                      </a>
                    </li>
                    <li>
                      <a href="#personalization" className="text-muted-foreground hover:text-primary transition-colors">
                        Personalization Through Technology
                      </a>
                    </li>
                    <li>
                      <a href="#wellness" className="text-muted-foreground hover:text-primary transition-colors">
                        Wellness-Focused Amenities
                      </a>
                    </li>
                    <li>
                      <a href="#local-sourcing" className="text-muted-foreground hover:text-primary transition-colors">
                        Local Sourcing
                      </a>
                    </li>
                    <li>
                      <a href="#flexible-spaces" className="text-muted-foreground hover:text-primary transition-colors">
                        Flexible Spaces
                      </a>
                    </li>
                  </ul>
                </Card>

                {/* CTA Card */}
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h4 className="font-serif font-bold text-foreground mb-2">Ready to Implement?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get expert guidance on implementing these trends in your hotel.
                    </p>
                    <Link href="/contact">
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                        Schedule Consultation
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <Badge
                    variant="secondary"
                    className="bg-accent/20 text-accent-foreground border-accent/30 text-xs mb-4"
                  >
                    {post.category}
                  </Badge>
                  <h4 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
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
