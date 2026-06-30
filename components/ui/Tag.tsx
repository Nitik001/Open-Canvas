"use client";

import { cn } from "@/lib/utils";

interface TagProps {
  label: string;
  variant?: "default" | "accent" | "ghost";
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

const variantClasses = {
  default: "bg-surface-raised text-text-secondary border border-[var(--border)] hover:border-[var(--border-hover)] hover:text-text-primary",
  accent: "bg-[var(--accent-glow)] text-accent border border-[var(--accent-glow-strong)]",
  ghost: "bg-transparent text-text-muted border border-[var(--border)] hover:border-[var(--border-hover)] hover:text-text-secondary",
};

const sizeClasses = {
  sm: "text-xs px-2.5 py-0.5",
  md: "text-xs px-3 py-1",
};

export function Tag({
  label,
  variant = "default",
  size = "md",
  className,
  onClick,
  active = false,
}: TagProps) {
  const base = cn(
    "inline-flex items-center rounded-full font-medium transition-all duration-200 select-none",
    variantClasses[variant],
    sizeClasses[size],
    onClick && "cursor-pointer",
    active && "bg-[var(--accent-glow)] text-accent border-[var(--accent-glow-strong)]",
    className
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={base}>
        {label}
      </button>
    );
  }

  return <span className={base}>{label}</span>;
}
