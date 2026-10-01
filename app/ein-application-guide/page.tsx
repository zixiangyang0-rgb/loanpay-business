import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "EIN Application Guide 2026: Free IRS Filing & Scam Warnings | LoanPay Business",
  description:
    "Get your Employer Identification Number free from the IRS in 2026: online instant approval, fax and mail options, Form SS-4 tips, and how to avoid $50–$300 EIN scams.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/ein-application-guide",
  },
};

export default function EinGuidePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          formation &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          EIN Application Guide: Free in Minutes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          An Employer Identification Number identifies your business to the IRS. It is always free
          directly from the IRS — any site charging for it is selling you typing, not a number.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Do you need one?</h2>
          <p className="mt-3">
            You need an EIN if you have employees, operate as a corporation or multi-member LLC,
            file employment or excise returns, or maintain a Keogh or SEP retirement plan. Banks
            almost always require one to open a business account, and licensing agencies and
            payment processors frequently ask for it. Even single-member LLCs with no employees
            usually get one: it lets you give vendors and clients a business number instead of
            your Social Security number and keeps payroll setup ready the day you hire. One EIN
            per responsible party per day is the IRS limit, and each distinct legal entity needs
            its own number — a sole proprietorship and its later LLC do not share.
          </p>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">How to apply: online, fax, mail, phone</h2>
          <p className="mt-3">
            The IRS online EIN assistant at irs.gov is the fastest path: US-based applicants with
            a Social Security number or ITIN answer questions in one session and receive the EIN
            on screen immediately. Download and save the CP 575 confirmation letter at once — the
            IRS issues it only once. The online tool runs limited hours (historically weekday
            mornings through late night Eastern, shorter weekend windows), so apply during
            operating hours and complete it in one sitting; it does not save progress. Applicants
            who cannot use the online tool complete paper Form SS-4 (current revision December
            2025): fax to 855-641-6935 domestically for turnaround in about 4 business days, or
            mail to the EIN Operation in Cincinnati for roughly 4 weeks. International applicants
            without a US presence apply by phone at 267-941-1099. The responsible party must be
            an individual who controls the entity — not another company — which is the most common
            rejection cause.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                EIN application methods compared.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Method</th>
                  <th className="px-4 py-3 font-semibold">Who</th>
                  <th className="px-4 py-3 font-semibold">Speed</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Online at irs.gov</td>
                  <td className="px-4 py-2">US + SSN/ITIN</td>
                  <td className="px-4 py-2">Immediate on screen</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Fax Form SS-4</td>
                  <td className="px-4 py-2">Anyone</td>
                  <td className="px-4 py-2">~4 business days</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">Mail Form SS-4</td>
                  <td className="px-4 py-2">Anyone</td>
                  <td className="px-4 py-2">~4 weeks</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Phone 267-941-1099</td>
                  <td className="px-4 py-2">International only</td>
                  <td className="px-4 py-2">During the call</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: Priya&apos;s bakery LLC</h2>
          <p className="mt-3">
            Priya&apos;s articles of organization are approved Tuesday morning. That evening she
            opens irs.gov directly (not a search ad), selects &quot;Limited Liability
            Company,&quot; enters one member, lists herself as responsible party with her SSN, and
            selects &quot;started a new business.&quot; Fifteen minutes later her EIN appears on
            screen; she downloads the confirmation letter, emails it to her bank, and opens the
            business checking account Thursday with the letter plus her filed articles. Total IRS
            cost: $0. Had she clicked a look-alike site, she would have paid $175 for the same
            submission. Next she follows our{" "}
            <Link href="/business-bank-account-guide" className="text-amber-200 underline underline-offset-2">
              business bank account guide
            </Link>{" "}
            and{" "}
            <Link href="/hiring-first-employee-checklist" className="text-amber-200 underline underline-offset-2">
              hiring checklist
            </Link>{" "}
            when seasonal help starts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Spotting EIN scams</h2>
          <p className="mt-3">
            Third-party sites designed to look official routinely charge $50–$300 to &quot;file&quot;
            the free application — the FTC has warned that such practices may violate federal law.
            Protect yourself: type irs.gov yourself instead of clicking ads, never pay an EIN fee
            to anyone, and know the IRS never emails or texts EIN offers. If you already paid a
            filer, check whether they actually obtained a number in your entity&apos;s name, keep
            the confirmation letter they should have forwarded, and do not buy a second number —
            duplicate EINs create tax-account chaos. Lost your letter? Call the Business and
            Specialty Tax Line at 800-829-4933 to verify the number; if you must file before it
            arrives, write &quot;Applied For&quot; plus the application date in the EIN box.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is the EIN really free?</summary>
              <p className="mt-1">Yes — every IRS method (online, fax, mail, phone) is free. Anyone charging a fee is a third-party filer, not the IRS.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Form first or EIN first?</summary>
              <p className="mt-1">Form the LLC first, then apply — the online assistant asks for your legal entity details and formation state.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can I get two EINs for one business?</summary>
              <p className="mt-1">No. One entity, one EIN. If you received duplicates by mistake, call the IRS rather than using both.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does an EIN change my taxes?</summary>
              <p className="mt-1">No. It identifies the business; your tax treatment follows your entity type and elections. See our LLC vs. S corp guide.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. IRS hours, fax numbers, and forms
            change; confirm at irs.gov. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "EIN Application Guide 2026: Free IRS Filing & Scam Warnings | LoanPay Business", description: "Get your Employer Identification Number free from the IRS in 2026: online instant approval, fax and mail options, Form SS-4 tips, and how to avoid $50–$300 EIN scams.", url: "https://business.loanpaylogic.com/ein-application-guide" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Is the EIN really free?","answer":"Yes — every IRS method (online, fax, mail, phone) is free. Anyone charging a fee is a third-party filer, not the IRS."}, {"question":"Form first or EIN first?","answer":"Form the LLC first, then apply — the online assistant asks for your legal entity details and formation state."}, {"question":"Can I get two EINs for one business?","answer":"No. One entity, one EIN. If you received duplicates by mistake, call the IRS rather than using both."}, {"question":"Does an EIN change my taxes?","answer":"No. It identifies the business; your tax treatment follows your entity type and elections. See our LLC vs. S corp guide."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "EIN Application Guide 2026: Free IRS Filing & Scam Warnings | LoanPay Business", url: "https://business.loanpaylogic.com/ein-application-guide" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
