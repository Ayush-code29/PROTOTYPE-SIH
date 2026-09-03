export const initialLogs = [
  {
    id: 1,
    time: "18:35:12",
    server: "server-01",
    type: "AUTH_SUCCESS",
    message: "User authentication successful",
    severity: "INFO",
  },
  {
    id: 2,
    time: "18:35:41",
    server: "server-02",
    type: "API_REQUEST",
    message: "API request completed successfully",
    severity: "INFO",
  },
  {
    id: 3,
    time: "18:36:03",
    server: "server-01",
    type: "AUTH_FAILED",
    message: "Authentication failed for user",
    severity: "WARNING",
  },
  {
    id: 4,
    time: "18:36:19",
    server: "server-03",
    type: "DB_QUERY",
    message: "Database query executed",
    severity: "INFO",
  },
  {
    id: 5,
    time: "18:37:02",
    server: "server-02",
    type: "API_ERROR",
    message: "API request returned HTTP 500",
    severity: "ERROR",
  },
  {
    id: 6,
    time: "18:37:45",
    server: "server-01",
    type: "AUTH_SUCCESS",
    message: "User authentication successful",
    severity: "INFO",
  },
  {
    id: 7,
    time: "18:38:04",
    server: "server-04",
    type: "FIREWALL_EVENT",
    message: "Inbound connection allowed",
    severity: "INFO",
  },
  {
    id: 8,
    time: "18:38:29",
    server: "server-03",
    type: "AUTH_FAILED",
    message: "Authentication failed for user",
    severity: "WARNING",
  },
];

export const initialIncidents = [
  {
    id: "INC-1041",
    title: "API Service Degradation",
    severity: "HIGH",
    status: "INVESTIGATING",
    events: 18,
    servers: 2,
    risk: 71,
    time: "18:22:14",
  },
  {
    id: "INC-1042",
    title: "Unusual Database Activity",
    severity: "MEDIUM",
    status: "OPEN",
    events: 9,
    servers: 1,
    risk: 52,
    time: "18:31:48",
  },
];

export const initialAlerts = [
  {
    id: "ALT-201",
    title: "API Error Spike",
    severity: "HIGH",
    time: "18:37:02",
  },
  {
    id: "ALT-200",
    title: "Multiple Failed Authentication",
    severity: "MEDIUM",
    time: "18:36:03",
  },
];

export const servers = [
  {
    name: "server-01",
    ip: "10.20.10.21",
    status: "ONLINE",
    logs: "12.4K",
  },
  {
    name: "server-02",
    ip: "10.20.10.22",
    status: "ONLINE",
    logs: "9.8K",
  },
  {
    name: "server-03",
    ip: "10.20.10.23",
    status: "ONLINE",
    logs: "8.1K",
  },
  {
    name: "server-04",
    ip: "10.20.10.24",
    status: "ONLINE",
    logs: "8.1K",
  },
];