import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Business Tax Calendar 2026: Every Deadline | LoanPay Business",
  description:
    "2026 small-business tax calendar: quarterly estimates, payroll deposits, 1099/W-2 dates, S-corp, partnership, and C-corp returns, plus penalty-safe-harbor basics.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/small-business-tax-calendar-2026",
  },
};

export default function TaxCalendarPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          taxes &amp; payroll &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Small Business Tax Calendar 2026
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Every recurring federal deadline in one place — estimates, payroll, information
          returns, and entity filings — so penalties never surprise you.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Quarterly estimated payments</h2>
          <p className="mt-3">
            The US system is pay-as-you-go: profit earned in spring owes tax in spring, not next
            April. For 2026, individual voucher dates (including sole proprietors, partners, and
            S-corp shareholders paying on pass-through income) are April 15, 2026, June 15, 2026,
            September 15, 2026, and January 15, 2027. Corporations follow April 15, June 15,
            September 15, and December 15, 2026. Underpayment penalties accrue per quarter at IRS
            interest rates (recently 7–8% annualized), and no single year-end payment erases
            earlier quarters. Safe harbors remove the penalty: prepay 90% of the current
            year&apos;s bill, 100% of last year&apos;s (110% above $150,000 AGI), or keep the
            April balance under $1,000. Size each voucher from year-to-date profit using your{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              books
            </Link>
            ; our sister site&apos;s quarterly and{" "}
            <a
              href="https://tax.loanpaylogic.com/self-employment-tax-calculator"
              className="text-amber-200 underline underline-offset-2"
            >
              SE tax calculators
            </a>{" "}
            show the underlying math.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">2026 deadline table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Major 2026 federal business deadlines (confirm with the IRS; weekends shift dates).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Who</th>
                  <th className="px-4 py-3 font-semibold">What</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Jan 15, 2026</td>
                  <td className="px-4 py-2">Individuals/corps</td>
                  <td className="px-4 py-2">Q4 2025 estimate due</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Feb 2, 2026</td>
                  <td className="px-4 py-2">Employers/payers</td>
                  <td className="px-4 py-2">W-2s and 1099-NEC to recipients + IRS</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Mar 16, 2026</td>
                  <td className="px-4 py-2">S corps/partnerships</td>
                  <td className="px-4 py-2">1120-S + 1065 due (or extend)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Apr 15, 2026</td>
                  <td className="px-4 py-2">Individuals/C corps</td>
                  <td className="px-4 py-2">1040 + Schedule C, 1120, Q1 estimate</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Jun 15, 2026</td>
                  <td className="px-4 py-2">All estimators</td>
                  <td className="px-4 py-2">Q2 estimate due</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Sep 15, 2026</td>
                  <td className="px-4 py-2">All estimators</td>
                  <td className="px-4 py-2">Q3 estimate + extended 1120-S/1065</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Oct 15, 2026</td>
                  <td className="px-4 py-2">Individuals/corps</td>
                  <td className="px-4 py-2">Extended 1040/1120 due</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Jan 15, 2027</td>
                  <td className="px-4 py-2">Individuals</td>
                  <td className="px-4 py-2">Q4 2026 estimate due</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: sizing Q2 after a hot spring</h2>
          <p className="mt-3">
            A consultant paid $4,000 with her Q1 voucher based on $30,000 of projected quarterly
            profit. By June, actual first-half profit hits $90,000 — a $150,000 annual pace. Her
            combined marginal rate (income + SE tax) is roughly 35%, so the half-year need is
            about $31,500; she has paid $4,000. She sends a $12,000 Q2 voucher (catching up plus a
            cushion) and calendars similar Q3/Q4 payments, avoiding a $5,000+ underpayment penalty
            at ~8% on the shortfall. The takeaway: re-project every quarter from real{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              bookkeeping
            </Link>{" "}
            instead of dividing last year by four. Employers layer payroll deposits (see our{" "}
            <Link href="/payroll-taxes-employer-guide" className="text-amber-200 underline underline-offset-2">
              payroll guide
            </Link>
            ) on top of these owner-level estimates.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Payroll and information returns</h2>
          <p className="mt-3">
            Payroll deposits run on their own clock — monthly or semiweekly via EFTPS depending on
            your lookback liability — with quarterly Form 941 filings and annual Forms 940, W-2,
            and W-3. Information returns peak in January: 1099-NEC for contractors paid $600+ and
            W-2s for employees go out around the end of January each year. State deadlines for
            sales tax, unemployment insurance, and annual reports run parallel; calendar them with
            your secretary of state and revenue agency when you complete our{" "}
            <Link href="/hiring-first-employee-checklist" className="text-amber-200 underline underline-offset-2">
              hiring checklist
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What if a deadline falls on a weekend?</h3>
              <p className="mt-1">It shifts to the next business day. The March 15 S-corp deadline, for example, moves when the 15th is a Sunday.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does an extension delay payment?</h3>
              <p className="mt-1">No. Extensions delay paperwork, not payment — pay the estimate of what you owe by the original date to stop interest.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">First year with no prior return — what safe harbor?</h3>
              <p className="mt-1">Use 90% of the current year&apos;s projected bill and true up quarterly as actuals arrive.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Are state estimates separate?</h3>
              <p className="mt-1">Yes. Most income-tax states run parallel quarterly estimates with their own vouchers — calendar both systems.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. 2026 dates reflect current IRS
            announcements; confirm before filing. Read our full{" "}
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
