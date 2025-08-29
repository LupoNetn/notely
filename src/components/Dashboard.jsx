import React from "react";

const Dashboard = () => {
  const sampleStats = [
    { id: 1, title: "Total Tasks", value: 24 },
    { id: 2, title: "Completed Tasks", value: 12 },
    { id: 3, title: "Pending Reviews", value: 5 },
    { id: 4, title: "Notes", value: 8 },
  ];

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📊 Dashboard</h1>
        <p className="text-gray-500 mt-1">Quick overview of your app</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {sampleStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-gray-400 text-sm">{stat.title}</h2>
            <p className="text-gray-800 font-bold text-xl mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 text-gray-400 italic">
        ⚠️ Still in development...
      </div>
    </div>
  );
};

export default Dashboard;
