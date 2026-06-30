import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { Calendar, Clock, User } from "lucide-react";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Tag } from "@/components/ui/Tag";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ShareButtons } from "@/components/article/ShareButtons";
import { TOC } from "@/components/article/TOC";
import { getMDXComponents } from "@/components/mdx/MDXComponents";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author ?? "Alex Morgan" }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark-dimmed",
            light: "github-light",
          },
          keepBackground: false,
          defaultLang: "typescript",
        },
      ],
    ],
  },
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <ReadingProgress />

      <article className="min-h-screen pt-20" itemScope itemType="https://schema.org/BlogPosting">
        {/* Hero Image */}
        {post.coverImage && (
          <div className="relative h-[50vh] max-h-[520px] w-full overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/30 to-[var(--background)]" />
          </div>
        )}

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Layout: Article content + TOC sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
            {/* Main content */}
            <div>
              {/* Article header */}
              <header className={post.coverImage ? "-mt-16 relative z-10" : "pt-16"}>
                {/* Category */}
                <div className="mb-4">
                  <Tag label={post.category} variant="accent" />
                </div>

                {/* Title */}
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-6"
                  itemProp="headline"
                >
                  {post.title}
                </h1>

                {/* Description */}
                <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-2xl">
                  {post.description}
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm pb-8 mb-8 border-b border-[var(--border)]">
                  {post.author && (
                    <span className="flex items-center gap-1.5">
                      <User size={14} />
                      <span itemProp="author">{post.author}</span>
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <time dateTime={post.date} itemProp="datePublished">
                      {formatDate(post.date)}
                    </time>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readingTime} min read
                  </span>
                  <span className="text-text-muted text-xs ml-auto">
                    {post.wordCount.toLocaleString()} words
                  </span>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag) => (
                      <Tag key={tag} label={tag} variant="ghost" />
                    ))}
                  </div>
                )}
              </header>

              {/* MDX Body */}
              <div
                className="prose max-w-none prose-blog"
                style={{ "--tw-prose-body": "var(--text-secondary)" } as React.CSSProperties}
                itemProp="articleBody"
              >
                <MDXRemote
                  source={post.content}
                  components={getMDXComponents()}
                  // @ts-expect-error - options typing is complex
                  options={mdxOptions}
                />
              </div>

              {/* Article footer */}
              <footer className="mt-16 pt-8 border-t border-[var(--border)]">
                <p className="text-text-muted text-sm">
                  Published on{" "}
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  {post.author && ` by ${post.author}`}.
                </p>
              </footer>
            </div>

            {/* TOC Sidebar */}
            <aside className="hidden lg:block pt-4">
              {post.coverImage && <div className="h-[calc(50vh-80px)] max-h-[360px]" />}
              <TOC content={post.content} />
            </aside>
          </div>
        </div>
      </article>

      {/* Floating share buttons */}
      <ShareButtons title={post.title} />
    </>
  );
}
