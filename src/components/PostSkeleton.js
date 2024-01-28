import React from 'react'

const PostSkeleton = () => {
    return (
        <div className='animate-pulse flex-col mb-5'>
            <div className='flex items-center gap-4 mb-2'>
                <div className='h-8 w-8 rounded-full bg-slate-600'></div>
                <div className="h-3 bg-slate-600 w-40 rounded-md"></div>
            </div>
            <div className="h-48 md:h-64 bg-slate-600 w-52  md:w-96 rounded-md"></div>
        </div>
    )
}

export default PostSkeleton