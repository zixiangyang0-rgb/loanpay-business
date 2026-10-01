import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "DBA Registration Guide 2026: Trade Names Done Right | LoanPay Business",
  description:
    "Register a DBA in 2026: when a trade name helps, name search, county vs. state filing, publication rules, bank use, renewals, and trademark limits.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/dba-registration-guide",
  },
};

export default function DbaPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          formation &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          DBA Registration Guide
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Doing business as another name: when a DBA helps branding, how filing works
          county-by-county or state-by-state, and what it does not protect.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">What a DBA is — and is not</h2>
          <p className="mt-3">
            A DBA (doing business as), fictitious business name, or trade name lets &quot;Smith
            Ventures LLC&quot; operate publicly as &quot;Maple Street Bakery&quot; or lets sole
            proprietor Jordan Lee invoice as &quot;Lee Lawn Care.&quot; It creates no liability
            shield and no separate tax entity — protection comes from the underlying LLC or
            corporation in our{" "}
            <Link href="/how-to-start-llc-guide" className="text-amber-200 underline underline-offset-2">
              LLC guide
            </Link>
            . What it does create is legal permission to use the name on signage, contracts, bank
            accounts, and advertising, plus a public record linking the trade name to its owner.
            Banks require the filed DBA certificate to open accounts or accept checks in the trade
            name, and many landlords and marketplaces ask for it too.
          </p>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">When a DBA earns its fee</h2>
          <p className="mt-3">
            Common wins: one LLC running two brands (a plumbing company plus a drain-cleaning
            brand) without forming two entities; a descriptive public name shorter than the legal
            one; a sole proprietor adding professionalism without LLC costs (accepting the
            liability trade-off); and franchisees or contractors meeting account-naming rules.
            Skip it when the legal name already works publicly, when each brand needs its own
            liability silo (form separate LLCs instead), or when you actually need exclusive
            rights — a DBA filing grants no trademark protection. Search the USPTO database and
            consider registration before investing in a brand you must own.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                DBA vs. neighboring filings.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Filing</th>
                  <th className="px-4 py-3 font-semibold">Creates</th>
                  <th className="px-4 py-3 font-semibold">Does not create</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">DBA / trade name</td>
                  <td className="px-4 py-2">Right to use the name publicly</td>
                  <td className="px-4 py-2">Liability shield, tax status</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2">LLC formation</td>
                  <td className="px-4 py-2">Separate legal entity</td>
                  <td className="px-4 py-2">Name exclusivity beyond state</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Trademark</td>
                  <td className="px-4 py-2">Brand rights vs. infringers</td>
                  <td className="px-4 py-2">Permission to operate locally</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Worked example: filing in a county system</h2>
          <p className="mt-3">
            An LLC named &quot;Rivera Holdings LLC&quot; wants storefront signage reading
            &quot;Rivera Tax &amp; Books.&quot; The owner searches the county fictitious-name
            database plus the state LLC registry for conflicts, files the DBA application ($40
            fee in this county), and — because the state requires it — publishes the statement
            in an adjudicated local newspaper once weekly for four weeks (about $80). She files
            the affidavit of publication, receives the stamped certificate, and presents it with
            her articles and{" "}
            <Link href="/ein-application-guide" className="text-amber-200 underline underline-offset-2">
              EIN letter
            </Link>{" "}
            to open a second checking account titled in the trade name. Calendar time: five
            weeks, most of it publication. Total: about $120 plus the bank&apos;s minimum
            deposit. She tracks the DBA&apos;s renewal (five years in this county) with her{" "}
            <Link href="/business-licenses-permits-guide" className="text-amber-200 underline underline-offset-2">
              license renewals
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Search, file, publish, renew</h2>
          <p className="mt-3">
            Filing location varies: some states register DBAs centrally with the secretary of
            state, others at each county clerk where you operate — businesses in multiple
            counties may file more than once, so check every jurisdiction. Publication is
            required in several states (notably California and others with newspaper-notice
            rules); missing the window voids the filing. After approval, update the name with
            your bank, payment processor, insurer, and tax accounts; operating under an unfiled
            name can stall deposits and void contracts. Renew on schedule — expirations commonly
            run 3–5 years — and file amendments when ownership or address changes.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can two businesses share one DBA?</summary>
              <p className="mt-1">Sometimes the same name is available in different counties, but identical names in one registry are usually rejected. Search first.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Does a DBA need its own EIN?</summary>
              <p className="mt-1">No. The DBA uses the underlying entity&apos;s EIN and tax accounts — it is a name, not a taxpayer.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">DBA or trademark?</summary>
              <p className="mt-1">File the DBA for permission to operate under the name; register a trademark for exclusive brand rights. Many businesses do both.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Can a sole proprietor get a business account with a DBA?</summary>
              <p className="mt-1">Yes — banks generally accept the filed DBA certificate plus your ID to title an account in the trade name.</p>
            </details>
          </div>
        </section>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal/tax advice. Filing offices, fees, and
            publication rules vary — verify locally. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "DBA Registration Guide 2026: Trade Names Done Right | LoanPay Business", description: "Register a DBA in 2026: when a trade name helps, name search, county vs. state filing, publication rules, bank use, renewals, and trademark limits.", url: "https://business.loanpaylogic.com/dba-registration-guide" })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([{"question":"Can two businesses share one DBA?","answer":"Sometimes the same name is available in different counties, but identical names in one registry are usually rejected. Search first."}, {"question":"Does a DBA need its own EIN?","answer":"No. The DBA uses the underlying entity’s EIN and tax accounts — it is a name, not a taxpayer."}, {"question":"DBA or trademark?","answer":"File the DBA for permission to operate under the name; register a trademark for exclusive brand rights. Many businesses do both."}, {"question":"Can a sole proprietor get a business account with a DBA?","answer":"Yes — banks generally accept the filed DBA certificate plus your ID to title an account in the trade name."}])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "https://business.loanpaylogic.com" }, { name: "DBA Registration Guide 2026: Trade Names Done Right | LoanPay Business", url: "https://business.loanpaylogic.com/dba-registration-guide" }])) }}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
