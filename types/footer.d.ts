import { LucideIcon } from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}
