import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNotesContext } from "../context/NotesContext";
import { useTasksContext } from "../context/TasksContext";
import { PlusCircle, FilePlus2 } from "lucide-react"; // icons
import AddTaskForm from "./AddTaskForm";

const Dashboard = () => {
  const { notes } = useNotesContext();
  const { tasks } = useTasksContext();

  // Modal state
  const [openForm, setOpenForm] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Open form for new task
  const handleNewTask = (status = "BackLog") => {
    setSelectedStatus(status);
    setTaskToEdit(null);
    setOpenForm(true);
  };

  // Close form
  const closeForm = () => {
    setOpenForm(false);
    setSelectedStatus(null);
    setTaskToEdit(null);
  };

  // Pick latest task & note
  const latestTask = [...tasks].sort(
    (a, b) => (b.updatedAt || b.createdAt) - (a.updatedAt || a.createdAt)
  )[0];

  const latestNote = [...notes].sort(
    (a, b) => (b.updatedAt || b.createdAt) - (a.updatedAt || a.createdAt)
  )[0];

  const getRecentActivity = (items, days = 7) => {
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    return items.filter(
      (item) =>
        item.createdAt >= cutoff || (item.updatedAt && item.updatedAt >= cutoff)
    ).length;
  };

  const appStats = [
    { id: 1, title: "Total Tasks", value: tasks.length },
    { id: 2, title: "Notes", value: notes.length },
    {
      id: 3,
      title: "Recent Activity - Notes",
      value: getRecentActivity(notes),
    },
    {
      id: 4,
      title: "Recent Activity - Tasks",
      value: getRecentActivity(tasks),
    },
  ];

  return (
    <div className="relative min-h-screen md:h-screen p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📊 Dashboard</h1>
        <p className="text-gray-500 mt-1">Quick overview of your app</p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {appStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-gray-400 text-sm">{stat.title}</h2>
            <p className="text-gray-800 font-bold text-xl mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">⚡ Quick Actions</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleNewTask("BackLog")}
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-3 rounded-xl shadow-md transition"
          >
            <PlusCircle size={20} />
            New Task
          </button>
          <Link
            to="/note-create"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-3 rounded-xl shadow-md transition"
          >
            <FilePlus2 size={20} />
            New Note
          </Link>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Recent Task */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">🆕 Recent Task</h3>
          {tasks.length === 0 ? (
            <p className="text-gray-500">No tasks available.</p>
          ) : (
            <Link
              to="/tasks"
              className="block bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-gray-800 font-bold">{latestTask.title}</h4>
              <p className="text-gray-500 text-sm">
                {latestTask.description || "No description"}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Created {new Date(latestTask.createdAt).toLocaleString()}
              </p>
            </Link>
          )}
        </div>

        {/* Recent Note */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">📝 Recent Note</h3>
          {notes.length === 0 ? (
            <p className="text-gray-500">No notes available.</p>
          ) : (
            <Link
              to="/notes"
              className="block bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-gray-800 font-bold">{latestNote.title}</h4>
              <p className="text-gray-500 text-sm truncate">
                {latestNote.content || "No content"}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Created {new Date(latestNote.createdAt).toLocaleString()}
              </p>
            </Link>
          )}
        </div>
      </div>

      {/* Modal Overlay */}
      {openForm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
          onClick={closeForm}
        >
          <div
            className="relative z-50 max-sm:mt-20"
            onClick={(e) => e.stopPropagation()}
          >
            <AddTaskForm
              status={selectedStatus}
              closeForm={closeForm}
              taskToEdit={taskToEdit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
