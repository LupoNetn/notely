import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const AppLayout = () => {
  return (
   <>
    <div>
        <aside>
            <SideBar />
        </aside>

        <main>
            <Outlet />
        </main>
    </div>
   </>
  )
}

export default AppLayout
