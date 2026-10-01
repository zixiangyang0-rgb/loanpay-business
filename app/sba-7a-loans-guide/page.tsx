import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SBA 7(a) Loans Guide 2026: Rates, Limits & How to Apply | LoanPay Business",
  description:
    "SBA 7(a) loans in 2026: up to $5M, 75–85% guarantees, prime-linked rate caps, fees, eligibility, documents, and the application timeline step by step.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/sba-7a-loans-guide",
  },
};

export default function Sba7aPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          funding &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          SBA 7(a) Loans Guide: 2026 Essentials
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The SBA&apos;s flagship program guarantees a slice of your bank loan — unlocking up to
          $5 million, longer terms, and lower down payments than conventional financing for
          borrowers who qualify.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">What the 7(a) does and who qualifies</h2>
          <p className="mt-3">
            The SBA does not lend directly under 7(a); it guarantees 85% of loans up to $150,000
            and 75% above that, so banks approve borrowers they would otherwise decline. Proceeds
            can buy or improve real estate, purchase equipment, refinance eligible debt, fund
            working capital, or finance a change of ownership. Eligibility requires an operating,
            for-profit US business that meets SBA size standards, is not in an excluded industry
            (gambling, lobbying, speculation, illegal activity), cannot get reasonable credit
            elsewhere, and demonstrates repayment ability with creditworthy owners. Variants share
            the $5 million ceiling: Standard 7(a), 7(a) Small (up to $350,000), Express (up to
            $500,000 at a 50% guarantee for speed), Export Express, CAPLines revolving lines, and
            Working Capital Pilot lines. Terms run up to 10 years for working capital and up to 25
            years for real estate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">2026 rates, fees, and structure</h2>
          <p className="mt-3">
            Most 7(a) rates are variable, capped at a base rate (usually Prime, which sat near
            6.75% in early 2026) plus a spread that shrinks as loan size grows: up to Prime +
            6.5% on the smallest loans, stepping down to Prime + 3.0% above $350,000. Strong
            borrowers typically negotiate 1–3 points below the ceiling. Expect an upfront SBA
            guarantee fee tiered by loan size (roughly 2% of the guaranteed portion on the
            smallest loans, rising to 3–3.75% on larger ones for multi-year terms) plus an annual
            service fee near 0.55% of the outstanding guaranteed balance, alongside the
            lender&apos;s own origination and packaging charges. Fixed-rate options exist but are
            less common.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Key 7(a) parameters for 2026 (confirm current Prime with your lender).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Standard 7(a)</th>
                  <th className="px-4 py-3 font-semibold">Express</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Maximum loan</td>
                  <td className="px-4 py-2">$5,000,000</td>
                  <td className="px-4 py-2">$500,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">SBA guarantee</td>
                  <td className="px-4 py-2">85% ≤ $150K; 75% above</td>
                  <td className="px-4 py-2">50%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Max variable rate (Prime ≈ 6.75%)</td>
                  <td className="px-4 py-2">~9.75%–13.25%</td>
                  <td className="px-4 py-2">Same size-based caps</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Max term</td>
                  <td className="px-4 py-2">10 yrs (25 real estate)</td>
                  <td className="px-4 py-2">Same</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Typical close time</td>
                  <td className="px-4 py-2">45–90 days</td>
                  <td className="px-4 py-2">30–45 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $500,000 acquisition</h2>
          <p className="mt-3">
            A machine shop buys a competitor&apos;s assets for $500,000 with a 10% down payment
            ($50,000) and a $450,000 7(a) loan over 10 years at 9.75% variable. Monthly payment is
            roughly $5,830 (principal and interest), versus about $10,400 on a 5-year conventional
            note at a similar rate — the longer SBA term cuts the monthly burden nearly in half,
            which is the program&apos;s real power. The upfront guarantee fee near 3% of the
            guaranteed portion (75% × $450,000 = $337,500 → ≈ $10,125) can be financed into the
            loan. Over ten years total interest approaches $250,000, so the buyer verifies the
            acquired cash flow covers at least 1.2× debt service before signing. She prepares two
            years of returns, interim statements, a debt-service worksheet from her{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              bookkeeping system
            </Link>
            , and a business valuation (see our{" "}
            <Link href="/how-to-value-small-business" className="text-amber-200 underline underline-offset-2">
              valuation guide
            </Link>
            ) before approaching a Preferred Lender.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How to apply without stalling</h2>
          <p className="mt-3">
            Start with the SBA Lender Match tool or a local Preferred Lender that can approve
            in-house. Assemble the package before the first meeting: business plan with use of
            proceeds, 2–3 years of business and personal returns, year-to-date financials, AR/AP
            agings, debt schedule, owner resumes, and personal financial statements from anyone
            owning 20%+. Expect collateral review and personal guarantees from major owners.
            Respond to underwriting questions within 24 hours — files stall on document ping-pong,
            not credit decisions. If 7(a) timelines do not fit, compare our{" "}
            <Link href="/business-line-of-credit-guide" className="text-amber-200 underline underline-offset-2">
              line of credit guide
            </Link>{" "}
            and{" "}
            <Link href="/sba-microloans-guide" className="text-amber-200 underline underline-offset-2">
              microloans guide
            </Link>{" "}
            for smaller or faster needs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What credit score do I need?</h3>
              <p className="mt-1">The SBA sets no minimum, but most lenders look for roughly 650+ personally, with stronger cash flow offsetting thinner scores.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can startups get 7(a) loans?</h3>
              <p className="mt-1">Yes, with a strong plan, equity injection (often ~10%), experience, and projections — though microloans may fit earlier stages.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I prepay without penalty?</h3>
              <p className="mt-1">Loans under 15 years generally have none; longer-maturity loans may carry a declining prepayment fee in early years.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does the SBA take ownership?</h3>
              <p className="mt-1">No. The guarantee backs the lender; you keep full ownership and repay the bank, not the government.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Rates track Prime and SBA fee
            schedules change each fiscal year — confirm with your lender. Read our full{" "}
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
