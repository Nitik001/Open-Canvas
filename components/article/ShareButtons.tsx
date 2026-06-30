"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Globe, Link as LinkIcon, Check } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(url ?? window.location.href);

    const handler = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [url]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select text
    }
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  const buttonClass =
    "flex items-center justify-center w-10 h-10 rounded-xl bg-surface border border-[var(--border)] text-text-secondary hover:text-accent hover:border-[var(--border-hover)] transition-all duration-200 hover:scale-110";

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="fixed bottom-8 right-6 z-40 flex flex-col gap-2"
          aria-label="Share article"
        >
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
            aria-label="Share on Twitter"
          >
          <Share2 size={16} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
            aria-label="Share on LinkedIn"
          >
          <Globe size={16} />
          </a>
          <button
            onClick={copyLink}
            className={buttonClass}
            aria-label="Copy link"
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="text-accent"
                >
                  <Check size={16} />
                </motion.span>
              ) : (
                <motion.span key="link" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <LinkIcon size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
