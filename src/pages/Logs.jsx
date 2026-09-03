import { useState } from "react";
import { Search, Activity } from "lucide-react";

import { initialLogs } from "../data/mockData";
import SeverityBadge from "../components/SeverityBadge";

export default function Logs() {
  const [logs] = useState(initialLogs);
  const [search, setSearch] = useState("");

  const filteredLogs = logs.filter((log) => {
    const text = `
      ${log.server}
      ${log.type}
      ${log.message}
      ${log.severity}
    `.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <div className="p-8">
      <div className="mb-7">
        <p className="text-sm font-medium text-blue-600">
          LOG MANAGEMENT
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Logs
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Centralized security event monitoring
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 p-5 md:flex-row">
          <div className="flex items-center gap-2">
            <Activity size={18} className="text-emerald-500" />

            <span className="text-sm font-semibold text-slate-700">
              Live Log Stream
            </span>
          </div>

          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search logs..."
              className="w-full rounded-xl border border-slate-200 py-2 pl-9 pr-4 text-sm outline-none focus:border-blue-400 md:w-72"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-5 py-3 text-xs font-bold uppercase text-slate-400">
                  Time
                </th>

                <th className="px-5 py-3 text-xs font-bold uppercase text-slate-400">
                  Server
                </th>

                <th className="px-5 py-3 text-xs font-bold uppercase text-slate-400">
                  Event
                </th>

                <th className="px-5 py-3 text-xs font-bold uppercase text-slate-400">
                  Message
                </th>

                <th className="px-5 py-3 text-xs font-bold uppercase text-slate-400">
                  Severity
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredLogs.map((log) => (
                <tr
                  key={log.id}
                  className="border-b border-slate-50 hover:bg-slate-50"
                >
                  <td className="px-5 py-4 font-mono text-xs text-slate-500">
                    {log.time}
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                    {log.server}
                  </td>

                  <td className="px-5 py-4 text-xs font-bold text-slate-600">
                    {log.type}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {log.message}
                  </td>

                  <td className="px-5 py-4">
                    <SeverityBadge severity={log.severity} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}