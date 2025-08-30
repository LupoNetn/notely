import React from "react";
import { Pen } from "lucide-react";
import { Link } from "react-router-dom";

const Notes = () => {
  const sampleNotes = [
    { id: 1, title: "Meeting Notes", content: "Discuss project milestones..." },
    { id: 2, title: "Ideas", content: "Explore new UI/UX concepts..." },
    {
      id: 3,
      title: "Shopping List",
      content: "Buy laptop, keyboard, mouse...",
    },
  ];

  const handleAddNote = () => {
    console.log("Add note clicked"); // Replace with modal or form later
  };

  return (
    <div className="p-6 relative">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📝 Notes</h1>
        <p className="text-gray-500 mt-1">
          A simple place to jot down your thoughts.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleNotes.map((note) => (
          <div
            key={note.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="font-semibold text-lg text-gray-800 mb-2">
              {note.title}
            </h2>
            <p className="text-gray-500 text-sm">{note.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-400 italic">
        Your notes will appear here...
      </div>

      {/* Fixed Add Note Button */}
      <Link to='/note-create'>
        <button
          onClick={handleAddNote}
          className="cursor-pointer fixed bottom-18 right-1 md:bottom-6 md:right-6 bg-blue-500 hover:bg-blue-600 p-4 rounded-full shadow-lg flex items-center justify-center transition"
        >
          <Pen size={24} className="text-white" />
        </button>
      </Link>

      <div className="text-center mt-12 text-gray-400 italic">
        ⚠️ Still in development...
      </div>
    </div>
  );
};

export default Notes;
