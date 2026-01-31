import {
  ChartNoAxesColumn,
  Shield,
  AlertCircle,
  Activity,
  FileText,
  Settings,
  HelpCircle,
  TriangleAlert,
} from "lucide-react";

export const NAV_ITEMS = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: ChartNoAxesColumn,
  },
  {
    name: "Websites",
    path: "/websites",
    icon: Shield,
  },
  {
    name: "Continuous Monitoring",
    path: "/continousmonitoring",
    icon: Activity,
  },
  {
    name: "Alerts",
    path: "/alerts",
    icon: TriangleAlert,
  },
  {
    name: "Vulnerabilities",
    path: "/vulnerabilities",
    icon: AlertCircle,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: FileText,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    name: "Help & Support",
    path: "/HelpSupport",
    icon: HelpCircle,
  },
];
