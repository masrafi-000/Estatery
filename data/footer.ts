import { FooterLink, FooterSection, SocialLink } from "@/types";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

// Quick Links
export const quickLinks: FooterLink[] = [
  { label: "Buy Property", href: "/properties" },
  { label: "Rent Property", href: "/properties" },
  { label: "Sell Property", href: "/properties" },
  { label: "Services", href: "/services" },
];

// Company Links
export const companyLinks: FooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/career" },
  { label: "Blog", href: "/blog" },
];

// Legal Links
export const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/terms#privacy-policy" },
  { label: "Terms of Service", href: "/terms#terms-service" },
  { label: "Cookie Policy", href: "/terms#cookie-policy" },
];

export const footerSections: FooterSection[] = [
  { title: "Quick Links", links: quickLinks },
  { title: "Company", links: companyLinks },
  { title: "Legal", links: legalLinks },
];

// Social Links
export const socialLinks: SocialLink[] = [
  {
    icon: Facebook,
    href: "/",
    label: "Facebook",
  },
  {
    icon: Twitter,
    href: "/",
    label: "Twitter",
  },
  {
    icon: Instagram,
    href: "/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "/",
    label: "LinkedIn",
  },
];
