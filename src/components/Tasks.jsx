import React, { useState } from "react";
import { Ellipsis, Plus } from "lucide-react";
import useTasks from "../Hooks/useTasks";
import AddTaskForm from "./AddTaskForm";

const taskHeader = [
  { title: "BackLog" },
  { title: "To Do" },
  { title: "In Progress" },
  { title: "Review" }
];

const Tasks = () => {
  const { tasks, addTask } = useTasks();
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  console.log('from Tasks component:', tasks);

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
          {/* Task Columns */}
          <div
            className="
              flex gap-4 overflow-x-auto
              md:grid md:grid-cols-2
              lg:grid lg:grid-cols-4
            "
          >
            {taskHeader.map((col) => (
              <div key={col.title} className="flex-1 min-w-[220px]">
                {/* Column Header */}
                <div className="flex bg-background items-center justify-between p-4 rounded-md">
                  <h3 className="font-semibold">{col.title}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddTask(col.title)}
                      className="p-1 rounded-full bg-blue-200 hover:bg-blue-400 text-gray-600 hover:text-white cursor-pointer"
                    >
                      <Plus size={16} />
                    </button>
                    <button className="p-1 cursor-pointer rounded-full hover:bg-primary/50">
                      <Ellipsis size={16} />
                    </button>
                  </div>
                </div>

                {/* Column Tasks */}
                <div className="mt-2 flex flex-col gap-2">
                  {tasks
                    .filter((task) => task.status === col.title)
                    .map((task) => (
                      <div
                        key={task.id}
                        className="p-3 bg-white rounded-md shadow-sm border hover:shadow-md transition"
                      >
                        <h4 className="font-medium">{task.title}</h4>
                        <p className="text-sm text-gray-500">{task.label}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {task.desc}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
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
