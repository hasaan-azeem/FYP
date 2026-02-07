import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import logo from "../../assets/logo.png";
import { NAV_ITEMS } from "../admin/constants/navigation";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Bars Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-3.5 left-4 z-50 p-2 text-white "
      >
        <FaBars size={22} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 w-64 h-screen bg-black text-white flex flex-col p-4 z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <img src={logo} alt="Logo" className="h-10" />
          <button onClick={closeSidebar} className="lg:hidden text-white p-2">
            <FaTimes size={22} />
          </button>
        </div>

        <div className="w-full h-px bg-gray-600 mb-5"></div>

        {/* Menu — SCROLL WORKS */}
        <ul className="space-y-4 flex-1 overflow-y-auto scrollbar-hide">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => {
                    if (window.innerWidth < 1024) closeSidebar();
                  }}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-2 py-3 rounded w-full ${
                      isActive ? "bg-[#10B981]" : "hover:bg-[#10B981]"
                    }`
                  }
                >
                  <Icon size={20} />
                  {item.name}
                </NavLink>
              </li>
            );
          })}

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 p-2 mt-60 rounded bg-gray-500 w-full md:hidden"
          >
            <LogOut size={20} /> Logout
          </button>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
