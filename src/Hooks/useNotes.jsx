import { useEffect, useState } from "react";

const STORAGE_KEY = "notes";
const CLEARED_KEY = "notesCleared"; // marker so it only runs once

const useNotes = () => {
  const [notes, setNotes] = useState(() => {
    // run clear once if not yet cleared
    if (!localStorage.getItem(CLEARED_KEY)) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(CLEARED_KEY, "true");
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content) => {
    const newNote = {
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: Date.now(),
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const removeNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedFields) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, ...updatedFields, updatedAt: Date.now() }
          : note
      )
    );
  };

  return {
    notes,
    addNote,
    removeNote,
    updateNote,
  };
};

export default useNotes;
