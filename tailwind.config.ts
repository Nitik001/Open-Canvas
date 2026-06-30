import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-raised": "var(--surface-raised)",
        border: "var(--border)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        accent: {
          DEFAULT: "var(--accent)",
          glow: "var(--accent-glow)",
          hover: "var(--accent-hover)",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px var(--accent-glow), 0 0 20px var(--accent-glow)" },
          "100%": { boxShadow: "0 0 20px var(--accent-glow), 0 0 60px var(--accent-glow)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      typography: () => ({
        blog: {
          css: {
            "--tw-prose-body": "var(--text-secondary)",
            "--tw-prose-headings": "var(--text-primary)",
            "--tw-prose-lead": "var(--text-secondary)",
            "--tw-prose-links": "var(--accent)",
            "--tw-prose-bold": "var(--text-primary)",
            "--tw-prose-counters": "var(--text-secondary)",
            "--tw-prose-bullets": "var(--accent)",
            "--tw-prose-hr": "var(--border)",
            "--tw-prose-quotes": "var(--text-primary)",
            "--tw-prose-quote-borders": "var(--accent)",
            "--tw-prose-captions": "var(--text-secondary)",
            "--tw-prose-code": "var(--text-primary)",
            "--tw-prose-pre-code": "var(--text-primary)",
            "--tw-prose-pre-bg": "var(--surface-raised)",
            "--tw-prose-th-borders": "var(--border)",
            "--tw-prose-td-borders": "var(--border)",
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
