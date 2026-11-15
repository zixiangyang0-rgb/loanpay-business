import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(root, p), "utf8");

// All 27 real home hrefs (formation 10 + funding 10 + taxes/payroll 6 + running 1).
// Any missing href = lost route = FAIL.
const ALL_HREFS = [
  "/how-to-start-llc-guide",
  "/llc-vs-s-corp-taxes",
  "/s-corp-election-guide",
  "/ein-application-guide",
  "/business-bank-account-guide",
  "/business-licenses-permits-guide",
  "/dba-registration-guide",
  "/registered-agent-guide",
  "/operating-agreement-basics",
  "/how-much-does-it-cost-to-start-llc-by-state",
  "/sba-7a-loans-guide",
  "/sba-microloans-guide",
  "/business-line-of-credit-guide",
  "/business-credit-cards-basics",
  "/invoice-factoring-explained",
  "/equipment-financing-guide",
  "/startup-costs-checklist",
  "/business-credit-score-guide",
  "/how-to-value-small-business",
  "/sba-7a-vs-bank-loan-calculator",
  "/bookkeeping-basics-guide",
  "/small-business-tax-calendar-2026",
  "/payroll-taxes-employer-guide",
  "/hiring-first-employee-checklist",
  "/business-meals-travel-deduction-guide",
  "/contractors-vs-employees-1099-guide",
  "/business-insurance-types-guide",
];

const GROUPS = ["formation", "funding", "taxes", "running"];

describe("operator briefing tabs (machine-consumed structure)", () => {
  it("home exposes a tablist covering all 4 actual groups", () => {
    const home = read("app/page.tsx");
    const tabs = read("components/BriefingTabs.tsx");
    const src = home + "\n" + tabs;
    assert.ok(src.includes('role="tablist"'), "RED: no tablist");
    for (const g of GROUPS) {
      assert.ok(src.includes(g), `RED: group "${g}" missing from briefing`);
    }
  });

  it("home keeps all 27 real guide/calculator hrefs (no lost route)", () => {
    const home = read("app/page.tsx");
    for (const href of ALL_HREFS) {
      assert.ok(home.includes(`"${href}"`), `RED: home lost href ${href}`);
    }
  });

  it("action sidebar links to real routes (not dead checkboxes)", () => {
    const tabs = read("components/BriefingTabs.tsx");
    assert.ok(tabs.includes('aria-label="Action sidebar"'), "RED: no action sidebar");
    for (const href of [
      "/how-to-start-llc-guide",
      "/sba-7a-loans-guide",
      "/payroll-taxes-employer-guide",
      "/business-insurance-types-guide",
    ]) {
      assert.ok(tabs.includes(href), `RED: sidebar missing real link ${href}`);
    }
  });
});

describe("operator briefing photo record (machine-consumed)", () => {
  it("home figure uses verified local business.webp with credit", () => {
    const home = read("app/page.tsx");
    assert.ok(home.includes("/photos/business.webp"), "RED: no local business.webp");
    assert.ok(home.includes("W.carter"), "RED: no creator credit");
    assert.ok(
      home.includes("creativecommons.org/licenses/by-sa/4.0"),
      "RED: no CC BY-SA 4.0 license link"
    );
    assert.ok(home.includes("commons.wikimedia.org"), "RED: no source-page link");
  });
});

describe("briefing preserves network contract (no formula/canonical/consent drift)", () => {
  it("layout metadataBase + home canonical + consent import intact", () => {
    assert.ok(
      read("app/layout.tsx").includes('metadataBase: new URL("https://business.loanpaylogic.com")')
    );
    assert.ok(read("app/page.tsx").includes('canonical: "/"') || read("app/layout.tsx").includes('canonical: "/"'));
    assert.ok(read("app/layout.tsx").includes("ConsentBanner"));
  });

  it("home keeps AdSlot + sister-site interlinks + disclaimer", () => {
    const home = read("app/page.tsx");
    assert.ok(home.includes("AdSlot"));
    assert.ok(home.includes("tax.loanpaylogic.com"));
    assert.ok(home.includes("insurance.loanpaylogic.com"));
    assert.ok(home.includes("/disclaimer"));
  });

  it("briefing component adds no demo calculator math and no `any`", () => {
    const tabs = read("components/BriefingTabs.tsx");
    assert.ok(!tabs.includes("amort("), "RED: demo calculator math leaked in");
    assert.ok(!/:\s*any\b/.test(tabs), "RED: `any` in new component");
    assert.ok(tabs.includes('"use client"'), "RED: tabs must be a client component");
  });

  it("hiring guide keeps educational framing (no sample advice as legal guidance)", () => {
    const hiring = read("app/hiring-first-employee-checklist/page.tsx");
    assert.ok(hiring.includes("/disclaimer"), "RED: hiring disclaimer link lost");
    assert.ok(hiring.includes("Educational use only"), "RED: hiring educational framing lost");
  });
});
