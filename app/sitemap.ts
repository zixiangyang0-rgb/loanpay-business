import type { MetadataRoute } from "next";

const BASE = "https://business.loanpaylogic.com";

const ROUTES: { url: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  // Formation
  { url: "/how-to-start-llc-guide", priority: 0.9, changeFrequency: "monthly" },
  { url: "/llc-vs-s-corp-taxes", priority: 0.9, changeFrequency: "monthly" },
  { url: "/s-corp-election-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/ein-application-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/business-bank-account-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/business-licenses-permits-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/dba-registration-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/registered-agent-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/operating-agreement-basics", priority: 0.8, changeFrequency: "monthly" },
  // Funding
  { url: "/business-credit-cards-basics", priority: 0.8, changeFrequency: "monthly" },
  { url: "/sba-7a-loans-guide", priority: 0.9, changeFrequency: "monthly" },
  { url: "/sba-microloans-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/business-line-of-credit-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/invoice-factoring-explained", priority: 0.8, changeFrequency: "monthly" },
  { url: "/equipment-financing-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/startup-costs-checklist", priority: 0.8, changeFrequency: "monthly" },
  { url: "/business-credit-score-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/how-to-value-small-business", priority: 0.8, changeFrequency: "monthly" },
  // Taxes & payroll
  { url: "/bookkeeping-basics-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/small-business-tax-calendar-2026", priority: 0.9, changeFrequency: "monthly" },
  { url: "/payroll-taxes-employer-guide", priority: 0.9, changeFrequency: "monthly" },
  { url: "/hiring-first-employee-checklist", priority: 0.8, changeFrequency: "monthly" },
  { url: "/business-meals-travel-deduction-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/contractors-vs-employees-1099-guide", priority: 0.8, changeFrequency: "monthly" },
  // Running it
  { url: "/business-insurance-types-guide", priority: 0.8, changeFrequency: "monthly" },
  // Legal pages
  { url: "/about", priority: 0.5, changeFrequency: "monthly" },
  { url: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { url: "/privacy-policy", priority: 0.4, changeFrequency: "monthly" },
  { url: "/terms", priority: 0.4, changeFrequency: "monthly" },
  { url: "/disclaimer", priority: 0.4, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-01");
  return ROUTES.map((route) => ({
    url: `${BASE}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
