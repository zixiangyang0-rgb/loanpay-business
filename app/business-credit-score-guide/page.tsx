import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Business Credit Score Guide 2026: Build It From Zero | LoanPay Business",
  description:
    "Business credit scores in 2026: D&B PAYDEX, Experian, Equifax, FICO SBSS, what moves them, and a 12-month plan from no file to fundable.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/business-credit-score-guide",
  },
};

export default function BizCreditScorePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          funding &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Business Credit Score Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Lenders read your business file before your story. Build tradelines, pay early, and
          watch three bureaus plus the score SBA lenders actually pull.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">The scores that matter</h2>
          <p className="mt-3">
            Dun &amp; Bradstreet&apos;s PAYDEX (1–100, higher for faster payment; 80 means
            on-time) tracks trade payment speed. Experian Business and Equifax Business score
            credit risk on roughly 0–100 scales weighing payment history, utilization, public
            records, and firmographics. FICO SBSS (0–300) blends owner-personal and business data
            for SBA and term lenders — many SBA programs prescreen around 140–160, with stronger
            files clearing faster. Unlike personal credit, business files often start empty and
            many vendors never report, so no file is the normal starting problem, not bad history.
            Establish the identifiers first: EIN (see our{" "}
            <Link href="/ein-application-guide" className="text-amber-200 underline underline-offset-2">
              EIN guide
            </Link>
            ), D-U-N-S number, and consistent legal name and address everywhere.
          </p>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">What moves each score</h2>
          <p className="mt-3">
            Payment performance dominates: paying trade accounts early beats paying on time, and
            any collections, liens, or judgments damage all files at once. Utilization and
            balances on cards and lines matter next, followed by file depth (number of reporting
            tradelines), company age and size signals, and public records. Owner personal credit
            still influences small-business underwriting through SBSS blending and personal
            guarantees — build both in parallel from the habits in our{" "}
            <Link href="/business-credit-cards-basics" className="text-amber-200 underline underline-offset-2">
              cards basics
            </Link>{" "}
            and{" "}
            <Link href="/business-bank-account-guide" className="text-amber-200 underline underline-offset-2">
              bank account guide
            </Link>
            .
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Major business scores and their levers.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Score</th>
                  <th className="px-4 py-3 font-semibold">Scale</th>
                  <th className="px-4 py-3 font-semibold">Top lever</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">D&amp;B PAYDEX</td>
                  <td className="px-4 py-2">1–100 (80 = on time)</td>
                  <td className="px-4 py-2">Pay early, more tradelines</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Experian Business</td>
                  <td className="px-4 py-2">0–100 (low risk = high)</td>
                  <td className="px-4 py-2">Clean payments, low utilization</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Equifax Business</td>
                  <td className="px-4 py-2">0–100 risk + payment index</td>
                  <td className="px-4 py-2">No delinquencies or liens</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">FICO SBSS</td>
                  <td className="px-4 py-2">0–300</td>
                  <td className="px-4 py-2">Owner + business blend</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: from no file to fundable in 12 months</h2>
          <p className="mt-3">
            A new cleaning company starts with zero tradelines. Months 1–3: opens net-30 accounts
            with two suppliers that report to D&amp;B, plus a secured business card; pays every
            invoice 10 days early. Months 4–6: adds a fuel card and an equipment installment that
            reports; keeps card utilization under 30%. Months 7–12: takes a small{" "}
            <Link href="/sba-microloans-guide" className="text-amber-200 underline underline-offset-2">
              microloan
            </Link>
            , pays perfectly, and disputes one misreported late payment with documentation. By
            month 12 the file shows five reporting tradelines with early-or-on-time history,
            PAYDEX near 80, and an SBSS comfortably above common prescreen cutoffs — positioning
            a{" "}
            <Link href="/sba-7a-loans-guide" className="text-amber-200 underline underline-offset-2">
              7(a) application
            </Link>{" "}
            the following year on data, not promises. Clean{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              books
            </Link>{" "}
            make every step verifiable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Monitoring and disputes</h2>
          <p className="mt-3">
            Pull each bureau file at least annually (quarterly while building) and confirm the
            name, address, and tradeline details match — merged or split files are common for
            young firms. Dispute errors in writing with statements and proof of payment; follow
            up until the bureau confirms correction. Never pay &quot;score boost&quot; outfits
            that promise tradeline purchases or file manipulation — manufactured tradelines can
            trigger fraud flags with lenders. Legitimate speed comes from more real vendors
            reporting real early payments.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does business credit affect my personal score?</summary>
              <p className="mt-1">Indirectly but really — guarantees and SBSS blending mean personal delinquencies can sink business approvals and vice versa.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Which vendors report payments?</summary>
              <p className="mt-1">Ask before opening accounts. Office suppliers, fuel cards, and many wholesalers report; landlords and small vendors often don&apos;t.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How fast can I build a file?</summary>
              <p className="mt-1">Meaningful files typically take 6–12 months of reported early payments across 3–5 tradelines. There are no legitimate overnight fixes.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should I close old tradelines?</summary>
              <p className="mt-1">No — aged, clean tradelines help depth. Keep them active with small recurring orders paid early.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Bureau models and lender cutoffs
            change; confirm current criteria. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Business Credit Score Guide 2026: Build It From Zero | LoanPay Business", description: "Business credit scores in 2026: D&B PAYDEX, Experian, Equifax, FICO SBSS, what moves them, and a 12-month plan from no file to fundable.", url: "https://business.loanpaylogic.com/business-credit-score-guide" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Does business credit affect my personal score?","answer":"Indirectly but really — guarantees and SBSS blending mean personal delinquencies can sink business approvals and vice versa."}, {"question":"Which vendors report payments?","answer":"Ask before opening accounts. Office suppliers, fuel cards, and many wholesalers report; landlords and small vendors often don’t."}, {"question":"How fast can I build a file?","answer":"Meaningful files typically take 6–12 months of reported early payments across 3–5 tradelines. There are no legitimate overnight fixes."}, {"question":"Should I close old tradelines?","answer":"No — aged, clean tradelines help depth. Keep them active with small recurring orders paid early."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "Business Credit Score Guide 2026: Build It From Zero | LoanPay Business", url: "https://business.loanpaylogic.com/business-credit-score-guide" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
