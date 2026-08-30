import { PageShell } from "@/components/layout/page-shell";

export default function Loading() {
  return (
    <PageShell>
      <div className="flex items-center gap-3 mb-4">
        <span className="display text-[11px] text-heat border border-heat px-1.5 py-0.5 rounded-sm">
          ..
        </span>
        <div className="h-px flex-1 bg-iron-700" />
        <span className="datum text-[9px] text-iron-400">SYS://LOADING</span>
        <span className="w-1.5 h-1.5 rounded-full bg-heat animate-pulse" />
      </div>

      <div className="h-9 w-52 bg-iron-800 rounded-sm animate-pulse mb-6" />

      <div className="grid md:grid-cols-2 gap-3">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="panel panel--iron p-6">
            <div className="h-2.5 w-20 bg-iron-700 rounded-sm animate-pulse mb-4" />
            <div className="h-5 w-3/4 bg-iron-700 rounded-sm animate-pulse mb-3" />
            <div className="flex flex-col gap-2">
              <div className="h-2 w-full bg-iron-800 rounded-sm animate-pulse" />
              <div className="h-2 w-5/6 bg-iron-800 rounded-sm animate-pulse" />
              <div className="h-2 w-4/6 bg-iron-800 rounded-sm animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
