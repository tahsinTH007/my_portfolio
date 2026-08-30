import type { Metadata } from "next";
import Link from "next/link";
import { Home, FolderGit2, AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Signal Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageShell>
      <div className="flex items-center gap-3 mb-4">
        <span className="display text-[11px] text-rust border border-rust px-1.5 py-0.5 rounded-sm">
          !!
        </span>
        <div className="h-px flex-1 bg-iron-700" />
        <span className="datum text-[9px] text-iron-400">SYS://ERROR</span>
        <span className="w-1.5 h-1.5 rounded-full bg-rust" />
      </div>

      <section className="panel panel--iron brackets scanlines p-8 md:p-12 overflow-hidden">
        <p className="datum text-[10px] text-iron-400 mb-2">
          // signal not found
        </p>

        {/* glitch stack */}
        <div className="relative mb-4">
          <h1 className="display text-[clamp(3.5rem,13vw,9rem)] leading-[0.85] text-cream">
            404
          </h1>
          <span
            aria-hidden="true"
            className="display absolute left-0 top-0 text-[clamp(3.5rem,13vw,9rem)] leading-[0.85] text-rust opacity-40 translate-x-[3px] translate-y-[3px] select-none"
          >
            404
          </span>
        </div>

        <div className="inline-flex items-center gap-2 border border-iron-600 rounded-sm px-3 py-1.5 mb-6">
          <AlertTriangle size={11} className="text-heat" />
          <span className="datum text-[9px] text-iron-300">
            Route not registered — try again
          </span>
        </div>

        <p className="text-[12px] leading-[1.9] text-iron-300 max-w-md mb-7">
          The page you requested isn&apos;t part of this system. It may have
          been moved, renamed, or never existed in the first place.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Link href="/" className="btn btn--primary">
            <Home size={12} /> Return Home
          </Link>
          <Link href="/projects" className="btn btn--ghost">
            <FolderGit2 size={12} /> Browse Projects
          </Link>
        </div>

        <div className="barcode w-40 h-4 text-iron-600 mt-9" />
      </section>
    </PageShell>
  );
}
