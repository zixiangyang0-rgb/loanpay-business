import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "SBA 7(a) vs Bank Loan Calculator 2026: Fees, Rates & True Cost | LoanPay Business",
  description:
    "Compare SBA 7(a) vs conventional bank loans in 2026: guarantee fees, interest caps, terms, monthly payments, approval odds, and a worked $350,000 cost example.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/sba-7a-vs-bank-loan-calculator",
  },
};

const FAQS = [
  {
    question: "Is an SBA 7(a) loan cheaper than a conventional bank loan?",
    answer:
      "It depends on how long you hold the loan. The SBA guarantee fee adds 2 to 3.75 percent of the guaranteed portion upfront plus an annual service fee near 0.55 percent, so a short loan you repay in two years can cost more than a plain bank term loan. Held for seven to ten years, the longer SBA term usually lowers the monthly payment enough to outweigh the fees, especially for borrowers who cannot get a long bank term on their own.",
  },
  {
    question: "How much is the SBA guarantee fee in 2026?",
    answer:
      "For most standard 7(a) loans the upfront fee is tiered by loan size and maturity: roughly 2 percent of the guaranteed portion on the smallest loans, rising to 3 to 3.75 percent on larger multi-year loans above $150,000, plus an ongoing fee near 0.55 percent of the outstanding guaranteed balance each year. The fee can usually be financed into the loan. Confirm the current fiscal-year schedule with your lender before you sign.",
  },
  {
    question: "Which is faster: SBA 7(a) or a bank loan?",
    answer:
      "A conventional bank loan is almost always faster, often closing in two to six weeks, because only the bank underwrites it. A standard 7(a) typically takes 45 to 90 days because the lender documents SBA eligibility on top of credit underwriting. SBA Express, capped at $500,000 with a 50 percent guarantee, shortens that to about 30 to 45 days but still trails a straight bank approval.",
  },
  {
    question: "Can I get a bank loan if the SBA turns me down?",
    answer:
      "Yes, and the reverse is also common. Banks decline SBA proposals that fail eligibility rules such as size standards, excluded industries, or lack of repayment ability, but the same borrower can still win a conventional loan with strong collateral and cash flow. Conversely, banks approve many 7(a) borrowers they would reject conventionally because the 75 to 85 percent federal guarantee absorbs most of the loss.",
  },
  {
    question: "Do both loan types require a personal guarantee and collateral?",
    answer:
      "In practice, yes for most small businesses. SBA loans require personal guarantees from owners of 20 percent or more and a lien on business assets, with additional collateral when available. Conventional bank loans impose the same or stricter requirements, often adding blanket liens, outside collateral, or larger down payments of 20 to 30 percent compared with roughly 10 percent on many 7(a) deals.",
  },
  {
    question: "When should I choose the bank loan instead of the SBA?",
    answer:
      "Choose the bank loan when you qualify for a competitive fixed rate, need money in under a month, will repay within three to five years, or want to avoid SBA paperwork and fees. Choose the 7(a) when you need a 10 to 25 year term, a lower down payment, weaker collateral, or approval strength that only the federal guarantee can provide.",
  },
];

export default function Sba7aVsBankPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          funding &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          SBA 7(a) vs Bank Loan Calculator: True Cost Compared
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Same borrower, same $350,000 request, two very different offers. This guide compares
          rates, guarantee fees, monthly payments, speed, and approval odds so you can see which
          loan is genuinely cheaper for your timeline.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">The one difference that drives everything</h2>
          <p className="mt-3">
            A conventional bank loan puts 100 percent of the risk on the bank, so the bank protects
            itself with shorter terms, larger down payments, stricter collateral, and faster rejections
            when cash flow looks thin. An SBA 7(a) loan is still made and serviced by a bank, but the
            federal government guarantees 85 percent of loans up to $150,000 and 75 percent above that,
            absorbing most of the loss if you default. That single guarantee explains every other
            difference on this page: longer repayment periods of up to 10 years for working capital and
            25 years for real estate, down payments near 10 percent instead of 20 to 30 percent, approval
            for borrowers with thinner collateral, and in exchange an upfront guarantee fee plus an annual
            service fee that conventional loans never charge. If you already understand the base program,
            start with our{" "}
            <Link href="/sba-7a-loans-guide" className="text-amber-200 underline underline-offset-2">
              SBA 7(a) loans guide
            </Link>{" "}
            and then use this comparison to price the SBA premium against a straight bank offer.
          </p>
          <p className="mt-3">
            Think of the choice as insurance pricing. The guarantee fee is the premium you pay for the
            government to co-sign your loan. For a strong borrower who already qualifies for a five-year
            bank note at a good rate, that insurance may not be worth buying. For a growing company that
            needs ten years to keep payments affordable, lacks hard collateral, or was already declined
            conventionally, the same fee unlocks financing that would not exist otherwise. The worked
            example below makes that trade-off concrete with real monthly payments and total interest.
          </p>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">Side by side: rates, fees, and terms for 2026</h2>
          <p className="mt-3">
            Most 7(a) loans carry variable rates capped at Prime plus a size-based spread: up to Prime
            plus 6.5 percent on the smallest loans, stepping down to Prime plus 3.0 percent above
            $350,000, with Prime near 6.75 percent in early 2026. Strong borrowers typically negotiate
            one to three points below the ceiling. Conventional bank term loans price similarly for
            prime borrowers, often as fixed rates between roughly 7 and 12 percent depending on credit,
            collateral, and term, but without any guarantee fee. The structural gap is maturity: banks
            rarely extend unsecured working capital beyond three to seven years, while the SBA routinely
            approves ten years and stretches real estate to 25 years, which cuts the monthly payment
            dramatically even when the headline rate looks identical.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                SBA 7(a) versus conventional bank loan, typical 2026 ranges. Confirm Prime and fees with your lender.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">SBA 7(a)</th>
                  <th className="px-4 py-3 font-semibold">Bank term loan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Maximum amount</td>
                  <td className="px-4 py-2">$5,000,000</td>
                  <td className="px-4 py-2">Varies by bank, often $25K to $3M</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Rate structure</td>
                  <td className="px-4 py-2">Usually variable, capped at Prime + 3.0 to 6.5%</td>
                  <td className="px-4 py-2">Fixed or variable, typically 7 to 12%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Upfront fee</td>
                  <td className="px-4 py-2">SBA guarantee fee ~2 to 3.75% of guaranteed portion</td>
                  <td className="px-4 py-2">Origination 0.5 to 2%, no guarantee fee</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Ongoing fee</td>
                  <td className="px-4 py-2">~0.55% yearly on guaranteed balance</td>
                  <td className="px-4 py-2">None</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Max term</td>
                  <td className="px-4 py-2">10 yrs (25 yrs real estate)</td>
                  <td className="px-4 py-2">Usually 1 to 7 yrs (up to 10 real estate)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Down payment</td>
                  <td className="px-4 py-2">Often ~10%</td>
                  <td className="px-4 py-2">Often 20 to 30%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Close time</td>
                  <td className="px-4 py-2">45 to 90 days (Express 30 to 45)</td>
                  <td className="px-4 py-2">14 to 45 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Fee math: where the SBA premium really lands</h2>
          <p className="mt-3">
            Take a $350,000 standard 7(a) loan with a 75 percent guarantee. The guaranteed portion equals
            $262,500, so a 3 percent upfront tier implies about $7,875 due at closing, which most lenders
            let you finance into the balance rather than pay in cash. Add the lender&apos;s own origination
            or packaging charge of roughly 1 to 2 percent, or $3,500 to $7,000, plus the annual service fee
            near 0.55 percent of the outstanding guaranteed balance, which starts near $1,444 per year and
            declines as you amortize. A comparable bank loan skips the $7,875 and the annual fee entirely
            and charges only its own origination. That means the SBA route starts roughly $8,000 to $10,000
            behind on day one before interest even accrues, and the gap only makes sense if the longer term
            saves you more in cash flow or unlocks approval at all.
          </p>
          <p className="mt-3">
            Prepayment rules sharpen the comparison. Standard 7(a) loans with maturities under 15 years
            generally carry no SBA prepayment penalty, so a borrower who expects a liquidity event within
            two or three years can exit without extra cost beyond interest already paid. Longer-maturity
            7(a) loans may impose a declining fee in the first few years. Bank loans vary widely: some
            charge flat two to five percent prepayment penalties, yield maintenance, or minimum-interest
            clauses that dwarf the SBA schedule. Always compare the prepayment paragraph line by line, not
            just the headline rate, and model total cost over your realistic hold period rather than the
            full stated term. For smaller or revolving needs, also compare our{" "}
            <Link href="/business-line-of-credit-guide" className="text-amber-200 underline underline-offset-2">
              business line of credit guide
            </Link>{" "}
            and{" "}
            <Link href="/sba-microloans-guide" className="text-amber-200 underline underline-offset-2">
              SBA microloans guide
            </Link>
            , because drawing only what you need can beat either term structure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked calculator example: $350,000 over 10 vs 5 years</h2>
          <p className="mt-3">
            Assume Prime at 6.75 percent and both offers priced at 9.5 percent for simplicity. Option A is a
            $350,000 SBA 7(a) over 10 years: the monthly principal and interest payment is about $4,465,
            total interest over the full term approaches $186,000, and the financed guarantee fee near
            $7,875 plus the declining annual service fee adds roughly $9,000 to $12,000 in SBA-specific
            cost. Option B is a $350,000 bank term loan over 5 years at the same rate: the monthly payment
            jumps to about $7,350, but total interest falls to roughly $91,000 with no guarantee fee. The
            SBA payment is nearly $2,900 per month lighter, which can be the difference between comfortable
            coverage and a covenant breach for a business netting $12,000 monthly before debt service.
          </p>
          <p className="mt-3">
            Now run the same numbers with a three-year exit. If you repay after 36 payments, the SBA route
            has cost about $89,000 in interest plus the $7,875 fee and roughly $3,600 in annual service
            charges, while the bank route has cost about $53,000 in interest plus a $3,500 origination. The
            bank wins by more than $40,000 because you paid for ten-year flexibility you never used. The
            lesson is practical: match the product to your hold period. Use the SBA when you genuinely need
            seven to ten years of runway, for example to acquire a competitor documented in our{" "}
            <Link href="/how-to-value-small-business" className="text-amber-200 underline underline-offset-2">
              business valuation guide
            </Link>{" "}
            or to buy equipment you will operate for a decade (see our{" "}
            <Link href="/equipment-financing-guide" className="text-amber-200 underline underline-offset-2">
              equipment financing guide
            </Link>
            ). Use the bank loan when cash flow supports a five-year amortization and speed matters more
            than payment relief.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Approval, collateral, and speed trade-offs</h2>
          <p className="mt-3">
            Underwriting explains why many borrowers pay the SBA premium willingly. A bank lending its own
            money demands strong debt-service coverage, usually 1.2 times or better, seasoned cash flow,
            personal credit near 680 or higher, and hard collateral with a comfortable margin. The 7(a)
            guarantee lets the same bank approve coverage near 1.15 times, younger operating history with a
            credible plan, credit in the mid-600s with compensating strengths, and collateral shortfalls
            that would kill a conventional request. The price is documentation: business plan with use of
            proceeds, two to three years of business and personal returns, interim statements, debt
            schedule, owner resumes, and personal financial statements from every 20 percent owner, plus
            SBA forms the bank completes on your behalf. Files stall on document ping-pong, so answering
            within 24 hours is the fastest way to shorten the 45 to 90 day timeline. If you cannot wait,
            negotiate a bank bridge or line first and refinance eligible debt into the 7(a) later.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">How to choose in ten minutes</h2>
          <p className="mt-3">
            First, verify eligibility for both paths: confirm you meet SBA size standards, are not in an
            excluded industry, and can show repayment ability, then ask your bank what conventional terms
            you actually qualify for today, not the advertised best case. Second, model both offers over
            your realistic hold period with the same spreadsheet: monthly payment, total interest to exit,
            upfront fees, annual SBA service charges, and any prepayment penalty. Third, stress test
            coverage at 80 percent of projected cash flow; if the five-year bank payment breaches 1.2
            times coverage but the ten-year SBA payment holds, the SBA is buying genuine safety. Finally,
            weigh speed against savings: a bank loan that funds payroll next month can beat a cheaper SBA
            loan that funds next quarter. Get both term sheets in writing before you pay for appraisals or
            packaging, and confirm the fiscal-year fee schedule, Prime base, and fixed versus variable
            options on each sheet.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is an SBA 7(a) loan cheaper than a conventional bank loan?</summary>
              <p className="mt-1">It depends on how long you hold the loan. The SBA guarantee fee adds 2 to 3.75 percent of the guaranteed portion upfront plus an annual service fee near 0.55 percent, so a short loan you repay in two years can cost more than a plain bank term loan. Held for seven to ten years, the longer SBA term usually lowers the monthly payment enough to outweigh the fees.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">How much is the SBA guarantee fee in 2026?</summary>
              <p className="mt-1">For most standard 7(a) loans the upfront fee is tiered by loan size and maturity: roughly 2 percent of the guaranteed portion on the smallest loans, rising to 3 to 3.75 percent on larger multi-year loans above $150,000, plus an ongoing fee near 0.55 percent of the outstanding guaranteed balance each year. The fee can usually be financed into the loan.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Which is faster: SBA 7(a) or a bank loan?</summary>
              <p className="mt-1">A conventional bank loan is almost always faster, often closing in two to six weeks, because only the bank underwrites it. A standard 7(a) typically takes 45 to 90 days because the lender documents SBA eligibility on top of credit underwriting. SBA Express shortens that to about 30 to 45 days.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I get a bank loan if the SBA turns me down?</summary>
              <p className="mt-1">Yes, and the reverse is also common. Banks decline SBA proposals that fail eligibility rules such as size standards or excluded industries, but the same borrower can still win a conventional loan with strong collateral and cash flow. Conversely, banks approve many 7(a) borrowers they would reject conventionally because the 75 to 85 percent federal guarantee absorbs most of the loss.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do both loan types require a personal guarantee and collateral?</summary>
              <p className="mt-1">In practice, yes for most small businesses. SBA loans require personal guarantees from owners of 20 percent or more and a lien on business assets. Conventional bank loans impose the same or stricter requirements, often adding blanket liens or larger down payments of 20 to 30 percent compared with roughly 10 percent on many 7(a) deals.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">When should I choose the bank loan instead of the SBA?</summary>
              <p className="mt-1">Choose the bank loan when you qualify for a competitive fixed rate, need money in under a month, will repay within three to five years, or want to avoid SBA paperwork and fees. Choose the 7(a) when you need a 10 to 25 year term, a lower down payment, weaker collateral, or approval strength that only the federal guarantee can provide.</p>
            </details>
          </div>
        </section>
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
            <li>
              <Link className="underline" href="/sba-7a-loans-guide">SBA 7(a) Loans Guide</Link> — rates, limits, and how to apply.
            </li>
            <li>
              <Link className="underline" href="/business-line-of-credit-guide">Business Line of Credit Guide</Link> — when revolving beats term debt.
            </li>
            <li>
              <Link className="underline" href="/equipment-financing-guide">Equipment Financing Guide</Link> — loans versus leases for equipment.
            </li>
            <li>
              <Link className="underline" href="/sba-microloans-guide">SBA Microloans Guide</Link> — smaller SBA loans up to $50,000.
            </li>
          </ul>
        </nav>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal, tax, or lending advice. Prime, SBA fee tiers, and bank
            pricing change frequently. Confirm current numbers with your lender. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "SBA 7(a) vs Bank Loan Calculator 2026: Fees, Rates & True Cost | LoanPay Business", description: "Compare SBA 7(a) vs conventional bank loans in 2026: guarantee fees, interest caps, terms, monthly payments, approval odds, and a worked $350,000 cost example.", url: "https://business.loanpaylogic.com/sba-7a-vs-bank-loan-calculator" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "SBA 7(a) vs Bank Loan Calculator 2026: Fees, Rates & True Cost | LoanPay Business", url: "https://business.loanpaylogic.com/sba-7a-vs-bank-loan-calculator" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
