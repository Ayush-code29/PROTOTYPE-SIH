import {
  Bell,
  Mail,
  Send,
} from "lucide-react";

const alerts = [
  {
    title: "Authentication Failure Spike",
    server: "AUTH-SERVER-01",
    severity: "CRITICAL",
    time: "18:40",
  },

  {
    title: "Database Connection Failure",
    server: "DB-SERVER-02",
    severity: "ERROR",
    time: "18:31",
  },

  {
    title: "High API Response Time",
    server: "API-SERVER-01",
    severity: "WARNING",
    time: "18:24",
  },
];

export default function Alerts() {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Alerts & Notifications
      </h1>

      <p className="text-sm text-slate-500 mt-1">
        High-priority events that require administrator attention.
      </p>

      <div className="grid grid-cols-2 gap-5 mt-6">
        <div className="bg-white border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-600" />

            <div>
              <h3 className="font-semibold">
                Email Alerts
              </h3>

              <p className="text-sm text-slate-500">
                admin@sarvtra.gov
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <Send className="text-blue-500" />

            <div>
              <h3 className="font-semibold">
                Telegram Alerts
              </h3>

              <p className="text-sm text-slate-500">
                SarvtraAI Admin Bot
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-xl mt-6 overflow-hidden">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-5 border-b last:border-0"
          >
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center">
                <Bell size={20} />
              </div>

              <div>
                <h3 className="font-semibold">
                  {alert.title}
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  {alert.server}
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs font-semibold text-red-600">
                {alert.severity}
              </span>

              <p className="text-xs text-slate-400 mt-1">
                {alert.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}