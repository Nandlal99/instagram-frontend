import React, { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost';
// import profilePic1 from "../images/img1.png";
// import profilePic2 from "../images/img2.png";
// import profilePic3 from "../images/img3.png";
// import profilePic4 from "../images/img4.png";

const ProfilePosts = ({ post_details, baseURL }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    // console.log(post_details);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1'>
            {isLoading && [0, 1, 2].map((_, id) => (
                <div key={id} className='animate-pulse m-auto'>
                    <div className="h-52 w-56 bg-slate-600 rounded"></div>
                </div>
            ))}

            {!isLoading && (
                <>
                    {/* imageURL is hard coded, It come from backend   */}
                    {post_details?.map((value) => {
                        return <ProfilePost key={value?._id} img={baseURL + value?.imageUrl} />
                    })}

                    {/* <ProfilePost img={post_details?.imageURL} />
                    <ProfilePost img={profilePic1} />
                    <ProfilePost img={profilePic2} /> */}
                    {/* <ProfilePost img={profilePic3} /> */}
                    {/* <ProfilePost img={profilePic4} /> */}
                </>
            )}
        </div>
    )
}

export default ProfilePosts