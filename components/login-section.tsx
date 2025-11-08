import { Button } from "@/components/ui/button"
import { UserCircle, UserPlus } from "lucide-react"

export function LoginSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Login or Register</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Login to your account to manage and track orders, invoices and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-base px-8">
              <UserCircle className="mr-2 h-5 w-5" />
              Already a customer? Log in
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <UserPlus className="mr-2 h-5 w-5" />
              New here? Register now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
