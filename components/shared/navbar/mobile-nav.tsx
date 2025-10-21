"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navButtons, navLinks } from "./nav-menu";
import { useEffect } from "react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export default function MobileNav({ showNav, closeNav }: Props) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // prevent body scroll when nav is open
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showNav]);

  const navState = showNav
    ? "translate-x-0 delay-100"
    : "-translate-x-full delay-0";

  return (
    <>
      {/* overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 z-40 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 left-0 h-screen w-[85%] max-w-[380px]
          bg-white/95 dark:bg-black/95 text-black dark:text-white
          shadow-2xl transform transition-transform duration-500 ${navState} z-50
          flex flex-col justify-between`}
      >
        {/* Header: logo + close button */}
        <div className="flex items-center justify-between px-6 pt-6">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeNav}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-blue-500 text-lg font-bold">E</span>
            </div>
            <span className="text-xl font-semibold">Estatery</span>
          </Link>

          <button
            onClick={closeNav}
            aria-label="Close navigation"
            className="w-9 h-9 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col items-center justify-center gap-6 flex-1 px-8 mt-6">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeNav}
              className={`w-full h-10 flex items-center justify-center rounded-2xl border transition-colors duration-200 text-base ${
                isActive(item.href)
                  ? "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 font-medium"
                  : "border-gray-300 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer buttons */}
        <div className="w-full flex  items-center gap-4 px-8 pb-10">
          {navButtons.map((btn) => (
            <Link className="w-full" key={btn.href} href={btn.href} onClick={closeNav}>
              <Button
                variant={btn.variant || "default"}
                size={btn.size || "sm"}
                className="w-full"
              >
                {btn.label}
              </Button>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
