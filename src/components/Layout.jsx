import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Topbar />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}