import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="relative mb-8">
        <span
          className="text-[12rem] sm:text-[16rem] font-bold leading-none select-none"
          style={{
            background: "linear-gradient(135deg, var(--surface-raised), var(--border))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          aria-hidden="true"
        >
          404
        </span>
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-32 h-32 rounded-full bg-[var(--accent-glow)] blur-[80px]" />
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 tracking-tight">
        Page not found
      </h1>
      <p className="text-text-secondary mb-8 max-w-sm">
        The page you&apos;re looking for has wandered off into the void.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-accent text-white font-medium text-sm hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_24px_var(--accent-glow-strong)]"
      >
        Back to Home
      </Link>
    </div>
  );
}
