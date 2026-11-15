# loanpay-business DESIGN.md — Operator Briefing (V2 identity, codified before product edit)

Sole writer: business visual owner. Codifies `.omo/upgrade-20261115/DESIGN.md §0` +
`DISTINCT-IDENTITIES-V2.md §1 row 5` (business Operator Briefing) + `V2-DELIVERY.md §5`
(business concept bundle). No product formulas touched by this file.

## Identity (vs nearest neighbor main)

Main is a filterable Ledger Index; business is a founder memo: memo head + 2-col
briefing (main panel + action sidebar) + topic tabs, with a linked action
checklist instead of directory search. Serif is NOT used for display (Helvetica/Arial
sans memo headings); mono appears nowhere in body copy.

## Tokens

- Surface: kraft paper `#F7F3E8` memo scope ONLY (`.biz-scope`); card `#FFFDF6`;
  sidebar `#F2EAD6`; line `#DCCFB4`. Dark navy `#07111F` + `#0B1627` / `#0E1C33`
  islands (`globals.css` + `glass-card`) RETAINED outside `.biz-scope` — no global
  color inversion, no `*{color}` remap.
- Ink/text: memo ink `#2A241C`; muted `#6B5F4C`; accent `#6B4E1F` (tabs focus, links,
  active tab underline — max 10% pixels). Active tab fill is ink bg `#2A241C` with
  `#FFFDF6` text.
- Contrast intent: `#2A241C` on `#F7F3E8`, `#6B4E1F` on `#FFFDF6`/`#F7F3E8` (body 4.5:1
  target, large display 3:1+). Dark islands keep existing contrast; real 375/768/1280
  screenshots + longest-title + longest-result stress re-test at harness approval.
- Depth: single-layer `0 10px 28px -18px rgba(0,0,0,.25)` on card hover only.
  No multi-glow, no full-page `backdrop-blur` on scrolling content.
- Motion: `transform 200ms ease` (card hover lift) only; `prefers-reduced-motion:
  reduce` disables lift. Tabs swap instantly, no animation.
- Focus visible always: `2px solid #6B4E1F + 2px offset`, never removed.

## Type

- Display: Helvetica/Arial memo sans, tight `-0.01em`, 700 — never Georgia on this site.
- Body: system sans, 1.6–1.75; tab labels 700 14px; sidebar 13.5px/1.5.
- Numeric hierarchy: tabular-nums preserved in guide tables/SBA inserts; never
  gradient-filled amounts. Eyebrow 12px uppercase `0.12em` only.
- Mono: none in briefing chrome (per V2 TYPE rule: business bans mono body).

## Primitives map (local classes → network §4)

1. `SiteHeader` → `app/layout.tsx Header` (`max-w-5xl`, wordmark serif + brass `Business`).
   Kept dark; not restyled in this rollout. Desktop inline nav; no overlay sheets.
2. `SiteFooter` → `app/layout.tsx Footer` (network interlink row + consent/ad-choice +
   disclaimer preserved). No sticky behavior.
3. `HomeHero` → `app/page.tsx` memo head (`.biz-memohead`): eyebrow + sans title (kept
   copy: "Start, Fund, and Run Your Small Business") + lede + finite Figure below.
   No inputs inside memo head. No CTA buttons displacing reading.
4. `BriefingTabs` → `components/BriefingTabs.tsx`: `role=tablist` with 4 real-group tabs
   (Formation / Funding / Taxes & payroll / Running it) + arrow-key/Home/End nav +
   `aria-selected` + `tabindex` roving. Panels use `hidden` (all 27 links stay in DOM).
5. `ActionSidebar` → `.biz-side` (`aria-label="Action sidebar"`): current-group top-3
   links (follows active tab) + fixed "Key moves across the business" (4 real hrefs) +
   planning note. Links only — no dead checkboxes, nothing stored or sent.
6. `GuideCard` → `.biz-card`: title 2-line + 1-line desc + badge + no emoji. Hover:
   translateY(-2px) + shadow deepen only (none under reduced-motion).
7. `Figure` → `.biz-figure` + `/photos/business.webp` (1600×1165, 220px cover lazy)
   + caption with creator + source-page + CC BY-SA 4.0 links + crop-derivative note.
8. `Disclosure/Consent` → `lib/consent` dialog preserved; why-section + disclaimer box +
   sister-site links preserved. Never in memo head; never auto-dismissed.

## Hero

- Verified photo: `public/photos/business.webp` — bakery counter, personless, cropped
  derivative (left-edge stickers removed). Record row in `public/photos/RECORD.md`
  (page URL, W.carter, CC BY-SA 4.0, 2026-11-15, alt, widths). Local AVIF/WebP single
  width 1600 (175,650 bytes); no hotlink; no stock face as staff/client.
- No mandatory photo per tool; tool/interior routes untouched in this rollout.

## Responsive

- Container `max-w-5xl`; memo gutters 24 desktop / 16 mobile. Grid 2-col → 1-col ≤880px;
  sidebar stacks below panel with top hairline (never overlays inputs).
- 1280: panel + 280px sidebar; 768: stacked; 375: single col, figure 200px, biz-grid 1-col.
- Stress strings: longest-title `SBA 7(a) vs Bank Term Loan: … — 2026 Guide` wraps ≤3 lines
  at 375px; longest-result `$9,999,999.00 USD — DEMO illustration only` (static examples
  only — no live calculator added, no SBA math introduced).
- Consent: current `lib/consent` behavior + genuine choice preserved; no overlap added.

## Boundaries

- Formulas/links/canonical/consent preserved; no formula changes; no `metadataBase`/
  canonical churn; no sitemap-date stamping; no `priority/changefreq` selling.
- No fake reviewers/dates/staff portraits/verified stamps; no prose-only tests as behavior
  proof. Sample hiring copy NOT reframed as legal guidance — hiring page keeps
  educational framing + disclaimer link.
- No new runtime/font deps; system sans only. No unverified URLs; no generated images
  as photography.
- Edits fenced to: `app/page.tsx`, `app/globals.css` (append scoped `.biz-*` only),
  `components/BriefingTabs.tsx` (new), `public/photos/*`, `DESIGN.md` (this file),
  `tests/operator-briefing.structure.test.mjs` (new). Interior guides, SBA calculator
  content, layout, consent, sitemap, robots, ads.txt, next-env untouched.
