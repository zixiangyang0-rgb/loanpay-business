import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Operating Agreement Basics 2026: Clauses Every LLC Needs | LoanPay Business",
  description:
    "Draft an LLC operating agreement in 2026: ownership, voting, contributions, distributions, buyouts, and dissolution — with a two-founder worked example.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/operating-agreement-basics",
  },
};

export default function OperatingAgreementPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          formation &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Operating Agreement Basics
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The private contract that says who owns what, who decides, and who gets paid. Even
          single-member LLCs need one — banks and courts ask for it.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Why it matters even when you agree today</h2>
          <p className="mt-3">
            The operating agreement is the LLC&apos;s internal constitution. States that do not
            require one still enforce default rules that may not match your deal — equal profit
            splits regardless of effort, awkward buyout mechanics, dissolution on a member&apos;s
            exit. A written agreement overrides defaults with your terms, proves separateness to
            courts and lenders reviewing the file from our{" "}
            <Link href="/how-to-start-llc-guide" className="text-amber-200 underline underline-offset-2">
              LLC guide
            </Link>
            , and forces the conversations (death, divorce, deadlock, departure) that destroy
            handshake partnerships. Single-member LLCs use a short form reciting ownership,
            authority, and limited-liability formalities; multi-member LLCs need the full
            treatment below, ideally with attorney review.
          </p>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">The seven clauses every agreement needs</h2>
          <p className="mt-3">
            Ownership and capital: who owns what percentage, what each contributed (cash,
            equipment, sweat equity with vesting), and what happens on missed contributions.
            Voting and management: member-managed (all owners decide) versus manager-managed
            (designated operators run daily affairs), quorum rules, and which decisions need
            supermajority — selling the company, borrowing above a threshold, admitting members.
            Distributions and allocations: when profits pay out versus stay retained, tax
            distributions covering members&apos; pass-through liability, and loss allocation.
            Transfer restrictions: rights of first refusal, permitted transfers to family trusts,
            and valuation formulas for buyouts. Departure and dissolution: voluntary withdrawal,
            expulsion for cause, buy-sell triggers on death or disability, and wind-down
            mechanics. Roles and pay: officer titles, salaries versus draws, and non-compete or
            confidentiality terms within state limits. Amendments and records: how the agreement
            itself changes and where minutes and consents live.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Clause checklist for multi-member LLCs.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Clause</th>
                  <th className="px-4 py-3 font-semibold">Decides</th>
                  <th className="px-4 py-3 font-semibold">If omitted</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Ownership &amp; capital</td>
                  <td className="px-4 py-2">Percentages, vesting</td>
                  <td className="px-4 py-2">State default splits apply</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Management &amp; voting</td>
                  <td className="px-4 py-2">Who decides what</td>
                  <td className="px-4 py-2">Deadlock with no tiebreak</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Distributions</td>
                  <td className="px-4 py-2">When cash leaves</td>
                  <td className="px-4 py-2">Tax bills without cash</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Buy-sell &amp; exit</td>
                  <td className="px-4 py-2">Price + triggers</td>
                  <td className="px-4 py-2">Expensive disputes, stuck owners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: two founders, 60/40</h2>
          <p className="mt-3">
            Amara contributes $30,000 cash and full-time work; Ben contributes $20,000 plus
            part-time evenings, vesting his 40% over two years. Their agreement sets
            member-managed operations with Amara as operator for daily decisions, supermajority
            for debt over $25,000, quarterly distributions only after a three-month operating
            reserve is funded, and mandatory tax distributions covering pass-through liability.
            Buyout pricing uses a multiple of seller&apos;s discretionary earnings from our{" "}
            <Link href="/how-to-value-small-business" className="text-amber-200 underline underline-offset-2">
              valuation guide
            </Link>
            , payable over 24 months at a stated interest rate. When Ben&apos;s job relocates him
            in year three, the vested exit executes in weeks instead of court — the agreement
            priced the event before emotions did. They store signed copies with formation records
            and review terms annually with their accountant before any{" "}
            <Link href="/s-corp-election-guide" className="text-amber-200 underline underline-offset-2">
              S election
            </Link>{" "}
            changes the tax plumbing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Single-member essentials</h2>
          <p className="mt-3">
            Solo owners still sign one: recite 100% ownership, sole management authority, the
            business purpose, fiscal year, and that company debts are company debts. Attach the
            initial contribution record and keep it with the{" "}
            <Link href="/ein-application-guide" className="text-amber-200 underline underline-offset-2">
              EIN letter
            </Link>{" "}
            and filed articles — banks routinely request all three together per our{" "}
            <Link href="/business-bank-account-guide" className="text-amber-200 underline underline-offset-2">
              bank account guide
            </Link>
            . Update the agreement when you add members, elect S status, or take on significant
            debt; a stale agreement describing a solo shop while three partners draw salaries
            helps nobody in a dispute.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I file it with the state?</summary>
              <p className="mt-1">No. Keep the signed agreement privately with company records; only a few states even require you to have one, but all LLCs benefit.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Template or attorney?</summary>
              <p className="mt-1">Solo LLCs can start from a reputable template; multi-member, funded, or licensed businesses should pay for attorney review.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can sweat equity vest?</summary>
              <p className="mt-1">Yes — and it should. Time-based vesting with acceleration on sale protects full-time founders from part-time departures.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How often to update?</summary>
              <p className="mt-1">Review annually and amend on ownership, management, capital, or tax-status changes. Dated signatures beat remembered promises.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. LLC defaults vary by state — have
            counsel review multi-member agreements. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Operating Agreement Basics 2026: Clauses Every LLC Needs | LoanPay Business", description: "Draft an LLC operating agreement in 2026: ownership, voting, contributions, distributions, buyouts, and dissolution — with a two-founder worked example.", url: "https://business.loanpaylogic.com/operating-agreement-basics" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Do I file it with the state?","answer":"No. Keep the signed agreement privately with company records; only a few states even require you to have one, but all LLCs benefit."}, {"question":"Template or attorney?","answer":"Solo LLCs can start from a reputable template; multi-member, funded, or licensed businesses should pay for attorney review."}, {"question":"Can sweat equity vest?","answer":"Yes — and it should. Time-based vesting with acceleration on sale protects full-time founders from part-time departures."}, {"question":"How often to update?","answer":"Review annually and amend on ownership, management, capital, or tax-status changes. Dated signatures beat remembered promises."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "Operating Agreement Basics 2026: Clauses Every LLC Needs | LoanPay Business", url: "https://business.loanpaylogic.com/operating-agreement-basics" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
