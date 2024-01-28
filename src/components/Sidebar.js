import React from 'react';
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../assets/constants';
import { AiFillHome } from "react-icons/ai";
import { IconContext } from 'react-icons/lib';
import profileLogo from "../images/img1.png";
import { SlLogout } from "react-icons/sl";
import { useNavigate } from "react-router-dom";



const Sidebar = () => {
    const nagivate = useNavigate();
    const handleLink = (path) => {
        nagivate(path);
    }
    const sidebarItems = [
        {
            icon: <IconContext.Provider value={{ color: "white" }} >
                <AiFillHome size={25} />
            </IconContext.Provider>,
            text: "Home",
            link: "/home"
        },
        {
            icon: <SearchLogo />,
            text: "Search",
            link: "/home"
        },
        {
            icon: <NotificationsLogo />,
            text: "Notification",
            link: "/home"
        },
        {
            icon: <CreatePostLogo />,
            text: "Create",
            link: "/home/createPost"
        },
        {
            icon: <img className='w-8 h-8 rounded-xl' src={profileLogo} alt='profile' />,
            text: "Profile",
            link: "/home/profile"
        }
    ];
    return (
        <div className='sticky w-[70px] md:w-[240px] h-[100vh] border-r-[1px] border-solid border-gray-600 py-4 top-0 left-0  px-2 md:px-4'>
            <div className='flex justify-center md:justify-start  items-center p-2 my-3 hover:bg-gray-600 hover:rounded-lg'>
                <a href='/home' className="hidden md:block"><InstagramLogo /></a>
                <a href='/home' className="block md:hidden"><InstagramMobileLogo /></a>
            </div>
            <div className='my-8 flex-col'>
                {sidebarItems.map((value, index) => {
                    return (
                        <div key={index} className='flex justify-center md:justify-start items-center p-2 gap-7 my-3 cursor-pointer hover:bg-gray-600 hover:rounded-lg' onClick={() => {
                            handleLink(value?.link)
                        }}>
                            <>{value.icon}</>
                            <p className='text-gray-300 hidden md:block'>{value.text}</p>
                        </div>)
                })}
            </div>

            <div className='flex justify-center md:justify-start items-center p-2 gap-7 mt-auto cursor-pointer hover:bg-gray-600 hover:rounded-lg'
                onClick={() => {
                    handleLink("/");
                    sessionStorage.clear();
                }}>
                <>
                    <IconContext.Provider value={{ color: "white" }} >
                        <SlLogout size={20} />
                    </IconContext.Provider>
                </>
                <p className='text-gray-300 hidden md:block'>Logout</p>
            </div>

        </div>
    )
}

export default Sidebar