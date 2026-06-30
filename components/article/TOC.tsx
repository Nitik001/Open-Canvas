"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TOCProps {
  content: string;
}

function extractHeadings(markdown: string): TOCItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ id, text, level });
  }

  return headings;
}

export function TOC({ content }: TOCProps) {
  const headings = extractHeadings(content);
  const [activeId, setActiveId] = useState<string>("");

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "-80px 0px -70% 0px",
      threshold: 0,
    });

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings, handleObserver]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
      <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
        On this page
      </p>
      <ul className="space-y-1.5 border-l border-[var(--border)]">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                "block py-0.5 text-xs leading-relaxed transition-all duration-200",
                "border-l-2 -ml-px",
                level === 3 ? "pl-6" : "pl-4",
                activeId === id
                  ? "text-accent border-accent font-medium"
                  : "text-text-muted border-transparent hover:text-text-secondary hover:border-[var(--border-hover)]"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
