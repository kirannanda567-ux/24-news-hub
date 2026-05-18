import { FaceLogo } from "@/components/FaceLogo";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();
const hostname =
  typeof window !== "undefined"
    ? encodeURIComponent(window.location.hostname)
    : "";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/youtube", label: "YouTube" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  {
    href: "https://www.youtube.com/@TamilNewsHub",
    icon: SiYoutube,
    label: "YouTube",
    ocid: "footer.youtube_link",
  },
  {
    href: "https://www.facebook.com/TamilNewsHub",
    icon: SiFacebook,
    label: "Facebook",
    ocid: "footer.facebook_link",
  },
  {
    href: "https://www.instagram.com/TamilNewsHub",
    icon: SiInstagram,
    label: "Instagram",
    ocid: "footer.instagram_link",
  },
  {
    href: "https://x.com/TamilNewsHub",
    icon: SiX,
    label: "X (Twitter)",
    ocid: "footer.x_link",
  },
];

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <FaceLogo size={36} />
              <span className="font-display font-bold text-base text-foreground">
                Tamil<span className="text-primary"> News Hub</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premier news and analysis for the global Tamil community. Covering
              politics, technology, culture, and more.
            </p>
            <div
              className="flex items-center gap-3"
              data-ocid="footer.social_links"
            >
              {socialLinks.map(({ href, icon: Icon, label, ocid }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-ocid={ocid}
                  className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    data-ocid={`footer.${link.label.toLowerCase()}_link`}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground">
              Stay Informed
            </h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for daily Tamil news updates.
            </p>
            {subscribed ? (
              <p
                className="text-sm font-semibold text-primary"
                data-ocid="footer.newsletter_success_state"
              >
                Thank you for subscribing!
              </p>
            ) : (
              <form
                className="flex gap-2"
                onSubmit={handleSubscribe}
                data-ocid="footer.newsletter_form"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  data-ocid="footer.newsletter_input"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-display font-semibold hover:opacity-90 transition-smooth whitespace-nowrap"
                  data-ocid="footer.newsletter_submit_button"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            Tamil News Hub &mdash; Serving the global Tamil community
          </p>
        </div>
      </div>
    </footer>
  );
}
