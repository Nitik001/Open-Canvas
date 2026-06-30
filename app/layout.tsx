import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://opencanvas.world"),
  title: {
    default: "Open Canvas — Geopolitics, Economics & Policy",
    template: "%s | Open Canvas",
  },
  description:
    "In-depth analysis of global geopolitics, macroeconomics, and public policy. Cutting through complexity to illuminate the forces shaping our world.",
  keywords: ["geopolitics", "economics", "policy", "international relations", "analysis", "global affairs"],
  authors: [{ name: "Open Canvas" }],
  creator: "Open Canvas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opencanvas.world",
    siteName: "Open Canvas",
    title: "Open Canvas — Geopolitics, Economics & Policy",
    description: "In-depth analysis of global geopolitics, macroeconomics, and public policy.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@opencanvas",
    title: "Open Canvas — Geopolitics, Economics & Policy",
    description: "In-depth analysis of global geopolitics, macroeconomics, and public policy.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const preferred = stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.remove('dark', 'light');
                document.documentElement.classList.add(preferred);
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
