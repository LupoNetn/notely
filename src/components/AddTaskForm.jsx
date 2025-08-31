import { X } from "lucide-react";
import React from "react";
import { useTasksContext } from "../context/TasksContext";
import { useLocation, useNavigate } from "react-router-dom";

const AddTaskForm = ({ status, closeForm, taskToEdit }) => {
  const { addTask, updateTask } = useTasksContext();
  const location = useLocation(); // get current page path
  const navigate = useNavigate(); // navigate programmatically

  const [formData, setFormData] = React.useState(() => ({
    img: taskToEdit?.img || "",
    label: taskToEdit?.label || "",
    title: taskToEdit?.title || "",
    desc: taskToEdit?.desc || "",
    status: taskToEdit?.status || status,
    createdAt: taskToEdit?.createdAt || "",
    updatedAt: taskToEdit?.updatedAt || "",
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskToEdit) {
      updateTask(taskToEdit.id, { ...formData, status });
    } else {
      addTask({
        id: crypto.randomUUID(),
        ...formData,
        status,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
    }

    // Reset form
    setFormData({
      img: "",
      label: "",
      title: "",
      desc: "",
      status,
      createdAt: "",
      updatedAt: "",
    });

    closeForm();

    // Navigate to tasks page if form was opened from dashboard
    if (location.pathname === "/") {
      navigate("/tasks");
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-[700px] z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">
          {taskToEdit ? "Edit Task" : "Add New Task"} - {status}
        </h2>
        <button type="button" onClick={closeForm}>
          <X className="cursor-pointer" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          placeholder="Title..."
          className="p-2 border-b border-gray-300 rounded-md outline-none focus:border-b-blue-300 placeholder:text-sm"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="label"
          placeholder="Label e.g feature, bug..."
          className="p-2 border-b border-gray-300 rounded-md outline-none focus:border-b-blue-300 placeholder:text-sm"
          value={formData.label}
          onChange={handleChange}
        />

        <textarea
          name="desc"
          placeholder="Enter description..."
          className="pt-6 px-2 border-b border-gray-300 rounded-md outline-none focus:border-b-blue-300 w-full resize-none placeholder:text-sm"
          value={formData.desc}
          onChange={handleChange}
        />

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 cursor-pointer p-2 rounded-xl text-white"
          >
            {taskToEdit ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
