import type { Metadata } from "next"
import Link from "next/link"
import BecomeAgentForm from "./_components/become-agent-form"
import { Shield, Award, TrendingUp, Users, CheckCircle, Building } from "lucide-react"

export const metadata: Metadata = {
  title: "Become an Agent - Estatery",
  description: "Join our network of professional real estate agents",
}

const benefits = [
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Access thousands of potential buyers and sellers looking for properties",
  },
  {
    icon: Users,
    title: "Expand Your Network",
    description: "Connect with other agents and industry professionals",
  },
  {
    icon: Award,
    title: "Professional Tools",
    description: "Get access to premium listing tools and analytics dashboard",
  },
  {
    icon: Shield,
    title: "Verified Badge",
    description: "Stand out with our verified agent badge on your profile",
  },
]

const requirements = [
  "Valid real estate license in your operating state/region",
  "Minimum 1 year of experience in real estate",
  "Professional references from previous clients or employers",
  "Clean background check",
  "Commitment to ethical business practices",
]

export default function BecomeAgentPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-indigo-600 dark:bg-indigo-900">
        <div className="absolute inset-0 bg-grid-white/10 mask-[linear-gradient(0deg,transparent,black)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">Estatery</span>
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
              <Building className="w-4 h-4" />
              <span>Join 5,000+ Professional Agents</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Become a Certified Agent</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Join our growing network of real estate professionals and take your career to the next level
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Benefits & Requirements */}
          <div className="lg:col-span-1 space-y-8">
            {/* Benefits */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Why Join Us?</h2>
              <div className="space-y-5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Requirements</h2>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Card */}
            <div className="bg-linear-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-indigo-100 mb-4">
                Our team is here to assist you with the registration process.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
                Contact Support
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            <BecomeAgentForm />
          </div>
        </div>
      </div>
    </div>
  )
}
