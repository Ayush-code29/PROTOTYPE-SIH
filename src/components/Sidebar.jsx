import {
  LayoutDashboard,
  FileText,
  AlertTriangle,
  Brain,
  Server,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Logs",
    path: "/logs",
    icon: FileText,
  },
  {
    name: "Incidents",
    path: "/incidents",
    icon: AlertTriangle,
  },
  {
    name: "AI Insights",
    path: "/ai-insights",
    icon: Brain,
  },
  {
    name: "Servers",
    path: "/servers",
    icon: Server,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
      <div className="flex h-16 items-center border-b border-slate-200 px-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            Sarvtra<span className="text-blue-600">AI</span>
          </h1>
          <p className="text-[10px] font-medium tracking-wider text-slate-400">
            INTELLIGENT LOG SECURITY
          </p>
        </div>
      </div>

      <div className="px-4 py-6">
        <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Monitoring
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto border-t border-slate-200 p-4">
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold text-slate-700">
              Monitoring Active
            </span>
          </div>

          <p className="mt-1 text-[11px] text-slate-500">
            Prototype environment
          </p>
        </div>
      </div>
    </aside>
  );
}