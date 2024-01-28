import React from 'react';
import profileIcon from '../images/profileIcon.jpg';

const ProfileHeader = ({ name, email, profilePic, description, posts, follower, following }) => {
    return (
        <div className=' p-5 mx-auto sm:p-0 gap-5 sm:flex'>
            <img src={profilePic ? profilePic : profileIcon} alt='profile pic' className='w-24 h-24 rounded-full mx-5 my-2 sm:m-2' />
            <div className='flex-col text-xs mx-3 sm:mx-0  sm:text-sm text-gray-400'>
                <div className='flex gap-x-6 items-center'>
                    <p>{name ? name : "asaprogrammar_"}</p>
                    <button className='bg-slate-100 rounded text-gray-700 px-2 py-1'>Edit profile</button>
                </div>
                <div className='flex gap-x-4 my-1'>
                    <div className='flex gap-x-1'>
                        <p className='text-white'>{posts?.length}</p>
                        <p>Posts</p>
                    </div>
                    <div className='flex gap-x-1'>
                        <p className='text-white'>{follower?.length}</p>
                        <p>Followers</p>
                    </div>
                    <div className='flex gap-x-1'>
                        <p className='text-white'>{following?.length}</p>
                        <p>Following</p>
                    </div>
                </div>
                <p className='my-1 text-white'>{email ? email : "As a programmar"}</p>
                <p>{description ? description : "I am junior software engineer, love to do programming and web development."}</p>
            </div>
        </div>
    )
}

export default ProfileHeader