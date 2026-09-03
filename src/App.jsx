import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Logs from "./pages/Logs";
import Incidents from "./pages/Incidents";
import Alerts from "./pages/Alerts";
import AIInsights from "./pages/AIInsights";
import Servers from "./pages/Servers";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/ai-insights" element={<AIInsights />} />
        <Route path="/servers" element={<Servers />} />
      </Route>
    </Routes>
  );
}