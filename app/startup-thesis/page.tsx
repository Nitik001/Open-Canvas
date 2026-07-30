import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgriVault: A Startup Thesis | Open Canvas",
  description: "A platform business model to fractionalize cold storage for smallholder farmers in India.",
};

export default function StartupThesisPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 max-w-5xl mx-auto page-enter">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
          AgriVault: <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#a78bfa]">A Startup Thesis</span>
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          Fractionalizing cold storage to eliminate distress sales and build the financial rails for India's smallholder farmers.
        </p>
      </div>

      <div className="space-y-8">
        {/* Section 1 */}
        <section className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--accent-glow)] rounded-full mix-blend-screen filter blur-3xl opacity-50 pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent text-sm border border-accent/20">01</span>
            The Core Thesis
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
            <p>
              India’s agricultural sector loses over $15 billion annually to post-harvest crop rot, driven not by a total absence of cold storage, but by severe structural fragmentation. India does not have a cold storage shortage. It has a cold storage fragmentation problem.
            </p>
            <p>
              The country holds over 8,200 cold storage facilities with roughly 38 million metric tonnes of capacity. However, these facilities operate as rigid pipelines built for bulk commodity aggregators (like single-crop potato warehouses) while operating at mismatched regional capacity or high off-season vacancies. These facilities sit at fixed locations, price by the season, and have no interest in a smallholder farmer.
            </p>
            <p>
              Meanwhile, smallholder farmers are forced into distress sales because they cannot rent micro-space for perishable harvests. That mismatch is what actually causes the problem, because none of it is accessible to the people who need it in small, immediate, farm gate quantities. That forced, panicked transaction is the single event this thesis is built to eliminate.
            </p>
            <p className="font-medium text-text-primary text-xl mt-6">
              Our answer isn't to build more warehouses. It's to make the warehouses that already exist usable by the people currently locked out of them — and to turn what gets stored into something a bank will lend against, the same day it's dropped off.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#a78bfa] rounded-full mix-blend-screen filter blur-3xl opacity-10 pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent text-sm border border-accent/20">02</span>
            The Solution
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              AgriVault will be a software platform that fractionalizes existing, underutilized cold storage capacity. It is a pure asset-light software platform. We don't own a warehouse, a truck, or a refrigeration unit anywhere in our model. What we own is the layer that makes idle pallet space bookable in small units, and the layer that turns a stored crate into a financial instrument.
            </p>
            <p>
              <strong>Here's how it works end to end:</strong> A warehouse operator with off-season vacancy lists that space on AgriVault. A farmer or FPO books a few crates of produce into that space for as long as they need—days, not months—through a simple app. The moment that produce is logged into an accredited facility, our platform generates an Electronic Negotiable Warehouse Receipt (e-NWR) through India's existing WDRA repository infrastructure.
            </p>
            <p>
              That receipt is a real, bankable document, unlocking the second half of the model: instead of selling in distress, the farmer can pledge that receipt to a partner bank and draw working capital against it immediately, while the crop sits safely preserved. Meanwhile, the same digitised, quality-graded inventory becomes visible to institutional buyers (supermarkets, exporters, processors) who can bid on verified stock in real time instead of buying blind through middlemen.
            </p>
            <div className="p-6 bg-surface-raised rounded-2xl border border-border mt-6">
              <p className="text-text-primary font-medium text-lg leading-relaxed">
                In a nutshell, AgriVault is a <span className="text-accent">Platform Business</span>: it creates an open, two-sided market connecting unutilized supply (warehouse owners) with fragmented demand (farmers/FPOs), monetising the data and trade clearing layer without taking on real estate or commodity inventory risk.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[var(--accent-glow)] rounded-full mix-blend-screen filter blur-3xl opacity-30 pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent text-sm border border-accent/20">03</span>
            The Regulatory Tailwind
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              This isn't a thesis that depends on a future policy change. The infrastructure it needs already exists, and it's underused. The government's Credit Guarantee Scheme for e-NWR Pledge Financing gives banks a credit guarantee on loans made against stored, pledged crops, with interest subvention bringing rates down to roughly 7% per annum. The guarantee corpus is explicitly sized to grow post-harvest lending into the lakhs of crores over the coming decade.
            </p>
            <p>
              Layered on top of that is India's Digital Public Infrastructure: Aadhaar-linked identity, land records, and the Agri-Stack, which is what lets an e-NWR get issued and verified in minutes instead of weeks. Of roughly 330 million tonnes of annual food production, under 1.5 million tonnes currently move through e-NWR financing. The rails exist. The onboarding software doesn't.
            </p>
            <div className="mt-8 border-l-4 border-accent pl-6 py-2 bg-surface-raised/30 rounded-r-xl">
              <strong className="text-text-primary block mb-2 text-lg">The One Assumption We're Not Taking for Granted</strong>
              <p className="italic text-text-secondary">
                The e-NWR and WDRA system was built and scaled around bulk, shelf-stable commodities (grains, pulses, oilseeds). Whether a WDRA-accredited cold storage facility can issue an e-NWR against a perishable crop with the same ease and bank acceptance as a sack of wheat is genuinely unproven at scale. That's why the first phase is a tight pilot to prove that perishables → e-NWR → bank loan actually clears in practice.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 & 5 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 4 */}
          <section className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col">
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent text-sm border border-accent/20">04</span>
              Business Model
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed flex-grow">
              <p>
                The revenue model is layered and deliberately thin-margin but scalable:
              </p>
              <ul className="list-none space-y-4 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span><strong className="text-text-primary font-medium">Storage Take Rate (10–15%):</strong> On every fractional booking facilitated through a partner warehouse.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span><strong className="text-text-primary font-medium">Origination Fee (1–1.5%):</strong> From partner banks for sourcing pre-verified, government-guaranteed borrowers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span><strong className="text-text-primary font-medium">Trade-Clearing Fee (1–2%):</strong> From institutional buyers transacting on verified inventory.</span>
                </li>
              </ul>
            </div>
            <p className="mt-6 pt-6 border-t border-border/50 text-sm">
              Once we build the customer base, we can use our platform to upsell raw materials like agricultural inputs.
            </p>
          </section>

          {/* Section 5 */}
          <section className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col">
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent text-sm border border-accent/20">05</span>
              The Flywheel
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed flex-grow">
              <p>
                The mechanism that makes this compound rather than plateau is a simple positive feedback loop:
              </p>
              <div className="bg-surface-raised/50 p-5 rounded-2xl border border-border/50 text-sm font-medium leading-relaxed my-6">
                More warehouses listing space <br />
                <span className="text-accent block my-1">↓</span>
                Lowers storage costs & widens coverage <br />
                <span className="text-accent block my-1">↓</span>
                Draws in more farmers & verified inventory <br />
                <span className="text-accent block my-1">↓</span>
                Attracts more banks & institutional buyers <br />
                <span className="text-accent block my-1">↓</span>
                Pushes farmer prices up by 15–25%
              </div>
              <p>
                Higher realised prices are the only marketing that matters. That word of mouth pulls in the next round of warehouses, restarting the loop one notch larger.
              </p>
            </div>
          </section>
        </div>

        {/* Section 6 */}
        <section className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent text-sm border border-accent/20">06</span>
            Risks, Honestly Stated
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-text-secondary leading-relaxed">
            <div className="space-y-2">
              <strong className="text-text-primary block text-lg">Warehouseman Risk</strong>
              <p className="text-sm">The possibility that a partner facility mishandles produce or fraud creeps into the receipt process. The CGS-NPF covers default risk, and we add IoT-based smart locks and temperature sensors so inventory integrity is monitored in real-time.</p>
            </div>
            <div className="space-y-2">
              <strong className="text-text-primary block text-lg">Platform Bypass</strong>
              <p className="text-sm">The risk that a warehouse and farmer transact directly next time. Our answer: the value isn't the introduction, it's the infrastructure. A warehouse cannot issue a bankable e-NWR without our repository integration. The liquidity is locked inside the software.</p>
            </div>
            <div className="space-y-2">
              <strong className="text-text-primary block text-lg">Cold Start Problem</strong>
              <p className="text-sm">A platform is worthless with only supply or only demand. We address this by seeding through Farmer Producer Organisations (FPOs). Signing one FPO executive brings hundreds of farmers onto the platform in a single relationship.</p>
            </div>
          </div>
        </section>

        {/* Section 7 & 8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden">
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent text-sm border border-accent/20">07</span>
              Social Impact Case
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Every metric in this model doubles as an impact metric. This venture is fundable as both a commercial platform and a social impact vehicle.
              </p>
              <ul className="list-none space-y-4 mt-4">
                <li><strong className="text-text-primary block">Income Gain</strong> Farmers avoiding distress sales earn 15–25% more.</li>
                <li><strong className="text-text-primary block">Financial Inclusion</strong> Working capital at 7% displaces informal moneylenders.</li>
                <li><strong className="text-text-primary block">Climate Resilience</strong> Less post-harvest rot means fewer wasted calories, water, and fertiliser.</li>
              </ul>
            </div>
          </section>

          <section className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#a78bfa] rounded-full mix-blend-screen filter blur-3xl opacity-20 pointer-events-none"></div>
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent text-sm border border-accent/20">08</span>
              Where We Start
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                We're not focusing on opening this as a full national platform on day one. The plan is focused:
              </p>
              <p className="font-medium text-text-primary text-lg p-4 bg-surface-raised/50 rounded-xl border border-border/50">
                One or two accredited cold storage partners, one geographic cluster, real farmers moving real perishable produce through the e-NWR pipeline.
              </p>
              <p>
                Once that's proven with real data rather than a projection, the case for scaling the network—more warehouses, more banks, more buyers—becomes a story about replication, not speculation.
              </p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
