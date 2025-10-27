import { AdSidebar } from "@/components/shared/ads/ad-sidebar";
import { NewsGrid } from "@/components/shared/news/news-grid";
import { NewsHero } from "@/components/shared/news/news-hero";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <NewsHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NewsGrid />
          </div>
          <div className="hidden lg:block">
            <AdSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}
