import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const AppLayout = () => {
  return (
   <>
    <div className='flex flex-col md:flex-row mt-4 md:mt-0 mb-4'>
        <aside>
            <SideBar />
        </aside>

        <main className='xl:ml-5 xl:pl-27 lg:ml-20 lg:pl-10 md:ml-19 md:pl-10 px-3 flex-1 bg-primary h-[100vh] p-7'>
            <Outlet />
        </main>
    </div>
   </>
  )
}

export default AppLayout
