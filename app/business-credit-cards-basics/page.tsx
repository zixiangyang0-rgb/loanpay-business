import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Credit Cards Basics 2026: Rewards Without Debt | LoanPay Business",
  description:
    "Business credit cards in 2026: how issuer rules differ from personal cards, picking rewards vs. 0% APR, utilization habits, and building business credit safely.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/business-credit-cards-basics",
  },
};

export default function BizCardsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          funding &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Business Credit Cards Basics
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The right card separates spending, earns rewards on purchases you already make, and
          builds a credit file — the wrong one funds operating losses at 25%+ APR.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">How business cards differ</h2>
          <p className="mt-3">
            Business cards typically offer higher limits, category rewards tuned to ads, travel,
            and office supply spend, and employee cards with per-user limits. Two cautions matter
            more than rewards. First, most issuers still require a personal guarantee, so missed
            payments hit your personal credit too. Second, business cards carry fewer federal
            consumer protections than personal cards — issuers can change terms faster and
            dispute processes vary. Treat the card as a 30-day payment tool paid in full, not as
            working capital. If you need months to repay, a{" "}
            <Link href="/business-line-of-credit-guide" className="text-amber-200 underline underline-offset-2">
              business line of credit
            </Link>{" "}
            or term loan usually costs less than revolving a card balance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Picking: rewards vs. 0% intro vs. low fee</h2>
          <p className="mt-3">
            Match the card to your dominant spend. Heavy advertisers and travelers often beat a
            flat 2% card with 3–5× category bonuses; everyone else usually wins with simple
            flat-rate cash back and no annual fee. A 0% introductory APR for 9–15 months can fund a
            known equipment purchase if — and only if — you schedule payoff before the revert rate
            (often 20–30%) snaps back. Annual-fee cards must earn roughly 3–5× their fee in extra
            rewards over the free alternative to justify themselves; do that division before
            applying. New businesses with thin files should consider secured business cards that
            graduate with on-time history rather than stacking applications.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Card archetypes and who each suits.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Strength</th>
                  <th className="px-4 py-3 font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Flat cash back, no fee</td>
                  <td className="px-4 py-2">~1.5–2% everywhere</td>
                  <td className="px-4 py-2">First card, mixed spend</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Category rewards + fee</td>
                  <td className="px-4 py-2">3–5× on ads/travel</td>
                  <td className="px-4 py-2">Concentrated spend</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">0% intro APR</td>
                  <td className="px-4 py-2">9–15 months interest-free</td>
                  <td className="px-4 py-2">Planned purchase, fixed payoff</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Secured</td>
                  <td className="px-4 py-2">Builds file with deposit</td>
                  <td className="px-4 py-2">New or rebuilding credit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $4,000-a-month agency</h2>
          <p className="mt-3">
            A marketing agency spends $4,000 monthly: $2,000 on ads, $1,000 on software, $1,000 on
            travel. Card X pays 3× on ads ($6,000 points-equivalent monthly on that slice), 2% on
            software, 2× on travel. Rough monthly value: about $60 from ads (at 1¢ per point) +
            $20 software + $20 travel = $100, or $1,200 per year. Its $150 fee nets $1,050. Card Y
            is free flat 2%: $80 per month, $960 per year, no fee. Card X wins by $90 — but only
            because ad spend dominates. If the agency pauses ads for a quarter, Card Y wins. The
            agency puts recurring software on the card, pays in full every statement, keeps
            utilization under 30% of the limit, and never uses the card to cover payroll gaps —
            that job belongs to cash reserves tracked in its{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              bookkeeping system
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Habits that build credit instead of debt</h2>
          <p className="mt-3">
            Pay in full and on time — payment history dominates both personal and business files
            (see our{" "}
            <Link href="/business-credit-score-guide" className="text-amber-200 underline underline-offset-2">
              business credit score guide
            </Link>
            ). Keep utilization low by requesting limit increases as revenue grows rather than
            opening parallel cards. Give employees capped cards instead of reimbursing personal
            spend, reconcile card statements weekly, and redeem rewards against business costs
            rather than lifestyle upgrades. If a balance survives two statements, freeze new
            charges and switch to a payoff plan: the rewards math never beats 25% APR.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I get a business card as a sole proprietor?</h3>
              <p className="mt-1">Yes. Apply with your SSN and business revenue; an EIN helps but is not always required.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Will applying hurt my credit?</h3>
              <p className="mt-1">Expect a hard inquiry on your personal report because of the personal guarantee. Batch applications, don&apos;t spray them.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Should I carry a balance to build credit?</h3>
              <p className="mt-1">No. On-time payment history builds credit; carried balances only add interest. Pay in full.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are rewards taxable?</h3>
              <p className="mt-1">Cash-back rebates on spending are generally treated as discounts, not income, but large sign-up structures vary — confirm with your accountant.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Card terms change; compare current
            disclosures. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
