import { useState, useEffect } from "react";

// Define Task class outside the hook
class Task {
  constructor(img, label, title, desc, createdAt, updatedAt, status) {
    this.id = crypto.randomUUID();
    this.img = img;
    this.label = label;
    this.title = title;
    this.desc = desc;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
    this.status = status || "Backlog"; // Backlog, In Progress, Review, Completed
  }

  update(fields) {
    Object.assign(this, fields);
    this.updatedAt = new Date();
  }
}

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const addTask = (
    img,
    label,
    title,
    desc,
    status,
    createdAt,
    updatedAt
  ) => {
    const newTask = new Task(
      img,
      label,
      title,
      desc,
      createdAt,
      updatedAt,
      status
    );
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  useEffect(() => {
    addTask("img", "label", "title", "desc", "status");
  }, []);

  return { tasks, addTask };
};

export default useTasks;
