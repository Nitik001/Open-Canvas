"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { type Post } from "@/lib/mdx";
import { Tag } from "@/components/ui/Tag";
import { formatDateShort } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  posts: Post[];
}

// Each cell configuration for the asymmetric bento layout
const bentoLayout = [
  { colSpan: "md:col-span-2", rowSpan: "md:row-span-2", large: true },
  { colSpan: "md:col-span-1", rowSpan: "md:row-span-1", large: false },
  { colSpan: "md:col-span-1", rowSpan: "md:row-span-1", large: false },
  { colSpan: "md:col-span-1", rowSpan: "md:row-span-1", large: false },
  { colSpan: "md:col-span-2", rowSpan: "md:row-span-1", large: false },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 28,
    },
  },
};

function BentoCard({
  post,
  layout,
  index,
}: {
  post: Post;
  layout: (typeof bentoLayout)[0];
  index: number;
}) {
  const isLarge = layout.large;

  return (
    <motion.article
      variants={cardVariants}
      className={cn(
        "glass-card group relative rounded-2xl overflow-hidden",
        layout.colSpan,
        layout.rowSpan,
        isLarge ? "min-h-[340px]" : "min-h-[200px] sm:min-h-[180px]"
      )}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full" tabIndex={0}>
        {/* Cover Image */}
        {post.coverImage && (
          <div className={cn("relative overflow-hidden", isLarge ? "h-52" : "h-32")}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/20 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className={cn("p-5", isLarge ? "p-6" : "p-4")}>
          <div className="flex items-start justify-between gap-3 mb-3">
            <Tag label={post.category} variant="accent" size="sm" />
            <ArrowUpRight
              size={16}
              className="text-text-muted flex-shrink-0 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200"
            />
          </div>

          <h2
            className={cn(
              "font-semibold text-text-primary leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-200",
              isLarge ? "text-xl" : "text-base"
            )}
          >
            {post.title}
          </h2>

          {isLarge && (
            <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
              {post.description}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center gap-3 text-text-muted text-xs">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {formatDateShort(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {post.readingTime} min read
            </span>
          </div>
        </div>

        {/* Accent border glow on hover */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--accent)]/20 transition-all duration-300 pointer-events-none" />
      </Link>
    </motion.article>
  );
}

export function BentoGrid({ posts }: BentoGridProps) {
  const visiblePosts = posts.slice(0, 5);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      {/* Section header */}
      <motion.div
        className="flex items-center justify-between mb-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mb-1">
            Featured Analysis
          </h2>
          <p className="text-text-secondary text-sm">
            In-depth perspectives on geopolitics, economics, and policy.
          </p>
        </div>
        <Link
          href="/blog"
          className="flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-2.5 transition-all duration-200"
        >
          View all <ArrowUpRight size={14} />
        </Link>
      </motion.div>

      {/* Bento grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-auto"
      >
        {visiblePosts.map((post, i) => (
          <BentoCard
            key={post.slug}
            post={post}
            layout={bentoLayout[i] ?? bentoLayout[bentoLayout.length - 1]}
            index={i}
          />
        ))}
      </motion.div>

      {/* Mobile link */}
      <motion.div
        className="sm:hidden mt-6 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/blog"
          className="flex items-center gap-1.5 text-accent text-sm font-medium"
        >
          View all articles <ArrowUpRight size={14} />
        </Link>
      </motion.div>
    </section>
  );
}
