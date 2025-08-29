import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, CheckSquare, StickyNote, Settings } from "lucide-react";

const SideBar = () => {
  const location = useLocation();

  const links = [
    { href: "/", icon: <LayoutDashboard />, color: "hover:text-blue-500" },
    { href: "/tasks", icon: <CheckSquare />, color: "hover:text-green-500" },
    { href: "/notes", icon: <StickyNote />, color: "hover:text-yellow-500" },
    { href: "/settings", icon: <Settings />, color: "hover:text-red-500" },
  ];

  return (
    <>
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex md:flex-col md:fixed md:left-[1rem] xl:left-[1.5rem] md:h-screen md:w-[5rem] lg:w-[6rem] xl:w-[7rem] bg-white text-gray-700 px-3 pt-25 space-y-8 shadow-md">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`flex justify-center items-center w-full h-12 rounded-lg ${
              location.pathname === link.href ? "bg-gray-100" : ""
            } ${link.color} cursor-pointer transition-colors duration-200`}
          >
            {React.cloneElement(link.icon, { className: "w-6 h-6" })}
          </Link>
        ))}
      </aside>

      {/* Bottom navigation for mobile */}
      <nav className="fixed bottom-0 left-0 w-full md:hidden bg-white text-gray-700 flex justify-around items-center py-2 px-3 shadow-t border-t border-gray-200">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`flex justify-center items-center w-12 h-12 rounded-lg ${
              location.pathname === link.href ? "bg-gray-100" : ""
            } ${link.color} cursor-pointer transition-colors duration-200`}
          >
            {React.cloneElement(link.icon, { className: "w-6 h-6" })}
          </Link>
        ))}
      </nav>

     
    </>
  );
};

export default SideBar;
