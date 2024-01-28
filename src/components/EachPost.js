import React from 'react';
import postImg from "../images/img1.png";
import Comment from './Comment';
import FeedFooter from './FeedFooter';
// import { useParams } from 'react-router-dom';

const EachPost = () => {
    // const param = useParams();
    // const { postImg } = param
    return (
        <div className='h-auto md:max-h-screen md:flex m-auto md:p-8 p-2 py-4 gap-6 scroll-my-0'>
            <div className='md:w-2/3 mb-3 md:m-0'>
                <img src={postImg} alt='post pic' className='w-full h-full rounded' />
            </div>
            <div className='md:w-1/3'>
                <div className='flex m-auto gap-2 text-xs  text-white items-center'>
                    <img src={postImg} alt="user pic" className='w-10 h-10 rounded-md' />
                    <p>As a programmar</p>
                    <p className='text-gray-400'>post tag text !!!...</p>
                </div>
                <div className='h-[1px] bg-gray-600 my-4 w-full'></div>
                <div className='flex-col md:max-h-[350px] overflow-y-auto'>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
                <div className='mt-4'>
                    <FeedFooter isEachPostPage={true} />
                </div>
            </div>
        </div>
    )
}

export default EachPost