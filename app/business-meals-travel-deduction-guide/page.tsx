import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Business Meals & Travel Deduction Guide 2026 | LoanPay Business",
  description:
    "Deduct business meals and travel in 2026: 50% meals rule, lodging, mileage vs. actual costs, accountable plans, and substantiation with a worked trip example.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/business-meals-travel-deduction-guide",
  },
};

export default function MealsTravelPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          taxes &amp; payroll &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Business Meals &amp; Travel Deduction Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Ordinary, necessary, and documented: which meals are 50% deductible, what travel counts,
          and the receipt rules that decide audits.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">The rules in plain English</h2>
          <p className="mt-3">
            Business meals with clients, vendors, or employees for a genuine business purpose are
            generally 50% deductible — the temporary 100% restaurant relief expired, so plan on
            half. Requirements: the expense is ordinary and necessary, you (or an employee) are
            present, and lavish or extravagant spending is out. Business travel — trips away from
            your tax home overnight — unlocks deductions for airfare, lodging, rental cars, and
            50% of business meals on the road, plus dry cleaning and tips tied to the trip. Daily
            commuting is never deductible. Mileage for business driving uses the IRS standard
            rate or actual-cost method; pick one approach consistently per vehicle and log
            contemporaneously (see our{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              bookkeeping guide
            </Link>
            ). Entertainment — ball games, concerts, club dues — remains nondeductible even with
            clients present.
          </p>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">What counts and at what rate</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Common travel and meal items and their 2026 treatment.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Expense</th>
                  <th className="px-4 py-3 font-semibold">Deductible</th>
                  <th className="px-4 py-3 font-semibold">Condition</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Client business meal</td>
                  <td className="px-4 py-2">50%</td>
                  <td className="px-4 py-2">Business purpose, you present</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Airfare + lodging (overnight)</td>
                  <td className="px-4 py-2">100%</td>
                  <td className="px-4 py-2">Away from tax home on business</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Business mileage</td>
                  <td className="px-4 py-2">Standard rate or actual</td>
                  <td className="px-4 py-2">Contemporaneous log required</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Team celebration meal</td>
                  <td className="px-4 py-2">50% (100% narrow party exception)</td>
                  <td className="px-4 py-2">Primarily employees; document it</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Sporting-event entertaining</td>
                  <td className="px-4 py-2">0%</td>
                  <td className="px-4 py-2">Nondeductible entertainment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the Chicago sales trip</h2>
          <p className="mt-3">
            A consultant flies to Chicago for two client days: $350 airfare, $180 × 2 lodging =
            $360, $120 local transit, and $200 of business meals. Deductible total: $350 + $360 +
            $120 + 50% × $200 ($100) = $930. A $150 dinner where she discussed football but no
            business adds $0 — and claiming it risks the whole category under audit. She
            photographs every receipt, notes attendees and topics the same evening, and reimburses
            through an accountable plan (business connection, substantiation within a reasonable
            time, return of excess advances) so reimbursements stay tax-free to her and deductible
            to the company. S-corp owners follow the same plan discipline from our{" "}
            <Link href="/s-corp-election-guide" className="text-amber-200 underline underline-offset-2">
              S-corp guide
            </Link>
            ; sole proprietors deduct on Schedule C with identical substantiation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Substantiation: the five facts per expense</h2>
          <p className="mt-3">
            For each meal or trip record the amount, date, place, business purpose, and business
            relationship of attendees. Credit-card statements alone fail — they show where, not
            why. Apps that capture receipts plus a one-line purpose note at the time beat
            shoeboxes reconstructed in April. Per-diem rates can simplify employee travel
            accounting under IRS tables, but the business-purpose test never disappears. Mixed
            personal-business trips require allocating days:deduct travel if the primary purpose
            is business, but personal detour days and family costs stay yours.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Coffee with a prospect — deductible?</summary>
              <p className="mt-1">Yes at 50% if genuine business is discussed and you document purpose and attendees. Purely social coffee is not.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I deduct commuting to a client?</summary>
              <p className="mt-1">Travel from home to a temporary work location can qualify, but regular commuting to a fixed office never does.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is an accountable plan?</summary>
              <p className="mt-1">A written reimbursement policy requiring business connection, timely substantiation, and return of excess — it keeps reimbursements tax-free.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I need receipts under $75?</summary>
              <p className="mt-1">Lodging always needs receipts; other expenses under $75 still need the five log facts even where a paper receipt is excused.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Meal, mileage, and per-diem figures
            update yearly — confirm current IRS guidance. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Business Meals & Travel Deduction Guide 2026 | LoanPay Business", description: "Deduct business meals and travel in 2026: 50% meals rule, lodging, mileage vs. actual costs, accountable plans, and substantiation with a worked trip example.", url: "https://business.loanpaylogic.com/business-meals-travel-deduction-guide" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Coffee with a prospect — deductible?","answer":"Yes at 50% if genuine business is discussed and you document purpose and attendees. Purely social coffee is not."}, {"question":"Can I deduct commuting to a client?","answer":"Travel from home to a temporary work location can qualify, but regular commuting to a fixed office never does."}, {"question":"What is an accountable plan?","answer":"A written reimbursement policy requiring business connection, timely substantiation, and return of excess — it keeps reimbursements tax-free."}, {"question":"Do I need receipts under $75?","answer":"Lodging always needs receipts; other expenses under $75 still need the five log facts even where a paper receipt is excused."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "Business Meals & Travel Deduction Guide 2026 | LoanPay Business", url: "https://business.loanpaylogic.com/business-meals-travel-deduction-guide" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
