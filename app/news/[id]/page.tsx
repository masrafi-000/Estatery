"use client";

import { AdSidebar } from "@/components/shared/ads/ad-sidebar";
import { ArrowLeft, Calendar, Eye, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const newsItems = [
  {
    id: 1,
    title: "Housing Market Shows Strong Growth in Q1 2024",
    excerpt:
      "New data reveals significant increase in property sales and prices across major markets.",
    content: `The real estate market is experiencing unprecedented growth in the first quarter of 2024. According to recent data from major real estate organizations, property sales have increased by 15% compared to the same period last year.

Key Market Indicators:
- Average home prices have risen by 8% year-over-year
- Days on market have decreased from 45 to 32 days
- Inventory levels remain tight in most major markets
- Mortgage rates have stabilized around 6.5%

Regional Performance:
The strongest growth has been observed in suburban markets, where families are seeking more space and value. Urban markets continue to show steady demand from young professionals and investors.

Expert Analysis:
Real estate analysts attribute this growth to several factors including low unemployment rates, strong consumer confidence, and limited housing inventory. However, experts warn that rising interest rates could impact the market in the coming months.

Market Outlook:
Experts predict continued growth through Q2 2024, with potential slowdown in the latter half of the year if interest rates continue to rise. Buyers and sellers should stay informed about market trends to make informed decisions.`,
    image: "/news-1.jpg",
    category: "Market Update",
    date: "Mar 18, 2024",
    views: 5234,
    featured: true,
  },
  {
    id: 2,
    title: "New Regulations Impact Commercial Real Estate",
    excerpt:
      "Government announces new zoning laws affecting commercial property development.",
    content: `The government has announced sweeping new regulations that will significantly impact commercial real estate development across the country.

Key Changes:
- New zoning requirements for mixed-use developments
- Stricter environmental compliance standards
- Increased affordable housing requirements in commercial projects
- Enhanced accessibility standards for public spaces

Impact on Developers:
Commercial developers will need to adapt their strategies to comply with these new regulations. While this may increase development costs, it also creates opportunities for innovative projects that meet the new standards.

Timeline:
The regulations will take effect on July 1, 2024, giving developers six months to adjust their plans and applications.

Industry Response:
Real estate associations have called for a phased implementation to allow developers adequate time to adapt. Some industry leaders see these changes as positive steps toward sustainable and inclusive development.`,
    image: "/news-2.jpg",
    category: "Regulations",
    date: "Mar 16, 2024",
    views: 3421,
    featured: false,
  },
];

export default function NewsPostPage({ params }: { params: { id: string } }) {
  const [shared, setShared] = useState(false);
  const post = newsItems.find((p) => p.id === Number.parseInt(params.id));

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <p className="text-center text-muted-foreground">
            News article not found
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>
        </div>
      </div>

      {/* Content with Sidebar */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            {/* Hero Image */}
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
              fill
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="h-96 w-full object-cover"
              />
            </div>

            {/* Meta Info */}
            <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-border pb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
              <div className="flex items-center gap-2 ml-auto">
                <Eye className="h-4 w-4" />
                {post.views} views
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold">{post.title}</h1>

            {/* Content */}
            <div className="prose prose-invert max-w-none mb-8">
              {post.content.split("\n\n").map((paragraph, idx) => (
                <p
                  key={idx}
                  className="mb-4 text-foreground leading-relaxed whitespace-pre-wrap"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 border-t border-border pt-6">
              <button
                onClick={() => setShared(!shared)}
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <Share2 className="h-5 w-5" />
                {shared ? "Shared" : "Share"}
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <AdSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
