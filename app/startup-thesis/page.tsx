import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Thesis",
  description: "My core philosophy and investment thesis for early-stage technology startups.",
};

export default function StartupThesisPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 max-w-4xl mx-auto page-enter">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
          Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#a78bfa]">Thesis</span>
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          The core frameworks and mental models I use to evaluate early-stage technology companies, founders, and markets.
        </p>
      </div>

      <div className="space-y-12">
        {/* Section 1 */}
        <section className="glass-card p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-glow)] rounded-full mix-blend-screen filter blur-3xl opacity-50 pointer-events-none"></div>
          <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm">01</span>
            Founder Market Fit
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            The most critical variable in early-stage investing is the founder's intrinsic connection to the problem they are solving. I look for founders who have a deep, earned secret about their market—an insight that is non-obvious to outsiders but glaringly true to those who have spent years in the trenches.
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-2">
            <li>Obsession over the problem, not just the solution.</li>
            <li>Unique insight derived from personal pain or domain expertise.</li>
            <li>Unreasonable resilience and adaptability.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="glass-card p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#a78bfa] rounded-full mix-blend-screen filter blur-3xl opacity-10 pointer-events-none"></div>
          <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm">02</span>
            Defensibility & Moats
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            In a world of zero-marginal-cost software and AI-accelerated development, pure software is rarely a moat. Long-term value accrues to companies that build systemic advantages over time.
          </p>
          <ul className="list-disc list-inside text-text-muted space-y-2">
            <li>Network effects that strengthen with each new user.</li>
            <li>Deep tech, proprietary algorithms, or complex integrations.</li>
            <li>Brand and community as a wedge.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="glass-card p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent-glow)] rounded-full mix-blend-screen filter blur-3xl opacity-30 pointer-events-none"></div>
          <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm">03</span>
            Market Timing (The "Why Now?")
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Many great ideas fail simply because they were too early or too late. There must be a clear catalyst—a technological breakthrough, a regulatory shift, or a change in consumer behavior—that makes the solution uniquely viable today. The intersection of emerging tech capabilities and urgent market pull is where breakout companies are born.
          </p>
        </section>
      </div>
    </div>
  );
}
