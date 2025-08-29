import React, { useState } from "react";
import { Ellipsis, Plus } from "lucide-react";
import useTasks from "../Hooks/UseTasks";
import AddTaskForm from "./AddTaskForm";

const taskHeader = [
  { title: "BackLog" },
  { title: "In Progress" },
  { title: "Review" },
  { title: "To Do" },
];

const Tasks = () => {
  const { tasks, addTask } = useTasks();
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const handleAddTask = (status) => {
    setSelectedStatus(status);
    setOpenForm(true);
  };

  const closeForm = () => {
    setOpenForm(false);
    setSelectedStatus(null);
  };

  return (
    <>
      <div className="relative">
        <header>
          <div className="flex mb-3">
            <h1 className="font-bold text-xl">🔥 Tasks</h1>
          </div>
        </header>

        <main>
          {/* Task Header */}
          <div
            className="
              flex gap-4 overflow-x-auto
              md:grid md:grid-cols-2
              lg:grid lg:grid-cols-4
            "
          >
            <div className="flex-1 min-w-[220px]">
              <div className="flex bg-background items-center justify-between p-4 rounded-md">
                <h3>BackLog</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddTask("BackLog")}
                    className="p-1 rounded-full bg-blue-200 hover:bg-blue-400 text-gray-600 hover:text-white cursor-pointer"
                  >
                    <Plus size={16} />
                  </button>
                  <button className="p-1 cursor-pointer rounded-full hover:bg-primary/50">
                    <Ellipsis size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-[220px]">
              <div className="flex bg-background items-center justify-between p-4 rounded-md">
                <h3>To Do</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddTask("To Do")}
                    className="p-1 rounded-full bg-blue-200 hover:bg-blue-400 text-gray-600 hover:text-white cursor-pointer"
                  >
                    <Plus size={16} />
                  </button>
                  <button className="p-1 cursor-pointer rounded-full hover:bg-primary/50">
                    <Ellipsis size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-[220px]">
              <div className="flex bg-background items-center justify-between p-4 rounded-md">
                <h3>In Progress</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddTask("In Progress")}
                    className="p-1 rounded-full bg-blue-200 hover:bg-blue-400 text-gray-600 hover:text-white cursor-pointer"
                  >
                    <Plus size={16} />
                  </button>
                  <button className="p-1 cursor-pointer rounded-full hover:bg-primary/50">
                    <Ellipsis size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-[220px]">
              <div className="flex bg-background items-center justify-between p-4 rounded-md">
                <h3>Review</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddTask("Review")}
                    className="p-1 rounded-full bg-blue-200 hover:bg-blue-400 text-gray-600 hover:text-white cursor-pointer"
                  >
                    <Plus size={16} />
                  </button>
                  <button className="p-1 cursor-pointer rounded-full hover:bg-primary/50">
                    <Ellipsis size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Modal Overlay */}
        {openForm && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
            onClick={closeForm} // close when clicking overlay
          >
            <div
              className="relative z-50 max-sm:mt-20"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside form
            >
              <AddTaskForm status={selectedStatus} closeForm={closeForm} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tasks;
