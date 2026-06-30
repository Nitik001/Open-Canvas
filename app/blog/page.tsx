import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/mdx";
import { SearchFilter } from "@/components/blog/SearchFilter";

export const metadata: Metadata = {
  title: "Analysis",
  description: "In-depth perspectives on geopolitics, macroeconomics, and public policy from Open Canvas.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="mb-12">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Analysis
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight mb-4">
            All Analysis
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            Rigorous, independent perspectives on the geopolitical shifts, macroeconomic trends,
            and policy decisions shaping the global order.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent mb-10" />

        {/* Search & filter grid */}
        <SearchFilter posts={posts} categories={categories} />
      </div>
    </div>
  );
}
