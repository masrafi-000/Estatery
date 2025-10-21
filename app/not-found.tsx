"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="relative mb-8">
          <div className="text-[180px] font-bold text-indigo-600/10 dark:text-indigo-400/10 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <Search className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full animate-bounce" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-indigo-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for seems to have moved or
          doesn&apos;t exist. Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="min-w-[160px]">
            <Link href="/" className="flex items-center gap-2">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="min-w-[160px] bg-transparent"
          >
            <Link href="/properties" className="flex items-center gap-2">
              <Search className=" h-5 w-5" />
              Browse Properties
            </Link>
          </Button>
        </div>

        {/* Back Link */}
        <button
          onClick={() => window.history.back()}
          className="mt-8 inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go back to previous page
        </button>

        {/* Decorative Elements */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto opacity-50">
          <div className="h-2 bg-indigo-200 dark:bg-indigo-900 rounded-full animate-pulse" />
          <div className="h-2 bg-orange-200 dark:bg-orange-900 rounded-full animate-pulse delay-75" />
          <div className="h-2 bg-indigo-200 dark:bg-indigo-900 rounded-full animate-pulse delay-150" />
        </div>
      </div>
    </div>
  );
}
