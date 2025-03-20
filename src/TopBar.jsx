import React from 'react';
import { FiChevronLeft, FiSearch, FiBell } from 'react-icons/fi';

const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="flex relative justify-between items-center bg-[#f4e7df] p-4 shadow-sm">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full absolute -left-2 bg-white shadow-md hover:bg-gray-100"
        >
          <FiChevronLeft size={20} />
        </button>
        <div className="text-xl pl-10 font-semibold">Dashboard</div>
      </div>

      {/* Center Search Bar */}
      <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-[100px] md:w-[300px]">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full bg-transparent outline-none text-gray-600"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="p-2 lg:p-4 rounded-full bg-white shadow-md hover:bg-gray-100">
          <FiBell size={20} />
        </button>

        {/* User Info */}
        <div className="flex items-center bg-white rounded-full lg:p-2 shadow-md lg:gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="text-sm hidden lg:block font-semibold">Alex Meian</div>
            <div className="text-xs hidden lg:block text-gray-500">Product manager</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
