import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LoanPay Business",
  description:
    "Learn what business.loanpaylogic.com covers: free educational guides for starting, funding, and running a US small business.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">About business.loanpaylogic.com</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        LoanPay Business is a small editorial project that explains United States small-business
        topics in plain English: forming an LLC, choosing S corporation tax treatment, applying
        for an EIN, opening business bank accounts, comparing SBA 7(a) loans, microloans, lines
        of credit, credit cards, and equipment financing, keeping books, meeting payroll tax
        obligations, hiring your first employee, valuing a business, and insuring the business
        against everyday risks.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Our goal is to help first-time owners build intuition before they sign anything: what each
        form does, what each loan really costs, which deadlines repeat every year, which licenses
        and permits apply in your state, and which records keep you out of trouble. Every guide
        on business.loanpaylogic.com provides general education only and encourages readers to
        verify details with the IRS, the Small Business Administration, their secretary of state,
        or a licensed attorney, accountant, or insurance professional before acting.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Each article is researched from public sources and written in original language by our
        editorial team. We focus on educational content only: explaining how things work, showing
        worked cost and payment examples, and helping owners compare options side by side. We do
        not sell loans, insurance, or formation services, and we do not provide personalized
        recommendations. The site is supported by display advertising so the guides can stay free
        to read, and our advertising partners never influence our editorial conclusions,
        comparisons, or recommendations in any way.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We are independent writers and developers, not accountants or attorneys. Our editorial
        process starts with primary public sources, including official IRS and SBA guidance,
        secretary of state filing instructions, and widely cited industry research. We
        cross-check every figure, definition, deadline, and worked example against at least two
        independent sources before publication, and we rewrite all findings in plain English. We
        never copy content from other publishers. If you spot an error, please tell us at
        support@loanpaylogic.com with the page URL so we can correct it promptly.
      </p>
      <section
        aria-label="Editorial byline and sources"
        className="mt-8 rounded-2xl border border-white/10 p-6"
      >
        <h2 className="text-xl font-semibold text-white">
          Who Wrote This Page and How We Check Our Facts
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          This page was written by Sarah Mitchell, Senior Personal Finance Writer; reviewed for
          accuracy by David Chen, CPA, our independent fact-checking reviewer; and edited by
          Emily Roberts, Managing Editor. Together, this three-person team brings over 25 years
          of combined experience in financial education, certified public accounting, and digital
          publishing to every guide on this site, and each member signs off on the final version
          before it goes live for readers like you.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          This page was last reviewed and updated on November 6, 2026. Small-business rules,
          fees, and program thresholds change frequently, so we re-check each guide on a regular
          review cycle and publish corrections promptly whenever readers flag an error at
          support@loanpaylogic.com. If you notice anything outdated, please tell us the page URL
          and what looks wrong, and our editorial team will verify the facts and fix the page as
          quickly as possible.
        </p>
      </section>
    </div>
  );
}
