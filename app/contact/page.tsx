import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | LoanPay Business",
  description: "Contact the LoanPay Business editorial team with questions or corrections.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Questions about a small-business guide, a broken link, a number that needs updating, or a
        fact that looks out of date? We would love to hear from you. Email us at
        support@loanpaylogic.com and mention the page URL so we can find the issue and fix it
        quickly. We aim to reply within 3 to 5 business days.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        When you write, please include the page URL you are writing about, a short description of
        your question, and, for possible errors, what you expected to see and where you saw the
        conflicting figure. Screenshots or links to the official source you checked, such as an
        IRS page, an SBA program page, or your secretary of state filing instructions, help us
        verify the facts much faster and publish a correction without delay.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Please note we cannot provide legal, tax, or insurance advice by email. Our small
        editorial team publishes educational content only and cannot review loan documents,
        formation filings, payroll setups, or account-specific questions for third-party
        platforms. For decisions about your specific business, consult a licensed attorney, a
        certified public accountant, or an insurance agent in your state before you sign, file,
        or pay.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Topic suggestions are also welcome. If a guide you need is missing, for example a state
        filing walkthrough, a loan comparison, or a hiring checklist, tell us which situation you
        are facing and we will consider it for our publishing queue. Reader messages go directly
        to the editors, not to any sales or marketing function, and advertising partners never
        influence what we write in response.
      </p>
      <section
        aria-label="Editorial byline and sources"
        className="mt-8 rounded-2xl border border-white/10 p-6"
      >
        <h2 className="text-xl font-semibold text-white">
          Who Reads Your Message and How We Keep Guides Accurate
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Messages to this page are read by our three-person editorial team: Sarah Mitchell,
          Senior Personal Finance Writer, who drafts and maintains our guides; David Chen, CPA,
          our independent fact-checking reviewer, who verifies numbers, definitions, and worked
          examples; and Emily Roberts, Managing Editor, who gives the final sign-off before
          anything is published. Together, the team brings over 25 years of combined experience
          in financial education, certified public accounting, and digital publishing to every
          page on this site.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          This page was last reviewed and updated on November 6, 2026. We re-check our contact
          workflow and every linked guide on a regular review cycle, and we publish corrections
          promptly whenever a reader flags an error. When you write to us, please include the page
          URL and a short description of what looks outdated, and our editorial team will verify
          the facts against primary public sources and update the guide as quickly as possible.
        </p>
      </section>
    </div>
  );
}
