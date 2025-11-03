"use client";

import ResetPasswordForm from "@/components/shared/auth/reset-password-form";
import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-background via-background to-primary/5">
      <Suspense fallback={<div>loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
