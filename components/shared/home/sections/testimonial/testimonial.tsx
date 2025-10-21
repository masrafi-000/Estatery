"use client";

import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-16 md:py-24"
    >
      {/* Background gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Star className="h-4 w-4 fill-current" aria-hidden="true" />
            Testimonials
          </div>
          <h2
            id="testimonials-heading"
            className="mb-4 text-3xl font-bold md:text-4xl text-balance"
          >
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Hear directly from our clients about their experience working with
            us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.id}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="relative overflow-hidden group border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm h-full">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative shrink-0">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-full blur-md"
                      />
                      <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-background shadow-lg">
                        <Image
                          src={t.image || "/placeholder.svg"}
                          alt={t.name || "Client photo"}
                          fill
                          priority={t.id <= 3}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <figcaption className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-lg truncate">
                        {t.name || "Anonymous"}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {t.role || "Client"}
                      </p>
                    </figcaption>
                  </div>

                  {/* Rating */}
                  <div
                    className="mb-4 flex gap-0.5"
                    aria-label={`Rating: ${t.rating} out of 5`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < t.rating
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted-foreground"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground leading-relaxed text-pretty flex-1">
                    “{t.text || "No testimonial provided."}”
                  </blockquote>

                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="h-1 w-12 bg-linear-to-r from-primary to-accent rounded-full" />
                  </div>
                </CardContent>
              </Card>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
