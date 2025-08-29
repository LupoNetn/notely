import React, { useState } from "react";
import { Ellipsis, Pen, Plus, Trash } from "lucide-react";
import { useTasksContext } from "../context/TasksContext";
import AddTaskForm from "./AddTaskForm";

const taskHeader = [
  { title: "BackLog" },
  { title: "To Do" },
  { title: "In Progress" },
  { title: "Review" },
];

const Tasks = () => {
  const { tasks, removeTask } = useTasksContext();
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null); // ✨ store the task being edited

  const handleAddTask = (status) => {
    setSelectedStatus(status);
    setTaskToEdit(null); // ensure no task is selected when adding
    setOpenForm(true);
  };

  const handleEditTask = (task) => {
    setSelectedStatus(task.status);
    setTaskToEdit(task); // pass the task to edit
    setOpenForm(true);
  };

  const closeForm = () => {
    setOpenForm(false);
    setSelectedStatus(null);
    setTaskToEdit(null);
  };

  const handleDeleteTask = (id) => {
    removeTask(id);
  };

  return (
    <div className="relative">
      <header className="flex mb-3">
        <h1 className="font-bold text-xl">🔥 Tasks</h1>
      </header>

      <main>
        <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
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
                      className="px-3 pb-8 pt-5 bg-white rounded-md shadow-sm border hover:shadow-md transition"
                    >
                      <span className="bg-gradient-to-br from-purple-300 to-blue-50 text-gray-600 p-2 rounded-md">
                        {task.label}
                      </span>
                      <div className="mt-5">
                        <h4 className="font-medium">{task.title}</h4>
                        <p className="text-xs text-gray-400 mt-1">{task.desc}</p>
                      </div>
                      <div className="flex gap-2 justify-end mt-2">
                        <button onClick={() => handleEditTask(task)}>
                          <Pen size={16} className="text-gray-400 hover:text-blue-500 cursor-pointer" />
                        </button>
                        <button onClick={() => handleDeleteTask(task.id)}>
                          <Trash size={16} className="text-gray-400 hover:text-red-500 cursor-pointer" />
                        </button>
                      </div>
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
          onClick={closeForm}
        >
          <div
            className="relative z-50 max-sm:mt-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pass the taskToEdit to AddTaskForm */}
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

export default Tasks;
