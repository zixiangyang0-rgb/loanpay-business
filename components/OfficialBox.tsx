export interface OfficialSourceItem {
  label: string;
  href: string;
  description: string;
}

export default function OfficialBox({ items }: { items: OfficialSourceItem[] }) {
  return (
    <section
      aria-label="Official sources"
      className="rounded-2xl border border-emerald-200/20 bg-emerald-200/5 p-5"
    >
      <p className="text-sm font-semibold text-emerald-100">
        Official sources — verify before you act
      </p>
      <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-slate-300">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-200 underline underline-offset-2 hover:text-emerald-100"
            >
              {item.label}
            </a>{" "}
            — {item.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
