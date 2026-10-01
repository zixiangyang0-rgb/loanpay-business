import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payroll Taxes Employer Guide 2026: FICA, FUTA, SUTA & Withholding | LoanPay Business",
  description:
    "Employer payroll taxes in 2026: FICA 7.65% match, $184,500 Social Security base, FUTA/SUTA mechanics, withholding, deposits, and a $1,000 paycheck worked example.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/payroll-taxes-employer-guide",
  },
};

export default function PayrollTaxesPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          taxes &amp; payroll &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Payroll Taxes: The Employer Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Every paycheck carries four employer jobs: withhold income tax, withhold the
          employee&apos;s FICA, match FICA from company funds, and fund unemployment insurance.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">The four pieces of every paycheck</h2>
          <p className="mt-3">
            Federal income tax withholding follows each employee&apos;s Form W-4 through IRS
            tables — you hold it and remit it, with no employer match. FICA is the matched pair:
            6.2% Social Security plus 1.45% Medicare withheld from the employee (7.65% total),
            matched dollar-for-dollar from the business, for a combined 15.3% per paycheck. The
            2026 Social Security wage base is $184,500 per employee (up from $176,100 in 2025), so
            the maximum Social Security tax is $11,439 each side; Medicare has no cap, and wages
            above $200,000 ($250,000 joint) trigger an extra 0.9% employee-only Medicare tax with
            no employer match. Unemployment insurance is employer-only: FUTA at 6.0% on the first
            $7,000 of each worker&apos;s wages, reduced to an effective 0.6% ($42 per employee)
            when state unemployment tax is paid in full and on time — plus SUTA to your state at
            experience-rated rates on state wage bases that range from $7,000 to over $50,000.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">2026 rates at a glance</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Federal payroll rates and bases for 2026.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Tax</th>
                  <th className="px-4 py-3 font-semibold">Employee</th>
                  <th className="px-4 py-3 font-semibold">Employer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Social Security (to $184,500)</td>
                  <td className="px-4 py-2">6.2%</td>
                  <td className="px-4 py-2">6.2%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Medicare (no cap)</td>
                  <td className="px-4 py-2">1.45%</td>
                  <td className="px-4 py-2">1.45%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Extra Medicare (over $200K)</td>
                  <td className="px-4 py-2">0.9%</td>
                  <td className="px-4 py-2">—</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">FUTA (first $7,000)</td>
                  <td className="px-4 py-2">—</td>
                  <td className="px-4 py-2">6.0% → 0.6% w/ credit</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">SUTA</td>
                  <td className="px-4 py-2">— (most states)</td>
                  <td className="px-4 py-2">Varies by state + history</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: a $1,000 paycheck</h2>
          <p className="mt-3">
            An employee earns $1,000 gross in a biweekly period, well under all caps. Withhold
            employee Social Security of $62.00 (6.2%) and Medicare of $14.50 (1.45%) — $76.50
            total FICA — plus, say, $110 of federal income tax per the W-4 tables, leaving net
            pay of $813.50. The employer&apos;s cost beyond the $1,000 wage: the $76.50 FICA
            match, roughly $40 of SUTA at a mid-range state rate on this slice, and a few dollars
            of FUTA (0.6% × $1,000 = $6 until the $7,000 base fills). True cost of that $1,000
            paycheck: about $1,120 before workers&apos; comp and benefits. New employers should
            price offers with this 10–20% load built in (see our{" "}
            <Link href="/hiring-first-employee-checklist" className="text-amber-200 underline underline-offset-2">
              hiring checklist
            </Link>
            ), and owners comparing W-2 versus contractor help should read our{" "}
            <Link href="/contractors-vs-employees-1099-guide" className="text-amber-200 underline underline-offset-2">
              contractors vs. employees guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Deposits, filings, and penalties</h2>
          <p className="mt-3">
            Deposit withheld income tax plus both FICA halves electronically via EFTPS on a
            monthly or semiweekly schedule set by your lookback liability — new employers start
            monthly until history says otherwise. File Form 941 quarterly reconciling wages,
            withholding, and FICA; file Form 940 annually for FUTA; issue W-2s by end of January.
            Late deposits trigger failure-to-deposit penalties (2–15% by lateness) plus interest,
            and responsible individuals can face personal trust-fund liability for withheld taxes
            spent instead of remitted. A payroll provider plus the calendar in our{" "}
            <Link href="/small-business-tax-calendar-2026" className="text-amber-200 underline underline-offset-2">
              2026 tax calendar
            </Link>{" "}
            prevents nearly all of this.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do owners pay payroll tax on draws?</h3>
              <p className="mt-1">Sole-proprietor draws are not wages — profit faces SE tax instead. S-corp owners take W-2 salary with full payroll tax. See our S-corp guides.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">When does Social Security tax stop?</h3>
              <p className="mt-1">Per employee, once your wages to them pass $184,500 in 2026. Track year-to-date pay per worker; prior-employer wages don&apos;t count toward your cap.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is the nanny / household threshold?</h3>
              <p className="mt-1">For 2026, household employers generally owe FICA and a W-2 once cash wages pass about $3,000 to a domestic worker.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I just classify everyone as contractors?</h3>
              <p className="mt-1">Only if the relationship genuinely qualifies — misclassification brings back taxes, penalties, and benefit liability. Read the classification guide first.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. 2026 figures reflect current
            announcements; confirm with the IRS. Read our full{" "}
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
