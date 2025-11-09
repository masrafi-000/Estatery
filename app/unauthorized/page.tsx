"use client";
import { TriangleAlertIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="size-30 flex items-center justify-center border-4 rounded-full border-destructive ">
        <TriangleAlertIcon size={50} className="text-destructive" />
      </div>
      <h1 className="text-3xl font-semibold text-destructive ">
        Unauthorized Access
      </h1>
      <p className="text-gray-500  max-w-md">
        You don&apos;t have permission to access this page. Please return to the
        homepage or log in with the appropriate credentials.
      </p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-primary text-secondary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Back to Homepage
      </button>
    </div>
  );
}
