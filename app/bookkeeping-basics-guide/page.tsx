import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Bookkeeping Basics Guide 2026: Clean Books, Calm Taxes | LoanPay Business",
  description:
    "Bookkeeping basics for 2026: chart of accounts, cash vs. accrual, weekly reconciliation rhythm, receipt rules, and records that survive audits and loan reviews.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/bookkeeping-basics-guide",
  },
};

export default function BookkeepingPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          taxes &amp; payroll &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Bookkeeping Basics Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Clean books are a loan application, a tax return, and an early-warning system in one.
          Set up five accounts, reconcile weekly, and keep every receipt with a purpose note.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">The minimum viable system</h2>
          <p className="mt-3">
            Every business needs the same skeleton: a business checking account (see our{" "}
            <Link href="/business-bank-account-guide" className="text-amber-200 underline underline-offset-2">
              bank account guide
            </Link>
            ), an accounting app or ledger, a receipt-capture habit, a payroll provider once you
            hire, and a tax-reserve savings account. Structure the chart of accounts around
            decisions: income by service line, cost of goods sold, payroll, rent, marketing,
            software, travel and meals, insurance, professional fees, and financing costs.
            Consistency beats granularity — ten stable categories reconciled monthly outperform
            fifty precise ones abandoned by March. Start on cash basis (record when money moves)
            unless inventory, long projects, or lenders require accrual accounting that matches
            revenue to when it is earned.
          </p>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">The weekly and monthly rhythm</h2>
          <p className="mt-3">
            Weekly (30 minutes): categorize new transactions, photograph receipts with business
            purpose noted, send overdue invoice reminders, move the tax percentage to savings, and
            review the cash balance against the next two weeks of bills. Monthly (2 hours):
            reconcile every account to statements, review profit and loss versus budget, age
            receivables and payables, verify payroll filings posted, and back up records. Quarterly:
            re-project annual profit, resize estimated tax payments (see our{" "}
            <Link href="/small-business-tax-calendar-2026" className="text-amber-200 underline underline-offset-2">
              2026 tax calendar
            </Link>
            ), and review subscriptions and vendor contracts for creep. Owners who follow this
            cadence from our{" "}
            <Link href="/hiring-first-employee-checklist" className="text-amber-200 underline underline-offset-2">
              hiring checklist
            </Link>{" "}
            onward rarely face April surprises.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Bookkeeping cadence that prevents year-end panic.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Cadence</th>
                  <th className="px-4 py-3 font-semibold">Tasks</th>
                  <th className="px-4 py-3 font-semibold">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Weekly</td>
                  <td className="px-4 py-2">Categorize, receipts, invoice nudges, tax sweep</td>
                  <td className="px-4 py-2">~30 min</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Monthly</td>
                  <td className="px-4 py-2">Reconcile, P&amp;L review, AR/AP aging</td>
                  <td className="px-4 py-2">~2 hrs</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Quarterly</td>
                  <td className="px-4 py-2">Re-project profit, resize estimates</td>
                  <td className="px-4 py-2">~half day</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Year-end</td>
                  <td className="px-4 py-2">1099s, W-2s, inventory count, close books</td>
                  <td className="px-4 py-2">~1–2 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: catching a $900 leak</h2>
          <p className="mt-3">
            A coffee cart owner reconciles October and finds $900 of duplicate charges: a
            software subscription billed twice after a card replacement and a supplier invoice
            paid both by check and autopay. Because she matches every statement line to a receipt
            monthly, she disputes the subscription (refunded), requests the supplier credit
            (applied to November), and cancels autopay on check-paid vendors. Annualized, the
            habit is worth over $10,000 — more than her accounting subscription costs for a
            decade. Her December sweep then funds retirement contributions before the filing
            deadline, cutting the tax bill our sister site&apos;s{" "}
            <a
              href="https://tax.loanpaylogic.com/self-employment-tax-calculator"
              className="text-amber-200 underline underline-offset-2"
            >
              SE tax calculator
            </a>{" "}
            previews.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Records that survive audits and underwriting</h2>
          <p className="mt-3">
            Keep seven folders: income records and 1099s, expense receipts with purpose noted,
            mileage logs (date, destination, purpose, miles), asset purchase invoices, payroll
            confirmations, bank and card statements, and filed returns — retained at least three
            years, longer if income was substantially understated or a loan is outstanding.
            Separate business and personal spending religiously; commingled accounts turn every
            deduction into an argument. When revenue passes roughly $100,000 or employees arrive,
            graduate from spreadsheets to a real accounting app and consider a monthly
            bookkeeper: the fee is usually smaller than one missed deduction or one late
            payroll-penalty quarter.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Cash or accrual basis?</summary>
              <p className="mt-1">Most small service businesses use cash basis for simplicity. Inventory-heavy firms and larger businesses often must use accrual — ask your accountant.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">DIY or hire a bookkeeper?</summary>
              <p className="mt-1">DIY with weekly discipline until roughly $100K revenue or first hire; then monthly professional help usually pays for itself.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How long to keep receipts?</summary>
              <p className="mt-1">At least three years from filing; six if income may be understated. Digital copies with purpose notes are fine if legible.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I need accounting software day one?</summary>
              <p className="mt-1">A simple app beats a spreadsheet once transactions exceed ~30 per month or you invoice customers. Start simple, upgrade when books lag.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Retention and accounting-method rules
            depend on your situation — confirm with a professional. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Bookkeeping Basics Guide 2026: Clean Books, Calm Taxes | LoanPay Business", description: "Bookkeeping basics for 2026: chart of accounts, cash vs. accrual, weekly reconciliation rhythm, receipt rules, and records that survive audits and loan reviews.", url: "https://business.loanpaylogic.com/bookkeeping-basics-guide" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Cash or accrual basis?","answer":"Most small service businesses use cash basis for simplicity. Inventory-heavy firms and larger businesses often must use accrual — ask your accountant."}, {"question":"DIY or hire a bookkeeper?","answer":"DIY with weekly discipline until roughly $100K revenue or first hire; then monthly professional help usually pays for itself."}, {"question":"How long to keep receipts?","answer":"At least three years from filing; six if income may be understated. Digital copies with purpose notes are fine if legible."}, {"question":"Do I need accounting software day one?","answer":"A simple app beats a spreadsheet once transactions exceed ~30 per month or you invoice customers. Start simple, upgrade when books lag."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "Bookkeeping Basics Guide 2026: Clean Books, Calm Taxes | LoanPay Business", url: "https://business.loanpaylogic.com/bookkeeping-basics-guide" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
