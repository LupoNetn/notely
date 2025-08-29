import { ArrowDown, ArrowDown01, Bell, Menu, Search, User2, X } from "lucide-react";
import React, { useState } from "react";

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mt-3 relative">
      {/* Top row (logo + menu button on mobile, full flex on desktop) */}
      <div className="flex justify-between items-center md:justify-between">
        {/* Left side - logo */}
        <div className="flex items-center gap-2">
          <img src="/notely-logo.png" alt="logo" className="w-8 h-8" />
          <h2 className="font-bold">NOTELY.</h2>
        </div>

        {/* Desktop Search (inline center) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <input
              className="w-full rounded-xl px-9 py-2 bg-gray-100 placeholder-gray-400 
              focus:bg-white focus:placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="search anything..."
            />
            <Search
              className="absolute top-2.5 left-2 text-gray-500"
              size={18}
            />
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-5 items-center">
          <div className="relative">
            <Bell />
            <span className="bg-blue-600 text-white absolute left-3 -top-2 w-5 h-5 rounded-full text-xs flex items-center justify-center">
              0
            </span>
          </div>
          <User2 />
          <button>
            <ArrowDown />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-2">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Search (full width under logo/menu) */}
      <div className="md:hidden mt-3">
        <div className="relative w-full">
          <input
            className="w-full rounded-xl px-9 py-2 bg-gray-100 placeholder-gray-400 
            focus:bg-white focus:placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="search anything..."
          />
          <Search className="absolute top-2.5 left-2 text-gray-500" size={18} />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute right-4 top-20 bg-white shadow-lg rounded-lg p-3 flex flex-col gap-3 md:hidden">
          <div className="relative">
            <button>
              <Bell />
            </button>
            <span className="bg-blue-600 text-white absolute left-3 -top-2 w-5 h-5 rounded-full text-xs flex items-center justify-center">
              0
            </span>
          </div>
          <User2 />
          <button className="flex items-center gap-1">
            <ArrowDown />
          </button>
        </div>
      )}
    </nav>
  );
};

export default TopBar;
