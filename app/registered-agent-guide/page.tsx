import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Registered Agent Guide 2026: Duties, Rules & Services | LoanPay Business",
  description:
    "Registered agents in 2026: legal duties, who can serve, physical-address rules, multi-state needs, commercial service costs, and what happens if you skip one.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/registered-agent-guide",
  },
};

export default function AgentPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          formation &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Registered Agent Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The mailbox the law trusts: who receives lawsuits and state notices for your company,
          the qualifications they need, and when a $100–$300 service pays for itself.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Duties that make the role serious</h2>
          <p className="mt-3">
            Every LLC and corporation must maintain a registered agent (sometimes called a
            statutory or resident agent) in each state where it is formed or foreign-qualified.
            The agent&apos;s job is narrow and critical: accept service of process, tax notices,
            and annual-report reminders at a physical street address during normal business hours,
            then forward them to you fast. Missed service can produce default judgments you learn
            about from a bank levy; missed state notices can trigger late fees, loss of good
            standing, and eventually administrative dissolution — which strips the liability
            shield our{" "}
            <Link href="/how-to-start-llc-guide" className="text-amber-200 underline underline-offset-2">
              LLC guide
            </Link>{" "}
            builds. Treat the designation as infrastructure, not paperwork.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Who qualifies — and who should not</h2>
          <p className="mt-3">
            Eligible agents are adult residents of the state with a physical address there, or
            companies authorized to serve as commercial agents. That includes you, a co-founder,
            an employee, your attorney — or a hired service. P.O. boxes and virtual-mailbox-only
            addresses generally fail the physical-presence test. Serving yourself is free and
            common for single-state home businesses, but it publishes your address, chains you to
            business-hours availability, and breaks the day you move or travel. Multi-state
            operators, frequent movers, and owners who value privacy usually hire out.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Self-service vs. commercial registered agent.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">Yourself</th>
                  <th className="px-4 py-3 font-semibold">Commercial service</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Cost</td>
                  <td className="px-4 py-2">$0</td>
                  <td className="px-4 py-2">Often $100–$300/yr per state</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Privacy</td>
                  <td className="px-4 py-2">Your address is public</td>
                  <td className="px-4 py-2">Service address listed</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Availability</td>
                  <td className="px-4 py-2">You, business hours</td>
                  <td className="px-4 py-2">Staffed office, all states</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Compliance help</td>
                  <td className="px-4 py-2">Self-tracked</td>
                  <td className="px-4 py-2">Reminders + document portal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: two states, one service</h2>
          <p className="mt-3">
            A consulting LLC formed in Texas wins recurring work in Colorado and foreign-qualifies
            there. It needs an agent in both states. Hiring a national service at $150 per state
            per year ($300 total) beats asking a Denver friend who travels half the month — and
            the service&apos;s compliance portal flags both states&apos; annual reports plus the
            Colorado periodic report the owner would otherwise miss. When the owner moves apartments
            within Austin, nothing changes publicly because the service address stays constant;
            had she served herself, state filings in two jurisdictions would need same-week
            updates. Total protection cost: less than one hour of billable time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Changing agents and staying in good standing</h2>
          <p className="mt-3">
            Change agents by filing a statement of change with the secretary of state (small fee;
            it varies by state) and confirming the new agent&apos;s written consent — never leave
            a gap where no qualified agent is on record. Keep forwarding addresses current with
            the agent, open their notices the same day, and calendar annual reports alongside our{" "}
            <Link href="/small-business-tax-calendar-2026" className="text-amber-200 underline underline-offset-2">
              2026 tax calendar
            </Link>
            . If you receive service of process, note the deadline on the summons immediately and
            call counsel — response windows run in days or weeks, not quarters. Pair the agent
            decision with a solid{" "}
            <Link href="/operating-agreement-basics" className="text-amber-200 underline underline-offset-2">
              operating agreement
            </Link>{" "}
            so ownership and authority are clear when documents arrive.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can my registered agent be in another state?</h3>
              <p className="mt-1">No. You need a qualified agent with a physical address in each state where the company is registered.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I use a P.O. box?</h3>
              <p className="mt-1">Generally no — statutes require a physical street address where process can be served in person.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What if my agent resigns?</h3>
              <p className="mt-1">Appoint a successor immediately via the state change filing. Operating without an agent risks loss of good standing.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does the agent handle my taxes?</h3>
              <p className="mt-1">No. They forward notices; preparing returns, payroll, and estimates stays with you and your accountant.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Agent statutes and fees vary by
            state — verify locally. Read our full{" "}
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
