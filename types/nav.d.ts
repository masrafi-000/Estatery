export interface NavLink {
  id: number;
  label: string;
  href: string;
}

export interface NavButton {
  label: string;
  href: string;
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "lg" | "icon";
}
