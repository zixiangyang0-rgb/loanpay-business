import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Equipment Financing Guide 2026: Loans vs. Leases | LoanPay Business",
  description:
    "Finance business equipment in 2026: term loans vs. leases vs. SBA options, Section 179 and bonus depreciation basics, and payment math with examples.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/equipment-financing-guide",
  },
};

export default function EquipmentPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          funding &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Equipment Financing Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The machine pays for itself — if the payment fits the cash it produces. Loans, leases,
          and tax timing compared with payment math you can reuse.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Why equipment borrows differently</h2>
          <p className="mt-3">
            Equipment secures its own loan: the oven, truck, or CNC machine serves as collateral,
            so lenders approve faster, ask for smaller down payments (often 0–20%), and price
            below unsecured rates even for young businesses. Terms usually track useful life —
            3–7 years for technology and vehicles, up to 10+ for heavy machinery — and reputable
            lenders fund in days against a vendor quote. That convenience tempts overbuying.
            Before signing, verify the asset generates incremental margin comfortably above the
            payment; lenders size to collateral value, not to whether your pipeline justifies the
            capacity. Price a smaller used unit and a lease alternative before committing to the
            flagship model.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Loan vs. lease vs. SBA path</h2>
          <p className="mt-3">
            An equipment term loan builds ownership: fixed payments, you claim depreciation, and
            the asset is yours at the end. A lease (operating or capital) trades ownership for
            lower payments, upgrade flexibility, and simpler obsolescence management — ideal for
            technology that ages fast. SBA 7(a) and 504 loans can fund heavier equipment at longer
            terms and lower rates but take weeks (see our{" "}
            <Link href="/sba-7a-loans-guide" className="text-amber-200 underline underline-offset-2">
              7(a) guide
            </Link>
            ). Vendor financing sits between: fast approval at the point of sale, sometimes at
            premium pricing worth comparing against a bank quote.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Equipment funding paths compared.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Path</th>
                  <th className="px-4 py-3 font-semibold">Ownership</th>
                  <th className="px-4 py-3 font-semibold">Best when</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Equipment loan</td>
                  <td className="px-4 py-2">Yours, day one</td>
                  <td className="px-4 py-2">Long-lived assets you will keep</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Operating lease</td>
                  <td className="px-4 py-2">Lessor&apos;s; return/upgrade</td>
                  <td className="px-4 py-2">Tech that obsoletes in 3 yrs</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Capital lease / $1 buyout</td>
                  <td className="px-4 py-2">Effectively yours</td>
                  <td className="px-4 py-2">Want ownership, lower payments</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">SBA 7(a)/504</td>
                  <td className="px-4 py-2">Yours</td>
                  <td className="px-4 py-2">Large tickets, patience for process</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $60,000 delivery van</h2>
          <p className="mt-3">
            A caterer needs a $60,000 refrigerated van producing an estimated $3,000 monthly
            contribution margin. Option A: 5-year equipment loan at 9% with 10% down ($6,000).
            Financed $54,000 → monthly payment ≈ $1,124. Coverage: $3,000 ÷ $1,124 ≈ 2.7× —
            comfortable. Option B: 3-year operating lease at $1,450 per month with a return option
            as refrigeration tech evolves. The loan costs less over five years and leaves an
            owned asset; the lease preserves flexibility if routes are uncertain. She also notes
            the tax layer: Section 179 and bonus depreciation rules for 2026 may let profitable
            businesses expense qualifying equipment faster — permanent 100% bonus depreciation
            provisions apply to eligible assets — but deductions never rescue a purchase the cash
            flow cannot carry. She confirms timing with her accountant and logs payments in her{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              books
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Fine print that bites</h2>
          <p className="mt-3">
            Compare APR-equivalent cost, not just monthly payment: origination fees, interim
            interest, forced insurance, maintenance bundles, end-of-lease buyout formulas, and
            personal guarantees all shift the total. Confirm who insures and maintains the asset —
            lenders usually require comprehensive coverage naming them as loss payee (see our{" "}
            <a
              href="https://insurance.loanpaylogic.com"
              className="text-amber-200 underline underline-offset-2"
            >
              insurance sister site
            </a>{" "}
            for coverage primers and our{" "}
            <Link href="/business-insurance-types-guide" className="text-amber-200 underline underline-offset-2">
              business insurance types guide
            </Link>
            ). Get delivery, installation, and warranty dates in writing before the first payment
            hits, and calendar UCC-lien releases so old collateral does not block future
            borrowing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">New or used equipment?</h3>
              <p className="mt-1">Used often wins on value if inspected and warrantied; new wins on reliability, warranty, and sometimes manufacturer-subsidized rates.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Can I deduct the full cost in year one?</h3>
              <p className="mt-1">Possibly via Section 179 or bonus depreciation for qualifying assets — but limits, profit, and state conformity vary. Ask your accountant.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">What down payment is typical?</h3>
              <p className="mt-1">Often 0–20% for bank equipment loans; stronger collateral and cash flow push it toward zero.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Lease or buy for vehicles?</h3>
              <p className="mt-1">High-mileage work vehicles usually favor buying; image-sensitive low-mileage fleets sometimes lease well. Run both totals.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Tax provisions change; confirm
            Section 179 and depreciation rules for 2026. Read our full{" "}
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
