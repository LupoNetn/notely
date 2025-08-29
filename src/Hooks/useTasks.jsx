import { useState, useEffect } from "react";

const useTasks = () => {
  // Check if localStorage is available
  const isLocalStorageAvailable = () => typeof window !== "undefined" && window.localStorage;

  // Load tasks from localStorage on initial render
  const [tasks, setTasks] = useState([])

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
    }, []);

  // Save tasks to localStorage when they change
  useEffect(() => {
    if (isLocalStorageAvailable()) {
      try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("Saved to localStorage:", tasks);
        console.log(localStorage)
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    }
  }, [tasks]);

  // Add a new task
  const addTask = (task) => {
    localStorage.setItem("tasks", JSON.stringify([...tasks, task])); // Immediate save for testing
    console.log("Immediate save:", [...tasks, task]);
    setTasks((prev) => {
      const updated = [...prev, { ...task }]; // Ensure new object
      console.log("Adding task:", updated);
      return updated;
    });
  };

  // Remove task by index
  const removeTask = (index) => {
    localStorage.setItem("tasks", JSON.stringify(tasks.filter((_, i) => i !== index))); // Immediate save for testing
    console.log("Immediate remove:", tasks.filter((_, i) => i !== index));
    setTasks((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      console.log("After remove:", updated);
      return updated;
    });
  };

  // Debug hook lifecycle
  useEffect(() => {
    console.log("useTasks hook initialized");
    return () => console.log("useTasks hook unmounted");
  }, []);

  return { tasks, addTask, removeTask };
};

export default useTasks;