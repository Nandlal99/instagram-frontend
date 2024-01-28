import React from 'react'
import Sidebar from './Sidebar'
// import HomePost from './HomePost'
// import ProfilePage from './ProfilePage'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="flex h-auto w-screen bg-slate-800">
            <Sidebar />
            <Outlet />
            {/* <HomePost /> */}
            {/* <ProfilePage /> */}
        </div>
    )
}

export default HomePage