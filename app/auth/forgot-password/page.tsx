"use client";

import ForgotPasswordForm from "@/components/shared/auth/forgot-password-form";
import { Suspense } from "react";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-background via-background to-primary/5">
      <Suspense fallback={<div>loading...</div>}>
        <ForgotPasswordForm />
      </Suspense>
    </div>
  );
}
