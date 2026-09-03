const styles = {
  INFO: "bg-slate-100 text-slate-700",
  WARNING: "bg-amber-100 text-amber-700",
  MEDIUM: "bg-amber-100 text-amber-700",
  ERROR: "bg-orange-100 text-orange-700",
  HIGH: "bg-red-100 text-red-700",
  CRITICAL: "bg-red-600 text-white",
};

export default function SeverityBadge({ severity }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
        styles[severity] || "bg-slate-100 text-slate-700"
      }`}
    >
      {severity}
    </span>
  );
}