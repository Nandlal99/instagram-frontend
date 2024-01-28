import React from 'react'
import SuggestionHead from './SuggestionHead'
import SuggestedUser from './SuggestedUser';
import profileLogo1 from "../images/img1.png";
import profileLogo2 from "../images/img2.png";
import profileLogo3 from "../images/img3.png";
import profileLogo4 from "../images/img4.png";

const SuggestionPage = () => {
    return (
        <div className='w-[240px] hidden lg:block mt-10'>
            <SuggestionHead />
            <div className='text-sm font-bold flex justify-between items-center mt-8'>
                <p className='text-gray-500'>Suggested for you</p>
                <p className='text-gray-200'>See All</p>
            </div>
            <SuggestedUser username="jack" avatar={profileLogo1} follower="1300" />
            <SuggestedUser username="monu" avatar={profileLogo2} follower="1020" />
            <SuggestedUser username="Anikta" avatar={profileLogo3} follower="1527" />
            <SuggestedUser username="goa" avatar={profileLogo4} follower="2567" />
            <div className='mt-5 mx-1'>
                <p className='text-sm font-medium text-gray-600'>
                    &copy; 2023 Build By<span className='text-blue-800'> As a Programmar</span>
                </p>
            </div>
        </div>
    )
}

export default SuggestionPage