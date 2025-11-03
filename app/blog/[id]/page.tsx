"use client";

import { AdSidebar } from "@/components/shared/ads/ad-sidebar";
import { ArrowLeft, Calendar, Share2, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for First-Time Home Buyers",
    excerpt:
      "Learn the essential steps and strategies to make your first home purchase a success.",
    content: `Buying your first home is one of the most significant financial decisions you'll make. Here are 10 essential tips to guide you through the process.

1. Get Pre-Approved for a Mortgage:
Before you start house hunting, get pre-approved for a mortgage. This shows sellers you're a serious buyer and helps you understand your budget.

2. Save for a Down Payment:
Aim to save at least 10-20% of the home's purchase price. A larger down payment means lower monthly payments and better loan terms.

3. Check Your Credit Score:
Your credit score affects your mortgage rate. Check your score and fix any errors before applying for a loan.

4. Get Pre-Approved, Not Just Pre-Qualified:
Pre-approval is more thorough than pre-qualification and carries more weight with sellers.

5. Find a Good Real Estate Agent:
A knowledgeable agent can help you navigate the market, negotiate offers, and avoid costly mistakes.

6. Research the Neighborhood:
Look beyond the house. Research the neighborhood's safety, schools, amenities, and future development plans.

7. Get a Home Inspection:
Always get a professional home inspection. This can reveal hidden problems that could cost thousands to fix.

8. Understand the Total Cost:
Don't just focus on the mortgage payment. Consider property taxes, insurance, HOA fees, and maintenance costs.

9. Don't Make Large Purchases Before Closing:
Avoid buying a car or taking on new debt before closing. This can affect your loan approval.

10. Review All Documents Carefully:
Before signing, review all closing documents. Make sure all terms match what you agreed to.

Conclusion:
Buying your first home is exciting but requires careful planning. Follow these tips to make the process smoother and avoid common pitfalls.`,
    image: "/blog-1.jpg",
    category: "Buying",
    author: "Sarah Johnson",
    date: "Mar 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Future of Real Estate Technology",
    excerpt:
      "Explore how AI and automation are transforming the real estate industry.",
    content: `Technology is revolutionizing the real estate industry in unprecedented ways. From virtual tours to AI-powered property valuations, the future of real estate is digital.

Virtual Reality Tours:
VR technology allows buyers to tour properties from anywhere in the world. This saves time and expands the market for sellers.

AI-Powered Valuations:
Machine learning algorithms can now predict property values with remarkable accuracy, helping both buyers and sellers make informed decisions.

Blockchain and Smart Contracts:
Blockchain technology is streamlining transactions and reducing fraud. Smart contracts can automate many aspects of the buying process.

Drone Photography:
Drones provide stunning aerial views of properties and neighborhoods, giving buyers a better sense of the location.

Big Data Analytics:
Real estate companies are using big data to identify market trends, predict demand, and optimize pricing strategies.

Mobile Apps:
Real estate apps make it easier for buyers to search properties, schedule viewings, and communicate with agents.

IoT and Smart Homes:
Internet of Things technology is making homes smarter and more efficient, increasing property values.

Challenges and Opportunities:
While technology offers many benefits, it also presents challenges like data privacy and the need for industry-wide standards.

Conclusion:
The future of real estate is undoubtedly digital. Agents and companies that embrace technology will have a competitive advantage.`,
    image: "/blog-2.jpg",
    category: "Technology",
    author: "Michael Chen",
    date: "Mar 12, 2024",
    readTime: "7 min read",
  },
];

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [shared, setShared] = useState(false);
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id));

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <p className="text-center text-muted-foreground">
            Blog post not found
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
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
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
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
              <span className="ml-auto text-xs">{post.readTime}</span>
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
