import SeverityBadge from "./SeverityBadge";
import { Server } from "lucide-react";

export default function IncidentCard({ incident }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex gap-3 items-center">
            <span className="text-xs text-slate-500">
              {incident.id}
            </span>

            <SeverityBadge severity={incident.severity} />
          </div>

          <h3 className="font-semibold text-lg mt-3">
            {incident.title}
          </h3>

          <div className="flex items-center gap-2 mt-3 text-sm text-slate-500">
            <Server size={16} />

            {incident.server}
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm font-bold">
            {incident.events} events
          </p>

          <p className="text-xs text-slate-500 mt-1">
            {incident.time}
          </p>
        </div>
      </div>
    </div>
  );
}