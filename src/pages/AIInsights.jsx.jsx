import {
  BrainCircuit,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

export default function AIInsights() {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        AI Insights
      </h1>

      <p className="text-sm text-slate-500 mt-1">
        Sanitized log data is analyzed to generate human-readable insights.
      </p>

      <div className="grid grid-cols-2 gap-5 mt-6">
        <div className="bg-white border rounded-xl p-6">
          <div className="flex items-center gap-3">
            <BrainCircuit className="text-blue-600" />

            <h2 className="font-bold text-lg">
              Incident Summary
            </h2>
          </div>

          <div className="mt-5 bg-slate-50 rounded-xl p-4">
            <p className="text-sm leading-7">
              16 related database errors were detected on
              DB-SERVER-02 during the last 10 minutes.
              API request failures increased shortly after
              repeated database connection timeouts.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="text-sm font-semibold">
              Probable Cause
            </h3>

            <p className="text-sm text-slate-600 mt-2">
              Database connection pool exhaustion may be
              causing application requests to fail.
            </p>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-6">
          <div className="flex items-center gap-3">
            <Lightbulb className="text-yellow-500" />

            <h2 className="font-bold text-lg">
              Suggested Actions
            </h2>
          </div>

          <div className="space-y-3 mt-5">
            {[
              "Check current database connection pool usage.",
              "Inspect active and idle database connections.",
              "Review recent traffic spikes on API services.",
              "Verify database server availability.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-3 bg-slate-50 rounded-lg p-3"
              >
                <div className="h-6 w-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>

                <p className="text-sm">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck className="text-green-600 mt-1" />

          <div>
            <h3 className="font-semibold text-green-800">
              Privacy Filter Active
            </h3>

            <p className="text-sm text-green-700 mt-1">
              Sensitive fields are masked before logs are
              passed to the AI analysis layer.
            </p>

            <div className="font-mono text-xs bg-white rounded-lg p-3 mt-3">
              user_email = [REDACTED]
              <br />
              aadhaar = [REDACTED]
              <br />
              event = Database connection failed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}