import React from 'react';
import userImg from "../images/img1.png";

const Comment = () => {
    return (
        <div className='flex w-full gap-4 my-3'>
            <img src={userImg} alt='user pic' className='w-8 h-8 rounded-xl' />
            <div className='flex-col text-xs text-white'>
                <p>asaprogrammar_</p>
                <p className='text-gray-400'>.1d ago</p>
            </div>
            <div className='w-full text-xs text-gray-400'>
                <p>A good vibe 😎  !!!</p>
            </div>
        </div>
    )
}

export default Comment