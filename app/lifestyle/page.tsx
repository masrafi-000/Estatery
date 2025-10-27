import { LifestyleHero } from "@/components/shared/lifestyle/lifestyle-hero"
import { LifestyleGrid } from "@/components/shared/lifestyle/lifestyle-grid"
import { AdSidebar } from "@/components/shared/ads/ad-sidebar"

export default function LifestylePage() {
  return (
    <main className="min-h-screen bg-background">
      <LifestyleHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LifestyleGrid />
          </div>
          <div className="hidden lg:block">
            <AdSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}
