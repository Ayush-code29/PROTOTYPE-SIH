import SeverityBadge from "./SeverityBadge";

export default function LogTable({ logs }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr className="text-left text-xs text-slate-500">
            <th className="p-4">Time</th>
            <th className="p-4">Server</th>
            <th className="p-4">Service</th>
            <th className="p-4">Severity</th>
            <th className="p-4">Message</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log) => (
            <tr
              key={log.id}
              className="border-t border-slate-100 hover:bg-slate-50"
            >
              <td className="p-4 text-sm text-slate-500">
                {log.time}
              </td>

              <td className="p-4 text-sm font-medium">
                {log.server}
              </td>

              <td className="p-4 text-sm">
                {log.service}
              </td>

              <td className="p-4">
                <SeverityBadge severity={log.severity} />
              </td>

              <td className="p-4 text-sm">
                {log.message}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}