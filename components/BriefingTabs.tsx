"use client";

import Link from "next/link";
import { useId, useState } from "react";

export interface BriefingCard {
  title: string;
  description: string;
  href: string;
  badge: string;
}

export interface BriefingGroup {
  id: string;
  tab: string;
  heading: string;
  blurb: string;
  cards: BriefingCard[];
}

interface BriefingTabsProps {
  groups: BriefingGroup[];
}

/** Cross-group key moves — every href is a real route, always visible. */
const KEY_MOVES: BriefingCard[] = [
  {
    title: "Form the entity",
    description: "Seven steps from name search to EIN and first filings.",
    href: "/how-to-start-llc-guide",
    badge: "Guide",
  },
  {
    title: "Understand SBA 7(a)",
    description: "Up to $5M guaranteed: eligibility, rates, and fees.",
    href: "/sba-7a-loans-guide",
    badge: "Guide",
  },
  {
    title: "Price payroll before hiring",
    description: "FICA, FUTA, SUTA, and withholding on a $1,000 paycheck.",
    href: "/payroll-taxes-employer-guide",
    badge: "Guide",
  },
  {
    title: "Cover the operation",
    description: "General liability, professional, workers' comp, and more.",
    href: "/business-insurance-types-guide",
    badge: "Guide",
  },
];

export default function BriefingTabs({ groups }: BriefingTabsProps) {
  const [active, setActive] = useState(0);
  const base = useId().replace(/[^a-zA-Z0-9]/g, "");
  const current = groups[active] ?? groups[0];

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (index + 1) % groups.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + groups.length) % groups.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = groups.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`biz-tab-${base}-${next}`)?.focus();
  };

  return (
    <div className="biz-tabs">
      <div role="tablist" aria-label="Briefing topics" className="biz-tablist">
        {groups.map((group, i) => (
          <button
            key={group.id}
            role="tab"
            id={`biz-tab-${base}-${i}`}
            aria-selected={i === active}
            aria-controls={`biz-panel-${base}-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={i === active ? "biz-tab biz-tab-active" : "biz-tab"}
          >
            {group.tab}
          </button>
        ))}
      </div>
      <div className="biz-body">
        <div className="biz-main">
          {groups.map((group, i) => (
            <section
              key={group.id}
              role="tabpanel"
              id={`biz-panel-${base}-${i}`}
              aria-labelledby={`biz-tab-${base}-${i}`}
              hidden={i !== active}
              className="biz-panel"
            >
              <h2 className="biz-group-heading">{group.heading}</h2>
              <p className="biz-group-blurb">{group.blurb}</p>
              <div className="biz-grid">
                {group.cards.map((card) => (
                  <Link key={card.href} href={card.href} className="biz-card">
                    <span className="biz-badge">{card.badge}</span>
                    <span className="biz-card-title">{card.title}</span>
                    <span className="biz-card-desc">{card.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
        <aside aria-label="Action sidebar" className="biz-side">
          <p className="biz-side-eyebrow">Action sidebar</p>
          <p className="biz-side-title">Start here — {current.tab}</p>
          <ul className="biz-side-list">
            {current.cards.slice(0, 3).map((card) => (
              <li key={card.href}>
                <Link href={card.href} className="biz-side-link">
                  {card.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="biz-side-title">Key moves across the business</p>
          <ul className="biz-side-list">
            {KEY_MOVES.map((move) => (
              <li key={move.href}>
                <Link href={move.href} className="biz-side-link">
                  {move.title}
                </Link>
                <span className="biz-side-desc">{move.description}</span>
              </li>
            ))}
          </ul>
          <p className="biz-side-note">
            Planning notes that link into the full guides — nothing is stored or sent.
          </p>
        </aside>
      </div>
    </div>
  );
}
