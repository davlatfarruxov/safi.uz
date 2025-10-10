import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function MiniFridgesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
            <img src="/hotel-mini-fridge-minibar.jpg" alt="Hotel mini fridges" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Mini Fridges</h2>
            <Button size="lg" className="text-base px-8">
              Shop Minibars
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
