import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "SBA Microloans Guide 2026: Up to $50,000 for Tiny Firms | LoanPay Business",
  description:
    "SBA microloans in 2026: up to $50,000 through nonprofit intermediaries, 8–13% rates, who qualifies, what they fund, and how to apply step by step.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/sba-microloans-guide",
  },
};

export default function SbaMicroPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          funding &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          SBA Microloans Guide: Small Money, Real Terms
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          When $10,000–$50,000 is exactly enough: nonprofit lenders, hands-on coaching, and rates
          between roughly 8% and 13% for borrowers banks pass over.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">How microloans work</h2>
          <p className="mt-3">
            The SBA funds nonprofit intermediary lenders — community development organizations,
            not banks — which then make loans up to $50,000 directly to small businesses. Average
            microloans run far smaller, often near $15,000–$20,000. Proceeds cover working
            capital, inventory, supplies, furniture, fixtures, machinery, and equipment, but
            generally not real estate or refinancing existing debt. Terms top out around six
            years, rates typically land between 8% and 13%, and collateral plus a personal
            guarantee are usually required. The standout feature is coaching: intermediaries bundle
            training, business-plan help, and bookkeeping guidance with the money, which suits
            first-time borrowers building the records our{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              bookkeeping guide
            </Link>{" "}
            describes.
          </p>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">Who they fit — and who should look elsewhere</h2>
          <p className="mt-3">
            Microloans fit startups, home-based businesses, childcare providers, food carts,
            cleaning services, and other tiny firms that need equipment or inventory but lack the
            two-year history and collateral for a{" "}
            <Link href="/sba-7a-loans-guide" className="text-amber-200 underline underline-offset-2">
              7(a) loan
            </Link>
            . They also serve borrowers rebuilding credit who can show cash flow and character. Skip
            them when you need real estate, want to refinance old debt, or need more than $50,000
            — compare 7(a) Small, Express, or a{" "}
            <Link href="/business-line-of-credit-guide" className="text-amber-200 underline underline-offset-2">
              business line of credit
            </Link>{" "}
            instead. Because each intermediary sets its own application and may serve only certain
            counties, start with the SBA microloan intermediary list for your state.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Microloan vs. neighboring options.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Option</th>
                  <th className="px-4 py-3 font-semibold">Size</th>
                  <th className="px-4 py-3 font-semibold">Speed &amp; fit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">SBA microloan</td>
                  <td className="px-4 py-2">Up to $50,000</td>
                  <td className="px-4 py-2">Weeks; startups + coaching</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">SBA Express</td>
                  <td className="px-4 py-2">Up to $500,000</td>
                  <td className="px-4 py-2">~30–45 days; established firms</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Business card 0% intro</td>
                  <td className="px-4 py-2">Limits vary</td>
                  <td className="px-4 py-2">Days; small planned buys</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Equipment financing</td>
                  <td className="px-4 py-2">Asset value</td>
                  <td className="px-4 py-2">Days; the machine secures it</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the $25,000 food trailer</h2>
          <p className="mt-3">
            Ana needs $25,000 for a used trailer retrofit plus initial inventory. Her intermediary
            approves a 5-year microloan at 10%: monthly payment is about $531, total interest near
            $6,865. She brings a one-page plan, three months of farmers-market sales records, a
            personal budget, and two vendor quotes. The lender pairs funding with four counseling
            sessions where Ana sets up separate accounts (see our{" "}
            <Link href="/business-bank-account-guide" className="text-amber-200 underline underline-offset-2">
              bank account guide
            </Link>
            ), prices every menu item above food-cost targets, and builds the repayment into her
            weekly cash sweep. Eighteen months of on-time payments later, that history plus clean
            statements position her for a larger 7(a) loan on a commissary kitchen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Application checklist</h2>
          <p className="mt-3">
            Expect to provide a business plan or loan-purpose statement, personal and business
            tax returns if available, recent bank statements, cash-flow projections for 12
            months, quotes for equipment, and a personal financial statement. Weak spots to fix
            first: unexplained overdrafts, missing licenses (check our{" "}
            <Link href="/business-licenses-permits-guide" className="text-amber-200 underline underline-offset-2">
              licenses guide
            </Link>
            ), and no separate business account. Ask each intermediary about its rate, maximum
            term, collateral expectations, and counseling requirements before applying — terms
            legitimately differ by lender within SBA rules.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How fast can I get the money?</summary>
              <p className="mt-1">Often a few weeks from complete application to funding — faster than 7(a), slower than a card or merchant advance.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I get more than $50,000?</summary>
              <p className="mt-1">Not from this program — $50,000 is the hard cap. Larger needs belong in 7(a) or 504 territory.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I need perfect credit?</summary>
              <p className="mt-1">No. Intermediaries weigh character, cash flow, and coaching participation alongside credit — that is the program&apos;s point.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can microloans refinance debt?</summary>
              <p className="mt-1">Generally no. They fund new working capital and assets; refinancing belongs in 7(a) or conventional workouts.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Intermediary terms vary; confirm with
            the SBA and your lender. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "SBA Microloans Guide 2026: Up to $50,000 for Tiny Firms | LoanPay Business", description: "SBA microloans in 2026: up to $50,000 through nonprofit intermediaries, 8–13% rates, who qualifies, what they fund, and how to apply step by step.", url: "https://business.loanpaylogic.com/sba-microloans-guide" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"How fast can I get the money?","answer":"Often a few weeks from complete application to funding — faster than 7(a), slower than a card or merchant advance."}, {"question":"Can I get more than $50,000?","answer":"Not from this program — $50,000 is the hard cap. Larger needs belong in 7(a) or 504 territory."}, {"question":"Do I need perfect credit?","answer":"No. Intermediaries weigh character, cash flow, and coaching participation alongside credit — that is the program’s point."}, {"question":"Can microloans refinance debt?","answer":"Generally no. They fund new working capital and assets; refinancing belongs in 7(a) or conventional workouts."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "SBA Microloans Guide 2026: Up to $50,000 for Tiny Firms | LoanPay Business", url: "https://business.loanpaylogic.com/sba-microloans-guide" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
