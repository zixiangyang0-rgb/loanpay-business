import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | LoanPay Business",
  description:
    "Disclaimer for business.loanpaylogic.com: general small-business education only, not professional advice.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Everything published on business.loanpaylogic.com is for general education and
        illustration only. It is not legal advice, tax advice, accounting advice, or insurance
        advice, and it does not create a professional-client relationship.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Small-business rules change frequently and depend on your entity type, state, industry,
        revenue, employees, and deadlines. Our simplified guides cannot reflect every
        exception, fee schedule, underwriting rule, or local requirement. Before acting —
        including forming an entity, signing a loan, hiring, or filing taxes — verify the
        current rules with your secretary of state, the IRS, the Small Business Administration,
        or a licensed attorney, accountant, or insurance professional.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We work to keep guides accurate, but we make no warranty of completeness or timeliness.
        If you spot an error, please tell us at support@loanpaylogic.com so we can correct it.
      </p>
    </div>
  );
}
