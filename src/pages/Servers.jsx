import {
  Server,
  CircleCheck,
  TriangleAlert,
} from "lucide-react";

import { servers } from "../data/mockData";

export default function Servers() {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Connected Servers
      </h1>

      <p className="text-sm text-slate-500 mt-1">
        View all systems connected to SarvtraAI.
      </p>

      <div className="grid grid-cols-2 gap-5 mt-6">
        {servers.map((server) => {
          const online = server.status === "Online";

          return (
            <div
              key={server.name}
              className="bg-white border border-slate-200 rounded-xl p-5"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <Server />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {server.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {server.ip}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-1 text-sm ${
                    online
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {online ? (
                    <CircleCheck size={16} />
                  ) : (
                    <TriangleAlert size={16} />
                  )}

                  {server.status}
                </div>
              </div>

              <div className="border-t mt-5 pt-4 flex justify-between">
                <span className="text-sm text-slate-500">
                  Logs Today
                </span>

                <span className="font-semibold">
                  {server.logs.toLocaleString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}