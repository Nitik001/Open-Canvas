"use client";

import { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const preferred = stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(preferred);
    applyTheme(preferred);
  }, []);

  const applyTheme = (t: "dark" | "light") => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(t);
  };

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem("theme", next);
  }, [theme]);

  if (!mounted) {
    return (
      <div className={cn("w-9 h-9 rounded-lg bg-surface-raised border border-[var(--border)]", className)} />
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "relative flex items-center justify-center w-9 h-9 rounded-lg",
        "bg-surface-raised border border-[var(--border)]",
        "hover:border-[var(--border-hover)] hover:bg-surface-hover",
        "transition-all duration-200 group",
        className
      )}
    >
      <Sun
        size={15}
        className={cn(
          "absolute transition-all duration-300",
          theme === "dark"
            ? "opacity-100 rotate-0 scale-100 text-text-secondary group-hover:text-accent"
            : "opacity-0 rotate-90 scale-75"
        )}
      />
      <Moon
        size={15}
        className={cn(
          "absolute transition-all duration-300",
          theme === "light"
            ? "opacity-100 rotate-0 scale-100 text-text-secondary group-hover:text-accent"
            : "opacity-0 -rotate-90 scale-75"
        )}
      />
    </button>
  );
}
