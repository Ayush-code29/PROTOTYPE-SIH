import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Logs from "./pages/Logs.jsx";
import Incidents from "./pages/Incidents.jsx";
import AIInsights from "./pages/AIInsights.jsx";
import Servers from "./pages/Servers.jsx";
import Alerts from "./pages/Alerts.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/ai-insights" element={<AIInsights />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/alerts" element={<Alerts />} />
      </Route>
    </Routes>
  );
}

export default App;