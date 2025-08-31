import React from "react";
import { AlertCircle, User, Bell, Moon } from "lucide-react";

const Settings = () => {
  const settingsSections = [
    { id: 1, title: "Profile", description: "Update your personal info", icon: <User size={20} /> },
    { id: 2, title: "Account", description: "Manage your account settings", icon: <AlertCircle size={20} /> },
    { id: 3, title: "Notifications", description: "Customize notification preferences", icon: <Bell size={20} /> },
    { id: 4, title: "Appearance", description: "Theme and display settings", icon: <Moon size={20} /> },
  ];

  const handleComingSoon = (section) => {
    alert(`${section} settings are coming soon! 🚀`);
  };

  return (
    <div className="min-h-screen md:h-screen p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">⚙️ Settings</h1>
        <p className="text-gray-500 mt-1">Manage your app preferences</p>
      </header>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        {settingsSections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleComingSoon(section.title)}
            className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer w-full text-left"
          >
            <div className="text-gray-500">{section.icon}</div>
            <div>
              <h2 className="text-gray-800 font-semibold">{section.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{section.description}</p>
              <p className="text-xs text-gray-400 mt-1 italic">Coming Soon 🚀</p>
            </div>
          </button>
        ))}
      </div>

      <div className="text-center mt-12 text-gray-400 italic">
        ⚠️ Features not yet implemented
      </div>
    </div>
  );
};

export default Settings;
