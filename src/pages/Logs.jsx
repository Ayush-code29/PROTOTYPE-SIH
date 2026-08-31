import { useState } from "react";
import { Search } from "lucide-react";

import LogTable from "../components/LogTable";
import { logs } from "../data/mockData";

export default function Logs() {
  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("ALL");

  const filteredLogs = logs.filter((log) => {
    const searchMatch =
      log.server.toLowerCase().includes(search.toLowerCase()) ||
      log.message.toLowerCase().includes(search.toLowerCase());

    const severityMatch =
      severity === "ALL" || log.severity === severity;

    return searchMatch && severityMatch;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Live Log Explorer
      </h1>

      <p className="text-sm text-slate-500 mt-1">
        Search, filter and inspect system logs.
      </p>

      <div className="bg-white border border-slate-200 rounded-xl p-4 mt-6 flex gap-4">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3 top-2.5 text-slate-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search server or log message..."
            className="w-full border border-slate-200 rounded-lg py-2 pl-10 px-4 outline-none"
          />
        </div>

        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          className="border border-slate-200 rounded-lg px-4"
        >
          <option>ALL</option>
          <option>INFO</option>
          <option>WARNING</option>
          <option>ERROR</option>
          <option>CRITICAL</option>
        </select>

        <button className="bg-slate-950 text-white rounded-lg px-5">
          Export Logs
        </button>
      </div>

      <div className="mt-5">
        <LogTable logs={filteredLogs} />
      </div>
    </div>
  );
}