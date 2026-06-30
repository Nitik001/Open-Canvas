import Link from "next/link";
import { Globe, Share2, Rss } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Analysis", href: "/blog" },
  { label: "About", href: "/about" },
];

const socialLinks = [
  { label: "Twitter / X", href: "https://twitter.com/opencanvas", icon: Share2 },
  { label: "RSS Feed", href: "/rss.xml", icon: Rss },
  { label: "Website", href: "https://opencanvas.world", icon: Globe },
];

const categories = [
  { label: "Geopolitics", href: "/blog?category=Geopolitics" },
  { label: "Economics", href: "/blog?category=Economics" },
  { label: "Policy", href: "/blog?category=Policy" },
  { label: "Analysis", href: "/blog?category=Analysis" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[var(--accent-glow)] border border-[var(--border-hover)] flex items-center justify-center">
                <Globe size={12} className="text-accent" />
              </div>
              <span className="font-semibold text-text-primary text-sm tracking-tight">
                Open Canvas
              </span>
            </div>
            <p className="text-text-muted text-xs leading-relaxed max-w-xs">
              In-depth analysis of global geopolitics, macroeconomics, and public policy.
              Cutting through complexity to illuminate the forces shaping our world.
            </p>
            <p className="text-text-muted text-xs italic">
              Insight at the intersection of power, capital, and governance.
            </p>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-4">
              Topics
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-text-secondary hover:text-accent text-sm transition-colors duration-200"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-text-secondary hover:text-accent text-sm transition-colors duration-200 group"
                    aria-label={label}
                  >
                    <Icon size={13} className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            &copy; {year} Open Canvas. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Independent analysis. No affiliations.
          </p>
        </div>
      </div>
    </footer>
  );
}
