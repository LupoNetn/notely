import React from "react";

const NotesCreation = () => {
  return (
    <div className="flex justify-center items-start min-h-screen p-6">
      <div className="  border border-gray-200 rounded-xl w-full max-w-2xl p-6">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Create Note
        </h1>

        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          className="w-full text-lg font-medium border-b border-transparent outline-none mb-4 p-2 rounded bg-gray-50 
            focus:bg-white focus:border-b-blue-400 transition"
        />

        {/* Note Area */}
        <textarea
          placeholder="Take a note..."
          className="w-full min-h-[200px] p-3 rounded-md bg-gray-50 text-gray-700 outline-none resize-none
            border-b border-transparent focus:bg-white focus:border-b-blue-400 transition"
        />

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-300 text-primary px-6 py-2 rounded-full font-medium shadow-sm transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesCreation;
