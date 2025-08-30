import { useEffect, useState } from "react";

const STORAGE_KEY = "notes";

const useNotes = () => {
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem("notes");
    return stored ? JSON.parse(stored) : [];
  });

  console.log(localStorage.getItem(STORAGE_KEY));

  //   // Load from localStorage on mount
  //   useEffect(() => {
  //     const storedNotes = localStorage.getItem(STORAGE_KEY);
  //     if (storedNotes) {
  //       setNotes(JSON.parse(storedNotes));
  //     }
  //   }, []);

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

  // Remove note by id
  const removeNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  //update note by id
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
