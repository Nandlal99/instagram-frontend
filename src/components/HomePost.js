import React from 'react'
import FeedPosts from './FeedPosts';
import SuggestionPage from './SuggestionPage';

const HomePost = () => {
    return (
        <div className='flex justify-center gap-20 w-full'>
            <FeedPosts />
            <SuggestionPage />
        </div>
    )
}

export default HomePost