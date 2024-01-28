import React from 'react'

const FeedHead = ({ username, avatar }) => {
    return (
        <div className='flex  items-center justify-between my-2'>
            <div className='flex items-center gap-1 md:gap-2 text-gray-400 text-xs md:text-sm font-bold'>
                <img src={avatar} alt='avatar profile pic' className='w-6 h-6 rounded-2xl' />
                <p className='text-gray-200'>{username}</p>
                <p>.1w</p>
            </div>
            <div className='font-bold text-xs md:text-sm text-blue-400  hover:text-gray-200 transform:0.5s ease-in-out '>
                <button>Unfollow</button>
            </div>
        </div>
    )
}

export default FeedHead