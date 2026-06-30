"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { type Post } from "@/lib/mdx";
import { PostCard } from "./PostCard";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

interface SearchFilterProps {
  posts: Post[];
  categories: string[];
}

export function SearchFilter({ posts, categories }: SearchFilterProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = !activeCategory || post.category === activeCategory;
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.tags?.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, activeCategory]);

  const clearSearch = useCallback(() => {
    setQuery("");
    setActiveCategory(null);
  }, []);

  const hasFilters = query || activeCategory;

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-6">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
          <Search size={16} />
        </div>
        <input
          type="search"
          id="blog-search"
          placeholder="Search articles…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={cn(
            "w-full bg-surface border border-[var(--border)] rounded-xl",
            "pl-10 pr-10 py-3 text-sm text-text-primary placeholder:text-text-muted",
            "focus:outline-none focus:border-[var(--border-hover)] focus:ring-2 focus:ring-[var(--accent-glow)]",
            "transition-all duration-200"
          )}
          aria-label="Search articles"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap items-center gap-2 mb-8" role="group" aria-label="Filter by category">
        <span className="text-text-muted text-xs font-medium uppercase tracking-widest mr-1">
          Filter:
        </span>
        <Tag
          label="All"
          variant="default"
          active={!activeCategory}
          onClick={() => setActiveCategory(null)}
        />
        {categories.map((cat) => (
          <Tag
            key={cat}
            label={cat}
            variant="default"
            active={activeCategory === cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
          />
        ))}
      </div>

      {/* Results count */}
      <motion.div
        key={filteredPosts.length}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-between mb-6"
      >
        <p className="text-text-muted text-xs">
          {filteredPosts.length === 0
            ? "No articles found"
            : `${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""}`}
          {hasFilters && (
            <button
              onClick={clearSearch}
              className="ml-2 text-accent hover:underline"
            >
              Clear filters
            </button>
          )}
        </p>
      </motion.div>

      {/* Post grid */}
      <AnimatePresence mode="popLayout">
        {filteredPosts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
              >
                <PostCard post={post} index={i} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center py-20 text-text-muted"
          >
            <Search size={40} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium text-text-secondary mb-2">No articles found</p>
            <p className="text-sm">Try adjusting your search or filters.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
