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
        topics in plain English: forming an LLC, choosing tax treatment, applying for an EIN,
        opening bank accounts, comparing SBA loans and credit lines, keeping books, meeting
        payroll obligations, hiring, and insuring the business.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Our goal is to help first-time owners build intuition before they sign anything: what each
        form does, what each loan costs, which deadlines repeat every year, and which records
        keep you out of trouble. Every page on business.loanpaylogic.com provides general
        education only and encourages readers to verify details with the IRS, the Small Business
        Administration, their secretary of state, or a licensed attorney, accountant, or
        insurance professional.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We are independent writers and developers, not accountants or attorneys. Questions or
        corrections are welcome at support@loanpaylogic.com.
      </p>
    </div>
  );
}
