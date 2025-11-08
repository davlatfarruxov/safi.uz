"use client"

import { useFeaturedBlogs } from "@/hooks/useBlogs"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { format } from "date-fns"

export function RealBlogSection() {
  const { blogs, loading } = useFeaturedBlogs(3)
  const { language } = useLanguage()

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              So'nggi Yangiliklar
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="bg-gray-200 h-48"></div>
                <div className="p-6">
                  <div className="bg-gray-200 h-4 rounded mb-4"></div>
                  <div className="bg-gray-200 h-6 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (!blogs || blogs.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            So'nggi Yangiliklar va Maqolalar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mehmonxona sanoati haqida foydali ma'lumotlar va yangiliklar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog) => (
            <Link
              key={blog._id}
              href={`/blog/${blog.slug}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {blog.featuredImage && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blog.featuredImage}
                    alt={blog.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>
                      {format(new Date(blog.createdAt), 'dd.MM.yyyy')}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{blog.readTime} min</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#084b25] transition-colors line-clamp-2">
                  {blog.title[language]}
                </h3>

                {blog.excerpt && blog.excerpt[language] && (
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {blog.excerpt[language]}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded capitalize">
                    {blog.category}
                  </span>
                  
                  <div className="flex items-center gap-1 text-[#084b25] text-sm font-medium">
                    O'qish
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {blog.tags && blog.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#084b25] text-white px-6 py-3 rounded-lg hover:bg-[#0a5c2e] transition-colors"
          >
            Barcha Maqolalar
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}