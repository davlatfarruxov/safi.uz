import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-card py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Create a Five Star Experience
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-pretty">
            We provide luxurious guest amenities and quality accessories to the hotel and hospitality trade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8">
              Already a customer? Login
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              New here? Register now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
