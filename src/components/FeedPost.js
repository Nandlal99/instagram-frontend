import React from 'react'
import FeedHead from './FeedHead'
import FeedFooter from './FeedFooter';

const FeedPost = ({ postImg, username, avatar, content, likes, id }) => {
    return (
        <div className='flex-col w-full mb-10'>
            <FeedHead username={username} avatar={avatar ? avatar : ""} />
            <div className='rounded overflow-hidden'>
                <img src={postImg ? postImg : ""} alt={username} />
            </div>
            <FeedFooter id={id} username={username} content={content} likesCount={likes?.length ? likes.length : 0} />
        </div>
    )
}

export default FeedPost