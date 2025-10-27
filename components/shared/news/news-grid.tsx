"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Zap } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Housing Market Shows Strong Growth in Q1 2024",
    excerpt: "New data reveals significant increase in property sales and prices across major markets.",
    image: "/news-1.jpg",
    category: "Market Update",
    date: "Mar 18, 2024",
    featured: true,
  },
  {
    id: 2,
    title: "New Regulations Impact Commercial Real Estate",
    excerpt: "Government announces new zoning laws affecting commercial property development.",
    image: "/news-2.jpg",
    category: "Regulations",
    date: "Mar 16, 2024",
    featured: false,
  },
  {
    id: 3,
    title: "Tech Giants Invest in Smart Home Technology",
    excerpt: "Major technology companies announce partnerships to advance smart home solutions.",
    image: "/news-3.jpg",
    category: "Technology",
    date: "Mar 14, 2024",
    featured: false,
  },
  {
    id: 4,
    title: "Sustainable Building Standards Become Mandatory",
    excerpt: "New environmental regulations require green building practices in new constructions.",
    image: "/news-1.jpg",
    category: "Sustainability",
    date: "Mar 12, 2024",
    featured: false,
  },
  {
    id: 5,
    title: "Remote Work Reshapes Urban Real Estate",
    excerpt: "Shift in work patterns continues to influence property demand and location preferences.",
    image: "/news-2.jpg",
    category: "Trends",
    date: "Mar 10, 2024",
    featured: false,
  },
  {
    id: 6,
    title: "Investment Opportunities in Emerging Markets",
    excerpt: "Analysts identify promising real estate investment opportunities in developing regions.",
    image: "/news-3.jpg",
    category: "Investment",
    date: "Mar 8, 2024",
    featured: false,
  },
]

export function NewsGrid() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className={`group overflow-hidden rounded-lg border transition-all duration-300 ${
              item.featured
                ? "border-primary/50 bg-primary/5 md:col-span-2 lg:col-span-1"
                : "border-border bg-card hover:shadow-lg hover:border-primary/50"
            }`}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              {item.featured && (
                <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1">
                  <Zap className="h-3.5 w-3.5 text-primary-foreground" />
                  <span className="text-xs font-medium text-primary-foreground">Breaking</span>
                </div>
              )}
              {!item.featured && (
                <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                  {item.category}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col p-5">
              <h3 className="line-clamp-2 text-lg font-semibold transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.excerpt}</p>

              {/* Meta */}
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </div>
                <span className="text-xs font-medium text-primary">{item.category}</span>
              </div>

              {/* Read More */}
              <Link
                href={`/news/${item.id}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
              >
                Read News
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
