import React from 'react';
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

const ProfileTabs = () => {
    return (
        <div className='flex w-full justify-center gap-4 sm:gap-10 uppercase font-bold text-white'>
            <div className='flex border-t-[1px] border-solid border-white items-center gap-1 p-3 cursor-pointer'>
                <BsGrid3X3 className='text-lg' />
                <p className='text-xs hidden sm:block'>Posts</p>
            </div>

            <div className='flex border-solid border-white items-center gap-1 p-3 cursor-pointer'>
                <BsBookmark className='text-lg' />
                <p className='text-xs hidden sm:block'>Saved</p>
            </div>

            <div className='flex border-solid border-white items-center gap-1 p-3 cursor-pointer'>
                <BsSuitHeart className='text-lg' />
                <p className='text-xs hidden sm:block'>Likes</p>
            </div>
        </div>
    )
}

export default ProfileTabs