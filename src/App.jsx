import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TopBar from "./components/TopBar";
import AppLayout from "./components/AppLayout";
import Dashboard from "./components/Dashboard";
import Tasks from "./components/Tasks";
import Notes from "./components/Notes";
import Settings from "./components/Settings";
import NoPage from "./components/NoPage";
import NotesCreation from "./components/NotesCreation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="md:px-5 relative">
        <TopBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/note-create" element={<NotesCreation />} />
              <Route path="/note-create/:id" element={<NotesCreation />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
};

export default App;
