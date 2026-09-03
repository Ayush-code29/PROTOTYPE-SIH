import { Bell, ShieldCheck } from "lucide-react";

export default function Topbar({ criticalAlerts }) {
  return (
    <header className="fixed left-64 right-0 top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">
      <div>
        <p className="text-sm font-semibold text-slate-900">
          Security Operations Center
        </p>
        <p className="text-xs text-slate-500">
          Centralized log monitoring and incident analysis
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">
          <ShieldCheck size={15} className="text-emerald-600" />
          <span className="text-xs font-semibold text-emerald-700">
            System Secure
          </span>
        </div>

        <div className="relative">
          <Bell size={19} className="text-slate-600" />

          {criticalAlerts > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[9px] font-bold text-white">
              {criticalAlerts}
            </span>
          )}
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
          SA
        </div>
      </div>
    </header>
  );
}