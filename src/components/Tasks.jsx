import React from "react";

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
        <div className="flex">
          <h1 className="font-bold text-xl">🔥 Tasks</h1>
        </div>
      </header>

      <main>
        {/* Task Header */}

        <div className="grid grid-cols-4 gap-4 my-4">

          <div>
            <div className="flex bg-background items-center justify-between p-4 rounded-md">
              <h3>BackLog</h3>
            </div>
          </div>

          <div>
            <div className="flex bg-background items-center justify-between p-4 rounded-md">
              <h3>To Do</h3>
            </div>
          </div>

          <div>
            <div className="flex bg-background items-center justify-between p-4 rounded-md">
              <h3>In Progress</h3>
            </div>
          </div>

          <div>
            <div className="flex bg-background items-center justify-between p-4 rounded-md">
              <h3>Review</h3>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Tasks;
