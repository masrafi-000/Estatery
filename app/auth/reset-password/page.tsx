import type { Metadata } from "next"
import ResetPasswordForm from "@/components/shared/auth/reset-password-form"

export const metadata: Metadata = {
  title: "Reset Password | Estatery",
  description: "Create a new password",
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-background via-background to-primary/5">
      <ResetPasswordForm />
    </div>
  )
}
