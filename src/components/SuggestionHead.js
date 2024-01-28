import React from 'react'
import profileLogo from "../images/img1.png";

const SuggestionHead = () => {
    return (
        <div className='flex w-full items-center justify-between'>
            <img src={profileLogo} alt='profile' className='w-10 h-10 rounded-full' />
            <p className='text-sm font-bold text-gray-300'>asaprogrammar_</p>
            <button className='text-sm font-bold text-blue-400'>Logout</button>
        </div>
    )
}

export default SuggestionHead