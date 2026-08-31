export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconClass,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h3 className="text-3xl font-bold mt-2">
            {value}
          </h3>

          <p className="text-xs text-slate-500 mt-2">
            {subtitle}
          </p>
        </div>

        <div
          className={`h-11 w-11 rounded-lg flex items-center justify-center ${iconClass}`}
        >
          <Icon size={22} />
        </div>
      </div>
    </div>
  );
}