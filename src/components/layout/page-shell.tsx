import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen px-5 md:px-7 py-7">{children}</div>;
}

export function PageHeader({
  index,
  kicker,
  title,
  sys,
}: {
  index: string;
  kicker: string;
  title: string;
  sys: string;
}) {
  return (
    <header className="mb-5">
      {/* top rule with system readout */}
      <div className="flex items-center gap-3 mb-4">
        <span className="display text-[11px] text-heat border border-heat px-1.5 py-0.5 rounded-sm">
          {index}
        </span>
        <div className="h-px flex-1 bg-iron-700" />
        <span className="datum text-[9px] text-iron-400">{sys}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
      </div>

      <p className="datum text-[10px] text-iron-400 mb-1.5">{kicker}</p>

      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h1 className="display text-[clamp(2.2rem,5.5vw,4rem)] leading-[0.95] text-cream">
          {title}
        </h1>
        <div className="barcode w-32 text-iron-600 mb-1.5 hidden sm:block" />
      </div>

      <div className="h-0.5 bg-iron-800 mt-4" />
    </header>
  );
}
