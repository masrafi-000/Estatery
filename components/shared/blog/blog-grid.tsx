"use client"

import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for First-Time Home Buyers",
    excerpt: "Learn the essential steps and strategies to make your first home purchase a success.",
    image: "/blog-1.jpg",
    category: "Buying",
    author: "Sarah Johnson",
    date: "Mar 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Future of Real Estate Technology",
    excerpt: "Explore how AI and automation are transforming the real estate industry.",
    image: "/blog-2.jpg",
    category: "Technology",
    author: "Michael Chen",
    date: "Mar 12, 2024",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Investment Properties: A Beginner's Guide",
    excerpt: "Understand the fundamentals of real estate investing and build your portfolio.",
    image: "/blog-3.jpg",
    category: "Investment",
    author: "Emma Davis",
    date: "Mar 10, 2024",
    readTime: "8 min read",
  },
  {
    id: 4,
    title: "Home Staging: Maximize Your Property's Appeal",
    excerpt: "Professional tips to prepare your home for sale and attract buyers.",
    image: "/blog-1.jpg",
    category: "Selling",
    author: "James Wilson",
    date: "Mar 8, 2024",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Market Trends: What to Expect in 2024",
    excerpt: "Analysis of current market conditions and predictions for the coming year.",
    image: "/blog-2.jpg",
    category: "Market",
    author: "Lisa Anderson",
    date: "Mar 5, 2024",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Sustainable Living: Eco-Friendly Homes",
    excerpt: "Discover green building practices and sustainable home features.",
    image: "/blog-3.jpg",
    category: "Lifestyle",
    author: "David Martinez",
    date: "Mar 1, 2024",
    readTime: "7 min read",
  },
]

export function BlogGrid() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/50"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col p-5">
              <h3 className="line-clamp-2 text-lg font-semibold transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>

              {/* Meta */}
              <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </div>
              </div>

              {/* Read More */}
              <Link
                href={`/blog/${post.id}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
              >
                Read Article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
