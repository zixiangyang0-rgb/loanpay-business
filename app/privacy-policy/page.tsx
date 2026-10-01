import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LoanPay Business",
  description: "Privacy policy for business.loanpaylogic.com: what we collect and why.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        LoanPay Business publishes educational small-business guides. We do not require accounts,
        and our pages do not ask for your Social Security number, bank credentials, or business
        tax IDs.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Like most websites, our hosting provider and analytics tools may log basic technical
        information such as pages visited, browser type, and approximate location derived from
        IP address. We use this only to keep the site working and to understand which guides
        readers find useful.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Third-party vendors, including Google AdSense, may use cookies to serve and measure ads.
        You can control cookies in your browser settings and learn more at Google&apos;s Ads
        Settings page. We never sell personal information.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        If you email us, we keep your message only long enough to respond. Questions:
        support@loanpaylogic.com.
      </p>
    </div>
  );
}
