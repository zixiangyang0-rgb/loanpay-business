import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LLC vs. S Corp Taxes in 2026: Which Saves You More? | LoanPay Business",
  description:
    "LLC vs. S corp taxation in 2026: self-employment tax mechanics, reasonable salary, QBI interaction, Form 1120-S costs, and a $150K worked comparison.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/llc-vs-s-corp-taxes",
  },
};

export default function LlcVsScorpPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          formation &amp; tax &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          LLC vs. S Corp Taxes: The 2026 Comparison
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          An LLC is a legal shell; S corp is a tax election inside it. The real question is
          whether payroll tax on a reasonable salary plus compliance costs beats paying
          self-employment tax on everything.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">The core mechanics</h2>
          <p className="mt-3">
            A single-member LLC defaults to disregarded status: every dollar of net profit is
            self-employment income, taxed at 15.3% on 92.35% of profit (12.4% Social Security up
            to the $184,500 wage base for 2026, plus 2.9% Medicare on everything), on top of
            income tax. A multi-member LLC defaults to partnership treatment with the same
            pass-through logic on Form 1065. Elect S corporation status with Form 2553 and the
            picture changes: you become an employee of your own company, pay FICA only on your
            W-2 salary, and take remaining profit as distributions generally free of
            self-employment tax. Income tax still applies to all of it. The trade is payroll
            administration, an annual Form 1120-S return with K-1s, state quirks (California, for
            example, layers a minimum tax plus a net-income tax on S corps), and the IRS
            reasonable-compensation rule that stops owners from paying themselves $20,000 on
            $200,000 of profit.
          </p>
          <p className="mt-3">
            The 20% qualified business income (QBI) deduction under Section 199A remains available
            for 2026 within income thresholds, but note the interaction: S-corp salary is not
            QBI-eligible, so a higher salary that protects you from audit scrutiny shrinks the
            QBI base. Model both effects together, not in isolation. For the underlying SE-tax
            math, our sister site&apos;s{" "}
            <a
              href="https://tax.loanpaylogic.com/self-employment-tax-calculator"
              className="text-amber-200 underline underline-offset-2"
            >
              self-employment tax calculator
            </a>{" "}
            shows how the 15.3% applies dollar by dollar.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Side-by-side comparison</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Default LLC taxation vs. S corp election for an owner-operator.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Default LLC</th>
                  <th className="px-4 py-3 font-semibold">LLC + S election</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">SE/payroll tax base</td>
                  <td className="px-4 py-2">100% of net profit</td>
                  <td className="px-4 py-2">W-2 salary only</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Owner payroll required</td>
                  <td className="px-4 py-2">No</td>
                  <td className="px-4 py-2">Yes, reasonable salary</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Main returns</td>
                  <td className="px-4 py-2">Schedule C or 1065</td>
                  <td className="px-4 py-2">1120-S + W-2 + 1040</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Extra annual cost</td>
                  <td className="px-4 py-2">Baseline</td>
                  <td className="px-4 py-2">Often $1,500–$4,000 (payroll + 1120-S)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Best fit</td>
                  <td className="px-4 py-2">Under ~$60–80K profit</td>
                  <td className="px-4 py-2">Steady profit above that range</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: $150,000 of net profit</h2>
          <p className="mt-3">
            Assume a consultant nets $150,000 before owner compensation. As a disregarded
            single-member LLC, SE-taxable earnings are 92.35% of $150,000 = $138,525. SE tax at
            15.3% is roughly $21,194 (Social Security portion stays under the $184,500 base, so
            the full rate applies). As an S corp paying a $75,000 reasonable salary, payroll tax
            is 15.3% of $75,000 ≈ $11,475, split between employer and employee halves on the
            payroll returns. Gross payroll-tax saving: about $9,719. Subtract roughly $1,800 for
            payroll service plus $2,000 for the 1120-S preparation, and the net saving is near
            $5,900 — before state S-corp costs and any QBI reduction from the lower distribution
            base. At $60,000 of profit the same math barely breaks even, which is why most
            practitioners cite a $60,000–$80,000 profit threshold before electing. See our{" "}
            <Link href="/s-corp-election-guide" className="text-amber-200 underline underline-offset-2">
              S corp election guide
            </Link>{" "}
            for Form 2553 deadlines (March 15 for calendar-year filers; 75 days for new entities)
            and late-election relief under Rev. Proc. 2013-30.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">When the default LLC still wins</h2>
          <p className="mt-3">
            Early-stage, volatile, or loss-heavy businesses usually stay default: losses flow
            straight to the personal return, there is no payroll to run in a bad quarter, and
            retirement contributions and health deductions stay simple. Real-estate investors
            rarely elect S status because it complicates refinancing and blocks certain
            loss-treatment options. And if most profit must be salary anyway (a solo professional
            whose market wage equals nearly all revenue), the election buys paperwork with almost
            no saving. Revisit the question each year with your accountant once profit stabilizes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do I form an S corp or elect it?</h3>
              <p className="mt-1">You form an LLC or corporation under state law, then elect S tax treatment with Form 2553. There is no separate federal &quot;S corp&quot; to incorporate.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is a reasonable salary?</h3>
              <p className="mt-1">What comparable employers pay for similar work in your market — often 30–50% of profit for service firms. Document comps; the IRS enforces this.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I switch back if it does not pay?</h3>
              <p className="mt-1">Yes, you can revoke the election, but generally must wait several years before re-electing. Model carefully before filing.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does S status avoid income tax?</h3>
              <p className="mt-1">No. It can reduce payroll/SE tax on distributions, but all profit still faces income tax on the owners&apos; returns.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. 2026 thresholds cited (Social
            Security base $184,500) reflect current announcements; confirm before filing. Read our
            full{" "}
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
