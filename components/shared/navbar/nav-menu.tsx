"use client";

import { Button } from "@/components/ui/button";
import { navButtons, navLinks } from "@/data";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../theme/theme-toggle";

type Props = { openNav: () => void };

const NavMenu = ({ openNav }: Props) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Go to home page"
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 justify-center items-center rounded-lg bg-primary">
            <span className="text-blue-500 text-lg font-bold ">E</span>
          </div>
          <span className="text-xl font-semibold ">Estatery</span>
        </Link>

        {/* Desktop Navbar */}
        <nav
          aria-label="Main Navigation"
          className="hidden  gap-3 xl:gap-6 md:flex items-center justify-center "
        >
          {navLinks.map((link) => (
            <div key={link.href} className="flex flex-col items-center">
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href)
                    ? "text-primary font-bold"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.label}
              </Link>
              <span
                className={`mt-1 h-1 w-full rounded-full transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-linear-to-r from-primary to-accent"
                    : "bg-transparent"
                }`}
              ></span>
            </div>
          ))}
        </nav>

        {/* Right Section */}
        <div className=" flex items-center justify-center gap-2 md:gap-4">
          {navButtons.map((btn) => (
            <Link key={btn.label} href={btn.href}>
              <Button
                variant={btn.variant || "default"}
                size={btn.size || "sm"}
                className="hidden md:inline-flex"
              >
                {btn.label}
              </Button>
            </Link>
          ))}

          <ThemeToggle />

          <Button
            variant="ghost"
            size="default"
            onClick={openNav}
            className="md:hidden"
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavMenu;
