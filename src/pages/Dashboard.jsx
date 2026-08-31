import {
  Server,
  ScrollText,
  TriangleAlert,
  ShieldAlert,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import StatCard from "../components/StatCard";
import LogTable from "../components/LogTable";

import {
  logs,
  chartData,
} from "../data/mockData";

export default function Dashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Security Overview
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Real-time monitoring of connected systems and logs.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <StatCard
          title="Connected Servers"
          value="12"
          subtitle="11 healthy, 1 warning"
          icon={Server}
          iconClass="bg-blue-100 text-blue-600"
        />

        <StatCard
          title="Logs Today"
          value="38.4K"
          subtitle="Across all connected sources"
          icon={ScrollText}
          iconClass="bg-purple-100 text-purple-600"
        />

        <StatCard
          title="Active Incidents"
          value="7"
          subtitle="3 require attention"
          icon={TriangleAlert}
          iconClass="bg-yellow-100 text-yellow-600"
        />

        <StatCard
          title="Critical Alerts"
          value="3"
          subtitle="Immediate investigation required"
          icon={ShieldAlert}
          iconClass="bg-red-100 text-red-600"
        />
      </div>

      <div className="grid grid-cols-3 gap-5 mt-6">
        <div className="col-span-2 bg-white border border-slate-200 rounded-xl p-5">
          <h2 className="font-semibold text-lg">
            Log Activity
          </h2>

          <p className="text-xs text-slate-500 mt-1 mb-5">
            Log volume during the last few hours
          </p>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="time" />

                <YAxis />

                <Tooltip />

                <Line
                  dataKey="logs"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={false}
                />

                <Line
                  dataKey="errors"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h2 className="font-semibold text-lg">
            Latest AI Insight
          </h2>

          <div className="mt-4 bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="font-semibold text-sm text-blue-700">
              Database Connectivity Issue
            </p>

            <p className="text-sm mt-3 leading-6 text-slate-700">
              Multiple database timeout events occurred alongside
              connection pool warnings.
            </p>

            <div className="mt-4">
              <p className="text-xs uppercase text-slate-500 font-semibold">
                Probable Cause
              </p>

              <p className="text-sm mt-1">
                Connection pool exhaustion may be affecting API
                requests.
              </p>
            </div>
          </div>

          <button className="mt-4 w-full bg-slate-950 text-white py-2.5 rounded-lg text-sm font-medium">
            View Full Analysis
          </button>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between mb-3">
          <h2 className="font-semibold text-lg">
            Recent Logs
          </h2>

          <button className="text-blue-600 text-sm">
            View all
          </button>
        </div>

        <LogTable logs={logs.slice(0, 4)} />
      </div>
    </div>
  );
}