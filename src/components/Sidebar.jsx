import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  ScrollText,
  TriangleAlert,
  BrainCircuit,
  Server,
  Bell,
  ShieldCheck,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Live Logs",
    path: "/logs",
    icon: ScrollText,
  },
  {
    name: "Incidents",
    path: "/incidents",
    icon: TriangleAlert,
  },
  {
    name: "AI Insights",
    path: "/ai-insights",
    icon: BrainCircuit,
  },
  {
    name: "Servers",
    path: "/servers",
    icon: Server,
  },
  {
    name: "Alerts",
    path: "/alerts",
    icon: Bell,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-950 text-white p-5">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-11 w-11 bg-blue-600 rounded-xl flex items-center justify-center">
          <ShieldCheck size={25} />
        </div>

        <div>
          <h1 className="font-bold text-xl">SarvtraAI</h1>
          <p className="text-xs text-slate-400">
            Intelligent Log Monitoring
          </p>
        </div>
      </div>

      <nav className="space-y-2">
        {links.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`
            }
          >
            <Icon size={19} />

            <span className="text-sm font-medium">
              {name}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-6 left-5 right-5 bg-slate-900 rounded-xl p-4">
        <p className="text-xs text-slate-400">
          System Status
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="h-2.5 w-2.5 bg-green-500 rounded-full"></span>

          <span className="text-sm font-semibold">
            All Systems Operational
          </span>
        </div>
      </div>
    </aside>
  );
}