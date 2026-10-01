import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Business Line of Credit Guide 2026: Draw, Repay, Repeat | LoanPay Business",
  description:
    "Business lines of credit in 2026: revolving vs. term loans, secured vs. unsecured, real cost math with examples, and when a line beats factoring or cards.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/business-line-of-credit-guide",
  },
};

export default function LineOfCreditPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          funding &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Business Line of Credit Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          A revolving safety net for uneven cash flow: get approved once, draw only what you need,
          pay interest only on what you use, and reuse the limit as you repay.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Revolving credit, plainly explained</h2>
          <p className="mt-3">
            A line of credit sets a ceiling — say $50,000 — that you tap as needed rather than
            receiving as a lump sum. Draw $12,000 for inventory, repay it over three months, and
            the full $50,000 becomes available again. Interest accrues only on outstanding
            balances, usually at variable rates tied to Prime plus a margin reflecting your risk;
            draw fees, annual maintenance fees, and unused-line fees may apply on top. Secured
            lines pledge receivables, inventory, or equipment for larger limits and lower rates,
            while unsecured lines cost more and cap lower. SBA CAPLines and Working Capital Pilot
            lines apply the same revolving logic inside the SBA guarantee system (see our{" "}
            <Link href="/sba-7a-loans-guide" className="text-amber-200 underline underline-offset-2">
              7(a) guide
            </Link>
            ), with ceilings up to $5 million for qualified borrowers.
          </p>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">Line vs. loan vs. card vs. factoring</h2>
          <p className="mt-3">
            Term loans suit one-time purchases with years to repay; lines suit repeating short
            gaps — payroll before a big client pays, seasonal inventory, emergency repairs. Cards
            (see our{" "}
            <Link href="/business-credit-cards-basics" className="text-amber-200 underline underline-offset-2">
              cards basics
            </Link>
            ) work for sub-30-day floats you clear monthly; a line&apos;s lower rate wins past
            60–90 days. Invoice factoring (see our{" "}
            <Link href="/invoice-factoring-explained" className="text-amber-200 underline underline-offset-2">
              factoring explainer
            </Link>
            ) converts specific invoices to same-week cash at steep effective cost; a line is
            cheaper if you can wait for approval and qualify. Keep all three tools in mind and
            price each draw against the alternatives.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Which funding tool fits which gap.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Tool</th>
                  <th className="px-4 py-3 font-semibold">Best gap</th>
                  <th className="px-4 py-3 font-semibold">Typical cost signal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Line of credit</td>
                  <td className="px-4 py-2">30–180 day swings</td>
                  <td className="px-4 py-2">Prime + margin, pay on use</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Term loan</td>
                  <td className="px-4 py-2">One-time asset buy</td>
                  <td className="px-4 py-2">Fixed schedule, years</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Business card</td>
                  <td className="px-4 py-2">Under 30 days</td>
                  <td className="px-4 py-2">0 if paid monthly; ~25% if not</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Factoring</td>
                  <td className="px-4 py-2">Waiting on invoices</td>
                  <td className="px-4 py-2">2–5% per 30 days (steep APR)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: pricing a $20,000 draw</h2>
          <p className="mt-3">
            A contractor wins a job needing $20,000 of materials 45 days before the client pays.
            Her $50,000 line charges Prime (assume 6.75%) + 4% = 10.75% APR with no draw fee. She
            draws $20,000 for 60 days: interest ≈ $20,000 × 10.75% × 60/365 ≈ $353. The same
            $20,000 on a 24% card carried 60 days costs about $789; factoring a $22,000 invoice at
            a 3% 30-day fee costs $660 for the first month alone and more if the client pays late.
            The line wins by hundreds — provided she actually repays on client payment instead of
            letting the balance linger. She automates the payoff transfer the day the invoice
            clears and logs the interest in her{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              books
            </Link>{" "}
            as financing cost, not cost of goods.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Qualifying and staying in good standing</h2>
          <p className="mt-3">
            Lenders review time in business (often 1–2 years for bank lines; online lenders accept
            less at higher rates), annual revenue, personal credit, and cash-flow coverage. Keep
            covenants in view: some lines require periodic pay-downs to zero, minimum balances, or
            updated financials annually — missing them can freeze the line exactly when you need
            it. Draw with a written purpose and repayment source for every advance, review
            statements monthly, and resize the limit as revenue grows rather than stacking a
            second line at a worse rate.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does an unused line cost anything?</summary>
              <p className="mt-1">Sometimes — check for annual or unused-line fees (often ~0.25–0.5%). Interest itself applies only to drawn balances.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Secured or unsecured?</summary>
              <p className="mt-1">Secured lines offer bigger limits at lower rates but pledge assets. Start unsecured if limits suffice; secure when growth demands it.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can startups get lines?</summary>
              <p className="mt-1">Bank lines usually want history; newer firms often start with secured cards, microloans, or online lines at higher cost while building statements.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Will draws hurt my credit score?</summary>
              <p className="mt-1">High utilization on the line can weigh on scores; repay promptly and keep draws well under the ceiling. See our credit score guide.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Rates and fees vary by lender;
            compare current offers. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Business Line of Credit Guide 2026: Draw, Repay, Repeat | LoanPay Business", description: "Business lines of credit in 2026: revolving vs. term loans, secured vs. unsecured, real cost math with examples, and when a line beats factoring or cards.", url: "https://business.loanpaylogic.com/business-line-of-credit-guide" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Does an unused line cost anything?","answer":"Sometimes — check for annual or unused-line fees (often ~0.25–0.5%). Interest itself applies only to drawn balances."}, {"question":"Secured or unsecured?","answer":"Secured lines offer bigger limits at lower rates but pledge assets. Start unsecured if limits suffice; secure when growth demands it."}, {"question":"Can startups get lines?","answer":"Bank lines usually want history; newer firms often start with secured cards, microloans, or online lines at higher cost while building statements."}, {"question":"Will draws hurt my credit score?","answer":"High utilization on the line can weigh on scores; repay promptly and keep draws well under the ceiling. See our credit score guide."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "Business Line of Credit Guide 2026: Draw, Repay, Repeat | LoanPay Business", url: "https://business.loanpaylogic.com/business-line-of-credit-guide" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
