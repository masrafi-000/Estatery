import { LucideIcon } from "lucide-react";

export interface Benefits {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonials {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}
