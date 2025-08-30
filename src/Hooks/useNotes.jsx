import { useEffect, useState } from "react";

const STORAGE_KEY = "notes";

const useNotes = () => {
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem('notes');
    return stored ? JSON.parse(stored) : [];
  });

  console.log(localStorage.getItem(STORAGE_KEY))

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
    const newNote = { title, content };
    setNotes((prev) => [newNote, ...prev]);
  };
 

  return {
    notes,
    addNote,
  };
};

export default useNotes;
