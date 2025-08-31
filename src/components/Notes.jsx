import React from "react";
import { format } from "date-fns";
import { Pen, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { useNotesContext } from "../context/NotesContext";

const Notes = () => {
  const { notes, removeNote } = useNotesContext();

  const truncateContent = (text, charLimit) => {
    if (!text) return "";
    if (text.length <= charLimit) return text;
    return text.slice(0, charLimit) + " ...........";
  };

  const handleDeleteNote = (e, id) => {
    e.stopPropagation(); // stop bubbling
    e.preventDefault(); // prevent <Link> navigation

    removeNote(id);
  };

  return (
    <div className="p-6 relative min-h-screen md:h-screen">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📝 Notes</h1>
        <p className="text-gray-500 mt-1">
          A simple place to jot down your thoughts.
        </p>
      </header>

      {/* Notes Grid */}
      {notes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <Link to={`/note-create/${note.id}`} key={index}>
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
                <h2 className="font-semibold text-lg text-gray-800 mb-2">
                  {note.title || "Untitled"}
                </h2>
                <p className="text-gray-500 text-sm">
                  {truncateContent(note.content, 200) || "No content..."}
                </p>

                <div className="flex gap-2 justify-between items-center mt-2">
                  <span className="font-xs text-gray-500">
                    {format(note.createdAt, "dd/MM/yyyy")}
                  </span>

                  <div>
                    <button onClick={(e) => handleDeleteNote(e, note.id)}>
                      <Trash
                        size={16}
                        className="text-gray-400 hover:text-red-500 cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-8 text-center text-gray-400 italic">
          Your notes will appear here...
        </div>
      )}

      {/* Fixed Add Note Button */}
      <Link to="/note-create">
        <button className="cursor-pointer fixed bottom-18 right-1 md:bottom-6 md:right-6 bg-blue-500 hover:bg-blue-600 p-4 rounded-full shadow-lg flex items-center justify-center transition">
          <Pen size={24} className="text-white" />
        </button>
      </Link>
    </div>
  );
};

export default Notes;
