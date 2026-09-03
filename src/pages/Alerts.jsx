import { AlertTriangle } from "lucide-react";

import { initialAlerts } from "../data/mockData";
import SeverityBadge from "../components/SeverityBadge";

export default function Alerts() {
  return (
    <div className="p-8">
      <div className="mb-7">
        <p className="text-sm font-medium text-blue-600">
          SECURITY ALERTS
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Alerts
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Security alerts requiring attention
        </p>
      </div>

      <div className="space-y-3">
        {initialAlerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <AlertTriangle size={19} />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-slate-900">
                  {alert.title}
                </p>

                <SeverityBadge severity={alert.severity} />
              </div>

              <p className="mt-1 text-xs text-slate-400">
                {alert.id} · Detected at {alert.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}