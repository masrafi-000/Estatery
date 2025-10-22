import { footerSections, socialLinks } from "@/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 ">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row  justify-between gap-5 md:gap-0">
          {/* Brand */}
          <div className="space-y-4 flex-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 justify-center items-center rounded-lg bg-primary">
                <span className="text-blue-500 text-lg font-bold">E</span>
              </div>
              <span className="text-xl font-semibold">Estatery</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Find your dream home with the most comprehensive real estate
              platform.
            </p>
          </div>

          <div className="w-full flex-1 flex justify-between  flex-wrap ">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4 ">
                <h3 className="text-sm font-semibold">{section.title}</h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Dynamically Render Sections */}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Estatery. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
