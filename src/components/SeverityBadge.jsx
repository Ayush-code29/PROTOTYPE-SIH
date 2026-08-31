export default function SeverityBadge({ severity }) {
  const styles = {
    INFO: "bg-blue-100 text-blue-700",
    WARNING: "bg-yellow-100 text-yellow-700",
    ERROR: "bg-orange-100 text-orange-700",
    CRITICAL: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
        styles[severity] || styles.INFO
      }`}
    >
      {severity}
    </span>
  );
}