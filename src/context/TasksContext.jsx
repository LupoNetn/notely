import React, { createContext, useContext } from "react";
import useTasks from "../Hooks/useTasks";

const TasksContext = createContext(null);

// Provider component
export const TasksProvider = ({ children }) => {
  const tasksHook = useTasks(); // your custom hook runs ONCE here

  return (
    <TasksContext.Provider value={tasksHook}>
      {children}
    </TasksContext.Provider>
  );
};

// Custom hook for easy usage
export const useTasksContext = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasksContext must be used inside a TasksProvider");
  }
  return context;
};
