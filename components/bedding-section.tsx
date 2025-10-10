import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BeddingSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Create a Five Star Experience
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              We provide luxurious guest amenities and quality accessories to the hotel and hospitality trade.
            </p>
            <Button size="lg" className="text-base px-8">
              Shop Bedding
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="order-1 md:order-2 aspect-[4/3] rounded-lg overflow-hidden bg-muted">
            <img src="/luxury-hotel-bedding-white-linens.jpg" alt="Luxury hotel bedding" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
