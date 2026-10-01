import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hiring Your First Employee Checklist 2026 | LoanPay Business",
  description:
    "Hire your first employee in 2026: EIN, state payroll accounts, I-9, W-4, workers' comp, posters, payroll setup, and the true loaded cost of a $50K hire.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/hiring-first-employee-checklist",
  },
};

const CHECKLIST = [
  "Get your EIN free from the IRS and verify your entity and licenses are current.",
  "Register for state withholding, unemployment insurance (SUTA), and workers' comp accounts.",
  "Set up payroll (provider or software) with federal EIN, state IDs, pay schedule, and EFTPS deposits.",
  "Prepare the offer letter: title, duties, at-will status where applicable, pay, schedule, and start date.",
  "Collect Form W-4, state withholding forms, direct-deposit details, and emergency contacts on day one.",
  "Complete Form I-9 employment-eligibility verification within 3 business days; file new-hire reports with your state.",
  "Post required federal and state workplace notices and file the employee handbook acknowledgment.",
  "Run the first payroll: verify withholding, FICA match, and pay-stub delivery before payday.",
];

export default function HiringPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          taxes &amp; payroll &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Hiring Your First Employee Checklist
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Eight steps from EIN to first paycheck: accounts, paperwork, insurance, and payroll —
          plus what a $50,000 salary really costs.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The first-hire checklist</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {CHECKLIST.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Before the offer: accounts and insurance</h2>
          <p className="mt-3">
            Payroll cannot run on an EIN alone. Most states require separate withholding and
            unemployment-insurance registrations (see our{" "}
            <Link href="/payroll-taxes-employer-guide" className="text-amber-200 underline underline-offset-2">
              payroll taxes guide
            </Link>{" "}
            for FUTA/SUTA mechanics), and nearly all require workers&apos; compensation coverage
            before the first hour worked — rates vary by job class, from under 1% of wages for
            clerical work to high single digits for roofing and tree work. Our{" "}
            <Link href="/business-insurance-types-guide" className="text-amber-200 underline underline-offset-2">
              insurance types guide
            </Link>{" "}
            and{" "}
            <a
              href="https://insurance.loanpaylogic.com"
              className="text-amber-200 underline underline-offset-2"
            >
              insurance sister site
            </a>{" "}
            explain the coverage stack. Confirm your{" "}
            <Link href="/business-licenses-permits-guide" className="text-amber-200 underline underline-offset-2">
              licenses
            </Link>{" "}
            allow employees at your location — some home-occupation permits cap headcount.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">True cost of a $50,000 hire</h2>
          <p className="mt-3">
            Salary is the down payment. Employer FICA at 7.65% adds $3,825; FUTA at an effective
            0.6% on the first $7,000 adds $42; SUTA at, say, 3% on a $12,000 state base adds
            $360; workers&apos; comp at 2% adds $1,000. That is $5,227 before benefits, recruiting
            fees, equipment, or paid leave — a loaded cost near $55,200–$58,000 for a no-benefits
            hire, and well past $60,000 with health coverage. Price the role against the revenue
            it protects or produces, keep three months of loaded cost in reserve, and track it
            all in the{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              bookkeeping system
            </Link>
            .
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Loaded-cost build for a $50,000 first hire (illustrative state rates).
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Component</th>
                  <th className="px-4 py-3 font-semibold">Math</th>
                  <th className="px-4 py-3 font-semibold">Annual</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Salary</td>
                  <td className="px-4 py-2">Given</td>
                  <td className="px-4 py-2">$50,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Employer FICA 7.65%</td>
                  <td className="px-4 py-2">$50,000 × 7.65%</td>
                  <td className="px-4 py-2">$3,825</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">FUTA + SUTA (example)</td>
                  <td className="px-4 py-2">$42 + $360</td>
                  <td className="px-4 py-2">$402</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Workers&apos; comp ~2%</td>
                  <td className="px-4 py-2">$50,000 × 2%</td>
                  <td className="px-4 py-2">$1,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Loaded total (pre-benefits)</td>
                  <td className="px-4 py-2">Sum</td>
                  <td className="px-4 py-2">≈ $55,227</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Day-one paperwork that protects you</h2>
          <p className="mt-3">
            Federal law requires I-9 verification within three business days and most states
            demand new-hire reporting within 20 days; late filings draw penalties out of
            proportion to the effort. Keep signed W-4s, state equivalents, and handbook
            acknowledgments in a personnel file separate from medical or I-9 records. Classify
            carefully — calling a supervised, scheduled worker a contractor to skip this chapter
            invites the misclassification liability our{" "}
            <Link href="/contractors-vs-employees-1099-guide" className="text-amber-200 underline underline-offset-2">
              contractors vs. employees guide
            </Link>{" "}
            details. When in doubt between hiring and contracting for a trial role, our{" "}
            <a
              href="https://tax.loanpaylogic.com/self-employment-tax-calculator"
              className="text-amber-200 underline underline-offset-2"
            >
              tax sister site
            </a>{" "}
            shows how the two paths tax identical pay differently.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Employee or contractor for the first role?</h3>
              <p className="mt-1">Scheduled, supervised, core-work roles are usually employees. Project-based specialists with their own clients are often contractors — but test the facts.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How fast must I file the I-9?</h3>
              <p className="mt-1">Section 1 by day one, Section 2 verification within 3 business days of the start date. Keep I-9s separate from personnel files.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do I need workers&apos; comp for one part-timer?</h3>
              <p className="mt-1">In most states, yes from the first employee-hour, with narrow exemptions. Confirm with your state workers&apos; comp board before day one.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Payroll provider or DIY?</h3>
              <p className="mt-1">A provider ($40–$150/month) is usually worth it from hire one — filings, deposits, and W-2s handled beats learning penalties firsthand.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. State thresholds and deadlines
            vary — verify locally. Read our full{" "}
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
