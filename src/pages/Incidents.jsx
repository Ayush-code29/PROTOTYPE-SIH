import IncidentCard from "../components/IncidentCard";
import { incidents } from "../data/mockData";

export default function Incidents() {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Incident Management
      </h1>

      <p className="text-sm text-slate-500 mt-1">
        Similar log events are grouped into meaningful incidents.
      </p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white rounded-xl border p-5">
          <p className="text-sm text-slate-500">
            Open Incidents
          </p>

          <p className="text-3xl font-bold mt-2">
            7
          </p>
        </div>

        <div className="bg-white rounded-xl border p-5">
          <p className="text-sm text-slate-500">
            Critical
          </p>

          <p className="text-3xl font-bold text-red-600 mt-2">
            3
          </p>
        </div>

        <div className="bg-white rounded-xl border p-5">
          <p className="text-sm text-slate-500">
            Resolved Today
          </p>

          <p className="text-3xl font-bold text-green-600 mt-2">
            14
          </p>
        </div>
      </div>

      <div className="space-y-4 mt-6">
        {incidents.map((incident) => (
          <IncidentCard
            key={incident.id}
            incident={incident}
          />
        ))}
      </div>
    </div>
  );
}