import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(): MDXComponents {
  return {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        className={cn(
          "mt-12 mb-4 text-3xl sm:text-4xl font-bold text-text-primary tracking-tight scroll-mt-20",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className={cn(
          "mt-10 mb-4 text-2xl sm:text-3xl font-bold text-text-primary tracking-tight scroll-mt-20",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className={cn(
          "mt-8 mb-3 text-xl font-semibold text-text-primary scroll-mt-20",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h4
        className={cn(
          "mt-6 mb-2 text-lg font-semibold text-text-primary scroll-mt-20",
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className={cn(
          "mb-5 text-text-secondary leading-[1.85] text-base",
          className
        )}
        {...props}
      />
    ),
    a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
        className={cn(
          "text-accent underline underline-offset-2 decoration-[var(--accent-glow-strong)]",
          "hover:decoration-accent transition-all duration-200",
          className
        )}
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul
        className={cn(
          "mb-5 space-y-2 pl-5 text-text-secondary",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol
        className={cn(
          "mb-5 space-y-2 pl-5 list-decimal text-text-secondary",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
      <li
        className={cn(
          "leading-relaxed marker:text-accent",
          className
        )}
        {...props}
      />
    ),
    blockquote: ({ className, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className={cn(
          "my-6 pl-5 border-l-2 border-accent",
          "text-text-secondary italic leading-relaxed",
          "bg-[var(--accent-glow)] rounded-r-lg py-4 pr-4",
          className
        )}
        {...props}
      />
    ),
    hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
      <hr
        className={cn("my-10 border-[var(--border)]", className)}
        {...props}
      />
    ),
    strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <strong
        className={cn("font-semibold text-text-primary", className)}
        {...props}
      />
    ),
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
      const isBlock = className?.includes("language-");
      if (isBlock) {
        return <code className={cn("text-sm font-mono", className)} {...props} />;
      }
      return (
        <code
          className={cn(
            "px-1.5 py-0.5 rounded-md text-sm font-mono",
            "bg-surface-raised text-accent border border-[var(--border)]",
            className
          )}
          {...props}
        />
      );
    },
    pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className={cn(
          "my-6 overflow-x-auto rounded-xl bg-surface-raised border border-[var(--border)]",
          "p-5 text-sm font-mono leading-relaxed",
          "[&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-surface-hover",
          className
        )}
        {...props}
      />
    ),
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className={cn("w-full text-sm", className)} {...props} />
      </div>
    ),
    thead: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <thead className={cn("border-b border-[var(--border)] bg-surface-raised", className)} {...props} />
    ),
    th: ({ className, ...props }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
      <th
        className={cn(
          "px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-text-muted",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
      <td
        className={cn(
          "px-4 py-3 text-text-secondary border-b border-[var(--border)] last:border-0",
          className
        )}
        {...props}
      />
    ),
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
      const { src, alt, width, height } = props;
      if (!src) return null;
      return (
        <figure className="my-8">
          <div className="relative overflow-hidden rounded-xl border border-[var(--border)]">
            <Image
              src={src as string}
              alt={alt ?? ""}
              width={Number(width) || 1200}
              height={Number(height) || 630}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          {alt && (
            <figcaption className="mt-2 text-center text-xs text-text-muted">
              {alt}
            </figcaption>
          )}
        </figure>
      );
    },
  };
}
