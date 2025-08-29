import React from "react";

const Settings = () => {
  const settingsSections = [
    { id: 1, title: "Profile", description: "Update your personal info" },
    { id: 2, title: "Account", description: "Manage your account settings" },
    { id: 3, title: "Notifications", description: "Customize notification preferences" },
    { id: 4, title: "Appearance", description: "Theme and display settings" },
  ];

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">⚙️ Settings</h1>
        <p className="text-gray-500 mt-1">Manage your app preferences</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        {settingsSections.map((section) => (
          <div
            key={section.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-gray-800 font-semibold">{section.title}</h2>
            <p className="text-gray-400 text-sm mt-1">{section.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 text-gray-400 italic">
        ⚠️ Still in development...
      </div>
    </div>
  );
};

export default Settings;
