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
        Questions about a small-business guide, a broken link, or a fact that looks out of date?
        Email us at support@loanpaylogic.com and mention the page URL so we can fix it quickly.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Please note we cannot provide legal, tax, or insurance advice by email. For decisions
        about your specific business, consult a licensed attorney, certified public accountant,
        or insurance agent in your state.
      </p>
    </div>
  );
}
