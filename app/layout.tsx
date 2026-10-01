import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import ConsentBanner from "../lib/consent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://business.loanpaylogic.com"),
  title: {
    default: "LoanPay Business | Start, Fund, and Run a Small Business",
    template: "%s | LoanPay Business",
  },
  description:
    "LoanPay Business offers plain-English guides for starting an LLC, getting SBA loans, handling payroll taxes, and running a small business in the United States.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LoanPay Business | Start, Fund, and Run a Small Business",
    description:
      "Formation, funding, taxes, payroll, and operations guides for US small businesses — free educational content.",
    url: "https://business.loanpaylogic.com",
    siteName: "LoanPay Business",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Business | Start, Fund, and Run a Small Business",
    description:
      "Formation, funding, taxes, payroll, and operations guides for US small businesses — free educational content.",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
      <Link href="/" className="text-lg font-bold tracking-tight">
        LoanPay <span className="text-gradient">Business</span>
      </Link>
      <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 pb-10 pt-6 text-sm text-slate-400">
      <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </Link>
        ))}
        <Link href="/privacy-policy" className="transition hover:text-white">
          Do Not Sell / Privacy Choices
        </Link>
      </div>
      <p className="mt-4">
        &copy; {new Date().getFullYear()} business.loanpaylogic.com. General education only, not
        legal or tax advice.
      </p>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ConsentBanner />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4906207495792820"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
