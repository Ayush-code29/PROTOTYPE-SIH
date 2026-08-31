import {
  Search,
  Bell,
  UserCircle,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="relative w-80">
        <Search
          size={18}
          className="absolute left-3 top-2.5 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search logs, servers, incidents..."
          className="w-full border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell size={21} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] h-4 w-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        <div className="h-7 border-l border-slate-300"></div>

        <div className="flex items-center gap-2">
          <UserCircle size={28} />

          <div>
            <p className="text-sm font-semibold">
              Administrator
            </p>

            <p className="text-xs text-slate-500">
              System Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}