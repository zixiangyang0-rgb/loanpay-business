import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "How to Start an LLC in 2026: Step-by-Step Guide | LoanPay Business",
  description:
    "Start an LLC in 2026 the right way: name search, articles, registered agent, EIN, operating agreement, bank account, and licenses — with costs and timelines.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/how-to-start-llc-guide",
  },
};

const STEPS = [
  "Pick your state and check name availability on the secretary of state business search; keep a backup name ready.",
  "Appoint a registered agent with a physical address in the formation state who can receive legal mail on business days.",
  "File articles of organization (sometimes called a certificate of formation) and pay the state filing fee — it varies by state, so check your secretary of state for the current amount.",
  "Get a free EIN from the IRS online (see our EIN guide) — never pay a third-party site for one.",
  "Draft an operating agreement covering ownership, voting, contributions, distributions, and what happens if someone leaves.",
  "Open a business bank account with your filed articles, EIN letter, and ID; deposit initial capital and keep receipts.",
  "Register for state tax accounts, business licenses, and local permits before your first sale or hire.",
];

export default function StartLlcPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          formation &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          How to Start an LLC: A 2026 Step-by-Step Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          A limited liability company separates your personal assets from business debts without
          the paperwork of a corporation. This guide walks the full sequence — state filing,
          agent, EIN, agreement, bank account, and licenses — with realistic costs and timelines.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The 7-step checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">Why founders pick the LLC</h2>
          <p className="mt-3">
            An LLC creates a legal shield: if the business is sued or cannot pay a vendor, creditors
            generally pursue company assets, not your house or personal savings — provided you keep
            finances separate and follow formalities. Taxation stays flexible. A single-member LLC
            is disregarded by default, so profit flows to Schedule C of your personal return; a
            multi-member LLC defaults to partnership taxation on Form 1065. Later, either can elect
            S corporation treatment with Form 2553 if payroll-tax savings justify the complexity
            (see our{" "}
            <Link href="/llc-vs-s-corp-taxes" className="text-amber-200 underline underline-offset-2">
              LLC vs. S corp taxes guide
            </Link>
            ). Corporations offer a similar shield but demand bylaws, shareholder meetings, and
            minutes; sole proprietorships need nothing but leave you fully exposed. For most
            first-time founders selling services, products, or content, the LLC hits the sweet
            spot between protection and simplicity.
          </p>
          <p className="mt-3">
            Formation happens at the state level, so fees and processing vary by state — check
            your secretary of state for current amounts and turnaround. Some states confirm online
            filings in days; paper filings can take weeks. A few states also require an initial
            report, newspaper publication, or annual franchise payment. Budget for the filing fee
            plus a registered-agent service (often $100–$300 per year if you hire one) and any
            local business license.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Costs and timelines at a glance</h2>
          <p className="mt-3">
            Total first-year cost for a lean single-state LLC usually lands between $150 and $800,
            depending on your state. The biggest variable is the state filing fee itself, which
            ranges widely — that is why every serious estimate starts with the secretary of
            state fee schedule, not a blog average.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Typical LLC formation budget items for a single-state service business.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Item</th>
                  <th className="px-4 py-3 font-semibold">Typical range</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">State filing fee</td>
                  <td className="px-4 py-2">Varies by state</td>
                  <td className="px-4 py-2">Check your secretary of state; some states add reports</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Registered agent service</td>
                  <td className="px-4 py-2">$0–$300/yr</td>
                  <td className="px-4 py-2">Free if you serve yourself and qualify</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">EIN from the IRS</td>
                  <td className="px-4 py-2">$0</td>
                  <td className="px-4 py-2">Free online; beware paid scam sites</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Operating agreement template review</td>
                  <td className="px-4 py-2">$0–$500</td>
                  <td className="px-4 py-2">Multi-member LLCs should get attorney review</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Licenses and permits</td>
                  <td className="px-4 py-2">$50–$400</td>
                  <td className="px-4 py-2">City, county, and industry-specific</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: Maya&apos;s design studio</h2>
          <p className="mt-3">
            Maya freelances as a brand designer and lands a $60,000 annual contract that requires
            her to carry insurance and invoice as a company. She forms a single-member LLC in her
            home state: $130 filing fee online, approved in 5 business days. She acts as her own
            registered agent at her home office (allowed in her state), gets an EIN free from the
            IRS the same evening, signs a simple operating agreement, and opens a business checking
            account with a $100 opening deposit. Her city requires a $75 home-business license. All
            in: $305 and about two weeks of calendar time, most of it waiting on the state. She
            moves the contract into the LLC, routes 30% of each payment to a tax savings account,
            and tracks profit on Schedule C. For deeper self-employment tax math, she checks the{" "}
            <a
              href="https://tax.loanpaylogic.com/self-employment-tax-calculator"
              className="text-amber-200 underline underline-offset-2"
            >
              self-employment tax calculator
            </a>{" "}
            on our sister tax site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Mistakes that dissolve the shield</h2>
          <p className="mt-3">
            The LLC protects you only if you treat it as separate. Commingling funds — paying rent
            from the business card, depositing client checks personally — lets a court argue the
            company is your alter ego. Sign contracts as the LLC, keep minutes of major decisions,
            file annual reports on time, and maintain enough capital and insurance for your risk
            level. Single-member LLCs should be extra careful: get the EIN, open the account, and
            run every dollar through the books from day one. Review our{" "}
            <Link href="/operating-agreement-basics" className="text-amber-200 underline underline-offset-2">
              operating agreement basics
            </Link>{" "}
            and{" "}
            <Link href="/registered-agent-guide" className="text-amber-200 underline underline-offset-2">
              registered agent guide
            </Link>{" "}
            before you file.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should I form in Delaware or Nevada instead of my home state?</summary>
              <p className="mt-1">Usually no. A foreign LLC must still register where you operate, so you pay two states. Out-of-state formation helps only in narrow cases — ask an attorney.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How long does formation take?</summary>
              <p className="mt-1">Online filings often confirm within days; mailed filings can take several weeks. Check your secretary of state for current processing times.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I need a lawyer to form an LLC?</summary>
              <p className="mt-1">Most single-member LLCs file fine without one, but multi-member LLCs benefit from attorney review of the operating agreement.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does an LLC save taxes by itself?</summary>
              <p className="mt-1">No. Tax treatment follows elections, not the LLC label. Savings come from S-corp elections or deductions, not formation alone.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Fees and processing vary by state —
            confirm with your secretary of state. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "How to Start an LLC in 2026: Step-by-Step Guide | LoanPay Business", description: "Start an LLC in 2026 the right way: name search, articles, registered agent, EIN, operating agreement, bank account, and licenses — with costs and timelines.", url: "https://business.loanpaylogic.com/how-to-start-llc-guide" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Should I form in Delaware or Nevada instead of my home state?","answer":"Usually no. A foreign LLC must still register where you operate, so you pay two states. Out-of-state formation helps only in narrow cases — ask an attorney."}, {"question":"How long does formation take?","answer":"Online filings often confirm within days; mailed filings can take several weeks. Check your secretary of state for current processing times."}, {"question":"Do I need a lawyer to form an LLC?","answer":"Most single-member LLCs file fine without one, but multi-member LLCs benefit from attorney review of the operating agreement."}, {"question":"Does an LLC save taxes by itself?","answer":"No. Tax treatment follows elections, not the LLC label. Savings come from S-corp elections or deductions, not formation alone."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "How to Start an LLC in 2026: Step-by-Step Guide | LoanPay Business", url: "https://business.loanpaylogic.com/how-to-start-llc-guide" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
