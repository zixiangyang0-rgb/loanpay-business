import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | LoanPay Business",
  description: "Terms of use for business.loanpaylogic.com educational small-business guides.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Terms of Use</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        By using business.loanpaylogic.com you agree that all content is provided &quot;as
        is&quot; for general education about US small-business topics. We aim for accuracy but
        make no warranty that every figure, deadline, or state fee is current or complete.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Nothing on this site is legal, tax, accounting, or insurance advice and nothing here
        creates a professional-client relationship. Business rules vary by state and change
        frequently; verify formation fees with your secretary of state, loan terms with your
        lender and the Small Business Administration, and tax questions with the IRS or a
        licensed professional before acting.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        You may link to and quote our guides with attribution for non-commercial purposes. Do
        not republish full pages without permission. Contact support@loanpaylogic.com with
        questions.
      </p>
    </div>
  );
}
