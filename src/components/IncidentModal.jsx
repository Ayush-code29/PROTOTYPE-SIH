import {
  Brain,
  CheckCircle2,
  Clock3,
  ShieldAlert,
  X,
} from "lucide-react";

import SeverityBadge from "./SeverityBadge";

export default function IncidentModal({ incident, onClose }) {
  if (!incident) return null;

  const timeline = [
    {
      time: "18:39:10",
      title: "Failed authentication",
      server: "server-01",
    },
    {
      time: "18:39:14",
      title: "Failed authentication",
      server: "server-01",
    },
    {
      time: "18:39:18",
      title: "Failed authentication",
      server: "server-02",
    },
    {
      time: "18:39:24",
      title: "Authentication spike detected",
      server: "server-01",
    },
    {
      time: "18:39:31",
      title: "Suspicious pattern detected",
      server: "server-03",
    },
    {
      time: "18:39:35",
      title: "Security incident created",
      server: "SarvtraAI",
    },
    {
      time: "18:39:37",
      title: "AI analysis completed",
      server: "SarvtraAI",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          <div>
            <p className="text-xs font-bold text-slate-400">
              INCIDENT INVESTIGATION
            </p>

            <h2 className="text-xl font-bold text-slate-900">
              {incident.id}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {incident.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Suspicious authentication activity detected across
                    multiple servers.
                  </p>
                </div>

                <SeverityBadge severity="CRITICAL" />
              </div>

              <div className="mt-6">
                <p className="mb-4 text-sm font-bold text-slate-900">
                  Incident Timeline
                </p>

                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div
                      key={`${item.time}-${index}`}
                      className="flex gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                          {index === timeline.length - 1 ? (
                            <Brain size={15} />
                          ) : (
                            <Clock3 size={15} />
                          )}
                        </div>

                        {index !== timeline.length - 1 && (
                          <div className="mt-1 h-7 w-px bg-slate-200" />
                        )}
                      </div>

                      <div className="pb-2">
                        <p className="text-xs font-semibold text-slate-400">
                          {item.time}
                        </p>

                        <p className="text-sm font-semibold text-slate-800">
                          {item.title}
                        </p>

                        <p className="text-xs text-slate-500">
                          Source: {item.server}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 p-5">
              <div className="flex items-center gap-2">
                <Brain size={18} className="text-blue-600" />

                <h3 className="font-bold text-slate-900">
                  AI Incident Analysis
                </h3>
              </div>

              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-blue-600">
                Frontend Prototype — Simulated AI Analysis
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white p-4">
                  <p className="text-xs text-slate-500">Probable Cause</p>

                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    Repeated authentication failures indicate a possible
                    credential abuse or brute-force pattern.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-4">
                  <p className="text-xs text-slate-500">
                    Recommended Action
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    Review affected accounts, investigate source activity
                    and preserve related logs.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-white p-4">
                <p className="text-xs font-bold text-slate-600">
                  Why is this suspicious?
                </p>

                <div className="mt-3 space-y-2">
                  {[
                    "Authentication failures exceeded the configured demo threshold.",
                    "Multiple events occurred within a short time window.",
                    "Related events were observed across multiple servers.",
                    "The combined pattern produced a critical demo threat score.",
                  ].map((reason) => (
                    <div
                      key={reason}
                      className="flex gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-500"
                      />
                      {reason}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-slate-200 p-5">
              <div className="flex items-center gap-2">
                <ShieldAlert size={18} className="text-red-600" />

                <h3 className="font-bold text-slate-900">
                  Incident Summary
                </h3>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-xs text-slate-500">Risk Score</p>
                  <p className="mt-1 text-3xl font-bold text-red-600">
                    {incident.risk}/100
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Related Events
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    {incident.events}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Affected Servers
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    {incident.servers}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Status</p>
                  <p className="mt-1 text-lg font-bold text-red-600">
                    OPEN
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-bold text-slate-900">
                Correlation Summary
              </p>

              <div className="mt-4 space-y-3">
                {[
                  ["12", "Authentication failures"],
                  ["4", "Servers involved"],
                  ["1", "Suspicious pattern"],
                  ["1", "Incident generated"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0"
                  >
                    <span className="text-xs text-slate-500">
                      {label}
                    </span>

                    <span className="text-sm font-bold text-slate-900">
                      {number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}