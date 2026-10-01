import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Value a Small Business 2026: SDE, Comps & DCF | LoanPay Business",
  description:
    "Value a small business in 2026: seller's discretionary earnings multiples, comparable sales, asset and DCF approaches, add-backs, and a coffee-shop worked example.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/how-to-value-small-business",
  },
};

export default function ValuationPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          funding &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          How to Value a Small Business
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Buyers pay for transferable cash flow, not your hours. Three valuation lenses, the
          add-backs that define SDE, and a worked example you can adapt.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">The three lenses</h2>
          <p className="mt-3">
            The income approach values future cash flow: most Main Street deals use a multiple of
            seller&apos;s discretionary earnings (SDE) — net profit plus one owner&apos;s salary,
            perks, personal expenses run through the business, nonrecurring costs, and
            depreciation/amortization. Healthy small businesses commonly trade near 2–4× SDE, with
            absentee-run or high-growth firms commanding more. The market approach checks
            comparable sales of similar businesses (broker databases price by industry, size, and
            region) as a reality anchor. The asset approach sums tangible and identifiable
            intangible value minus liabilities — the floor for asset-heavy firms and the method
            behind SBA collateral review in our{" "}
            <Link href="/sba-7a-loans-guide" className="text-amber-200 underline underline-offset-2">
              7(a) guide
            </Link>
            . Triangulate all three; any single method lies in special cases.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Add-backs: where value hides</h2>
          <p className="mt-3">
            Start from pre-tax profit in clean{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              books
            </Link>
            , then add back the owner&apos;s W-2/ draws, personal auto, travel, and family phone
            lines run through the company, one-time legal settlements or storm repairs, and
            non-cash depreciation. Subtract a market-rate manager salary if the owner works the
            counter full-time (a buyer hiring that role must pay it) and normalize rent to market
            if the owner charges the company off-market rates. Document every add-back with
            receipts — buyers and lenders discount undocumented adjustments to zero.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                From reported profit to SDE.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Line</th>
                  <th className="px-4 py-3 font-semibold">Treatment</th>
                  <th className="px-4 py-3 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Pre-tax profit</td>
                  <td className="px-4 py-2">Start here</td>
                  <td className="px-4 py-2">Baseline cash engine</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Owner salary + perks</td>
                  <td className="px-4 py-2">Add back</td>
                  <td className="px-4 py-2">Buyer&apos;s discretion</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">One-time costs</td>
                  <td className="px-4 py-2">Add back</td>
                  <td className="px-4 py-2">Won&apos;t recur</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Market manager wage</td>
                  <td className="px-4 py-2">Subtract</td>
                  <td className="px-4 py-2">Replacement cost is real</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">= SDE × multiple</td>
                  <td className="px-4 py-2">2–4× typical</td>
                  <td className="px-4 py-2">Indicated value range</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $120,000-SDE coffee shop</h2>
          <p className="mt-3">
            A neighborhood café reports $55,000 pre-tax profit. Add back the owner&apos;s $45,000
            salary, $8,000 of personal vehicle and travel, a $7,000 one-time flood repair, and
            $5,000 depreciation → $120,000 SDE. But the owner works 50 hours weekly as manager; a
            hired manager costs $48,000, so adjusted cash flow to an absentee buyer is $72,000.
            At a 2.5–3.5× multiple on SDE for owner-operated food service, indicated value lands
            near $300,000–$420,000 including ~$60,000 of equipment (see our{" "}
            <Link href="/equipment-financing-guide" className="text-amber-200 underline underline-offset-2">
              equipment guide
            </Link>
            ), before working-capital adjustments and lease-transfer risk. A buyer financing
            through 7(a) then tests the payment against that $72,000 absentee cash flow — if debt
            service exceeds roughly 60–70% of it, the price or structure must move.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Raising value before a sale</h2>
          <p className="mt-3">
            Twelve months of preparation routinely adds a full multiple turn: document systems so
            the business runs a week without you, diversify the top customer below 20% of
            revenue, sign the lease or assignment early, clean personal expenses out of the P&amp;L,
            and grow recurring revenue. Get three years of reviewed-quality statements — SBA
            lenders and serious buyers discount messy{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              books
            </Link>{" "}
            hard. For founder-level retirement and home-office interactions with a sale, our
            sister site{" "}
            <a
              href="https://tax.loanpaylogic.com/self-employment-tax-calculator"
              className="text-amber-200 underline underline-offset-2"
            >
              tax.loanpaylogic.com
            </a>{" "}
            covers the personal-tax side; price the business itself on transferable cash.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Revenue multiple or SDE multiple?</h3>
              <p className="mt-1">SDE multiples rule Main Street deals because margins vary wildly. Revenue multiples suit high-growth or SaaS niches with standard margins.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Does inventory add to the price?</h3>
              <p className="mt-1">Usually yes, at cost on top of the cash-flow value — define the count date and valuation method in the purchase agreement.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">Broker or sell myself?</h3>
              <p className="mt-1">Brokers (often ~8–12% on small deals) widen the buyer pool and guard confidentiality; FSBO works for known-buyer transfers with counsel.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-semibold text-white">How do earnouts affect value?</h3>
              <p className="mt-1">They bridge gaps when buyers doubt sustainability — part guaranteed, part contingent. Discount contingent dollars heavily in your head.</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Multiples vary by industry and cycle
            — get a professional valuation for live deals. Read our full{" "}
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
