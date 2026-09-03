export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  danger = false,
}) {
  return (
    <div
      className={`rounded-2xl border bg-white p-5 shadow-sm ${
        danger ? "border-red-200" : "border-slate-200"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <h3
            className={`mt-2 text-3xl font-bold ${
              danger ? "text-red-600" : "text-slate-900"
            }`}
          >
            {value}
          </h3>

          <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            danger
              ? "bg-red-50 text-red-600"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}