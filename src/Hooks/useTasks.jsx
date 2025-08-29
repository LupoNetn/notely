import { useState, useEffect } from "react";

const useTasks = () => {
  const isLocalStorageAvailable = () =>
    typeof window !== "undefined" && window.localStorage;

  // Load tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    if (!isLocalStorageAvailable()) return [];
    try {
      const stored = localStorage.getItem("tasks");
      return stored ? JSON.parse(stored) : [];
    } catch {
      localStorage.removeItem("tasks");
      return [];
    }
  });

  // Sync tasks to localStorage
  useEffect(() => {
    if (!isLocalStorageAvailable()) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task (prepend for newest-first order)
  const addTask = (task) => {
    setTasks((prev) => [{ ...task }, ...prev]);
  };

  // Remove task by id
  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Update task by id
  const updateTask = (id, updatedFields) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, ...updatedFields, updatedAt: new Date().toISOString() }
          : task
      )
    );
  };

  return { tasks, addTask, removeTask, updateTask, setTasks };
};

export default useTasks;
