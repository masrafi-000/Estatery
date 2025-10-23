import { NavButton, NavLink } from "@/types/nav";

// Navigation Links
export const navLinks: NavLink[] = [
  { id: 0, label: "Home", href: "/" },
  { id: 1, label: "Properties", href: "/properties" },
  { id: 2, label: "Services", href: "/services" },
  { id: 3, label: "Contact", href: "/contact" },
  { id: 4, label: "Blog", href: "/blog" },
  { id: 5, label: "Articles", href: "/articles" },
];

// Action Buttons
export const navButtons: NavButton[] = [
  { label: "Login", href: "/auth/login", variant: "outline", size: "sm" },
  { label: "Sign Up", href: "/auth/signup", size: "sm", variant: "default" },
];
