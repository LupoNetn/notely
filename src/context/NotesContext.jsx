import React, { createContext, useContext } from "react";
import useNotes from "../Hooks/useNotes";

const NotesContext = createContext(null);

export const NotesProvider = ({ children }) => {
  const notesData = useNotes();
  return (
    <NotesContext.Provider value={notesData}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("useNotesContext must be used inside NotesProvider");
  return context;
};
