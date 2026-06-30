import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { calculateReadingTime } from "./utils";

const POSTS_DIRECTORY = path.join(process.cwd(), "content/posts");

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  featured?: boolean;
  coverImage?: string;
  author?: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  readingTime: number;
  wordCount: number;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) return [];
  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.(mdx|md)$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const mdxPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
    const mdPath = path.join(POSTS_DIRECTORY, `${slug}.md`);
    const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const frontmatter = data as PostFrontmatter;
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = calculateReadingTime(content);

    return {
      ...frontmatter,
      slug,
      content,
      readingTime,
      wordCount,
    };
  } catch {
    return null;
  }
}

export function getAllPosts(): Post[] {
  const slugs = getAllSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((post) => post.featured === true);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).sort();
}
