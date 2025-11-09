import { BlogHero } from "@/app/blog/_components/blog-hero"
import { BlogGrid } from "@/app/blog/_components/blog-grid"
import { AdSidebar } from "@/components/shared/ads/ad-sidebar"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <BlogHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogGrid />
          </div>
          <div className="hidden lg:block">
            <AdSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}
