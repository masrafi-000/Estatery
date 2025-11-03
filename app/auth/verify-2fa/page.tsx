"use client";

import Verify2FAForm from "@/components/shared/auth/verify-2fa-form";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function Verify2FAContent() {
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
          <p className="text-red-600 mb-4">User not found. Please login.</p>
          <Link href="/auth/login" className="text-primary hover:underline">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return <Verify2FAForm userId={userId} />;
}

export default function Verify2FAPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-background via-background to-primary/5">
      <Suspense fallback={<div>Loading...</div>}>
        <Verify2FAContent />
      </Suspense>
    </div>
  );
}
