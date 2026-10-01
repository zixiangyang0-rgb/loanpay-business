import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { orgJsonLd, websiteJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "LoanPay Business | Start, Fund, and Run a Small Business",
  description:
    "Free plain-English guides for US small businesses: LLC formation, SBA loans, payroll taxes, bookkeeping, insurance, and day-to-day operations.",
};

type Card = { title: string; description: string; href: string; badge: string };
type Cluster = { id: string; heading: string; blurb: string; cards: Card[] };

const clusters: Cluster[] = [
  {
    id: "formation",
    heading: "Formation — set it up right",
    blurb: "Choose a structure, register it, and open the right accounts before the first sale.",
    cards: [
      {
        title: "How to Start an LLC Guide",
        description: "Seven steps from name search to EIN, operating agreement, and first filings.",
        href: "/how-to-start-llc-guide",
        badge: "Guide",
      },
      {
        title: "LLC vs. S Corp Taxes",
        description: "Pass-through vs. payroll: where the 15.3% SE tax bites and where S status helps.",
        href: "/llc-vs-s-corp-taxes",
        badge: "Guide",
      },
      {
        title: "S Corp Election Guide",
        description: "Form 2553 deadlines, reasonable salary rules, and late-election relief.",
        href: "/s-corp-election-guide",
        badge: "Guide",
      },
      {
        title: "EIN Application Guide",
        description: "Free IRS application in minutes — plus how to spot paid EIN scams.",
        href: "/ein-application-guide",
        badge: "Guide",
      },
      {
        title: "Business Bank Account Guide",
        description: "Separate finances cleanly: documents, account types, and fee traps.",
        href: "/business-bank-account-guide",
        badge: "Guide",
      },
      {
        title: "Business Licenses & Permits Guide",
        description: "Federal, state, and local licenses most small businesses actually need.",
        href: "/business-licenses-permits-guide",
        badge: "Guide",
      },
      {
        title: "DBA Registration Guide",
        description: "When a trade name makes sense, how to file, publish, and renew it.",
        href: "/dba-registration-guide",
        badge: "Guide",
      },
      {
        title: "Registered Agent Guide",
        description: "What an agent does, who can serve, and when to hire a service.",
        href: "/registered-agent-guide",
        badge: "Guide",
      },
      {
        title: "Operating Agreement Basics",
        description: "Ownership, voting, money in and out — the clauses every LLC needs.",
        href: "/operating-agreement-basics",
        badge: "Guide",
      },
    ],
  },
  {
    id: "funding",
    heading: "Funding — borrow smart",
    blurb: "SBA loans, credit lines, cards, and asset financing compared with real cost math.",
    cards: [
      {
        title: "SBA 7(a) Loans Guide",
        description: "Up to $5M guaranteed: eligibility, rates, fees, and how to apply.",
        href: "/sba-7a-loans-guide",
        badge: "Guide",
      },
      {
        title: "SBA Microloans Guide",
        description: "Up to $50,000 through intermediaries for startups and tiny firms.",
        href: "/sba-microloans-guide",
        badge: "Guide",
      },
      {
        title: "Business Line of Credit Guide",
        description: "Revolving credit for gaps and seasonality — draw, repay, repeat.",
        href: "/business-line-of-credit-guide",
        badge: "Guide",
      },
      {
        title: "Business Credit Cards Basics",
        description: "Rewards, 0% intros, and building credit without drowning in APR.",
        href: "/business-credit-cards-basics",
        badge: "Guide",
      },
      {
        title: "Invoice Factoring Explained",
        description: "Turn unpaid invoices into cash: advances, fees, recourse vs. non-recourse.",
        href: "/invoice-factoring-explained",
        badge: "Guide",
      },
      {
        title: "Equipment Financing Guide",
        description: "Loans vs. leases for ovens, trucks, and machines — with payment math.",
        href: "/equipment-financing-guide",
        badge: "Guide",
      },
      {
        title: "Startup Costs Checklist",
        description: "Every one-time and monthly cost to budget before you launch.",
        href: "/startup-costs-checklist",
        badge: "Guide",
      },
      {
        title: "Business Credit Score Guide",
        description: "Dun & Bradstreet, Experian, and FICO SBSS: how scores work and grow.",
        href: "/business-credit-score-guide",
        badge: "Guide",
      },
      {
        title: "How to Value a Small Business",
        description: "SDE multiples, comps, and DCF-lite for buying or selling a shop.",
        href: "/how-to-value-small-business",
        badge: "Guide",
      },
    ],
  },
  {
    id: "taxes",
    heading: "Taxes & Payroll — stay compliant",
    blurb: "Calendars, payroll math, hiring, and deduction rules for 2026.",
    cards: [
      {
        title: "Bookkeeping Basics Guide",
        description: "Chart of accounts, reconciliation rhythm, and records that survive audits.",
        href: "/bookkeeping-basics-guide",
        badge: "Guide",
      },
      {
        title: "Small Business Tax Calendar 2026",
        description: "Every 2026 deadline: estimates, payroll, 1099s, S-corp and C-corp returns.",
        href: "/small-business-tax-calendar-2026",
        badge: "Guide",
      },
      {
        title: "Payroll Taxes Employer Guide",
        description: "FICA, FUTA, SUTA, and withholding on a $1,000 paycheck — fully worked.",
        href: "/payroll-taxes-employer-guide",
        badge: "Guide",
      },
      {
        title: "Hiring Your First Employee Checklist",
        description: "EIN, state accounts, I-9, W-4, workers' comp, and first payroll run.",
        href: "/hiring-first-employee-checklist",
        badge: "Guide",
      },
      {
        title: "Business Meals & Travel Deduction Guide",
        description: "50% meals, lodging, mileage, and the substantiation rules that matter.",
        href: "/business-meals-travel-deduction-guide",
        badge: "Guide",
      },
      {
        title: "Contractors vs. Employees (1099) Guide",
        description: "Behavioral, financial, control tests — plus misclassification penalties.",
        href: "/contractors-vs-employees-1099-guide",
        badge: "Guide",
      },
    ],
  },
  {
    id: "running",
    heading: "Running it — protect and grow",
    blurb: "Insurance and operations essentials once money is moving.",
    cards: [
      {
        title: "Business Insurance Types Guide",
        description: "General liability, professional, workers' comp, commercial auto, and more.",
        href: "/business-insurance-types-guide",
        badge: "Guide",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
      <section className="glass-panel page-aurora rounded-3xl px-8 py-14 text-center sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          business.loanpaylogic.com
        </p>
        <h1 className="hero-title mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
          Start, Fund, and Run Your Small Business
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          LoanPay Business turns confusing formation, funding, tax, and payroll rules into short,
          friendly guides with worked examples. Learn how LLCs work, what SBA loans cost, when
          payroll taxes are due, and how to keep clean books — no signup required.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/how-to-start-llc-guide"
            className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
          >
            Start your LLC guide
          </Link>
          <Link
            href="/sba-7a-loans-guide"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30"
          >
            Explore SBA loans
          </Link>
        </div>
      </section>

      <AdSlot format="display" slot="TODO-business-display-home" />

      {clusters.map((cluster) => (
        <section key={cluster.id} className="mt-12">
          <h2 className="text-2xl font-bold">{cluster.heading}</h2>
          <p className="mt-2 text-sm text-slate-400">{cluster.blurb}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cluster.cards.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="glass-card block rounded-2xl p-6 transition hover:border-amber-200/30"
              >
                <span className="inline-block rounded-full border border-amber-200/30 px-3 py-1 text-xs font-medium text-amber-200">
                  {tool.badge}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="glass-card mt-12 rounded-2xl p-8">
        <h2 className="text-2xl font-bold">Why plan formation, funding, and payroll together?</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          The entity you pick changes how profits are taxed, the loan programs you can use often
          ask for the same financial statements your bookkeeper prepares, and hiring your first
          employee triggers payroll accounts, insurance, and new deadlines all at once. Reading
          these guides as a set helps owners sequence the work: form the entity, get the tax IDs
          and bank accounts, build a bookkeeping habit, line up sensible funding, and only then
          hire. For deeper personal-tax math such as self-employment tax or home-office
          deductions, see our sister site{" "}
          <a
            href="https://tax.loanpaylogic.com/self-employment-tax-calculator"
            className="text-amber-200 underline underline-offset-2"
          >
            tax.loanpaylogic.com
          </a>
          , and for coverage questions see{" "}
          <a
            href="https://insurance.loanpaylogic.com"
            className="text-amber-200 underline underline-offset-2"
          >
            insurance.loanpaylogic.com
          </a>
          .
        </p>
        <p className="mt-4 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
          General education, not legal/tax advice. Rules change often and vary by state. Confirm
          important decisions with a licensed professional. Read our full{" "}
          <Link href="/disclaimer" className="underline underline-offset-2">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
