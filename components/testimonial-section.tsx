"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function TestimonialSection() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % t.testimonial.items.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, t.testimonial.items.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + t.testimonial.items.length) % t.testimonial.items.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % t.testimonial.items.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const currentTestimonial = t.testimonial.items[currentIndex]

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">{t.testimonial.title}</h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <blockquote
                key={currentIndex}
                className="mb-6 animate-in fade-in-50 text-pretty text-xl leading-relaxed text-foreground md:text-2xl"
              >
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary/10">
                    <span className="text-lg font-semibold text-primary">{currentTestimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{currentTestimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{currentTestimonial.position}</p>
                    <p className="text-sm font-medium text-primary">{currentTestimonial.company}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToPrevious}
                    className="h-10 w-10 rounded-full bg-transparent"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToNext}
                    className="h-10 w-10 rounded-full bg-transparent"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-2">
                {t.testimonial.items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
