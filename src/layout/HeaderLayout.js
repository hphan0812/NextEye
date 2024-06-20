import React from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Icons for theme toggle
import { HiMenu } from "react-icons/hi"; // Icon for the menu

const HeaderLayout = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/img/logo_company.png" alt="NextEye Logo" className="h-8 mr-2" />
        <span className="text-xl font-semibold">NextEye</span>
        <div className="flex items-center space-x-4">
            <HiMenu className="text-2xl cursor-pointer" />
            <div className="flex items-center space-x-1">
                <FaSun className="text-xl cursor-pointer" />
                <FaMoon className="text-xl cursor-pointer" />
            </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 ">
        <img src="/img/icon_vn.png" alt="Language" className="w-8 h-8 rounded-full" />
        <div className="flex items-center space-x-2">
          <img src="/img/avatar_icon.png" alt="Profile" className="w-8 h-8 rounded-full" />
          <span>nexteye@nextg.team</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
