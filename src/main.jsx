import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TasksProvider } from "./context/TasksContext.jsx";
import { NotesProvider } from "./context/NotesContext.jsx"; // ✅ import NotesProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TasksProvider>
      <NotesProvider>
        <App />
      </NotesProvider>
    </TasksProvider>
  </StrictMode>
);
