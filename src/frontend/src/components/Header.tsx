import { FaceLogo } from "@/components/FaceLogo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/youtube", label: "YouTube" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-elevated"
      data-ocid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            data-ocid="header.home_link"
          >
            <FaceLogo
              size={38}
              className="transition-smooth group-hover:scale-105"
            />
            <span className="font-display font-bold text-lg text-foreground tracking-tight">
              Tamil<span className="text-primary"> News Hub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
                className={`px-4 py-2 rounded-lg text-sm font-display font-medium transition-smooth ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.youtube.com/@TamilNewsHub"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.subscribe_button"
              className="ml-3 px-4 py-2 rounded-lg text-sm font-display font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-smooth"
            >
              Subscribe
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            data-ocid="nav.mobile_menu_toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden bg-card border-t border-border px-4 pb-4 pt-2 space-y-1"
          data-ocid="nav.mobile_menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
              className={`block px-4 py-3 rounded-lg text-sm font-display font-medium transition-smooth ${
                isActive(link.href)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.youtube.com/@TamilNewsHub"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.mobile_subscribe_button"
            className="block mt-2 px-4 py-3 rounded-lg text-sm font-display font-semibold bg-primary text-primary-foreground text-center hover:opacity-90 transition-smooth"
          >
            Subscribe on YouTube
          </a>
        </div>
      )}
    </header>
  );
}
