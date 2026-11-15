import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import BriefingTabs from "../components/BriefingTabs";
import { orgJsonLd, websiteJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "LoanPay Business | Start, Fund, and Run a Small Business",
  description:
    "Free plain-English guides for US small businesses: LLC formation, SBA loans, payroll taxes, bookkeeping, insurance, and day-to-day operations.",
};

type Card = { title: string; description: string; href: string; badge: string };
type Cluster = { id: string; tab: string; heading: string; blurb: string; cards: Card[] };

const clusters: Cluster[] = [
  {
    id: "formation",
    tab: "Formation",
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
      {
        title: "LLC Cost by State",
        description: "Filing fees, annual reports, agents, and first-year budgets compared state by state.",
        href: "/how-much-does-it-cost-to-start-llc-by-state",
        badge: "Guide",
      },
    ],
  },
  {
    id: "funding",
    tab: "Funding",
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
      {
        title: "SBA vs. Bank Loan Calculator",
        description: "Guarantee fees, terms, and monthly payments compared on a $350,000 example.",
        href: "/sba-7a-vs-bank-loan-calculator",
        badge: "Calculator",
      },
    ],
  },
  {
    id: "taxes",
    tab: "Taxes & payroll",
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
    tab: "Running it",
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
  const heroImageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": "https://business.loanpaylogic.com/#hero-image",
    contentUrl: "https://business.loanpaylogic.com/photos/business.webp",
    url: "https://business.loanpaylogic.com/photos/business.webp",
    width: 1600,
    height: 1165,
    caption: "Bakery shop pastry display counter, no people",
    creator: {
      "@type": "Person",
      name: "W.carter",
      url: "https://commons.wikimedia.org/wiki/User:W.carter",
    },
    creditText: "W.carter, CC BY-SA 4.0, via Wikimedia Commons",
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
    acquireLicensePage:
      "https://commons.wikimedia.org/wiki/File:Cake_display_cases_with_cakes_and_pastries_in_Brastads_Bageri_1.jpg",
  };
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroImageJsonLd) }}
      />
      <section className="biz-scope" aria-label="Operator briefing">
        <div className="biz-memohead">
          <p className="biz-eyebrow">Operator briefing · business.loanpaylogic.com</p>
          <h1 className="biz-title">Start, Fund, and Run Your Small Business</h1>
          <p className="biz-lede">
            LoanPay Business turns confusing formation, funding, tax, and payroll rules into short,
            friendly guides with worked examples. Learn how LLCs work, what SBA loans cost, when
            payroll taxes are due, and how to keep clean books — no signup required.
          </p>
        </div>
        <figure className="biz-figure">
          <img
            src="/photos/business.webp"
            width={1600}
            height={1165}
            alt="Bakery shop pastry display counter, no people"
            loading="lazy"
          />
          <figcaption>
            Bakery counter (cropped derivative of the licensed original). Photo:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Cake_display_cases_with_cakes_and_pastries_in_Brastads_Bageri_1.jpg">
              W.carter, CC BY-SA 4.0, via Wikimedia Commons
            </a>
            . License:{" "}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.
          </figcaption>
        </figure>
        <BriefingTabs groups={clusters} />
      </section>

      <AdSlot format="display" slot="TODO-business-display-home" />

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
