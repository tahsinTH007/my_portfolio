"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCw, Home, AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageShell>
      <div className="flex items-center gap-3 mb-4">
        <span className="display text-[11px] text-rust border border-rust px-1.5 py-0.5 rounded-sm">
          !!
        </span>
        <div className="h-px flex-1 bg-iron-700" />
        <span className="datum text-[9px] text-iron-400">SYS://FAULT</span>
        <span className="w-1.5 h-1.5 rounded-full bg-rust" />
      </div>

      <section className="panel panel--iron brackets p-8 md:p-10">
        <p className="datum text-[10px] text-iron-400 mb-2">
          // unhandled exception
        </p>

        <h1 className="display text-[clamp(2rem,6vw,3.5rem)] leading-none text-cream mb-4">
          System Fault.
        </h1>

        <div className="inline-flex items-center gap-2 border border-rust/50 bg-rust/10 rounded-sm px-3 py-1.5 mb-6">
          <AlertTriangle size={11} className="text-rust" />
          <span className="datum text-[9px] text-cream-300">
            {error.digest ? `REF ${error.digest}` : "Unexpected error"}
          </span>
        </div>

        <p className="text-[12px] leading-[1.9] text-iron-300 max-w-md mb-7">
          Something broke while rendering this page. Retrying usually clears it.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <button onClick={reset} className="btn btn--primary">
            <RotateCw size={12} /> Retry
          </button>
          <Link href="/" className="btn btn--ghost">
            <Home size={12} /> Return Home
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
