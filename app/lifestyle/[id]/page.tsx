"use client";

import { AdSidebar } from "@/components/shared/ads/ad-sidebar";
import { ArrowLeft, Calendar, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const lifestyleItems = [
  {
    id: 1,
    title: "Minimalist Interior Design Trends",
    excerpt:
      "Discover how to create a clean, organized living space with minimalist design principles.",
    content: `Minimalism is more than just a design trend—it's a lifestyle choice that can transform your living space and improve your well-being.

Core Principles of Minimalism:
- Less is more: Focus on quality over quantity
- Functionality: Every item should serve a purpose
- Simplicity: Clean lines and neutral colors
- Organization: Everything has its place

Creating a Minimalist Home:
Start by decluttering your space. Remove items you don't use or love. Invest in multi-functional furniture that serves multiple purposes. Use a neutral color palette with occasional accent colors.

Benefits of Minimalist Design:
- Reduced stress and anxiety
- Easier to clean and maintain
- Lower costs (buying less)
- More focus on what matters
- Improved mental clarity

Room-by-Room Guide:
Living Room: Keep furniture minimal and functional. Use storage solutions to hide clutter.
Bedroom: A simple bed, nightstand, and dresser are all you need. Keep the space calm and restful.
Kitchen: Organize cabinets efficiently. Keep only essential appliances on counters.

Minimalism doesn't mean your home has to be cold or impersonal. Add warmth through natural materials, plants, and meaningful artwork.`,
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
    content: `With remote work becoming increasingly common, creating an effective home office is essential for productivity and well-being.

Choosing the Right Location:
Select a quiet area away from distractions. Natural light is ideal for mood and productivity. Ensure good ventilation and temperature control.

Essential Furniture:
- Ergonomic desk chair: Invest in quality to prevent back pain
- Spacious desk: At least 48 inches wide for comfortable working
- Storage solutions: Shelves, cabinets, or filing systems
- Monitor stand: Position screen at eye level

Lighting and Ambiance:
Natural light is best, but supplement with task lighting. Avoid glare on your screen. Consider warm lighting for a comfortable atmosphere.

Technology Setup:
- High-speed internet connection
- Quality monitor and keyboard
- Noise-canceling headphones
- Proper cable management

Productivity Tips:
- Keep your desk organized
- Use plants to improve air quality
- Take regular breaks
- Maintain a consistent schedule
- Separate work and personal spaces

Personalization:
Add artwork, plants, or photos to make your space inspiring. However, avoid excessive decoration that might distract you.

A well-designed home office can significantly improve your productivity and job satisfaction.`,
    image: "/lifestyle-2.jpg",
    category: "Work",
    date: "Mar 15, 2024",
    likes: 189,
  },
];

export default function LifestylePostPage({
  params,
}: {
  params: { id: string };
}) {
  const [liked, setLiked] = useState(false);
  const post = lifestyleItems.find((p) => p.id === Number.parseInt(params.id));

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <p className="text-center text-muted-foreground">Story not found</p>
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
            href="/lifestyle"
            className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Lifestyle
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
                onClick={() => setLiked(!liked)}
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <Heart
                  className={`h-5 w-5 ${
                    liked ? "fill-primary text-primary" : ""
                  }`}
                />
                {post.likes + (liked ? 1 : 0)}
              </button>
              <button className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
                <Share2 className="h-5 w-5" />
                Share
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
