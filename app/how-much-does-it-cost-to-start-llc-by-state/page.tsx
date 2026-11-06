import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import OfficialBox from "../../components/OfficialBox";
import { Byline, GuideSchema } from "../../components/schema";

export const metadata: Metadata = {
  title: "How Much Does It Cost to Start an LLC by State in 2026? | LoanPay Business",
  description:
    "LLC costs by state in 2026: filing fees, annual reports, registered agent, EIN, licenses, and first-year budgets with a state comparison table and worked examples.",
  alternates: {
    canonical: "https://business.loanpaylogic.com/how-much-does-it-cost-to-start-llc-by-state",
  },
};

const guideFaqs: { question: string; answer: string }[] = [
  {
    question: "What is the cheapest state to form an LLC in 2026?",
    answer:
      "The sticker filing fee is lowest in a handful of states, but the cheapest state for you is almost always the state where you live and work. Forming out of state adds a second foreign registration, a second agent, and a second annual report, which wipes out any filing-fee savings.",
  },
  {
    question: "What does an LLC cost per year after formation?",
    answer:
      "Budget for the annual or biennial report, a registered agent if you hire one (often $100 to $300 per year), plus licenses and franchise taxes where they apply. Many founders spend $150 to $600 per year on recurring LLC upkeep before licenses.",
  },
  {
    question: "Do I need a registered agent, and can I be my own?",
    answer:
      "Every state requires one. You can serve as your own agent if you have a physical address in the state and are available on business days, but many founders hire a service for privacy and to avoid missing legal mail. See our registered agent guide before you decide.",
  },
  {
    question: "Is the EIN really free?",
    answer:
      "Yes. The IRS issues EINs free online in minutes. Never pay a third-party site for one. Our EIN application guide walks the official flow.",
  },
  {
    question: "Should I form in Delaware, Nevada, or Wyoming to save money?",
    answer:
      "For most local businesses, no. You still must register as a foreign LLC where you operate, so you pay two states instead of one. Out-of-state formation helps only in narrow cases such as raising venture capital or holding companies, so talk to an attorney first.",
  },
  {
    question: "What first-year budget should a single-member LLC plan?",
    answer:
      "Plan $300 to $1,000 for a lean single-state LLC: filing fee, agent, licenses, operating agreement, and bank setup. Multi-member LLCs or regulated industries should add attorney review and higher license costs.",
  },
];

const STATE_ROWS: { state: string; filing: string; recurring: string; notes: string }[] = [
  { state: "California", filing: "Check SOS", recurring: "Annual tax plus statement", notes: "Highest upkeep; budget carefully" },
  { state: "Texas", filing: "Check SOS", recurring: "No annual report; franchise tax may apply", notes: "Zero personal income tax state" },
  { state: "Florida", filing: "Check SOS", recurring: "Annual report", notes: "Low upkeep for service firms" },
  { state: "New York", filing: "Check SOS", recurring: "Biennial statement; publication rule", notes: "Publication can add hundreds" },
  { state: "Delaware", filing: "Check SOS", recurring: "Annual tax", notes: "Popular for startups raising capital" },
  { state: "Nevada", filing: "Check SOS", recurring: "Annual list plus license", notes: "Higher upkeep than rumors suggest" },
  { state: "Wyoming", filing: "Check SOS", recurring: "Annual license tax", notes: "Low upkeep; strong privacy" },
  { state: "Illinois", filing: "Check SOS", recurring: "Annual report", notes: "Mid-range filing and upkeep" },
];

export default function LlcCostByStatePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          formation &middot; 2026
        </p>
        <h1 className="hero-title mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          How Much Does It Cost to Start an LLC by State in 2026?
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          The state filing fee is only the first line of your LLC budget. This guide breaks down
          filing fees, annual reports, registered agents, EINs, operating agreements, and licenses
          so you can price your own state correctly.
        </p>
        <p className="mt-4 text-xs text-slate-500">Updated: October 2026</p>
        <Byline updated="October 2026" />
      </section>
      <p className="mt-4 text-center text-xs text-slate-400">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only</a>
      </p>

      <article className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="glass-card rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">The short answer: budget $300 to $1,000 for year one</h2>
          <p className="mt-3">
            A lean single-state LLC usually costs $300 to $1,000 in its first year. The state filing
            fee is the anchor, but four add-ons decide the real total: a registered agent service
            (often $100 to $300 per year if you hire one), state annual or biennial reports and any
            franchise tax, city and industry licenses, and one-time setup items such as an operating
            agreement review and bank opening deposit. The IRS EIN itself is free. Start with the
            full sequence in our{" "}
            <Link href="/how-to-start-llc-guide" className="text-amber-200 underline underline-offset-2">
              step-by-step LLC formation guide
            </Link>
            , then price each line below for your own state.
          </p>
          <p className="mt-3">
            The most common budgeting mistake is copying a national average. Filing fees, report
            cycles, publication rules, and franchise taxes differ so much that two founders with
            identical businesses can pay totals hundreds of dollars apart. Always confirm the current
            fee schedule on your secretary of state website before you file, because legislatures
            adjust fees and surcharges every year.
          </p>
        </section>
        <AdSlot format="in-article" slot="TODO-business-inarticle-1" />

        <section>
          <h2 className="text-xl font-bold text-white">Every cost line, explained</h2>
          <p className="mt-3">
            Think of LLC costs in three layers. Formation costs happen once: the articles of
            organization filing fee, optional expedited processing, name reservation if you need to
            hold a name, and certified copies if your bank asks for them. Setup costs happen once
            but are easy to forget: an operating agreement template or attorney review, a business
            license application, a domain and basic website, and the opening deposit for your
            business bank account. Recurring costs repeat every year: the annual or biennial report,
            the registered agent fee, state franchise or entity taxes where they exist, and license
            renewals. Our{" "}
            <Link href="/startup-costs-checklist" className="text-amber-200 underline underline-offset-2">
              startup costs checklist
            </Link>{" "}
            shows how these LLC lines fit into the wider launch budget.
          </p>
          <p className="mt-3">
            The registered agent deserves its own decision. Every state requires one with a physical
            address in the formation state. You can serve as your own agent at no cost if you qualify
            and are reliably available on business days, but your address becomes public record and
            missed legal mail can cost your good standing. A commercial service typically charges
            $100 to $300 per year and forwards lawsuits, tax notices, and report reminders. Read our{" "}
            <Link href="/registered-agent-guide" className="text-amber-200 underline underline-offset-2">
              registered agent guide
            </Link>{" "}
            before choosing, because switching agents mid-year means filing a change form and paying
            another fee in most states.
          </p>
          <p className="mt-3">
            Two items should cost you nothing or nearly nothing. The EIN is free directly from the
            IRS online, and paid EIN sites are simply reselling a free form, so follow our{" "}
            <Link href="/ein-application-guide" className="text-amber-200 underline underline-offset-2">
              EIN application guide
            </Link>{" "}
            instead. The operating agreement can start from a reputable template at low cost, though
            multi-member LLCs should pay for attorney review covering ownership splits, voting,
            capital contributions, distributions, buyouts, and dissolution. That review is the
            cheapest dispute insurance a partnership will ever buy, and our{" "}
            <Link href="/operating-agreement-basics" className="text-amber-200 underline underline-offset-2">
              operating agreement basics
            </Link>{" "}
            explains the clauses that matter most.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">State comparison: where the money goes</h2>
          <p className="mt-3">
            The table below compares the shape of LLC costs across popular states. Exact dollar
            amounts change, so treat the secretary of state as the source of truth and use this
            table to understand which states carry heavy recurring upkeep versus a one-time filing.
            A low filing fee with a steep annual tax can cost more over three years than a higher
            filing fee with minimal upkeep.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
              <caption className="px-4 py-3 text-left text-slate-400">
                LLC cost shape by popular state. Confirm current amounts with each secretary of state.
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-slate-200">
                  <th className="px-4 py-3 font-semibold">State</th>
                  <th className="px-4 py-3 font-semibold">Filing fee</th>
                  <th className="px-4 py-3 font-semibold">Recurring upkeep</th>
                  <th className="px-4 py-3 font-semibold">Watch out</th>
                </tr>
              </thead>
              <tbody>
                {STATE_ROWS.map((row) => (
                  <tr key={row.state} className="border-b border-white/5 last:border-0">
                    <td className="px-4 py-2 font-medium text-white">{row.state}</td>
                    <td className="px-4 py-2">{row.filing}</td>
                    <td className="px-4 py-2">{row.recurring}</td>
                    <td className="px-4 py-2">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            California founders should model the annual franchise obligation from day one, while New
            York founders must price the publication requirement, which varies by county and can
            exceed the filing fee itself. Texas and Florida look lean on reports but still require
            licenses and tax accounts. Delaware, Nevada, and Wyoming attract holding companies and
            startups with specific legal reasons, yet a local service business formed there still
            pays foreign registration back home. If you are choosing between entity types as well as
            states, compare the ongoing tax picture in our{" "}
            <Link href="/llc-vs-s-corp-taxes" className="text-amber-200 underline underline-offset-2">
              LLC vs. S corp taxes guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Two worked first-year budgets</h2>
          <p className="mt-3">
            Elena launches a solo bookkeeping practice from home in Florida. She files online herself,
            serves as her own registered agent, gets a free EIN, uses a template operating agreement,
            and buys a $60 county business tax receipt plus a $100 bank opening deposit that stays
            her money. Her true sunk cost is the state filing fee plus $60 in licenses and a few
            hours of paperwork, landing near $200 out the door. Year two upkeep is just the annual
            report plus the license renewal, so her ongoing LLC cost stays under $250 per year.
          </p>
          <p className="mt-3">
            Marcus and Priya launch a two-founder home-services LLC in California with employees.
            They hire a $150 registered agent for privacy, pay $400 for attorney review of their
            operating agreement, file the state articles, register a fictitious business name for
            $50, buy $300 in city and trade licenses, and open a business checking account. Their
            first-year LLC spend lands near $1,000 before insurance and equipment, and they calendar
            the annual statement plus the state yearly tax obligation from the start. The gap between
            Elena and Marcus is not the entity, it is the state, the licenses, and the partnership
            protections. Price your own version line by line rather than borrowing someone
            else&apos;s total.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Five ways founders overpay</h2>
          <p className="mt-3">
            First, paying for an EIN through a lookalike site. Second, forming out of state without a
            legal reason and paying two states forever. Third, skipping the operating agreement and
            paying for the dispute later. Fourth, ignoring license renewals and annual reports until
            penalties and reinstatement fees arrive. Fifth, expediting a filing that was never on the
            critical path. A calm two-week timeline with the free IRS EIN, a self-filed article, and
            one license check beats a rushed $800 formation package almost every time.
          </p>
        </section>

        <AdSlot format="display" slot="TODO-business-display-1" />
        <AdSlot format="multiplex" slot="TODO-business-multiplex-1" />
        <section>
          <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What is the cheapest state to form an LLC in 2026?</summary>
              <p className="mt-1">The sticker filing fee is lowest in a handful of states, but the cheapest state for you is almost always the state where you live and work. Forming out of state adds a second foreign registration, a second agent, and a second annual report, which wipes out any filing-fee savings.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What does an LLC cost per year after formation?</summary>
              <p className="mt-1">Budget for the annual or biennial report, a registered agent if you hire one (often $100 to $300 per year), plus licenses and franchise taxes where they apply. Many founders spend $150 to $600 per year on recurring LLC upkeep before licenses.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Do I need a registered agent, and can I be my own?</summary>
              <p className="mt-1">Every state requires one. You can serve as your own agent if you have a physical address in the state and are available on business days, but many founders hire a service for privacy and to avoid missing legal mail. See our registered agent guide before you decide.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Is the EIN really free?</summary>
              <p className="mt-1">Yes. The IRS issues EINs free online in minutes. Never pay a third-party site for one. Our EIN application guide walks the official flow.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">Should I form in Delaware, Nevada, or Wyoming to save money?</summary>
              <p className="mt-1">For most local businesses, no. You still must register as a foreign LLC where you operate, so you pay two states instead of one. Out-of-state formation helps only in narrow cases such as raising venture capital or holding companies, so talk to an attorney first.</p>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer font-semibold text-white">What first-year budget should a single-member LLC plan?</summary>
              <p className="mt-1">Plan $300 to $1,000 for a lean single-state LLC: filing fee, agent, licenses, operating agreement, and bank setup. Multi-member LLCs or regulated industries should add attorney review and higher license costs.</p>
            </details>
          </div>
        </section>
        <OfficialBox
          items={[
            {
              label: "SBA: Register your business",
              href: "https://www.sba.gov/business-guide/launch-your-business/register-your-business",
              description: "SBA overview of state registration steps behind the fees in this guide.",
            },
            {
              label: "SCORE free mentoring & workshops",
              href: "https://www.score.org/",
              description: "SBA-backed nonprofit with free mentors and local workshops for founders.",
            },
          ]}
        />
        <nav aria-label="Related guides" className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold">Keep reading</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
            <li>
              <Link className="underline" href="/how-to-start-llc-guide">How to Start an LLC</Link> — the step-by-step sequence behind the fees.
            </li>
            <li>
              <Link className="underline" href="/startup-costs-checklist">Startup Costs Checklist</Link> — budget beyond the filing fee.
            </li>
            <li>
              <Link className="underline" href="/registered-agent-guide">Registered Agent Guide</Link> — the yearly cost many founders forget.
            </li>
            <li>
              <Link className="underline" href="/dba-registration-guide">DBA Registration Guide</Link> — trade-name fees by state.
            </li>
          </ul>
        </nav>

        <section className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5 text-xs leading-relaxed text-amber-100/90">
          <p>
            This is general education, not legal or tax advice. Fees change by state and year, so
            confirm current amounts with your secretary of state. Read our full{" "}
            <Link href="/disclaimer" className="underline underline-offset-2">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </article>
      <GuideSchema
        title="How Much Does It Cost to Start an LLC by State in 2026? | LoanPay Business"
        description="LLC costs by state in 2026: filing fees, annual reports, registered agent, EIN, licenses, and first-year budgets with a state comparison table and worked examples."
        slug="how-much-does-it-cost-to-start-llc-by-state"
        faqs={guideFaqs}
      />
      <p className="mt-6 text-center text-xs text-slate-500">
        By LoanPay Editorial · Updated October 2026 · Reviewed for accuracy ·{" "}
        <a href="/disclaimer" className="underline underline-offset-2">Educational use only — not legal or tax advice</a>
      </p>
    </div>
  );
}
