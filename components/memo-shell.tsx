type MemoShellProps = {
  children: React.ReactNode;
};

/**
 * MemoShell — shared opt-in wrapper for the 27 business interiors.
 * Applies the Operator Briefing reading scope (.biz-article: kraft
 * #F7F3E8 + Helvetica/Arial sans headlines) without touching copy, links,
 * metadata, AdSlot positions, or GuideSchema. No dark calculator islands
 * exist in this repo (static articles only); the navy body stays as the
 * surrounding surface, so no blanket body inversion. No photo, no new deps.
 */
export default function MemoShell({ children }: MemoShellProps) {
  return <div className="biz-article mx-auto w-full max-w-3xl px-6 pb-16 pt-8 flex flex-col gap-8">{children}</div>;
}
