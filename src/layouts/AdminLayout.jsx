import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/SideBar";
import TopBar from "../components/admin/TopBar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-transparent">
      {/* Sidebar */}
      <div className="flex-none h-screen">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex-none">
          <TopBar />
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-5 scrollbar-hide">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
