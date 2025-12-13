import type { Metadata } from "next"
import AdminLoginForm from "./_components/admin-login-form" 
import Link from "next/link"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Admin Login - ZettaEstate",
  description: "Administrator portal login for ZettaEstate",
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-950 dark:via-indigo-950 dark:to-gray-950 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mb-4 text-4xl font-bold text-primary">
            E
          </div>
          <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Estatery</h1>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">Admin Portal</h2>
          <p className="text-gray-600 dark:text-gray-400">Please login to access the admin dashboard</p>
        </div>

        {/* Login Form */}
        <AdminLoginForm />

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Need help? Contact{" "}
          <Link
            href="/contact"
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 hover:underline"
          >
            IT Support
          </Link>
        </p>
      </div>
    </div>
  )
}
