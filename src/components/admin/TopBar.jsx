import React from "react";
import { LogOut } from "lucide-react";
import { useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../admin/constants/navigation";
import { DarkMode } from "./common/DarkMode";

const TopBar = () => {
  const location = useLocation();

  const activeItem = NAV_ITEMS.find(
    (item) =>
      item.path === location.pathname ||
      location.pathname.startsWith(item.path + "/")
  );

  return (
    <div className="w-full h-16 bg-white dark:bg-gray-800 dark:text-white flex items-center justify-between px-4 md:px-6 shadow sticky top-0 z-30">
      <div className="flex items-center gap-2 ml-10 lg:ml-0">
        <h2 className="text-2xl font-semibold">
          {activeItem?.name || "Dashboard Overview"}
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <DarkMode />
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <button className="hidden md:block cursor-pointer">
          <LogOut size={22} className="text-[#1EC8A0] hover:text-black" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
