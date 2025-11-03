"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import VerifyAccountForm from "@/components/shared/auth/verify-account-form";

function VerifyAccountContent() {
  const searchParams = useSearchParams();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const userIdFromParams = searchParams.get("userId");
    if (userIdFromParams) {
      setUserId(userIdFromParams);
    }
  }, [searchParams]);

  if (!userId) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-background via-background to-primary/5">
        <div className="text-center">
          <p className="text-red-600 mb-4">
            Invalid verification link. Please check your email or sign up again.
          </p>
          <Link href="/auth/signup" className="text-primary hover:underline">
            Go to Signup
          </Link>
        </div>
      </div>
    );
  }

  return <VerifyAccountForm userId={userId} />;
}

export default function VerifyAccountPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-background via-background to-primary/5">
      <Suspense fallback={<div>Loading...</div>}>
        <VerifyAccountContent />
      </Suspense>
    </div>
  );
}
