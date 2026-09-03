import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <Topbar criticalAlerts={0} />

      <main className="ml-64 pt-16">
        <Outlet />
      </main>
    </div>
  );
}