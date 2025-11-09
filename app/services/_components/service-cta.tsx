import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ServiceCTA=() =>  {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl bg-linear-to-br from-primary/10 via-primary/5 to-accent/10 p-8 text-center md:p-12">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground">
            Let our experienced team help you achieve your real estate goals. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg"  >
              <Link href="/contact" className="flex items-center">
               <p> Contact Us</p>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" >
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ServiceCTA