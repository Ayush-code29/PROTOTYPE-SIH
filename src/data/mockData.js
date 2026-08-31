export const logs = [
  {
    id: 1,
    time: "18:40:21",
    server: "AUTH-SERVER-01",
    service: "Authentication",
    severity: "CRITICAL",
    message: "Multiple failed login attempts detected",
  },

  {
    id: 2,
    time: "18:39:50",
    server: "DB-SERVER-02",
    service: "Database",
    severity: "ERROR",
    message: "Database connection timeout",
  },

  {
    id: 3,
    time: "18:39:30",
    server: "API-SERVER-01",
    service: "API Gateway",
    severity: "WARNING",
    message: "Response latency above configured threshold",
  },

  {
    id: 4,
    time: "18:38:49",
    server: "WEB-SERVER-03",
    service: "Web Application",
    severity: "INFO",
    message: "Application started successfully",
  },

  {
    id: 5,
    time: "18:37:05",
    server: "DB-SERVER-02",
    service: "Database",
    severity: "ERROR",
    message: "Connection pool limit reached",
  },
];

export const incidents = [
  {
    id: "INC-1042",
    title: "Repeated Authentication Failures",
    server: "AUTH-SERVER-01",
    severity: "CRITICAL",
    events: 42,
    time: "2 min ago",
  },

  {
    id: "INC-1041",
    title: "Database Connectivity Issue",
    server: "DB-SERVER-02",
    severity: "ERROR",
    events: 16,
    time: "8 min ago",
  },

  {
    id: "INC-1040",
    title: "High API Response Time",
    server: "API-SERVER-01",
    severity: "WARNING",
    events: 9,
    time: "15 min ago",
  },
];

export const servers = [
  {
    name: "AUTH-SERVER-01",
    ip: "10.10.1.12",
    status: "Online",
    logs: 12450,
  },

  {
    name: "DB-SERVER-02",
    ip: "10.10.1.21",
    status: "Warning",
    logs: 8432,
  },

  {
    name: "WEB-SERVER-03",
    ip: "10.10.1.33",
    status: "Online",
    logs: 6338,
  },

  {
    name: "API-SERVER-01",
    ip: "10.10.1.40",
    status: "Online",
    logs: 7891,
  },
];

export const chartData = [
  { time: "12 PM", logs: 1200, errors: 42 },
  { time: "1 PM", logs: 1900, errors: 35 },
  { time: "2 PM", logs: 1400, errors: 51 },
  { time: "3 PM", logs: 2300, errors: 62 },
  { time: "4 PM", logs: 2800, errors: 44 },
  { time: "5 PM", logs: 3200, errors: 75 },
  { time: "6 PM", logs: 3600, errors: 89 },
];