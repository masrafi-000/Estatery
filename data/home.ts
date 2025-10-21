import { Benefits, Testimonials } from "@/types";
import {
  Award,
  Clock,
  HeadphonesIcon,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

export const benefits: Benefits[] = [
  {
    icon: Shield,
    title: "Verified Listings",
    description:
      "All properties are verified and authenticated to ensure you get accurate information.",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description:
      "Access real-time market data and trends to make informed investment decisions.",
  },
  {
    icon: Users,
    title: "Expert Agents",
    description:
      "Work with experienced real estate professionals who understand your needs.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you.",
  },
  {
    icon: Award,
    title: "Best Deals",
    description:
      "Get access to exclusive listings and the best deals in the market.",
  },
  {
    icon: HeadphonesIcon,
    title: "Personalized Service",
    description:
      "Receive tailored recommendations based on your preferences and requirements.",
  },
];

export const testimonials: Testimonials[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/testimonial-1.jpg",
    rating: 5,
    text: "Estatery made finding my dream home so easy! The search filters were intuitive and the property details were comprehensive. Highly recommend!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Real Estate Investor",
    image: "/testimonial-2.jpg",
    rating: 5,
    text: "As an investor, I need accurate data and quick access to properties. This platform delivers on both fronts. The best real estate platform I've used.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    image: "/testimonial-3.jpg",
    rating: 5,
    text: "The team was incredibly helpful throughout my first home buying experience. The platform is user-friendly and the support was outstanding.",
  },
];
