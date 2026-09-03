import {
  CheckCircle2,
  Circle,
  Loader2,
  ShieldAlert,
  Zap,
} from "lucide-react";

const steps = [
  "Generating suspicious logs",
  "Detecting abnormal activity",
  "Correlating events",
  "Calculating threat score",
  "Creating security incident",
  "Running AI analysis",
];

export default function SimulationPanel({
  running,
  step,
  incident,
  onSimulate,
  onReset,
  onInvestigate,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Zap size={18} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Security Incident Simulator
              </h2>

              <p className="text-xs text-slate-500">
                Demonstrate SarvtraAI's incident detection workflow
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onSimulate}
            disabled={running}
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {running ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Simulation Running
              </>
            ) : (
              <>
                <Zap size={16} />
                Simulate Incident
              </>
            )}
          </button>

          <button
            onClick={onReset}
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
          >
            Reset
          </button>
        </div>
      </div>

      {running && (
        <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-blue-900">
                Incident Simulation
              </p>

              <p className="text-xs text-blue-600">
                Processing simulated security events...
              </p>
            </div>

            <span className="text-sm font-bold text-blue-700">
              {Math.min(Math.round((step / steps.length) * 100), 100)}%
            </span>
          </div>

          <div className="mb-5 h-2 overflow-hidden rounded-full bg-blue-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{
                width: `${Math.min(
                  (step / steps.length) * 100,
                  100
                )}%`,
              }}
            />
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {steps.map((item, index) => {
              const completed = index < step;
              const active = index === step;

              return (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg bg-white px-3 py-2"
                >
                  {completed ? (
                    <CheckCircle2
                      size={17}
                      className="text-emerald-500"
                    />
                  ) : active ? (
                    <Loader2
                      size={17}
                      className="animate-spin text-blue-600"
                    />
                  ) : (
                    <Circle size={17} className="text-slate-300" />
                  )}

                  <span
                    className={`text-sm ${
                      completed
                        ? "font-medium text-slate-700"
                        : active
                        ? "font-bold text-blue-700"
                        : "text-slate-400"
                    }`}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {incident && !running && (
        <div className="mt-6 overflow-hidden rounded-2xl border border-red-200 bg-red-50">
          <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white">
                <ShieldAlert size={24} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-red-700">
                    SECURITY INCIDENT DETECTED
                  </span>

                  <span className="rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">
                    CRITICAL
                  </span>
                </div>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {incident.id} — {incident.title}
                </h3>

                <p className="mt-1 text-xs text-slate-600">
                  {incident.events} related events correlated across{" "}
                  {incident.servers} servers.
                </p>
              </div>
            </div>

            <button
              onClick={onInvestigate}
              className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-red-700"
            >
              Investigate Incident
            </button>
          </div>

          <div className="grid border-t border-red-200 bg-white md:grid-cols-4">
            <div className="border-b border-slate-100 p-4 md:border-b-0 md:border-r">
              <p className="text-xs text-slate-500">Risk Score</p>
              <p className="mt-1 text-xl font-bold text-red-600">
                {incident.risk}/100
              </p>
            </div>

            <div className="border-b border-slate-100 p-4 md:border-b-0 md:border-r">
              <p className="text-xs text-slate-500">Related Events</p>
              <p className="mt-1 text-xl font-bold text-slate-900">
                {incident.events}
              </p>
            </div>

            <div className="border-b border-slate-100 p-4 md:border-b-0 md:border-r">
              <p className="text-xs text-slate-500">Servers Affected</p>
              <p className="mt-1 text-xl font-bold text-slate-900">
                {incident.servers}
              </p>
            </div>

            <div className="p-4">
              <p className="text-xs text-slate-500">Status</p>
              <p className="mt-1 text-xl font-bold text-red-600">
                OPEN
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}