import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  FileText,
  Server,
  ShieldAlert,
  Activity,
} from "lucide-react";

import StatCard from "../components/StatCard";
import SimulationPanel from "../components/SimulationPanel";
import IncidentModal from "../components/IncidentModal";
import PIIMaskingDemo from "../components/PIIMaskingDemo";
import SeverityBadge from "../components/SeverityBadge";

import {
  initialAlerts,
  initialIncidents,
  initialLogs,
} from "../data/mockData";

export default function Dashboard() {
  const [logs, setLogs] = useState(initialLogs);
  const [incidents, setIncidents] = useState(initialIncidents);
  const [alerts, setAlerts] = useState(initialAlerts);

  const [logsToday, setLogsToday] = useState(38421);
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);

  const [simulatedIncident, setSimulatedIncident] = useState(null);
  const [selectedIncident, setSelectedIncident] = useState(null);

  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const resetDemo = () => {
    clearTimers();

    setLogs(initialLogs);
    setIncidents(initialIncidents);
    setAlerts(initialAlerts);
    setLogsToday(38421);
    setSimulationRunning(false);
    setSimulationStep(0);
    setSimulatedIncident(null);
  };

  const simulateIncident = () => {
    if (simulationRunning) return;

    clearTimers();

    setSimulationRunning(true);
    setSimulationStep(0);
    setSimulatedIncident(null);

    const suspiciousLogs = [
      {
        id: Date.now() + 1,
        time: "18:39:10",
        server: "server-01",
        type: "AUTH_FAILED",
        message: "Repeated authentication failure detected",
        severity: "WARNING",
      },
      {
        id: Date.now() + 2,
        time: "18:39:14",
        server: "server-01",
        type: "AUTH_FAILED",
        message: "Repeated authentication failure detected",
        severity: "WARNING",
      },
      {
        id: Date.now() + 3,
        time: "18:39:18",
        server: "server-02",
        type: "AUTH_FAILED",
        message: "Repeated authentication failure detected",
        severity: "WARNING",
      },
      {
        id: Date.now() + 4,
        time: "18:39:21",
        server: "server-03",
        type: "AUTH_FAILED",
        message: "Repeated authentication failure detected",
        severity: "WARNING",
      },
      {
        id: Date.now() + 5,
        time: "18:39:24",
        server: "server-01",
        type: "AUTH_SPIKE",
        message: "Authentication failure threshold exceeded",
        severity: "ERROR",
      },
      {
        id: Date.now() + 6,
        time: "18:39:31",
        server: "server-03",
        type: "SUSPICIOUS_PATTERN",
        message: "Correlated authentication anomaly detected",
        severity: "CRITICAL",
      },
    ];

    // STEP 1
    timers.current.push(
      setTimeout(() => {
        setSimulationStep(1);

        setLogs((current) => [
          ...suspiciousLogs.slice(0, 3),
          ...current,
        ]);

        setLogsToday((value) => value + 12);
      }, 800)
    );

    // STEP 2
    timers.current.push(
      setTimeout(() => {
        setSimulationStep(2);

        setLogs((current) => [
          ...suspiciousLogs.slice(3, 5),
          ...current,
        ]);
      }, 2200)
    );

    // STEP 3
    timers.current.push(
      setTimeout(() => {
        setSimulationStep(3);

        setLogs((current) => [
          suspiciousLogs[5],
          ...current,
        ]);
      }, 3600)
    );

    // STEP 4
    timers.current.push(
      setTimeout(() => {
        setSimulationStep(4);
      }, 5000)
    );

    // STEP 5
    timers.current.push(
      setTimeout(() => {
        setSimulationStep(5);

        const newIncident = {
          id: "INC-1043",
          title: "Suspicious Authentication Activity",
          severity: "CRITICAL",
          status: "OPEN",
          events: 42,
          servers: 4,
          risk: 87,
          time: "18:39:35",
        };

        setSimulatedIncident(newIncident);

        setIncidents((current) => [
          newIncident,
          ...current,
        ]);

        setAlerts((current) => [
          {
            id: "ALT-202",
            title: "Critical Authentication Anomaly",
            severity: "CRITICAL",
            time: "18:39:35",
          },
          ...current,
        ]);
      }, 6200)
    );

    // STEP 6
    timers.current.push(
      setTimeout(() => {
        setSimulationStep(6);
      }, 7600)
    );

    // COMPLETE
    timers.current.push(
      setTimeout(() => {
        setSimulationRunning(false);
      }, 8200)
    );
  };

  const criticalAlerts = alerts.filter(
    (alert) => alert.severity === "CRITICAL"
  ).length;

  return (
    <>
      <div className="p-8">
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-medium text-blue-600">
              SECURITY OVERVIEW
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Real-time security monitoring and intelligent log analysis
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

            <span className="text-xs font-semibold text-slate-600">
              LIVE MONITORING
            </span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Logs Today"
            value={logsToday.toLocaleString()}
            subtitle="Events processed"
            icon={<FileText size={19} />}
          />

          <StatCard
            title="Active Incidents"
            value={incidents.length}
            subtitle="Requires attention"
            danger={incidents.some(
              (item) => item.severity === "CRITICAL"
            )}
            icon={<ShieldAlert size={19} />}
          />

          <StatCard
            title="Critical Alerts"
            value={criticalAlerts}
            subtitle="Priority alerts"
            danger={criticalAlerts > 0}
            icon={<AlertTriangle size={19} />}
          />

          <StatCard
            title="Servers"
            value="4"
            subtitle="All systems operational"
            icon={<Server size={19} />}
          />
        </div>

        <div className="mt-6">
          <SimulationPanel
            running={simulationRunning}
            step={simulationStep}
            incident={simulatedIncident}
            onSimulate={simulateIncident}
            onReset={resetDemo}
            onInvestigate={() =>
              setSelectedIncident(simulatedIncident)
            }
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-slate-900">
                  Recent Incidents
                </h2>
                <p className="text-xs text-slate-500">
                  Latest detected security events
                </p>
              </div>

              <ShieldAlert size={18} className="text-slate-400" />
            </div>

            <div className="mt-5 space-y-3">
              {incidents.slice(0, 4).map((incident) => (
                <button
                  key={incident.id}
                  onClick={() => setSelectedIncident(incident)}
                  className="flex w-full items-center justify-between rounded-xl border border-slate-100 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50/30"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400">
                        {incident.id}
                      </span>

                      <SeverityBadge
                        severity={incident.severity}
                      />
                    </div>

                    <p className="mt-2 text-sm font-semibold text-slate-800">
                      {incident.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {incident.events} events · {incident.servers}{" "}
                      servers
                    </p>
                  </div>

                  <span className="text-xs text-slate-400">
                    {incident.time}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-slate-900">
                  Live Activity
                </h2>

                <p className="text-xs text-slate-500">
                  Latest system events
                </p>
              </div>

              <Activity size={18} className="text-emerald-500" />
            </div>

            <div className="mt-5 space-y-3">
              {logs.slice(0, 7).map((log) => (
                <div
                  key={log.id}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      log.severity === "CRITICAL"
                        ? "bg-red-600"
                        : log.severity === "ERROR"
                        ? "bg-orange-500"
                        : log.severity === "WARNING"
                        ? "bg-amber-500"
                        : "bg-emerald-500"
                    }`}
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-slate-800">
                      {log.message}
                    </p>

                    <p className="text-[11px] text-slate-400">
                      {log.server} · {log.time}
                    </p>
                  </div>

                  <SeverityBadge severity={log.severity} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <PIIMaskingDemo />
        </div>

        <div className="mt-5 text-center">
          <p className="text-[11px] text-slate-400">
            SarvtraAI frontend prototype · Simulation data is for
            demonstration purposes
          </p>
        </div>
      </div>

      {selectedIncident && (
        <IncidentModal
          incident={selectedIncident}
          onClose={() => setSelectedIncident(null)}
        />
      )}
    </>
  );
}