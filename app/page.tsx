import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { BentoGrid } from "@/components/home/BentoGrid";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Open Canvas — Geopolitics, Economics & Policy",
  description:
    "In-depth analysis of global geopolitics, macroeconomics, and public policy. Cutting through complexity to illuminate the forces shaping our world.",
};

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <BentoGrid posts={posts} />
    </>
  );
}
