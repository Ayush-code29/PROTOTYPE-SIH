import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useState } from "react";

export default function PIIMaskingDemo() {
  const [sanitized, setSanitized] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <LockKeyhole size={19} />
        </div>

        <div>
          <h2 className="font-bold text-slate-900">
            Privacy Protection Demo
          </h2>

          <p className="text-xs text-slate-500">
            Sensitive data is masked before AI analysis
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-slate-950 p-4 font-mono text-xs leading-6 text-slate-300">
        {sanitized ? (
          <>
            <div>
              User: <span className="text-red-400">[REDACTED]</span>
            </div>

            <div>
              Email: <span className="text-red-400">[REDACTED]</span>
            </div>

            <div>
              Aadhaar: <span className="text-red-400">[REDACTED]</span>
            </div>

            <div>
              Action: <span className="text-emerald-400">Failed Login</span>
            </div>

            <div>
              IP: <span className="text-blue-400">10.20.30.45</span>
            </div>
          </>
        ) : (
          <>
            <div>
              User: <span className="text-yellow-300">Rahul Sharma</span>
            </div>

            <div>
              Email:{" "}
              <span className="text-yellow-300">
                rahul@gmail.com
              </span>
            </div>

            <div>
              Aadhaar:{" "}
              <span className="text-yellow-300">
                1234-5678-9012
              </span>
            </div>

            <div>
              Action:{" "}
              <span className="text-emerald-400">Failed Login</span>
            </div>

            <div>
              IP: <span className="text-blue-400">10.20.30.45</span>
            </div>
          </>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          {sanitized ? (
            <p className="text-xs font-semibold text-emerald-600">
              ✓ Sensitive fields masked
            </p>
          ) : (
            <p className="text-xs font-semibold text-amber-600">
              Raw log — before sanitization
            </p>
          )}
        </div>

        <button
          onClick={() => setSanitized(!sanitized)}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ${
            sanitized
              ? "bg-slate-100 text-slate-700"
              : "bg-emerald-600 text-white hover:bg-emerald-700"
          }`}
        >
          {sanitized ? <Eye size={15} /> : <EyeOff size={15} />}

          {sanitized ? "Show Raw Log" : "Sanitize Before AI"}
        </button>
      </div>
    </div>
  );
}