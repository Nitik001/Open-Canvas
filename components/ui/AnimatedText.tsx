"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

const container = (delay: number, stagger: number) => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: delay,
      staggerChildren: stagger,
    },
  },
});

const wordVariant = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 24,
    },
  },
};

export function AnimatedText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  once = true,
  as: Tag = "div",
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      variants={container(delay, stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={cn("flex flex-wrap gap-x-[0.25em]", className)}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          className={cn("inline-block", wordClassName)}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
