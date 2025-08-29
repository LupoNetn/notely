import React from "react";
import { Ellipsis, Plus } from "lucide-react";

const taskHeader = [
  { title: "BackLog" },
  { title: "In Progress" },
  { title: "Review" },
  { title: "To Do" },
];

const Tasks = () => {
  return (
    <>
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
                <button className="p-1 rounded-full bg-blue-200 hover:bg-blue-400 text-gray-600 hover:text-white cursor-pointer">
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
                <button className="p-1 rounded-full bg-blue-200 hover:bg-blue-400 text-gray-600 hover:text-white cursor-pointer">
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
                <button className="p-1 rounded-full bg-blue-200 hover:bg-blue-400 text-gray-600 hover:text-white cursor-pointer">
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
                <button className="p-1 rounded-full bg-blue-200 hover:bg-blue-400 text-gray-600 hover:text-white cursor-pointer">
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
    </>
  );
};

export default Tasks;
