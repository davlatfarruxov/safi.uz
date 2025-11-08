import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CoffeeStationSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Create the Perfect In-Room Coffee Station
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Explore our curated collection of in-room coffee station essentials, designed to enhance comfort and
            convenience for your hotel guests. Create a personalised setup with our premium kettles, trays, and
            accessories.
          </p>
          <Button size="lg" className="text-base px-8">
            Shop In-Room Coffee Stations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
