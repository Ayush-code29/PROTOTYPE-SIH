import { Server, CheckCircle2 } from "lucide-react";

import { servers } from "../data/mockData";

export default function Servers() {
  return (
    <div className="p-8">
      <div className="mb-7">
        <p className="text-sm font-medium text-blue-600">
          INFRASTRUCTURE
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Servers
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Connected log sources and system health
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {servers.map((server) => (
          <div
            key={server.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Server size={19} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {server.name}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {server.ip}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                <CheckCircle2 size={15} />
                ONLINE
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-500">
                Logs Processed
              </p>

              <p className="mt-1 text-xl font-bold text-slate-900">
                {server.logs}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}