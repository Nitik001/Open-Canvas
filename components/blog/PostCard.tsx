import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import { type Post } from "@/lib/mdx";
import { Tag } from "@/components/ui/Tag";
import { formatDateShort } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  index?: number;
}

export function PostCard({ post, index = 0 }: PostCardProps) {
  return (
    <article className="glass-card group rounded-2xl overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="block" tabIndex={0}>
        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative h-44 overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading={index < 3 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <Tag label={post.category} variant="accent" size="sm" />
            <ArrowUpRight
              size={15}
              className="text-text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200"
            />
          </div>

          <h2 className="font-semibold text-text-primary leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-200">
            {post.title}
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
            {post.description}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <Tag key={tag} label={tag} variant="ghost" size="sm" />
              ))}
            </div>
          )}

          {/* Meta */}
          <div className="flex items-center gap-4 text-text-muted text-xs pt-3 border-t border-[var(--border)]">
            <span className="flex items-center gap-1.5">
              <Calendar size={11} />
              {formatDateShort(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={11} />
              {post.readingTime} min read
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
