import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import {
  ChartNoAxesColumn,
  Shield,
  Activity,
  FileText,
  Settings,
  HelpCircle,
  Menu,
  X,
  User,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const SidebarItem = ({ icon, label, to, active, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center gap-3 p-4 rounded-xl transition
    ${
      active
        ? "bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 font-semibold"
        : "hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300"
    }`}
  >
    {icon}
    {label}
  </Link>
);

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { logout, user, loading } = useContext(AuthContext);

  const closeSidebar = () => setSidebarOpen(false);

  // dark mode
  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  const handleLogout = async () => {
    await logout();
    navigate("/auth/dashboard/login");
  };

  const menuItems = [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: <ChartNoAxesColumn size={18} />,
    },
    {
      label: "Vulnerabilities",
      to: "/dashboard/vulnerability",
      icon: <Shield size={18} />,
    },
    {
      label: "Monitoring",
      to: "/dashboard/continuousmonitoring",
      icon: <Activity size={18} />,
    },
    {
      label: "Reports",
      to: "/dashboard/reports",
      icon: <FileText size={18} />,
    },
    {
      label: "Support",
      to: "/dashboard/HelpSupport",
      icon: <HelpCircle size={18} />,
    },
    {
      label: "Settings",
      to: "/dashboard/settings",
      icon: <Settings size={18} />,
    },
  ];

  // Get display name (username, email, or full_name)
  const displayName =
    user?.username || user?.full_name || user?.email || "User";

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* ================= Sidebar ================= */}
      <aside
        className={`fixed md:static z-40 w-64 h-full bg-white dark:bg-slate-900
        border-r border-gray-200 dark:border-slate-800 flex flex-col
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-6 flex justify-between items-center shrink-0">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <button className="md:hidden" onClick={closeSidebar}>
            <X size={20} />
          </button>
        </div>
        <div className="h-0.5 w-70 bg-slate-400 -mt-2 -ml-6 mb-10"></div>

        <nav className="flex-1 overflow-y-auto px-2 py-2">
          <div className="flex flex-col gap-2">
            {menuItems.map((item, i) => (
              <SidebarItem
                key={i}
                {...item}
                active={location.pathname === item.to}
                onClick={closeSidebar}
              />
            ))}
          </div>
        </nav>

        <div className="p-6 shrink-0">
          <button
            onClick={handleLogout}
            className="flex items-center -ml-3 gap-3 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 w-full"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-30"
          onClick={closeSidebar}
        />
      )}

      {/* ================= Main Content Area ================= */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu size={20} />
          </button>

          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-slate-800 rounded-xl">
              <User size={18} />
              <span className="text-sm font-medium">
                {loading ? "Loading..." : displayName}
              </span>
            </div>
          </div>
        </header>

        {/* Main Content - SCROLLABLE */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950">
          <div className="p-6">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <footer className="p-3 text-center text-sm border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
          © 2026 WebXGuard
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
