import React from 'react'

const SuggestedUser = ({ username, avatar, follower }) => {
    return (
        <div className='flex justify-between items-center mt-3'>
            <div className='flex'>
                <img src={avatar} alt='profile' className='w-10 h-10 rounded-full' />
                <div className='flex-col ml-2 '>
                    <p className='text-sm text-gray-300 mb-[2px]'>{username}</p>
                    <p className='text-xs text-gray-600'>{follower} followers</p>
                </div>
            </div>
            <button className='font-semibold text-blue-400'>follow</button>
        </div>
    )
}

export default SuggestedUser