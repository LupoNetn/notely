import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import TopBar from './components/TopBar'
import AppLayout from './components/AppLayout'
import Dashboard from './components/Dashboard'
import Tasks from './components/Tasks'
import Notes from './components/Notes'
import Settings from './components/Settings'
import NoPage from './components/NoPage'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
    <TopBar />
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<NoPage />} />
      </Route>
     </Routes>
    </BrowserRouter>
    <Footer />
   </>
  )
}

export default App
