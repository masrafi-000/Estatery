"use client";

import { ArrowRight, Calendar, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const lifestyleItems = [
  {
    id: 1,
    title: "Minimalist Interior Design Trends",
    excerpt:
      "Discover how to create a clean, organized living space with minimalist design principles.",
    image: "/lifestyle-1.jpg",
    category: "Design",
    date: "Mar 17, 2024",
    likes: 234,
  },
  {
    id: 2,
    title: "Creating Your Dream Home Office",
    excerpt:
      "Essential tips and inspiration for designing a productive and comfortable home workspace.",
    image: "/lifestyle-2.jpg",
    category: "Work",
    date: "Mar 15, 2024",
    likes: 189,
  },
  {
    id: 3,
    title: "Outdoor Living Spaces: Extend Your Home",
    excerpt:
      "Transform your backyard into a beautiful outdoor retreat with these design ideas.",
    image: "/lifestyle-3.jpg",
    category: "Outdoor",
    date: "Mar 13, 2024",
    likes: 312,
  },
  {
    id: 4,
    title: "Smart Home Automation Guide",
    excerpt:
      "Learn how to integrate smart technology into your home for convenience and efficiency.",
    image: "/lifestyle-1.jpg",
    category: "Technology",
    date: "Mar 11, 2024",
    likes: 267,
  },
  {
    id: 5,
    title: "Color Psychology in Home Decor",
    excerpt:
      "Understand how colors influence mood and create the perfect ambiance in each room.",
    image: "/lifestyle-2.jpg",
    category: "Design",
    date: "Mar 9, 2024",
    likes: 198,
  },
  {
    id: 6,
    title: "Wellness Spaces: Designing for Health",
    excerpt:
      "Create dedicated wellness areas in your home for meditation, yoga, and relaxation.",
    image: "/lifestyle-3.jpg",
    category: "Wellness",
    date: "Mar 7, 2024",
    likes: 276,
  },
];

export function LifestyleGrid() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {lifestyleItems.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/50"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-muted">
              <Image
                fill
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                {item.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col p-5">
              <h3 className="line-clamp-2 text-lg font-semibold transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {item.excerpt}
              </p>

              {/* Meta */}
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Heart className="h-3.5 w-3.5" />
                  {item.likes}
                </div>
              </div>

              {/* Read More */}
              <Link
                href={`/lifestyle/${item.id}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
              >
                Read Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
