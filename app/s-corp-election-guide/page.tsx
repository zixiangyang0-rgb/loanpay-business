import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "S Corp Election Guide 2026: Form 2553 Deadlines & Salary Rules | LoanPay Business",
  description:
    "Elect S corp status in 2026: Form 2553 eligibility, March 15 and 75-day deadlines, how to file by fax or mail, reasonable salary rules, and late-election relief.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/s-corp-election-guide",
  },
};

export default function ScorpElectionPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          formation &amp; tax &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          S Corp Election Guide: Form 2553 in 2026
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          One form changes how the IRS taxes your LLC or corporation. File it on time, pay
          yourself a defensible salary, and keep the payroll and return calendar it creates.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Who can elect</h2>
          <p className="mt-3">
            Eligible electors are domestic corporations and domestic LLCs that qualify as small
            business corporations: 100 or fewer shareholders, all individuals (with limited trust
            exceptions), US citizens or residents, one class of stock, and no ineligible business
            such as certain banks or insurers. Every shareholder must consent in writing on the
            form. A sole proprietor must first form an LLC or incorporate — you cannot elect S
            status as an unregistered freelancer. LLCs file Form 2553 directly; no separate Form
            8832 classification election is needed for the standard LLC-to-S-corp path, because
            Part IV of Form 2553 handles it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Deadlines that decide your tax year</h2>
          <p className="mt-3">
            For an existing calendar-year business, Form 2553 is due by March 15 of the election
            year (2 months and 15 days into the year). A newly formed entity has 75 days from
            formation to elect for its first year — for example, a March 1 formation faces
            roughly a mid-May deadline. File later and the election takes effect the following
            January 1 instead. The form cannot be e-filed; mail or fax it to the IRS service
            center for your state and keep proof of transmission. Filing is free. Because the
            2026 calendar-year deadline has passed for existing businesses, late filers should
            read the relief section below and consider filing now for a January 1, 2027 effective
            date.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Form 2553 timing scenarios for calendar-year filers.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Situation</th>
                  <th className="px-4 py-3 font-semibold">Deadline</th>
                  <th className="px-4 py-3 font-semibold">Effective</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Existing business, elect 2026</td>
                  <td className="px-4 py-2">March 15, 2026</td>
                  <td className="px-4 py-2">Jan 1, 2026</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">New entity formed Mar 1, 2026</td>
                  <td className="px-4 py-2">~75 days after formation</td>
                  <td className="px-4 py-2">Formation date</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Filed after deadline</td>
                  <td className="px-4 py-2">Anytime in 2026</td>
                  <td className="px-4 py-2">Jan 1, 2027</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Late relief granted</td>
                  <td className="px-4 py-2">Up to 3 yrs + 75 days</td>
                  <td className="px-4 py-2">Requested year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $90,000 plumber</h2>
          <p className="mt-3">
            Dan&apos;s plumbing LLC nets $90,000. He elects S status effective January 1, sets a
            $55,000 salary based on local journeyman-master wage postings, and runs biweekly
            payroll ($2,115 per check before withholding). Payroll tax at 15.3% on $55,000 is about
            $8,415 versus roughly $12,710 of SE tax on the full profit — a gross saving near
            $4,300. His payroll service costs $600 per year and the 1120-S return costs $1,500, so
            the net first-year benefit is about $2,200, growing as profit rises while salary stays
            defensible. He files Form 941 quarterly, issues his own W-2 in January, and the S corp
            files Form 1120-S by March 15 with a K-1 for the remaining $35,000 of pass-through
            profit. Compare this with staying default-LLC using the{" "}
            <a
              href="https://tax.loanpaylogic.com/self-employment-tax-calculator"
              className="text-amber-200 underline underline-offset-2"
            >
              self-employment tax calculator
            </a>{" "}
            before deciding — the election only wins when savings clear its fixed costs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Reasonable salary and ongoing calendar</h2>
          <p className="mt-3">
            The IRS requires shareholder-employees to take reasonable compensation (fact sheet
            FS-2008-25 and decades of case law). Document your number with job postings, salary
            surveys, and hours worked; officers who take zero salary while distributing six
            figures are the classic audit trigger. Once elected, the calendar expands: payroll
            deposits (monthly or semiweekly depending on size), quarterly Forms 941, annual Forms
            940 and W-2/W-3, state payroll accounts, and Form 1120-S each March 15. Budget the
            payroll service ($40–$150 per month) and the higher 1120-S preparation fee every year,
            not just the election year. Our{" "}
            <Link href="/payroll-taxes-employer-guide" className="text-amber-200 underline underline-offset-2">
              payroll taxes employer guide
            </Link>{" "}
            and{" "}
            <Link href="/small-business-tax-calendar-2026" className="text-amber-200 underline underline-offset-2">
              2026 tax calendar
            </Link>{" "}
            map every date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Missed the deadline? Late-election relief</h2>
          <p className="mt-3">
            Revenue Procedure 2013-30 lets many businesses request a late S election up to 3 years
            and 75 days after the intended effective date. Write &quot;FILED PURSUANT TO REV. PROC.
            2013-30&quot; at the top of Form 2553, attach shareholder consents and a reasonable-cause
            statement, and file the returns consistent with S status. Most clean late filings are
            granted, but relief is discretionary — file promptly once you discover the miss and
            have your accountant review eligibility, especially if ownership changed or prior
            returns conflict with S treatment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I e-file Form 2553?</h3>
              <p className="mt-1">No. As of 2026 it is still mail-or-fax only. Keep your fax confirmation or certified-mail receipt.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do I need a new EIN after electing?</h3>
              <p className="mt-1">No. The LLC keeps its legal name, EIN, and bank accounts; only the tax treatment changes.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can a single-member LLC elect S status?</h3>
              <p className="mt-1">Yes — it is one of the most common electors. All members (just you) consent, and you move from Schedule C to 1120-S plus W-2.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How do I revoke the election?</h3>
              <p className="mt-1">File a revocation with majority-shareholder consent. Revocation generally bars re-election for several years, so plan carefully.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Confirm current IRS instructions for
            Form 2553 before filing. Read our full{" "}
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
