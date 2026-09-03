import { useState } from "react";
import { ShieldAlert } from "lucide-react";

import { initialIncidents } from "../data/mockData";
import SeverityBadge from "../components/SeverityBadge";
import IncidentModal from "../components/IncidentModal";

export default function Incidents() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-8">
      <div className="mb-7">
        <p className="text-sm font-medium text-blue-600">
          INCIDENT RESPONSE
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Incidents
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Investigate and manage detected security incidents
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {initialIncidents.map((incident) => (
          <button
            key={incident.id}
            onClick={() => setSelected(incident)}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:border-blue-200 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <ShieldAlert size={20} />
              </div>

              <SeverityBadge severity={incident.severity} />
            </div>

            <p className="mt-5 text-xs font-bold text-slate-400">
              {incident.id}
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-900">
              {incident.title}
            </h3>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-[10px] text-slate-400">
                  Events
                </p>
                <p className="mt-1 font-bold">{incident.events}</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-[10px] text-slate-400">
                  Servers
                </p>
                <p className="mt-1 font-bold">{incident.servers}</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-[10px] text-slate-400">
                  Risk
                </p>
                <p className="mt-1 font-bold text-red-600">
                  {incident.risk}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <IncidentModal
          incident={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}