import { Brain, Lightbulb, ShieldCheck } from "lucide-react";

export default function AIInsights() {
  return (
    <div className="p-8">
      <div className="mb-7">
        <p className="text-sm font-medium text-blue-600">
          INTELLIGENT ANALYSIS
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          AI Insights
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Explainable security analysis and recommendations
        </p>
      </div>

      <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <div className="flex gap-3">
          <Brain className="text-blue-600" />

          <div>
            <p className="font-bold text-blue-900">
              Prototype AI Analysis
            </p>

            <p className="mt-1 text-xs text-blue-700">
              The current frontend uses simulated analysis for
              demonstration. A production AI service can be connected
              through the backend later.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <Lightbulb className="text-amber-500" />

          <h3 className="mt-4 font-bold text-slate-900">
            Anomaly Detection
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Identify unusual authentication, API and database
            activity.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <Brain className="text-blue-600" />

          <h3 className="mt-4 font-bold text-slate-900">
            Root Cause Analysis
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Correlate related events and provide probable causes.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <ShieldCheck className="text-emerald-600" />

          <h3 className="mt-4 font-bold text-slate-900">
            Explainable Alerts
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Explain why an event was considered suspicious.
          </p>
        </div>
      </div>
    </div>
  );
}