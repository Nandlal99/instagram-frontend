import React, { useEffect, useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../assets/constants'

const FeedFooter = ({ id, username, content, likesCount, isEachPostPage = false }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(likesCount);
    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }

    // useEffect(() => {
    //     if (liked) {
    //         const timer = setTimeout(() => {
    //             sendUserLikedPost();
    //         }, 2000);
    //     }
    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, [liked]);

    const sendUserLikedPost = async () => {
        const token = sessionStorage.getItem("token");
        const data = await fetch("/api/feed/post/updateLike", {
            method: "POST",
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId: id })
        });
        const json = await data.json();
        console.log(json);
    }

    return (
        <div className='flex-col mt-3  items-center pt-0 w-full'>
            <div className='flex gap-5 mb-2'>
                <div className='font-medium text-base' onClick={handleLike}>
                    {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
                </div>
                <CommentLogo />
            </div>
            <div className='text-gray-200 mb-2'>
                {likes} likes
            </div>
            {!isEachPostPage && (
                <>
                    <div className='text-sm mb-2'>
                        <p className='font-semibold text-gray-200'>{username + "_"}
                            <span className='font-normal text-gray-400 mx-1'>{content ? content : "This is a good vibe!"}</span>
                        </p>
                    </div>
                    <div className='text-sm text-gray-400 mb-2'>
                        <p>Views all the 1000 comments</p>
                    </div>
                </>
            )}
            <div className='flex w-full justify-between text-sm '>
                <input className='bg-slate-800 border-solid border-b-[1px]
                 border-gray-500 w-full focus:outline-none text-gray-400' placeholder='Add a comment...' />
                <button className='text-blue-400'>Post</button>
            </div>
        </div>
    )
}

export default FeedFooter