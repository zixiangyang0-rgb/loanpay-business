import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Startup Costs Checklist 2026: Budget Before You Launch | LoanPay Business",
  description:
    "Budget your 2026 launch: one-time vs. monthly startup costs, hidden fees founders miss, a $25K worked budget, and the 6-month runway rule.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/startup-costs-checklist",
  },
};

const ONETIME = [
  "State filing fee (varies by state — check your secretary of state) plus any publication or initial-report cost.",
  "Licenses and permits: city, county, and industry-specific credentials.",
  "Brand basics: domain, logo, simple website, and signage.",
  "Equipment, furniture, and initial inventory or supplies.",
  "Deposits: lease security, utilities, insurance down payment.",
  "Professional help: attorney review, accountant setup, payroll configuration.",
];

const MONTHLY = [
  "Rent, utilities, internet, and phone.",
  "Payroll or contractor payments plus payroll taxes and workers' comp.",
  "Software: accounting, point of sale, scheduling, and backups.",
  "Insurance premiums, loan or lease payments.",
  "Marketing: ads, listings, and content production.",
  "Tax reserve transfer (target 25–30% of profit) before owner draws.",
];

export default function StartupCostsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          funding &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Startup Costs Checklist
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Most launches fail on cash timing, not ideas. List every one-time and recurring cost,
          add a buffer, and prove the runway before you sign a lease.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">One-time costs</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {ONETIME.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Monthly costs</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {MONTHLY.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">The hidden costs founders miss</h2>
          <p className="mt-3">
            Payment-processing fees (2–3% of card revenue), chargebacks, returns, spoilage,
            merchant-account holds, and quarterly tax deposits routinely ambush first budgets.
            Hiring carries loaded costs far above wages — employer payroll taxes, unemployment
            insurance, workers&apos; comp, and benefits add roughly 10–25% on top (see our{" "}
            <Link href="/payroll-taxes-employer-guide" className="text-amber-200 underline underline-offset-2">
              payroll taxes guide
            </Link>
            ). Equipment needs installation, calibration, and maintenance contracts; software
            needs per-seat pricing at headcount, not today&apos;s seats. Add a 15–20%
            contingency line and re-forecast monthly in your{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              bookkeeping system
            </Link>
            .
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Where startup budgets most often break.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Blind spot</th>
                  <th className="px-4 py-3 font-semibold">Typical size</th>
                  <th className="px-4 py-3 font-semibold">Fix</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Processing + chargebacks</td>
                  <td className="px-4 py-2">2–4% of card sales</td>
                  <td className="px-4 py-2">Budget net of fees</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Loaded hiring cost</td>
                  <td className="px-4 py-2">+10–25% over wages</td>
                  <td className="px-4 py-2">Price roles fully loaded</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Tax reserve</td>
                  <td className="px-4 py-2">25–30% of profit</td>
                  <td className="px-4 py-2">Auto-transfer weekly</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Slow receivables</td>
                  <td className="px-4 py-2">30–60 day lag</td>
                  <td className="px-4 py-2">Require deposits upfront</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: a $25,000 service launch</h2>
          <p className="mt-3">
            A bookkeeping practice launches with $25,000 saved. One-time costs: $200 state filing,
            $150 licenses, $2,000 laptop and software setup, $1,500 website and brand, $1,000
            insurance down payment — $4,850 total. Monthly burn before revenue: $300 software,
            $200 insurance, $150 phone and internet, $400 marketing — $1,050 per month. Six months
            of burn ($6,300) plus one-time costs ($4,850) plus a 20% buffer ($2,230) totals about
            $13,380, leaving $11,620 of the $25,000 as operating cushion for uneven early sales.
            The founder takes clients before any office lease, funds growth from the{" "}
            <Link href="/sba-microloans-guide" className="text-amber-200 underline underline-offset-2">
              microloan playbook
            </Link>{" "}
            only if pipeline justifies it, and reviews runway monthly — not annually.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How much runway do I need?</summary>
              <p className="mt-1">Target at least 6 months of core expenses in reachable cash before signing fixed commitments like leases or hires.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should I borrow the full budget upfront?</summary>
              <p className="mt-1">No. Secure access (a line or approval), then draw in stages as milestones — revenue, hires, inventory turns — actually arrive.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What can I deduct in year one?</summary>
              <p className="mt-1">Up to $5,000 of startup costs is often deductible with the rest amortized, within limits — confirm current rules with your accountant.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Lease or home office first?</summary>
              <p className="mt-1">Stay lean until revenue covers the space twice over. For home-office math, see the tax site&apos;s home-office deduction guide.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Costs vary widely by state and
            industry. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Startup Costs Checklist 2026: Budget Before You Launch | LoanPay Business", description: "Budget your 2026 launch: one-time vs. monthly startup costs, hidden fees founders miss, a $25K worked budget, and the 6-month runway rule.", url: "https://business.loanpaylogic.com/startup-costs-checklist" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"How much runway do I need?","answer":"Target at least 6 months of core expenses in reachable cash before signing fixed commitments like leases or hires."}, {"question":"Should I borrow the full budget upfront?","answer":"No. Secure access (a line or approval), then draw in stages as milestones — revenue, hires, inventory turns — actually arrive."}, {"question":"What can I deduct in year one?","answer":"Up to $5,000 of startup costs is often deductible with the rest amortized, within limits — confirm current rules with your accountant."}, {"question":"Lease or home office first?","answer":"Stay lean until revenue covers the space twice over. For home-office math, see the tax site’s home-office deduction guide."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "Startup Costs Checklist 2026: Budget Before You Launch | LoanPay Business", url: "https://business.loanpaylogic.com/startup-costs-checklist" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
