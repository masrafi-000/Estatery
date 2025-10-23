"use client";

// import { useSession } from 'next-auth/react';
import Verify2FAForm from "@/components/shared/auth/verify-2fa-form";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Verify2FAPage() {
  // const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const [userId, setUserId] = useState<string | null>(null);

  // useEffect(() => {
  // 	// Get userId from URL params or session
  // 	const userIdFromParams = searchParams.get('userId');
  // 	const userIdFromSession = session?.user?.id;

  // 	if (userIdFromParams) {
  // 		setUserId(userIdFromParams);
  // 	} else if (userIdFromSession) {
  // 		setUserId(userIdFromSession);
  // 	}
  // }, [searchParams, session]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-background via-background to-primary/5">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-background via-background to-primary/5">
      <Verify2FAForm userId={userId} />
    </div>
  );
}
