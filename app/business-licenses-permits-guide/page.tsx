import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Licenses & Permits Guide 2026 | LoanPay Business",
  description:
    "Business licenses and permits in 2026: federal, state, and local layers, seller's permits, professional licenses, home-business rules, and renewal tracking.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/business-licenses-permits-guide",
  },
};

export default function LicensesPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          formation &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Business Licenses &amp; Permits Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The LLC filing is not permission to operate. Federal, state, and local licenses stack —
          here is how to find every layer that applies to you.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">The three layers</h2>
          <p className="mt-3">
            Federal licensing touches a short list of industries: alcohol, tobacco, and firearms;
            aviation; broadcasting; interstate trucking and motor carriers; investment advising;
            and businesses handling wildlife, mining, or nuclear materials. Everyone else looks to
            the state layer: the general business license or tax registration, seller&apos;s
            permits for collecting sales tax, professional licenses for fields like cosmetology,
            contracting, childcare, food handling, and health services, plus industry permits for
            signage, health inspections, and fire safety. The local layer — city or county business
            tax certificates, zoning clearance, home-occupation permits, and health-department
            approvals — is the one founders most often miss. Start from your formation checklist
            in our{" "}
            <Link href="/how-to-start-llc-guide" className="text-amber-200 underline underline-offset-2">
              LLC guide
            </Link>
            , then verify each layer with the issuing agency, not a blog list.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Finding your exact list</h2>
          <p className="mt-3">
            Work top-down: check the SBA license-and-permit tool and your state&apos;s business
            portal for state requirements, then call your city clerk and county for local ones,
            then confirm industry-specific credentials with the relevant board. Home-based
            businesses need zoning and HOA clearance plus any client-visit restrictions; food and
            retail need health permits and seller&apos;s permits before the first transaction;
            contractors need trade licenses that often require exams, experience hours, and
            bonding. Fees vary widely and renewals scatter across the calendar — build the
            tracker now, not when a renewal lapses mid-contract.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                License layers and where to verify them.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Layer</th>
                  <th className="px-4 py-3 font-semibold">Examples</th>
                  <th className="px-4 py-3 font-semibold">Verify with</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Federal</td>
                  <td className="px-4 py-2">ATF, FAA, FCC, FMCSA permits</td>
                  <td className="px-4 py-2">Issuing federal agency</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">State</td>
                  <td className="px-4 py-2">Seller&apos;s permit, trade license</td>
                  <td className="px-4 py-2">State portal + boards</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Local</td>
                  <td className="px-4 py-2">Business tax cert, zoning, health</td>
                  <td className="px-4 py-2">City clerk + county</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Ongoing</td>
                  <td className="px-4 py-2">Renewals, inspections, CE hours</td>
                  <td className="px-4 py-2">Calendar + agency notices</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the home bakery</h2>
          <p className="mt-3">
            A cottage-food baker needs five permissions before selling a loaf: state cottage-food
            registration with an approved-foods list, a county health-department kitchen
            inspection, a city home-occupation permit confirming customer pickups are allowed,
            a seller&apos;s permit for taxable prepared-food sales, and a food-handler card for
            each worker. Total first-year fees run roughly $200–$500 in many jurisdictions, but
            the binding constraint is time — inspections book weeks out. She schedules the
            inspection before buying packaging inventory, posts the permit with her{" "}
            <Link href="/dba-registration-guide" className="text-amber-200 underline underline-offset-2">
              DBA certificate
            </Link>
            , and files renewal dates alongside the deadlines in our{" "}
            <Link href="/small-business-tax-calendar-2026" className="text-amber-200 underline underline-offset-2">
              2026 tax calendar
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Operating without one: the real exposure</h2>
          <p className="mt-3">
            Unlicensed operation risks stop-work orders, fines that compound daily, voided
            contracts, failed health inspections published online, and lenders or landlords
            pulling approvals when the gap surfaces. Payment processors and marketplaces
            increasingly verify credentials before releasing funds. Keep copies of every license
            with your formation records, display what the law requires displayed, and calendar
            renewals 60 days early — agencies rarely remind you twice. When expanding to a new
            city or adding employees, re-run the full check from our{" "}
            <Link href="/hiring-first-employee-checklist" className="text-amber-200 underline underline-offset-2">
              hiring checklist
            </Link>
            , because headcount and location both trigger fresh requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">LLC filed — am I licensed?</h3>
              <p className="mt-1">No. Formation creates the entity; licenses grant permission to do specific work. You almost always need both.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Do online businesses need local licenses?</h3>
              <p className="mt-1">Often yes — your home city usually requires registration where work is performed, plus seller&apos;s permits where you have nexus.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What is a seller&apos;s permit?</h3>
              <p className="mt-1">State authorization to collect sales tax on taxable goods (and some services). Selling without one where required brings back taxes plus penalties.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How do I track renewals?</h3>
              <p className="mt-1">One spreadsheet: license, agency, renewal date, fee, and confirmation number — reviewed monthly with your bookkeeping.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Requirements vary by state, city,
            and industry — verify with each agency. Read our full{" "}
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
