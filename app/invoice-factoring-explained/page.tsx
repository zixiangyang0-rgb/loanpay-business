import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Invoice Factoring Explained 2026: Costs, Types & Math | LoanPay Business",
  description:
    "Invoice factoring in 2026: advances, discount fees, recourse vs. non-recourse, effective APR math, and when factoring beats a line of credit.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/invoice-factoring-explained",
  },
};

export default function FactoringPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          funding &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Invoice Factoring Explained
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Sell tomorrow&apos;s receivables for cash today. Fast, flexible, and far pricier than
          it looks — here is the math that keeps founders honest.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">How factoring works</h2>
          <p className="mt-3">
            You sell an unpaid B2B invoice to a factor at a discount. The factor advances most of
            the face value immediately — commonly 80–90% — then pays the remainder (the reserve)
            minus its fee when your customer pays. Fees are usually quoted per 30 days (for
            example 2–5% for the first month), which sounds small until annualized. In recourse
            factoring, you buy back invoices your customer never pays; in non-recourse factoring,
            the factor absorbs defined credit risk (often excluding disputes) for a higher fee.
            Spot factoring sells single invoices; whole-ledger agreements commit ongoing volume at
            better pricing but with monthly minimums. Customers are typically notified and pay the
            factor directly — consider how that reads to your best accounts.
          </p>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">The true cost, annualized honestly</h2>
          <p className="mt-3">
            A 3% fee for 30 days is not 3% APR — rolled monthly it exceeds 40% annualized before
            extras. Add wire fees, lockbox charges, monthly minimums, and same-day funding
            premiums, and small invoices suffer most. Factoring still wins when the alternative is
            missing payroll, losing a supplier discount worth more than the fee, or turning down a
            profitable rush job. It loses structurally as a permanent habit: chronic factoring
            signals margins or collections need fixing, not financing.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Cost signals across invoice-funding choices.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Option</th>
                  <th className="px-4 py-3 font-semibold">Typical cost</th>
                  <th className="px-4 py-3 font-semibold">Effective APR feel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Bank line of credit</td>
                  <td className="px-4 py-2">Prime + 2–6%</td>
                  <td className="px-4 py-2">~9–13%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Recourse factoring</td>
                  <td className="px-4 py-2">2–4% per 30 days</td>
                  <td className="px-4 py-2">~25–50%+</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Non-recourse factoring</td>
                  <td className="px-4 py-2">3–6% per 30 days</td>
                  <td className="px-4 py-2">~40–70%+</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Early-pay discount to customer</td>
                  <td className="px-4 py-2">2/10 net 30 offered</td>
                  <td className="px-4 py-2">~36% implied — compare!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $30,000 invoice</h2>
          <p className="mt-3">
            A staffing firm holds a $30,000 invoice due in 45 days and needs payroll Friday. A
            recourse factor advances 85% ($25,500) day one and charges 3% for the first 30 days
            plus 1.5% for the extra 15 days — $900 + $450 = $1,350 — plus a $75 wire fee, keeping
            $1,425 total and remitting the $3,075 reserve balance on customer payment. Effective
            cost for 45 days: $1,425 on $25,500 advanced ≈ 5.6% per 45 days, annualizing past 45%.
            Compare: offering the customer 2/10 net 30 (a $600 discount for paying 20 days early)
            costs less than half, and a{" "}
            <Link href="/business-line-of-credit-guide" className="text-amber-200 underline underline-offset-2">
              line-of-credit
            </Link>{" "}
            draw at ~11% APR for 45 days costs about $345. Factoring wins only if neither option
            exists and payroll cannot wait — price it as emergency spending, not strategy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Contract terms to read twice</h2>
          <p className="mt-3">
            Watch concentration limits (no single customer over a set share), personal guarantees,
            UCC blanket liens that block other borrowing, auto-renewal and termination fees, and
            dispute chargebacks that convert non-recourse protection into your problem. Verify how
            the factor handles slow-paying but solvent customers versus true defaults, and confirm
            who chases payment and how aggressively. Keep clean aging reports from your{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              bookkeeping system
            </Link>{" "}
            — factors price sloppy receivables worse, and strong in-house collections often remove
            the need to factor at all.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Factoring vs. invoice financing?</summary>
              <p className="mt-1">Factoring sells the invoice (customer pays the factor); invoice financing borrows against it (you keep collecting). Financing is usually cheaper but harder to get.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Will customers know?</summary>
              <p className="mt-1">Usually yes — they are directed to pay the factor. Some funders offer confidential facilities at higher cost.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What if my customer never pays?</summary>
              <p className="mt-1">Under recourse deals you repurchase the invoice; under non-recourse the factor absorbs covered credit losses only — read the exclusions.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can startups factor?</summary>
              <p className="mt-1">Yes — factors underwrite your customers&apos; credit more than yours, which is why young B2B firms use them. Consumer receivables rarely qualify.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Factor contracts vary widely — have
            an attorney review recourse and lien terms. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Invoice Factoring Explained 2026: Costs, Types & Math | LoanPay Business", description: "Invoice factoring in 2026: advances, discount fees, recourse vs. non-recourse, effective APR math, and when factoring beats a line of credit.", url: "https://business.loanpaylogic.com/invoice-factoring-explained" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Factoring vs. invoice financing?","answer":"Factoring sells the invoice (customer pays the factor); invoice financing borrows against it (you keep collecting). Financing is usually cheaper but harder to get."}, {"question":"Will customers know?","answer":"Usually yes — they are directed to pay the factor. Some funders offer confidential facilities at higher cost."}, {"question":"What if my customer never pays?","answer":"Under recourse deals you repurchase the invoice; under non-recourse the factor absorbs covered credit losses only — read the exclusions."}, {"question":"Can startups factor?","answer":"Yes — factors underwrite your customers’ credit more than yours, which is why young B2B firms use them. Consumer receivables rarely qualify."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "Invoice Factoring Explained 2026: Costs, Types & Math | LoanPay Business", url: "https://business.loanpaylogic.com/invoice-factoring-explained" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
