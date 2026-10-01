import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Business Insurance Types Guide 2026: What You Actually Need | LoanPay Business",
  description:
    "Business insurance in 2026: general liability, professional liability, workers' comp, commercial auto, property, cyber, and BOPs — with cost signals and a retail example.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/business-insurance-types-guide",
  },
};

export default function BizInsurancePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          running it &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Business Insurance Types Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Transfer the risks you cannot afford: liability, property, people, and data. What each
          policy covers, what it costs, and how to stack them without overlap.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">The core policies, decoded</h2>
          <p className="mt-3">
            General liability covers third-party bodily injury and property damage — the customer
            who slips, the shelf your installer scratches. Professional liability (errors and
            omissions) covers faulty advice or services, essential for consultants, agencies, and
            trades that design as well as build. Workers&apos; compensation pays injured
            employees&apos; medical costs and lost wages and is mandatory in nearly every state
            from the first hire (see our{" "}
            <Link href="/hiring-first-employee-checklist" className="text-amber-200 underline underline-offset-2">
              hiring checklist
            </Link>
            ). Commercial property covers your space, inventory, and equipment; commercial auto
            covers work vehicles your personal policy excludes the moment business use begins.
            Cyber liability covers breach response and notification costs that now threaten even
            five-person shops holding customer data. Many small firms bundle liability plus
            property into a Business Owner&apos;s Policy (BOP) at a discount.
          </p>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">What coverage costs and what sets the price</h2>
          <p className="mt-3">
            A low-risk home-based service business often pays a few hundred dollars annually for
            general liability; retail, food, and contracting risks run into the low thousands;
            workers&apos; comp and commercial auto scale with payroll and fleet size. Insurers
            price on revenue, payroll by job class, location, claims history, and safety programs.
            Raise deductibles you can fund from reserves, bundle with one carrier, pay annually
            instead of financed installments, and document training and maintenance — each move
            trims premiums. Re-shop every 2–3 years with your loss runs in hand rather than
            auto-renewing blind.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                Policy stack for a typical small operation.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Policy</th>
                  <th className="px-4 py-3 font-semibold">Covers</th>
                  <th className="px-4 py-3 font-semibold">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">General liability / BOP</td>
                  <td className="px-4 py-2">Injury, damage, basic property</td>
                  <td className="px-4 py-2">First policy for most</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Professional liability</td>
                  <td className="px-4 py-2">Faulty work or advice</td>
                  <td className="px-4 py-2">Services + trades that design</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Workers&apos; comp</td>
                  <td className="px-4 py-2">Employee injuries</td>
                  <td className="px-4 py-2">Legally required with staff</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Commercial auto</td>
                  <td className="px-4 py-2">Work vehicles</td>
                  <td className="px-4 py-2">Any business driving</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Cyber liability</td>
                  <td className="px-4 py-2">Breach costs, notifications</td>
                  <td className="px-4 py-2">Holding customer data</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: the boutique gym&apos;s stack</h2>
          <p className="mt-3">
            A 2,000-square-foot gym with four trainers carries a BOP ($1,800 per year covering
            $1M/$2M liability plus $100,000 of equipment and improvements), workers&apos; comp at
            roughly 3% of $160,000 trainer payroll ($4,800), professional liability for training
            advice ($900), and cyber coverage for its member database ($600) — about $8,100
            annually, or $675 per month. When a client strains a back and alleges faulty
            programming, professional liability — not general liability — funds the defense,
            which is why matching policy to risk matters more than stacking limits. The owner
            reviews certificates from every subcontracted instructor, requires additional-insured
            status from the cleaning vendor, and logs incidents the day they happen. For deeper
            personal-line primers (home, auto, health) that often overlap with business needs,
            see our sister site{" "}
            <a
              href="https://insurance.loanpaylogic.com"
              className="text-amber-200 underline underline-offset-2"
            >
              insurance.loanpaylogic.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Buying without gaps or doubles</h2>
          <p className="mt-3">
            List every contract that mandates coverage — leases, lender agreements, and client
            master services agreements routinely require specific limits and additional-insured
            endorsements. Align renewal dates, confirm certificates actually issue (not just
            binders), and keep a coverage map in your{" "}
            <Link href="/bookkeeping-basics-guide" className="text-amber-200 underline underline-offset-2">
              records
            </Link>
            : policy, limit, deductible, renewal, agent contact. Exclude what you genuinely
            self-insure (small property deductibles against strong reserves) and never exclude
            what statutes require. An independent agent who shops multiple carriers usually beats
            a captive quote for mixed-risk small businesses.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does my LLC make insurance unnecessary?</summary>
              <p className="mt-1">No. The LLC shields personal assets from business debts; insurance pays the claims themselves. You need both.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Home-based — covered by homeowners?</summary>
              <p className="mt-1">Rarely for business liability, inventory, or client injuries. Add a home-business endorsement or standalone BOP.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is a BOP?</summary>
              <p className="mt-1">A Business Owner&apos;s Policy bundling general liability with commercial property — cheaper than buying each alone for qualifying small firms.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How much liability is enough?</summary>
              <p className="mt-1">$1M per occurrence / $2M aggregate is the common small-business starting point; contracts and risk profile move it up.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice, and not insurance advice. Coverage
            needs vary by state and industry — consult a licensed agent. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Business Insurance Types Guide 2026: What You Actually Need | LoanPay Business", description: "Business insurance in 2026: general liability, professional liability, workers' comp, commercial auto, property, cyber, and BOPs — with cost signals and a retail example.", url: "https://business.loanpaylogic.com/business-insurance-types-guide" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Does my LLC make insurance unnecessary?","answer":"No. The LLC shields personal assets from business debts; insurance pays the claims themselves. You need both."}, {"question":"Home-based — covered by homeowners?","answer":"Rarely for business liability, inventory, or client injuries. Add a home-business endorsement or standalone BOP."}, {"question":"What is a BOP?","answer":"A Business Owner’s Policy bundling general liability with commercial property — cheaper than buying each alone for qualifying small firms."}, {"question":"How much liability is enough?","answer":"$1M per occurrence / $2M aggregate is the common small-business starting point; contracts and risk profile move it up."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "Business Insurance Types Guide 2026: What You Actually Need | LoanPay Business", url: "https://business.loanpaylogic.com/business-insurance-types-guide" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
