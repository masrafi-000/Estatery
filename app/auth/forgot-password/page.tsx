import type { Metadata } from "next"
import ForgotPasswordForm from "@/components/shared/auth/forgot-password-form"
export const metadata: Metadata = {
  title: "Forgot Password | Estatery",
  description: "Reset your password",
}

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-background via-background to-primary/5">
      <ForgotPasswordForm />
    </div>
  )
}
