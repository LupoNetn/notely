import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNotesContext } from "../context/NotesContext";
import useNotes from "../Hooks/useNotes";

const NotesCreation = () => {
  const { addNote } = useNotesContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (!title.trim() && !content.trim()) return;

    addNote(title, content);

    // reset form
    setTitle("");
    setContent("");
  };

  return (
    <div className="flex items-start min-h-screen p-3">
      <div className="w-full p-3">
        {/* Header */}
        <div className="flex items-center mb-6 gap-3">
          <Link to="/notes">
            <ArrowLeft className="w-8 h-8 -mt-3" />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Create Note
          </h1>
        </div>

        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full max-w-[500px] text-lg font-medium border-gray-200 focus:border-blue-200 outline-none mb-4 p-3 rounded transition"
        />

        {/* Note Area */}
        <textarea
          placeholder="Take a note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full min-h-[300px] p-4 rounded-md text-gray-700 outline-none resize-none border border-gray-200 focus:border-blue-200 transition"
        />

        {/* Save Button */}
        <div className="mt-3 flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-medium shadow-md transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesCreation;
