"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("allPosts")
  const [searchQuery, setSearchQuery] = useState("")

  const getCategoryCount = (categorySlug: string) => {
    if (categorySlug === "allPosts") return t.blogPage.articlesList.length
    return t.blogPage.articlesList.filter((article: any) => article.categorySlug === categorySlug).length
  }

  const filteredArticles = t.blogPage.articlesList.filter((article: any) => {
    const matchesCategory = selectedCategory === "allPosts" || article.categorySlug === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticle = t.blogPage.articlesList[0]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-block rounded-full bg-[#f5e6d3] px-4 py-1.5 text-sm font-medium text-[#084b25]">
              {t.blogPage.badge}
            </div>
            <h1 className="mb-6 text-balance font-serif text-4xl font-bold text-foreground lg:text-5xl">
              {t.blogPage.title}
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">{t.blogPage.subtitle}</p>

            {/* Search Bar */}
            <div className="relative mx-auto max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t.blogPage.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 pl-12 pr-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="border-b bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">{t.blogPage.featuredArticle}</h2>
            <p className="text-muted-foreground">{t.blogPage.featuredSubtitle}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={`/placeholder.svg?height=600&width=800&query=modern luxury hotel lobby interior`}
                alt={featuredArticle.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-4">
                <span className="inline-block rounded-full bg-[#6b9f7f] px-3 py-1 text-xs font-medium text-white">
                  {featuredArticle.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{featuredArticle.author}</span>
                </div>
              </div>

              <h3 className="mb-4 text-balance font-serif text-3xl font-bold text-foreground">
                {featuredArticle.title}
              </h3>
              <p className="mb-6 text-pretty text-muted-foreground">{featuredArticle.excerpt}</p>

              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">{featuredArticle.readTime}</span>
                <Button className="bg-[#084b25] text-white hover:bg-[#084b25]/90">
                  {t.blog.readMore}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Categories */}
              <Card className="p-6">
                <h3 className="mb-4 font-semibold text-foreground">{t.blogPage.categories}</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("allPosts")}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      selectedCategory === "allPosts"
                        ? "bg-[#084b25] text-white"
                        : "hover:bg-muted text-muted-foreground"
                    }`}
                  >
                    <span>{t.blogPage.allPosts}</span>
                    <span className="text-xs">{getCategoryCount("allPosts")}</span>
                  </button>
                  {Object.entries(t.blogPage.categoryList).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                        selectedCategory === key ? "bg-[#084b25] text-white" : "hover:bg-muted text-muted-foreground"
                      }`}
                    >
                      <span>{value}</span>
                      <span className="text-xs">{getCategoryCount(key)}</span>
                    </button>
                  ))}
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="bg-[#f5e6d3] p-6">
                <div className="mb-4 text-center">
                  <div className="mb-2 text-2xl">📬</div>
                  <h3 className="mb-2 font-semibold text-foreground">{t.blogPage.newsletter.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.blogPage.newsletter.subtitle}</p>
                </div>
                <Input type="email" placeholder={t.blogPage.newsletter.placeholder} className="mb-3 bg-white" />
                <Button className="w-full bg-[#084b25] text-white hover:bg-[#084b25]/90">
                  {t.blogPage.newsletter.subscribe}
                </Button>
              </Card>
            </aside>

            {/* Articles Grid */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-serif text-2xl font-bold text-foreground">{t.blogPage.latestArticles}</h2>
                <p className="text-sm text-muted-foreground">
                  {t.blogPage.showing} {filteredArticles.length} {t.blogPage.of} {t.blogPage.articlesList.length}{" "}
                  {t.blogPage.articles}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {filteredArticles.map((article: any) => (
                  <Card key={article.id} className="group overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={`/.jpg?height=400&width=600&query=${article.title}`}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-[#6b9f7f] px-3 py-1 text-xs font-medium text-white">
                        {article.category}
                      </div>
                      <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs text-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="mb-3 text-balance font-serif text-xl font-semibold text-foreground group-hover:text-[#084b25]">
                        {article.title}
                      </h3>
                      <p className="mb-4 text-pretty text-sm text-muted-foreground">{article.excerpt}</p>

                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                        <button className="flex items-center gap-1 text-sm font-medium text-[#084b25] hover:gap-2 transition-all">
                          {t.blog.readMore}
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="mt-12 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="min-w-[200px] border-[#084b25] bg-transparent text-[#084b25] hover:bg-[#084b25]/10"
                >
                  {t.blogPage.loadMore}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
