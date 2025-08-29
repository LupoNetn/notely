import { X } from "lucide-react";
import React from "react";
import useTasks from "../Hooks/useTasks";

const AddTaskForm = ({ status, closeForm }) => {
  const { addTask } = useTasks();

  const [formData, setFormData] = React.useState({
    img: "",
    label: "",
    title: "",
    desc: "",
    status: status,
    createdAt: "",
    updatedAt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Status prop:", status); // Debug status
    const newTask = {
      id: crypto.randomUUID(),
      img: formData.img,
      label: formData.label,
      title: formData.title,
      desc: formData.desc,
      status: status,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    addTask(newTask);
    console.log("New task:", newTask);
    setFormData({
      img: "",
      label: "",
      title: "",
      desc: "",
      status: status,
      createdAt: "",
      updatedAt: "",
    });
    setTimeout(closeForm, 0); // Delay to ensure useEffect runs
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg w-[100%] max-w-[700px] z-50">
      <div className="flex justify-between">
        <h2 className="font-bold text-lg">Add New Task - {status}</h2>
        <button type="button" onClick={closeForm}>
          <X className="cursor-pointer" />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 my-4">
          {/* <input
            type="text"
            name="img"
            placeholder="Image URL (optional)..."
            className="p-2 border-b border-gray-300 rounded-md outline-none focus:border-b-blue-300 placeholder:text-sm"
            value={formData.img}
            onChange={handleChange}
          /> */}
          <input
            type="text"
            name="title"
            placeholder="title..."
            className="p-2 border-b border-gray-300 rounded-md outline-none focus:border-b-blue-300 placeholder:text-sm"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="label"
            placeholder="label e.g feature, bug...."
            className="p-2 border-b border-gray-300 rounded-md outline-none focus:border-b-blue-300 placeholder:text-sm"
            value={formData.label}
            onChange={handleChange}
          />
          <textarea
            name="desc"
            placeholder="enter description..."
            className="pt-6 px-2 border-b border-gray-300 rounded-md outline-none focus:border-b-blue-300 w-full resize-none placeholder:text-sm"
            value={formData.desc}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 cursor-pointer p-2 rounded-xl text-white"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;