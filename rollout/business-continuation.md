# business continuation — interior table usability + kraft meta readability (2026-11-15)

Sole writer: `loanpay-business`. No commit/push/deploy/serve. No other repos touched.
Prior waves preserved as found: home Operator Briefing + 27 interiors via `MemoShell`
(uncommitted dirty work untouched except `app/globals.css` scoped append below).
Central `.omo/upgrade-20261115/*` and `DESIGN.md` untouched by this wave.

## Gap chosen (one real remaining premium presentation gap, existing memo identity)

27 interiors render inside kraft islands (`.biz-article-hero` + `.biz-article-body`,
paper `#F7F3E8`) but carry dark-native Tailwind utilities from the navy era:

- `p.text-slate-500/400` meta lines sit **inside** the kraft hero (e.g. `Updated:
  October 2026`), slate-on-kraft fails 4.5:1 for 12px text — should be memo
  muted `#6B5F4C`. Direct `.biz-article > p` bylines sit on navy and correctly
  keep dark-safe slate (NOT remapped).
- Comparison tables (20+ across interiors) scroll horizontally at 375px inside
  `.biz-table-wrap` but have **no keyboard focus ring** and **no sticky first
  column**, so row labels scroll away and keyboard users get no affordance.

Prior wave already reset `border-white` + `bg-amber-*`; `text-white` h2 /
`text-amber-200` links / `caption` / `thead` are already neutralized by existing
unlayered `.biz-article-body` rules (unlayered beats Tailwind layered utilities),
so they were NOT re-touched. This wave adds only the two genuinely missing
pieces above, reusing memo tokens (`#6B5F4C` muted, `#6B4E1F` accent,
`#DCCFB4` line, `#FFFDF6` wrap bg). No new deps, no photo, no hero repeat.

## Scoped fix (single file)

`app/globals.css` append only (no `page.tsx`, layout, consent, sitemap, metadata,
formula, AdSlot, GuideSchema edits):

1. `.biz-article-hero [class*="text-slate-"] { color: #6b5f4c; }`
2. `.biz-article-body [class*="text-slate-"] { color: #6b5f4c; }`
3. `.biz-table-wrap:focus-visible { outline: 2px solid #6b4e1f; outline-offset: 2px; }`
4. `.biz-table-wrap:focus-within { border-color: #6b4e1f; }`
5. `@media (max-width: 560px)` sticky first column:
   `.biz-table-wrap th:first-child, .biz-table-wrap td:first-child {
   position: sticky; left: 0; background: #fffdf6; z-index: 1;
   box-shadow: 1px 0 0 #dccfb4; }`

Pure LOC added: ~40 (comments explain navy-vs-kraft scoping so future writers
don't globally invert `body` or remap navy bylines).

## Validation (real commands, no browser in this task)

- Test-first (ephemeral, kept out of repo): `/tmp/biz-contrast-check.mjs`
  (5 tests: hero/body slate remap, wrap focus-visible, sticky @560, doc-clip=2,
  no global body inversion).
  - RED before fix: **2 pass / 3 fail** (hero slate, focus-visible, sticky missing).
  - GREEN after fix: **5/5 PASS**.
- Existing suites (all PASS, unchanged behavior):
  - `node --test tests/metadata-discovery.test.mjs` → **8/8 PASS**.
  - `node --test tests/operator-briefing.structure.test.mjs` → **8/8 PASS**.
  - `node --test ../.omo/upgrade-20261115/rollout/business-interiors.test.mjs` → **12/12 PASS**.
- `npx tsc --noEmit` → exit 0, no output.
- `npm run build` → PASS, all routes prerendered static (First Load 103–108 kB).
- `lsp_diagnostics` on `app/sba-7a-vs-bank-loan-calculator/page.tsx` → clean.
  `app/globals.css` reports only pre-existing Tailwind-syntax parse note
  (`@import "tailwindcss"` layer), also present before this wave.
- `next-env.d.ts` SHA `85ae5aee75f011967cf2d25cbc342f62d69314e9d925f7f4aa3456fc2cffcca6`
  identical before/after build. `overflow-x: clip` count stays 2 (html+body).
- Financial examples byte-preserved (`$350,000` / `$7,875` / `Check SOS` /
  `up to $50,000`, SBA/bank/SOS URLs); canonicals, `AdSlot`, `GuideSchema`,
  `lib/consent` untouched (covered by interiors S3 tests above).

Exact reproduce commands (from `loanpay-business/`):

```bash
node --test /tmp/biz-contrast-check.mjs
node --test tests/metadata-discovery.test.mjs
node --test tests/operator-briefing.structure.test.mjs
node --test ../.omo/upgrade-20261115/rollout/business-interiors.test.mjs
npx tsc --noEmit
npm run build
shasum -a 256 next-env.d.ts
git diff --stat
```

## Route / hook for parent QA (Ego lite space 15, preview 4404 family)

Do NOT claim rendered PASS here — browser run is parent-owned. Suggested
representative routes (one wide-table, one checklist, one state-fee page):

1. `/sba-7a-vs-bank-loan-calculator` — 7-column comparison table.
   Hooks: `.biz-article-hero p.text-slate-500` (Updated line on kraft),
   `.biz-table-wrap` (overflow-x auto), `th:first-child` sticky at ≤560px,
   `:focus-visible` ring `#6B4E1F`.
2. `/how-much-does-it-cost-to-start-llc-by-state` — state fee table
   (`Check SOS`, no invented `$99` fee).
3. `/hiring-first-employee-checklist` — checklist + tables + hiring guard
   (`/disclaimer` link intact).

Parent checks: 375/768/1280 captures; harshest-title 375 crop; table
horizontal-scroll gesture + keyboard focus ring; contrast-instrument on hero
meta (`#6B5F4C` on `#F7F3E8`) and sticky first column; consent dialog
(`lib/consent`) unobstructed; no document overflow. QA servers 4400–4413
untouched by this writer.

## Follow-up (2026-11-15, same session): keyboard path completed

Correction to the limitation admitted above: all 27 interior `.biz-table-wrap`
containers now carry `tabIndex={0}` + `role="region"` + a per-table `aria-label`
derived verbatim from that table's own `<caption>` plus a scroll hint
(e.g. `aria-label="SBA 7(a) versus conventional bank loan, typical 2026 ranges.
Confirm Prime and fees with your lender. — scroll horizontally to see all
columns"`). Edits are attribute-only on the existing wrap `<div>` in each of
the 27 `app/<slug>/page.tsx` files — no copy, table, financial, metadata,
canonical, consent, sitemap, layout, or dep changes; wrap/table stays 1:1 and
all 27 labels are distinct (asserted). The focus-ring / sticky CSS from the
first half of this wave now has a real Tab stop to act on.

Persistent regression: `tests/biz-table-keyboard.test.mjs` (8 tests — carries
forward the 5 earlier CSS checks plus 3 keyboard/static checks). RED before
markup: 6 pass / 2 fail (S4 keyboard pair); GREEN after: 8/8. Re-verified same
session: `metadata-discovery` 8/8, `operator-briefing` 8/8, central
`business-interiors` 12/12 (parent independently reran green),
`npx tsc --noEmit` exit 0, `npm run build` PASS, diagnostics clean on a touched
interior page, `next-env.d.ts` SHA unchanged,
`overflow-x: clip` count stays 2. Reproduce:

```bash
node --test tests/biz-table-keyboard.test.mjs
node --test tests/metadata-discovery.test.mjs
node --test tests/operator-briefing.structure.test.mjs
node --test ../.omo/upgrade-20261115/rollout/business-interiors.test.mjs
npx tsc --noEmit
npm run build
```

## Remaining gaps (not claimed, not in scope)

- Rendered 3-width screenshots + interaction states still require real Ego 15 run.
- No per-tool photography added (repo has zero interactive calculators; static
  articles only — per V2, no photo required per tool).
- No financial, metadata, canonical, consent, sitemap, or layout changes made.

## Stop

Bounded verified code. Scoped fix (globals.css append + attribute-only wrap
edits in the 27 interiors + persistent repo test), full suite/build green,
prior dirty work preserved, nothing committed/pushed/deployed. Browser sign-off
owned by parent.
