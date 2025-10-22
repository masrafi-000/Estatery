import { ServiceData, ServicesSetpsData } from "@/types";
import { CheckCircle, FileCheck, FileText, Home, Key, Search, Shield, TrendingUp, Users } from "lucide-react";



export const services: ServiceData[] = [
  {
    icon: Home,
    title: "Property Sales",
    description:
      "Expert guidance through the entire home buying and selling process. We help you find the perfect property or get the best price for your home with our market expertise and negotiation skills.",
  },
  {
    icon: Key,
    title: "Property Rentals",
    description:
      "Find your ideal rental property or list your property for rent. We handle tenant screening, lease agreements, and ensure a smooth rental experience for both landlords and tenants.",
  },
  {
    icon: TrendingUp,
    title: "Investment Consulting",
    description:
      "Strategic real estate investment advice to maximize your returns. We analyze market trends, identify opportunities, and help you build a profitable property portfolio.",
  },
  {
    icon: FileText,
    title: "Property Management",
    description:
      "Comprehensive property management services including maintenance coordination, rent collection, and tenant relations. Let us handle the day-to-day while you enjoy passive income.",
  },
  {
    icon: Users,
    title: "Relocation Services",
    description:
      "Seamless relocation assistance for individuals and families moving to new areas. We provide neighborhood insights, school information, and help you settle into your new community.",
  },
  {
    icon: Shield,
    title: "Legal & Documentation",
    description:
      "Professional assistance with all legal aspects of real estate transactions. From contracts to title searches, we ensure all documentation is accurate and compliant.",
  },
]


export const servicesSteps: ServicesSetpsData[] = [
  {
    icon: Search,
    title: "Discovery",
    description: "We start by understanding your needs, preferences, and budget to create a tailored strategy.",
  },
  {
    icon: FileCheck,
    title: "Planning",
    description: "Our team develops a comprehensive plan with market analysis and property recommendations.",
  },
  {
    icon: Key,
    title: "Execution",
    description: "We handle negotiations, paperwork, and coordinate all aspects of the transaction process.",
  },
  {
    icon: CheckCircle,
    title: "Completion",
    description: "Successful closing with ongoing support to ensure your satisfaction and future needs.",
  },
]