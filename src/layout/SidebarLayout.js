import React, { useState } from "react";
import { HiOutlineViewGrid,
         HiOutlineChartSquareBar,
         HiOutlineClock, 
         HiOutlineCalendar, 
         HiOutlineClipboardList, 
         HiOutlineCamera, 
         HiOutlineMap, 
         HiOutlineUsers, 
         HiOutlineMenu } from "react-icons/hi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col ${isOpen ? 'w-64' : 'w-20'} h-screen bg-white shadow-md transition-width duration-300`}>
      <div className="flex items-center justify-between p-4 border-b">
        <button onClick={toggleSidebar} className="flex items-center w-full h-12 text-gray-600 justify-right hover:text-blue-500 focus:outline-none">
          <HiOutlineMenu className="text-2xl" />
        </button>
        <img src="/img/logo_company.png" alt="NextEye Logo" className={`${isOpen ? 'h-8' : 'h-0'} transition-all duration-300`} />
      </div>
      <div className="flex flex-col p-4 space-y-4">
        {isOpen && <span className="mb-4 text-xl font-semibold text-center">NextEye</span>}
        <div className="flex flex-col space-y-2">
          <button className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none">
            <HiOutlineViewGrid className="text-2xl" />
            {isOpen && <span className="ml-2">Overview</span>}
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none">
            <HiOutlineChartSquareBar className="text-2xl" />
            {isOpen && <span className="ml-2">Dashboard</span>}
          </button>
          <div className="text-sm text-gray-400 uppercase">{isOpen && "Reports"}</div>
          <button className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none">
            <HiOutlineClock className="text-2xl" />
            {isOpen && <span className="ml-2">Events Realtime</span>}
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none">
            <HiOutlineCalendar className="text-2xl" />
            {isOpen && <span className="ml-2">Working Session</span>}
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none">
            <HiOutlineClipboardList className="text-2xl" />
            {isOpen && <span className="ml-2">Staff Management</span>}
          </button>
          <div className="text-sm text-gray-400 uppercase">{isOpen && "Administration"}</div>
          <button className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none">
            <HiOutlineCamera className="text-2xl" />
            {isOpen && <span className="ml-2">Camera</span>}
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none">
            <HiOutlineMap className="text-2xl" />
            {isOpen && <span className="ml-2">Area Management</span>}
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none">
            <HiOutlineUsers className="text-2xl" />
            {isOpen && <span className="ml-2">User Management</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
