import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(root, p), "utf8");

// Machine-consumed contract: self-canonical absolute URL must be present
// in source (Next.js Metadata.alternates.canonical), matching privacy-policy pattern.
const PAGES = [
  ["app/about/page.tsx", "https://business.loanpaylogic.com/about"],
  ["app/contact/page.tsx", "https://business.loanpaylogic.com/contact"],
  ["app/terms/page.tsx", "https://business.loanpaylogic.com/terms"],
  ["app/disclaimer/page.tsx", "https://business.loanpaylogic.com/disclaimer"],
];

describe("self-canonical alternates (machine-consumed)", () => {
  for (const [file, canonical] of PAGES) {
    it(`${file} declares canonical ${canonical}`, () => {
      const src = read(file);
      assert.ok(
        src.includes("alternates") && src.includes(`canonical: "${canonical}"`),
        `RED: ${file} missing alternates.canonical "${canonical}"`
      );
    });
  }

  it("privacy-policy reference pattern stays intact", () => {
    const src = read("app/privacy-policy/page.tsx");
    assert.ok(
      src.includes('canonical: "https://business.loanpaylogic.com/privacy-policy"')
    );
  });

  it("root layout metadataBase + home canonical preserved (no sitemap/policy change)", () => {
    const src = read("app/layout.tsx");
    assert.ok(src.includes('metadataBase: new URL("https://business.loanpaylogic.com")'));
    assert.ok(src.includes('canonical: "/"'));
  });
});

describe("home discovery cards (machine-consumed hrefs)", () => {
  it("home Funding group links SBA-vs-bank calculator", () => {
    const src = read("app/page.tsx");
    assert.ok(src.includes('href: "/sba-7a-vs-bank-loan-calculator"'));
  });

  it("home Formation group links LLC cost by state", () => {
    const src = read("app/page.tsx");
    assert.ok(src.includes('href: "/how-much-does-it-cost-to-start-llc-by-state"'));
  });
});
