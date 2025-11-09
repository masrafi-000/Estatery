import { LucideIcon } from "lucide-react";

export interface ContactDetails {
  icon: LucideIcon;
  title: string;
  content: string;
  link?: string;
}

export interface FormSelectSubject {
  value: string;
  label: string;
}
