import { useState, useEffect } from "react";

const useTasks = () => {
  // Check if localStorage is available
  const isLocalStorageAvailable = () =>
    typeof window !== "undefined" && window.localStorage;

  // Load tasks from localStorage on initial render
  const [tasks, setTasks] = useState(() => {
    if (isLocalStorageAvailable()) {
      try {
        const stored = localStorage.getItem("tasks");
        return stored ? JSON.parse(stored) : [];
      } catch (error) {
        console.error("Error parsing localStorage:", error);
      localStorage.removeItem("tasks"); // Clear invalid data
      return [];
    }
  }});

  useEffect(() => {
    if (!isLocalStorageAvailable()) return;
    try {
      const stored = localStorage.getItem("tasks");
      setTasks(stored ? JSON.parse(stored) : []);
    } catch (error) {
      console.error("Error parsing localStorage:", error);
      localStorage.removeItem("tasks"); // Clear invalid data
      setTasks([]);
    }
  }, []); // Only run once on mount

  // Save tasks to localStorage when they change
  useEffect(() => {
    if (isLocalStorageAvailable()) {
      try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("Saved to localStorage:", tasks);
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    }
  }, [tasks]);

  // Add a new task
  const addTask = (task) => {
    setTasks((prev) => [{ ...task },...prev]);
  };

  // Remove task by index
const removeTask = (id) => {
  setTasks((prev) => prev.filter((task) => task.id !== id));
};


  // Debug hook lifecycle
  useEffect(() => {
    console.log("useTasks hook initialized");
    return () => console.log("useTasks hook unmounted");
  }, []);

  return { tasks, addTask, removeTask,setTasks };
};

export default useTasks;