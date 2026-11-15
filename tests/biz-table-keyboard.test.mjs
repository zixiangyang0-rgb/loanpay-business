// biz-table keyboard path — persistent regression for the continuation wave.
// Own path only: tests/biz-table-keyboard.test.mjs (repo-persisted, Node builtins,
// source-text reads only). No prose pins of visible copy, no financial assertions.
// Covers: (S1) kraft-island slate remap from globals.css; (S2) wrap focus ring +
// sticky first-col + doc-clip unchanged; (S3) no global body inversion;
// (S4) every interior biz-table-wrap is keyboard-focusable with a distinct
// non-empty region name (actual Tab-scroll path, not CSS-only).
// Run: node --test tests/biz-table-keyboard.test.mjs
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "url";

const here = dirname(fileURLToPath(import.meta.url));
const repo = join(here, "..");
const read = (rel) => readFileSync(join(repo, rel), "utf8");

const GUIDES = [
  "bookkeeping-basics-guide",
  "business-bank-account-guide",
  "business-credit-cards-basics",
  "business-credit-score-guide",
  "business-insurance-types-guide",
  "business-licenses-permits-guide",
  "business-line-of-credit-guide",
  "business-meals-travel-deduction-guide",
  "contractors-vs-employees-1099-guide",
  "dba-registration-guide",
  "ein-application-guide",
  "equipment-financing-guide",
  "hiring-first-employee-checklist",
  "how-much-does-it-cost-to-start-llc-by-state",
  "how-to-start-llc-guide",
  "how-to-value-small-business",
  "invoice-factoring-explained",
  "llc-vs-s-corp-taxes",
  "operating-agreement-basics",
  "payroll-taxes-employer-guide",
  "registered-agent-guide",
  "s-corp-election-guide",
  "sba-7a-loans-guide",
  "sba-7a-vs-bank-loan-calculator",
  "sba-microloans-guide",
  "small-business-tax-calendar-2026",
  "startup-costs-checklist",
];

const wrapDivsOf = (src) =>
  [...src.matchAll(/<div className="biz-table-wrap[^"]*"[^>]*>/g)].map((m) => m[0]);

describe("S1 happy — kraft islands readable (hero/body slate remapped to memo muted)", () => {
  it("Given globals.css When read Then hero + body slate utilities remapped inside kraft scope", () => {
    const css = read("app/globals.css");
    assert.ok(
      css.includes('.biz-article-hero [class*="text-slate-"]'),
      "missing hero slate remap",
    );
    assert.ok(
      css.includes('.biz-article-body [class*="text-slate-"]'),
      "missing body slate remap",
    );
  });
});

describe("S2 edge 375 — tables keep overflow containment, gain focus + sticky affordances", () => {
  it("Given globals.css When read Then wrap keeps overflow-x and gains a focus-visible ring", () => {
    const css = read("app/globals.css");
    assert.ok(css.includes(".biz-table-wrap"), "missing wrap");
    assert.ok(css.includes("overflow-x"), "wrap missing overflow-x");
    assert.ok(css.includes(".biz-table-wrap:focus-visible"), "missing wrap focus-visible");
  });
  it("Given globals.css When read Then sticky first column exists under the narrow query", () => {
    const css = read("app/globals.css");
    assert.ok(css.includes("position: sticky") && css.includes("560px"), "missing sticky first-col @560");
  });
  it("Given globals.css When read Then doc-level clip count unchanged (html+body = 2)", () => {
    const css = read("app/globals.css");
    assert.equal((css.match(/overflow-x:\s*clip/g) || []).length, 2, "doc clip drift");
  });
});

describe("S3 adjacent — no global inversion", () => {
  it("Given globals.css When read Then body is never globally inverted to kraft", () => {
    const css = read("app/globals.css");
    assert.ok(
      !css.match(/(^|[^a-zA-Z-])body\s*\{[^}]*background:\s*#f7f3e8/i),
      "global body inversion",
    );
  });
});

describe("S4 keyboard — every interior table wrap is Tab-focusable with a distinct region name", () => {
  it("Given 27 interiors When read Then each wrap has tabIndex 0 and role region", () => {
    assert.equal(GUIDES.length, 27);
    for (const slug of GUIDES) {
      const src = read(`app/${slug}/page.tsx`);
      const divs = wrapDivsOf(src);
      assert.ok(divs.length >= 1, `${slug}: no biz-table-wrap`);
      for (const d of divs) {
        assert.ok(/tabIndex=\{0\}/.test(d), `${slug}: wrap missing tabIndex={0}: ${d}`);
        assert.ok(/role="region"/.test(d), `${slug}: wrap missing role="region": ${d}`);
      }
    }
  });
  it("Given 27 interiors When read Then each wrap carries a distinct non-empty aria-label", () => {
    const labels = [];
    for (const slug of GUIDES) {
      const src = read(`app/${slug}/page.tsx`);
      for (const d of wrapDivsOf(src)) {
        const m = d.match(/aria-label="([^"]+)"/);
        assert.ok(m, `${slug}: wrap missing aria-label: ${d}`);
        assert.ok(m[1].trim().length >= 10, `${slug}: aria-label too short: ${d}`);
        labels.push(m[1].trim());
      }
    }
    assert.equal(new Set(labels).size, labels.length, "aria-labels must be distinct per table");
  });
  it("Given 27 interiors When scanned Then still static articles, no interactivity invented", () => {
    for (const slug of GUIDES) {
      const src = read(`app/${slug}/page.tsx`);
      assert.ok(!src.includes('"use client"'), `${slug}: client island invented`);
      assert.ok(!src.includes("useState"), `${slug}: state invented`);
      assert.ok(!src.includes("<input"), `${slug}: input invented`);
    }
  });
});
