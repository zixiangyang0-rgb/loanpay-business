import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Business Bank Account Guide 2026: Separate & Save | LoanPay Business",
  description:
    "Open the right business bank account in 2026: documents checklist, checking vs. savings vs. merchant accounts, fee traps, and a clean money routine.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/business-bank-account-guide",
  },
};

export default function BankAccountPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          formation &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Business Bank Account Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The unglamorous account that protects your liability shield, simplifies taxes, and makes
          loans possible. What to bring, which accounts to open, and the weekly routine that keeps
          books clean.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Why separation is non-negotiable</h2>
          <p className="mt-3">
            Courts and auditors both ask one question first: did you treat the business as separate?
            Paying personal bills from business funds — or stashing client payments in a personal
            account — undermines the LLC shield from our{" "}
            <Link href="/how-to-start-llc-guide" className="text-amber-200 underline underline-offset-2">
              LLC guide
            </Link>{" "}
            and turns every tax deduction into an argument. A dedicated account also creates the
            paper trail lenders demand: SBA programs and most banks want to see business bank
            statements before approving a loan or line of credit. Open the account within days of
            receiving your EIN letter; every week of commingled activity is a week of cleanup later.
          </p>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">Documents and account types</h2>
          <p className="mt-3">
            Banks typically ask for filed articles of organization, the IRS EIN confirmation
            letter, government ID for each signer, the operating agreement (especially for
            multi-member LLCs), and any DBA certificate if you trade under another name. Call
            ahead — requirements differ by bank and entity type. Most small businesses need three
            pieces: a business checking account for daily flow, a business savings or money-market
            account holding the tax reserve (25–30% of profit is a common starting target), and a
            merchant or payment-processor connection for card acceptance. Keep a business credit
            card (see our{" "}
            <Link href="/business-credit-cards-basics" className="text-amber-200 underline underline-offset-2">
              credit cards basics
            </Link>
            ) paid from the checking account so rewards and statements stay inside the business.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Account types and their jobs.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Account</th>
                  <th className="px-4 py-3 font-semibold">Job</th>
                  <th className="px-4 py-3 font-semibold">Watch for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Business checking</td>
                  <td className="px-4 py-2">Pay bills, receive income</td>
                  <td className="px-4 py-2">Monthly fee, transaction limits</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Business savings</td>
                  <td className="px-4 py-2">Tax reserve + buffer</td>
                  <td className="px-4 py-2">Withdrawal limits, low yield</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Merchant/processor</td>
                  <td className="px-4 py-2">Accept cards online/in person</td>
                  <td className="px-4 py-2">Per-swipe + % fees, holds</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Payroll sub-account</td>
                  <td className="px-4 py-2">Isolate wages + tax deposits</td>
                  <td className="px-4 py-2">Only needed once you hire</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: choosing without overpaying</h2>
          <p className="mt-3">
            Luis&apos;s landscaping LLC processes $12,000 per month. Bank A charges a $15 monthly
            fee (waived with a $5,000 balance), includes 200 free transactions, and pays no interest
            on savings. Online Bank B charges $0, includes unlimited transactions, but has no cash
            deposit option — a problem because a third of Luis&apos;s customers pay cash. He keeps
            Bank A checking for deposits and bill pay (holding the $5,000 buffer, so the fee is $0),
            sweeps his 30% tax reserve to a high-yield online savings account earning roughly 4%
            annualized (about $14,400 × 4% ≈ $576 per year on the average reserve), and runs cards
            through a processor at 2.6% + 10¢ rather than the bank&apos;s 3.1% quote — saving about
            $60 per $10,000 of card volume. The lesson: match the account to how money actually
            moves, not to the sign-up bonus.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Fee traps and the weekly routine</h2>
          <p className="mt-3">
            Compare minimum-balance waivers, cash-deposit caps, wire and stop-payment fees, and
            out-of-network ATM policies before you fall for a bonus with a 90-day direct-deposit
            requirement you cannot meet. Then install the routine that makes bookkeeping (see our{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              bookkeeping basics guide
            </Link>
            ) nearly automatic: every Friday, move the tax percentage to savings, photograph new
            receipts, pay yourself the scheduled owner draw or salary, and reconcile the week in
            your accounting app. Owners who touch the accounts weekly catch fraud, duplicate
            charges, and forgotten invoices while they are still small.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I use my personal account at first?</summary>
              <p className="mt-1">Temporarily, but it weakens liability protection and complicates taxes. Open the business account as soon as the EIN arrives.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How many accounts do I need?</summary>
              <p className="mt-1">Start with checking plus a tax-reserve savings account. Add payroll and merchant pieces only when volume justifies them.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Online bank or local branch?</summary>
              <p className="mt-1">Cash-heavy businesses usually need a branch for deposits; digital businesses can prioritize low fees and integrations.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Will the bank pull my personal credit?</summary>
              <p className="mt-1">Often yes for new businesses with no history. A business account itself builds the statements lenders later review.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Account terms change; compare current
            disclosures. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Business Bank Account Guide 2026: Separate & Save | LoanPay Business", description: "Open the right business bank account in 2026: documents checklist, checking vs. savings vs. merchant accounts, fee traps, and a clean money routine.", url: "https://business.loanpaylogic.com/business-bank-account-guide" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Can I use my personal account at first?","answer":"Temporarily, but it weakens liability protection and complicates taxes. Open the business account as soon as the EIN arrives."}, {"question":"How many accounts do I need?","answer":"Start with checking plus a tax-reserve savings account. Add payroll and merchant pieces only when volume justifies them."}, {"question":"Online bank or local branch?","answer":"Cash-heavy businesses usually need a branch for deposits; digital businesses can prioritize low fees and integrations."}, {"question":"Will the bank pull my personal credit?","answer":"Often yes for new businesses with no history. A business account itself builds the statements lenders later review."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "Business Bank Account Guide 2026: Separate & Save | LoanPay Business", url: "https://business.loanpaylogic.com/business-bank-account-guide" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
