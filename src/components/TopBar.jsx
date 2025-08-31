import { ArrowDown, Bell, Menu, Search, User2, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md border-b border-gray-200">
        {/* Top row (logo + menu button on mobile, full flex on desktop) */}
        <div className="px-5 flex justify-between items-center py-3 md:justify-between relative">
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
          <Link to="/settings">
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
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-2">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search (full width under logo/menu) */}
        <div className="md:hidden px-3 pb-3">
          <div className="relative w-full">
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

        {/* Mobile Dropdown */}
        {menuOpen && (
          <Link to="/settings">
            <div className="absolute right-4 top-28 bg-white shadow-lg rounded-lg p-3 flex flex-col gap-3 md:hidden">
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
          </Link>
        )}
      </nav>

      {/* Spacer so page content doesn’t overlap fixed TopBar */}
      <div className="pt-20 md:pt-16"></div>
    </>
  );
};

export default TopBar;
